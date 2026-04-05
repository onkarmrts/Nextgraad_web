import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      title: "ProfileForge AI",
      subtitle:
        "AI powered profile and resume optimization that improves ATS score and highlights real skills.",
      icon: "🧠",
      status: "LIVE",
      statusColor: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
      buttonText: "Locked",
      buttonLink: "/ai-ecosystem",
      features: [
        "ATS Resume Score Improvement",
        "Role-Based Keyword Optimization",
        "AI Resume Formatting Suggestions",
        "LinkedIn Profile Enhancement",
      ],
    },
    {
      title: "DevIndex AI",
      subtitle:
        "Advanced developer skill indexing system that evaluates technical abilities and project experience.",
      icon: "</>",
      status: "UPCOMING",
      statusColor: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
      buttonText: "Locked",
      buttonLink: "#",
      features: [
        "Project-Based Skill Index",
        "Developer Portfolio Validation",
        "Technical Readiness Scoring",
        "Role Match Recommendations",
      ],
    },
    {
      title: "HireSense AI",
      subtitle:
        "AI driven recruitment intelligence platform connecting companies with the best candidates.",
      icon: "👥",
      status: "UPCOMING",
      statusColor: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
      buttonText: "Locked",
      buttonLink: "#",
      features: [
        "Smart Candidate Matching",
        "AI Shortlisting & Ranking",
        "Recruiter Dashboard Insights",
        "Verified Talent Discovery",
      ],
    },
  ];

  const whyNextgraad = [
    {
      title: "AI-Driven Skill Validation",
      desc: "We don't just build tools. We build a system that validates real skill execution through project workflows and intelligent scoring.",
    },
    {
      title: "Faster Shortlisting & Hiring",
      desc: "Our AI tools are designed to improve candidate visibility and reduce recruiter workload by automating evaluation and ranking.",
    },
    {
      title: "Industry-Aligned Career Infrastructure",
      desc: "Nextgraad creates an ecosystem where career development, internship experience, and hiring are connected together.",
    },
  ];

  const useCases = [
    {
      title: "Students & Job Seekers",
      desc: "Improve resume quality, build portfolio credibility, and become shortlist-ready with AI guidance.",
    },
    {
      title: "Recruiters & HR Teams",
      desc: "Find verified talent faster with AI ranking, skill indexing, and role-based matching.",
    },
    {
      title: "Companies & Startups",
      desc: "Build internship-to-job hiring pipelines and scale recruitment with pre-validated candidates.",
    },
    {
      title: "Marketing Teams",
      desc: "Generate ad creatives and marketing videos at scale using Simora AI creative automation.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0b1020] px-4 py-20 text-white">
      {/* Background Glow Effects */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-700/30 blur-[120px]" />
      <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* HERO SECTION */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Nextgraad <span className="text-[#05C8FB]">Products</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
            Nextgraad is building AI-powered products that transform how
            candidates build careers and how recruiters discover talent.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/ai-ecosystem"
              className="rounded-xl bg-[#F86815] px-7 py-3 text-sm font-bold text-white transition hover:opacity-90 md:text-base"
            >
              Explore AI Ecosystem
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* SECTION 1: PRODUCTS GRID */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-extrabold md:text-4xl">
            AI Products Built for Modern Hiring
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-gray-300 md:text-base">
            We are launching multiple AI products. ProfileForge AI is live, and
            the upcoming tools will complete the ecosystem.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {products.map((product, index) => {
              const isLive = product.status === "LIVE";

              return (
                <div
                  key={index}
                  className="relative rounded-2xl border border-pink-500/40 bg-gradient-to-br from-[#241E38]/70 to-[#121524]/70 p-8 backdrop-blur-md transition hover:border-[#05C8FB]/60"
                >
                  {/* STATUS BADGE */}
                  <div
                    className={`absolute right-6 top-6 rounded-full border px-4 py-1 text-xs font-bold tracking-wide ${product.statusColor}`}
                  >
                    {product.status}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-xl font-extrabold">
                      {product.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold">{product.title}</h3>
                      <p className="mt-1 text-sm text-gray-300">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div className="mt-6 space-y-2">
                    {product.features.map((feature, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200"
                      >
                        <span className="font-bold text-[#05C8FB]">✓</span>{" "}
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* ACTION BUTTON */}
                  <div className="mt-7 flex justify-end">
                    {isLive ? (
                      <Link
                        href={product.buttonLink}
                        className="rounded-xl bg-[#F86815] px-5 py-2 text-sm font-bold text-white transition hover:opacity-90"
                      >
                        {product.buttonText}
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="cursor-not-allowed rounded-xl bg-white/10 px-5 py-2 text-sm font-bold text-gray-400"
                      >
                        {product.buttonText}
                      </button>
                    )}
                  </div>

                  {/* UPCOMING TEXT */}
                  {!isLive && (
                    <p className="mt-4 text-xs text-gray-400">
                      This product is currently under development and will be
                      available soon.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: WHY NEXTGRAAD */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-extrabold md:text-4xl">
            Why Nextgraad Products are Different
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-gray-300 md:text-base">
            We are not building tools for features. We are building tools for
            outcomes.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {whyNextgraad.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:bg-white/10"
              >
                <h3 className="text-xl font-extrabold text-[#05C8FB]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: USE CASES */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-extrabold md:text-4xl">
            Who Can Use These Products?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-gray-300 md:text-base">
            Nextgraad products are designed for applicants, recruiters, and
            companies who want faster results in modern hiring.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:bg-white/10"
              >
                <h3 className="text-xl font-extrabold text-white">
                  <span className="text-[#F86815]">● </span>
                  {useCase.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-300">
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: CTA */}
        <div className="mt-24 rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md md:p-14">
          <h2 className="text-3xl font-extrabold md:text-5xl">
            The Future of Careers will be{" "}
            <span className="text-[#05C8FB]">AI-Verified</span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-gray-300 md:text-lg">
            Nextgraad is building a complete ecosystem where candidates become
            shortlist-ready through AI profile optimization, skill validation,
            and opportunity matching.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/recruiters"
              className="rounded-xl bg-[#F86815] px-8 py-3 text-sm font-bold text-white transition hover:opacity-90 md:text-base"
            >
              Partner as Recruiter
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 md:text-base"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}