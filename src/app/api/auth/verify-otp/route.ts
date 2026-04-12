import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabase'

export async function POST(req: NextRequest) {
  const { email, otp } = await req.json()

  if (!email || !otp) {
    return NextResponse.json({ error: 'Email and OTP required' }, { status: 400 })
  }

  const { data: intern, error } = await supabase
    .from('interns')
    .select('id, name, otp, otp_expires_at, status')
    .eq('email', email.toLowerCase().trim())
    .single()

  if (error || !intern) {
    return NextResponse.json({ error: 'Account not found.' }, { status: 404 })
  }

  // Check OTP matches
  if (intern.otp !== otp) {
    return NextResponse.json({ error: 'Incorrect OTP. Please try again.' }, { status: 400 })
  }

  // Check OTP not expired
  const now = new Date()
  const expiry = new Date(intern.otp_expires_at)
  if (now > expiry) {
    return NextResponse.json({ error: 'OTP expired. Please request a new one.' }, { status: 400 })
  }

  // Clear OTP after use
  await supabase
    .from('interns')
    .update({
      otp: null,
      otp_expires_at: null,
      status: intern.status === 'pending' ? 'active' : intern.status
    })
    .eq('id', intern.id)

  // Set cookie
  const response = NextResponse.json({ success: true })
  response.cookies.set('intern_id', intern.id, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 60, // 60 days
    path: '/',
  })

  return response
}