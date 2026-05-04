"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const universities = [
  "Amity University", "Manipal University", "LPU", "Chandigarh University",
  "NMIMS", "Symbiosis", "IGNOU", "Jain University",
]

export default function MBAHero() {
  const [activeUni, setActiveUni] = useState(0)
  const [selectedProgram, setSelectedProgram] = useState("")
  const [selectedProfile, setSelectedProfile] = useState("")

  useEffect(() => {
    const t = setInterval(() => setActiveUni(p => (p + 1) % universities.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      style={{ background: "#0C1042" }}
      className="relative overflow-hidden min-h-[93vh] flex items-center"
    >
      {/* ── Dot-grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Diagonal magenta glow top-right ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-120px",
          right: "-80px",
          width: "520px",
          height: "520px",
          background: "radial-gradient(circle, rgba(196,48,138,0.18) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ── Orange glow bottom-left ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-80px",
          left: "-60px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(231,82,40,0.13) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_440px] gap-14 items-center">

          {/* ══ LEFT ══ */}
          <div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 uppercase tracking-wider"
              style={{
                border: "1px solid rgba(196,48,138,0.4)",
                background: "rgba(196,48,138,0.1)",
                color: "#e87cc4",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#C4308A" }}
              />
              25+ University Tie-Ups Across India
            </div>

            {/* Headline */}
            <h1
              className="font-bold leading-[1.1] tracking-tight mb-6"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif",
                color: "#ffffff",
              }}
            >
              Your MBA / PG Degree
              <br />
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                From India's Best
              </span>{" "}
              <span style={{ color: "#ffffff" }}>Online Universities</span>
            </h1>

            <p
              className="text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Free expert counselling, top university comparisons, and enrolment
              support — designed for working professionals, freshers & job seekers.
            </p>

            {/* University ticker */}
            <div className="flex items-center gap-3 mb-10">
              <span
                className="text-sm flex-shrink-0"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Top picks:
              </span>
              <div className="overflow-hidden flex-1 max-w-[280px]">
                <p
                  key={activeUni}
                  className="text-sm font-semibold"
                  style={{
                    color: "#e87cc4",
                    animation: "ngFadeSlide 0.45s ease",
                  }}
                >
                  🎓 {universities[activeUni]}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/programs"
                className="font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                  color: "#ffffff",
                  boxShadow: "0 6px 28px rgba(196,48,138,0.35)",
                }}
              >
                Get Free Counselling →
              </Link>
              <Link
                href="/programs"
                className="font-semibold px-7 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.75)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                Browse Programs
              </Link>
            </div>

            {/* Trust row */}
            <div
              className="flex flex-wrap items-center gap-6 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {[
                { icon: "🎓", text: "25+ University Partners" },
                { icon: "📞", text: "Free Expert Counselling" },
                { icon: "✅", text: "UGC / AICTE Approved" },
              ].map(t => (
                <div
                  key={t.text}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  <span>{t.icon}</span>
                  <span>{t.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT — Counselling Card ══ */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(196,48,138,0.12)",
              background: "#ffffff",
            }}
          >
            {/* Card header */}
            <div
              className="px-6 py-5"
              style={{
                background: "linear-gradient(120deg, #C4308A 0%, #E75228 100%)",
              }}
            >
              <p className="text-white font-bold text-base mb-0.5"
                style={{ fontFamily: "'Sora', sans-serif" }}>
                Book Free Counselling
              </p>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "13px" }}>
                Talk to an expert · Zero cost · No obligation
              </p>
            </div>

            {/* Card body */}
            <div className="px-6 py-5 space-y-4" style={{ background: "#ffffff" }}>

              {/* Program */}
              <div>
                <label
                  className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                  style={{ color: "#888" }}
                >
                  Program Interest
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["MBA", "MCA", "M.Com", "Other PG"].map(p => (
                    <button
                      key={p}
                      onClick={() => setSelectedProgram(p)}
                      className="text-sm py-2 rounded-lg transition-all font-medium"
                      style={{
                        border: selectedProgram === p
                          ? "1.5px solid #C4308A"
                          : "1px solid #e5e7eb",
                        background: selectedProgram === p
                          ? "rgba(196,48,138,0.06)"
                          : "transparent",
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
                <label
                  className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                  style={{ color: "#888" }}
                >
                  I am a
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Working Pro", "UG Student", "Job Seeker"].map(p => (
                    <button
                      key={p}
                      onClick={() => setSelectedProfile(p)}
                      className="text-xs py-2 rounded-lg transition-all font-medium"
                      style={{
                        border: selectedProfile === p
                          ? "1.5px solid #E75228"
                          : "1px solid #e5e7eb",
                        background: selectedProfile === p
                          ? "rgba(231,82,40,0.06)"
                          : "transparent",
                        color: selectedProfile === p ? "#E75228" : "#374151",
                      }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                  style={{ color: "#888" }}
                >
                  Mobile Number
                </label>
                <div className="flex gap-2">
                  <span
                    className="rounded-lg px-3 py-2.5 text-sm font-medium flex-shrink-0"
                    style={{
                      border: "1px solid #e5e7eb",
                      background: "#f9fafb",
                      color: "#555",
                    }}
                  >
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Enter your number"
                    className="flex-1 rounded-lg px-3 py-2.5 text-sm outline-none"
                    style={{
                      border: "1px solid #e5e7eb",
                      color: "#111",
                    }}
                    onFocus={e => (e.target.style.borderColor = "#C4308A")}
                    onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>
              </div>

              <button
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

            {/* Card footer */}
            <div
              className="px-6 py-3 flex items-center justify-between"
              style={{
                borderTop: "1px solid #f0f0f0",
                background: "#fafafa",
              }}
            >
              <span className="text-xs" style={{ color: "#999" }}>
                ⭐ 4.8/5 from 2,400+ students
              </span>
              <span className="text-xs font-semibold" style={{ color: "#16a34a" }}>
                ● Online now
              </span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
        @keyframes ngFadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}