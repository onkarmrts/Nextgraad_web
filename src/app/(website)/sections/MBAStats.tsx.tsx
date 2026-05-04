"use client"

import { useEffect, useRef, useState } from "react"

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

const stats = [
  { value: 25,    suffix: "+",   label: "University Partners",           sub: "UGC / AICTE approved",            icon: "🎓" },
  { value: 12000, suffix: "+",   label: "Students Enrolled",             sub: "Across all programs",             icon: "👨‍🎓" },
  { value: 97,    suffix: "%",   label: "Satisfaction Rate",             sub: "Based on student surveys",        icon: "⭐" },
  { value: 300,   suffix: "+",   label: "Hiring Partners",               sub: "Recruiters in our network",       icon: "🏢" },
  { value: 85,    suffix: "%",   label: "Placement Rate",                sub: "Within 6 months",                 icon: "💼" },
  { value: 48,    suffix: "hrs", label: "Avg. Counselling Response",     sub: "Expert connects in 48 hours",     icon: "📞" },
]

export default function MBAStats() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-20 border-b"
      style={{ background: "#0C1042", borderBottomColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>

        <div className="text-center mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest block mb-3"
            style={{ color: "#C4308A" }}
          >
            By The Numbers
          </span>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Nextgraad{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              in numbers
            </span>
          </h2>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(196,48,138,0.2)",
            background: "rgba(196,48,138,0.04)",
          }}
        >
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} animate={visible} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 text-base">
            Trusted by students from{" "}
            <span className="text-white font-semibold">Delhi, Mumbai, Bangalore, Pune, Hyderabad</span>{" "}
            and 50+ more cities.
          </p>
        </div>

      </div>
    </section>
  )
}

function StatCard({
  stat,
  animate,
  index,
}: {
  stat: typeof stats[0]
  animate: boolean
  index: number
}) {
  const count = useCountUp(stat.value, 1800, animate)
  return (
    <div
      className="px-6 py-8 text-center ng-stat-card"
      style={{
        borderRight: index < 5 ? "1px solid rgba(196,48,138,0.15)" : "none",
        transition: "background 0.2s",
      }}
    >
      <span className="text-2xl block mb-3">{stat.icon}</span>
      <p
        className="text-3xl font-bold mb-1"
        style={{
          backgroundImage: "linear-gradient(90deg, #C4308A 0%, #E75228 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {animate ? count : 0}{stat.suffix}
      </p>
      <p className="text-sm font-semibold text-slate-200 mb-1">{stat.label}</p>
      <p className="text-xs text-slate-500">{stat.sub}</p>
    </div>
  )
}