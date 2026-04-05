import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabase'

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/auth/invalid', req.url))
  }

  // Find intern with this token
  const { data: intern, error } = await supabase
    .from('interns')
    .select('*')
    .eq('magic_token', token)
    .single()

  if (error || !intern) {
    return NextResponse.redirect(new URL('/auth/invalid', req.url))
  }

  // Check if token is expired
  const now = new Date()
  const expiry = new Date(intern.token_expires_at)

  if (now > expiry) {
    return NextResponse.redirect(new URL('/auth/expired', req.url))
  }

  // Mark intern as active
// Mark intern as active AND delete the token so it can't be reused
await supabase
  .from('interns')
  .update({
    status: 'active',
    magic_token: null,
    token_expires_at: null,
  })
  .eq('id', intern.id)

  // Redirect to portal with intern id in cookie
  const response = NextResponse.redirect(new URL('/portal/dashboard', req.url))

  response.cookies.set('intern_id', intern.id, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  })

  return response
}