import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabase } from '../../../../lib/supabase'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const internId = cookieStore.get('intern_id')?.value

    if (!internId) {
      return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
    }

    const { data, error } = await supabase
      .from('intern_projects')
      .select('id, project_id, projects(*)')
      .eq('intern_id', internId)
      .maybeSingle()

    if (error) {
      console.error('[my-project] error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    if (!data) {
      return NextResponse.json({ project: null })
    }

    return NextResponse.json({
      project: data.projects,
      internProject: {
        id: data.id,
        project_id: data.project_id,
      },
    })
  } catch (err: any) {
    console.error('[my-project] fatal:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}