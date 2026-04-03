"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";

export default function ResultsPage({ params }: { params: { id: string } }) {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResult() {
      const { data, error } = await supabase
        .from("resume_requests")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) {
        console.log(error.message);
      }

      setResult(data);
      setLoading(false);
    }

    fetchResult();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b1020] flex items-center justify-center text-white">
        <p className="text-lg font-bold">Loading AI Resume Results...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-[#0b1020] flex items-center justify-center text-white">
        <p className="text-lg font-bold text-red-400">Result Not Found</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0b1020] px-5 py-20 text-white">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-700/30 blur-[130px]" />
      <div className="absolute right-0 top-24 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[130px]" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold md:text-5xl">
          ProfileForge{" "}
          <span className="bg-gradient-to-r from-[#05C8FB] to-[#F86815] bg-clip-text text-transparent">
            AI Results
          </span>
        </h1>

        <p className="mt-4 text-gray-300">
          Target Role:{" "}
          <span className="font-bold text-[#F86815]">{result.target_role}</span>
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-extrabold text-[#05C8FB]">
            ATS Score: {result.ats_score}/100
          </h2>

          <p className="mt-4 text-sm text-gray-300">
            Your resume has been optimized for ATS and recruiter readability.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-xl font-extrabold text-white">
            Optimized Resume Output
          </h2>

          <pre className="mt-6 whitespace-pre-wrap text-sm leading-7 text-gray-200">
            {result.optimized_resume}
          </pre>
        </div>
      </div>
    </div>
  );
}