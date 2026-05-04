"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100" style={{ fontFamily: "'Sora', 'Plus Jakarta Sans', sans-serif" }}>
      {/* Main Footer Content */}
      <div className="px-6 md:px-16 lg:px-24 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="font-bold text-base mb-4 text-white">Nextgraad</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                India's leading edtech platform for MBA counseling, internships, and talent intelligence.
              </p>
              <div className="flex gap-3">
                {["f", "t", "in", "yt"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                    }}
                    title={social}
                  >
                    {social === "f" && "f"}
                    {social === "t" && "𝕏"}
                    {social === "in" && "in"}
                    {social === "yt" && "▶"}
                  </a>
                ))}
              </div>
            </div>

            {/* MBA Programs */}
            <div>
              <h4 className="font-bold text-sm mb-4 text-white">Online MBA</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/degree-courses" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    MBA Degree Programs
                  </Link>
                </li>
                <li>
                  <Link href="/degree-courses#programs" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    MBA Specializations
                  </Link>
                </li>
                <li>
                  <Link href="/degree-courses#universities" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Partner Universities
                  </Link>
                </li>
                <li>
                  <Link href="/degree-courses" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    MBA Admission Process
                  </Link>
                </li>
                <li>
                  <a href="#counseling" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Free Counselling
                  </a>
                </li>
              </ul>
            </div>

            {/* Universities */}
            <div>
              <h4 className="font-bold text-sm mb-4 text-white">Our Universities</h4>
              <ul className="space-y-2.5">
                <li>
                  <span className="text-xs text-slate-500 block mb-2">Partner with 25 Top Universities:</span>
                </li>
                {[
                  "Amity University",
                  "Manipal University",
                  "LPU",
                  "NMIMS",
                  "Symbiosis",
                ].map((uni) => (
                  <li key={uni}>
                    <span className="text-sm text-slate-400 hover:text-slate-100 transition-colors cursor-pointer">
                      {uni}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Universities */}
            <div>
              <h4 className="font-bold text-sm mb-4 text-white">More Universities</h4>
              <ul className="space-y-2.5">
                {[
                  "Chandigarh University",
                  "Jain University",
                  "IGNOU",
                  "DY Patil University",
                ].map((uni) => (
                  <li key={uni}>
                    <span className="text-sm text-slate-400 hover:text-slate-100 transition-colors cursor-pointer">
                      {uni}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Talent & Recruitment */}
            <div>
              <h4 className="font-bold text-sm mb-4 text-white">Talent & Jobs</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/internships" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Internship Programs
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    TalentPulse AI
                  </Link>
                </li>
                <li>
                  <Link href="/recruiters" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Recruiters Network
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Hire MBA Talent
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Resources & Company Section */}
      <div className="px-6 md:px-16 lg:px-24 py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Resources */}
            <div>
              <h4 className="font-bold text-sm mb-4 text-white">Resources</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    MBA Admission Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Online Learning Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Career Counselling
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Blog & Articles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-sm mb-4 text-white">Company</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Career at Nextgraad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Press & Media
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                    Partner With Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm mb-4 text-white">Contact & Support</h4>
              <ul className="space-y-2.5">
                <li>
                  <div className="text-sm text-slate-400">
                    <strong>Email:</strong><br />
                    <a href="mailto:hello@nextgraad.com" className="hover:text-slate-100 transition-colors">
                      hello@nextgraad.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text-sm text-slate-400">
                    <strong>Phone:</strong><br />
                    <a href="tel:+917400179704" className="hover:text-slate-100 transition-colors">
                      +91 7400179704
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text-sm text-slate-400">
                    <strong>Available:</strong> Mon-Fri, 9 AM - 6 PM IST
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-6 md:px-16 lg:px-24 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Disclaimer
              </a>
              <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 md:justify-end flex-wrap">
              <span className="text-xs text-slate-500">Follow us:</span>
              {["Facebook", "Twitter", "LinkedIn", "Instagram", "YouTube"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-6">
            <p className="text-xs text-slate-500 text-center mb-2">
              © 2024-2025 Nextgraad EdTech. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 text-center">
              Nextgraad is an authorized education partner providing MBA counseling, online degree programs, internship placements, and talent intelligence services.
            </p>
          </div>
        </div>
      </div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nextgraad",
            "url": "https://nextgraad.com",
            "logo": "https://nextgraad.com/logo.png",
            "description": "India's leading edtech platform for online MBA degree programs, internships, and talent intelligence",
            "sameAs": [
              "https://www.facebook.com/nextgraad",
              "https://twitter.com/nextgraad",
              "https://www.linkedin.com/company/nextgraad",
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Support",
              "telephone": "+91-9876543210",
              "email": "hello@nextgraad.com",
            },
            "areaServed": "IN",
            "knowsAbout": [
              "Online MBA",
              "MBA Counseling",
              "Internships",
              "Talent Intelligence",
              "Recruitment",
              "Higher Education",
            ],
          }),
        }}
      />
    </footer>
  )
}