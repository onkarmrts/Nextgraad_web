"use client"

import { useEffect, useState } from "react"
import { supabase } from "../../../lib/supabaseClient"

type Lead = {
  id: string
  name: string
  phone: string
  program: string
  profile: string
  created_at: string
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchLeads() {
      try {
        setError(null)
        setLoading(true)
        
        console.log("Fetching leads from Supabase...")
        
        const { data, error: supabaseError } = await supabase
          .from("leads")
          .select("*")
          .order("created_at", { ascending: false })

        if (supabaseError) {
          console.error("Supabase error:", supabaseError)
          setError(supabaseError.message || "Failed to fetch leads")
          return
        }

        if (!data) {
          console.warn("No data returned from Supabase")
          setLeads([])
          return
        }

        console.log("Successfully fetched leads:", data)
        setLeads(data)
      } catch (err) {
        console.error("Unexpected error:", err)
        setError(err instanceof Error ? err.message : "An unexpected error occurred")
      } finally {
        setLoading(false)
      }
    }
    
    fetchLeads()
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Leads</h1>
            <p className="text-sm text-slate-500 mt-1">
              {leads.length} total enquiries
            </p>
          </div>
          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-full text-white"
            style={{ background: "linear-gradient(90deg,#C4308A,#E75228)" }}
          >
            Nextgraad Internal
          </span>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">
              <strong>Error:</strong> {error}
            </p>
            <p className="text-xs text-red-600 mt-2">
              Check the browser console for more details
            </p>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-slate-400 text-sm">Loading leads…</div>
          ) : leads.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-sm">No leads yet.</div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
                  <th className="text-left px-6 py-4 font-semibold">Name</th>
                  <th className="text-left px-6 py-4 font-semibold">Phone</th>
                  <th className="text-left px-6 py-4 font-semibold">Program</th>
                  <th className="text-left px-6 py-4 font-semibold">Profile</th>
                  <th className="text-left px-6 py-4 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <tr
                    key={lead.id}
                    className="border-b border-slate-50 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-slate-800">
                      {lead.name || "—"}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {lead.phone ? `+91 ${lead.phone}` : "—"}
                    </td>
                    <td className="px-6 py-4">
                      {lead.program ? (
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={{
                            background: "rgba(196,48,138,0.08)",
                            color: "#C4308A",
                          }}
                        >
                          {lead.program}
                        </span>
                      ) : "—"}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {lead.profile || "—"}
                    </td>
                    <td className="px-6 py-4 text-slate-400 text-xs">
                      {new Date(lead.created_at).toLocaleString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}