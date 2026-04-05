import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabase } from '../../../../lib/supabase'

export async function GET() {
  const cookieStore = await cookies()
  const internId = cookieStore.get('intern_id')?.value

  if (!internId) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
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
  const { data: internProject } = await supabase
    .from('intern_projects')
    .select(`
      *,
      projects (
        id,
        title,
        description,
        domain,
        difficulty
      )
    `)
    .eq('intern_id', internId)
    .single()

  // Calculate days remaining and unlock status
  let daysRemaining = null
  let isUnlocked = false

  if (internProject) {
    const now = new Date()
    const unlockDate = new Date(internProject.unlock_date)
    const diff = unlockDate.getTime() - now.getTime()
    daysRemaining = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
    isUnlocked = now >= unlockDate
  }

  return NextResponse.json({
    intern,
    internProject,
    daysRemaining,
    isUnlocked,
  })
}