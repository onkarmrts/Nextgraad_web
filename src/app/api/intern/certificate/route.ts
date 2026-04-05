// app/api/intern/certificate/route.ts
export const runtime = 'nodejs'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabase } from '../../../../lib/supabase'
import { generateCertificate } from '../../../../lib/pdf'

export async function GET() {
  const cookieStore = await cookies()
  const internId = cookieStore.get('intern_id')?.value

  if (!internId) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  const { data: intern, error: internError } = await supabase
    .from('interns')
    .select('*')
    .eq('id', internId)
    .single()

  if (internError || !intern) {
    return NextResponse.json({ error: 'Intern not found' }, { status: 404 })
  }

  const { data: internProject, error: projectError } = await supabase
    .from('intern_projects')
    .select('*, projects(*)')
    .eq('intern_id', internId)
    .in('status', ['submitted', 'certified'])
    .single()

  if (projectError || !internProject) {
    return NextResponse.json(
      { error: 'Certificate not available — project not submitted yet' },
      { status: 403 }
    )
  }

  const pdfBuffer = await generateCertificate({
    name:          intern.name,
    role:          intern.role,
    domain:        intern.domain,
    timeline_days: internProject.timeline_days,
    internId:      intern.id,                    // ← UUID for QR + cert number
    submitted_at:  internProject.submitted_at,   // ← for completion date
  })

  const pdfBytes = new Uint8Array(pdfBuffer)

  return new NextResponse(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="Certificate-${intern.name.replace(/ /g, '-')}.pdf"`,
    },
  })
}