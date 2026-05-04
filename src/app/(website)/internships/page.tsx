"use client"

import { useState } from "react"
import Link from "next/link"

const NG_GRADIENT = "linear-gradient(90deg, #C4308A 0%, #E75228 100%)"
const NG_GRADIENT_TEXT: React.CSSProperties = {
  backgroundImage: NG_GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}

const DOMAINS = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Build full-stack apps with React, Node.js & real deployment",
    tags: ["React", "Node.js", "Git"],
  },
  {
    icon: "🤖",
    title: "Data Science",
    desc: "Work with datasets, build ML models & present insights",
    tags: ["Python", "ML", "Pandas"],
  },
  {
    icon: "🧠",
    title: "AI & Deep Learning",
    desc: "Design AI pipelines, NLP models & applied ML systems",
    tags: ["TensorFlow", "NLP", "LLMs"],
  },
  {
    icon: "📈",
    title: "Data Analytics",
    desc: "Turn raw data into dashboards & actionable decisions",
    tags: ["SQL", "Tableau", "Power BI"],
  },
  {
    icon: "💼",
    title: "Business Analytics",
    desc: "Solve real business problems with data-driven frameworks",
    tags: ["Strategy", "Excel", "KPIs"],
  },
  {
    icon: "📊",
    title: "Financial Analyst",
    desc: "Work on P&L models, financial reports & analysis",
    tags: ["Financial Modeling", "Excel", "MIS"],
  },
  {
    icon: "🤝",
    title: "HR & Recruitment",
    desc: "Recruitment pipelines, HR ops & people analytics",
    tags: ["Recruitment", "HR Analytics", "ATS"],
  },
]

const WHAT_YOU_GET = [
  {
    icon: "🛠️",
    title: "Real Industry Projects",
    desc: "Actual projects that go into your portfolio. Not dummy tasks.",
    highlight: "Core",
  },
  {
    icon: "📩",
    title: "Offer Letter — 24 Hours",
    desc: "Official Nextgraad offer on company letterhead within 24 working hours",
    highlight: "Instant",
  },
  {
    icon: "🏆",
    title: "Verified Certificate",
    desc: "Auto-generated completion certificate once you submit your project",
    highlight: "On Completion",
  },
  {
    icon: "🖥️",
    title: "Portal Access 24/7",
    desc: "Live internship dashboard with project submissions & progress tracking",
    highlight: "Included",
  },
  {
    icon: "📄",
    title: "ProfileForge AI — Free",
    desc: "AI resume & LinkedIn optimizer. ATS score booster included.",
    highlight: "Worth ₹1,499",
  },
  {
    icon: "🚀",
    title: "HireSense AI — Free Access",
    desc: "Connect GitHub + LinkedIn + Resume. Get scored. Get approached by recruiters.",
    highlight: "Worth ₹2,999",
  },
  {
    icon: "💰",
    title: "Zero Hidden Fees",
    desc: "One-time payment. Everything included until completion. No renewals.",
    highlight: "Guaranteed",
  },
  {
    icon: "🏠",
    title: "100% Remote Work",
    desc: "Work from anywhere in India at your own pace with full flexibility",
    highlight: "Remote",
  },
]

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Enroll & Verify",
    desc: "Fill form, complete payment, get verified in 24 hours",
  },
  {
    num: "02",
    title: "Receive Offer Letter",
    desc: "Official Nextgraad offer on company letterhead",
  },
  {
    num: "03",
    title: "Access Portal",
    desc: "Login to dashboard, browse & pick your project",
  },
  {
    num: "04",
    title: "Execute Project",
    desc: "Work on real industry project with dedicated support",
  },
  {
    num: "05",
    title: "Submit & Certify",
    desc: "Submit project → certificate auto-generated & emailed",
  },
  {
    num: "06",
    title: "Unlock HireSense",
    desc: "Get discovered by 200+ recruiters on our platform",
  },
]

const TESTIMONIALS = [
  {
    name: "Ananya Sharma",
    role: "Data Science Intern",
    avatar: "AS",
    score: 87,
    text: "Got my HireSense score of 87 and within a week I had 3 recruiter DMs. The real project work showed what I could actually do.",
    tags: ["LinkedIn Optimized", "Resume ATS: 91%", "Score: 87"],
  },
  {
    name: "Rohan Mehta",
    role: "Web Dev Intern",
    avatar: "RM",
    score: 92,
    text: "I finally had something real to show in interviews. The internship gave me an actual project and recruiters started reaching out within 18 days.",
    tags: ["GitHub: 24 commits", "HireSense Score: 92", "Placed in 18 days"],
  },
  {
    name: "Priya Nair",
    role: "HR Intern",
    avatar: "PN",
    score: 79,
    text: "A startup from Pune reached out directly through HireSense. I never applied — they found me based on my profile.",
    tags: ["Direct Recruiter Outreach", "HireSense Score: 79", "Score: 79"],
  },
]

export default function InternshipsPagePremium() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null)
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
              Nextgraad Internships
            </span>
          </div>

          <h1 className="font-bold leading-[1.08] tracking-tight mb-6" style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)" }}>
            Real Projects. Real<br />
            <span style={NG_GRADIENT_TEXT}>Certificate. Real Results.</span>
          </h1>

          <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-2xl">
            7+ domains · Real industry projects · Official offer letter in 24 hours · ProfileForge AI + HireSense AI — both free · Work from home · 200+ recruiters on platform
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
            <a
              href="#unlock"
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-white"
              style={{ background: NG_GRADIENT, boxShadow: "0 6px 24px rgba(196,48,138,0.3)" }}
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdPPbmowl293uR8E92ug7aOpmoL5ZbomjLjBuVTrIcnhw6AvA/viewform"> Unlock Internship Program →</Link>
              
            </a>
            <a
              href="#domains"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 font-semibold px-7 py-3.5 rounded-xl text-sm transition-all"
            >
              Explore Domains
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
            {[
              { icon: "📊", text: "10,000+ Students Enrolled" },
              { icon: "🎯", text: "7+ Industry Domains" },
              { icon: "⚡", text: "95% Completion Rate" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                <div>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section id="what-you-get" className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100" style={{ background: "#fafafa" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              Everything Included
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              Worth <span style={{ textDecoration: "line-through", color: "#94a3b8" }}>₹9,497</span> — You unlock for free
            </h2>
            <p className="text-slate-500 max-w-lg">
              No hidden fees. Everything below unlocked from enrollment until certificate. No renewals. No surprise charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHAT_YOU_GET.map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-5 transition-all hover:border-slate-300 hover:shadow-lg"
                style={{ border: "1px solid #e5e7eb", background: "#fff" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                  <span
                    className="text-[10px] font-bold px-2 py-1 rounded"
                    style={{
                      background: "rgba(196,48,138,0.1)",
                      color: "#C4308A",
                    }}
                  >
                    {item.highlight}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section id="domains" className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              Pick Your Track
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              7+ Domains. <span style={NG_GRADIENT_TEXT}>One Enrollment.</span>
            </h2>
            <p className="text-slate-500 max-w-lg">
              Industry-relevant tracks built for what companies actually hire for. Pick what matches your career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DOMAINS.map((domain) => {
              const isSelected = selectedDomain === domain.title
              return (
                <div
                  key={domain.title}
                  onClick={() => setSelectedDomain(isSelected ? null : domain.title)}
                  className="rounded-xl p-5 cursor-pointer transition-all"
                  style={{
                    border: isSelected ? "1.5px solid #C4308A" : "1px solid #e5e7eb",
                    background: isSelected ? "rgba(196,48,138,0.04)" : "#fff",
                    boxShadow: isSelected ? "0 8px 24px rgba(196,48,138,0.12)" : "none",
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: "1.25rem" }}>{domain.icon}</span>
                      <h3 className="font-bold text-slate-900">{domain.title}</h3>
                    </div>
                    <div
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{
                        borderColor: isSelected ? "#C4308A" : "#cbd5e1",
                        background: isSelected ? "#C4308A" : "transparent",
                      }}
                    >
                      {isSelected && <span style={{ color: "#fff", fontSize: "12px" }}>✓</span>}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">{domain.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {domain.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-1 rounded-md"
                        style={{
                          background: "rgba(196,48,138,0.08)",
                          color: "#C4308A",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100" style={{ background: "#fafafa" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              The Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              Enroll to Certificate — <span style={NG_GRADIENT_TEXT}>Step by Step</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {PROCESS_STEPS.map((step, i, arr) => (
              <div key={step.num} className="flex flex-col items-center relative">
                <div
                  className="w-10 h-10 rounded-full text-white text-xs font-bold flex items-center justify-center mb-3 z-10"
                  style={{ background: NG_GRADIENT }}
                >
                  {step.num}
                </div>
                {i < arr.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-5 left-[calc(50%+20px)] right-[-50%] h-px"
                    style={{ background: "rgba(196,48,138,0.2)" }}
                  />
                )}
                <p className="text-xs font-bold text-slate-800 text-center">{step.title}</p>
                <p className="text-[10px] text-slate-400 text-center mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              Results
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              Enrolled. Completed. <span style={NG_GRADIENT_TEXT}>Hired.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl p-5 border border-slate-200 hover:border-slate-300 transition-all"
                style={{ background: "#fff" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-full text-white text-xs font-bold flex items-center justify-center"
                      style={{ background: NG_GRADIENT }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                      <p className="text-slate-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  <div
                    className="px-2.5 py-1.5 rounded-lg text-center"
                    style={{
                      background: "rgba(196,48,138,0.08)",
                      border: "1px solid rgba(196,48,138,0.15)",
                    }}
                  >
                    <p className="text-lg font-black" style={{ color: "#C4308A" }}>
                      {testimonial.score}
                    </p>
                    <p className="text-[9px] font-bold uppercase" style={{ color: "#C4308A" }}>
                      score
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{`"${testimonial.text}"`}</p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {testimonial.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-md"
                      style={{
                        background: "rgba(196,48,138,0.08)",
                        color: "#C4308A",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100" style={{ background: "#fafafa" }}>
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              FAQ
            </p>
            <h2 className="text-3xl font-bold">Honest Answers</h2>
          </div>

          <div className="space-y-2">
            {[
              {
                q: "Is this internship legitimate?",
                a: "Yes. Nextgraad is registered and provides official offer letters, real portal access, real projects, and verifiable certificates.",
              },
              {
                q: "When do I get the offer letter?",
                a: "Within 24 working hours of enrollment. You'll receive it on official Nextgraad letterhead and gain portal access immediately.",
              },
              {
                q: "Are the projects real or dummy?",
                a: "Completely real. Based on actual industry use cases — something meaningful you can show in interviews and LinkedIn.",
              },
              {
                q: "When does HireSense AI unlock?",
                a: "After you complete and submit your internship project. Connect GitHub + LinkedIn + Resume and get discovered by 200+ recruiters.",
              },
              {
                q: "Can I choose my project?",
                a: "Yes. You access the portal, browse available projects in your domain, and pick the one that interests you most.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                style={{ background: "#fff" }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 px-5 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 text-sm">{faq.q}</span>
                  <span
                    className="text-xl transition-transform"
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

      {/* CTA SECTION */}
      <section id="unlock" className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: "#0C1042" }}
          >
            <span className="text-2xl font-black" style={NG_GRADIENT_TEXT}>N</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Don't pay thousands for a<br />
            <span style={NG_GRADIENT_TEXT}>dummy certificate.</span>
          </h2>

          <p className="text-slate-500 mb-10 text-base max-w-lg mx-auto">
            Real projects. Real certificate. Real recruiters. Everything you need to launch your career — included.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-3.5 rounded-xl text-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background: NG_GRADIENT, boxShadow: "0 6px 24px rgba(196,48,138,0.3)" }}
            >
             <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdPPbmowl293uR8E92ug7aOpmoL5ZbomjLjBuVTrIcnhw6AvA/viewform"> Unlock Internship Program →</Link>
            </a>
            <a
              href="#domains"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 font-semibold px-8 py-3.5 rounded-xl text-sm transition-all"
            >
              Explore Domains
            </a>
          </div>

          <div
            className="inline-flex items-center gap-3 rounded-xl px-5 py-3 mt-8"
            style={{ background: "rgba(196,48,138,0.06)", border: "1px solid rgba(166, 196, 48, 0.15)" }}
          >
            <span className="text-lg">✅</span>
            <p className="text-sm font-semibold" style={{ color: "#C4308A" }}>
              Offer letter in 24 hours · Real projects · Official certificate
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