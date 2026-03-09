"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

      {/* Base background */}
      <div className="absolute inset-0 bg-[#0B0F19]" />

      {/* Gradient Glow Layers (same palette as ecosystem) */}

      <div className="absolute w-[700px] h-[700px] bg-indigo-500/20 blur-[140px] rounded-full -top-40 -left-40 animate-pulse" />

      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[140px] rounded-full bottom-0 right-0 animate-pulse" />

      <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 blur-[120px] rounded-full top-[40%] left-[50%] -translate-x-1/2 animate-pulse" />

      {/* Neural grid */}

      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      {/* Floating particles */}

      <div className="absolute inset-0 overflow-hidden">

        {[...Array(28)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -1200, opacity: [0,1,0] }}
            transition={{
              duration: 14 + Math.random()*8,
              repeat: Infinity,
              delay: Math.random()*5
            }}
            className="absolute w-[3px] h-[3px] bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random()*100}%`,
              bottom: "-20px"
            }}
          />
        ))}

      </div>

      {/* Hero content */}

      <div className="max-w-5xl z-10">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Building the Future of
          <span className="text-cyan-400"> AI-Driven Careers</span>
        </motion.h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Nextgraad is creating an intelligent ecosystem where AI tools,
          practical education, and hiring infrastructure come together
          to transform how talent is discovered and developed.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="px-7 py-3 rounded-lg font-medium 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400
          hover:opacity-90 transition">
            Explore AI Ecosystem
          </button>

          <button className="px-7 py-3 border border-indigo-500/30 rounded-lg 
          hover:border-cyan-400 transition">
            View Products
          </button>

        </div>

      </div>

    </section>
  )
}