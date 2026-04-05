// app/api/verify/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'

export async function GET(req: NextRequest) {
  const id   = req.nextUrl.searchParams.get('id')
  const type = req.nextUrl.searchParams.get('type')

  if (!id || !type) {
    return NextResponse.json({ valid: false, reason: 'Missing parameters' }, { status: 400 })
  }

  const { data: intern, error: internError } = await supabase
    .from('interns')
    .select('id, name, email, role, domain, college, status, created_at')
    .eq('id', id)
    .single()

  if (internError || !intern) {
    return NextResponse.json({ valid: false, reason: 'Document not found' }, { status: 404 })
  }

  if (type === 'certificate') {
    const { data: internProject, error: projectError } = await supabase
      .from('intern_projects')
      .select('status, timeline_days, submitted_at, projects(title)')
      .eq('intern_id', id)
      .in('status', ['submitted', 'certified'])
      .single()

    if (projectError || !internProject) {
      return NextResponse.json({
        valid: false,
        reason: 'Certificate not found or project not submitted',
      }, { status: 404 })
    }

    return NextResponse.json({
      valid: true,
      type: 'certificate',
      intern: {
        name:    intern.name,
        role:    intern.role,
        domain:  intern.domain,
        college: intern.college,
      },
      project: {
        title:         (internProject.projects as any)?.title ?? '',
        timeline_days: internProject.timeline_days,
        submitted_at:  internProject.submitted_at,
      },
      certNumber: `NG-CERT-${id.slice(0, 8).toUpperCase()}`,
      issuedAt:   internProject.submitted_at,
    })
  }

  // Offer letter
  const validStatuses = ['active', 'submitted', 'completed']
  if (!validStatuses.includes(intern.status)) {
    return NextResponse.json({ valid: false, reason: 'Document not valid' }, { status: 404 })
  }

  return NextResponse.json({
    valid: true,
    type: 'offer',
    intern: {
      name:    intern.name,
      role:    intern.role,
      domain:  intern.domain,
      college: intern.college,
    },
    docNumber: `NG-OL-${id.slice(0, 8).toUpperCase()}`,
    issuedAt:  intern.created_at,
  })
}