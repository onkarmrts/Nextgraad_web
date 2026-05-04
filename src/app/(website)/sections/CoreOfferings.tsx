"use client"

import Link from "next/link"

export default function CoreOfferings() {
  return (
    <section className="bg-slate-50 py-20 px-6 md:px-12 lg:px-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest block mb-3"
            style={{ color: "#C4308A" }}
          >
            What We Offer
          </span>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Everything you need.{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One platform.
            </span>
          </h2>
          <p className="text-slate-500">
            From getting your degree to landing your next job — Nextgraad covers the full journey.
          </p>
        </div>

        {/* PRIMARY: MBA / PG Programs */}
        <div
          className="rounded-2xl overflow-hidden mb-6 shadow-xl"
          style={{ background: "#0C1042" }}
        >
          <div className="grid lg:grid-cols-[1fr_380px]">

            {/* Left content */}
            <div className="px-8 md:px-12 py-10">
              <div
                className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider"
                style={{
                  background: "rgba(231,82,40,0.15)",
                  border: "1px solid rgba(231,82,40,0.3)",
                  color: "#f4a07a",
                }}
              >
                ⭐ Core Offering
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Online MBA & PG Programs
              </h3>
              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
                We're tied up with 25+ leading Indian universities to offer online MBA, MCA, M.Com, and other PG programs. Get counselled, choose the right fit, and enrol — with our full support.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: "🎓", text: "25+ University Partners" },
                  { icon: "📋", text: "Free Admission Counselling" },
                  { icon: "✅", text: "UGC / AICTE Approved" },
                  { icon: "💼", text: "For Working Professionals" },
                  { icon: "🕐", text: "Flexible Schedules" },
                  { icon: "💳", text: "Easy EMI Options" },
                ].map(f => (
                  <div key={f.text} className="flex items-center gap-2.5 text-slate-300 text-sm">
                    <span className="flex-shrink-0">{f.icon}</span>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/programs"
                  className="font-bold px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                    color: "#ffffff",
                    boxShadow: "0 4px 18px rgba(196,48,138,0.3)",
                  }}
                >
                  Explore Programs →
                </Link>
                <Link
                  href="/counselling"
                  className="font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5"
                  style={{
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.75)",
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  Talk to a Counsellor
                </Link>
              </div>
            </div>

            {/* Right — university names */}
            <div
              className="px-8 py-10 flex flex-col justify-center"
              style={{
                background: "rgba(196,48,138,0.07)",
                borderLeft: "1px solid rgba(196,48,138,0.15)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-6"
                style={{ color: "rgba(196,48,138,0.6)" }}
              >
                Some of our university partners
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Amity University", "Manipal University", "LPU", "NMIMS",
                  "Symbiosis", "Chandigarh University", "Jain University", "IGNOU",
                ].map(uni => (
                  <div
                    key={uni}
                    className="rounded-xl px-3 py-2.5 text-center"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(196,48,138,0.2)",
                    }}
                  >
                    <span className="text-slate-200 text-xs font-semibold">{uni}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs text-center mt-4">+ 17 more partner universities</p>
            </div>
          </div>
        </div>

        {/* SECONDARY: TalentPulse + Internships */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* TalentPulse */}
          <div
            className="rounded-2xl p-7 transition-all group"
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(196,48,138,0.3)"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(196,48,138,0.08)"
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = "none"
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
              style={{ background: "rgba(196,48,138,0.08)" }}
            >
              ⚡
            </div>
            <div
              className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3"
              style={{ background: "rgba(196,48,138,0.08)", color: "#C4308A" }}
            >
              AI Product
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">TalentPulseAI</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              AI-powered career scoring across LinkedIn, GitHub & Resume. Know your score, fix your gaps, get approached by recruiters — all for ₹299 one-time.
            </p>
            <ul className="space-y-1.5 mb-6">
              {["12-dimension AI career score", "Daily rescoring engine", "Recruiter visibility pool"].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                  <span style={{ color: "#C4308A" }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Link
              href="/products"
              className="font-bold text-sm"
              style={{ color: "#C4308A" }}
            >
              See TalentPulse →
            </Link>
          </div>

          {/* Internships */}
          <div
            className="rounded-2xl p-7 transition-all group"
            style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(231,82,40,0.3)"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(231,82,40,0.08)"
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = "none"
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
              style={{ background: "rgba(231,82,40,0.08)" }}
            >
              🚀
            </div>
            <div
              className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3"
              style={{ background: "rgba(231,82,40,0.08)", color: "#E75228" }}
            >
              Internship Hub
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Internship Opportunities</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Curated internship listings across domains. Students enrolled in our PG programs get priority access to partner company internships and live projects.
            </p>
            <ul className="space-y-1.5 mb-6">
              {["Verified company listings", "Domain-wise filter", "Priority for PG enrollees"].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                  <span style={{ color: "#E75228" }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/internships" className="font-bold text-sm" style={{ color: "#E75228" }}>
              Browse Internships →
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}