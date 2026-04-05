import { cookies } from 'next/headers'
import { supabase } from '../lib/supabase'

export async function getCurrentIntern() {
  const cookieStore = await cookies()
  const internId = cookieStore.get('intern_id')?.value

  if (!internId) return null

  const { data: intern, error } = await supabase
    .from('interns')
    .select('*')
    .eq('id', internId)
    .single()

  if (error || !intern) return null

  return intern
}

export async function getInternProject(internId: string) {
  const { data, error } = await supabase
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

  if (error) return null
  return data
}