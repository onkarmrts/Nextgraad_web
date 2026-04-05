// app/api/test-pdf/route.ts
export const runtime = 'nodejs'   // ← required for fs/pdf-lib

import { NextResponse } from 'next/server'
import { generateOfferLetter } from '../../../lib/pdf'

export async function GET() {
  try {
    const pdf = await generateOfferLetter({
      name:     'Raj Sharma',
      role:     'Web Developer',
      domain:   'Frontend',
      college:  'MIT Pune',
      date:     new Date().toDateString(),
      internId: 'test1234abcd5678',   // ← no hyphens, slice(0,8) needs plain chars
      duration: 90,                    // ← was missing, caused the crash
    })

    const pdfBytes = new Uint8Array(pdf)

    return new NextResponse(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="test-offer.pdf"',
      },
    })
  } catch (err) {
    console.error('[Test PDF Error]', err)
    return new NextResponse(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}