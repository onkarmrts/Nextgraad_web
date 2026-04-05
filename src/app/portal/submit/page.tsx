'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SubmitPage() {
  const router = useRouter()
  const [projectLink, setProjectLink] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = async () => {
    if (!projectLink.trim()) {
      setError('Please enter your project link.')
      return
    }

    if (!projectLink.startsWith('http')) {
      setError('Please enter a valid URL starting with http:// or https://')
      return
    }

    setSubmitting(true)
    setError('')

    const res = await fetch('/api/intern/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectLink }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error || 'Something went wrong')
      setSubmitting(false)
      return
    }

    setDone(true)
  }

  if (done) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        background: '#f0f4ff'
      }}>
        <div style={{
          background: 'white',
          borderRadius: 12,
          padding: 40,
          maxWidth: 480,
          textAlign: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
        }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🏆</div>
          <h2 style={{ color: '#1a7a3a' }}>Project Submitted!</h2>
          <p style={{ color: '#666', marginBottom: 24 }}>
            Your certificate has been sent to your email.
            You can also download it from your dashboard.
          </p>
          <button
            onClick={() => router.push('/portal/dashboard')}
            style={{
              background: '#263a87',
              color: 'white',
              border: 'none',
              padding: '12px 32px',
              borderRadius: 8,
              fontSize: 15,
              cursor: 'pointer',
            }}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      background: '#f0f4ff',
      padding: 20,
    }}>
      <div style={{
        background: 'white',
        borderRadius: 12,
        padding: 40,
        width: '100%',
        maxWidth: 500,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
      }}>
        <h1 style={{ color: '#263a87', marginTop: 0 }}>Submit Your Project</h1>
        <p style={{ color: '#666' }}>
          Paste your GitHub repository link or live project URL below.
        </p>

        <label style={{ display: 'block', marginBottom: 8, color: '#333', fontWeight: 'bold' }}>
          Project Link
        </label>
        <input
          type="url"
          placeholder="https://github.com/yourname/project"
          value={projectLink}
          onChange={e => setProjectLink(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 14px',
            borderRadius: 8,
            border: '1px solid #ddd',
            fontSize: 15,
            marginBottom: 20,
            boxSizing: 'border-box',
          }}
        />

        {error && (
          <div style={{
            background: '#fff0f0',
            border: '1px solid #ffcccc',
            borderRadius: 6,
            padding: 12,
            color: '#cc0000',
            marginBottom: 16,
            fontSize: 14,
          }}>
            {error}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={submitting}
          style={{
            background: submitting ? '#999' : '#1a7a3a',
            color: 'white',
            border: 'none',
            padding: '14px 32px',
            borderRadius: 8,
            fontSize: 16,
            cursor: submitting ? 'not-allowed' : 'pointer',
            width: '100%',
          }}
        >
          {submitting ? 'Submitting...' : 'Submit Project & Get Certificate'}
        </button>

        <button
          onClick={() => router.push('/portal/dashboard')}
          style={{
            background: 'transparent',
            color: '#666',
            border: 'none',
            padding: '12px',
            fontSize: 14,
            cursor: 'pointer',
            width: '100%',
            marginTop: 8,
          }}
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  )
}