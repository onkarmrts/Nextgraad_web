import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.GMAIL_USER,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
  },
})

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
  await transporter.sendMail({
    from: `"Internship Portal" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
    attachments,
  })
}