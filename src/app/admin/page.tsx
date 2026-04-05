'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function AdminPage() {
  const [password, setPassword]   = useState('')
  const [authed, setAuthed]       = useState(false)
  const [authError, setAuthError] = useState('')
  const [file, setFile]           = useState<File | null>(null)
  const [loading, setLoading]     = useState(false)
  const [results, setResults]     = useState<any>(null)
  const [error, setError]         = useState('')

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthed(true)
      setAuthError('')
    } else {
      setAuthError('Incorrect password. Try again.')
    }
  }

  const handleUpload = async () => {
    if (!file) return
    setLoading(true)
    setError('')
    setResults(null)
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res  = await fetch('/api/admin/upload', { method: 'POST', body: formData })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setResults(data)
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  // ── Login screen ──
  if (!authed) return (
    <div style={s.page}>
      <div style={s.loginCard}>
        <div style={s.logoRow}>
          <img src="/logos/logo.png" alt="Nextgraad" style={{ width: 44, height: 44, objectFit: 'contain' }} />
          <span style={s.logoText}>NEXTGRAAD</span>
        </div>
        <p style={s.loginSub}>Admin Portal — Restricted Access</p>

        <div style={s.divider} />

        <label style={s.label}>Admin Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleLogin()}
          style={s.input}
        />

        {authError && <p style={s.errText}>{authError}</p>}

        <button onClick={handleLogin} style={s.primaryBtn}>
          Unlock Admin Panel
        </button>
      </div>
    </div>
  )

  // ── Admin panel ──
  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <div style={s.logoRow}>
          <img src="/logos/logo.png" alt="Nextgraad" style={{ width: 36, height: 36, objectFit: 'contain' }} />
          <span style={s.logoText}>NEXTGRAAD</span>
        </div>
        <span style={s.headerBadge}>Admin Panel</span>
      </div>

      <div style={s.container}>

        {/* Upload card */}
        <div style={s.card}>
          <h2 style={s.cardTitle}>Send Offer Letters</h2>
          <p style={s.cardSub}>
            Upload an Excel file to automatically generate and send personalised
            offer letters to all interns listed.
          </p>

          <div style={s.infoBox}>
            <span style={s.infoLabel}>Required columns</span>
            <div style={s.tagRow}>
              {['Name','Email','Phone','College','Role','Domain','Duration'].map(col => (
                <span key={col} style={s.tag}>{col}</span>
              ))}
            </div>
          </div>

          {/* File drop zone */}
          <label style={s.dropZone}>
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={e => setFile(e.target.files?.[0] || null)}
              style={{ display: 'none' }}
            />
            <div style={{ fontSize: 32, marginBottom: 8 }}>📂</div>
            {file
              ? <span style={{ color: '#a78bfa', fontWeight: 600 }}>{file.name}</span>
              : <span style={{ color: '#94a3b8' }}>Click to select Excel file (.xlsx / .xls)</span>
            }
          </label>

          <button
            onClick={handleUpload}
            disabled={!file || loading}
            style={{ ...s.primaryBtn, opacity: (!file || loading) ? 0.5 : 1 }}
          >
            {loading ? '⏳ Sending emails...' : '🚀 Upload & Send Offer Letters'}
          </button>

          {error && (
            <div style={s.errorBox}>
              ❌ {error}
            </div>
          )}
        </div>

        {/* Results */}
        {results && (
          <div style={s.card}>
            <h3 style={s.cardTitle}>
              Results — {results.results.filter((r: any) => r.status === 'sent').length} of {results.total} sent
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
              {results.results.map((r: any, i: number) => (
                <div key={i} style={{
                  ...s.resultRow,
                  borderColor: r.status === 'sent' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)',
                  background:  r.status === 'sent' ? 'rgba(16,185,129,0.06)' : 'rgba(239,68,68,0.06)',
                }}>
                  <span style={{ color: r.status === 'sent' ? '#10b981' : '#ef4444' }}>
                    {r.status === 'sent' ? '✅' : '❌'}
                  </span>
                  <span style={{ color: '#e2e8f0', fontSize: 13 }}>{r.email}</span>
                  {r.error && <span style={{ color: '#ef4444', fontSize: 12 }}>— {r.error}</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: '#0a0f1e',
    fontFamily: "'Inter', Arial, sans-serif",
    color: '#e2e8f0',
  },
  header: {
    background: 'rgba(255,255,255,0.03)',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    padding: '16px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 700,
    color: '#ffffff',
    letterSpacing: 2,
  },
  headerBadge: {
    background: 'rgba(167,139,250,0.15)',
    color: '#a78bfa',
    padding: '4px 14px',
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 600,
    border: '1px solid rgba(167,139,250,0.3)',
  },
  container: {
    maxWidth: 600,
    margin: '40px auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  loginCard: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: 40,
    width: '100%',
    maxWidth: 420,
    margin: '120px auto 0',
    backdropFilter: 'blur(10px)',
  },
  loginSub: {
    color: '#64748b',
    fontSize: 13,
    margin: '4px 0 0',
    textAlign: 'center' as const,
  },
  divider: {
    height: 1,
    background: 'rgba(255,255,255,0.08)',
    margin: '24px 0',
  },
  card: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: 28,
  },
  cardTitle: {
    margin: '0 0 6px',
    fontSize: 18,
    fontWeight: 700,
    color: '#f1f5f9',
  },
  cardSub: {
    margin: '0 0 20px',
    color: '#64748b',
    fontSize: 13,
    lineHeight: 1.6,
  },
  infoBox: {
    background: 'rgba(167,139,250,0.08)',
    border: '1px solid rgba(167,139,250,0.2)',
    borderRadius: 10,
    padding: '12px 16px',
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 11,
    fontWeight: 700,
    color: '#a78bfa',
    letterSpacing: 1,
    textTransform: 'uppercase' as const,
    display: 'block',
    marginBottom: 8,
  },
  tagRow: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: 6,
  },
  tag: {
    background: 'rgba(167,139,250,0.15)',
    color: '#c4b5fd',
    padding: '3px 10px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
  },
  dropZone: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed rgba(255,255,255,0.12)',
    borderRadius: 12,
    padding: '32px 20px',
    cursor: 'pointer',
    marginBottom: 16,
    transition: 'border-color 0.2s',
    textAlign: 'center' as const,
  },
  label: {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    color: '#94a3b8',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 10,
    color: '#f1f5f9',
    fontSize: 14,
    outline: 'none',
    marginBottom: 16,
    boxSizing: 'border-box' as const,
  },
  primaryBtn: {
    width: '100%',
    padding: '13px',
    background: 'linear-gradient(135deg, #6d28d9, #4f46e5)',
    color: 'white',
    border: 'none',
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 700,
    cursor: 'pointer',
    letterSpacing: 0.3,
  },
  errText: {
    color: '#ef4444',
    fontSize: 13,
    margin: '0 0 12px',
    textAlign: 'center' as const,
  },
  errorBox: {
    marginTop: 16,
    background: 'rgba(239,68,68,0.08)',
    border: '1px solid rgba(239,68,68,0.3)',
    borderRadius: 8,
    padding: '12px 16px',
    color: '#ef4444',
    fontSize: 13,
  },
  resultRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 14px',
    borderRadius: 8,
    border: '1px solid',
  },
}