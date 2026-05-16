"use client"

import { useState } from "react"

type PhoneVerificationFieldsProps = {
  inputClassName?: string
  labelClassName?: string
  phone: string
  setPhone: (phone: string) => void
}

export function PhoneVerificationFields({
  inputClassName = "h-12 w-full rounded-xl border border-input bg-background px-3 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20",
  labelClassName = "text-sm font-medium text-foreground",
  phone,
  setPhone,
}: PhoneVerificationFieldsProps) {
  const [code, setCode] = useState("")
  const [requestToken, setRequestToken] = useState("")
  const [verifiedToken, setVerifiedToken] = useState("")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)

  const handlePhoneChange = (value: string) => {
    setPhone(value)
    setCode("")
    setRequestToken("")
    setVerifiedToken("")
    setMessage("")
  }

  const sendCode = async () => {
    setIsSending(true)
    setMessage("")

    const response = await fetch("/api/phone-verification/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    })
    const result = await response.json()

    setIsSending(false)

    if (!response.ok) {
      setMessage(result.error ?? "Unable to send code.")
      return
    }

    setRequestToken(result.requestToken)
    setMessage(result.code ? `${result.message} Test code: ${result.code}` : result.message)
  }

  const verifyCode = async () => {
    setIsVerifying(true)
    setMessage("")

    const response = await fetch("/api/phone-verification/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, phone, requestToken }),
    })
    const result = await response.json()

    setIsVerifying(false)

    if (!response.ok) {
      setMessage(result.error ?? "Invalid code.")
      return
    }

    setVerifiedToken(result.phoneVerificationToken)
    setMessage("Phone verified.")
  }

  return (
    <div className="space-y-2">
      <label htmlFor="phone" className={labelClassName}>
        Phone number <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={phone}
          onChange={(event) => handlePhoneChange(event.target.value)}
          placeholder="+353"
          className={inputClassName}
        />
        <button
          type="button"
          onClick={sendCode}
          disabled={!phone || isSending || !!verifiedToken}
          className="h-12 shrink-0 rounded-xl border border-border bg-background px-4 text-sm font-semibold text-foreground transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSending ? "Sending" : verifiedToken ? "Sent" : "Send code"}
        </button>
      </div>

      {requestToken && !verifiedToken && (
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            type="text"
            inputMode="numeric"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="6-digit code"
            className={inputClassName}
          />
          <button
            type="button"
            onClick={verifyCode}
            disabled={code.length < 6 || isVerifying}
            className="h-12 shrink-0 rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isVerifying ? "Checking" : "Verify"}
          </button>
        </div>
      )}

      <input type="hidden" name="phoneVerificationToken" value={verifiedToken} />
      {message && (
        <p className={`text-xs ${verifiedToken ? "text-green-700" : "text-muted-foreground"}`}>
          {message}
        </p>
      )}
    </div>
  )
}
