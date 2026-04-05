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
            <div style="background: #263a87; padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">NEXTGRAAD</h1>
              <p style="color: #ccc; margin: 5px 0 0;">Internship Division</p>
            </div>

            <div style="padding: 30px; background: #f9f9f9;">
              <h2 style="color: #263a87;">Dear ${name},</h2>
              <p>Congratulations! We are pleased to offer you an internship at <strong>Nextgraad</strong> as a <strong>${role} Intern</strong> in the <strong>${domain}</strong> domain.</p>

              <p>Your offer letter is attached to this email as a PDF.</p>

              <p>To get started, click the button below to access your internship portal where you can:</p>
              <ul>
                <li>Choose your project</li>
                <li>Select your preferred timeline (30 / 60 / 90 days)</li>
                <li>Track your progress and submit your work</li>
              </ul>

              <div style="text-align: center; margin: 30px 0;">
                <a href="${magicLink}"
                  style="background: #263a87; color: white; padding: 14px 32px;
                  text-decoration: none; border-radius: 6px; font-size: 16px;">
                  Access Internship Portal
                </a>
              </div>

              <p style="color: #999; font-size: 12px;">This link is valid for 7 days. If it expires, contact us for a new one.</p>
            </div>

            <div style="background: #263a87; padding: 15px; text-align: center;">
              <p style="color: white; margin: 0; font-size: 12px;">Nextgraad Internship Team</p>
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
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}