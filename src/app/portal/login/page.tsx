'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail]           = useState('')
  const [otp, setOtp]               = useState('')
  const [step, setStep]             = useState<'email' | 'otp'>('email')
  const [loading, setLoading]       = useState(false)
  const [error, setError]           = useState('')
  const [resending, setResending]   = useState(false)
  const [resent, setResent]         = useState(false)

  const handleSendOTP = async () => {
    if (!email.trim()) { setError('Please enter your email.'); return }
    setLoading(true)
    setError('')
    const res  = await fetch('/api/auth/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim() }),
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) { setError(data.error || 'Something went wrong'); return }
    setStep('otp')
  }

  const handleVerifyOTP = async () => {
    if (!otp.trim()) { setError('Please enter the OTP.'); return }
    setLoading(true)
    setError('')
    const res  = await fetch('/api/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim(), otp: otp.trim() }),
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) { setError(data.error || 'Invalid OTP'); return }
    router.push('/portal/dashboard')
  }

  const handleResend = async () => {
    setResending(true)
    setError('')
    setResent(false)
    await fetch('/api/auth/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim() }),
    })
    setResending(false)
    setResent(true)
    setOtp('')
  }

  return (
    <div style={s.page}>
      <div style={s.card}>

        {/* Logo */}
        <div style={s.logoRow}>
          <img src="/logos/logo.png" style={{ width: 40, height: 40, objectFit: 'contain' }} />
          <span style={s.logoText}>NEXTGRAAD</span>
        </div>
        <p style={s.sub}>Internship Portal — Login</p>
        <div style={s.divider} />

        {step === 'email' ? (
          <>
            <label style={s.label}>Your registered email</label>
            <input
              type="email"
              placeholder="yourname@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSendOTP()}
              style={s.input}
            />
            {error && <p style={s.errText}>{error}</p>}
            <button
              onClick={handleSendOTP}
              disabled={loading}
              style={{ ...s.btn, opacity: loading ? 0.6 : 1 }}
            >
              {loading ? 'Sending OTP...' : 'Send OTP →'}
            </button>
            <p style={s.hint}>
              Use the email where you received your offer letter.
            </p>
          </>
        ) : (
          <>
            <div style={s.sentBanner}>
              OTP sent to <strong>{email}</strong>
            </div>

            <label style={s.label}>Enter 6-digit OTP</label>
            <input
              type="number"
              placeholder="— — — — — —"
              value={otp}
              onChange={e => setOtp(e.target.value.slice(0, 6))}
              onKeyDown={e => e.key === 'Enter' && handleVerifyOTP()}
              style={{ ...s.input, textAlign: 'center', fontSize: 26, letterSpacing: 8, fontWeight: 700 }}
            />

            {error && <p style={s.errText}>{error}</p>}
            {resent && <p style={{ color: '#10b981', fontSize: 13, textAlign: 'center' }}>New OTP sent!</p>}

            <button
              onClick={handleVerifyOTP}
              disabled={loading || otp.length < 6}
              style={{ ...s.btn, opacity: (loading || otp.length < 6) ? 0.5 : 1 }}
            >
              {loading ? 'Verifying...' : 'Login to Portal →'}
            </button>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14 }}>
              <button
                onClick={() => { setStep('email'); setOtp(''); setError('') }}
                style={s.ghostBtn}
              >
                ← Change email
              </button>
              <button
                onClick={handleResend}
                disabled={resending}
                style={s.ghostBtn}
              >
                {resending ? 'Sending...' : 'Resend OTP'}
              </button>
            </div>

            <p style={s.hint}>OTP expires in 10 minutes.</p>
          </>
        )}
      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: '#0a0f1e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', Arial, sans-serif",
    padding: 20,
  },
  card: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: '36px 32px',
    width: '100%',
    maxWidth: 420,
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 6,
  },
  logoText: {
    fontSize: 20, fontWeight: 800,
    color: '#fff', letterSpacing: 2,
  },
  sub: {
    textAlign: 'center' as const,
    color: '#64748b',
    fontSize: 13,
    margin: '0 0 20px',
  },
  divider: {
    height: 1,
    background: 'rgba(255,255,255,0.07)',
    marginBottom: 24,
  },
  label: {
    display: 'block',
    fontSize: 12,
    fontWeight: 700,
    color: '#94a3b8',
    letterSpacing: 0.5,
    marginBottom: 8,
    textTransform: 'uppercase' as const,
  },
  input: {
    width: '100%',
    padding: '13px 14px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 10,
    color: '#f1f5f9',
    fontSize: 15,
    outline: 'none',
    marginBottom: 14,
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
  },
  btn: {
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
    textAlign: 'center' as const,
    margin: '0 0 12px',
  },
  hint: {
    color: '#475569',
    fontSize: 12,
    textAlign: 'center' as const,
    marginTop: 14,
  },
  sentBanner: {
    background: 'rgba(109,40,217,0.12)',
    border: '1px solid rgba(109,40,217,0.3)',
    borderRadius: 8,
    padding: '10px 14px',
    color: '#a78bfa',
    fontSize: 13,
    textAlign: 'center' as const,
    marginBottom: 20,
  },
  ghostBtn: {
    background: 'transparent',
    border: 'none',
    color: '#64748b',
    fontSize: 13,
    cursor: 'pointer',
    padding: '4px 0',
  },
}