"use client"

import { motion } from "framer-motion"

const roadmap = [
  "Launch ProfileForge AI",
  "Launch DevIndex AI",
  "Launch HireSense AI",
  "Startup Internship Network",
  "Global Talent Platform"
]

export default function Roadmap() {
  return (
    <section className="relative py-32 px-6 text-center overflow-hidden">

      {/* Background glow */}

      <div className="absolute inset-0 bg-[#0B0F19]" />

      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full -top-20 -left-20" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0" />

      {/* Grid pattern */}

      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <h2 className="relative text-4xl font-bold mb-24 z-10">
        Nextgraad Roadmap
      </h2>

      <div className="relative max-w-4xl mx-auto">

        {/* animated timeline line */}

        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5 }}
          className="absolute left-1/2 top-0 w-[3px]
          bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400
          -translate-x-1/2"
        />

        {roadmap.map((item, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6, delay: i * .2 }}
            className={`mb-16 flex ${
              i % 2 ? "justify-start" : "justify-end"
            }`}
          >

            {/* milestone node */}

            <div className="absolute left-1/2 -translate-x-1/2 mt-4">

              <div className="w-5 h-5 rounded-full
              bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400
              shadow-[0_0_20px_rgba(99,102,241,0.8)]" />

            </div>

            {/* roadmap card */}

            <div className="w-[42%] relative">

              <div className="p-6 rounded-xl
              border border-indigo-500/20
              bg-zinc-900/70
              backdrop-blur-xl
              hover:border-cyan-400/40
              transition">

                <p className="text-lg font-medium text-gray-200">
                  {item}
                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}