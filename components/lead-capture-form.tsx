"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, CheckCircle } from "lucide-react"

const propertyTypes = [
  "Apartment",
  "Terraced House",
  "Semi-Detached House",
  "Detached House",
  "Townhouse",
  "Bungalow",
  "Commercial Property",
  "Mixed Use",
]

const irelandAreas = [
  "Dublin",
  "Cork",
  "Galway",
  "Limerick",
  "Waterford",
  "Kilkenny",
  "Wexford",
  "Wicklow",
  "Kildare",
  "Meath",
  "Clare",
  "Sligo",
  "Mayo",
  "Donegal",
  "Nationwide",
]

const serviceTypes = [
  { value: "sale", label: "Property Sale" },
  { value: "letting", label: "Property Letting" },
  { value: "management", label: "Property Management" },
  { value: "sale-letting", label: "Sale & Letting" },
]

const timelines = [
  { value: "immediately", label: "As soon as possible" },
  { value: "1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "Within 1-3 months" },
  { value: "3-6-months", label: "Within 3-6 months" },
  { value: "6-months-plus", label: "6+ months (planning ahead)" },
]

const valueRanges = [
  "Under €200,000",
  "€200,000 - €350,000",
  "€350,000 - €500,000",
  "€500,000 - €750,000",
  "€750,000 - €1,000,000",
  "€1,000,000 - €1,500,000",
  "€1,500,000 - €2,000,000",
  "Over €2,000,000",
]

const rentalRanges = [
  "Under €1,500/month",
  "€1,500 - €2,000/month",
  "€2,000 - €2,500/month",
  "€2,500 - €3,000/month",
  "€3,000 - €4,000/month",
  "€4,000 - €5,000/month",
  "Over €5,000/month",
]

export function LeadCaptureForm() {
  const router = useRouter()
  const [submitted, setSubmitted] = useState(false)
  const [serviceType, setServiceType] = useState("")
  const [consent, setConsent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    router.push("/thank-you")
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle className="h-8 w-8 text-accent" />
        </div>
        <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
          Submission Received
        </h3>
        <p className="mt-3 text-muted-foreground">
          Thank you for your enquiry. Our team will review your property details and 
          matched agents will be in touch within 48 hours with competitive offers.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Reference number: CA-{Date.now().toString(36).toUpperCase()}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Service Type */}
      <div>
        <h3 className="font-semibold text-foreground">Service Required</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          What type of service are you looking for?
        </p>
        <div className="mt-4">
          <Select value={serviceType} onValueChange={setServiceType} required>
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Property Details */}
      <div>
        <h3 className="font-semibold text-foreground">Property Details</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Tell us about your property
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="propertyType">Property Type *</Label>
            <Select required>
              <SelectTrigger id="propertyType">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location / Area *</Label>
            <Select required>
              <SelectTrigger id="location">
                <SelectValue placeholder="Select Ireland area" />
              </SelectTrigger>
              <SelectContent>
                {irelandAreas.map((area) => (
                  <SelectItem key={area} value={area.toLowerCase().replace(/\s+/g, '-')}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bedrooms">Number of Bedrooms *</Label>
            <Select required>
              <SelectTrigger id="bedrooms">
                <SelectValue placeholder="Select bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="studio">Studio</SelectItem>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4">4 Bedrooms</SelectItem>
                <SelectItem value="5">5+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bathrooms">Number of Bathrooms *</Label>
            <Select required>
              <SelectTrigger id="bathrooms">
                <SelectValue placeholder="Select bathrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Bathroom</SelectItem>
                <SelectItem value="2">2 Bathrooms</SelectItem>
                <SelectItem value="3">3 Bathrooms</SelectItem>
                <SelectItem value="4">4+ Bathrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="valuation">
              {serviceType === "letting" || serviceType === "management" 
                ? "Expected Monthly Rent *" 
                : "Estimated Property Value *"}
            </Label>
            <Select required>
              <SelectTrigger id="valuation">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                {(serviceType === "letting" || serviceType === "management" 
                  ? rentalRanges 
                  : valueRanges
                ).map((range) => (
                  <SelectItem key={range} value={range.toLowerCase().replace(/[€,\s/]+/g, '-')}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="timeline">Timeline *</Label>
            <Select required>
              <SelectTrigger id="timeline">
                <SelectValue placeholder="When do you need an agent?" />
              </SelectTrigger>
              <SelectContent>
                {timelines.map((timeline) => (
                  <SelectItem key={timeline.value} value={timeline.value}>
                    {timeline.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <Label htmlFor="address">Property Address (Optional)</Label>
          <Input 
            id="address" 
            placeholder="Full address helps agents provide more accurate offers"
          />
          <p className="text-xs text-muted-foreground">
            Address is kept confidential and only shared with your selected agents.
          </p>
        </div>
      </div>

      {/* Contact Details */}
      <div>
        <h3 className="font-semibold text-foreground">Contact Details</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          How should agents reach you?
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input id="firstName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input id="lastName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" type="tel" placeholder="+353" required />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-2">
        <Label htmlFor="notes">Additional Information (Optional)</Label>
        <Textarea 
          id="notes" 
          placeholder="Any specific requirements or questions for agents?"
          rows={4}
        />
      </div>

      {/* Consent */}
      <div className="rounded-lg border border-border bg-muted/50 p-4">
        <div className="flex items-start gap-3">
          <Checkbox 
            id="consent" 
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked === true)}
            required
          />
          <div className="space-y-1">
            <Label htmlFor="consent" className="text-sm font-normal leading-relaxed cursor-pointer">
              I consent to CompareAgents.ie processing my personal data to match me with suitable agents and facilitate contact. I understand my data will be shared with matched agents only. *
            </Label>
            <p className="text-xs text-muted-foreground">
              View our{" "}
              <a href="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-accent hover:underline">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-3">
        <Shield className="h-5 w-5 text-accent" />
        <span className="text-sm text-foreground">
          All agents on our platform are verified as PSRA-licensed
        </span>
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full" disabled={!consent}>
        Submit Property Details
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to our terms. No fees, no obligations.
      </p>
    </form>
  )
}
