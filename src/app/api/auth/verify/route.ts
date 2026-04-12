import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../../lib/supabase";

export async function GET(req: NextRequest) {
  try {
    const token = req.nextUrl.searchParams.get("token");

    // If no token -> redirect login
    if (!token) {
      return NextResponse.redirect(new URL("/portal/login", req.url));
    }

    // Find intern with this token
    const { data: intern, error } = await supabase
      .from("interns")
      .select("*")
      .eq("magic_token", token)
      .single();

    // If token invalid -> redirect login (NOT invalid page)
    if (error || !intern) {
      return NextResponse.redirect(new URL("/portal/login", req.url));
    }

    // Check expiry
    const now = new Date();
    const expiry = new Date(intern.token_expires_at);

    if (now > expiry) {
      // Expired -> redirect login (NOT expired page)
      return NextResponse.redirect(new URL("/portal/login", req.url));
    }

    // Mark intern active (but DO NOT delete token)
    await supabase
      .from("interns")
      .update({
        status: "active",
      })
      .eq("id", intern.id);

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

    return response;
  } catch (err) {
    return NextResponse.redirect(new URL("/portal/login", req.url));
  }
}