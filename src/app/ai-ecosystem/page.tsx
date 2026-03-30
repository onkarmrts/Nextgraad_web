export default function AICareerEcosystemPage() {
  const sections = [
    {
      title: "Resume is Not Enough Anymore",
      desc: "Today, recruiters don’t hire based only on resumes. Hiring is now based on proof of skills, project work, communication, and real-time performance. Candidates who show practical ability get shortlisted faster than those who only have certificates.",
      points: [
        "Hiring is skill-first, not degree-first",
        "Recruiters validate project work and practical execution",
        "LinkedIn profile, portfolio, and interview readiness matter",
        "ATS shortlisting requires optimized formatting and keywords",
      ],
    },
    {
      title: "AI Tools That Make You Shortlist-Ready",
      desc: "Nextgraad is building an AI-powered Career Ecosystem that helps applicants create a strong profile, optimize their resume, and become interview-ready. Our AI tools improve your chances of getting shortlisted in modern hiring systems.",
      points: [
        "AI Resume Builder (ATS-friendly formatting)",
        "AI Keyword Optimization for job descriptions",
        "AI LinkedIn Profile Enhancement Suggestions",
        "AI Portfolio Generator for projects and internship work",
      ],
    },
    {
      title: "AI Career Roadmap & Skill Validation",
      desc: "Many applicants don’t know what to learn or how to prove it. Our AI system provides a personalized career roadmap based on your domain, goals, and current skills, and then helps you validate your progress through assessments and projects.",
      points: [
        "Personalized roadmap for AI, Data Science, Full Stack & Analytics",
        "Skill gap analysis based on job requirements",
        "Mock assessments and interview simulations",
        "Real project validation & improvement recommendations",
      ],
    },
    {
      title: "Modern Hiring for Employers (Faster, Smarter, Verified)",
      desc: "Employers want candidates who can deliver. Our AI ecosystem helps recruiters by providing verified profiles, project-based evidence, and job-ready candidates. This reduces hiring time and improves selection quality.",
      points: [
        "Verified candidate profiles with project proof",
        "AI-based screening and shortlisting support",
        "Reduced hiring time with pre-evaluated candidates",
        "Internship-to-job pipeline for long-term hiring",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_left,#241E38,#121524,#0E2A45)] px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* HERO */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            AI Career Ecosystem by{" "}
            <span className="text-[#05C8FB]">Nextgraad</span>
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-gray-300 md:text-lg">
            In today’s job market, a resume alone is not enough. Nextgraad is
            building an <span className="text-white font-semibold">AI-powered Career Ecosystem</span>{" "}
            that helps applicants become shortlist-ready faster through smart
            resume optimization, skill validation, and portfolio proof.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-[#F86815] px-7 py-3 text-sm font-bold text-white transition hover:opacity-90 md:text-base">
              Explore AI Tools
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 md:text-base">
              Start Career Assessment
            </button>
          </div>
        </div>

        {/* HIGHLIGHT CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="text-lg font-bold text-[#05C8FB]">
              Smart Resume Optimization
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-300 md:text-base">
              Our AI improves your resume structure, keywords, and ATS score to
              help you clear shortlisting systems.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="text-lg font-bold text-[#05C8FB]">
              Skill Proof & Portfolio
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-300 md:text-base">
              Build real projects, create portfolio pages, and prove your skills
              instead of only listing them.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="text-lg font-bold text-[#05C8FB]">
              AI Interview Readiness
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-300 md:text-base">
              Get AI-generated mock questions, role-based interview simulations,
              and performance improvement feedback.
            </p>
          </div>
        </div>

        {/* MAIN 4 SECTIONS */}
        <div className="mt-20 space-y-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-10"
            >
              <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                <span className="text-[#F86815]">{index + 1}. </span>
                {section.title}
              </h2>

              <p className="mt-4 max-w-5xl text-sm leading-7 text-gray-300 md:text-base">
                {section.desc}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                {section.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#121524]/40 px-4 py-3 text-sm text-gray-200"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#05C8FB]"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div className="mt-20 rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Build Your Career with{" "}
            <span className="text-[#05C8FB]">AI + Proof of Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
            Nextgraad’s AI Career Ecosystem is designed to help applicants stand
            out in modern hiring by creating stronger resumes, better profiles,
            real portfolios, and interview confidence.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-[#F86815] px-7 py-3 text-sm font-bold text-white transition hover:opacity-90 md:text-base">
              Start AI Career Journey
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 md:text-base">
              Contact Career Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}