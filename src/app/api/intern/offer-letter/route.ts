// app/api/intern/offer-letter/route.ts
export const runtime = 'nodejs'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabase } from '../../../../lib/supabase'
import { generateOfferLetter } from '../../../../lib/pdf'

export async function GET() {
  const cookieStore = await cookies()
  const internId = cookieStore.get('intern_id')?.value

  if (!internId) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  const { data: intern, error } = await supabase
    .from('interns')
    .select('*')
    .eq('id', internId)
    .single()

  if (error || !intern) {
    return NextResponse.json({ error: 'Intern not found' }, { status: 404 })
  }

  // Fetch intern project to get timeline_days for duration
  const { data: internProject } = await supabase
    .from('intern_projects')
    .select('timeline_days')
    .eq('intern_id', internId)
    .single()

  try {
    const pdfBuffer = await generateOfferLetter({
      name:     intern.name,
      role:     intern.role,
      domain:   intern.domain,
      college:  intern.college,
      date:     new Date().toDateString(),
      internId: intern.id,
      duration: internProject?.timeline_days ?? 90,  // ← fallback to 90 if no project chosen yet
    })

    const pdfBytes = new Uint8Array(pdfBuffer)

    return new NextResponse(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Offer-Letter-${intern.name.replace(/ /g, '-')}.pdf"`,
      },
    })
  } catch (err) {
    console.error('[Offer Letter] Generation failed:', err)
    return NextResponse.json({ error: 'PDF generation failed' }, { status: 500 })
  }
}