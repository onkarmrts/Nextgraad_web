"use client"

import { useState } from "react"
import CounsellingDialog from "../components/CounsellingDialog"

const reasons = [
  {
    icon: "🎓",
    title: "25+ University Partners",
    desc: "Tie-ups with India's top UGC/AICTE approved online universities — Amity, Manipal, LPU, NMIMS, Symbiosis and more.",
    iconBg: "rgba(196,48,138,0.08)",
  },
  {
    icon: "📞",
    title: "Free Expert Counselling",
    desc: "One-on-one sessions with trained counsellors who understand your profile, budget and career goals — at zero cost.",
    iconBg: "rgba(231,82,40,0.08)",
  },
  {
    icon: "⚡",
    title: "Fast, Hassle-Free Enrollment",
    desc: "We handle paperwork, documentation, and admission formalities end-to-end. You focus on studying.",
    iconBg: "rgba(196,48,138,0.08)",
  },
  {
    icon: "🏅",
    title: "Placement Support Built In",
    desc: "From resume building to interview prep and recruiter connections via TalentPulse — your career doesn't stop at the degree.",
    iconBg: "rgba(231,82,40,0.08)",
  },
  {
    icon: "💻",
    title: "100% Online. 0% Compromise.",
    desc: "Live classes, recorded lectures, assignments and exams — fully online. Study from anywhere in India.",
    iconBg: "rgba(196,48,138,0.08)",
  },
  {
    icon: "💰",
    title: "EMI-Friendly Fees",
    desc: "Affordable fee structures with easy EMI options across all partner universities. Education shouldn't break the bank.",
    iconBg: "rgba(231,82,40,0.08)",
  },
]

export default function WhyNextgraad() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="max-w-2xl mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#C4308A" }}
            >
              Why Nextgraad
            </span>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
              Not just an admission portal.{" "}
              <br />
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your PG partner.
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We don't just list universities — we counsel you, match you, enrol you, and support you throughout your PG journey.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map(r => (
              <div
                key={r.title}
                className="rounded-2xl p-6 transition-all duration-200 bg-white ng-why-card"
                style={{ border: "1px solid #e5e7eb" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: r.iconBg }}
                >
                  {r.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div
            className="mt-12 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ background: "#0C1042" }}
          >
            <div>
              <p className="text-white font-bold text-lg mb-1">Ready to find the right PG program?</p>
              <p className="text-slate-400 text-sm">Talk to a counsellor today — free, no-pressure conversation.</p>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="flex-shrink-0 font-bold px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5 whitespace-nowrap"
              style={{
                background: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                color: "#ffffff",
                boxShadow: "0 4px 18px rgba(196,48,138,0.3)",
              }}
            >
              Get Free Counselling →
            </button>
          </div>

        </div>

        <style>{`
          .ng-why-card:hover {
            border-color: rgba(196,48,138,0.3) !important;
            box-shadow: 0 8px 24px rgba(196,48,138,0.07);
            transform: translateY(-2px);
          }
        `}</style>
      </section>

      <CounsellingDialog open={open} onClose={() => setOpen(false)} />
    </>
  )
}