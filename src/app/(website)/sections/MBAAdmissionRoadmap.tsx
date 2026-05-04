"use client"

import { useState } from "react"

const steps = [
  {
    n: "01",
    title: "Free Counselling Call",
    desc: "Talk to a Nextgraad counsellor who understands your profile — work experience, budget, goals and preferred specialisation.",
    icon: "📞",
    duration: "30 mins",
    tag: "Free",
    tagBg: "rgba(196,48,138,0.1)",
    tagColor: "#C4308A",
  },
  {
    n: "02",
    title: "University Shortlisting",
    desc: "Based on your profile, we shortlist 3–5 best-fit universities from our 25+ partners. We compare fees, faculty, ROI and placement records.",
    icon: "🎯",
    duration: "Same day",
    tag: "Personalised",
    tagBg: "rgba(12,16,66,0.08)",
    tagColor: "#0C1042",
  },
  {
    n: "03",
    title: "Application & Documents",
    desc: "We help you fill the application, prepare required documents (marksheets, ID proof, work experience letters) and submit on time.",
    icon: "📋",
    duration: "2–3 days",
    tag: "Assisted",
    tagBg: "rgba(231,82,40,0.1)",
    tagColor: "#E75228",
  },
  {
    n: "04",
    title: "Admission Confirmation",
    desc: "Once the university reviews your application, you receive an admission letter. We keep you updated at every step.",
    icon: "✅",
    duration: "1–2 weeks",
    tag: "Tracked",
    tagBg: "rgba(196,48,138,0.1)",
    tagColor: "#C4308A",
  },
  {
    n: "05",
    title: "Fee Payment & Enrollment",
    desc: "We guide you through fee payment, EMI setup if needed, and official enrollment. Your student portal access is activated.",
    icon: "💳",
    duration: "Same day",
    tag: "EMI Available",
    tagBg: "rgba(231,82,40,0.1)",
    tagColor: "#E75228",
  },
  {
    n: "06",
    title: "Classes & Placement Support",
    desc: "Your online classes begin. You get access to TalentPulse career scoring, resume workshops, and our recruiter network.",
    icon: "🚀",
    duration: "Ongoing",
    tag: "Full Support",
    tagBg: "rgba(12,16,66,0.08)",
    tagColor: "#0C1042",
  },
]

export default function MBAAdmissionRoadmap() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest block mb-3"
            style={{ color: "#C4308A" }}
          >
            Admission Process
          </span>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
            From counselling to classroom{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              in 6 steps
            </span>
          </h2>
          <p className="text-slate-500">
            We walk with you through every step. No confusion, no running around — just clear guidance.
          </p>
        </div>

        {/* Desktop: Timeline grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 gap-2 mb-0 relative">
            {steps.map((s, i) => (
              <button
                key={s.n}
                onClick={() => setActive(i)}
                className={`relative flex flex-col items-center text-center transition-all ${active === i ? "" : "opacity-60 hover:opacity-90"}`}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute top-6 left-1/2 w-full h-0.5 z-0 transition-all"
                    style={{
                      background: i < active
                        ? "linear-gradient(90deg, #C4308A, #E75228)"
                        : "#e5e7eb",
                    }}
                  />
                )}
                {/* Circle */}
                <div
                  className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl border-2 transition-all"
                  style={{
                    border: active === i
                      ? "2px solid #C4308A"
                      : i < active
                        ? "2px solid #E75228"
                        : "2px solid #e5e7eb",
                    background: active === i
                      ? "rgba(196,48,138,0.08)"
                      : i < active
                        ? "linear-gradient(135deg, #C4308A, #E75228)"
                        : "#fff",
                    color: i < active ? "#fff" : "inherit",
                    boxShadow: active === i ? "0 4px 16px rgba(196,48,138,0.2)" : "none",
                  }}
                >
                  {i < active ? "✓" : s.icon}
                </div>
                <p
                  className="mt-2 text-xs font-bold"
                  style={{ color: active === i ? "#C4308A" : "#aaa" }}
                >
                  {s.n}
                </p>
                <p
                  className="text-xs font-semibold mt-0.5 leading-tight"
                  style={{ color: active === i ? "#111" : "#888" }}
                >
                  {s.title}
                </p>
              </button>
            ))}
          </div>

          {/* Active card */}
          <div
            className="mt-10 rounded-2xl p-8 grid md:grid-cols-[auto_1fr] gap-6 items-start"
            style={{ background: "#fafafa", border: "1px solid #ebebeb" }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: "rgba(196,48,138,0.08)", border: "1px solid rgba(196,48,138,0.15)" }}
            >
              {steps[active].icon}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="text-xl font-bold text-slate-900">{steps[active].title}</h3>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: steps[active].tagBg,
                    color: steps[active].tagColor,
                  }}
                >
                  {steps[active].tag}
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{ background: "#f0f0f0", color: "#888" }}
                >
                  ⏱ {steps[active].duration}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">{steps[active].desc}</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => setActive(Math.max(0, active - 1))}
              disabled={active === 0}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all disabled:opacity-30"
              style={{ border: "1px solid #e5e7eb", color: "#555" }}
            >
              ← Prev
            </button>
            <button
              onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
              disabled={active === steps.length - 1}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all disabled:opacity-30 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                color: "#fff",
                border: "none",
              }}
            >
              Next →
            </button>
          </div>
        </div>

        {/* Mobile: Vertical list */}
        <div className="lg:hidden space-y-4">
          {steps.map((s, i) => (
            <div key={s.n} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full text-white flex items-center justify-center text-base font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C4308A, #E75228)" }}
                >
                  {s.icon}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-0.5 flex-1 my-2"
                    style={{ background: "rgba(196,48,138,0.15)" }}
                  />
                )}
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <p className="text-sm font-bold text-slate-900">{s.title}</p>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: s.tagBg, color: s.tagColor }}
                  >
                    {s.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                <p className="text-xs mt-1" style={{ color: "#aaa" }}>⏱ {s.duration}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}