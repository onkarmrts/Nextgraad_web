export const runtime = 'nodejs'
import { NextRequest, NextResponse } from 'next/server'
import * as XLSX from 'xlsx'
import { supabase } from '../../../../lib/supabase'
import { sendEmail } from '../../../../lib/mailer'
import { generateOfferLetter } from '../../../../lib/pdf'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    

    // Read Excel file
    const arrayBuffer = await file.arrayBuffer()
    const workbook = XLSX.read(arrayBuffer, { type: 'array' })
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    const rows = XLSX.utils.sheet_to_json(sheet) as any[]

    const results = []

    for (const row of rows) {
      const name = row['Name']
      const email = row['Email']
      const phone = row['Phone'] || ''
      const college = row['College'] || ''
      const role = row['Role'] || 'Intern'
      const domain    = row['Domain'] || 'General'
      const duration  = Number(row['Duration']) || 30

      if (!name || !email) continue

      // Generate magic token
      const magicToken = uuidv4()
      const tokenExpiry = new Date()
      tokenExpiry.setDate(tokenExpiry.getDate() + 7) // 7 days


      
      // Save intern to Supabase
      const { data: intern, error } = await supabase
        .from('interns')
        .upsert({
          name,
          email,
          phone,
          college,
          role,
          domain,
          magic_token: magicToken,
          token_expires_at: tokenExpiry.toISOString(),
          status: 'pending',
        }, { onConflict: 'email' })
        .select()
        .single()

      if (error) {
        console.error(`Error saving intern ${email}:`, error)
        results.push({ email, status: 'failed', error: error.message })
        continue
      }

      // Generate offer letter PDF
  // Generate offer letter PDF
     const pdfBuffer = await generateOfferLetter({
  name,
  role,
  domain,
  college,
  date: new Date().toDateString(),
  internId: intern.id,
  duration,
})

      // Magic link URL
     const magicLink = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/verify?token=${magicToken}`


      
      // Send email with PDF attached
      await sendEmail({
        to: email,
        subject: `🎉 Internship Offer Letter — Nextgraad`,
        html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background: #1E2060; padding: 30px; text-align: center;">
      <h1 style="color: white; margin: 0;">NEXTGRAAD</h1>
      <p style="color: #ccc; margin: 5px 0 0;">Internship Division</p>
    </div>

    <div style="padding: 30px; background: #f9f9f9;">
      <h2 style="color: #1E2060;">Dear ${name},</h2>
      <p>Congratulations! We are pleased to offer you an internship at <strong>Nextgraad</strong> as a <strong>${role} Intern</strong> in the <strong>${domain}</strong> domain.</p>
      <p>Your official offer letter is attached to this email as a PDF.</p>

      <!-- Internship Info -->
      <div style="background: #fff; border-left: 4px solid #BF1F7F; padding: 16px 20px; margin: 20px 0; border-radius: 4px;">
        <h3 style="color: #1E2060; margin: 0 0 10px;">📋 Internship Details</h3>
        <table style="width: 100%; font-size: 14px; color: #333;">
          <tr><td style="padding: 4px 0; color: #666;">Role</td><td><strong>${role} Intern</strong></td></tr>
          <tr><td style="padding: 4px 0; color: #666;">Domain</td><td><strong>${domain}</strong></td></tr>
          <tr><td style="padding: 4px 0; color: #666;">Duration</td><td><strong>${duration} Days</strong></td></tr>
          <tr><td style="padding: 4px 0; color: #666;">Mode</td><td><strong>Remote / Work From Home</strong></td></tr>
          <tr><td style="padding: 4px 0; color: #666;">Start</td><td><strong>Upon Portal Activation</strong></td></tr>
        </table>
      </div>

      <!-- Portal Info -->
      <div style="background: #fff; border-left: 4px solid #E8452A; padding: 16px 20px; margin: 20px 0; border-radius: 4px;">
        <h3 style="color: #1E2060; margin: 0 0 10px;">🖥️ Your Internship Portal</h3>
        <p style="font-size: 14px; color: #444; margin: 0 0 8px;">Once you click the activation link below, you'll get access to your personal intern dashboard where you can:</p>
        <ul style="font-size: 14px; color: #444; margin: 0; padding-left: 18px; line-height: 1.9;">
          <li>Choose your internship project</li>
          <li>Select your preferred timeline (30 / 60 / 90 days)</li>
          <li>Track your daily progress</li>
          <li>Submit your work and deliverables</li>
          <li>Download your completion certificate upon finishing</li>
          <li>🔁 After your first login via the magic link below, you can return to your portal anytime at:
            <a href="https://www.nextgraad.in/portal/dashboard" style="color: #1E2060; font-weight: bold;">
              nextgraad.in/portal/dashboard
            </a>
          </li>
        </ul>
      </div>

      <!-- Good to Know -->
      <div style="background: #fff3e0; border-left: 4px solid #E8452A; padding: 16px 20px; margin: 20px 0; border-radius: 4px;">
        <h3 style="color: #1E2060; margin: 0 0 10px;">📌 Good to Know</h3>
        <ul style="font-size: 14px; color: #444; margin: 0; padding-left: 18px; line-height: 1.9;">
          <li>
            <strong>Submission Unlock:</strong> Your final project submission will be automatically unlocked once your internship duration of <strong>${duration} days</strong> is complete.
          </li>
          <li style="margin-top: 10px;">
            <strong>Share on LinkedIn 🎉</strong> — We'd love to celebrate with you! Feel free to share your offer letter on LinkedIn and tag us:
            <ul style="margin-top: 6px; line-height: 1.9;">
              <li>
                🏢 <strong>Nextgraad:</strong>
                <a href="https://www.linkedin.com/company/nextgraad/" style="color: #0077B5;">linkedin.com/company/nextgraad</a>
              </li>
              <li>
                👤 <strong>Our Founder:</strong>
                <a href="https://www.linkedin.com/in/onkar-mathapati" style="color: #0077B5;">Onkar Mathapati</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- CTA Button -->
      <div style="text-align: center; margin: 30px 0;">
        <a href="${magicLink}"
          style="background: #1E2060; color: white; padding: 14px 32px;
          text-decoration: none; border-radius: 6px; font-size: 16px; display: inline-block;">
          🚀 Activate Your Intern Portal
        </a>
      </div>

      <p style="font-weight: bold; color: #d32f2f; font-size: 13px; text-align: center;">
        ⚠️ This link is tied to your registered email (${email}). Do not open from a different Google account.
      </p>
      <p style="color: #999; font-size: 12px; text-align: center;">
        Link valid for 7 days. Contact us if it expires.
      </p>

      <!-- Support Section -->
      <div style="background: #fff; border: 1px solid #e0e0e0; padding: 16px 20px; margin: 24px 0; border-radius: 6px; text-align: center;">
        <h3 style="color: #1E2060; margin: 0 0 12px;">📞 Need Help? Contact Us</h3>
        <p style="font-size: 14px; color: #444; margin: 0 0 14px;">Our team is available to assist you with any queries.</p>

        <a href="tel:+917400179704"
          style="display: inline-block; background: #1E2060; color: white; padding: 10px 24px;
          text-decoration: none; border-radius: 6px; font-size: 14px; margin: 6px;">
          📱 Call Us: +91 74001 79704
        </a>

        <a href="https://wa.me/917400179704?text=Hi%20Nextgraad%2C%20I%20need%20help%20with%20my%20internship."
          style="display: inline-block; background: #25D366; color: white; padding: 10px 24px;
          text-decoration: none; border-radius: 6px; font-size: 14px; margin: 6px;">
          💬 WhatsApp Us
        </a>
      </div>
    </div>

    <div style="background: #1E2060; padding: 15px; text-align: center;">
      <p style="color: white; margin: 0; font-size: 12px;">© ${new Date().getFullYear()} Nextgraad Internship Team · nextgraad.in</p>
    </div>
  </div>
`,
        attachments: [
          {
            filename: `Offer-Letter-${name.replace(/ /g, '-')}.pdf`,
            content: pdfBuffer,
            contentType: 'application/pdf',
          },
        ],
      })

      results.push({ email, status: 'sent' })
    }

    return NextResponse.json({
      success: true,
      total: rows.length,
      results,
    })

  } catch (error) {
    console.error('Upload error:', error)
    console.error('Error details:', JSON.stringify(error, null, 2))  // ADD THIS
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}