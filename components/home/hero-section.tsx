"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Shield, TrendingUp, Clock, ChevronRight, Users, CheckCircle2, LineChart, BadgeEuro, ArrowRight } from "lucide-react"

const propertyTypes = [
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "bungalow", label: "Bungalow" },
  { value: "townhouse", label: "Townhouse" },
  { value: "commercial", label: "Commercial Property" },
  { value: "land", label: "Land / Site" },
]

const serviceTypes = [
  { value: "sell", label: "Selling Property" },
  { value: "rent", label: "Letting Property" },
  { value: "manage", label: "Property Management" },
]

const locations = [
  { value: "dublin-1", label: "Dublin 1" },
  { value: "dublin-2", label: "Dublin 2" },
  { value: "dublin-3", label: "Dublin 3" },
  { value: "dublin-4", label: "Dublin 4" },
  { value: "dublin-6", label: "Dublin 6" },
  { value: "dublin-7", label: "Dublin 7" },
  { value: "dublin-8", label: "Dublin 8" },
  { value: "dublin-9", label: "Dublin 9" },
  { value: "dublin-12", label: "Dublin 12" },
  { value: "dublin-14", label: "Dublin 14" },
  { value: "dublin-15", label: "Dublin 15" },
  { value: "dublin-16", label: "Dublin 16" },
  { value: "dublin-18", label: "Dublin 18" },
  { value: "dublin-24", label: "Dublin 24" },
  { value: "dun-laoghaire", label: "Dun Laoghaire" },
  { value: "blackrock", label: "Blackrock" },
  { value: "dalkey", label: "Dalkey" },
  { value: "howth", label: "Howth" },
  { value: "malahide", label: "Malahide" },
  { value: "swords", label: "Swords" },
  { value: "lucan", label: "Lucan" },
  { value: "tallaght", label: "Tallaght" },
  { value: "co-wicklow", label: "Co. Wicklow" },
  { value: "co-kildare", label: "Co. Kildare" },
  { value: "co-meath", label: "Co. Meath" },
]

export function HeroSection() {
  const [formData, setFormData] = useState({
    propertyType: "",
    serviceType: "",
    location: "",
  })

  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(214,176,84,0.22),_transparent_28%),linear-gradient(135deg,_rgba(13,24,43,0.95),_rgba(30,46,69,0.92))]" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='8' cy='8' r='1.5'/%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3Ccircle cx='72' cy='72' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="absolute left-[-8rem] top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute right-[-5rem] top-1/3 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground shadow-sm">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>Free for Dublin property owners</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Compare Dublin estate agents and choose with confidence
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed sm:text-xl text-pretty">
              Receive up to 4 offers from verified estate or letting agents, review fees and local performance side by side, and move forward with the team that best fits your property.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-accent text-accent-foreground shadow-lg hover:bg-accent/90">
                <Link href="/contact">
                  Compare Agents Now
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/process">
                  See How It Works
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-primary-foreground/80">
              {[
                "Up to 4 matched agent offers",
                "PSRA-verified professionals",
                "No obligation to proceed",
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 px-3 py-2"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/6 p-4 shadow-sm">
                <TrendingUp className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <span className="block text-lg font-bold text-primary-foreground">18%</span>
                  <span className="text-xs uppercase tracking-wide text-primary-foreground/70">Average fee savings</span>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/6 p-4 shadow-sm">
                <Users className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <span className="block text-lg font-bold text-primary-foreground">200+</span>
                  <span className="text-xs uppercase tracking-wide text-primary-foreground/70">Verified agents</span>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/6 p-4 shadow-sm">
                <Clock className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <span className="block text-lg font-bold text-primary-foreground">48hrs</span>
                  <span className="text-xs uppercase tracking-wide text-primary-foreground/70">Typical response window</span>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/6 p-4 shadow-sm">
                <Shield className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <span className="block text-lg font-bold text-primary-foreground">100%</span>
                  <span className="text-xs uppercase tracking-wide text-primary-foreground/70">PSRA verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Lead Capture Form */}
          <div className="space-y-5">
            <div className="rounded-[1.75rem] border border-primary-foreground/12 bg-card p-6 shadow-2xl shadow-black/20 sm:p-8">
              <div className="mb-6 text-center">
                <h2 className="font-serif text-2xl font-bold text-card-foreground">
                  Start Your Comparison
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us the basics and we&apos;ll match you with up to 4 relevant agents.
                </p>
              </div>

              <form className="space-y-4" action="/contact">
                <div className="space-y-2">
                  <Label htmlFor="serviceType" className="text-card-foreground">What do you need?</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}
                  >
                    <SelectTrigger id="serviceType" className="h-11 bg-background">
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

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="propertyType" className="text-card-foreground">Property Type</Label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, propertyType: value }))}
                    >
                      <SelectTrigger id="propertyType" className="h-11 bg-background">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-card-foreground">Location</Label>
                    <Select
                      value={formData.location}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, location: value }))}
                    >
                      <SelectTrigger id="location" className="h-11 bg-background">
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((loc) => (
                          <SelectItem key={loc.value} value={loc.value}>
                            {loc.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-2xl bg-secondary p-4">
                  <p className="text-sm font-semibold text-card-foreground">What you&apos;ll receive</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <BadgeEuro className="mt-0.5 h-4 w-4 text-accent" />
                      <span>Transparent fee comparisons</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <LineChart className="mt-0.5 h-4 w-4 text-accent" />
                      <span>Local performance context</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Shield className="mt-0.5 h-4 w-4 text-accent" />
                      <span>Verified and compliant agents</span>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="mt-2 w-full">
                  Compare Agents Now
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </form>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                By submitting, you agree to our{" "}
                <Link href="/terms" className="underline hover:text-foreground">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </Link>
              </p>

              <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-muted/60 p-3">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-xs text-muted-foreground">
                  Your details are only shared with matched agents
                </span>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-primary-foreground/12 bg-primary-foreground/8 p-5 text-primary-foreground backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                    Comparison Snapshot
                  </p>
                  <h3 className="mt-1 font-serif text-2xl">See offers side by side</h3>
                </div>
                <div className="rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-3 py-1 text-xs text-primary-foreground/80">
                  Example view
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  { agent: "Southside Property Co.", fee: "1.35%", speed: "22 days avg.", highlight: "Strong in Dublin 6 and Dublin 14" },
                  { agent: "Docklands Lettings", fee: "7.5% let fee", speed: "14 days avg.", highlight: "High tenant retention in Dublin 2 and 4" },
                  { agent: "North City Estates", fee: "1.5%", speed: "19 days avg.", highlight: "Above-average closing rates in Dublin 3 and 9" },
                ].map((item) => (
                  <div
                    key={item.agent}
                    className="grid gap-3 rounded-2xl border border-primary-foreground/12 bg-primary-foreground/8 p-4 sm:grid-cols-[1.7fr_repeat(2,minmax(0,0.8fr))]"
                  >
                    <div>
                      <p className="font-semibold text-primary-foreground">{item.agent}</p>
                      <p className="mt-1 text-sm text-primary-foreground/70">{item.highlight}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-primary-foreground/60">Typical fee</p>
                      <p className="mt-1 text-sm font-semibold text-primary-foreground">{item.fee}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-primary-foreground/60">Speed to offer</p>
                      <p className="mt-1 text-sm font-semibold text-primary-foreground">{item.speed}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-primary-foreground/12 bg-primary-foreground/6 px-4 py-3 text-sm text-primary-foreground/75">
                <span>No decorative stock photo needed here. The comparison preview does the trust-building work.</span>
                <span className="hidden rounded-full bg-accent/15 px-3 py-1 text-xs text-accent sm:inline-flex">
                  Clarity over clutter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
