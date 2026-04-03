"use client";

import { useState } from "react";
import { uploadResumeSupabase } from "../../lib/uploadResumeSupabase";

export default function ProfileForgeAIPage() {
  const [mode, setMode] = useState<"resume" | "linkedin">("resume");
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [linkedinUrl, setLinkedinUrl] = useState<string>("");
  const [targetRole, setTargetRole] = useState<string>("Data Analyst");
  const [loading, setLoading] = useState(false);

  const roles = [
    "Data Analyst",
    "Business Analyst",
    "Data Scientist",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Digital Marketing",
    "Operations",
    "Product Management",
  ];

  async function handleGenerate() {
    try {
      setLoading(true);

      if (mode === "resume") {
        if (!file) {
          alert("Please upload your resume first.");
          setLoading(false);
          return;
        }

        // Upload resume to Supabase
        const uploaded = await uploadResumeSupabase(file);

        // Call backend API
        const res = await fetch("/api/profileforge/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fileUrl: uploaded.fileUrl,
            fileName: uploaded.fileName,
            fileType: uploaded.fileType,
            targetRole,
          }),
        });

        const data = await res.json();

        if (!data.success) {
          alert(data.error);
          setLoading(false);
          return;
        }

        window.location.href = `/profileforge/results/${data.requestId}`;
      } else {
        alert("LinkedIn mode backend is coming soon.");
        setLoading(false);
        return;
      }
    } catch (err: any) {
      alert(err.message);
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0b1020] px-4 py-20 text-white">
      {/* Glow Background */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-700/30 blur-[130px]" />
      <div className="absolute right-0 top-24 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[130px]" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* HERO */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold text-gray-200 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#05C8FB]" />
            Nextgraad AI Ecosystem
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            ProfileForge{" "}
            <span className="bg-gradient-to-r from-[#05C8FB] to-[#F86815] bg-clip-text text-transparent">
              AI
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
            Upload your resume and get an ATS optimized version with keyword
            suggestions, improvements and recruiter-ready formatting.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT CARD */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold">Optimize Now</h2>

              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0b1020]/40 p-1">
                <button
                  onClick={() => setMode("resume")}
                  className={`rounded-lg px-4 py-2 text-xs font-bold transition md:text-sm ${
                    mode === "resume"
                      ? "bg-gradient-to-r from-[#05C8FB] to-[#F86815] text-black"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Resume
                </button>

                <button
                  onClick={() => setMode("linkedin")}
                  className={`rounded-lg px-4 py-2 text-xs font-bold transition md:text-sm ${
                    mode === "linkedin"
                      ? "bg-gradient-to-r from-[#05C8FB] to-[#F86815] text-black"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  LinkedIn
                </button>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-300">
              Choose your input method and generate a resume built for modern
              hiring.
            </p>

            {/* Resume Upload */}
            {mode === "resume" && (
              <div className="mt-8">
                <p className="text-sm font-bold text-white">
                  Upload Resume (PDF/DOCX)
                </p>

                <div className="mt-4 rounded-2xl border border-white/10 bg-[#0b1020]/40 p-7 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#05C8FB]/20 to-[#F86815]/20 text-2xl font-extrabold text-[#05C8FB]">
                    ↑
                  </div>

                  <p className="mt-4 text-sm font-semibold text-white">
                    Drop your resume here
                  </p>

                  <p className="mt-2 text-xs text-gray-400">
                    Supported formats: PDF, DOCX
                  </p>

                  <label className="mt-5 inline-block cursor-pointer rounded-xl bg-[#F86815] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90">
                    Choose File
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => {
                        const selected = e.target.files?.[0];
                        if (selected) {
                          setFile(selected);
                          setFileName(selected.name);
                        }
                      }}
                    />
                  </label>

                  {fileName && (
                    <p className="mt-4 text-xs text-gray-300">
                      Selected:{" "}
                      <span className="font-semibold text-[#05C8FB]">
                        {fileName}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* LinkedIn Input */}
            {mode === "linkedin" && (
              <div className="mt-8">
                <p className="text-sm font-bold text-white">
                  LinkedIn Profile URL
                </p>

                <input
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://linkedin.com/in/your-profile"
                  className="mt-4 w-full rounded-2xl border border-white/10 bg-[#0b1020]/40 px-5 py-4 text-sm text-gray-200 outline-none transition focus:border-[#05C8FB] focus:ring-2 focus:ring-[#05C8FB]/20"
                />

                <p className="mt-3 text-xs text-gray-400">
                  Make sure your LinkedIn experience and skills are updated.
                </p>
              </div>
            )}

            {/* Target Role */}
            <div className="mt-8">
              <p className="text-sm font-bold text-white">Target Role</p>

              <select
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                className="mt-4 w-full rounded-2xl border border-white/10 bg-[#0b1020]/40 px-5 py-4 text-sm text-gray-200 outline-none transition focus:border-[#05C8FB] focus:ring-2 focus:ring-[#05C8FB]/20"
              >
                {roles.map((role, idx) => (
                  <option key={idx} value={role} className="text-black">
                    {role}
                  </option>
                ))}
              </select>

              <p className="mt-3 text-xs text-gray-400">
                AI will optimize your resume for this role.
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="mt-10 w-full rounded-2xl bg-gradient-to-r from-[#05C8FB] to-[#F86815] px-6 py-4 text-sm font-extrabold text-black transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate AI Optimized Resume"}
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              Powered by Nextgraad AI Ecosystem
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-extrabold">
                What ProfileForge AI Generates
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-300">
                ProfileForge AI improves your resume content and makes it ATS
                compatible. You receive an optimized resume output along with a
                resume analysis report.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#0b1020]/40 p-5">
                  <p className="text-sm font-extrabold text-[#05C8FB]">
                    ATS Score Report
                  </p>
                  <p className="mt-2 text-xs leading-6 text-gray-400">
                    AI calculates ATS compatibility score out of 100.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1020]/40 p-5">
                  <p className="text-sm font-extrabold text-[#05C8FB]">
                    Missing Keywords
                  </p>
                  <p className="mt-2 text-xs leading-6 text-gray-400">
                    Finds missing role keywords and suggests improvements.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1020]/40 p-5">
                  <p className="text-sm font-extrabold text-[#05C8FB]">
                    Resume Rewrite
                  </p>
                  <p className="mt-2 text-xs leading-6 text-gray-400">
                    Converts weak bullet points into achievement-driven lines.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1020]/40 p-5">
                  <p className="text-sm font-extrabold text-[#05C8FB]">
                    Optimized Resume
                  </p>
                  <p className="mt-2 text-xs leading-6 text-gray-400">
                    Final clean resume text ready for recruiter shortlisting.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#05C8FB]/10 via-white/5 to-[#F86815]/10 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-extrabold">Built for Modern Hiring</h3>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl border border-white/10 bg-[#0b1020]/40 px-4 py-5">
                  <p className="text-xs text-gray-400">ATS Boost</p>
                  <p className="mt-2 text-2xl font-extrabold text-[#05C8FB]">
                    +30%
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1020]/40 px-4 py-5">
                  <p className="text-xs text-gray-400">Time</p>
                  <p className="mt-2 text-2xl font-extrabold text-[#F86815]">
                    2 Min
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1020]/40 px-4 py-5">
                  <p className="text-xs text-gray-400">Role Support</p>
                  <p className="mt-2 text-2xl font-extrabold text-white">
                    20+
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-300">
                Resume is not enough today. Your resume must be ATS-ready and
                recruiter-readable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}