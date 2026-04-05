import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabase'
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies()
    const internId = cookieStore.get('intern_id')?.value

    if (!internId) {
      return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
    }

    const body = await req.json()

    const projectId = body.projectId
    const projectTitle = body.projectTitle
    const projectDomain = body.projectDomain
    const timelineDays = body.timelineDays

    if (!projectId || !timelineDays) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Check if intern already selected project
    const { data: existing, error: existingError } = await supabase
      .from('intern_projects')
      .select('id')
      .eq('intern_id', internId)
      .maybeSingle()

    if (existingError) {
      console.error('[choose-project] existing check error:', existingError)
      return NextResponse.json({ error: existingError.message }, { status: 500 })
    }

    if (existing) {
      return NextResponse.json(
        { error: 'Project already selected' },
        { status: 400 }
      )
    }

    const startDate = new Date()
    const unlockDate = new Date()
    unlockDate.setDate(unlockDate.getDate() + Number(timelineDays))

    // Insert project row
    const { data: projectRow, error: projectError } = await supabase
      .from('projects')
      .insert({
        title: projectTitle ?? projectId,
        description: `${projectDomain ?? ''} internship project`,
        domain: projectDomain ?? '',
        difficulty: 'Intermediate',
      })
      .select('id')
      .single()

    if (projectError || !projectRow) {
      console.error('[choose-project] project insert error:', projectError)
      return NextResponse.json(
        { error: projectError?.message || 'Failed to create project' },
        { status: 500 }
      )
    }

    // Insert intern_projects record
    const { error: insertError } = await supabase
      .from('intern_projects')
      .insert({
        intern_id: internId,
        project_id: projectRow.id,
        timeline_days: Number(timelineDays),
        start_date: startDate.toISOString(),
        unlock_date: unlockDate.toISOString(),
        status: 'in_progress',
      })

    if (insertError) {
      console.error('[choose-project] intern_projects insert error:', insertError)
      return NextResponse.json(
        { error: insertError.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('[choose-project] fatal error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}