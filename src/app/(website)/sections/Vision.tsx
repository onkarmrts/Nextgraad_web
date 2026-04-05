"use client"

import { motion } from "framer-motion"

const sections = [
  {
    title: "The Problem",
    desc: "Millions of graduates struggle to find jobs because traditional education focuses on theory instead of practical industry skills."
  },
  {
    title: "Our Solution",
    desc: "Nextgraad combines practical learning, startup internships, and AI-powered recruitment tools to create career-ready professionals."
  },
  {
    title: "The Outcome",
    desc: "Students gain real experience, build strong portfolios, and connect directly with companies looking for skilled talent."
  }
]

export default function ProblemSolution() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* AI Grid Background */}

      <div className="absolute inset-0 opacity-20 -z-10
      bg-[linear-gradient(#444_1px,transparent_1px),
      linear-gradient(90deg,#444_1px,transparent_1px)]
      bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          Transforming Education Into Careers
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Nextgraad bridges the gap between education and employment
          through a powerful ecosystem of learning, experience,
          and intelligent hiring.
        </p>

        {/* Flow Section */}

        <div className="mt-20 grid md:grid-cols-3 gap-12 items-center">

          {sections.map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ delay:i*0.2 }}
              whileHover={{ scale:1.05 }}
              className="relative p-8 rounded-xl
              bg-zinc-900/80 backdrop-blur-md
              border border-zinc-800
              hover:shadow-lg hover:shadow-purple-500/20
              transition"
            >

              {/* glowing dot */}

              <div className="absolute -top-3 left-6
              w-3 h-3 rounded-full
              bg-gradient-to-r from-purple-500 to-orange-500
              shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Animated Flow Line */}

        <div className="mt-12 flex justify-center">

          <motion.div
            animate={{ opacity:[0.3,1,0.3] }}
            transition={{ repeat:Infinity, duration:3 }}
            className="h-[2px] w-2/3
            bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
          />

        </div>

      </div>
    </section>
  )
}