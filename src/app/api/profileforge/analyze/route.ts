export const runtime = "nodejs";

import { NextResponse } from "next/server";
import OpenAI from "openai";
import axios from "axios";
import mammoth from "mammoth";
import { supabaseAdmin } from "../../../../lib/supabaseAdmin";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { fileUrl, fileName, fileType, targetRole } = await req.json();

    if (!fileUrl || !fileType || !targetRole) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data: row, error: insertError } = await supabaseAdmin
      .from("resume_requests")
      .insert([
        {
          file_url: fileUrl,
          file_name: fileName,
          file_type: fileType,
          target_role: targetRole,
          status: "processing",
        },
      ])
      .select()
      .single();

    if (insertError) {
      return NextResponse.json(
        { success: false, error: insertError.message },
        { status: 500 }
      );
    }

    // Download file
    const response = await axios.get(fileUrl, {
      responseType: "arraybuffer",
    });

    const buffer = Buffer.from(response.data);

    let extractedText = "";

    if (fileType === "pdf") {
      // ✅ Guaranteed working in Next.js Node runtime
      const pdfParse = require("pdf-parse");
      const parsed = await pdfParse(buffer);
      extractedText = parsed.text;
    } else if (fileType === "docx") {
      const parsed = await mammoth.extractRawText({ buffer });
      extractedText = parsed.value;
    } else {
      return NextResponse.json(
        { success: false, error: "Only PDF/DOCX supported" },
        { status: 400 }
      );
    }

    if (!extractedText || extractedText.length < 50) {
      return NextResponse.json(
        { success: false, error: "Resume extraction failed" },
        { status: 400 }
      );
    }

    const prompt = `
You are ProfileForge AI.
You are an ATS Resume Optimization Expert.

Target Role: ${targetRole}

Resume Content:
${extractedText}

Return STRICT JSON only:
{
  "ats_score": number,
  "issues_found": [string],
  "missing_keywords": [string],
  "optimized_summary": string,
  "optimized_resume": string
}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.4,
      response_format: { type: "json_object" },
      messages: [{ role: "user", content: prompt }],
    });

    const aiText = completion.choices[0].message.content || "";

    let parsedResult;
    try {
      parsedResult = JSON.parse(aiText);
    } catch (err) {
      await supabaseAdmin
        .from("resume_requests")
        .update({ status: "failed" })
        .eq("id", row.id);

      return NextResponse.json(
        { success: false, error: "AI JSON parse failed", raw: aiText },
        { status: 500 }
      );
    }

    await supabaseAdmin
      .from("resume_requests")
      .update({
        extracted_text: extractedText,
        ats_score: parsedResult.ats_score,
        analysis: parsedResult,
        optimized_resume: parsedResult.optimized_resume,
        status: "completed",
      })
      .eq("id", row.id);

    return NextResponse.json({
      success: true,
      requestId: row.id,
      data: parsedResult,
    });
  } catch (err: any) {
    console.error("Backend Error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}