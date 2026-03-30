import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  // Example: app.nextgraad.in
  const subdomain = hostname.split(".")[0];

  // If subdomain is "app"
  if (subdomain === "profileforge") {
    url.pathname = `/profileforge${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // If subdomain is "crm"
  if (subdomain === "crm") {
    url.pathname = `/crm${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};