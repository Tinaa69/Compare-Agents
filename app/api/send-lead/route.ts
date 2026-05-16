import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import { isPhoneVerified } from "@/lib/phone-verification"

const recipientEmail = process.env.EMAIL_TO ?? "compareagentsirl@gmail.com"
const senderEmail = process.env.EMAIL_FROM ?? process.env.EMAIL_SMTP_USER
const customerLeadFormTypes = new Set(["contact", "hero"])
const privatePayloadKeys = new Set(["phoneVerificationToken"])

function getEnvValue(name: string) {
  const value = process.env[name]?.trim()
  return value || undefined
}

function getEmailList(name: string) {
  return (getEnvValue(name) ?? "")
    .split(/[\n,;]+/)
    .map((email) => email.trim())
    .filter(Boolean)
}

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
  const sortedKeys = Object.keys(payload)
    .filter((key) => !privatePayloadKeys.has(key))
    .sort()
  const lines = sortedKeys.map((key) => {
    const label = key
      .replace(/([A-Z])/g, " $1")
      .replace(/(^|\b)([a-z])/g, (match) => match.toUpperCase())
    return `${label}: ${payload[key]}`
  })

  return lines.join("\n")
}

function isCustomerLead(payload: Record<string, string>) {
  return customerLeadFormTypes.has(payload.formType)
}

function createTransporter() {
  const host = getEnvValue("EMAIL_SMTP_HOST")
  const port = getEnvValue("EMAIL_SMTP_PORT")
  const user = getEnvValue("EMAIL_SMTP_USER")
  const pass = getEnvValue("EMAIL_SMTP_PASS")?.replace(/\s/g, "")

  if (!host || !port || !user || !pass) {
    throw new Error(
      "Email SMTP settings are not configured. Set EMAIL_SMTP_HOST, EMAIL_SMTP_PORT, EMAIL_SMTP_USER and EMAIL_SMTP_PASS.",
    )
  }

  const numericPort = Number(port)

  if (!Number.isInteger(numericPort)) {
    throw new Error("EMAIL_SMTP_PORT must be a valid number.")
  }

  return nodemailer.createTransport({
    host,
    port: numericPort,
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

    if (isCustomerLead(payload) && !isPhoneVerified(payload.phoneVerificationToken, payload.phone)) {
      return NextResponse.json(
        { error: "Please verify your phone number before submitting." },
        { status: 400 },
      )
    }

    const transporter = createTransporter()
    const text = buildMessage(payload)
    const subject = `New website lead submission${payload.formType ? `: ${payload.formType}` : ""}`
    const replyTo = payload.email
    const agentEmails = isCustomerLead(payload) ? getEmailList("EMAIL_AGENT_TO") : []

    await transporter.sendMail({
      from: senderEmail,
      to: recipientEmail,
      subject,
      replyTo,
      text,
      html: text.replace(/\n/g, "<br />"),
    })

    await Promise.all(
      agentEmails.map((agentEmail) =>
        transporter.sendMail({
          from: senderEmail,
          to: agentEmail,
          subject: `New property lead from CompareAgents.ie${payload.location ? `: ${payload.location}` : ""}`,
          replyTo,
          text,
          html: text.replace(/\n/g, "<br />"),
        }),
      ),
    )

    return NextResponse.redirect(new URL("/thank-you", req.url))
  } catch (error) {
    console.error("Send lead error:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"

    return NextResponse.json(
      {
        error: "Unable to send lead email. Please check email configuration.",
        ...(process.env.NODE_ENV === "development" ? { details: errorMessage } : {}),
      },
      { status: 500 },
    )
  }
}
