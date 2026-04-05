'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface ProjectDoc {
  id: string
  title: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  domain: string
  shortDesc: string
  overview: string
  objectives: string[]
  deliverables: string[]
  techStack: string[]
  timeline: { phase: string; tasks: string }[]
}

const ALL_PROJECTS: ProjectDoc[] = [
  // ⚠️ Paste your full ALL_PROJECTS array here (same as project choosing page)
]

export default function MyProjectPage() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [selectedProjectTitle, setSelectedProjectTitle] = useState('')
  const [project, setProject] = useState<ProjectDoc | null>(null)
  const [expanded, setExpanded] = useState(true)

  useEffect(() => {
    async function fetchMyProject() {
      try {
        const res = await fetch('/api/intern/my-project', { credentials: 'include' })
        const data = await res.json()

        if (!res.ok) {
          setLoading(false)
          return
        }

        const titleFromDB = data?.project?.title || ''
        setSelectedProjectTitle(titleFromDB)

        const matched = ALL_PROJECTS.find(p => p.title === titleFromDB)
        setProject(matched || null)

        setLoading(false)
      } catch (err) {
        setLoading(false)
      }
    }

    fetchMyProject()
  }, [])

  const diffColor: Record<string, { bg: string; text: string }> = {
    Beginner: { bg: 'rgba(16,185,129,0.15)', text: '#10b981' },
    Intermediate: { bg: 'rgba(245,158,11,0.15)', text: '#f59e0b' },
    Advanced: { bg: 'rgba(239,68,68,0.15)', text: '#ef4444' },
  }

  if (loading) {
    return (
      <div style={s.page}>
        <div style={s.center}>Loading your project...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div style={s.page}>
        <nav style={s.nav}>
          <div style={s.navLeft}>
            <img src="/logos/logo.png" alt="Nextgraad" style={{ width: 32, height: 32 }} />
            <div>
              <div style={s.navBrand}>NEXTGRAAD</div>
              <div style={s.navSub}>Internship Portal</div>
            </div>
          </div>
          <button onClick={() => router.push('/portal/dashboard')} style={s.backBtn}>
            ← Dashboard
          </button>
        </nav>

        <div style={s.body}>
          <h1 style={s.pageTitle}>My Project</h1>
          <p style={s.pageSub}>
            No project selected yet or project not found in list.
          </p>

          {selectedProjectTitle && (
            <div style={s.errorBox}>
              ⚠️ Your selected project in DB is: <b>{selectedProjectTitle}</b>
              <br />
              But it is not present inside ALL_PROJECTS array.
            </div>
          )}

          <button
            onClick={() => router.push('/portal/projects')}
            style={s.confirmBtn}
          >
            Choose Project
          </button>
        </div>
      </div>
    )
  }

  const diff = diffColor[project.difficulty]

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <div style={s.navLeft}>
          <img src="/logos/logo.png" alt="Nextgraad" style={{ width: 32, height: 32 }} />
          <div>
            <div style={s.navBrand}>NEXTGRAAD</div>
            <div style={s.navSub}>Internship Portal</div>
          </div>
        </div>
        <button onClick={() => router.push('/portal/dashboard')} style={s.backBtn}>
          ← Dashboard
        </button>
      </nav>

      <div style={s.body}>
        <h1 style={s.pageTitle}>My Selected Project</h1>
        <p style={s.pageSub}>
          View your project details, objectives, deliverables, and timeline.
        </p>

        <div style={s.projectCard}>
          <div
            style={s.cardHeader}
            onClick={() => setExpanded(!expanded)}
          >
            <div>
              <div style={s.projectName}>{project.title}</div>
              <div style={s.projectShortDesc}>{project.shortDesc}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ ...s.diffTag, background: diff.bg, color: diff.text }}>
                {project.difficulty}
              </span>
              <span style={s.expandIcon}>{expanded ? '▲' : '▼'}</span>
            </div>
          </div>

          {expanded && (
            <div style={s.expandedContent}>
              <div style={s.techRow}>
                {project.techStack.map(t => (
                  <span key={t} style={s.techPill}>{t}</span>
                ))}
              </div>

              <div style={s.section}>
                <div style={s.sectionTitle}>📋 Project Overview</div>
                <p style={s.sectionText}>{project.overview}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={s.section}>
                  <div style={s.sectionTitle}>🎯 Objectives</div>
                  {project.objectives.map((o, i) => (
                    <div key={i} style={s.listItem}>
                      <span style={s.bullet}>→</span> {o}
                    </div>
                  ))}
                </div>

                <div style={s.section}>
                  <div style={s.sectionTitle}>📦 Deliverables</div>
                  {project.deliverables.map((d, i) => (
                    <div key={i} style={s.listItem}>
                      <span style={s.bullet}>✓</span> {d}
                    </div>
                  ))}
                </div>
              </div>

              <div style={s.section}>
                <div style={s.sectionTitle}>📅 Project Timeline</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {project.timeline.map((t, i) => (
                    <div key={i} style={s.timelineItem}>
                      <span style={s.timelinePhase}>{t.phase}</span>
                      <span style={s.timelineTasks}>{t.tasks}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  page: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#0a0f1e',
    fontFamily: "'Inter', Arial, sans-serif",
    color: '#e2e8f0',
    overflow: 'hidden',
  },
  center: {
    margin: 'auto',
    color: '#94a3b8',
    fontSize: 15,
  },
  nav: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 40px',
    background: 'rgba(255,255,255,0.02)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    backdropFilter: 'blur(12px)',
    zIndex: 100,
  },
  body: {
    flex: 1,
    overflowY: 'auto',
    padding: '32px 24px 80px',
    maxWidth: 860,
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box',
  },
  navLeft: { display: 'flex', alignItems: 'center', gap: 12 },
  navBrand: { fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: 2 },
  navSub: { fontSize: 11, color: '#64748b' },
  backBtn: {
    background: 'rgba(255,255,255,0.05)',
    color: '#94a3b8',
    border: '1px solid rgba(255,255,255,0.08)',
    padding: '8px 16px',
    borderRadius: 8,
    fontSize: 13,
    cursor: 'pointer',
  },
  pageTitle: { margin: 0, fontSize: 26, fontWeight: 800, color: '#f1f5f9' },
  pageSub: { margin: '8px 0 22px', color: '#64748b', fontSize: 14, lineHeight: 1.6 },

  projectCard: {
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 10,
    overflow: 'hidden',
    background: 'rgba(255,255,255,0.02)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 16px',
    cursor: 'pointer',
    gap: 12,
  },
  projectName: { fontSize: 15, fontWeight: 800, color: '#f1f5f9', marginBottom: 4 },
  projectShortDesc: { fontSize: 12, color: '#64748b', lineHeight: 1.5 },
  diffTag: {
    padding: '3px 10px',
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 700,
    whiteSpace: 'nowrap',
  },
  expandIcon: { color: '#475569', fontSize: 11 },

  expandedContent: { padding: '0 16px 20px', borderTop: '1px solid rgba(255,255,255,0.05)' },
  techRow: { display: 'flex', flexWrap: 'wrap', gap: 6, padding: '14px 0 10px' },
  techPill: {
    background: 'rgba(255,255,255,0.06)',
    color: '#94a3b8',
    padding: '3px 10px',
    borderRadius: 20,
    fontSize: 11,
    border: '1px solid rgba(255,255,255,0.08)',
  },
  section: { marginBottom: 16 },
  sectionTitle: { fontSize: 12, fontWeight: 700, color: '#a78bfa', marginBottom: 8 },
  sectionText: { fontSize: 13, color: '#94a3b8', lineHeight: 1.7, margin: 0 },
  listItem: { fontSize: 12, color: '#94a3b8', lineHeight: 1.8, display: 'flex', gap: 6 },
  bullet: { color: '#6d28d9', flexShrink: 0 },
  timelineItem: {
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
    background: 'rgba(255,255,255,0.03)',
    borderRadius: 6,
    padding: '8px 12px',
  },
  timelinePhase: { fontSize: 11, fontWeight: 700, color: '#6d28d9', minWidth: 70 },
  timelineTasks: { fontSize: 12, color: '#94a3b8', lineHeight: 1.5 },

  confirmBtn: {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg,#6d28d9,#4f46e5)',
    color: 'white',
    border: 'none',
    borderRadius: 12,
    fontSize: 15,
    fontWeight: 700,
    cursor: 'pointer',
  },
  errorBox: {
    background: 'rgba(239,68,68,0.08)',
    border: '1px solid rgba(239,68,68,0.3)',
    borderRadius: 10,
    padding: '12px 16px',
    color: '#ef4444',
    fontSize: 13,
    marginBottom: 16,
  },
}