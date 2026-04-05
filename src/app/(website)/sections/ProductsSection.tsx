"use client"

import { motion } from "framer-motion"
import ProductCard from "../components/ProductCard"

import { Brain, Code2, Users } from "lucide-react"

export default function ProductsSection() {

  const products = [
    {
      title: "ProfileForge AI",
      description:
        "AI powered profile and resume optimization that improves ATS score and highlights real skills.",
      icon: Brain
    },
    {
      title: "DevIndex AI",
      description:
        "Advanced developer skill indexing system that evaluates technical abilities and project experience.",
      icon: Code2
    },
    {
      title: "HireSense AI",
      description:
        "AI driven recruitment intelligence platform connecting companies with the best candidates.",
      icon: Users
    }
  ]

  return (

    <section className="relative py-32 px-6 text-center overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-500 opacity-20 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <h2 className="text-4xl font-bold mb-6">
          Nextgraad AI Products
        </h2>

        <p className="text-gray-400 mb-20 max-w-2xl mx-auto">
          Our AI powered tools help students build stronger profiles,
          improve skills, and connect with companies intelligently.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              icon={product.icon}
            />
          ))}

        </div>

      </motion.div>

    </section>

  )
}