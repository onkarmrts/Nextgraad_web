import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const internId = req.cookies.get('intern_id')?.value

  if (!internId) {
    // Redirect to invalid/login page if no cookie
    const url = req.nextUrl.clone()
    url.pathname = '/auth/invalid'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Apply ONLY to these portal routes
export const config = {
  matcher: [
    '/portal/dashboard',
    '/portal/projects',
    '/portal/submit',
  ],
}