"use client"

import { motion } from "framer-motion"

const nodes = [
  { name: "Learning", angle: 0 },
  { name: "Internships", angle: 90 },
  { name: "AI Products", angle: 180 },
  { name: "Recruitment", angle: 270 }
]

const radius = 200

export default function Ecosystem() {

  return (
    <section className="relative py-32 flex flex-col items-center overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[#0B0F19]" />

      {/* Glow background */}

      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full -top-40 -left-40" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0" />

      {/* Neural grid */}

      <div className="absolute inset-0 opacity-20
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_1px,transparent_1px)]
      [background-size:40px_40px]" />

      {/* Title */}

      <div className="text-center mb-20 relative z-10">

        <h2 className="text-4xl font-bold">
          Nextgraad Career Ecosystem
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Learning, internships, AI products and recruitment
          connected into one intelligent ecosystem.
        </p>

      </div>

      {/* ECOSYSTEM */}

      <div className="relative w-[520px] h-[520px] flex items-center justify-center">

        {/* CENTER CORE */}

        <motion.div
          animate={{ scale: [1,1.1,1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-44 h-44 rounded-full
          bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400
          flex items-center justify-center
          font-semibold text-lg
          shadow-[0_0_70px_rgba(99,102,241,0.7)]"
        >
          Nextgraad
        </motion.div>


        {/* CONNECTION LINES */}

        <svg className="absolute w-full h-full">

          {nodes.map((node,i)=>{

            const rad = node.angle * Math.PI / 180

            const x = 260 + radius * Math.cos(rad)
            const y = 260 + radius * Math.sin(rad)

            return (
              <motion.line
                key={i}
                x1="260"
                y1="260"
                x2={x}
                y2={y}
                stroke="url(#grad)"
                strokeWidth="2"
                initial={{ pathLength:0 }}
                whileInView={{ pathLength:1 }}
                transition={{ duration:1.5, delay:i*.2 }}
              />
            )

          })}

          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>

        </svg>


        {/* ORBIT RING */}

        <div className="absolute w-[420px] h-[420px] rounded-full border border-indigo-500/20" />


        {/* ORBITING NODES */}

        {nodes.map((node,i)=>{

          const rad = node.angle * Math.PI / 180
          const x = radius * Math.cos(rad)
          const y = radius * Math.sin(rad)

          return(

            <motion.div
              key={i}
              animate={{ rotate:360 }}
              transition={{
                duration:25,
                repeat:Infinity,
                ease:"linear"
              }}
              className="absolute"
            >

              <div
                style={{
                  transform:`translate(${x}px, ${y}px)`
                }}
                className="w-40 h-20
                bg-zinc-900/80 backdrop-blur-xl
                border border-indigo-500/20
                rounded-xl
                flex items-center justify-center
                text-sm font-medium
                hover:border-cyan-400
                hover:scale-110
                transition"
              >
                {node.name}
              </div>

            </motion.div>

          )

        })}


        {/* NEURAL PARTICLES */}

        {[...Array(8)].map((_,i)=>(

          <motion.div
            key={i}
            animate={{
              x:[0,150,0,-150,0],
              y:[0,-150,0,150,0],
              opacity:[0,1,0]
            }}
            transition={{
              duration:12+i,
              repeat:Infinity,
              ease:"linear"
            }}
            className="absolute w-[3px] h-[3px] bg-cyan-400 rounded-full"
          />

        ))}

      </div>

    </section>
  )
}