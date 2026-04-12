import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../../lib/supabase";

export async function GET(req: NextRequest) {
  try {
    const token = req.nextUrl.searchParams.get("token");

    if (!token) {
      return NextResponse.redirect(new URL("/portal/login", req.url));
    }

    // Find intern
    const { data: intern, error } = await supabase
      .from("interns")
      .select("*")
      .eq("magic_token", token)
      .single();

    // invalid token -> go login
    if (error || !intern) {
      return NextResponse.redirect(new URL("/portal/login", req.url));
    }

    // expiry check
    const now = new Date();
    const expiry = new Date(intern.token_expires_at);

    if (now > expiry) {
      return NextResponse.redirect(new URL("/portal/login", req.url));
    }

    // Set cookie and redirect dashboard
    const response = NextResponse.redirect(
      new URL("/portal/dashboard", req.url)
    );

    response.cookies.set("intern_id", intern.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    // IMPORTANT: delete token after successful use (one-time)
    await supabase
      .from("interns")
      .update({
        status: "active",
        magic_token: null,
        token_expires_at: null,
      })
      .eq("id", intern.id);

    return response;
  } catch (err) {
    return NextResponse.redirect(new URL("/portal/login", req.url));
  }
}