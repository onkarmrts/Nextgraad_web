import 'server-only'   // ← add this as the very first line
// ... rest of file unchange
import { PDFDocument, rgb, StandardFonts, PDFPage, RGB, degrees } from 'pdf-lib'
import QRCode from 'qrcode'
import * as fs from 'fs'
import * as path from 'path'

// ─── App URL for QR codes ─────────────────────────────────────────────────────
function getAppUrl() {
  return process.env.NEXT_PUBLIC_APP_URL
}

// ─── Colors ───────────────────────────────────────────────────────────────────
const NAVY      = rgb(0.10, 0.12, 0.35)
const GOLD      = rgb(0.72, 0.58, 0.18)
const GOLD_LITE = rgb(0.90, 0.82, 0.55)
const WHITE     = rgb(1, 1, 1)
const DARK      = rgb(0.10, 0.10, 0.10)
const GREY      = rgb(0.45, 0.45, 0.45)

// ─── Helpers ──────────────────────────────────────────────────────────────────
async function makeQR(text: string): Promise<Buffer> {
  return QRCode.toBuffer(text, {
    errorCorrectionLevel: 'H',
    margin: 1,
    color: { dark: '#1A1F59', light: '#FFFFFF' },
    width: 180,
  })
}

function loadLogo(): Buffer | null {
  try {
    const p = path.join(process.cwd(), 'public', 'logos', 'logo.png')
    if (!fs.existsSync(p)) return null
    return fs.readFileSync(p)
  } catch {
    return null
  }
}

function loadMsmeLogo(): Buffer | null {
  try {
    const p = path.join(process.cwd(), 'public', 'logos', 'msme.png')
    if (!fs.existsSync(p)) return null
    return fs.readFileSync(p)
  } catch {
    return null
  }
}

function hRule(
  page: PDFPage,
  y: number,
  x1: number,
  x2: number,
  color: RGB = GOLD,
  thickness = 0.8
) {
  page.drawLine({
    start: { x: x1, y },
    end: { x: x2, y },
    thickness,
    color,
  })
}

function centered(
  page: PDFPage,
  text: string,
  y: number,
  size: number,
  font: any,
  color: RGB = DARK
) {
  const { width } = page.getSize()
  const tw = font.widthOfTextAtSize(text, size)
  page.drawText(text, { x: (width - tw) / 2, y, size, font, color })
}

// ═══════════════════════════════════════════════════════════════════════════════
//  OFFER LETTER
// ═══════════════════════════════════════════════════════════════════════════════
export async function generateOfferLetter(data: {
  name: string
  role: string
  domain: string
  college: string
  date: string
  internId: string
  duration: number
}): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create()
  const page   = pdfDoc.addPage([595, 842])
  const { width, height } = page.getSize()

  const bold    = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const regular = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const docId = `NG-OL-${data.internId.slice(0, 8).toUpperCase()}`

  // ── White background ──
  page.drawRectangle({ x: 0, y: 0, width, height, color: WHITE })

  // ── Top navy strip ──
  page.drawRectangle({ x: 0, y: height - 6, width, height: 6, color: NAVY })

  // ── Logo ──
  const logoBuffer = loadLogo()
  if (logoBuffer) {
    const logoImg = await pdfDoc.embedPng(logoBuffer)
    page.drawImage(logoImg, {
      x: 40, y: height - 82,
      width: 52, height: 52,
    })
  }

  // ── Company name ──
  page.drawText('NEXTGRAAD', {
    x: 104, y: height - 46,
    size: 22, font: bold, color: NAVY,
  })
  page.drawText('HR Department  |  www.nextgraad.in', {
    x: 105, y: height - 62,
    size: 9, font: regular, color: GREY,
  })

  // ── Gold divider ──
  hRule(page, height - 96, 40, width - 40, GOLD, 1.2)

  // ── Doc meta ──
  page.drawText(`Ref: ${docId}`, {
    x: 40, y: height - 116,
    size: 9, font: regular, color: GREY,
  })
  page.drawText(`Date: ${data.date}`, {
    x: width - 180, y: height - 116,
    size: 9, font: regular, color: GREY,
  })

  // ── Title ──
  page.drawText('INTERNSHIP OFFER LETTER', {
    x: 40, y: height - 155,
    size: 17, font: bold, color: NAVY,
  })
  hRule(page, height - 168, 40, width - 40, GOLD, 0.8)

  // ── Greeting ──
  page.drawText(`Dear ${data.name},`, {
    x: 40, y: height - 202,
    size: 12, font: bold, color: DARK,
  })

  // ── Body ──
  const body: string[] = [
    `We are pleased to inform you that you have been selected for an Internship`,
    `at Nextgraad as a ${data.role} Intern in the ${data.domain} domain.`,
    ``,
    `This offer is extended in recognition of your academic achievements at`,
    `${data.college} and the potential you have demonstrated. We are confident`,
    `that this internship will be a valuable and enriching experience for you.`,
    ``,
    `The duration of this internship is ${data.duration} days, commencing from`,
    `the date of acceptance of this offer. During this period, you will be`,
    `assigned a structured project through the Nextgraad Internship framework`,
    `and are expected to complete and submit it within the stipulated timeline.`,
    ``,
    `Nextgraad is committed to providing you with real-world exposure, structured`,
    `mentorship, and meaningful project experience that aligns with current`,
    `industry requirements. Upon successful completion and submission of your`,
    `project, you will be awarded an official Certificate of Completion issued`,
    `by Nextgraad.`,
    ``,
    `Please access your Internship Portal using the magic link sent to your`,
    `registered email address to get started.`,
    ``,
    `We look forward to having you as part of the Nextgraad community and wish`,
    `you a productive and rewarding internship experience.`,
  ]

  let y = height - 238
  for (const line of body) {
    page.drawText(line, {
      x: 40, y,
      size: 10.5, font: regular, color: DARK,
    })
    y -= 18
  }

  // ── Closing ──
  y -= 10
  page.drawText('Yours sincerely,', {
    x: 40, y,
    size: 10.5, font: regular, color: GREY,
  })
  page.drawText('Onkar Mathapati', {
    x: 40, y: y - 28,
    size: 13, font: bold, color: NAVY,
  })
  hRule(page, y - 40, 40, 220, NAVY, 0.6)
  page.drawText('Founder & CEO, Nextgraad', {
    x: 40, y: y - 54,
    size: 9.5, font: regular, color: GREY,
  })
  page.drawText('info@nextgraad.in', {
    x: 40, y: y - 68,
    size: 9, font: regular, color: GREY,
  })

  // ── OFFER LETTER QR ──
const offerVerifyUrl = `${getAppUrl()}/verify?id=${data.internId}&type=offer`
const offerQrImage   = await pdfDoc.embedPng(await makeQR(offerVerifyUrl))

const qrX = width - 104
const qrY = 80

page.drawImage(offerQrImage, {
  x: qrX,
  y: qrY,
  width: 66,
  height: 66,
})

page.drawText('Scan to verify', {
  x: qrX + 4,
  y: qrY - 10,
  size: 7,
  font: regular,
  color: GREY,
})

// ── MSME Logo (below QR) ──
const msmeBuffer = loadMsmeLogo()
if (msmeBuffer) {
  const msmeImg = await pdfDoc.embedPng(msmeBuffer)

  page.drawImage(msmeImg, {
    x: qrX + 8,
    y: qrY - 50,
    width: 50,
    height: 26,
  })
}

  // ── Footer ──
  hRule(page, 58, 40, width - 40, GOLD, 0.8)
  page.drawText(
    `This is an official document issued by Nextgraad  •  Document ID: ${docId}`,
    { x: 40, y: 42, size: 7.5, font: regular, color: GREY }
  )

  // ── Bottom navy strip ──
  page.drawRectangle({ x: 0, y: 0, width, height: 28, color: NAVY })
  page.drawText(
    'www.nextgraad.in  •  info@nextgraad.in',
    { x: 40, y: 10, size: 8, font: regular, color: GOLD_LITE }
  )

  // ── Watermark ──
  page.drawText('NEXTGRAAD', {
    x: 120, y: 300,
    size: 64, font: bold,
    color: rgb(0.93, 0.93, 0.96),
    rotate: degrees(45),
    opacity: 0.10,
  })

  return Buffer.from(await pdfDoc.save())
}

// ═══════════════════════════════════════════════════════════════════════════════
//  CERTIFICATE
// ═══════════════════════════════════════════════════════════════════════════════
export async function generateCertificate(data: {
  name: string
  role: string
  domain: string
  timeline_days: number
  internId: string
  submitted_at?: string
}): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create()
  const page   = pdfDoc.addPage([595, 842])
  const { width, height } = page.getSize()

  const bold    = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const regular = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const oblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique)

  const certNumber = `NG-CERT-${data.internId.slice(0, 8).toUpperCase()}`
  const completedDate = data.submitted_at
    ? new Date(data.submitted_at).toLocaleDateString('en-IN', {
        day: 'numeric', month: 'long', year: 'numeric',
      })
    : new Date().toLocaleDateString('en-IN', {
        day: 'numeric', month: 'long', year: 'numeric',
      })

  // ── White background ──
  page.drawRectangle({ x: 0, y: 0, width, height, color: WHITE })

  // ── Outer navy border (lines only, no fill) ──
  const bx = 22, by = 22, bw = width - 44, bh = height - 44
  page.drawLine({ start: { x: bx,      y: by      }, end: { x: bx + bw, y: by      }, thickness: 3, color: NAVY })
  page.drawLine({ start: { x: bx,      y: by + bh }, end: { x: bx + bw, y: by + bh }, thickness: 3, color: NAVY })
  page.drawLine({ start: { x: bx,      y: by      }, end: { x: bx,      y: by + bh }, thickness: 3, color: NAVY })
  page.drawLine({ start: { x: bx + bw, y: by      }, end: { x: bx + bw, y: by + bh }, thickness: 3, color: NAVY })

  // ── Gold inner border (lines only, no fill) ──
  const ix = 30, iy = 30, iw = width - 60, ih = height - 60
  page.drawLine({ start: { x: ix,      y: iy      }, end: { x: ix + iw, y: iy      }, thickness: 0.8, color: GOLD })
  page.drawLine({ start: { x: ix,      y: iy + ih }, end: { x: ix + iw, y: iy + ih }, thickness: 0.8, color: GOLD })
  page.drawLine({ start: { x: ix,      y: iy      }, end: { x: ix,      y: iy + ih }, thickness: 0.8, color: GOLD })
  page.drawLine({ start: { x: ix + iw, y: iy      }, end: { x: ix + iw, y: iy + ih }, thickness: 0.8, color: GOLD })

  // ── Navy header band ──
  page.drawRectangle({
    x: 22, y: height - 130,
    width: width - 44, height: 108,
    color: NAVY,
  })

  // ── White box behind logo only ──
  const logoBuffer = loadLogo()
  if (logoBuffer) {
    const logoImg = await pdfDoc.embedPng(logoBuffer)
    page.drawRectangle({
      x: width / 2 - 34, y: height - 114,
      width: 64, height: 64,
      color: WHITE,
    })
    page.drawImage(logoImg, {
      x: width / 2 - 30, y: height - 110,
      width: 56, height: 56,
    })
  }

  // ── Gold rule under header ──
  page.drawRectangle({ x: 22, y: height - 132, width: width - 44, height: 2, color: GOLD })

  // ── Org name below header ──
  centered(page, 'N E X T G R A A D', height - 152, 11, bold, NAVY)

  // ── Certificate title ──
  centered(page, 'Certificate of Internship', height - 196, 26, bold, NAVY)
  hRule(page, height - 212, 80, width - 80, GOLD, 0.8)

  // ── Certify text ──
  centered(page, 'This is to certify that', height - 246, 11, oblique, GREY)

  // ── Intern name ──
  const nameSize = data.name.length > 24 ? 26 : 32
  centered(page, data.name, height - 294, nameSize, bold, NAVY)

  const nameW = bold.widthOfTextAtSize(data.name, nameSize)
  hRule(page, height - 308, (width - nameW) / 2, (width + nameW) / 2, GOLD, 1)

  // ── Certificate body ──
  const certBody = [
    `has successfully fulfilled all the requirements of the Internship`,
    `conducted by Nextgraad — an AI-driven talent and education platform — in`,
    `the capacity of ${data.role} Intern within the ${data.domain} domain,`,
    `over a period of ${data.timeline_days} days.`,
    ``,
    `During the tenure of this internship, the intern demonstrated commitment,`,
    `professional conduct, and technical capability by independently developing`,
    `and submitting a project that met the standards set by the Nextgraad`,
    `Internship framework. The intern engaged with structured mentorship, applied`,
    `domain-relevant skills, and contributed meaningfully to practical,`,
    `real-world problem-solving.`,
    ``,
    `Nextgraad affirms that this certificate is issued in recognition of the`,
    `intern's dedication and successful completion of the assigned deliverables.`,
    `This achievement reflects the intern's readiness for professional roles`,
    `and their commitment to continuous learning and growth.`,
  ]

  let y = height - 346
  for (const line of certBody) {
    centered(page, line, y, 10, regular, DARK)
    y -= 17
  }

  // ── Details row ──
  hRule(page, y - 16, 60, width - 60, GOLD, 0.7)
  const detailY = y - 42

  // Left: date
  page.drawText('Date of Completion', {
    x: 65, y: detailY,
    size: 8.5, font: bold, color: GREY,
  })
  page.drawText(completedDate, {
    x: 65, y: detailY - 16,
    size: 10.5, font: bold, color: NAVY,
  })

  // Center dot
  centered(page, '•', detailY - 8, 12, bold, GOLD)

  // Right: cert number
  const cnW = bold.widthOfTextAtSize('Certificate No.', 8.5)
  page.drawText('Certificate No.', {
    x: width - 65 - cnW, y: detailY,
    size: 8.5, font: bold, color: GREY,
  })
  const certNumW = bold.widthOfTextAtSize(certNumber, 10.5)
  page.drawText(certNumber, {
    x: width - 65 - certNumW, y: detailY - 16,
    size: 10.5, font: bold, color: NAVY,
  })

  hRule(page, detailY - 32, 60, width - 60, GOLD, 0.7)

  // ── Founder block ──
  const authorY = detailY - 72

  page.drawText('Authorized By', {
    x: 65, y: authorY + 12,
    size: 8.5, font: regular, color: GREY,
  })
  page.drawText('Onkar Mathapati', {
    x: 65, y: authorY - 10,
    size: 13, font: bold, color: NAVY,
  })
  hRule(page, authorY - 22, 65, 240, NAVY, 0.6)
  page.drawText('Founder & CEO, Nextgraad', {
    x: 65, y: authorY - 36,
    size: 8.5, font: regular, color: GREY,
  })

  // ── CERTIFICATE QR ──
const certVerifyUrl = `${getAppUrl()}/verify?id=${data.internId}&type=certificate`
const certQrImage   = await pdfDoc.embedPng(await makeQR(certVerifyUrl))

const qrSize = 78
const qrX    = width - qrSize - 65
const qrY    = authorY - 44

page.drawImage(certQrImage, {
  x: qrX,
  y: qrY,
  width: qrSize,
  height: qrSize,
})

page.drawText('Scan to verify', {
  x: qrX + 10,
  y: qrY - 13,
  size: 7.5,
  font: regular,
  color: GREY,
})

// ── MSME Logo (below QR) ──
const msmeBuffer = loadMsmeLogo()
if (msmeBuffer) {
  const msmeImg = await pdfDoc.embedPng(msmeBuffer)

  page.drawImage(msmeImg, {
    x: qrX + 12,
    y: qrY - 58,
    width: 52,
    height: 28,
  })
}

  // ── Footer ──
  hRule(page, 52, 30, width - 30, GOLD, 0.7)
  centered(
    page,
    'Issued via Nextgraad Internship Portal  •  www.nextgraad.in  •  info@nextgraad.in',
    38, 7.5, regular, GREY
  )

  return Buffer.from(await pdfDoc.save())
}