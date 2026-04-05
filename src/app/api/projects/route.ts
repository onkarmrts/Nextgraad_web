import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabase } from '../../../lib/supabase'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const internId = cookieStore.get('intern_id')?.value

    if (!internId) {
      return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
    }

    // Get intern domain
    const { data: intern, error: internError } = await supabase
      .from('interns')
      .select('domain')
      .eq('id', internId)
      .maybeSingle()

    if (internError) {
      console.error('[projects] intern fetch error:', internError)
      return NextResponse.json({ error: internError.message }, { status: 500 })
    }

    if (!intern?.domain) {
      return NextResponse.json({ projects: [] })
    }

    // Fetch projects matching intern domain
    const { data: projects, error } = await supabase
      .from('projects')
      .select('*')
      .ilike('domain', `%${intern.domain}%`)
      .order('created_at', { ascending: true })

    if (error) {
      console.error('[projects] fetch projects error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ projects: projects || [] })
  } catch (err: any) {
    console.error('[projects] fatal error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}