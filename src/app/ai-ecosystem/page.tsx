"use client"

import { motion } from "framer-motion"

const ecosystem = [
  "Learning",
  "Internships",
  "AI Tools",
  "Recruitment"
]

export default function Ecosystem() {
  return (
    <section className="py-32 px-6 text-center">

      <h2 className="text-4xl font-bold mb-20">
        Nextgraad Career Ecosystem
      </h2>

      <div className="relative flex justify-center items-center">

        {/* Center Circle */}

        <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold">
          Nextgraad
        </div>

        {/* Ecosystem Nodes */}

        {ecosystem.map((item, index) => {

          const positions = [
            "top-[-120px]",
            "right-[-140px]",
            "bottom-[-120px]",
            "left-[-140px]"
          ]

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className={`absolute ${positions[index]} w-32 h-32 flex items-center justify-center bg-zinc-900 border border-zinc-700 rounded-xl hover:border-orange-500`}
            >
              {item}
            </motion.div>
          )
        })}

      </div>

    </section>
  )
}