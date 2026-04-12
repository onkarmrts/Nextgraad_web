"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface DashboardData {
  intern: {
    name: string;
    email: string;
    role: string;
    domain: string;
    college: string;
  };
  internProject: {
    timeline_days: number;
    start_date: string;
    unlock_date: string;
    status: string;
    project_link: string | null;
    projects: {
      title: string;
      description: string;
      domain: string;
      difficulty: string;
    };
  } | null;
  daysRemaining: number | null;
  isUnlocked: boolean;
}

type ActiveTab = "dashboard" | "project" | "submit" | "documents";

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
  fetch("/api/intern/dashboard")
    .then((res) => {
      if (res.status === 401 || res.status === 404) {
        router.push('/portal/login')
        return null
      }
      return res.json()
    })
    .then((d) => {
      if (d) {
        setData(d)
        setLoading(false)
      }
    })
    .catch(() => {
      router.push("/internships")
    })
}, [])

  if (loading)
    return (
      <div
        style={{
          ...s.page,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" as const }}>
          <div style={s.spinner} />
          <p style={{ color: "#64748b", marginTop: 16, fontSize: 14 }}>
            Loading your portal...
          </p>
        </div>
      </div>
    );

  if (!data) return null;

  const { intern, internProject, daysRemaining, isUnlocked } = data;
  const progress = internProject
    ? Math.min(
        100,
        Math.round(
          ((internProject.timeline_days - (daysRemaining || 0)) /
            internProject.timeline_days) *
            100
        )
      )
    : 0;

  const navItems: { id: ActiveTab; icon: string; label: string }[] = [
    { id: "dashboard", icon: "⊞", label: "Overview" },
    { id: "project", icon: "🛠", label: "My Project" },
    { id: "submit", icon: "🚀", label: "Submit" },
    { id: "documents", icon: "📄", label: "Documents" },
  ];

  return (
    <div style={s.page}>
      {/* ── Mobile Responsive CSS ── */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .mobileTopBar {
            display: flex !important;
            position: sticky;
            top: 0;
            z-index: 200;
          }

          .overlay {
            display: block !important;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.65);
            z-index: 150;
          }

          .sidebar {
            position: fixed !important;
            top: 0;
            left: 0;
            height: 100vh !important;
            width: 250px !important;
            z-index: 300 !important;
            transform: translateX(-110%) !important;
            transition: transform 0.25s ease-in-out;
            background: #0a0f1e !important;
            box-shadow: 8px 0 30px rgba(0,0,0,0.5);
          }

          .sidebar.open {
            transform: translateX(0) !important;
          }

          .mainContent {
            padding-top: 64px !important;
          }

          .statsGridFix {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .tabPaddingFix {
            padding: 22px 18px 60px !important;
          }
        }

        @media (max-width: 420px) {
          .statsGridFix {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* ── Mobile top bar ── */}
      <div className="mobileTopBar" style={s.mobileTopBar}>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={s.hamburger}
        >
          ☰
        </button>
        <span style={s.mobileBrand}>NEXTGRAAD</span>
        <div style={s.mobileAvatar}>{intern.name.charAt(0).toUpperCase()}</div>
      </div>

      {/* ── Mobile overlay ── */}
      {sidebarOpen && (
        <div
          className="overlay"
          style={s.overlay}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div style={s.layout}>
        {/* ── Sidebar ── */}
        <aside
          className={`sidebar ${sidebarOpen ? "open" : ""}`}
          style={{
            ...s.sidebar,
            transform: sidebarOpen ? "translateX(0)" : undefined,
          }}
        >
          {/* Logo */}
          <div style={s.sidebarLogo}>
            <img
              src="/logos/logo.png"
              alt="Nextgraad"
              style={{ width: 36, height: 36, objectFit: "contain" as const }}
            />
            <div>
              <div style={s.sidebarBrand}>NEXTGRAAD</div>
              <div style={s.sidebarSub}>Intern Portal</div>
            </div>
          </div>

          <div style={s.sidebarDivider} />

          {/* Intern info */}
          <div style={s.internInfo}>
            <div style={s.bigAvatar}>{intern.name.charAt(0).toUpperCase()}</div>
            <div style={s.internName}>{intern.name}</div>
            <div style={s.internRole}>{intern.role} Intern</div>
            <div style={s.internDomain}>{intern.domain}</div>
          </div>

          <div style={s.sidebarDivider} />

          {/* Nav items */}
          <nav style={{ flex: 1 }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                style={{
                  ...s.navItem,
                  background:
                    activeTab === item.id
                      ? "rgba(109,40,217,0.2)"
                      : "transparent",
                  color: activeTab === item.id ? "#a78bfa" : "#64748b",
                  borderLeft:
                    activeTab === item.id
                      ? "3px solid #6d28d9"
                      : "3px solid transparent",
                }}
              >
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div style={s.sidebarDivider} />

          {/* Progress mini */}
          {internProject && (
            <div style={s.sidebarProgress}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <span style={{ color: "#64748b", fontSize: 11 }}>PROGRESS</span>
                <span
                  style={{ color: "#a78bfa", fontSize: 11, fontWeight: 700 }}
                >
                  {progress}%
                </span>
              </div>
              <div style={s.miniTrack}>
                <div style={{ ...s.miniFill, width: `${progress}%` }} />
              </div>
              <div style={{ color: "#475569", fontSize: 11, marginTop: 6 }}>
                {daysRemaining} days remaining
              </div>
            </div>
          )}

          {/* Footer */}
          <div style={s.sidebarFooter}>
            <span style={{ color: "#1e293b", fontSize: 11 }}>
              info@nextgraad.in
            </span>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="mainContent" style={s.main}>
          {/* ── OVERVIEW TAB ── */}
          {activeTab === "dashboard" && (
            <div className="tabPaddingFix" style={s.tabContent}>
              <div style={s.pageHeader}>
                <h1 style={s.pageTitle}>
                  Welcome back, {intern.name.split(" ")[0]} 👋
                </h1>
                <p style={s.pageSub}>
                  {intern.college} · {intern.domain}
                </p>
              </div>

              {!internProject ? (
                <div style={s.emptyCard}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
                  <h2 style={s.emptyTitle}>No project selected yet</h2>
                  <p style={s.emptySub}>
                    Choose your project to kick off your internship.
                  </p>
                  <button
                    onClick={() => router.push("/portal/projects")}
                    style={s.primaryBtn}
                  >
                    Browse Projects →
                  </button>
                </div>
              ) : (
                <>
                  {/* Stats */}
                  <div className="statsGridFix" style={s.statsGrid}>
                    <div style={s.statCard}>
                      <div style={s.statValue}>
                        {internProject.timeline_days}
                      </div>
                      <div style={s.statLabel}>Total Days</div>
                    </div>

                    <div style={s.statCard}>
                      <div
                        style={{
                          ...s.statValue,
                          color: daysRemaining === 0 ? "#10b981" : "#f59e0b",
                        }}
                      >
                        {daysRemaining}
                      </div>
                      <div style={s.statLabel}>Days Left</div>
                    </div>

                    <div style={s.statCard}>
                      <div style={{ ...s.statValue, color: "#a78bfa" }}>
                        {progress}%
                      </div>
                      <div style={s.statLabel}>Complete</div>
                    </div>

                    <div style={s.statCard}>
                      <div
                        style={{
                          ...s.statValue,
                          fontSize: 16,
                          color: isUnlocked ? "#10b981" : "#ef4444",
                        }}
                      >
                        {isUnlocked ? "Open" : "Locked"}
                      </div>
                      <div style={s.statLabel}>Submission</div>
                    </div>
                  </div>

                  {/* Progress card */}
                  <div style={s.card}>
                    <div style={s.cardLabel}>TIMELINE PROGRESS</div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 10,
                        flexWrap: "wrap",
                        gap: 8,
                      }}
                    >
                      <span style={{ color: "#64748b", fontSize: 13 }}>
                        Started{" "}
                        {new Date(internProject.start_date).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </span>
                      <span style={{ color: "#64748b", fontSize: 13 }}>
                        Unlocks{" "}
                        {new Date(internProject.unlock_date).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>

                    <div style={s.progressTrack}>
                      <div
                        style={{ ...s.progressFill, width: `${progress}%` }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 8,
                        flexWrap: "wrap",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          color: "#a78bfa",
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        {progress}% complete
                      </span>
                      <span style={{ color: "#64748b", fontSize: 13 }}>
                        {daysRemaining} days left
                      </span>
                    </div>
                  </div>

                  {/* Quick submit CTA if unlocked */}
                  {isUnlocked && internProject.status === "in_progress" && (
                    <div style={s.ctaBanner}>
                      <div>
                        <div
                          style={{
                            color: "#10b981",
                            fontWeight: 700,
                            marginBottom: 4,
                          }}
                        >
                          🔓 Submission is now open!
                        </div>
                        <div style={{ color: "#64748b", fontSize: 13 }}>
                          Submit your project link to receive your certificate.
                        </div>
                      </div>
                      <button
                        onClick={() => setActiveTab("submit")}
                        style={s.greenBtn}
                      >
                        Submit Now →
                      </button>
                    </div>
                  )}

                  {(internProject.status === "submitted" ||
                    internProject.status === "certified") && (
                    <div style={s.successBanner}>
                      <span style={{ fontSize: 28 }}>🏆</span>
                      <div>
                        <div style={{ color: "#10b981", fontWeight: 700 }}>
                          Project Submitted!
                        </div>
                        <div
                          style={{
                            color: "#64748b",
                            fontSize: 13,
                            marginTop: 4,
                          }}
                        >
                          Your certificate has been sent to {intern.email}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* ── PROJECT TAB ── */}
          {activeTab === "project" && (
            <div className="tabPaddingFix" style={s.tabContent}>
              <div style={s.pageHeader}>
                <h1 style={s.pageTitle}>My Project</h1>
                <p style={s.pageSub}>Your assigned internship project</p>
              </div>

              {!internProject ? (
                <div style={s.emptyCard}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>📋</div>
                  <h2 style={s.emptyTitle}>No project selected</h2>
                  <p style={s.emptySub}>Choose a project to get started.</p>
                  <button
                    onClick={() => router.push("/portal/projects")}
                    style={s.primaryBtn}
                  >
                    Browse Projects →
                  </button>
                </div>
              ) : (
                <>
                  <div style={s.card}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 16,
                        flexWrap: "wrap" as const,
                        gap: 8,
                      }}
                    >
                      <div style={s.cardLabel}>YOUR PROJECT</div>
                      <span
                        style={{
                          padding: "3px 12px",
                          borderRadius: 20,
                          fontSize: 12,
                          fontWeight: 700,
                          background:
                            internProject.projects.difficulty === "Beginner"
                              ? "rgba(16,185,129,0.15)"
                              : internProject.projects.difficulty === "Advanced"
                              ? "rgba(239,68,68,0.15)"
                              : "rgba(245,158,11,0.15)",
                          color:
                            internProject.projects.difficulty === "Beginner"
                              ? "#10b981"
                              : internProject.projects.difficulty === "Advanced"
                              ? "#ef4444"
                              : "#f59e0b",
                        }}
                      >
                        {internProject.projects.difficulty}
                      </span>
                    </div>

                    <h2
                      style={{
                        margin: "0 0 10px",
                        color: "#f1f5f9",
                        fontSize: 22,
                        fontWeight: 700,
                      }}
                    >
                      {internProject.projects.title}
                    </h2>

                    <p
                      style={{
                        color: "#94a3b8",
                        margin: "0 0 16px",
                        fontSize: 14,
                        lineHeight: 1.7,
                      }}
                    >
                      {internProject.projects.description}
                    </p>

                    <span style={s.domainPill}>
                      {internProject.projects.domain}
                    </span>

                    <button
                      onClick={() => router.push("/portal/projects")}
                      style={{
                        marginTop: 18,
                        width: "100%",
                        padding: "12px",
                        background: "rgba(167,139,250,0.1)",
                        border: "1px solid rgba(167,139,250,0.25)",
                        color: "#a78bfa",
                        borderRadius: 10,
                        fontSize: 14,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      View Full Project Details →
                    </button>
                  </div>

                  <div style={s.card}>
                    <div style={s.cardLabel}>INTERNSHIP DETAILS</div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column" as const,
                        gap: 14,
                      }}
                    >
                      {[
                        {
                          label: "Duration",
                          value: `${internProject.timeline_days} Days`,
                        },
                        {
                          label: "Started",
                          value: new Date(
                            internProject.start_date
                          ).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }),
                        },
                        {
                          label: "Deadline",
                          value: new Date(
                            internProject.unlock_date
                          ).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }),
                        },
                        {
                          label: "Status",
                          value:
                            internProject.status.charAt(0).toUpperCase() +
                            internProject.status.slice(1),
                        },
                      ].map((row) => (
                        <div key={row.label} style={s.detailRow}>
                          <span style={s.detailLabel}>{row.label}</span>
                          <span style={s.detailValue}>{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* ── SUBMIT TAB ── */}
          {activeTab === "submit" && (
            <div className="tabPaddingFix" style={s.tabContent}>
              <div style={s.pageHeader}>
                <h1 style={s.pageTitle}>Submit Project</h1>
                <p style={s.pageSub}>
                  Submit your project link to receive your certificate
                </p>
              </div>

              {!internProject ? (
                <div style={s.emptyCard}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
                  <h2 style={s.emptyTitle}>No project selected</h2>
                </div>
              ) : !isUnlocked ? (
                <div style={s.card}>
                  <div style={s.lockedBox}>
                    <span style={{ fontSize: 40 }}>🔒</span>
                    <div>
                      <div
                        style={{
                          color: "#f1f5f9",
                          fontWeight: 700,
                          fontSize: 17,
                          marginBottom: 6,
                        }}
                      >
                        Submission Locked
                      </div>
                      <div style={{ color: "#64748b", fontSize: 14 }}>
                        Your submission will unlock on{" "}
                        <strong style={{ color: "#a78bfa" }}>
                          {new Date(
                            internProject.unlock_date
                          ).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </strong>
                      </div>
                      <div
                        style={{ color: "#475569", fontSize: 13, marginTop: 8 }}
                      >
                        {daysRemaining} days remaining in your internship
                      </div>
                    </div>
                  </div>
                </div>
              ) : internProject.status === "submitted" ||
                internProject.status === "certified" ? (
                <div style={s.card}>
                  <div style={s.successBanner}>
                    <span style={{ fontSize: 40 }}>🏆</span>
                    <div>
                      <div
                        style={{
                          color: "#10b981",
                          fontWeight: 700,
                          fontSize: 17,
                          marginBottom: 6,
                        }}
                      >
                        Already Submitted!
                      </div>
                      <div style={{ color: "#64748b", fontSize: 14 }}>
                        Your certificate has been sent to {intern.email}.
                        Download it from the Documents tab.
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <SubmitForm internEmail={intern.email} />
              )}
            </div>
          )}

          {/* ── DOCUMENTS TAB ── */}
          {activeTab === "documents" && (
            <div className="tabPaddingFix" style={s.tabContent}>
              <div style={s.pageHeader}>
                <h1 style={s.pageTitle}>Documents</h1>
                <p style={s.pageSub}>
                  Download your official Nextgraad documents
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 14,
                }}
              >
                {/* Offer letter */}
                <div style={s.docCard}>
                  <div style={s.docIcon}>📄</div>
                  <div style={{ flex: 1 }}>
                    <div style={s.docTitle}>Offer Letter</div>
                    <div style={s.docSub}>
                      Official internship offer letter from Nextgraad
                    </div>
                  </div>
                  <button
                    onClick={async () => {
                      const res = await fetch("/api/intern/offer-letter", {
                        credentials: "include",
                      });
                      if (!res.ok) {
                        alert("Failed to download");
                        return;
                      }
                      const blob = await res.blob();
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = "Offer-Letter.pdf";
                      document.body.appendChild(a);
                      a.click();
                      a.remove();
                      URL.revokeObjectURL(url);
                    }}
                    style={s.downloadBtn}
                  >
                    ↓ Download
                  </button>
                </div>

                {/* Certificate */}
                {internProject?.status === "submitted" ||
                internProject?.status === "certified" ? (
                  <div
                    style={{
                      ...s.docCard,
                      borderColor: "rgba(245,158,11,0.3)",
                    }}
                  >
                    <div style={s.docIcon}>🏆</div>
                    <div style={{ flex: 1 }}>
                      <div style={s.docTitle}>Certificate of Internship</div>
                      <div style={s.docSub}>
                        Issued upon successful project submission
                      </div>
                    </div>
                    <button
                      onClick={async () => {
                        const res = await fetch("/api/intern/certificate", {
                          credentials: "include",
                        });
                        if (!res.ok) {
                          alert("Failed to download");
                          return;
                        }
                        const blob = await res.blob();
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = "Certificate.pdf";
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                        URL.revokeObjectURL(url);
                      }}
                      style={{
                        ...s.downloadBtn,
                        borderColor: "rgba(245,158,11,0.4)",
                        color: "#f59e0b",
                      }}
                    >
                      ↓ Download
                    </button>
                  </div>
                ) : (
                  <div style={{ ...s.docCard, opacity: 0.5 }}>
                    <div style={s.docIcon}>🔒</div>
                    <div style={{ flex: 1 }}>
                      <div style={s.docTitle}>Certificate of Internship</div>
                      <div style={s.docSub}>
                        Available after project submission
                      </div>
                    </div>
                    <span style={{ color: "#475569", fontSize: 13 }}>
                      Locked
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// ── Submit form component ──
function SubmitForm({ internEmail }: { internEmail: string }) {
  const router = useRouter();
  const [link, setLink] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = async () => {
    if (!link.trim()) {
      setError("Please enter your project link.");
      return;
    }
    if (!link.startsWith("http")) {
      setError("Please enter a valid URL starting with http://");
      return;
    }
    setSubmitting(true);
    setError("");
    const res = await fetch("/api/intern/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectLink: link }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Something went wrong");
      setSubmitting(false);
      return;
    }
    setDone(true);
  };

  if (done)
    return (
      <div style={s.card}>
        <div style={{ textAlign: "center" as const, padding: "32px 0" }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🏆</div>
          <h2 style={{ color: "#10b981", margin: "0 0 8px", fontSize: 22 }}>
            Submitted!
          </h2>
          <p style={{ color: "#64748b", margin: "0 0 24px", fontSize: 14 }}>
            Your certificate has been sent to {internEmail}
          </p>
          <button onClick={() => router.refresh()} style={s.primaryBtn}>
            Go to Dashboard
          </button>
        </div>
      </div>
    );

  return (
    <div style={s.card}>
      <div style={s.cardLabel}>PROJECT LINK</div>
      <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 20px" }}>
        Paste your GitHub repository link or live project URL below.
      </p>
      <input
        type="url"
        placeholder="https://github.com/yourname/project"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        style={s.input}
      />
      {error && <div style={s.errorBox}>{error}</div>}
      <button
        onClick={handleSubmit}
        disabled={submitting}
        style={{
          ...s.greenBtn,
          width: "100%",
          padding: "14px",
          fontSize: 15,
          opacity: submitting ? 0.6 : 1,
        }}
      >
        {submitting ? "⏳ Submitting..." : "🚀 Submit & Get Certificate"}
      </button>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: {
    height: "100vh",
    background: "#0a0f1e",
    fontFamily: "'Inter', Arial, sans-serif",
    color: "#e2e8f0",
    display: "flex",
    flexDirection: "column" as const,
    overflow: "hidden",
  },
  spinner: {
    width: 36,
    height: 36,
    border: "3px solid rgba(255,255,255,0.08)",
    borderTop: "3px solid #6d28d9",
    borderRadius: "50%",
    margin: "0 auto",
    animation: "spin 0.8s linear infinite",
  },
  mobileTopBar: {
    display: "none",
    padding: "12px 16px",
    background: "rgba(255,255,255,0.02)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hamburger: {
    background: "transparent",
    border: "none",
    color: "#94a3b8",
    fontSize: 22,
    cursor: "pointer",
    padding: 4,
  },
  mobileBrand: {
    fontSize: 16,
    fontWeight: 800,
    color: "#fff",
    letterSpacing: 2,
  },
  mobileAvatar: {
    width: 32,
    height: 32,
    background: "linear-gradient(135deg, #6d28d9, #4f46e5)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 13,
    color: "white",
  },
  overlay: {
    display: "none",
    position: "fixed" as const,
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    zIndex: 40,
  },
  layout: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
    height: "100%",
  },
  sidebar: {
    width: 240,
    minWidth: 240,
    background: "rgba(255,255,255,0.02)",
    borderRight: "1px solid rgba(255,255,255,0.06)",
    display: "flex",
    flexDirection: "column" as const,
    overflow: "hidden",
    zIndex: 50,
  },
  sidebarLogo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "20px 18px 16px",
  },
  sidebarBrand: {
    fontSize: 14,
    fontWeight: 800,
    color: "#fff",
    letterSpacing: 2,
  },
  sidebarSub: { fontSize: 10, color: "#475569" },
  sidebarDivider: {
    height: 1,
    background: "rgba(255,255,255,0.05)",
    margin: "0 18px",
  },
  internInfo: {
    padding: "16px 18px",
    textAlign: "center" as const,
  },
  bigAvatar: {
    width: 52,
    height: 52,
    background: "linear-gradient(135deg, #6d28d9, #4f46e5)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 20,
    color: "white",
    margin: "0 auto 10px",
  },
  internName: {
    color: "#f1f5f9",
    fontWeight: 700,
    fontSize: 14,
    marginBottom: 2,
  },
  internRole: { color: "#a78bfa", fontSize: 12, marginBottom: 2 },
  internDomain: {
    color: "#475569",
    fontSize: 11,
    background: "rgba(255,255,255,0.04)",
    padding: "2px 10px",
    borderRadius: 20,
    display: "inline-block",
    marginTop: 4,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    width: "100%",
    padding: "11px 18px",
    border: "none",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
    textAlign: "left" as const,
    transition: "all 0.15s ease",
    borderRadius: 0,
  },
  sidebarProgress: {
    padding: "14px 18px",
  },
  miniTrack: {
    height: 4,
    background: "rgba(255,255,255,0.06)",
    borderRadius: 99,
    overflow: "hidden",
  },
  miniFill: {
    height: "100%",
    background: "linear-gradient(90deg, #6d28d9, #a78bfa)",
    borderRadius: 99,
  },
  sidebarFooter: {
    padding: "12px 18px",
    borderTop: "1px solid rgba(255,255,255,0.05)",
  },
  main: {
    flex: 1,
    overflowY: "auto" as const,
    overflowX: "hidden" as const,
  },
  tabContent: {
    padding: "32px 36px 60px",
    maxWidth: 820,
  },
  pageHeader: { marginBottom: 28 },
  pageTitle: { margin: 0, fontSize: 26, fontWeight: 800, color: "#f1f5f9" },
  pageSub: { margin: "6px 0 0", color: "#64748b", fontSize: 14 },
  emptyCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: 48,
    textAlign: "center" as const,
  },
  emptyTitle: {
    margin: "0 0 8px",
    color: "#f1f5f9",
    fontSize: 20,
    fontWeight: 700,
  },
  emptySub: { color: "#64748b", margin: "0 0 24px", fontSize: 14 },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 12,
    marginBottom: 16,
  },
  statCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 12,
    padding: "18px 16px",
    textAlign: "center" as const,
  },
  statValue: {
    fontSize: 26,
    fontWeight: 800,
    color: "#f1f5f9",
    lineHeight: 1,
  },
  statLabel: {
    color: "#475569",
    fontSize: 11,
    marginTop: 6,
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: 0.5,
  },
  card: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
  },
  cardLabel: {
    fontSize: 10,
    fontWeight: 700,
    color: "#475569",
    letterSpacing: 1.5,
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: 14,
  },
  progressTrack: {
    height: 8,
    background: "rgba(255,255,255,0.06)",
    borderRadius: 99,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #6d28d9, #a78bfa)",
    borderRadius: 99,
    transition: "width 0.6s ease",
  },
  ctaBanner: {
    background: "rgba(16,185,129,0.06)",
    border: "1px solid rgba(16,185,129,0.2)",
    borderRadius: 14,
    padding: "18px 22px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap" as const,
    marginBottom: 16,
  },
  successBanner: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    background: "rgba(16,185,129,0.06)",
    border: "1px solid rgba(16,185,129,0.2)",
    borderRadius: 12,
    padding: "18px 20px",
    marginBottom: 16,
  },
  lockedBox: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "8px 0",
  },
  domainPill: {
    background: "rgba(167,139,250,0.1)",
    color: "#a78bfa",
    padding: "4px 14px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 600,
    border: "1px solid rgba(167,139,250,0.2)",
  },
  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
    borderBottom: "1px solid rgba(255,255,255,0.04)",
  },
  detailLabel: { color: "#64748b", fontSize: 13 },
  detailValue: { color: "#f1f5f9", fontWeight: 600, fontSize: 13 },
  docCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14,
    padding: "18px 20px",
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  docIcon: { fontSize: 28 },
  docTitle: {
    color: "#f1f5f9",
    fontWeight: 700,
    fontSize: 15,
    marginBottom: 4,
  },
  docSub: { color: "#64748b", fontSize: 12 },
  downloadBtn: {
    background: "rgba(167,139,250,0.1)",
    color: "#a78bfa",
    border: "1px solid rgba(167,139,250,0.3)",
    padding: "8px 18px",
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    color: "#f1f5f9",
    fontSize: 14,
    outline: "none",
    marginBottom: 16,
    boxSizing: "border-box" as const,
  },
  errorBox: {
    background: "rgba(239,68,68,0.08)",
    border: "1px solid rgba(239,68,68,0.25)",
    borderRadius: 8,
    padding: "10px 14px",
    color: "#ef4444",
    fontSize: 13,
    marginBottom: 14,
  },
  primaryBtn: {
    padding: "12px 28px",
    background: "linear-gradient(135deg, #6d28d9, #4f46e5)",
    color: "white",
    border: "none",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
  },
  greenBtn: {
    padding: "11px 22px",
    background: "linear-gradient(135deg, #059669, #10b981)",
    color: "white",
    border: "none",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
  },
};