import { NextResponse } from "next/server"
import {
  createPendingPhoneVerification,
  createVerificationCode,
  normalizePhone,
} from "@/lib/phone-verification"

function getEnvValue(name: string) {
  const value = process.env[name]?.trim()
  return value || undefined
}

async function sendSms(to: string, message: string) {
  const accountSid = getEnvValue("TWILIO_ACCOUNT_SID")
  const authToken = getEnvValue("TWILIO_AUTH_TOKEN")
  const from = getEnvValue("TWILIO_FROM_NUMBER")
  const messagingServiceSid = getEnvValue("TWILIO_MESSAGING_SERVICE_SID")

  if (!accountSid || !authToken || (!from && !messagingServiceSid)) {
    if (process.env.NODE_ENV === "development") return false
    throw new Error("SMS settings are not configured.")
  }

  const body = new URLSearchParams({
    Body: message,
    To: to,
  })

  if (messagingServiceSid) {
    body.set("MessagingServiceSid", messagingServiceSid)
  } else if (from) {
    body.set("From", from)
  }

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    },
  )

  if (!response.ok) {
    throw new Error("Unable to send verification code.")
  }

  return true
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { phone?: string }
    const phone = normalizePhone(body.phone ?? "")

    if (!phone || phone.length < 8) {
      return NextResponse.json({ error: "Enter a valid phone number." }, { status: 400 })
    }

    const code = createVerificationCode()
    const requestToken = createPendingPhoneVerification(phone, code)
    const smsSent = await sendSms(phone, `Your CompareAgents.ie verification code is ${code}.`)

    return NextResponse.json({
      requestToken,
      ...(process.env.NODE_ENV === "development" && !smsSent ? { code } : {}),
    })
  } catch (error) {
    console.error("Phone verification send error:", error)
    return NextResponse.json({ error: "Unable to send verification code." }, { status: 500 })
  }
}
