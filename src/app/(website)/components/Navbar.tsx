"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

function CounsellingDialog({ onClose }: { onClose: () => void }) {
  const [selectedProgram, setSelectedProgram] = useState("")
  const [selectedProfile, setSelectedProfile] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(12,16,66,0.6)", backdropFilter: "blur(4px)" }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
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
            onClick={onClose}
            className="text-white/70 hover:text-white text-xl font-light leading-none mt-0.5"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <div className="text-4xl mb-4">🎉</div>
            <p className="text-lg font-bold text-slate-900 mb-2">We'll be in touch soon!</p>
            <p className="text-sm text-slate-500 mb-6">
              Our counsellor will call you within 24 working hours.
            </p>
            <button
              onClick={onClose}
              className="font-semibold px-6 py-2.5 rounded-xl text-sm transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(90deg, #C4308A, #E75228)",
                color: "#fff",
              }}
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
                  >
                    {p}
                  </button>
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
                  >
                    {p}
                  </button>
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
                  className="flex-1 rounded-lg px-3 py-2.5 text-sm outline-none"
                  style={{ border: "1px solid #e5e7eb", color: "#111" }}
                  onFocus={e => (e.target.style.borderColor = "#C4308A")}
                  onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>
            </div>

            <button
              onClick={() => setSubmitted(true)}
              className="w-full text-white font-bold py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                boxShadow: "0 4px 18px rgba(196,48,138,0.3)",
              }}
            >
              Book Free Session →
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-white border-b border-slate-100" style={{ boxShadow: "0 1px 12px rgba(12,16,66,0.06)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center overflow-hidden">
              <Image src="/logos/logo.png" alt="Nextgraad" width={30} height={30} priority />
            </div>
            <span className="font-bold text-lg tracking-tight" style={{ color: "#0C1042" }}>
              Nextgraad
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-slate-600 text-sm font-medium">
            <Link href="/degree-courses" className="hover:text-slate-900 transition-colors">Degree Courses</Link>
            <Link href="/products" className="hover:text-slate-900 transition-colors">TalentPulseAI</Link>
            <Link href="/internships" className="hover:text-slate-900 transition-colors">Internships</Link>
            <Link href="/recruiters" className="hover:text-slate-900 transition-colors">Recruiters</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => setDialogOpen(true)}
              className="font-semibold px-5 py-2.5 rounded-xl text-sm text-white transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                boxShadow: "0 3px 14px rgba(196,48,138,0.25)",
              }}
            >
              Get Free Counselling →
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-xl font-bold"
            style={{ color: "#0C1042" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-md text-slate-700 text-sm font-medium">
              <div className="flex flex-col gap-4">
                <Link href="/products" className="hover:text-slate-900 transition-colors">Degree Courses</Link>
                <Link href="/products" className="hover:text-slate-900 transition-colors">TalentPulseAI</Link>
                <Link href="/internships" className="hover:text-slate-900 transition-colors">Internships</Link>
                <Link href="/recruiters" className="hover:text-slate-900 transition-colors">Recruiters</Link>
                <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
                  <Link href="/portal/login" className="font-semibold transition-colors" style={{ color: "#C4308A" }}>
                    Dashboard
                  </Link>
                  <button
                    onClick={() => { setDialogOpen(true); setMenuOpen(false) }}
                    className="text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all text-center"
                    style={{ background: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)" }}
                  >
                    Get Free Counselling →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {dialogOpen && <CounsellingDialog onClose={() => setDialogOpen(false)} />}
    </>
  )
}