'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

// ── Brand colors ──
const NAVY    = '#1E2060'
const MAGENTA = '#BF1F7F'
const ORANGE  = '#E8452A'

interface VerifyResult {
  valid: boolean
  reason?: string
  type?: 'offer' | 'certificate'
  intern?: {
    name: string
    role: string
    domain: string
    college: string
  }
  project?: {
    title: string
    timeline_days: number
    submitted_at: string
  }
  certNumber?: string
  docNumber?: string
  issuedAt?: string
}

function VerifyContent() {
  const params  = useSearchParams()
  const id      = params.get('id')
  const type    = params.get('type')

  const [result,  setResult]  = useState<VerifyResult | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id || !type) {
      setResult({ valid: false, reason: 'Invalid verification link' })
      setLoading(false)
      return
    }

    fetch(`/api/verify?id=${id}&type=${type}`)
      .then(res => res.json())
      .then(data => { setResult(data); setLoading(false) })
      .catch(() => {
        setResult({ valid: false, reason: 'Verification failed. Please try again.' })
        setLoading(false)
      })
  }, [id, type])

  const formatDate = (iso?: string) => {
    if (!iso) return '—'
    return new Date(iso).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'long', year: 'numeric',
    })
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f4f4f8',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Header */}
      <div style={{
        background: NAVY,
        padding: '0',
      }}>
        <div style={{ padding: '18px 36px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div>
            <div style={{ color: 'white', fontSize: 22, fontWeight: 'bold', letterSpacing: 1 }}>
              NEXTGRAAD
            </div>
            <div style={{ color: '#aab', fontSize: 11, marginTop: 2 }}>
              Document Verification Portal
            </div>
          </div>
        </div>
        {/* Tricolor stripe */}
        <div style={{ display: 'flex', height: 4 }}>
          <div style={{ flex: 1, background: NAVY    }} />
          <div style={{ flex: 1, background: MAGENTA }} />
          <div style={{ flex: 1, background: ORANGE  }} />
        </div>
      </div>

      {/* Body */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
      }}>
        <div style={{ width: '100%', maxWidth: 520 }}>

          {/* Loading */}
          {loading && (
            <div style={{
              background: 'white',
              borderRadius: 14,
              padding: '48px 32px',
              textAlign: 'center',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
              <p style={{ color: '#555', fontSize: 15 }}>Verifying document...</p>
            </div>
          )}

          {/* Invalid */}
          {!loading && result && !result.valid && (
            <div style={{
              background: 'white',
              borderRadius: 14,
              padding: '40px 32px',
              textAlign: 'center',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              borderTop: `4px solid ${ORANGE}`,
            }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>❌</div>
              <h2 style={{ color: ORANGE, margin: '0 0 10px', fontSize: 22 }}>
                Document Invalid
              </h2>
              <p style={{ color: '#666', margin: 0 }}>
                {result.reason ?? 'This document could not be verified.'}
              </p>
              <p style={{ color: '#aaa', fontSize: 13, marginTop: 16 }}>
                If you believe this is an error, contact{' '}
                <a href="mailto:internship@nextgraad.in" style={{ color: NAVY }}>
                  internship@nextgraad.in
                </a>
              </p>
            </div>
          )}

          {/* Valid — Offer Letter */}
          {!loading && result?.valid && result.type === 'offer' && (
            <div style={{
              background: 'white',
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            }}>
              {/* Top strip */}
              <div style={{
                background: NAVY,
                padding: '28px 32px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 48 }}>✅</div>
                <h2 style={{ color: 'white', margin: '12px 0 4px', fontSize: 20 }}>
                  Document Verified
                </h2>
                <p style={{ color: '#aab', margin: 0, fontSize: 13 }}>
                  This is an authentic Nextgraad document
                </p>
              </div>

              {/* Tricolor stripe */}
              <div style={{ display: 'flex', height: 4 }}>
                <div style={{ flex: 1, background: NAVY    }} />
                <div style={{ flex: 1, background: MAGENTA }} />
                <div style={{ flex: 1, background: ORANGE  }} />
              </div>

              {/* Details */}
              <div style={{ padding: '28px 32px' }}>

                <div style={{
                  background: '#f0f0f8',
                  borderRadius: 8,
                  padding: '12px 16px',
                  marginBottom: 24,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ color: '#888', fontSize: 12 }}>DOCUMENT TYPE</span>
                  <span style={{
                    background: NAVY, color: 'white',
                    padding: '3px 12px', borderRadius: 20, fontSize: 12, fontWeight: 'bold',
                  }}>
                    Internship Offer Letter
                  </span>
                </div>

                <Row label="Candidate Name"  value={result.intern!.name}    accent={NAVY}    />
                <Row label="Role"            value={`${result.intern!.role} Intern`} />
                <Row label="Domain"          value={result.intern!.domain}  />
                <Row label="College"         value={result.intern!.college} />
                <Row label="Document No."    value={result.docNumber!}      accent={MAGENTA} />
                <Row label="Issued On"       value={formatDate(result.issuedAt)} />

                <div style={{
                  marginTop: 24,
                  padding: '14px 16px',
                  background: '#f0fff4',
                  borderRadius: 8,
                  borderLeft: `4px solid #1a7a3a`,
                  fontSize: 13,
                  color: '#1a7a3a',
                }}>
                  ✅ This offer letter was officially issued by Nextgraad Internship Division.
                </div>
              </div>
            </div>
          )}

          {/* Valid — Certificate */}
          {!loading && result?.valid && result.type === 'certificate' && (
            <div style={{
              background: 'white',
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            }}>
              {/* Top strip */}
              <div style={{
                background: NAVY,
                padding: '28px 32px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 48 }}>🏆</div>
                <h2 style={{ color: 'white', margin: '12px 0 4px', fontSize: 20 }}>
                  Certificate Verified
                </h2>
                <p style={{ color: '#aab', margin: 0, fontSize: 13 }}>
                  This is an authentic Nextgraad certificate
                </p>
              </div>

              {/* Tricolor stripe */}
              <div style={{ display: 'flex', height: 4 }}>
                <div style={{ flex: 1, background: NAVY    }} />
                <div style={{ flex: 1, background: MAGENTA }} />
                <div style={{ flex: 1, background: ORANGE  }} />
              </div>

              {/* Details */}
              <div style={{ padding: '28px 32px' }}>

                <div style={{
                  background: '#f0f0f8',
                  borderRadius: 8,
                  padding: '12px 16px',
                  marginBottom: 24,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ color: '#888', fontSize: 12 }}>DOCUMENT TYPE</span>
                  <span style={{
                    background: MAGENTA, color: 'white',
                    padding: '3px 12px', borderRadius: 20, fontSize: 12, fontWeight: 'bold',
                  }}>
                    Certificate of Completion
                  </span>
                </div>

                <Row label="Candidate Name"  value={result.intern!.name}                              accent={NAVY}    />
                <Row label="Role"            value={`${result.intern!.role} Intern`}                  />
                <Row label="Domain"          value={result.intern!.domain}                            />
                <Row label="College"         value={result.intern!.college}                           />
                <Row label="Project"         value={result.project!.title}                            />
                <Row label="Duration"        value={`${result.project!.timeline_days} Days`}          />
                <Row label="Certificate No." value={result.certNumber!}                               accent={MAGENTA} />
                <Row label="Completed On"    value={formatDate(result.project!.submitted_at)}         accent={ORANGE}  />

                <div style={{
                  marginTop: 24,
                  padding: '14px 16px',
                  background: '#f0fff4',
                  borderRadius: 8,
                  borderLeft: `4px solid #1a7a3a`,
                  fontSize: 13,
                  color: '#1a7a3a',
                }}>
                  ✅ This certificate was officially issued upon successful project submission at Nextgraad.
                </div>
              </div>
            </div>
          )}

          {/* Footer note */}
          {!loading && (
            <p style={{
              textAlign: 'center', color: '#aaa',
              fontSize: 12, marginTop: 24,
            }}>
              For any queries, contact{' '}
              <a href="mailto:internship@nextgraad.in" style={{ color: NAVY }}>
                internship@nextgraad.in
              </a>
            </p>
          )}

        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', height: 6 }}>
        <div style={{ flex: 1, background: NAVY    }} />
        <div style={{ flex: 1, background: MAGENTA }} />
        <div style={{ flex: 1, background: ORANGE  }} />
      </div>
    </div>
  )
}

// ── Reusable detail row ────────────────────────────────────────────────────────
function Row({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid #f0f0f0',
    }}>
      <span style={{ color: '#888', fontSize: 13 }}>{label}</span>
      <span style={{
        color: accent ?? '#222',
        fontWeight: accent ? 'bold' : 'normal',
        fontSize: 13,
        textAlign: 'right',
        maxWidth: '60%',
      }}>
        {value}
      </span>
    </div>
  )
}

// Suspense wrapper needed for useSearchParams in Next.js
export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: '100vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
      }}>
        <p>Loading...</p>
      </div>
    }>
      <VerifyContent />
    </Suspense>
  )
}