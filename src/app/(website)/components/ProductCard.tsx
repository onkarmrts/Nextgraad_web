"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

type Props = {
  title: string
  description: string
  icon: LucideIcon
}

export default function ProductCard({ title, description, icon: Icon }: Props) {
  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group relative p-[1px] rounded-xl 
      bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600"
    >

      <div className="relative h-full rounded-xl bg-zinc-900/80 
      backdrop-blur-xl p-8 border border-zinc-800 overflow-hidden">

        {/* Glow Effect */}

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-500 bg-gradient-to-r 
        from-purple-500/20 to-orange-500/20 blur-2xl"></div>

        {/* Icon */}

        <div className="relative mb-6 flex justify-center">

          <div className="p-4 rounded-lg 
          bg-gradient-to-r from-purple-600 to-orange-500">

            <Icon className="text-white w-6 h-6" />

          </div>

        </div>

        {/* Title */}

        <h3 className="relative text-xl font-semibold mb-4 text-white">
          {title}
        </h3>

        {/* Description */}

        <p className="relative text-gray-400 leading-relaxed">
          {description}
        </p>

      </div>

    </motion.div>
  )
}