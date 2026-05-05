"use client"

import { useState } from "react"
import { supabase } from "../../../lib/supabaseClient"

interface CounsellingDialogProps {
  open: boolean
  onClose: () => void
}

export default function CounsellingDialog({ open, onClose }: CounsellingDialogProps) {
  const [selectedProgram, setSelectedProgram] = useState("")
  const [selectedProfile, setSelectedProfile] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  if (!open) return null

  function handleReset() {
    setSubmitted(false)
    setName("")
    setPhone("")
    setSelectedProgram("")
    setSelectedProfile("")
    setError("")
  }

  function handleClose() {
    handleReset()
    onClose()
  }

  async function handleSubmit() {
    if (!name.trim()) { setError("Please enter your full name."); return }
    if (!phone.trim() || phone.length < 10) { setError("Please enter a valid 10-digit mobile number."); return }
    setLoading(true)
    setError("")
    const { error: sbError } = await supabase.from("leads").insert({
      name: name.trim(),
      phone: phone.trim(),
      program: selectedProgram || null,
      profile: selectedProfile || null,
    })
    setLoading(false)
    if (sbError) { console.error(sbError.message); setError("Something went wrong. Please try again.") }
    else setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(12,16,66,0.7)", backdropFilter: "blur(4px)" }}
      onClick={e => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div
        className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: "#fff", animation: "ngDialogIn 0.3s ease" }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex items-start justify-between"
          style={{ background: "linear-gradient(120deg, #C4308A 0%, #E75228 100%)" }}
        >
          <div>
            <p className="text-white font-bold text-base mb-0.5" style={{ fontFamily: "'Sora', sans-serif" }}>
              Book Free Counselling
            </p>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "13px" }}>
              Talk to an expert · Zero cost · No obligation
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-white/70 hover:text-white text-xl font-light leading-none mt-0.5"
          >
            ✕
          </button>
        </div>

        {/* Success state */}
        {submitted ? (
          <div className="px-6 py-10 text-center">
            <div className="text-4xl mb-4">🎉</div>
            <p className="text-lg font-bold text-slate-900 mb-2">We'll be in touch soon!</p>
            <p className="text-sm text-slate-500 mb-6">
              Our counsellor will call you within 24 working hours.
            </p>
            <button
              onClick={handleClose}
              className="font-semibold px-6 py-2.5 rounded-xl text-sm transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(90deg, #C4308A, #E75228)", color: "#fff" }}
            >
              Done
            </button>
          </div>
        ) : (
          <div className="px-6 py-5 space-y-4">

            {/* Program */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#888" }}>
                Program Interest
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["MBA", "MCA", "M.Com", "Other PG"].map(p => (
                  <button
                    key={p}
                    onClick={() => setSelectedProgram(p)}
                    className="text-sm py-2 rounded-lg transition-all font-medium"
                    style={{
                      border: selectedProgram === p ? "1.5px solid #C4308A" : "1px solid #e5e7eb",
                      background: selectedProgram === p ? "rgba(196,48,138,0.06)" : "transparent",
                      color: selectedProgram === p ? "#C4308A" : "#374151",
                    }}
                  >{p}</button>
                ))}
              </div>
            </div>

            {/* Profile */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#888" }}>
                I am a
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["Working Pro", "UG Student", "Job Seeker"].map(p => (
                  <button
                    key={p}
                    onClick={() => setSelectedProfile(p)}
                    className="text-xs py-2 rounded-lg transition-all font-medium"
                    style={{
                      border: selectedProfile === p ? "1.5px solid #E75228" : "1px solid #e5e7eb",
                      background: selectedProfile === p ? "rgba(231,82,40,0.06)" : "transparent",
                      color: selectedProfile === p ? "#E75228" : "#374151",
                    }}
                  >{p}</button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#888" }}>
                Your Name
              </label>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full rounded-lg px-3 py-2.5 text-sm outline-none"
                style={{ border: "1px solid #e5e7eb", color: "#111" }}
                onFocus={e => (e.target.style.borderColor = "#C4308A")}
                onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#888" }}>
                Mobile Number
              </label>
              <div className="flex gap-2">
                <span
                  className="rounded-lg px-3 py-2.5 text-sm font-medium flex-shrink-0"
                  style={{ border: "1px solid #e5e7eb", background: "#f9fafb", color: "#555" }}
                >
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Enter your number"
                  value={phone}
                  onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="flex-1 rounded-lg px-3 py-2.5 text-sm outline-none"
                  style={{ border: "1px solid #e5e7eb", color: "#111" }}
                  onFocus={e => (e.target.style.borderColor = "#C4308A")}
                  onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-500 text-center -mt-1">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full text-white font-bold py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                boxShadow: "0 4px 18px rgba(196,48,138,0.3)",
                opacity: loading ? 0.75 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Submitting…" : "Book Free Session →"}
            </button>

            <p className="text-center text-xs" style={{ color: "#aaa" }}>
              🔒 No spam · Your data is safe
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes ngDialogIn {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  )
}