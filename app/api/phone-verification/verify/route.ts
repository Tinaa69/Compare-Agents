import { NextResponse } from "next/server"
import { normalizePhone, verifyPhoneCode } from "@/lib/phone-verification"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      code?: string
      phone?: string
      requestToken?: string
    }
    const phone = normalizePhone(body.phone ?? "")
    const code = body.code?.trim() ?? ""
    const requestToken = body.requestToken ?? ""
    const phoneVerificationToken = verifyPhoneCode(requestToken, phone, code)

    if (!phoneVerificationToken) {
      return NextResponse.json({ error: "Invalid verification code." }, { status: 400 })
    }

    return NextResponse.json({ phoneVerificationToken })
  } catch (error) {
    console.error("Phone verification check error:", error)
    return NextResponse.json({ error: "Unable to verify phone number." }, { status: 500 })
  }
}
