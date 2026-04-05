export const runtime = 'nodejs'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabase } from '../../../../lib/supabase'
import { generateCertificate } from '../../../../lib/pdf'
import { sendEmail } from '../../../../lib/mailer'

export async function POST(req: NextRequest) {
  const cookieStore = await cookies()
  const internId = cookieStore.get('intern_id')?.value

  if (!internId) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  const { projectLink } = await req.json()

  if (!projectLink) {
    return NextResponse.json({ error: 'Project link is required' }, { status: 400 })
  }

  // Get intern details
  const { data: intern, error: internError } = await supabase
    .from('interns')
    .select('*')
    .eq('id', internId)
    .single()

  if (internError || !intern) {
    return NextResponse.json({ error: 'Intern not found' }, { status: 404 })
  }

  // Get intern project
  const { data: internProject, error: projectError } = await supabase
    .from('intern_projects')
    .select(`*, projects (title, description, domain, difficulty)`)
    .eq('intern_id', internId)
    .single()

  if (projectError || !internProject) {
    return NextResponse.json({ error: 'No project found' }, { status: 404 })
  }

  // Check if submission is unlocked
  const now = new Date()
  const unlockDate = new Date(internProject.unlock_date)

  if (now < unlockDate) {
    return NextResponse.json({ error: 'Submission not unlocked yet' }, { status: 403 })
  }

  // Check if already submitted
  if (internProject.status === 'submitted' || internProject.status === 'certified') {
    return NextResponse.json({ error: 'Already submitted' }, { status: 400 })
  }

  // Update project record
  await supabase
    .from('intern_projects')
    .update({
      project_link: projectLink,
      submitted_at: now.toISOString(),
      status: 'submitted',
    })
    .eq('id', internProject.id)

  // Generate certificate PDF
  const completionDate = now.toDateString()

 const certificatePdf = await generateCertificate({
    name:          intern.name,
    role:          intern.role,
    domain:        intern.domain,
    timeline_days: internProject.timeline_days,   // ← was 'timeline'
    internId:      internId,                       // ← add this
    submitted_at:  now.toISOString(),              // ← replaces 'completionDate'
  })

  // Save certificate to Supabase storage
  const fileName = `certificates/${internId}-certificate.pdf`

  await supabase.storage
    .from('documents')
    .upload(fileName, certificatePdf, {
      contentType: 'application/pdf',
      upsert: true,
    })

  // Save document record in DB
  await supabase
    .from('documents')
    .insert({
      intern_id: internId,
      type: 'certificate',
      storage_path: fileName,
      issued_at: now.toISOString(),
    })

  // Update intern status
  await supabase
    .from('interns')
    .update({ status: 'completed' })
    .eq('id', internId)

  // Send certificate email
  await sendEmail({
    to: intern.email,
    subject: '🏆 Your Internship Certificate — Nextgraad',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #263a87; padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">NEXTGRAAD</h1>
          <p style="color: #ccc; margin: 5px 0 0;">Internship Division</p>
        </div>

        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #263a87;">Congratulations, ${intern.name}! 🎉</h2>
          <p>You have successfully completed your <strong>${internProject.timeline_days}-day</strong> internship as a <strong>${intern.role} Intern</strong> in the <strong>${intern.domain}</strong> domain.</p>
          <p>Your certificate of completion is attached to this email.</p>
          <p>You can also download it anytime from your internship portal.</p>

          <div style="background: #f0fff4; border: 1px solid #b2f5c8; border-radius: 8px; padding: 16px; margin: 20px 0;">
            <p style="margin: 0; color: #1a7a3a;">
              <strong>Project submitted:</strong> ${internProject.projects.title}<br/>
              <strong>Completion date:</strong> ${completionDate}
            </p>
          </div>

          <p>We wish you all the best in your career ahead!</p>
        </div>

        <div style="background: #263a87; padding: 15px; text-align: center;">
          <p style="color: white; margin: 0; font-size: 12px;">Nextgraad Internship Team</p>
        </div>
      </div>
    `,
    attachments: [
      {
        filename: `Certificate-${intern.name.replace(/ /g, '-')}.pdf`,
        content: certificatePdf,
        contentType: 'application/pdf',
      },
    ],
  })

  return NextResponse.json({ success: true })
}