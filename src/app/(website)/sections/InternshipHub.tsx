"use client"

import Link from "next/link"
import { useState } from "react"

const domains = [
  { icon: "🌐", title: "Web Development",       tags: ["React", "Node.js", "HTML/CSS", "Git"],            accentA: "#C4308A", accentB: "#E75228" },
  { icon: "🤖", title: "Data Science",           tags: ["Python", "ML", "Statistics", "Pandas"],           accentA: "#E75228", accentB: "#C4308A" },
  { icon: "🧠", title: "Artificial Intelligence",tags: ["Deep Learning", "NLP", "TensorFlow", "LLMs"],     accentA: "#0C1042", accentB: "#C4308A" },
  { icon: "📈", title: "Data Analytics",         tags: ["SQL", "Power BI", "Excel", "Tableau"],            accentA: "#C4308A", accentB: "#E75228" },
  { icon: "💼", title: "Business Analytics",     tags: ["Strategy", "Excel", "Case Studies", "KPIs"],      accentA: "#E75228", accentB: "#0C1042" },
  { icon: "📊", title: "Financial Analyst",      tags: ["Financial Modeling", "Tally", "MIS", "Excel"],    accentA: "#C4308A", accentB: "#E75228" },
  { icon: "🤝", title: "HR Intern",              tags: ["Recruitment", "HR Analytics", "Policies", "ATS"], accentA: "#0C1042", accentB: "#E75228" },
]

const inclusions = [
  { icon: "📩", label: "Offer Letter",         sub: "Within 24 working hours",      highlight: false },
  { icon: "🛠️", label: "Real Projects",        sub: "Not dummy tasks",              highlight: false },
  { icon: "🏆", label: "Verified Certificate", sub: "Auto-generated on completion", highlight: false },
  { icon: "📄", label: "ProfileForge AI",      sub: "Resume & LinkedIn optimizer",  highlight: true  },
  { icon: "⚡", label: "TalentPulse Access",   sub: "AI career scoring — included", highlight: true  },
  { icon: "🏠", label: "Work From Home",       sub: "100% remote, your pace",       highlight: false },
]

const stats = [
  { num: "85+",     label: "Avg TalentPulse Score"         },
  { num: "200+",    label: "Recruiters on Platform"        },
  { num: "18 days", label: "Avg. Time to First Outreach"   },
  { num: "4,800+",  label: "Profiles Viewed by Recruiters" },
]

export default function InternshipHub() {
  const [activeDomain, setActiveDomain] = useState<number | null>(null)

  return (
    <section className="bg-slate-50 py-20 px-6 md:px-12 lg:px-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div
              className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide"
              style={{
                background: "rgba(196,48,138,0.08)",
                border: "1px solid rgba(196,48,138,0.2)",
                color: "#C4308A",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#C4308A" }}
              />
              Internship Hub · 7+ Domains Available
            </div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
              Internship Program{" "}
              <br />
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                by Nextgraad
              </span>
            </h2>
            <p className="text-slate-500 text-base max-w-lg leading-relaxed">
              Real projects. Real certificate. TalentPulse access included — AI career scoring that gets you noticed by recruiters directly.
            </p>
          </div>

          {/* You get snapshot */}
          <div
            className="flex-shrink-0 rounded-2xl px-6 py-5 space-y-2.5 min-w-[220px]"
            style={{ background: "#fff", border: "1px solid #ebebeb", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#aaa" }}
            >
              You get
            </p>
            {[
              "📩 Offer letter in 24 hrs",
              "🛠️ Real industry project",
              "🏆 Verified certificate",
              "⚡ TalentPulse access",
              "🏠 100% work from home",
            ].map(item => (
              <p key={item} className="text-sm font-medium text-slate-700">{item}</p>
            ))}
          </div>
        </div>

        {/* ── WHAT'S INCLUDED ── */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-5"
          style={{ background: "#fff", border: "1px solid #ebebeb" }}
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
            Everything Included With Your Internship
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {inclusions.map(item => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{
                  background: item.highlight ? "rgba(196,48,138,0.05)" : "#fafafa",
                  border: item.highlight ? "1px solid rgba(196,48,138,0.18)" : "1px solid #f0f0f0",
                }}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-bold"
                    style={{ color: item.highlight ? "#C4308A" : "#1a1a1a" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs truncate"
                    style={{ color: item.highlight ? "#E75228" : "#aaa", fontWeight: item.highlight ? 600 : 400 }}
                  >
                    {item.sub}
                  </p>
                </div>
                {item.highlight && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{
                      background: "linear-gradient(90deg, #C4308A, #E75228)",
                      color: "#fff",
                    }}
                  >
                    Included
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── 7 DOMAINS ── */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-5"
          style={{ background: "#fff", border: "1px solid #ebebeb" }}
        >
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">7+ Domains · Pick Your Track</p>
            <p className="hidden sm:block text-xs text-slate-400">Hover a domain to see tech stack</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {domains.map((d, i) => (
              <button
                key={d.title}
                onMouseEnter={() => setActiveDomain(i)}
                onMouseLeave={() => setActiveDomain(null)}
                className="relative flex flex-col items-center text-center rounded-xl px-3 py-4 transition-all"
                style={{
                  border: activeDomain === i
                    ? `1.5px solid ${d.accentA}`
                    : "1px solid #ebebeb",
                  background: activeDomain === i ? `rgba(196,48,138,0.04)` : "#fafafa",
                  transform: activeDomain === i ? "translateY(-3px)" : "none",
                  boxShadow: activeDomain === i ? `0 8px 20px rgba(196,48,138,0.12)` : "none",
                }}
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-2"
                  style={{ background: `rgba(196,48,138,0.07)` }}
                >
                  {d.icon}
                </span>
                <p className="text-xs font-bold text-slate-800 leading-tight">{d.title}</p>

                {activeDomain === i && (
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full z-20 rounded-xl px-3 py-2.5 shadow-xl min-w-[148px] pointer-events-none"
                    style={{ background: "#0C1042" }}
                  >
                    <div className="flex flex-wrap gap-1 justify-center">
                      {d.tags.map(t => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                          style={{
                            background: "rgba(196,48,138,0.2)",
                            color: "#e87cc4",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-4 border-transparent"
                      style={{ borderTopColor: "#0C1042" }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── TALENTPULSE ── */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-5 overflow-hidden relative"
          style={{ background: "#0C1042" }}
        >
          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: "300px", height: "300px",
              background: "radial-gradient(circle, rgba(196,48,138,0.2) 0%, transparent 70%)",
            }}
          />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">

            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide"
                style={{
                  background: "rgba(196,48,138,0.15)",
                  border: "1px solid rgba(196,48,138,0.3)",
                  color: "#e87cc4",
                }}
              >
                ⚡ Included for Every Intern
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                TalentPulse —{" "}
                <span
                  style={{
                    backgroundImage: "linear-gradient(90deg, #C4308A, #E75228)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Recruiters Come to You
                </span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Included with your internship. Connect GitHub + LinkedIn + Resume. Our AI scores your profile and surfaces you to 200+ recruiters.{" "}
                <span className="text-white font-semibold">You don&apos;t apply — they approach you.</span>
              </p>
              <div className="space-y-2 mb-5">
                {[
                  "AI scores your profile out of 100 based on real signals",
                  "Get notified when recruiters view your profile",
                  "Direct outreach from 200+ companies — no cold applying",
                ].map(f => (
                  <div key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span style={{ color: "#C4308A" }} className="flex-shrink-0 mt-0.5">✓</span> {f}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">Unlocks automatically after internship completion</p>
            </div>

            {/* Right — mock score card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(196,48,138,0.2)" }}
            >
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(196,48,138,0.15)" }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #C4308A, #E75228)" }}
                  >
                    RM
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-none">Rohan Mehta</p>
                    <p className="text-slate-400 text-xs">Web Dev Intern · SRM University</p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className="text-2xl font-bold"
                    style={{
                      backgroundImage: "linear-gradient(90deg, #C4308A, #E75228)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    92
                  </p>
                  <p className="text-slate-400 text-[10px]">TalentPulse Score</p>
                </div>
              </div>
              <div className="px-5 py-4 space-y-3">
                {[
                  { label: "GitHub Activity", val: 88, color: "#C4308A"  },
                  { label: "LinkedIn Profile", val: 91, color: "#E75228"  },
                  { label: "Resume ATS",       val: 94, color: "#8B2A6A"  },
                ].map(bar => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">{bar.label}</span>
                      <span className="text-slate-300 font-semibold">{bar.val}/100</span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${bar.val}%`, background: bar.color }}
                      />
                    </div>
                  </div>
                ))}
                <div
                  className="pt-2 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(196,48,138,0.15)" }}
                >
                  <p className="text-xs text-slate-400">🔔 3 recruiters viewed your profile</p>
                  <span className="text-xs font-semibold" style={{ color: "#C4308A" }}>View →</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rounded-2xl p-5 text-center transition-all"
              style={{ background: "#fff", border: "1px solid #ebebeb" }}
            >
              <p
                className="text-2xl font-bold mb-1"
                style={{
                  backgroundImage: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.num}
              </p>
              <p className="text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div
          className="rounded-2xl px-7 py-6 flex flex-col md:flex-row items-center justify-between gap-5"
          style={{ background: "#fff", border: "1px solid #ebebeb" }}
        >
          <div>
            <p className="text-base font-bold text-slate-900 mb-1.5">
              🚀 Real experience. Real certificate. Real career growth.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
              <span>✅ Offer letter in 24hrs</span>
              <span>✅ Real industry project</span>
              <span>✅ ProfileForge AI included</span>
              <span>✅ TalentPulse access included</span>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/internships"
              className="font-semibold px-5 py-2.5 rounded-xl text-sm transition-all hover:-translate-y-0.5"
              style={{ border: "1px solid #ddd", color: "#555" }}
            >
              See Full Details
            </Link>
            <a
              href="https://forms.gle/wezjCkPU5omFLhLq6"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold px-6 py-2.5 rounded-xl text-sm transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                color: "#fff",
                boxShadow: "0 4px 14px rgba(196,48,138,0.3)",
              }}
            >
              Enroll Now →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}