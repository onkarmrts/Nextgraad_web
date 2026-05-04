"use client"

import { useState } from "react"

type Tab = "student" | "recruiter"

const scoreCategories = [
  { label: "GitHub Activity",  score: 58, tip: "Add README to 3 repos · Pin top projects",       icon: "⚡", barColor: "#C4308A" },
  { label: "LinkedIn Profile", score: 71, tip: "Headline too generic · Add featured section",      icon: "💼", barColor: "#E75228" },
  { label: "Resume ATS",       score: 82, tip: "Missing SDE keywords · Reorder skills section",    icon: "📄", barColor: "#8B2A6A" },
]

const overallScore = Math.round(scoreCategories.reduce((s, c) => s + c.score, 0) / scoreCategories.length)

const NG_GRADIENT = "linear-gradient(90deg, #C4308A 0%, #E75228 100%)"
const NG_GRADIENT_TEXT: React.CSSProperties = {
  backgroundImage: NG_GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}

export default function TalentPulsePage() {
  const [activeTab, setActiveTab] = useState<Tab>("student")

  return (
    <div className="bg-white text-slate-900 antialiased" style={{ fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif" }}>

      {/* ══ HERO ══ */}
      <section className="px-6 md:px-16 lg:px-24 pt-20 pb-24 border-b border-slate-100" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_400px] gap-20 items-center">

          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span
                className="text-[10px] font-bold px-3 py-1.5 rounded tracking-widest uppercase text-white"
                style={{ background: "#0C1042" }}
              >
                TalentPulse AI
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                by Nextgraad
              </span>
              {/* MBA Free badge */}
              <span
                className="text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wide"
                style={{
                  background: "rgba(196,48,138,0.08)",
                  border: "1px solid rgba(196,48,138,0.25)",
                  color: "#C4308A",
                }}
              >
                🎓 Free for Nextgraad MBA Students
              </span>
            </div>

            <h1 className="font-bold leading-[1.08] tracking-tight mb-6" style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)" }}>
              Get Hired by Recruiters<br />
              <span style={NG_GRADIENT_TEXT}>with AI.</span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md">
              AI reads your LinkedIn, GitHub and resume — scores you across 12 dimensions — and surfaces you directly to 200+ verified recruiters. You don't apply. They come to you.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-white"
                style={{ background: NG_GRADIENT, boxShadow: "0 6px 24px rgba(196,48,138,0.3)" }}
              >
                Unlock TalentPulse →
              </a>
              <a
                href="#recruiters"
                className="inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 font-semibold px-7 py-3.5 rounded-xl text-sm transition-all"
              >
                I'm a recruiter
              </a>
            </div>

            <div className="flex flex-col gap-2">
              {[
                { dot: "#C4308A", text: "12-dimension AI scoring across GitHub, LinkedIn & Resume" },
                { dot: "#E75228", text: "Daily rescoring — watch your rank climb in real time" },
                { dot: "#0C1042", text: "200+ verified recruiters browse your profile directly" },
              ].map(f => (
                <div key={f.text} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: f.dot }} />
                  {f.text}
                </div>
              ))}
            </div>

            {/* MBA free callout */}
            <div
              className="mt-8 inline-flex items-center gap-3 rounded-xl px-5 py-3"
              style={{ background: "rgba(196,48,138,0.06)", border: "1px solid rgba(196,48,138,0.18)" }}
            >
              <span className="text-xl">🎓</span>
              <div>
                <p className="text-sm font-bold" style={{ color: "#0C1042" }}>Free for Nextgraad MBA Students</p>
                <p className="text-xs text-slate-500">Automatically unlocked when you enroll in any PG program</p>
              </div>
            </div>
          </div>

          {/* Score card */}
          <div className="w-full">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid #ebebeb", boxShadow: "0 20px 60px rgba(196,48,138,0.1), 0 4px 16px rgba(0,0,0,0.06)" }}
            >
              {/* Header */}
              <div className="px-5 py-4 flex items-center justify-between" style={{ background: "#0C1042" }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: NG_GRADIENT }}
                  >
                    AR
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-none">Arjun Rao</p>
                    <p className="text-slate-400 text-xs mt-0.5">Final year · Computer Science</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black leading-none" style={NG_GRADIENT_TEXT}>{overallScore}</p>
                  <p className="text-slate-500 text-[10px] mt-0.5 uppercase tracking-wider">/ 100</p>
                </div>
              </div>

              {/* Score bars */}
              <div className="bg-white px-5 pt-5 pb-4 space-y-4">
                {scoreCategories.map(cat => (
                  <div key={cat.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md"
                        style={{ background: "rgba(196,48,138,0.07)", color: "#C4308A" }}
                      >
                        {cat.icon} {cat.label}
                      </span>
                      <span className="text-xs font-bold tabular-nums" style={{ color: "#C4308A" }}>{cat.score}/100</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${cat.score}%`, background: cat.barColor }} />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">{cat.tip}</p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div
                className="px-5 py-3 flex items-center justify-between"
                style={{ borderTop: "1px solid #f0f0f0", background: "#fafafa" }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#C4308A" }} />
                  <span className="text-xs text-slate-500">3 recruiters viewed your profile this week</span>
                </div>
                <span className="text-xs font-bold cursor-pointer hover:underline" style={{ color: "#C4308A" }}>View →</span>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 mt-3">
              Get scored · Fix gaps · Get approached
            </p>
          </div>
        </div>
      </section>

      {/* ══ STATS STRIP ══ */}
      <section className="px-6 md:px-16 lg:px-24 py-10 border-b border-slate-100" style={{ background: "#fafafa" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-slate-100">
          {[
            { num: "10,000+", label: "Students scored" },
            { num: "200+",    label: "Recruiters on platform" },
            { num: "12",      label: "Scoring dimensions" },
            { num: "18 days", label: "Avg. first outreach" },
          ].map(s => (
            <div key={s.label} className="px-8 text-center">
              <p className="text-3xl font-black mb-1 tabular-nums" style={NG_GRADIENT_TEXT}>{s.num}</p>
              <p className="text-xs text-slate-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>How it works</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Two sides.{" "}
                <span style={NG_GRADIENT_TEXT}>One platform.</span>
              </h2>
            </div>
            <div
              className="inline-flex rounded-xl p-1 gap-1 self-start md:self-auto"
              style={{ background: "#fafafa", border: "1px solid #ebebeb" }}
            >
              {(["student", "recruiter"] as Tab[]).map(t => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className="px-5 py-2 text-xs font-bold rounded-lg transition-all"
                  style={activeTab === t
                    ? { background: NG_GRADIENT, color: "#fff" }
                    : { color: "#888" }
                  }
                >
                  {t === "student" ? "👩‍🎓 Students" : "🏢 Recruiters"}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "student" && (
            <div className="space-y-6">
              <div className="grid grid-cols-5 gap-2">
                {[
                  { n: "1", title: "Connect",        desc: "LinkedIn · GitHub · Resume" },
                  { n: "2", title: "Get scored",     desc: "12 AI dimensions" },
                  { n: "3", title: "See your gaps",  desc: "Exact fixes, not vague tips" },
                  { n: "4", title: "Fix & rescore",  desc: "Daily ranking update" },
                  { n: "5", title: "Get approached", desc: "Recruiters reach out" },
                ].map((step, i, arr) => (
                  <div key={step.n} className="flex flex-col items-center text-center relative">
                    <div
                      className="w-9 h-9 rounded-full text-white text-xs font-bold flex items-center justify-center mb-2 z-10"
                      style={{ background: NG_GRADIENT }}
                    >
                      {step.n}
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        className="hidden md:block absolute top-[18px] left-[calc(50%+18px)] right-[-50%] h-px"
                        style={{ background: "rgba(196,48,138,0.2)" }}
                      />
                    )}
                    <p className="text-xs font-bold text-slate-800">{step.title}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: "🔗", title: "Connect in 2 minutes",       desc: "One-click LinkedIn OAuth, GitHub OAuth, and resume upload. No manual entry." },
                  { icon: "🤖", title: "AI scores 12 dimensions",     desc: "Commit frequency, README quality, headline strength, ATS keyword density — all scored automatically." },
                  { icon: "🎯", title: "Exact fixes, not vague tips", desc: "Not 'improve your profile.' Exactly: 'Your last commit was 47 days ago' or 'Headline has zero role-specific keywords.'" },
                  { icon: "📈", title: "Rescore daily",               desc: "Fix one thing, hit Rescore. Your recruiter pool ranking updates in real time." },
                ].map(f => (
                  <div
                    key={f.title}
                    className="rounded-xl p-5 transition-all ng-tp-card"
                    style={{ background: "#fafafa", border: "1px solid #ebebeb" }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3" style={{ background: "rgba(196,48,138,0.07)" }}>
                      {f.icon}
                    </div>
                    <p className="text-sm font-bold text-slate-800 mb-1">{f.title}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "recruiter" && (
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-2">
                {[
                  { n: "1", title: "Sign up",   desc: "Company profile" },
                  { n: "2", title: "Search",    desc: "Role · Skills · Score" },
                  { n: "3", title: "Browse",    desc: "AI-ranked, no noise" },
                  { n: "4", title: "Reach out", desc: "Zero middlemen" },
                ].map((step, i, arr) => (
                  <div key={step.n} className="flex flex-col items-center text-center relative">
                    <div className="w-9 h-9 rounded-full text-white text-xs font-bold flex items-center justify-center mb-2 z-10" style={{ background: "#0C1042" }}>
                      {step.n}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="hidden md:block absolute top-[18px] left-[calc(50%+18px)] right-[-50%] h-px" style={{ background: "#ebebeb" }} />
                    )}
                    <p className="text-xs font-bold text-slate-800">{step.title}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{step.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: "🔍", title: "Filter by role, skills, score", desc: "Domain, tech stack, TalentPulse score range, location. No keyword guesswork." },
                  { icon: "🏆", title: "Ranked talent pool",            desc: "Every candidate AI-scored across 12 dimensions. Strongest profiles first." },
                  { icon: "👁️", title: "Full profile in one card",      desc: "GitHub, LinkedIn, ATS resume score, projects — everything at a glance." },
                  { icon: "✉️", title: "Direct outreach, zero fees",    desc: "Reach out inside the platform. No board fees, no middlemen, no spam." },
                ].map(f => (
                  <div key={f.title} className="rounded-xl p-5 transition-all ng-tp-card" style={{ background: "#fafafa", border: "1px solid #ebebeb" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3" style={{ background: "rgba(231,82,40,0.07)" }}>
                      {f.icon}
                    </div>
                    <p className="text-sm font-bold text-slate-800 mb-1">{f.title}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══ SCORE BREAKDOWN ══ */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100" style={{ background: "#fafafa" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>The 100-point score</p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
              What the AI actually{" "}
              <span style={NG_GRADIENT_TEXT}>reads</span>
            </h2>
            <p className="text-slate-500 max-w-lg text-sm leading-relaxed">
              Not self-reported skills. Real signals across 12 dimensions — scored automatically, updated the moment you fix something.
            </p>
          </div>

          <div
            className="grid md:grid-cols-3 rounded-2xl overflow-hidden"
            style={{ border: "1px solid #ebebeb" }}
          >
            {[
              { icon: "⚡", source: "GitHub",   pct: "34%", color: "#C4308A", bg: "rgba(196,48,138,0.06)",
                dimensions: ["Commit frequency (last 90 days)", "README quality on top repos", "Pinned projects relevance", "Language diversity"] },
              { icon: "💼", source: "LinkedIn", pct: "33%", color: "#E75228", bg: "rgba(231,82,40,0.06)",
                dimensions: ["Headline keyword density", "Summary completeness", "Skills & endorsements", "Experience descriptions"] },
              { icon: "📄", source: "Resume",   pct: "33%", color: "#8B2A6A", bg: "rgba(139,42,106,0.06)",
                dimensions: ["ATS keyword match", "Action verb strength", "Quantified achievements", "Formatting parsability"] },
            ].map((s, i) => (
              <div key={s.source} className="p-6" style={{ borderRight: i < 2 ? "1px solid #ebebeb" : "none", background: "#fff" }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                    <span className="text-sm font-bold" style={{ color: s.color }}>{s.source}</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: s.bg, color: s.color }}>{s.pct} weight</span>
                </div>
                <ul className="space-y-3">
                  {s.dimensions.map(d => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.color }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>Results</p>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-10">
            Scored. Fixed.{" "}
            <span style={NG_GRADIENT_TEXT}>Approached.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { initials: "AR", name: "Ananya Rao",   role: "Data Science · VIT Vellore",           score: 87, quote: "Got my score of 87 and within a week I had 3 recruiter DMs. The AI told me exactly which repos to fix — not generic advice.", tags: ["GitHub Fixed", "LinkedIn Optimised", "ATS: 91%"] },
              { initials: "RM", name: "Rohan Mehta",  role: "Web Dev · SRM University",             score: 92, quote: "TalentPulse showed me the exact gaps. Fixed my LinkedIn headline and pinned 2 repos — score jumped 14 points in 3 days.", tags: ["Score: 92", "Placed in 18 days", "24 GitHub commits"] },
              { initials: "PN", name: "Priya Nair",   role: "HR · Christ University, Bangalore",    score: 79, quote: "A startup from Pune reached out directly. I never applied — they came to me after seeing my profile.", tags: ["LinkedIn Optimised", "Direct Outreach", "Score: 79"] },
            ].map((t, i) => (
              <div key={t.name} className="rounded-xl p-5 flex flex-col ng-tp-card" style={{ background: "#fafafa", border: "1px solid #ebebeb" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0" style={{ background: NG_GRADIENT }}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-none">{t.name}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right rounded-lg px-2.5 py-1.5" style={{ background: "rgba(196,48,138,0.07)", border: "1px solid rgba(196,48,138,0.15)" }}>
                    <p className="text-lg font-black leading-none" style={{ color: "#C4308A" }}>{t.score}</p>
                    <p className="text-[9px] font-bold uppercase tracking-wide" style={{ color: "#C4308A" }}>score</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex flex-wrap gap-1.5 pt-3" style={{ borderTop: "1px solid #ebebeb" }}>
                  {t.tags.map(tag => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 rounded font-medium" style={{ background: "rgba(196,48,138,0.07)", color: "#C4308A" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { num: "85+",     label: "Avg TalentPulse Score"         },
              { num: "200+",    label: "Recruiters on platform"        },
              { num: "18 days", label: "Avg. first outreach"           },
              { num: "4,800+",  label: "Profiles viewed by recruiters" },
            ].map(s => (
              <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "#fafafa", border: "1px solid #ebebeb" }}>
                <p className="text-xl font-black mb-0.5 tabular-nums" style={NG_GRADIENT_TEXT}>{s.num}</p>
                <p className="text-[11px] text-slate-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100" style={{ background: "#fafafa" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: "#C4308A" }}>FAQ</p>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10 tracking-tight">Honest answers</h2>
          <div className="space-y-2">
            {[
              { q: "How does the AI score my profile?",
                a: "It reads your GitHub via API (commit frequency, README quality, pinned repos), your LinkedIn (headline, summary, skills), and your uploaded resume (ATS keyword density, formatting). Each contributes to your overall 100-point score." },
              { q: "Can I improve my score after the first scan?",
                a: "Yes — that's the point. Fix something, hit Rescore, and your rank in the recruiter talent pool updates immediately." },
              { q: "How do recruiters find me?",
                a: "Verified recruiters search the platform by role, skills, and score range. They see your ranked profile and can reach out directly inside the platform." },
              { q: "Does it work for non-tech roles?",
                a: "Yes. LinkedIn and resume scoring works across all domains. GitHub scoring is optional and only shown for tech roles." },
              { q: "Is TalentPulse really free for MBA students?",
                a: "Yes. Any student enrolled in a PG program through Nextgraad gets automatic access to TalentPulse AI — no separate payment required." },
            ].map(item => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="px-6 md:px-16 lg:px-24 py-24" id="get-started" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto text-center">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: "#0C1042" }}
          >
            <span className="text-2xl font-black" style={NG_GRADIENT_TEXT}>T</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight leading-tight">
            Stop guessing.<br />
            <span style={NG_GRADIENT_TEXT}>Start scoring.</span>
          </h2>
          <p className="text-slate-500 mb-8 text-base">
            Know exactly where you stand. Fix exactly what matters. Get found by recruiters — without applying.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#get-started"
              className="text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5"
              style={{ background: NG_GRADIENT, boxShadow: "0 6px 24px rgba(196,48,138,0.3)" }}
            >
              Unlock TalentPulse →
            </a>
            <a
              href="#recruiters"
              className="border border-slate-200 hover:border-slate-400 text-slate-600 font-semibold px-7 py-3.5 rounded-xl text-sm transition-all"
            >
              I'm a recruiter
            </a>
          </div>

          <div
            className="inline-flex items-center gap-3 rounded-xl px-5 py-3 mt-8"
            style={{ background: "rgba(196,48,138,0.06)", border: "1px solid rgba(196,48,138,0.15)" }}
          >
            <span className="text-lg">🎓</span>
            <p className="text-sm font-semibold" style={{ color: "#C4308A" }}>Free for all Nextgraad MBA students</p>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
        .ng-tp-card:hover {
          border-color: rgba(196,48,138,0.28) !important;
          box-shadow: 0 8px 24px rgba(196,48,138,0.07);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: "1px solid #f0f0f0" }} className="last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-sm font-bold text-slate-800 pr-4 group-hover:text-slate-900 transition-colors">{q}</span>
        <span
          className="text-xl flex-shrink-0 transition-transform duration-200"
          style={{ color: open ? "#C4308A" : "#ccc", transform: open ? "rotate(45deg)" : "none" }}
        >
          +
        </span>
      </button>
      {open && <p className="text-sm text-slate-500 leading-relaxed pb-4">{a}</p>}
    </div>
  )
}