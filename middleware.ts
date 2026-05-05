import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  console.log('🔍 Middleware check:', pathname)

  // Check nextgraad leads route
  if (pathname === '/app/nextgraad/leads' || pathname.startsWith('/app/nextgraad/leads/')) {
    const token = request.cookies.get('nextgraad-auth')?.value
    console.log('📋 Token found:', !!token)

    if (!token) {
      console.log('❌ No token - redirecting to login')
      return NextResponse.redirect(new URL('/app/nextgraad/login', request.url))
    }
  }

  // Portal routes check
  if (pathname.startsWith('/portal')) {
    const internId = request.cookies.get('intern_id')?.value
    if (!internId) {
      return NextResponse.redirect(new URL('/auth/invalid', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/app/nextgraad/leads', '/app/nextgraad/leads/:path*', '/portal/:path*']
}