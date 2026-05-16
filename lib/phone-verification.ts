import crypto from "crypto"

const codeTtlMs = 10 * 60 * 1000
const verifiedTtlMs = 24 * 60 * 60 * 1000

type PendingPhoneVerification = {
  codeHash: string
  expiresAt: number
  phone: string
  type: "pending-phone-verification"
}

type VerifiedPhone = {
  expiresAt: number
  phone: string
  type: "verified-phone"
}

function getSecret() {
  return (
    process.env.PHONE_VERIFICATION_SECRET?.trim() ||
    process.env.EMAIL_SMTP_PASS?.trim() ||
    "development-phone-verification-secret"
  )
}

function base64UrlEncode(value: string) {
  return Buffer.from(value, "utf8").toString("base64url")
}

function base64UrlDecode(value: string) {
  return Buffer.from(value, "base64url").toString("utf8")
}

function sign(value: string) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("base64url")
}

function createSignedToken(payload: object) {
  const body = base64UrlEncode(JSON.stringify(payload))
  return `${body}.${sign(body)}`
}

function readSignedToken<T>(token: string): T | null {
  const [body, signature] = token.split(".")

  if (!body || !signature || sign(body) !== signature) {
    return null
  }

  try {
    return JSON.parse(base64UrlDecode(body)) as T
  } catch {
    return null
  }
}

function hashCode(phone: string, code: string) {
  return crypto.createHmac("sha256", getSecret()).update(`${phone}:${code}`).digest("hex")
}

export function normalizePhone(phone: string) {
  return phone.replace(/[\s().-]/g, "").trim()
}

export function createVerificationCode() {
  return crypto.randomInt(100000, 1000000).toString()
}

export function createPendingPhoneVerification(phone: string, code: string) {
  return createSignedToken({
    codeHash: hashCode(phone, code),
    expiresAt: Date.now() + codeTtlMs,
    phone,
    type: "pending-phone-verification",
  } satisfies PendingPhoneVerification)
}

export function verifyPhoneCode(token: string, phone: string, code: string) {
  const pending = readSignedToken<PendingPhoneVerification>(token)

  if (
    !pending ||
    pending.type !== "pending-phone-verification" ||
    pending.phone !== phone ||
    pending.expiresAt < Date.now()
  ) {
    return null
  }

  const expected = Buffer.from(pending.codeHash)
  const actual = Buffer.from(hashCode(phone, code))

  if (expected.length !== actual.length || !crypto.timingSafeEqual(expected, actual)) {
    return null
  }

  return createSignedToken({
    expiresAt: Date.now() + verifiedTtlMs,
    phone,
    type: "verified-phone",
  } satisfies VerifiedPhone)
}

export function isPhoneVerified(token: string | undefined, phone: string | undefined) {
  if (!token || !phone) return false

  const verified = readSignedToken<VerifiedPhone>(token)

  return (
    !!verified &&
    verified.type === "verified-phone" &&
    verified.phone === normalizePhone(phone) &&
    verified.expiresAt >= Date.now()
  )
}
