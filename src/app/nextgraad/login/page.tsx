'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authenticate } from './actions'

type AuthResult = { success: true } | { success: false; error: string }

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result: AuthResult = await authenticate(password)

    if (result.success) {
      router.push('/app/nextgraad/leads')
    } else {
      setError(result.error)
      setPassword('')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Nextgraad</h1>
        <p className="text-sm text-slate-500 mb-6">Leads Dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              autoFocus
              disabled={loading}
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-medium rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Access Leads'}
          </button>
        </form>
      </div>
    </div>
  )
}