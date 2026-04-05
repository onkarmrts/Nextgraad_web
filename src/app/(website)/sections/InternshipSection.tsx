"use client"

import { motion } from "framer-motion"

const steps = [
  {
    title: "Apply",
    desc: "Students apply for internships across partnered startups."
  },
  {
    title: "Skill Assessment",
    desc: "AI evaluates technical and problem-solving abilities."
  },
  {
    title: "Startup Projects",
    desc: "Work on real startup products and gain practical experience."
  },
  {
    title: "Build Portfolio",
    desc: "Create a strong portfolio with real industry work."
  },
  {
    title: "Get Hired",
    desc: "Companies recruit directly from the Nextgraad talent pool."
  }
]

export default function InternshipSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* AI GRID BACKGROUND */}

      <div className="absolute inset-0 opacity-20 -z-10
      bg-[linear-gradient(#444_1px,transparent_1px),
      linear-gradient(90deg,#444_1px,transparent_1px)]
      bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          Startup Internship Journey
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          A structured pathway that transforms students into
          industry-ready professionals.
        </p>

        {/* TIMELINE */}

        <div className="relative mt-24">

          {/* connection line */}

          <div className="absolute top-12 left-0 right-0 h-[2px]
          bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
          opacity-40" />

          <div className="grid md:grid-cols-5 gap-8">

            {steps.map((step, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative p-6 rounded-xl
                bg-zinc-900/80 backdrop-blur-md
                border border-zinc-800
                hover:shadow-lg hover:shadow-purple-500/20
                transition"
              >

                {/* glowing node */}

                <div className="absolute -top-6 left-1/2
                -translate-x-1/2
                w-10 h-10 rounded-full
                flex items-center justify-center
                bg-gradient-to-r from-purple-500 to-orange-500
                font-semibold
                shadow-[0_0_15px_rgba(168,85,247,0.8)]">

                  {i + 1}

                </div>

                <h3 className="mt-6 font-semibold text-lg">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {step.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  )
}