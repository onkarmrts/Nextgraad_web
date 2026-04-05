"use client"

import { motion } from "framer-motion"

const stats = [
  { number: "10K+", label: "Students" },
  { number: "200+", label: "Startups" },
  { number: "50+", label: "AI Tools Built" },
  { number: "95%", label: "Placement Success" }
]

export default function StatsSection() {
  return (
    <section className="py-32 text-center">

      <h2 className="text-4xl font-bold mb-20">
        Nextgraad Impact
      </h2>

      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

        {stats.map((stat,i)=> (

          <motion.div
            key={i}
            initial={{ opacity:0, scale:.8 }}
            whileInView={{ opacity:1, scale:1 }}
            transition={{ delay:i*.2 }}
            className="p-10 rounded-xl border border-zinc-800
            bg-zinc-900/70 backdrop-blur-md
            hover:shadow-purple-500/20 hover:shadow-lg"
          >

            <h3 className="text-4xl font-bold
            bg-gradient-to-r from-purple-500 to-orange-500
            text-transparent bg-clip-text">

              {stat.number}

            </h3>

            <p className="text-gray-400 mt-2">{stat.label}</p>

          </motion.div>

        ))}

      </div>

    </section>
  )
}