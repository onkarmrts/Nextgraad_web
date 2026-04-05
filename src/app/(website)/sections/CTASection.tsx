"use client"

import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 text-center overflow-hidden">

      <div className="absolute inset-0 -z-10 opacity-20 
      bg-[linear-gradient(#444_1px,transparent_1px),linear-gradient(90deg,#444_1px,transparent_1px)] 
      bg-[size:40px_40px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your AI Career?
        </h2>

        <p className="text-gray-400 mb-10">
          Join Nextgraad and unlock practical learning,
          internships and AI powered hiring.
        </p>

        <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg">
          Get Started
        </button>

      </motion.div>

    </section>
  )
}