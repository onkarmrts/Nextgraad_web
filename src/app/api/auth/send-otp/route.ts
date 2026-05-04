import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabase'
import { sendEmail } from '../../../../lib/mailer'

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Check intern exists
    const { data: intern, error: fetchError } = await supabase
      .from('interns')
      .select('id, name, email')
      .eq('email', email.toLowerCase().trim())
      .single()

    if (fetchError || !intern) {
      console.error('Intern lookup failed:', fetchError)
      return NextResponse.json({ error: 'No account found with this email.' }, { status: 404 })
    }

    // Generate OTP
    const otp = generateOTP()
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 10)

    // ✅ Check if OTP was actually saved
    const { error: updateError } = await supabase
      .from('interns')
      .update({ otp, otp_expires_at: expires.toISOString() })
      .eq('id', intern.id)

    if (updateError) {
      console.error('Failed to save OTP:', updateError)
      return NextResponse.json({ error: 'Failed to generate OTP. Try again.' }, { status: 500 })
    }

    // ✅ Await and catch email errors separately
    await sendEmail({
      to: intern.email,
      subject: 'Your Nextgraad Login OTP',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
          <div style="background: #1a1f59; padding: 24px; text-align: center;">
            <h2 style="color: white; margin: 0;">NEXTGRAAD</h2>
            <p style="color: #aab4d4; margin: 4px 0 0; font-size: 13px;">Internship Portal</p>
          </div>
          <div style="padding: 32px; background: #f9f9f9;">
            <p style="margin: 0 0 8px;">Hi ${intern.name},</p>
            <p style="color: #555;">Your one-time login code is:</p>
            <div style="background: white; border: 2px solid #1a1f59; border-radius: 10px;
                        padding: 24px; text-align: center; margin: 20px 0;">
              <span style="font-size: 42px; font-weight: 800; color: #1a1f59;
                           letter-spacing: 10px;">${otp}</span>
            </div>
            <p style="color: #888; font-size: 13px;">
              This code expires in <strong>10 minutes</strong>.<br/>
              If you didn't request this, ignore this email.
            </p>
          </div>
          <div style="background: #1a1f59; padding: 14px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 12px;">
              Nextgraad · info@nextgraad.in · www.nextgraad.in
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (err) {
    // ✅ This will now surface the real error
    console.error('OTP send error:', err)
  return NextResponse.json(
  { error: 'Internal server error', detail: (err as Error).message },
  { status: 500 }
)
  }
}