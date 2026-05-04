"use client"

import Link from "next/link"

const testimonials = [
  {
    initials: "PS",
    name: "Priya Sharma",
    from: "Working Professional · Delhi",
    quote: "Nextgraad helped me choose the right MBA university in under 2 days. The counsellor understood my work schedule and budget perfectly.",
    program: "MBA in Finance · Amity University",
    score: "⭐⭐⭐⭐⭐",
  },
  {
    initials: "RK",
    name: "Rahul Kapoor",
    from: "UG Graduate · Pune",
    quote: "I was confused between 6 universities. After the free counselling call, everything was clear. Enrolled in 4 days.",
    program: "MBA in Marketing · Manipal University",
    score: "⭐⭐⭐⭐⭐",
  },
  {
    initials: "SM",
    name: "Sneha Mehta",
    from: "Job Seeker · Hyderabad",
    quote: "The placement support with TalentPulse was a bonus I didn't expect. Got two recruiter messages within 3 weeks of enrolling.",
    program: "MBA in HR · NMIMS Online",
    score: "⭐⭐⭐⭐⭐",
  },
]

const initialsColors = [
  { bg: "linear-gradient(135deg, #C4308A, #E75228)" },
  { bg: "linear-gradient(135deg, #0C1042, #1a2580)" },
  { bg: "linear-gradient(135deg, #E75228, #C4308A)" },
]

export default function MBAApplyCTA() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span
              className="text-xs font-bold uppercase tracking-widest block mb-3"
              style={{ color: "#C4308A" }}
            >
              Student Stories
            </span>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Real students.{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Real results.
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="rounded-2xl p-6 transition-all ng-testimonial-card"
                style={{ background: "#fafafa", border: "1px solid #ebebeb" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-full text-white font-bold text-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: initialsColors[i].bg }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.from}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div
                  className="pt-3 flex items-center justify-between"
                  style={{ borderTop: "1px solid #ebebeb" }}
                >
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(196,48,138,0.08)", color: "#C4308A" }}
                  >
                    {t.program}
                  </span>
                  <span className="text-xs">{t.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Block */}
        <div
          className="relative rounded-3xl overflow-hidden px-8 md:px-14 py-14 text-center"
          style={{ background: "#0C1042" }}
        >
          {/* Decorative glows */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: "600px",
              height: "300px",
              background: "radial-gradient(ellipse, rgba(196,48,138,0.15) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 pointer-events-none"
            style={{
              width: "300px",
              height: "300px",
              background: "radial-gradient(circle, rgba(231,82,40,0.1) 0%, transparent 70%)",
            }}
          />

          <div className="relative">
            <span
              className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider"
              style={{
                border: "1px solid rgba(231,82,40,0.3)",
                background: "rgba(231,82,40,0.12)",
                color: "#f4a07a",
              }}
            >
              🎓 Applications Open — 2025 Batch
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight max-w-xl mx-auto leading-tight">
              Start your PG journey with a{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                free counselling session.
              </span>
            </h2>

            <p className="text-slate-400 mb-8 max-w-lg mx-auto text-base">
              No commitment. No pressure. Just a 30-minute conversation that could change where you're heading next.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Link
                href="/counselling"
                className="font-bold px-8 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                  color: "#ffffff",
                  boxShadow: "0 6px 24px rgba(196,48,138,0.35)",
                }}
              >
                Book Free Counselling →
              </Link>
              <Link
                href="/programs"
                className="font-semibold px-8 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.75)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                Browse All Programs
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                { label: "Free counselling", icon: "📞" },
                { label: "No hidden fees",   icon: "✅" },
                { label: "Expert guidance",  icon: "🎯" },
                { label: "25+ universities", icon: "🎓" },
              ].map(i => (
                <div key={i.label} className="flex items-center gap-2 text-slate-400 text-sm">
                  <span>{i.icon}</span> {i.label}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .ng-testimonial-card:hover {
          border-color: rgba(196,48,138,0.25) !important;
          box-shadow: 0 8px 24px rgba(196,48,138,0.07);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  )
}