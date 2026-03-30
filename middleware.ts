import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") || "";

  const hostname = host.split(":")[0];
  const subdomain = hostname.split(".")[0];

  // IMPORTANT: change this according to your domain
  if (hostname === "profileforgeai.nextgraad.in") {
    url.pathname = `/app${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};