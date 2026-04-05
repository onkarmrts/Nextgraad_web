import Link from "next/link"
import Image from "next/image"

export default function Footer() {

  return (
    <footer className="border-t border-gray-800 bg-[#0B0F19] mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}

        <div>

          <div className="flex items-center gap-3">

            <Image
              src="/logos/logo.png"
              alt="Nextgraad"
              width={40}
              height={40}
            />

            <span className="font-semibold text-lg">
              Nextgraad
            </span>

          </div>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Building the next generation AI-powered career ecosystem
            connecting education, skills, and intelligent hiring.
          </p>

        </div>

        {/* Products */}

        <div>

          <h3 className="font-semibold mb-4">Products</h3>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li><Link href="/products">ProfileForge AI</Link></li>
            <li><Link href="/products">DevIndex AI</Link></li>
            <li><Link href="/products">HireSense AI</Link></li>

          </ul>

        </div>

        {/* Company */}

        <div>

          <h3 className="font-semibold mb-4">Company</h3>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li><Link href="/about">About</Link></li>
            <li><Link href="/internships">Internships</Link></li>
            <li><Link href="/contact">Contact</Link></li>

          </ul>

        </div>

        {/* Legal */}

        <div>

          <h3 className="font-semibold mb-4">Legal</h3>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/refund-policy">Refund Policy</Link></li>

          </ul>

        </div>

      </div>

      <div className="text-center text-gray-500 text-sm pb-8">
        © {new Date().getFullYear()} Nextgraad. All rights reserved.
      </div>

    </footer>
  )
}