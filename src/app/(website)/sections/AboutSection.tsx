"use client"

import { motion } from "framer-motion"

const pillars = [
  {
    title: "Practical Learning",
    desc: "Students learn real industry skills instead of outdated theoretical education."
  },
  {
    title: "Startup Internships",
    desc: "Hands-on experience through internships working on real startup products."
  },
  {
    title: "AI Recruitment",
    desc: "AI-powered hiring tools connect skilled talent directly with companies."
  }
]

export default function AboutSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* AI GRID BACKGROUND */}

      <div className="absolute inset-0 opacity-20 -z-10
      bg-[linear-gradient(#444_1px,transparent_1px),
      linear-gradient(90deg,#444_1px,transparent_1px)]
      bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}

        <motion.h2
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Why Nextgraad Exists
        </motion.h2>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:.2 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Traditional education focuses on theory, leaving graduates
          unprepared for real jobs. Nextgraad bridges this gap by
          combining practical learning, startup experience and
          AI-driven recruitment into one unified ecosystem.
        </motion.p>

        {/* PIPELINE GRAPHIC */}

        <div className="mt-20 relative">

          {/* Animated pipeline line */}

          <div className="absolute top-1/2 left-0 right-0 h-[2px]
          bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
          opacity-40" />

          {/* Cards */}

          <div className="grid md:grid-cols-3 gap-10 relative">

            {pillars.map((pillar,i)=>(

              <motion.div
                key={i}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ delay:i*0.2 }}
                whileHover={{ scale:1.05 }}
                className="relative p-8 rounded-xl
                bg-zinc-900/80 backdrop-blur-md
                border border-zinc-800
                hover:shadow-purple-500/20
                hover:shadow-lg
                transition"
              >

                {/* glowing dot */}

                <div className="absolute -top-3 left-1/2
                -translate-x-1/2
                w-4 h-4 rounded-full
                bg-gradient-to-r from-purple-500 to-orange-500
                shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

                <h3 className="text-xl font-semibold">
                  {pillar.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm">
                  {pillar.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  )
}