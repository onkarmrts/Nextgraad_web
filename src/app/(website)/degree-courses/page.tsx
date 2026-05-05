"use client"

import { useState } from "react"
import CounsellingDialog from "../components/CounsellingDialog"

const NG_GRADIENT = "linear-gradient(90deg, #C4308A 0%, #E75228 100%)"
const NG_GRADIENT_TEXT: React.CSSProperties = {
  backgroundImage: NG_GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}

const PARTNER_UNIVERSITIES = [
  {
    name: "Amity University",
    location: "Online",
    accreditation: "UGC Approved",
    specializations: "Finance, HR, Marketing, Operations",
    ranking: "Top Private University",
    logo: "🎓",
  },
  {
    name: "Manipal University",
    location: "Online",
    accreditation: "UGC Approved",
    specializations: "Data Science, Finance, Business Analytics",
    ranking: "NAAC A+ Accredited",
    logo: "📚",
  },
  {
    name: "LPU (Lovely Professional University)",
    location: "Online",
    accreditation: "UGC Approved",
    specializations: "Marketing, HR, Finance, Supply Chain",
    ranking: "Top Online Programs",
    logo: "🏆",
  },
  {
    name: "NMIMS (SVKM's NMIMS)",
    location: "Online",
    accreditation: "AACSB Accredited",
    specializations: "Finance, Marketing, Business Analytics",
    ranking: "AICTE Approved",
    logo: "⭐",
  },
  {
    name: "Symbiosis Centre for Distance Learning",
    location: "Online",
    accreditation: "UGC Approved",
    specializations: "HR, Finance, Marketing, Operations",
    ranking: "ISO Certified",
    logo: "🌟",
  },
  {
    name: "Chandigarh University",
    location: "Online",
    accreditation: "UGC Approved",
    specializations: "Business Analytics, Finance, HR",
    ranking: "Top Emerging University",
    logo: "🎯",
  },
  {
    name: "Jain University",
    location: "Online",
    accreditation: "UGC Approved",
    specializations: "Marketing, Finance, Entrepreneurship",
    ranking: "NAAC A Accredited",
    logo: "💼",
  },
  {
    name: "IGNOU (Indira Gandhi National Open University)",
    location: "Online",
    accreditation: "Government University",
    specializations: "Business Administration, Finance, Management",
    ranking: "Largest Open University",
    logo: "🏛️",
  },
  {
    name: "DY Patil University",
    location: "Online",
    accreditation: "UGC Approved",
    specializations: "HR, Finance, Marketing, Analytics",
    ranking: "Distance Education Expert",
    logo: "📖",
  },
]

const ONLINE_MBA_PROGRAMS = [
  {
    name: "MBA in Finance",
    duration: "2 years",
    specializations: ["Corporate Finance", "Investment Banking", "Financial Analysis", "Risk Management"],
    placement: "92%",
    avgPackage: "₹8-12 LPA",
    description: "Master financial strategy and corporate finance. Industry-relevant curriculum with focus on practical applications.",
    highlights: [
      "Real-world financial case studies",
      "Industry expert mentorship",
      "100% online - study at your pace",
      "Placement support & counseling",
    ],
  },
  {
    name: "MBA in Marketing",
    duration: "2 years",
    specializations: ["Digital Marketing", "Brand Management", "Consumer Insights", "Marketing Analytics"],
    placement: "90%",
    avgPackage: "₹8-11 LPA",
    description: "Learn modern marketing strategies and digital transformation. Curriculum designed for working professionals.",
    highlights: [
      "Digital-first curriculum",
      "Live marketing projects",
      "Networking with industry leaders",
      "Career advancement support",
    ],
  },
  {
    name: "MBA in Human Resources",
    duration: "2 years",
    specializations: ["Talent Management", "Employee Relations", "Organizational Development", "HR Analytics"],
    placement: "91%",
    avgPackage: "₹8-11 LPA",
    description: "Develop HR expertise for modern organizations. Focus on people strategy and organizational effectiveness.",
    highlights: [
      "HR case studies from top companies",
      "Recruitment & training modules",
      "SHRM aligned curriculum",
      "1:1 career coaching",
    ],
  },
  {
    name: "MBA in Business Analytics",
    duration: "2 years",
    specializations: ["Data Analytics", "Business Intelligence", "Predictive Modeling", "Advanced Excel"],
    placement: "94%",
    avgPackage: "₹10-14 LPA",
    description: "Transform data into business decisions. Hands-on training with analytics tools and real datasets.",
    highlights: [
      "Live data projects",
      "Industry tool training (Tableau, Power BI, SQL)",
      "Analytics capstone project",
      "Job placement assistance",
    ],
  },
]

const ADMISSION_PROCESS = [
  {
    num: "🎯",
    step: "01",
    title: "Free Counselling Call",
    desc: "Book a free call with our MBA counselor. Discuss your career goals and program options.",
    time: "15-20 mins",
  },
  {
    num: "📋",
    step: "02",
    title: "University Shortlisting",
    desc: "We analyze your profile and shortlist 3-5 best-fit universities from our 25+ partners. Personalized same-day service.",
    time: "Same day",
  },
  {
    num: "📄",
    step: "03",
    title: "Application & Documents",
    desc: "We guide you through the application process. Prepare and submit documents (10th, 12th, Graduation marks).",
    time: "3-5 days",
  },
  {
    num: "✅",
    step: "04",
    title: "Admission Confirmation",
    desc: "University reviews your application and sends admission confirmation. No entrance exam needed for most.",
    time: "7-10 days",
  },
  {
    num: "💳",
    step: "05",
    title: "Fee Payment & Enrollment",
    desc: "Complete fee payment. Get enrolled officially. Access learning portal and course materials.",
    time: "Immediate",
  },
  {
    num: "🚀",
    step: "06",
    title: "Classes & Placement Support",
    desc: "Start your MBA journey. Access to HireSense AI, recruiter network, and dedicated placement counseling.",
    time: "Day 1",
  },
]

const MBA_FEATURES = [
  {
    icon: "⏱️",
    title: "100% Online & Flexible",
    desc: "Study at your own pace. No fixed class timings. Perfect for working professionals.",
  },
  {
    icon: "🎓",
    title: "25 Top Universities",
    desc: "Choose from 25+ UGC-approved universities. All degrees are nationally recognized.",
  },
  {
    icon: "💼",
    title: "Working Professional Friendly",
    desc: "Designed for people with work experience. No entrance exam required for most programs.",
  },
  {
    icon: "🎯",
    title: "Career-Focused Curriculum",
    desc: "Industry-relevant modules. Focus on skills employers actually look for.",
  },
  {
    icon: "🤝",
    title: "Placement Support",
    desc: "Access to 150+ company recruiter network. HireSense AI profile building. Job-ready support.",
  },
  {
    icon: "👥",
    title: "Expert Mentorship",
    desc: "Learn from industry professionals. 1:1 career counseling included.",
  },
]

const PLACEMENT_STATS = [
  { label: "Average Placement Rate", value: "91%", color: "#C4308A" },
  { label: "Average Package", value: "₹8-14 LPA", color: "#E75228" },
  { label: "Partner Universities", value: "25+", color: "#8B2A6A" },
  { label: "Recruiter Network", value: "150+", color: "#0C1042" },
]

const FAQ = [
  {
    q: "Is an online MBA degree valid and recognized?",
    a: "Yes, absolutely. All our partner universities are UGC-approved. Your degree is nationally and internationally recognized. Many online MBA graduates work at top companies.",
  },
  {
    q: "Do I need to appear for entrance exams like CAT/GMAT?",
    a: "No entrance exam required for most universities. Admission is based on your academic profile and work experience. We guide you through a simple application process.",
  },
  {
    q: "Can I do online MBA while working?",
    a: "Yes, that's the biggest advantage! Online MBA is designed for working professionals. You can study anytime, anywhere. Most students work full-time while pursuing the degree.",
  },
  {
    q: "What are the eligibility requirements?",
    a: "Bachelor's degree from any stream. Minimum 50% aggregate (some universities may require 45%). Work experience is preferred but not always mandatory.",
  },
  {
    q: "How much does an online MBA cost?",
    a: "Fees range from ₹80,000 to ₹4,00,000 depending on the university and specialization. We help you compare and choose the best value option. Installment plans available.",
  },
  {
    q: "Will I get job placement support?",
    a: "Yes! All enrolled students get access to HireSense AI (recruiter-facing talent platform), career counseling, interview prep, and our network of 150+ companies.",
  },
]

export default function OnlineMBADegreesPage() {
  const [selectedProgram, setSelectedProgram] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [open, setOpen] = useState(false) 

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
              Online MBA Degree Programs
            </span>
          </div>

          <h1 className="font-bold leading-[1.08] tracking-tight mb-6" style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)" }}>
            Online MBA from Top<br />
            <span style={NG_GRADIENT_TEXT}>Universities in India</span>
          </h1>

          <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-3xl">
            Earn your MBA while working full-time. Choose from 9 UGC-approved universities. 100% online. No entrance exam. Study at your own pace. Access to 150+ recruiters upon completion.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
            <button
              
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-white"
              style={{ background: NG_GRADIENT, boxShadow: "0 6px 24px rgba(196,48,138,0.3)" }}
              onClick={() => setOpen(true)}
            >
              Book Free Counselling →
            </button>
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 font-semibold px-7 py-3.5 rounded-xl text-sm transition-all"
            >
              Explore Programs
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-100">
            {PLACEMENT_STATS.map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-black mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-slate-600 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ONLINE MBA */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100" style={{ background: "#fafafa" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              Why Choose Online MBA
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              Perfect for <span style={NG_GRADIENT_TEXT}>Working Professionals</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MBA_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg"
                style={{ background: "#fff" }}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              Simple Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              From Counselling to <span style={NG_GRADIENT_TEXT}>Enrollment — 6 Steps</span>
            </h2>
            <p className="text-slate-500 max-w-lg">
              No entrance exam. No complicated procedure. Simple, transparent, MBA-focused admission process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADMISSION_PROCESS.map((process) => (
              <div
                key={process.step}
                className="rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all"
                style={{ background: "#fff" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{process.num}</div>
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-md"
                    style={{
                      background: "rgba(196,48,138,0.1)",
                      color: "#C4308A",
                    }}
                  >
                    {process.time}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{process.title}</h3>
                <p className="text-slate-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>

          {/* University Shortlisting Highlight */}
          <div
            className="mt-8 rounded-xl p-8 border-2"
            style={{
              borderColor: "#C4308A",
              background: "rgba(196,48,138,0.04)",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">University Shortlisting — Personalized Same Day</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Based on your profile, we shortlist 3–5 best-fit universities from our 25 partners. We compare fees, faculty, specializations, and placement records to find YOUR perfect match.
                </p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>✓ Compare all options in one place</li>
                  <li>✓ Personalized recommendations</li>
                  <li>✓ No pressure, no hidden costs</li>
                  <li>✓ Free counselling included</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100" style={{ background: "#fafafa" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              MBA Specializations
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              Choose Your <span style={NG_GRADIENT_TEXT}>Specialization</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {ONLINE_MBA_PROGRAMS.map((program, i) => (
              <button
                key={program.name}
                onClick={() => setSelectedProgram(i)}
                className="text-left rounded-xl p-6 border-2 transition-all"
                style={{
                  borderColor: selectedProgram === i ? "#C4308A" : "#e5e7eb",
                  background: selectedProgram === i ? "rgba(196,48,138,0.04)" : "#fff",
                  boxShadow: selectedProgram === i ? "0 8px 24px rgba(196,48,138,0.12)" : "none",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-slate-900">{program.name}</h3>
                    <p className="text-slate-500 text-xs mt-1">{program.duration}</p>
                  </div>
                  <div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: selectedProgram === i ? "#C4308A" : "#cbd5e1",
                      background: selectedProgram === i ? "#C4308A" : "transparent",
                    }}
                  >
                    {selectedProgram === i && <span style={{ color: "#fff", fontSize: "12px" }}>✓</span>}
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-3">{program.description}</p>
                <div className="flex gap-3 text-xs">
                  <span
                    style={{
                      background: "rgba(196,48,138,0.1)",
                      color: "#C4308A",
                      padding: "4px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    {program.placement} placed
                  </span>
                  <span
                    style={{
                      background: "rgba(196,48,138,0.1)",
                      color: "#C4308A",
                      padding: "4px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    {program.avgPackage}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Program Details */}
          <div className="rounded-xl p-8 border border-slate-200" style={{ background: "#fff" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Specializations</h3>
                <ul className="space-y-2">
                  {ONLINE_MBA_PROGRAMS[selectedProgram].specializations.map((spec) => (
                    <li key={spec} className="text-slate-600 text-sm flex items-center gap-2">
                      <span style={{ color: "#C4308A" }}>✓</span> {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Why This Program</h3>
                <ul className="space-y-2">
                  {ONLINE_MBA_PROGRAMS[selectedProgram].highlights.map((highlight) => (
                    <li key={highlight} className="text-slate-600 text-sm flex items-start gap-2">
                      <span style={{ color: "#C4308A", marginTop: "2px" }}>•</span> {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-lg p-6"
                style={{
                  background: "rgba(196,48,138,0.06)",
                  border: "1px solid rgba(196,48,138,0.15)",
                }}
              >
                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-1">Placement Rate</p>
                  <p className="text-3xl font-bold" style={{ color: "#C4308A" }}>
                    {ONLINE_MBA_PROGRAMS[selectedProgram].placement}
                  </p>
                </div>
                <div className="mb-6">
                  <p className="text-xs text-slate-500 mb-1">Average Package</p>
                  <p className="text-lg font-bold" style={{ color: "#C4308A" }}>
                    {ONLINE_MBA_PROGRAMS[selectedProgram].avgPackage}
                  </p>
                </div>
                <button
                  
                  className="block text-center font-semibold px-4 py-2 rounded-lg text-white text-sm transition-all hover:-translate-y-0.5"
                  style={{
                    background: NG_GRADIENT,
                    boxShadow: "0 4px 12px rgba(196,48,138,0.25)",
                  }}
                   onClick={() => setOpen(true)}
                >
                  Get Counselling
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4308A" }}>
              Partner Universities
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              9 UGC-Approved <span style={NG_GRADIENT_TEXT}>Universities</span>
            </h2>
            <p className="text-slate-500 max-w-lg">
              All our partner universities are UGC-recognized and offer quality online MBA programs with flexible learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PARTNER_UNIVERSITIES.map((uni) => (
              <div
                key={uni.name}
                className="rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg"
                style={{ background: "#fff" }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-3xl">{uni.logo}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm">{uni.name}</h3>
                    <p className="text-slate-500 text-xs">{uni.location}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm mb-4">
                  <p className="text-slate-600">
                    <strong className="text-slate-900">Status:</strong> {uni.accreditation}
                  </p>
                  <p className="text-slate-600">
                    <strong className="text-slate-900">Specializations:</strong>
                  </p>
                  <p className="text-slate-500 text-xs">{uni.specializations}</p>
                </div>

                <div
                  className="text-xs font-semibold px-2 py-1 rounded-md mb-4"
                  style={{
                    background: "rgba(196,48,138,0.1)",
                    color: "#C4308A",
                  }}
                >
                  {uni.ranking}
                </div>

                <a
                  href="#counseling"
                  className="inline-block text-sm font-semibold transition-all hover:-translate-y-0.5"
                  style={{ color: "#C4308A" }}
                >
                  Learn More →
                </a>
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
            <h2 className="text-3xl font-bold">Common Questions About Online MBA</h2>
          </div>

          <div className="space-y-2">
            {FAQ.map((faq, i) => (
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

      {/* CTA SECTION */}
      <section id="counseling" className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: "#0C1042" }}
          >
            <span className="text-2xl font-black" style={NG_GRADIENT_TEXT}>O</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Start Your Online<br />
            <span style={NG_GRADIENT_TEXT}>MBA Journey Today</span>
          </h2>

          <p className="text-slate-500 mb-10 text-base max-w-lg mx-auto">
            Free counselling. Personalized university shortlisting. Simple admission process. Study while you work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
             
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-3.5 rounded-xl text-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background: NG_GRADIENT, boxShadow: "0 6px 24px rgba(196,48,138,0.3)" }}
               onClick={() => setOpen(true)}
            >
              Book Free Counselling →
            </button>
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 font-semibold px-8 py-3.5 rounded-xl text-sm transition-all"
            >
              Explore Programs
            </a>
          </div>

          <div
            className="inline-flex items-center gap-3 rounded-xl px-5 py-3 mt-8"
            style={{ background: "rgba(196,48,138,0.06)", border: "1px solid rgba(196,48,138,0.15)" }}
          >
            <span className="text-lg">✅</span>
            <p className="text-sm font-semibold" style={{ color: "#C4308A" }}>
              9 Top Universities · No Entrance Exam · 91% Placement Rate
            </p>
          </div>
        </div>
      </section>
      <CounsellingDialog open={open} onClose={() => setOpen(false)} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
      `}</style>
    </div>
  )
}