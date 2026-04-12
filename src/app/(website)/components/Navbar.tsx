"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      suppressHydrationWarning
      className="w-full border-b border-gray-800 bg-[#0B0F19]/80 backdrop-blur-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/logo.png"
            alt="Nextgraad"
            width={40}
            height={40}
            priority
          />
          <span className="font-semibold text-lg tracking-wide text-white">
            Nextgraad
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
          <Link href="/ai-ecosystem" className="hover:text-white transition">
            AI Ecosystem
          </Link>

          <Link href="/products" className="hover:text-white transition">
            Products
          </Link>

          <Link href="/internships" className="hover:text-white transition">
            Internships
          </Link>

          <Link href="/recruiters" className="hover:text-white transition">
            Recruiters
          </Link>

          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>

          {/* Intern Dashboard Button */}
          <Link
            href="/portal/login"
            className="hover:text-white transition text-[#a78bfa] font-semibold"
          >
            Intern Dashboard
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/internships"
            className="bg-[#FF5A2F] px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition text-white"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-300">
          <Link href="/ai-ecosystem">AI Ecosystem</Link>
          <Link href="/products">Products</Link>
          <Link href="/internships">Internships</Link>
          <Link href="/recruiters">Recruiters</Link>
          <Link href="/contact">Contact</Link>

          {/* Mobile Intern Dashboard */}
          <Link
            href="/portal/dashboard"
            className="text-[#a78bfa] font-semibold"
          >
            Intern Dashboard
          </Link>
        </div>
      )}
    </nav>
  )
}