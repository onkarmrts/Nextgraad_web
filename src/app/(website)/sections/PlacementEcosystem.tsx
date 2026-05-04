"use client"

const hiringCompanies = [
  "Deloitte", "Wipro", "Infosys", "HCL", "TCS", "Accenture",
  "Amazon", "Flipkart", "Zomato", "BYJU'S", "Razorpay", "Swiggy",
]

const placementHighlights = [
  { icon: "💼", stat: "85%+", label: "Students placed within 6 months of degree" },
  { icon: "📈", stat: "2.4×", label: "Average salary hike post MBA" },
  { icon: "🏢", stat: "300+", label: "Hiring companies in our network" },
  { icon: "🎯", stat: "18 days", label: "Average first recruiter outreach (TalentPulse)" },
]

export default function PlacementEcosystem() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest block mb-3"
              style={{ color: "#C4308A" }}
            >
              Placement Ecosystem
            </span>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
              Your degree opens doors.{" "}
              <br />
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                We make sure you walk through them.
              </span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Placement support isn't an afterthought at Nextgraad — it's built into every program. From resume workshops to TalentPulse scoring to direct recruiter access.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {placementHighlights.map(p => (
              <div
                key={p.stat}
                className="rounded-2xl p-5 transition-all"
                style={{ background: "#fafafa", border: "1px solid #ebebeb" }}
              >
                <span className="text-2xl block mb-3">{p.icon}</span>
                <p
                  className="text-2xl font-bold mb-1"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {p.stat}
                </p>
                <p className="text-xs text-slate-500 leading-snug">{p.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What's included */}
        <div
          className="rounded-2xl p-8 mb-10"
          style={{ background: "#fafafa", border: "1px solid #ebebeb" }}
        >
          <p
            className="text-sm font-bold mb-6 uppercase tracking-wider"
            style={{ color: "#555" }}
          >
            Placement Support Included With Every Program
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "📝", title: "Resume Workshop",  desc: "ATS-optimised resume built with AI + expert review" },
              { icon: "🎤", title: "Mock Interviews",   desc: "Practice rounds with industry professionals" },
              { icon: "⚡", title: "TalentPulse Score", desc: "AI career score with daily rescoring" },
              { icon: "🔗", title: "Recruiter Network", desc: "Direct visibility to 300+ verified hiring companies" },
            ].map((s, i) => (
              <div key={s.title} className="flex flex-col gap-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    background: i % 2 === 0
                      ? "rgba(196,48,138,0.08)"
                      : "rgba(231,82,40,0.08)",
                  }}
                >
                  {s.icon}
                </div>
                <p className="text-sm font-bold text-slate-800">{s.title}</p>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company logos marquee */}
        <div>
          <p
            className="text-xs text-center font-semibold uppercase tracking-widest mb-5"
            style={{ color: "#aaa" }}
          >
            Our students work at
          </p>
          <div className="overflow-hidden relative">
            <div
              className="absolute left-0 top-0 h-full w-16 pointer-events-none z-10"
              style={{ background: "linear-gradient(to right, #fff, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 h-full w-16 pointer-events-none z-10"
              style={{ background: "linear-gradient(to left, #fff, transparent)" }}
            />
            <div className="flex gap-4 ng-company-scroll" style={{ width: "max-content" }}>
              {[...hiringCompanies, ...hiringCompanies].map((c, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 rounded-xl px-6 py-3 text-sm font-semibold transition-all"
                  style={{
                    border: "1px solid #e5e7eb",
                    background: "#fafafa",
                    color: "#555",
                  }}
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes ngCompanyScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ng-company-scroll {
          animation: ngCompanyScroll 22s linear infinite;
        }
        .ng-company-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}