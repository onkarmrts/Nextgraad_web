import { sendEmail } from '../../../lib/mailer'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await sendEmail({
      to: 'mathapationkar59@gmail.com',
      subject: 'Test from Internship Portal',
      html: '<h2>It works! 🎉</h2><p>Gmail API is connected.</p>',
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Email failed' }, { status: 500 })
  }
}