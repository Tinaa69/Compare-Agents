import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

const recipientEmail = process.env.EMAIL_TO ?? "compareagentsirl@gmail.com"
const senderEmail = process.env.EMAIL_FROM ?? process.env.EMAIL_SMTP_USER

function normalizeBody(body: unknown): Record<string, string> {
  if (!body || typeof body !== "object") return {}

  const normalized: Record<string, string> = {}

  if (body instanceof FormData) {
    body.forEach((value, key) => {
      normalized[key] = String(value)
    })
    return normalized
  }

  for (const [key, value] of Object.entries(body as Record<string, unknown>)) {
    normalized[key] = value === undefined || value === null ? "" : String(value)
  }

  return normalized
}

function buildMessage(payload: Record<string, string>) {
  const sortedKeys = Object.keys(payload).sort()
  const lines = sortedKeys.map((key) => {
    const label = key
      .replace(/([A-Z])/g, " $1")
      .replace(/(^|\b)([a-z])/g, (match) => match.toUpperCase())
    return `${label}: ${payload[key]}`
  })

  return lines.join("\n")
}

function createTransporter() {
  const host = process.env.EMAIL_SMTP_HOST
  const port = process.env.EMAIL_SMTP_PORT
  const user = process.env.EMAIL_SMTP_USER
  const pass = process.env.EMAIL_SMTP_PASS

  if (!host || !port || !user || !pass) {
    throw new Error(
      "Email SMTP settings are not configured. Set EMAIL_SMTP_HOST, EMAIL_SMTP_PORT, EMAIL_SMTP_USER and EMAIL_SMTP_PASS.",
    )
  }

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: process.env.EMAIL_SMTP_SECURE === "true",
    auth: {
      user,
      pass,
    },
  })
}

export async function POST(req: Request) {
  try {
    let payload: Record<string, string> = {}
    const contentType = req.headers.get("content-type") || ""

    if (contentType.includes("application/json")) {
      payload = normalizeBody(await req.json())
    } else {
      const formData = await req.formData()
      payload = normalizeBody(formData)
    }

    const transporter = createTransporter()
    const text = buildMessage(payload)
    const subject = `New website lead submission${payload.formType ? `: ${payload.formType}` : ""}`

    await transporter.sendMail({
      from: senderEmail,
      to: recipientEmail,
      subject,
      text,
      html: text.replace(/\n/g, "<br />"),
    })

    return NextResponse.redirect(new URL("/thank-you", req.url))
  } catch (error) {
    console.error("Send lead error:", error)
    return NextResponse.json(
      { error: "Unable to send lead email. Please check email configuration." },
      { status: 500 },
    )
  }
}
