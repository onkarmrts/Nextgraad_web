"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#080808] text-white min-h-screen font-sans overflow-x-hidden">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-16 lg:px-28 pt-32 pb-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Our Story
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight mb-8"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Building the
            <br />
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #f97316, #fb923c, #fdba74)" }}>
              Future of Careers
            </span>
            <br />
            in India.
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Nextgraad is an AI-powered career ecosystem — connecting students across India
            with real internships, intelligent hiring tools, and the skills companies
            actually want.
          </p>
        </div>

        {/* Floating stat cards */}
        <div className="absolute right-6 md:right-16 lg:right-28 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
          {[
            { value: "10,000+", label: "Students Enrolled" },
            { value: "200+", label: "Partner Companies" },
            { value: "7+", label: "Domains" },
          ].map((s) => (
            <div
              key={s.label}
              className="px-6 py-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm text-right"
            >
              <div className="text-2xl font-black text-orange-400">{s.value}</div>
              <div className="text-xs text-zinc-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="relative px-6 md:px-16 lg:px-28 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-orange-400 font-semibold tracking-widest uppercase mb-4">
              Why We Exist
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              No more paying for
              <span className="text-orange-400"> fake experience.</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
              We started Nextgraad because students were being charged thousands for
              internship certificates that meant nothing — dummy tasks, no real projects,
              no recruiter access. We built the alternative: real work, verified outcomes,
              and AI tools that actually get you hired.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🚫", title: "No Fake Projects", desc: "Every intern works on real industry deliverables." },
              { icon: "🤖", title: "AI-First Tools", desc: "ProfileForge & HireSense AI — worth ₹4,498 — free for every intern." },
              { icon: "🏆", title: "Verified Certificates", desc: "Auto-generated upon project submission. Recruiter-trusted." },
              { icon: "🇮🇳", title: "Built for India", desc: "Designed for Tier-1, Tier-2, and Tier-3 students equally." },
            ].map((card) => (
              <div
                key={card.title}
                className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-orange-500/40 hover:bg-zinc-900/70 transition-all duration-300"
              >
                <div className="text-2xl mb-3">{card.icon}</div>
                <div className="text-sm font-bold text-white mb-1">{card.title}</div>
                <div className="text-xs text-zinc-500 leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="relative px-6 md:px-16 lg:px-28 py-28">
        {/* Decorative line */}
        <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-orange-400 font-semibold tracking-widest uppercase mb-12 text-center">
            Founder
          </p>

          <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div
                className="w-40 h-40 md:w-56 md:h-56 rounded-3xl flex items-center justify-center text-6xl md:text-8xl font-black text-orange-400"
                style={{
                  background: "linear-gradient(135deg, #1a1a1a 0%, #111 100%)",
                  border: "1px solid rgba(249,115,22,0.3)",
                  boxShadow: "0 0 60px rgba(249,115,22,0.12)",
                }}
              >
                OM
              </div>
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-3xl opacity-40 blur-xl"
                style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium tracking-wider uppercase mb-4">
                Founder &amp; CEO
              </div>

              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
                Omkar Vaijanath
                <br />
                <span className="text-orange-400">Mathapati</span>
              </h2>

              <p className="text-zinc-500 text-sm md:text-base mb-6 font-mono tracking-wide">
                Legal Name: OMKAR VAIJANATH MATHAPATI
              </p>

              <p className="text-zinc-400 leading-relaxed text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0">
                Omkar founded Nextgraad with a single conviction — that every student in
                India, regardless of college tier or city, deserves access to real career
                infrastructure. He built Nextgraad&apos;s AI ecosystem ground-up, from
                ProfileForge and HireSense AI to the internship program now serving
                10,000+ students nationwide.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {["AI Ecosystem Builder", "EdTech Founder", "Career Infrastructure"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-zinc-700 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      </section>

      {/* ── PRODUCTS ── */}
      <section className="relative px-6 md:px-16 lg:px-28 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-orange-400 font-semibold tracking-widest uppercase mb-4 text-center">
            AI Ecosystem
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            What We&apos;ve Built
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "ProfileForge AI",
                badge: "Worth ₹1,499",
                desc: "Rewrites your resume for ATS systems, optimizes your LinkedIn headline, and matches keywords to the jobs you want.",
                color: "#f97316",
              },
              {
                name: "HireSense AI",
                badge: "Worth ₹2,999",
                desc: "Connects GitHub + LinkedIn + Resume into a talent profile. Recruiters discover you — you don't cold-apply.",
                color: "#fb923c",
              },
              {
                name: "DevIndex AI",
                badge: "Coming Soon",
                desc: "Developer intelligence platform. Scores your code contributions, GitHub activity, and project impact automatically.",
                color: "#fdba74",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="group relative p-7 rounded-3xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-orange-500/30 transition-all duration-400 overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
                  style={{ background: p.color }}
                />
                <div
                  className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase mb-5"
                  style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}30` }}
                >
                  {p.badge}
                </div>
                <h3 className="text-xl font-black mb-3">{p.name}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="relative px-6 md:px-16 lg:px-28 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-orange-400 font-semibold tracking-widest uppercase mb-4 text-center">
            Our Values
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: "01", title: "Radical Transparency", desc: "One-time ₹99 fee. No hidden charges, no renewals, no gotchas. Ever." },
              { num: "02", title: "Real Over Fake", desc: "Real projects. Real certificates. Real recruiter access. Nothing inflated." },
              { num: "03", title: "Access for All", desc: "Tier-3 college students deserve the same career tools as IIT graduates." },
              { num: "04", title: "AI as Infrastructure", desc: "We build AI that works for students, not just for headlines." },
            ].map((v) => (
              <div key={v.num} className="flex gap-6 group">
                <div
                  className="text-5xl font-black leading-none flex-shrink-0 transition-colors duration-300"
                  style={{ color: "rgba(249,115,22,0.15)", fontVariantNumeric: "tabular-nums" }}
                >
                  {v.num}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative px-6 md:px-16 lg:px-28 py-28">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #111 0%, #0f0f0f 100%)",
            border: "1px solid rgba(249,115,22,0.2)",
          }}
        >
          <div
            className="absolute inset-0 opacity-20 blur-3xl"
            style={{ background: "radial-gradient(ellipse at center, #f97316 0%, transparent 65%)" }}
          />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Join 10,000+ Students
              <br />
              <span className="text-orange-400">Already Inside.</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-xl mx-auto">
              Real projects. Verified certificate. AI tools worth ₹4,498 — yours for ₹99.
            </p>
            <a
              href="https://www.nextgraad.in/internships"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(90deg, #f97316, #fb923c)",
                boxShadow: "0 0 30px rgba(249,115,22,0.3)",
              }}
            >
              Enroll for ₹99 →
            </a>
            <p className="text-zinc-600 text-xs mt-5">
              No hidden fees · Offer letter in 24hrs · Work from home
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER NOTE ── */}
      <footer className="px-6 md:px-16 lg:px-28 py-10 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs">
          <span>© 2026 Nextgraad. All rights reserved.</span>
          <span>
            Founded by{" "}
            <span className="text-zinc-400 font-semibold">OMKAR VAIJANATH MATHAPATI</span>
          </span>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-zinc-400 transition-colors">Terms</a>
            <a href="/refund-policy" className="hover:text-zinc-400 transition-colors">Refund Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}