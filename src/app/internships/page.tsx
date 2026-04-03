'use client';

import { useState, useEffect, useRef } from 'react';

// ─── Types ─────────────────────────────────────────────────────────────────
type Duration = 1 | 2 | 3;

// ─── Data ──────────────────────────────────────────────────────────────────
const DOMAINS = [
  { icon: '🌐', title: 'Web Development',      desc: 'Build full-stack apps with modern frameworks and real deployment.',       tags: ['React', 'Node.js', 'HTML/CSS', 'Git'] },
  { icon: '🤖', title: 'Data Science',          desc: 'Work with real datasets, build predictive models, present insights.',      tags: ['Python', 'ML', 'Statistics', 'Pandas'] },
  { icon: '🧠', title: 'Artificial Intelligence', desc: 'Design AI pipelines, NLP models, and applied ML systems.',              tags: ['Deep Learning', 'NLP', 'TensorFlow', 'LLMs'] },
  { icon: '📈', title: 'Data Analytics',        desc: 'Turn raw data into dashboards and decisions that companies act on.',       tags: ['SQL', 'Power BI', 'Excel', 'Tableau'] },
  { icon: '💼', title: 'Business Analytics',    desc: 'Solve real business problems using data-driven strategic frameworks.',    tags: ['Strategy', 'Excel', 'Case Studies', 'KPIs'] },
  { icon: '📊', title: 'Financial Analyst',     desc: 'Work on P&L models, financial reports, and investment analysis.',        tags: ['Financial Modeling', 'Tally', 'MIS', 'Excel'] },
  { icon: '🤝', title: 'HR Intern',             desc: 'Recruitment pipelines, HR ops, people analytics — real people work.',    tags: ['Recruitment', 'HR Analytics', 'Policies', 'ATS'] },
];

const INCLUDED = [
  {
    icon: '🛠️',
    title: 'Real Industry Projects',
    desc: 'Not dummy tasks. Work on actual projects that go into your portfolio.',
    tag: 'Core',
    tagColor: '#2563EB',
  },
  {
    icon: '📩',
    title: 'Offer Letter',
    desc: 'Official Nextgraad offer letter on company letterhead within 24 working hours.',
    tag: 'Instant',
    tagColor: '#059669',
  },
  {
    icon: '🏆',
    title: 'Verified Certificate',
    desc: 'Completion certificate auto-generated and emailed once you submit your project.',
    tag: 'On Completion',
    tagColor: '#7C3AED',
  },
  {
    icon: '🖥️',
    title: 'Internship Portal Access',
    desc: '24/7 access to your internship dashboard. Project submissions, progress, everything.',
    tag: 'Included',
    tagColor: '#0891B2',
  },
  {
    icon: '📄',
    title: 'ProfileForge AI — Free',
    desc: 'AI-powered resume & LinkedIn optimization. ATS score booster. Worth ₹1,499 alone.',
    tag: 'Worth ₹1,499',
    tagColor: '#D97706',
    strikePrice: '₹1,499',
  },
  {
    icon: '🚀',
    title: 'HireSense AI — Free Access',
    desc: 'Connect GitHub + LinkedIn + Resume. Get your talent score. Get approached by recruiters directly.',
    tag: 'Worth ₹2,999',
    tagColor: '#DC2626',
    strikePrice: '₹2,999',
  },
  {
    icon: '💰',
    title: 'Zero Hidden Fees',
    desc: 'Pay once. Everything above is unlocked until you complete your internship. No renewals.',
    tag: 'Guaranteed',
    tagColor: '#059669',
  },
  {
    icon: '🏠',
    title: 'Work From Home',
    desc: '100% remote. Work from anywhere in India, at your own pace.',
    tag: 'Remote',
    tagColor: '#2563EB',
  },
];

const STEPS = [
  { num: '01', icon: '📝', title: 'Fill Enrollment Form',     desc: 'Complete the enrollment form with your details, domain, and duration. Takes 2 minutes.' },
  { num: '02', icon: '✅', title: 'Complete Payment',          desc: 'Secure one-time payment via the form. No hidden charges, ever.' },
  { num: '03', icon: '📩', title: 'Offer Letter — 24 Hours',  desc: 'Your official Nextgraad offer letter is emailed within 24 working hours of enrollment.' },
  { num: '04', icon: '🔐', title: 'Portal Access Unlocked',   desc: 'Login to your internship portal. Browse projects, pick yours, get started.' },
  { num: '05', icon: '💻', title: 'Work on Real Projects',    desc: 'Execute your chosen project. Dedicated support whenever you need it.' },
  { num: '06', icon: '🏆', title: 'Submit & Get Certified',   desc: 'Submit your project → certificate auto-generated and emailed. HireSense AI unlocks.' },
];

const TESTIMONIALS = [
  {
    name: 'Ananya Sharma',
    role: 'Data Science Intern',
    college: 'VIT Vellore',
    avatar: 'AS',
    color: '#7C3AED',
    score: 87,
    text: 'Got my HireSense score of 87 and within a week I had 3 recruiter DMs on LinkedIn. Never expected this from an internship. The ProfileForge AI literally rewrote my resume and it now clears every ATS.',
    badges: ['GitHub Connected', 'LinkedIn Optimized', 'Resume ATS: 91%'],
  },
  {
    name: 'Rohan Mehta',
    role: 'Web Development Intern',
    college: 'SRM University',
    avatar: 'RM',
    color: '#2563EB',
    score: 92,
    text: 'I paid for internships before — ₹7,000 for a certificate I couldnt explain in interviews. Nextgraad gave me an actual project I built, a certificate AND recruiters reaching out. Total game changer.',
    badges: ['GitHub: 24 commits', 'HireSense Score: 92', 'Placed in 18 days'],
  },
  {
    name: 'Priya Nair',
    role: 'HR Intern',
    college: 'Christ University, Bangalore',
    avatar: 'PN',
    color: '#059669',
    score: 79,
    text: 'The HireSense AI connects your LinkedIn and resume and gives you a recruiter-facing profile. A startup from Pune reached out directly through the platform. I never applied — they came to me.',
    badges: ['LinkedIn: Optimized', 'Direct Recruiter Outreach', 'HireSense Score: 79'],
  },
  {
    name: 'Aarav Singh',
    role: 'Financial Analyst Intern',
    college: 'Delhi University',
    avatar: 'AS',
    color: '#D97706',
    score: 84,
    text: "The financial modeling project I worked on is now literally my portfolio. I mentioned Nextgraad in my interview and the recruiter had already seen my HireSense profile. That's how prepared I felt.",
    badges: ['MIS Report Submitted', 'HireSense Score: 84', 'Offer in Hand'],
  },
];

const HOOKS = [
  { icon: '⏳', text: 'Batch starting 10th April 2026 — seats are limited' },
  { icon: '🎯', text: 'Real recruiters are already browsing HireSense profiles' },
  { icon: '📉', text: "Don't pay ₹5,000–₹15,000 for a dummy certificate" },
  { icon: '🔓', text: 'ProfileForge AI + HireSense AI — both free for enrolled interns' },
];

// ─── Testimonial Card ───────────────────────────────────────────────────────
function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div style={{
      background: '#080D1A',
      border: '1px solid rgba(255,255,255,.08)',
      borderRadius: 22,
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      height: '100%',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 48, height: 48, borderRadius: '50%',
          background: `${t.color}25`, border: `2px solid ${t.color}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 800, color: t.color, flexShrink: 0,
        }}>{t.avatar}</div>
        <div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{t.name}</div>
          <div style={{ color: '#64748B', fontSize: 12 }}>{t.role} · {t.college}</div>
        </div>
        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 22, color: t.color }}>{t.score}</div>
          <div style={{ fontSize: 10, color: '#475569', fontWeight: 600, letterSpacing: '0.05em' }}>HIRESENSE</div>
        </div>
      </div>

      {/* Quote */}
      <p style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.75, flex: 1 }}>"{t.text}"</p>

      {/* Badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {t.badges.map(b => (
          <span key={b} style={{
            fontSize: 11, padding: '4px 10px', borderRadius: 999,
            color: t.color, border: `1px solid ${t.color}30`, background: `${t.color}10`,
            fontWeight: 600,
          }}>{b}</span>
        ))}
      </div>
    </div>
  );
}

// ─── HireSense Visual ───────────────────────────────────────────────────────
function HireSenseVisual() {
  return (
    <div style={{
      background: '#080D1A',
      border: '1px solid rgba(37,99,235,.25)',
      borderRadius: 24,
      padding: 32,
      boxShadow: '0 0 60px rgba(37,99,235,.1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <div style={{ fontSize: 28 }}>🚀</div>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#60A5FA', fontWeight: 800, fontSize: 18 }}>HireSense AI</div>
          <div style={{ color: '#475569', fontSize: 12 }}>Recruiter-facing talent intelligence</div>
        </div>
        <span style={{ marginLeft: 'auto', background: 'rgba(37,99,235,.15)', border: '1px solid rgba(37,99,235,.3)', color: '#60A5FA', fontSize: 11, fontWeight: 700, padding: '5px 12px', borderRadius: 999 }}>FREE FOR INTERNS</span>
      </div>

      {/* Input sources */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
        {[
          { icon: '🔗', label: 'LinkedIn Profile', sub: 'Experience, skills, connections' },
          { icon: '💻', label: 'GitHub Profile', sub: 'Repos, commit activity, languages' },
          { icon: '📄', label: 'Resume Upload', sub: 'ATS-optimized scoring' },
        ].map(item => (
          <div key={item.label} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)',
            borderRadius: 12, padding: '12px 16px',
          }}>
            <span style={{ fontSize: 18 }}>{item.icon}</span>
            <div>
              <div style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>{item.label}</div>
              <div style={{ color: '#475569', fontSize: 11 }}>{item.sub}</div>
            </div>
            <div style={{ marginLeft: 'auto', color: '#34D399', fontSize: 11, fontWeight: 700 }}>✓ Connected</div>
          </div>
        ))}
      </div>

      {/* Score output */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(37,99,235,.15), rgba(124,58,237,.1))',
        border: '1px solid rgba(37,99,235,.3)',
        borderRadius: 16, padding: '20px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ color: '#94A3B8', fontSize: 12, marginBottom: 4 }}>Your Talent Score</div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 42, fontWeight: 800, color: '#60A5FA', lineHeight: 1 }}>89<span style={{ fontSize: 18, color: '#475569' }}>/100</span></div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: '#34D399', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>🔔 3 Recruiters Viewed</div>
          <div style={{ color: '#64748B', fontSize: 12 }}>in the last 7 days</div>
        </div>
      </div>

      <div style={{ marginTop: 16, color: '#475569', fontSize: 12, textAlign: 'center', lineHeight: 1.6 }}>
        Recruiters browse HireSense profiles directly. <br />
        <span style={{ color: '#60A5FA' }}>You don't apply — they come to you.</span>
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function InternshipsPage() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<Duration>(3);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [statsOn, setStatsOn] = useState(false);
  const [hookIdx, setHookIdx] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsOn(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setHookIdx(i => (i + 1) % HOOKS.length), 3000);
    return () => clearInterval(t);
  }, []);

  const [s1, setS1] = useState(0);
  const [s2, setS2] = useState(0);
  const [s3, setS3] = useState(0);

  useEffect(() => {
    if (!statsOn) return;
    const animate = (target: number, setter: (v: number) => void, dur: number) => {
      let start: number;
      const tick = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        setter(Math.floor(p * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    animate(10000, setS1, 1800);
    animate(200, setS2, 1400);
    animate(95, setS3, 1200);
  }, [statsOn]);

  const GOOGLE_FORM_URL = 'https://forms.gle/wezjCkPU5omFLhLq6'; // Replace with real link

  return (
    <main style={{ background: '#04070F', color: '#fff', fontFamily: "'Plus Jakarta Sans', sans-serif", minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@700;800&display=swap');
        .fd { font-family: 'Space Grotesk', sans-serif; }
        .gt { background: linear-gradient(135deg,#60A5FA 0%,#38BDF8 55%,#34D399 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .pt { background: linear-gradient(135deg,#FCD34D,#F59E0B); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .grid-bg { background-image: linear-gradient(rgba(37,99,235,.04) 1px,transparent 1px), linear-gradient(90deg,rgba(37,99,235,.04) 1px,transparent 1px); background-size:64px 64px; }
        .cta-btn { background:linear-gradient(135deg,#1D4ED8,#2563EB); transition:all .25s ease; border:none; cursor:pointer; }
        .cta-btn:hover { box-shadow:0 0 50px rgba(37,99,235,.55),0 0 100px rgba(37,99,235,.2); transform:translateY(-2px); }
        .orb { filter:blur(90px); border-radius:50%; position:absolute; pointer-events:none; }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .float { animation:floatY 4s ease-in-out infinite; }
        @keyframes ring { 0%{box-shadow:0 0 0 0 rgba(37,99,235,.5)} 70%{box-shadow:0 0 0 10px rgba(37,99,235,0)} 100%{box-shadow:0 0 0 0 rgba(37,99,235,0)} }
        .ring { animation:ring 2.2s ease-out infinite; display:inline-block; border-radius:50%; }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .badge { background:linear-gradient(90deg,rgba(37,99,235,.12) 0%,rgba(59,130,246,.28) 50%,rgba(37,99,235,.12) 100%); background-size:200% auto; animation:shimmer 3s linear infinite; }
        @keyframes hookSlide { 0%{opacity:0;transform:translateY(8px)} 15%,85%{opacity:1;transform:translateY(0)} 100%{opacity:0;transform:translateY(-8px)} }
        .hook-anim { animation:hookSlide 3s ease-in-out infinite; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        .u1{animation:fadeUp .6s ease both}
        .u2{animation:fadeUp .6s .12s ease both}
        .u3{animation:fadeUp .6s .24s ease both}
        .u4{animation:fadeUp .6s .38s ease both}
        .divider { height:1px; background:linear-gradient(90deg,transparent,rgba(59,130,246,.18),transparent); }
        .label { font-size:11px; font-weight:700; letter-spacing:.15em; text-transform:uppercase; color:#3B82F6; }
        .card { background:#080D1A; border:1px solid rgba(255,255,255,.07); border-radius:20px; transition:all .22s ease; }
        .card:hover { border-color:rgba(59,130,246,.3); transform:translateY(-5px); box-shadow:0 20px 40px rgba(0,0,0,.4); }
        .domain-card { cursor:pointer; background:#080D1A; border-radius:20px; padding:22px; transition:all .22s ease; }
        .domain-card:hover { transform:translateY(-4px); }
        .enroll-wrap { background:linear-gradient(135deg,#080D1A,#0B1120); border:1px solid rgba(59,130,246,.22); border-radius:28px; box-shadow:0 0 80px rgba(37,99,235,.08),inset 0 1px 0 rgba(255,255,255,.05); }
        .faq-row { background:#080D1A; border:1px solid rgba(255,255,255,.06); border-radius:18px; overflow:hidden; transition:border-color .2s; }
        .faq-row:hover { border-color:rgba(59,130,246,.25); }
        .faq-row.fopen { border-color:rgba(59,130,246,.4); }
        @keyframes batchPulse { 0%,100%{opacity:1} 50%{opacity:.65} }
        .batch-badge { animation:batchPulse 2s ease-in-out infinite; }

        @media(max-width:768px){
          .hero-h1{font-size:2.4rem!important;}
          .stats-grid{grid-template-columns:repeat(2,1fr)!important;}
          .steps-grid{grid-template-columns:1fr!important;}
          .domains-grid{grid-template-columns:1fr!important;}
          .perks-grid{grid-template-columns:1fr 1fr!important;}
          .testi-grid{grid-template-columns:1fr!important;}
          .enroll-grid{grid-template-columns:1fr!important;}
          .hiresense-col{display:none!important;}
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/*  HERO                                                            */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="grid-bg" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '110px 24px 90px', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 800, height: 600, background: 'rgba(37,99,235,.16)', top: '-15%', left: '50%', transform: 'translateX(-50%)' }} />
        <div className="orb" style={{ width: 300, height: 300, background: 'rgba(124,58,237,.1)', top: '40%', left: '0%' }} />
        <div className="orb" style={{ width: 250, height: 250, background: 'rgba(5,150,105,.07)', bottom: '5%', right: '5%' }} />

        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', position: 'relative', width: '100%' }}>

          {/* Batch badge */}
          <div className="batch-badge u1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(220,38,38,.12)', border: '1px solid rgba(220,38,38,.3)', borderRadius: 999, padding: '9px 18px', marginBottom: 20 }}>
            <span className="ring" style={{ width: 8, height: 8, background: '#EF4444', flexShrink: 0 }} />
            <span style={{ color: '#FCA5A5', fontSize: 13, fontWeight: 700 }}>🗓️ &nbsp;Next Batch Starts — 10th April 2026 &nbsp;·&nbsp; Limited Seats</span>
          </div>

          {/* Live enroll badge */}
          <div className="badge u1" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(59,130,246,.22)', borderRadius: 999, padding: '8px 18px', marginBottom: 32, marginLeft: 10 }}>
            <span className="ring" style={{ width: 7, height: 7, background: '#34D399', flexShrink: 0 }} />
            <span style={{ color: '#BFDBFE', fontSize: 13, fontWeight: 600 }}>🇮🇳 &nbsp;10,000+ Students Enrolled Across India</span>
          </div>

          {/* Main heading */}
          <h1 className="fd u2 hero-h1" style={{ fontSize: 'clamp(2.6rem,7.5vw,5.2rem)', fontWeight: 800, lineHeight: 1.06, marginBottom: 20 }}>
            Internship Program<br />
            <span className="gt">by Nextgraad</span>
          </h1>

          <p className="u2" style={{ color: '#94A3B8', fontSize: 18, maxWidth: 640, margin: '0 auto 10px', lineHeight: 1.75 }}>
            Real projects. Real certificate. Access to AI tools worth{' '}
            <span style={{ textDecoration: 'line-through', color: '#475569' }}>₹5,000</span>{' '}
            — <strong style={{ color: '#34D399' }}>completely free</strong> when you enroll.
          </p>

          <p className="u3" style={{ color: '#2563EB', fontWeight: 700, fontSize: 15, marginBottom: 32, letterSpacing: '0.01em' }}>
            🚫 Don't pay thousands to get an internship — we don't charge for experience.
          </p>

          {/* Value chips */}
          <div className="u3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
            {[
              '📩 Offer Letter — 24hrs',
              '🛠️ Real Projects',
              '🏆 Verified Certificate',
              '📄 ProfileForge AI — Free',
              '🚀 HireSense AI — Free',
              '🏠 Work From Home',
              '7+ Domains',
            ].map(c => (
              <span key={c} style={{ fontSize: 13, color: '#CBD5E1', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 999, padding: '7px 16px' }}>{c}</span>
            ))}
          </div>

          {/* Rotating hook */}
          <div className="u3" style={{ marginBottom: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="hook-anim" key={hookIdx} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(37,99,235,.1)', border: '1px solid rgba(37,99,235,.2)', borderRadius: 12, padding: '9px 18px' }}>
              <span style={{ fontSize: 16 }}>{HOOKS[hookIdx].icon}</span>
              <span style={{ color: '#93C5FD', fontSize: 13, fontWeight: 600 }}>{HOOKS[hookIdx].text}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="u4" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer"
              className="cta-btn"
              style={{ color: '#fff', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 18, padding: '20px 44px', borderRadius: 16, display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              Enroll Now — It's Free to Start
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#what-you-get" style={{ color: '#475569', fontSize: 13, textDecoration: 'underline', textUnderlineOffset: 4 }}>
              See what's included →
            </a>
          </div>

          {/* Float pill */}
          <div className="float" style={{ marginTop: 56 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 24, background: '#0B1120', border: '1px solid rgba(255,255,255,.08)', borderRadius: 18, padding: '14px 28px' }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>ProfileForge AI + HireSense AI</div>
                <div style={{ color: '#475569', fontSize: 12 }}>AI tools worth <span style={{ textDecoration: 'line-through' }}>₹4,498</span></div>
              </div>
              <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,.08)' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: '#34D399', fontWeight: 800, fontSize: 16 }}>FREE</div>
                <div style={{ color: '#475569', fontSize: 12 }}>for every intern</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/*  STATS                                                           */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section ref={statsRef} style={{ padding: '60px 24px', background: '#06091A' }}>
        <div className="stats-grid" style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, textAlign: 'center' }}>
          {[
            { val: `${s1.toLocaleString('en-IN')}+`, label: 'Students Enrolled' },
            { val: `${s2}+`, label: 'Partner Companies' },
            { val: '7+', label: 'Domains Available' },
            { val: `${s3}%`, label: 'Completion Rate' },
          ].map(s => (
            <div key={s.label}>
              <div className="fd" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, color: '#60A5FA', marginBottom: 4 }}>{s.val}</div>
              <div style={{ color: '#475569', fontSize: 13, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/*  WHAT YOU GET (Included)                                         */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section id="what-you-get" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <p className="label" style={{ marginBottom: 14 }}>Everything Included</p>
            <h2 className="fd" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 14 }}>
              Worth <span style={{ textDecoration: 'line-through', color: '#334155' }}>₹5,000</span> — You Pay{' '}
              <span className="pt">₹99</span>
            </h2>
            <p style={{ color: '#475569', maxWidth: 520, margin: '0 auto' }}>
              No hidden fees. Everything below is unlocked from enrollment until certificate. No renewals.
            </p>
          </div>

          <div className="perks-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
            {INCLUDED.map(item => (
              <div key={item.title} className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{ fontSize: 28 }}>{item.icon}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 999, color: item.tagColor, border: `1px solid ${item.tagColor}30`, background: `${item.tagColor}10`, whiteSpace: 'nowrap' }}>
                    {item.tag}
                  </span>
                </div>
                <h3 style={{ color: '#fff', fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: '#475569', fontSize: 12, lineHeight: 1.65 }}>{item.desc}</p>
                {item.strikePrice && (
                  <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#334155', fontSize: 11, textDecoration: 'line-through' }}>{item.strikePrice}</span>
                    <span style={{ color: '#34D399', fontSize: 11, fontWeight: 700 }}>→ FREE for Interns</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════════════════════════ */}
      

      <div className="divider" />

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/*  DOMAINS                                                         */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section id="domains" className="grid-bg" style={{ padding: '100px 24px', background: '#06091A' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <p className="label" style={{ marginBottom: 14 }}>Pick Your Track</p>
            <h2 className="fd" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 14 }}>
              7+ Domains.<br /><span className="gt">One Enrollment.</span>
            </h2>
            <p style={{ color: '#475569', maxWidth: 460, margin: '0 auto' }}>
              Industry-relevant tracks built for what companies actually look for. Pick the one that fits your goals.
            </p>
          </div>

          <div className="domains-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            {DOMAINS.map((d, i) => {
              const sel = selectedDomain === d.title;
              return (
                <div key={d.title}
                  className="domain-card"
                  onClick={() => setSelectedDomain(sel ? null : d.title)}
                  style={{
                    border: `1px solid ${sel ? '#2563EB' : 'rgba(255,255,255,.07)'}`,
                    boxShadow: sel ? '0 0 40px rgba(37,99,235,.25), inset 0 1px 0 rgba(59,130,246,.15)' : 'none',
                    background: sel ? 'rgba(37,99,235,.1)' : '#080D1A',
                    transform: sel ? 'translateY(-4px)' : undefined,
                  }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontSize: 22 }}>{d.icon}</span>
                      <h3 style={{ color: '#fff', fontSize: 15, fontWeight: 700 }}>{d.title}</h3>
                    </div>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${sel ? '#2563EB' : 'rgba(255,255,255,.15)'}`, background: sel ? '#2563EB' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .2s' }}>
                      {sel && <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>}
                    </div>
                  </div>
                  <p style={{ color: '#64748B', fontSize: 12, lineHeight: 1.65, marginBottom: 14 }}>{d.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {d.tags.map(t => (
                      <span key={t} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 999, color: '#60A5FA', border: '1px solid rgba(37,99,235,.25)', background: 'rgba(37,99,235,.08)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/*  HOW IT WORKS                                                    */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <p className="label" style={{ marginBottom: 14 }}>The Process</p>
            <h2 className="fd" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 14 }}>
              Enroll to Certificate —<br /><span className="gt">Step by Step</span>
            </h2>
            <p style={{ color: '#475569', maxWidth: 460, margin: '0 auto' }}>Simple, transparent, automated.</p>
          </div>

          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 16 }}>
            {STEPS.map((s, i) => (
              <div key={i} className="card" style={{ padding: 22, textAlign: 'center' }}>
                <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, background: '#0B1120', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, fontSize: 22, marginBottom: 14 }}>
                  {s.icon}
                  <span style={{ position: 'absolute', top: -8, right: -8, background: '#2563EB', color: '#fff', fontSize: 9, fontWeight: 700, width: 18, height: 18, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                </div>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', color: '#1D4ED8', marginBottom: 6 }}>{s.num}</div>
                <h3 style={{ color: '#fff', fontSize: 12, fontWeight: 700, marginBottom: 8, lineHeight: 1.4 }}>{s.title}</h3>
                <p style={{ color: '#475569', fontSize: 11, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid-bg" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 900, height: 600, background: 'rgba(37,99,235,.12)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative' }}>

          {/* Batch urgency */}
          <div className="batch-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(220,38,38,.1)', border: '1px solid rgba(220,38,38,.3)', borderRadius: 999, padding: '9px 18px', marginBottom: 28 }}>
            <span className="ring" style={{ width: 7, height: 7, background: '#EF4444', flexShrink: 0 }} />
            <span style={{ color: '#FCA5A5', fontSize: 13, fontWeight: 700 }}>🗓️ Batch starts 10th April 2026 — Enrollment closes soon</span>
          </div>

          <h2 className="fd" style={{ fontSize: 'clamp(2.4rem,6vw,4.5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: 20 }}>
            Your Career Starts<br /><span className="gt">With One Click</span>
          </h2>

          <p style={{ color: '#64748B', fontSize: 18, marginBottom: 10 }}>
            Real projects. Verified certificate. AI tools worth ₹9,498 — all yours for ₹99.
          </p>
          <p style={{ color: '#2563EB', fontWeight: 700, fontSize: 15, marginBottom: 48 }}>
            🚫 Don't pay thousands for a dummy internship. We've never believed in that.
          </p>

          {/* Value checklist */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginBottom: 52 }}>
            {[
              '✅ Offer letter in 24hrs',
              '✅ Real industry project',
              '✅ Verified certificate',
              '✅ ProfileForge AI — free',
              '✅ HireSense AI — free',
              '✅ Recruiters come to you',
            ].map(item => (
              <span key={item} style={{ color: '#94A3B8', fontSize: 14, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 999, padding: '8px 18px' }}>{item}</span>
            ))}
          </div>

          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer"
            className="cta-btn"
            style={{ color: '#fff', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 20, padding: '22px 56px', borderRadius: 16, display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            Enroll for ₹99 — 10th April Batch
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>

          <p style={{ color: '#1E293B', fontSize: 12, marginTop: 24 }}>
            One-time payment · No renewals · No hidden fees · Offer letter within 24 working hours
          </p>
        </div>
      </section>

      <div className="divider" />

      {/*  HIRESENSE AI SPOTLIGHT                                          */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: '#06091A' }} className="grid-bg">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            {/* Left */}
            <div>
              <p className="label" style={{ marginBottom: 14 }}>Exclusive for Nextgraad Interns</p>
              <h2 className="fd" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: 20 }}>
                HireSense AI —<br /><span className="gt">Recruiters Come to You</span>
              </h2>
              <p style={{ color: '#64748B', fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>
                After completing your internship, you unlock <strong style={{ color: '#fff' }}>HireSense AI</strong> — Nextgraad's recruiter intelligence platform. Connect your GitHub, LinkedIn, and resume. Our AI builds your talent profile and scores you.
              </p>
              <p style={{ color: '#64748B', fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
                Recruiters from 200+ startups and companies browse these profiles directly. <strong style={{ color: '#60A5FA' }}>You don't apply — they approach you.</strong>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: '🔗', text: 'Connect LinkedIn, GitHub & Resume in one click' },
                  { icon: '📊', text: 'AI scores your profile out of 100 based on real skills' },
                  { icon: '🔔', text: 'Get notified when recruiters view your profile' },
                  { icon: '🤝', text: 'Direct recruiter outreach — no cold applying needed' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 18, width: 28, flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ color: '#94A3B8', fontSize: 14 }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(52,211,153,.08)', border: '1px solid rgba(52,211,153,.2)', borderRadius: 12, padding: '12px 20px' }}>
                <span style={{ fontSize: 18 }}>🎁</span>
                <div>
                  <div style={{ color: '#34D399', fontWeight: 700, fontSize: 14 }}>Free for all Nextgraad interns</div>
                  <div style={{ color: '#475569', fontSize: 12 }}>Unlocks automatically after internship completion</div>
                </div>
              </div>
            </div>

            {/* Right — visual */}
            <div className="hiresense-col">
              <HireSenseVisual />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/*  PROFILEFORGE AI SPOTLIGHT                                       */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

            {/* Left — visual */}
            <div className="hiresense-col">
              <div style={{ background: '#080D1A', border: '1px solid rgba(217,119,6,.25)', borderRadius: 24, padding: 32, boxShadow: '0 0 60px rgba(217,119,6,.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                  <div style={{ fontSize: 28 }}>📄</div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", color: '#FCD34D', fontWeight: 800, fontSize: 18 }}>ProfileForge AI</div>
                    <div style={{ color: '#475569', fontSize: 12 }}>Resume & LinkedIn intelligence</div>
                  </div>
                  <span style={{ marginLeft: 'auto', background: 'rgba(217,119,6,.15)', border: '1px solid rgba(217,119,6,.3)', color: '#FCD34D', fontSize: 11, fontWeight: 700, padding: '5px 12px', borderRadius: 999 }}>FREE FOR INTERNS</span>
                </div>
                {[
                  { label: 'ATS Score', val: '91%', color: '#34D399', bar: 91 },
                  { label: 'LinkedIn Strength', val: '88%', color: '#60A5FA', bar: 88 },
                  { label: 'Keyword Match', val: '94%', color: '#A78BFA', bar: 94 },
                  { label: 'Recruiter Appeal', val: '86%', color: '#FCD34D', bar: 86 },
                ].map(item => (
                  <div key={item.label} style={{ marginBottom: 18 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ color: '#94A3B8', fontSize: 13 }}>{item.label}</span>
                      <span style={{ color: item.color, fontWeight: 700, fontSize: 13 }}>{item.val}</span>
                    </div>
                    <div style={{ height: 6, background: 'rgba(255,255,255,.06)', borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${item.bar}%`, background: item.color, borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 20, color: '#475569', fontSize: 12, textAlign: 'center' }}>
                  AI rewrites your resume for <span style={{ color: '#FCD34D' }}>maximum recruiter visibility</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              <p className="label" style={{ marginBottom: 14 }}>Also Included — Free</p>
              <h2 className="fd" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: 20 }}>
                ProfileForge AI —<br /><span style={{ background: 'linear-gradient(135deg,#FCD34D,#F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Your Resume, Rebuilt</span>
              </h2>
              <p style={{ color: '#64748B', fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>
                Most resumes never pass ATS screening. <strong style={{ color: '#fff' }}>ProfileForge AI</strong> analyzes your resume, rewrites it for maximum ATS score, and optimizes your LinkedIn profile for recruiter searchability.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
                {[
                  { icon: '🎯', text: 'AI-powered ATS score optimizer — get past filters' },
                  { icon: '✍️', text: 'LinkedIn headline, summary, and skills rewritten by AI' },
                  { icon: '🔑', text: 'Keyword analysis matched to your target job roles' },
                  { icon: '📈', text: 'Real-time suggestions to improve recruiter visibility' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 18, width: 28, flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ color: '#94A3B8', fontSize: 14 }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(217,119,6,.08)', border: '1px solid rgba(217,119,6,.2)', borderRadius: 12, padding: '12px 20px' }}>
                <span style={{ fontSize: 18 }}>🎁</span>
                <div>
                  <div style={{ color: '#FCD34D', fontWeight: 700, fontSize: 14 }}>Worth ₹1,499 — Free with enrollment</div>
                  <div style={{ color: '#475569', fontSize: 12 }}>Available from day one of your internship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/*  TESTIMONIALS                                                    */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: '#06091A' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <p className="label" style={{ marginBottom: 14 }}>Real Students. Real Results.</p>
            <h2 className="fd" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 14 }}>
              From Intern to <span className="gt">Hired</span>
            </h2>
            <p style={{ color: '#475569', maxWidth: 480, margin: '0 auto' }}>
              HireSense AI scores and surfaces talent. Recruiters find them. These are the results.
            </p>
          </div>

          <div className="testi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>

          {/* Score bar */}
          <div style={{ marginTop: 48, background: '#080D1A', border: '1px solid rgba(255,255,255,.07)', borderRadius: 20, padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24 }}>
            <div style={{ textAlign: 'center' }}>
              <div className="fd" style={{ fontSize: 32, fontWeight: 800, color: '#60A5FA' }}>85+</div>
              <div style={{ color: '#475569', fontSize: 13 }}>Avg HireSense Score</div>
            </div>
            <div style={{ width: 1, height: 48, background: 'rgba(255,255,255,.07)' }} />
            <div style={{ textAlign: 'center' }}>
              <div className="fd" style={{ fontSize: 32, fontWeight: 800, color: '#34D399' }}>200+</div>
              <div style={{ color: '#475569', fontSize: 13 }}>Recruiters on Platform</div>
            </div>
            <div style={{ width: 1, height: 48, background: 'rgba(255,255,255,.07)' }} />
            <div style={{ textAlign: 'center' }}>
              <div className="fd" style={{ fontSize: 32, fontWeight: 800, color: '#A78BFA' }}>18 days</div>
              <div style={{ color: '#475569', fontSize: 13 }}>Avg. Time to First Outreach</div>
            </div>
            <div style={{ width: 1, height: 48, background: 'rgba(255,255,255,.07)' }} />
            <div style={{ textAlign: 'center' }}>
              <div className="fd" style={{ fontSize: 32, fontWeight: 800, color: '#FCD34D' }}>4,800+</div>
              <div style={{ color: '#475569', fontSize: 13 }}>Profiles Viewed by Recruiters</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/*  ENROLLMENT                                                      */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section id="enroll" style={{ padding: '100px 24px', position: 'relative' }}>
        <div className="orb" style={{ width: 600, height: 400, background: 'rgba(37,99,235,.1)', top: 0, left: '50%', transform: 'translateX(-50%)' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="label" style={{ marginBottom: 14 }}>Enroll Now</p>
            <h2 className="fd" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 14 }}>
              Next Batch: <span className="gt">10th April 2026</span>
            </h2>
            <p style={{ color: '#475569' }}>
              Fill the enrollment form. Complete payment. Get your offer letter within 24 hours.
            </p>
          </div>

          <div className="enroll-wrap" style={{ padding: 40 }}>

            {/* Select Domain */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#64748B', marginBottom: 16 }}>Choose Your Domain</div>
              <div className="enroll-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {DOMAINS.map(d => (
                  <button key={d.title} onClick={() => setSelectedDomain(selectedDomain === d.title ? null : d.title)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', borderRadius: 14,
                      border: `1px solid ${selectedDomain === d.title ? '#2563EB' : 'rgba(255,255,255,.07)'}`,
                      background: selectedDomain === d.title ? 'rgba(37,99,235,.15)' : 'rgba(255,255,255,.02)',
                      boxShadow: selectedDomain === d.title ? '0 0 24px rgba(37,99,235,.2)' : 'none',
                      cursor: 'pointer', transition: 'all .2s', textAlign: 'left',
                    }}>
                    <span style={{ fontSize: 18 }}>{d.icon}</span>
                    <span style={{ color: '#fff', fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{d.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#64748B', marginBottom: 16 }}>Select Duration</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {([1, 2, 3] as Duration[]).map(d => (
                  <button key={d} onClick={() => setSelectedDuration(d)}
                    style={{
                      position: 'relative', padding: '18px 12px', borderRadius: 14, textAlign: 'center',
                      border: `1px solid ${selectedDuration === d ? '#2563EB' : 'rgba(255,255,255,.07)'}`,
                      background: selectedDuration === d ? 'rgba(37,99,235,.14)' : 'rgba(255,255,255,.02)',
                      boxShadow: selectedDuration === d ? '0 0 30px rgba(37,99,235,.22)' : 'none',
                      cursor: 'pointer', transition: 'all .2s',
                    }}>
                    {d === 3 && <span style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)', background: '#D97706', color: '#000', fontSize: 9, fontWeight: 800, padding: '3px 10px', borderRadius: 999, whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Popular</span>}
                    <div className="fd" style={{ color: '#fff', fontSize: 26, fontWeight: 800 }}>{d}</div>
                    <div style={{ color: '#475569', fontSize: 12, marginTop: 4 }}>{d === 1 ? 'Month' : 'Months'}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Value box */}
            <div style={{ borderRadius: 18, padding: '20px 22px', border: '1px solid rgba(255,255,255,.06)', background: 'rgba(255,255,255,.02)', marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#64748B', fontSize: 13 }}>Internship Program</span>
                <span style={{ color: '#334155', fontSize: 13, textDecoration: 'line-through' }}>₹5,000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#64748B', fontSize: 13 }}>ProfileForge AI Access</span>
                <span style={{ color: '#334155', fontSize: 13, textDecoration: 'line-through' }}>₹1,499</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                <span style={{ color: '#64748B', fontSize: 13 }}>HireSense AI Access</span>
                <span style={{ color: '#334155', fontSize: 13, textDecoration: 'line-through' }}>₹2,999</span>
              </div>
              <div style={{ height: 1, background: 'rgba(255,255,255,.06)', marginBottom: 14 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>Total Payable</div>
                  <div style={{ color: '#34D399', fontSize: 11, fontWeight: 600 }}>You save ₹9,498</div>
                </div>
                <span className="fd pt" style={{ fontSize: 42, fontWeight: 800 }}>₹99</span>
              </div>
            </div>

            <p style={{ color: '#334155', fontSize: 11, marginBottom: 24, textAlign: 'center' }}>
              No hidden fees. No renewals. Everything above included until you complete your internship.
            </p>

            {/* CTA */}
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer"
              className="cta-btn"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                width: '100%', padding: '22px', borderRadius: 16,
                color: '#fff', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 19,
                textDecoration: 'none',
              }}>
              Fill Enrollment Form — ₹99
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 28, marginTop: 18, flexWrap: 'wrap' }}>
              {['🔒 Secure Payment', '📩 Offer Letter 24hrs', '📜 Official Document', '🗓️ Starts 10 Apr'].map(t => (
                <span key={t} style={{ color: '#334155', fontSize: 11 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/*  FAQ                                                             */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: '#06091A' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p className="label" style={{ marginBottom: 14 }}>FAQ</p>
            <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, marginBottom: 12 }}>Everything You Need to Know</h2>
            <p style={{ color: '#475569' }}>Honest answers. No fluff.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { q: 'Is this internship legitimate?', a: 'Yes. Nextgraad is a registered company. You receive an official offer letter on company letterhead, a real portal login, real projects, and a verifiable certificate — valid for your resume, LinkedIn, and college records.' },
              { q: 'Why is it only ₹99?', a: '₹99 is a commitment fee — it ensures only serious students enroll. We don\'t believe in charging thousands for a certificate. You\'re paying for commitment, not the experience. The experience is the point.' },
              { q: 'When do I get my offer letter?', a: 'Your official Nextgraad offer letter is emailed within 24 working hours of enrollment and payment confirmation. Portal access is provided simultaneously.' },
              { q: 'Are the projects real or dummy?', a: 'Real. Every project in our portal is based on actual industry use cases — not fabricated exercises. You will have something meaningful to show in interviews and on LinkedIn.' },
              { q: 'When does HireSense AI unlock?', a: 'HireSense AI unlocks after you complete and submit your internship project. You connect your GitHub, LinkedIn, and resume — the AI scores you and makes your profile visible to recruiters on the platform.' },
              { q: 'Is the batch date fixed at 10th April?', a: 'Yes. The next batch starts 10th April 2026. Seats are limited — enroll before they fill up. Students who enroll early get first access to project selection.' },
            ].map((item, i) => (
              <div key={i} className={`faq-row ${openFaq === i ? 'fopen' : ''}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 24px', cursor: 'pointer', background: 'none', border: 'none', textAlign: 'left' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontSize: 15, paddingRight: 24, lineHeight: 1.45 }}>{item.q}</span>
                  <span style={{ color: '#3B82F6', fontSize: 24, fontWeight: 700, flexShrink: 0, transition: 'transform .28s', transform: openFaq === i ? 'rotate(45deg)' : 'none', display: 'block' }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 22px', color: '#64748B', fontSize: 14, lineHeight: 1.75, borderTop: '1px solid rgba(255,255,255,.05)', paddingTop: 16 }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/*  FINAL CTA                                                       */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      
    </main>
  );
}