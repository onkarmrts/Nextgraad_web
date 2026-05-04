import nodemailer from 'nodemailer'
import { google } from 'googleapis'

const OAuth2 = google.auth.OAuth2

async function createTransporter() {
  const oauth2Client = new OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  })

  // ✅ Fetches a fresh access token every time
  const accessToken = await oauth2Client.getAccessToken()

  if (!accessToken.token) {
    throw new Error('Failed to generate Gmail access token. Check your OAuth2 credentials.')
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_USER,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken: accessToken.token,
    },
  })
}

interface SendEmailOptions {
  to: string
  subject: string
  html: string
  attachments?: {
    filename: string
    content: Buffer
    contentType: string
  }[]
}

export async function sendEmail({ to, subject, html, attachments }: SendEmailOptions) {
  const transporter = await createTransporter() // ✅ fresh token each call
  await transporter.sendMail({
    from: `"Internship Portal" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
    attachments,
  })
}