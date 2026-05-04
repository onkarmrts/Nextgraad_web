"use client"

import { useState } from "react"

const NG_GRADIENT = "linear-gradient(90deg, #C4308A 0%, #E75228 100%)"
const NG_GRADIENT_TEXT: React.CSSProperties = {
  backgroundImage: NG_GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}

const COMPANIES = [
  "TCS", "Infosys", "Wipro", "HCLTech", "Tech Mahindra", "Cognizant",
  "Accenture", "Capgemini", "IBM", "Deloitte", "PwC", "KPMG", "EY",
  "LTIMindtree", "Persistent Systems", "Microsoft", "Google Cloud", "AWS",
  "Zoho", "Freshworks", "Paytm", "Razorpay", "PhonePe", "Goldman Sachs",
  "Morgan Stanley", "JP Morgan", "BCG", "McKinsey", "Bain", "AMT Analytics"
]

const TALENT_POOL = [
  { domain: "AI & Data Science", count: "5,000+", color: "#C4308A" },
  { domain: "Full Stack Development", count: "3,200+", color: "#E75228" },
  { domain: "Business Analytics", count: "2,100+", color: "#8B2A6A" },
  { domain: "Financial Services", count: "1,800+", color: "#0C1042" },
]

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Share Requirements",
    desc: "Define roles, skills, experience level, salary range",
    icon: "📋",
  },
  {
    num: "02",
    title: "Access Talent Pool",
    desc: "Browse pre-validated MBA candidates with portfolios",
    icon: "🎯",
  },
  {
    num: "03",
    title: "Schedule Interviews",
    desc: "Coordinate with candidates directly through our platform",
    icon: "📅",
  },
  {
    num: "04",
    title: "Hire & Onboard",
    desc: "Make offers and we handle the documentation & support",
    icon: "✅",
  },
]

const RECRUITER_BENEFITS = [
  {
    icon: "🎓",
    title: "MBA Talent Pool",
    desc: "Access 10,000+ MBA graduates with verified credentials and internship experience",
  },
  {
    icon: "✓",
    title: "Pre-Screened Candidates",
    desc: "All candidates have completed internships and have verified project portfolios",
  },
  {
    icon: "⚡",
    title: "Fast Hiring Cycle",
    desc: "Reduce time-to-hire with ready-to-interview candidates and streamlined coordination",
  },
  {
    icon: "🔗",
    title: "Skill Transparency",
    desc: "Complete visibility into technical skills, projects, and verified experience",
  },
  {
    icon: "📊",
    title: "HireSense Scoring",
    desc: "AI-scored talent profiles showing technical strength across 12 dimensions",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    desc: "24/7 coordination support, interview scheduling, and onboarding assistance",
  },
]

const FAQS = [
  {
    q: "What's the candidate quality like?",
    a: "All candidates are Nextgraad MBA program graduates who have completed real-world internship projects. They're verified, tested, and portfolio-ready.",
  },
  {
    q: "How fast can I hire?",
    a: "Most hiring cycles take 2-3 weeks from interview to offer. We handle all coordination, so you focus only on evaluating candidates.",
  },
  {
    q: "What salary ranges do candidates expect?",
    a: "MBA graduates typically target ₹8-15 LPA for first roles. We help align expectations early, so no surprises during negotiation.",
  },
  {
    q: "Do you guarantee placements?",
    a: "We provide qualified candidates and handle coordination, but hiring decisions are entirely yours. We support the full process.",
  },
  {
    q: "How many candidates can I interview?",
    a: "No limits. Browse our entire MBA talent pool, shortlist as many as you'd like, and conduct interviews at your pace.",
  },
]

export default function RecruitersPagePremium() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <div className="bg-white text-slate-900 antialiased" style={{ fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif" }}>
      {/* HERO */}
      <section className="px-6 md:px-16 lg:px-24 pt-20 pb-24 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span
              className="text-[10px] font-bold px-3 py-1.5 rounded tracking-widest uppercase text-white"
              style={{ background: "#0C1042" }}
            >
              Recruit from Nextgraad MBA
            </span>
          </div>

          <h1 className="font-bold leading-[1.08] tracking-tight mb-6" style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)" }}>
            Hire Pre-Screened MBA<br />
            <span style={NG_GRADIENT_TEXT}>Talent at Scale</span>
          </h1>

          <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-2xl">
            Access 10,000+ MBA graduates with verified internship experience, real project portfolios, and AI-scored technical profiles. Fast hiring. Zero middlemen. Direct access.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
            <a
              href="#become-partner"
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-white"
              style={{ background: NG_GRADIENT, boxShadow: "0 6px 24px rgba(196,48,138,0.3)" }}
            >
              Become a Hiring Partner →
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 font-semibold px-7 py-3.5 rounded-xl text-sm transition-all"
            >
              How It Works
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
            {[
              { icon: "🎓", text: "10,000+ MBA Graduates" },
              { icon: "✓", text: "Pre-Screened & Verified" },
              { icon: "⚡", text: "2-3 Week Hiring Cycle" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                <p className="text-slate-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TALENT POOL */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100" style={{ background: "#fafafa" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              Your Talent Pool
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              Browse by Domain. <span style={NG_GRADIENT_TEXT}>Hire by Profile.</span>
            </h2>
            <p className="text-slate-500 max-w-lg">
              All candidates have completed real internships and have verified portfolios with HireSense scores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TALENT_POOL.map((pool) => (
              <div
                key={pool.domain}
                className="rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg"
                style={{ background: "#fff" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900">{pool.domain}</h3>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: pool.color }}
                  />
                </div>
                <p
                  className="text-2xl font-black"
                  style={{ color: pool.color }}
                >
                  {pool.count}
                </p>
                <p className="text-slate-500 text-xs mt-2">candidates available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER COMPANIES */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              Trusted By
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              150+ Companies &<br />
              <span style={NG_GRADIENT_TEXT}>Hiring Partners</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {COMPANIES.map((company) => (
              <div
                key={company}
                className="rounded-lg p-3 text-center text-sm font-semibold text-slate-700 border border-slate-200 hover:border-slate-300 transition-all"
                style={{ background: "#fafafa" }}
              >
                {company}
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 mt-6">
            *Companies actively recruit through our platform. Partnership availability depends on current openings.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100" style={{ background: "#fafafa" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              The Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              Hire in 4 Steps. <span style={NG_GRADIENT_TEXT}>Zero Hassle.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all"
                style={{ background: "#fff" }}
              >
                <div className="text-3xl mb-3">{step.icon}</div>
                <div
                  className="text-xs font-bold mb-2"
                  style={{ color: "#C4308A" }}
                >
                  STEP {step.num}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RECRUIT WITH NEXTGRAAD */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              Why Partner With Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              Built for Recruiters.<br />
              <span style={NG_GRADIENT_TEXT}>Built for Speed.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RECRUITER_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg"
                style={{ background: "#fff" }}
              >
                <div className="text-2xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CANDIDATES BRING */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100" style={{ background: "#fafafa" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              Every Candidate
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Comes With<br />
              <span style={NG_GRADIENT_TEXT}>Complete Portfolio</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border border-slate-200" style={{ background: "#fff" }}>
              <h3 className="font-bold text-slate-900 mb-4">✓ HireSense AI Profile</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Technical score across 12 dimensions</li>
                <li>• GitHub contribution history</li>
                <li>• LinkedIn profile strength metrics</li>
                <li>• ATS-optimized resume score</li>
              </ul>
            </div>

            <div className="rounded-xl p-6 border border-slate-200" style={{ background: "#fff" }}>
              <h3 className="font-bold text-slate-900 mb-4">✓ Project Portfolio</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Real industry internship project</li>
                <li>• Live GitHub repository links</li>
                <li>• Project documentation & outcomes</li>
                <li>• Completion certificate on file</li>
              </ul>
            </div>

            <div className="rounded-xl p-6 border border-slate-200" style={{ background: "#fff" }}>
              <h3 className="font-bold text-slate-900 mb-4">✓ Verified Credentials</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• MBA degree from partner universities</li>
                <li>• Domain specialization verified</li>
                <li>• Skill certifications on file</li>
                <li>• Background verified</li>
              </ul>
            </div>

            <div className="rounded-xl p-6 border border-slate-200" style={{ background: "#fff" }}>
              <h3 className="font-bold text-slate-900 mb-4">✓ Interview Ready</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Completed mock interviews</li>
                <li>• Salary expectations documented</li>
                <li>• Availability & preferences shared</li>
                <li>• Reference contacts available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              FAQ
            </p>
            <h2 className="text-3xl font-bold">Recruiting Questions Answered</h2>
          </div>

          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                style={{ background: "#fff" }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 px-5 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 text-sm text-left">{faq.q}</span>
                  <span
                    className="text-xl transition-transform flex-shrink-0 ml-4"
                    style={{
                      color: "#C4308A",
                      transform: expandedFaq === i ? "rotate(45deg)" : "rotate(0)",
                    }}
                  >
                    +
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-5 pb-4 pt-2 border-t border-slate-100">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="become-partner" className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: "#0C1042" }}
          >
            <span className="text-2xl font-black" style={NG_GRADIENT_TEXT}>R</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Stop Sifting Through<br />
            <span style={NG_GRADIENT_TEXT}>Generic Candidates.</span>
          </h2>

          <p className="text-slate-500 mb-10 text-base max-w-lg mx-auto">
            10,000+ MBA graduates ready to interview. Pre-screened. Verified. Portfolio-ready. Hire in 2-3 weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-3.5 rounded-xl text-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background: NG_GRADIENT, boxShadow: "0 6px 24px rgba(196,48,138,0.3)" }}
            >
              Become a Hiring Partner →
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 font-semibold px-8 py-3.5 rounded-xl text-sm transition-all"
            >
              Learn More
            </a>
          </div>

          <div
            className="inline-flex items-center gap-3 rounded-xl px-5 py-3 mt-8"
            style={{ background: "rgba(196,48,138,0.06)", border: "1px solid rgba(196,48,138,0.15)" }}
          >
            <span className="text-lg">⚡</span>
            <p className="text-sm font-semibold" style={{ color: "#C4308A" }}>
              24/7 recruitment support · 2-3 week hiring cycle · Zero commission
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
      `}</style>
    </div>
  )
}