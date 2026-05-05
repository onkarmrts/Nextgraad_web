'use server'

import { cookies } from 'next/headers'

export async function authenticate(password: string) {
  const correctPassword = process.env.NEXTGRAAD_PASSWORD

  if (!correctPassword) {
    return { success: false as const, error: 'Password not configured' }
  }

  if (password === correctPassword) {
    const cookieStore = await cookies()
    cookieStore.set('nextgraad-auth', password, {
      maxAge: 86400, // 24 hours
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/'
    })
    return { success: true as const }
  }

  return { success: false as const, error: 'Invalid password' }
}