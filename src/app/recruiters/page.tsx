export default function RecruitersPage() {
  const companies = [
    "Labmentix",
    "TCS",
    "Infosys",
    "Wipro",
    "HCLTech",
    "Tech Mahindra",
    "Cognizant",
    "Accenture",
    "Capgemini",
    "IBM",
    "Deloitte",
    "PwC",
    "KPMG",
    "EY",
    "LTIMindtree",
    "Persistent Systems",
    "Zensar Technologies",
    "Hexaware",
    "Mphasis",
    "Birlasoft",
    "Sopra Steria",
    "KPIT Technologies",
    "Nagarro",
    "Publicis Sapient",
    "Tata Elxsi",
    "Quantiphi",
    "Fractal Analytics",
    "Mu Sigma",
    "Tiger Analytics",
    "Tredence",
    "LatentView Analytics",
    "Sigmoid",
    "Datamatics",
    "Brillio",
    "CloudThat",
    "MathCo",
    "Celebal Technologies",
    "AI Variant",
    "Happiest Minds",
    "Larsen & Toubro (L&T)",
    "NVIDIA",
    "Microsoft",
    "Google Cloud Partners",
    "AWS Partners Network",
    "Zoho",
    "Freshworks",
    "Oracle",
    "SAP",
    "Paytm",
    "Razorpay",
    "PhonePe",
    "Byju’s",
    "Unacademy",
  ];

  const processSteps = [
    {
      title: "Company Requirement & Role Mapping",
      desc: "Recruiters share job/internship requirements. Nextgraad maps roles to the right talent pool based on skills, domain, and experience level.",
    },
    {
      title: "Pre-Screening & Skill Validation",
      desc: "Candidates go through structured screening including resume validation, project review, and skill evaluation before being recommended.",
    },
    {
      title: "Interview Scheduling & Support",
      desc: "We coordinate interview schedules, share candidate profiles, and ensure smooth communication between recruiters and applicants.",
    },
    {
      title: "Selection & Offer Processing",
      desc: "Once selected, Nextgraad supports offer documentation, onboarding steps, and candidate readiness until joining is confirmed.",
    },
  ];

  const onboardingSteps = [
    {
      title: "Connect With Our Partnership Team",
      desc: "Share your hiring requirements, company details, and preferred internship/job roles.",
    },
    {
      title: "Define Talent Requirements",
      desc: "We finalize eligibility criteria like skill set, experience level, salary/stipend, work mode, and interview rounds.",
    },
    {
      title: "Get Shortlisted Profiles",
      desc: "Receive pre-validated profiles from our talent pool along with resume and project portfolio links.",
    },
    {
      title: "Start Hiring & Scale Faster",
      desc: "Begin interviews and hiring with continuous support, pipeline management, and dedicated coordination.",
    },
  ];

  const stats = [
    { label: "AI & Data Talent Pool", value: "5000+" },
    { label: "Partner Recruiters", value: "150+" },
    { label: "Interview Ready Candidates", value: "2000+" },
    { label: "Hiring Support Availability", value: "24/7" },
  ];

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_left,#241E38,#121524,#0E2A45)] px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* HERO */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Recruit Smarter with{" "}
            <span className="text-[#05C8FB]">Nextgraad</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
            Nextgraad collaborates with companies to provide internship and job
            opportunities in AI, Data Science, Full Stack Development, and
            Business Analytics. We bridge the gap between skilled talent and
            growing organizations.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-[#F86815] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90">
              Become a Recruitment Partner
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
              Explore Hiring Process
            </button>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
            >
              <p className="text-2xl font-extrabold text-[#05C8FB]">
                {item.value}
              </p>
              <p className="mt-2 text-xs text-gray-300 md:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* SECTION 1: PARTNER COMPANIES */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Our Recruitment Network
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-300 md:text-base">
            Nextgraad is in tie-up with leading organizations and fast-growing
            startups to provide real internship and job opportunities. Our
            network includes companies working in AI, Data Science, Cloud,
            FinTech, SaaS, and IT Services.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {companies.map((company, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs font-semibold text-gray-200 backdrop-blur-md transition hover:border-[#05C8FB]/50 hover:bg-white/10 md:text-sm"
              >
                {company}
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-gray-400">
            *Company names are part of our recruitment ecosystem and opportunity
            pipeline. Hiring depends on eligibility, openings, and recruiter
            availability.
          </p>
        </div>

        {/* SECTION 2: HIRING PROCESS */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            How the Hiring Process Works
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-300 md:text-base">
            We follow a structured hiring pipeline to ensure that recruiters get
            the right candidates quickly. Our process focuses on skill matching,
            readiness evaluation, and smooth coordination.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#05C8FB]/20 text-sm font-extrabold text-[#05C8FB]">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-300 md:text-base">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: OUR RECRUITERS */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Our Recruiters & Hiring Partners
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-300 md:text-base">
            Our recruiter network includes HR professionals, talent acquisition
            teams, founders, and hiring managers from multiple industries. We
            support them by providing curated profiles and ready-to-hire talent.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <h3 className="text-lg font-bold text-[#05C8FB]">
                Corporate Recruiters
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Talent acquisition teams from mid-size and enterprise companies
                who hire for long-term roles.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <h3 className="text-lg font-bold text-[#05C8FB]">
                Startup Hiring Managers
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Fast-growing startups looking for AI/Data professionals who can
                contribute quickly in product teams.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <h3 className="text-lg font-bold text-[#05C8FB]">
                Recruitment Agencies
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Agencies that partner with us to access a reliable talent pool
                and accelerate their hiring process.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: HOW TO ONBOARD AS RECRUITMENT PARTNER */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            How to Onboard as a Recruitment Partner
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-300 md:text-base">
            Joining Nextgraad as a recruitment partner is simple. Once onboarded,
            you can access our pre-validated candidate pipeline for internships
            and full-time hiring.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {onboardingSteps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md"
              >
                <h3 className="text-lg font-bold text-white">
                  <span className="text-[#F86815]">{index + 1}. </span>
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-300 md:text-base">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* EXTRA SECTION: WHY RECRUIT WITH NEXTGRAAD */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Why Recruit with Nextgraad?
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-300 md:text-base">
            Nextgraad is built to reduce hiring friction. Our ecosystem focuses
            on connecting recruiters with candidates who have real skills,
            verified projects, and job readiness.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <h3 className="text-lg font-bold text-[#05C8FB]">
                Verified Talent Pool
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Candidates are filtered based on skill tests, project quality,
                and real-time learning outcomes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <h3 className="text-lg font-bold text-[#05C8FB]">
                Faster Hiring Cycles
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                We reduce recruiter workload by providing shortlists and
                screening-ready profiles.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <h3 className="text-lg font-bold text-[#05C8FB]">
                Dedicated Coordination
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                We coordinate interviews, communication, and onboarding support
                to ensure smooth hiring outcomes.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md md:flex-row md:text-left">
            <div>
              <h3 className="text-xl font-extrabold text-white">
                Ready to hire AI & Data talent?
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Become a recruitment partner and start hiring from Nextgraad’s
                verified talent ecosystem.
              </p>
            </div>

            <button className="rounded-xl bg-[#F86815] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90">
              Partner with Nextgraad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}