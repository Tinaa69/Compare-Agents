"use client"

import Image from "next/image"
import { ChevronRight, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const propertyTypes = [
  "Apartment",
  "Duplex",
  "Terraced house",
  "Semi detached house",
  "Detached house",
  "Bungalow",
]

const bedrooms = ["1", "2", "3", "4", "5", "6", "7", "8"]
const bathrooms = ["1", "2", "3", "4", "5"]
const conditions = ["Fair", "Good", "Very good", "Excellent"]
const timelines = ["0-3 months", "3-6 months", "Over 6 months", "Not sure"]

// Sample address suggestions - expanded for better coverage
const addressSuggestions = [
  "1 Grafton Street, Dublin 2",
  "2 O'Connell Street, Dublin 1",
  "3 South Great George Street, Dublin 2",
  "4 Baggot Street, Dublin 4",
  "5 Leeson Street, Dublin 6",
  "6 Merrion Square, Dublin 2",
  "7 Stephen's Green, Dublin 2",
  "8 Dawson Street, Dublin 2",
  "9 Temple Bar, Dublin 2",
  "10 Exchequer Street, Dublin 2",
  "11 Wexford Street, Dublin 2",
  "12 Fade Street, Dublin 2",
  "13 Crown Alley, Dublin 2",
  "14 Meeting House Lane, Dublin 2",
  "15 Cow Lane, Dublin 8",
  "16 Smithfield, Dublin 7",
  "17 Stoneybatter, Dublin 7",
  "18 Marlborough Street, Dublin 1",
  "19 Abbey Street, Dublin 1",
  "20 Capel Street, Dublin 1",
  "21 Mary Street, Dublin 1",
  "22 Jervis Street, Dublin 1",
  "23 Bachelor's Walk, Dublin 1",
  "24 Ormond Quay, Dublin 1",
  "25 Aston Quay, Dublin 2",
  "26 Merchant's Quay, Dublin 8",
  "27 Wood Quay, Dublin 8",
  "28 Arran Quay, Dublin 7",
  "29 Usher's Quay, Dublin 8",
  "30 Winetavern Street, Dublin 8",
]

// Sample eircode suggestions - expanded with various Dublin postcodes
const eirecodeSuggestions = [
  "D01 X2F5",
  "D01 P7F7",
  "D02 AF30",
  "D02 E7AH",
  "D04 X241",
  "D04 E5X8",
  "D06 K8XY",
  "D06 H5CM",
  "D08 CV89",
  "D08 Y6N5",
  "D14 P906",
  "D14 X6P6",
  "D18 AE89",
  "D18 E6WX",
  "D20 A0F0",
  "D20 PH33",
  "D22 WA88",
  "D22 R8CN",
  "D24 H8PN",
  "D24 VE98",
  "D09 K0V6",
  "D09 W0F0",
  "D12 W8PX",
  "D12 R2C2",
  "D16 HF77",
  "D16 K2C6",
  "D18 F0C8",
  "D18 PH66",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Modern luxury home for sale"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Headline */}
            <div className="text-white py-8 lg:py-0">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs sm:text-sm backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>Free for property owners</span>
              </div>

              <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-balance leading-tight">
                Compare Local estate agents and choose with confidence
              </h1>
              <p className="mt-4 text-lg text-white/90 sm:text-xl leading-relaxed">
                Receive up to 4 offers from verified agents, compare fees and performance side by side, and choose the right fit for your property.
              </p>
            </div>

            {/* Right Column - Form Card */}
            <div className="lg:ml-auto lg:max-w-lg xl:max-w-xl w-full">
              <div className="rounded-2xl border border-white/20 bg-white/95 backdrop-blur-sm p-6 sm:p-8 shadow-2xl">
                <Tabs defaultValue="sale" className="w-full">
                  <TabsList className="grid h-auto w-full grid-cols-2 rounded-2xl bg-secondary p-1 mb-6">
                    <TabsTrigger value="sale" className="h-12 rounded-xl text-sm font-semibold">
                      Property sale
                    </TabsTrigger>
                    <TabsTrigger value="let" className="h-12 rounded-xl text-sm font-semibold">
                      Property let
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="sale" className="mt-0">
                    <PropertyForm service="sale" />
                  </TabsContent>

                  <TabsContent value="let" className="mt-0">
                    <PropertyForm service="let" />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PropertyForm({ service }: { service: "sale" | "let" }) {
  const [addressInput, setAddressInput] = useState("")
  const [eircodeInput, setEircodeInput] = useState("")
  const [showAddressSuggestions, setShowAddressSuggestions] = useState(false)
  const [showEircodeSuggestions, setShowEircodeSuggestions] = useState(false)

  const filteredAddresses = addressInput
    ? addressSuggestions.filter((addr) =>
        addr.toLowerCase().includes(addressInput.toLowerCase())
      )
    : addressSuggestions.slice(0, 8)

  const filteredEircodes = eircodeInput
    ? eirecodeSuggestions.filter((code) =>
        code.toLowerCase().includes(eircodeInput.toLowerCase())
      )
    : eirecodeSuggestions.slice(0, 8)

  const handleAddressSelect = (address: string) => {
    setAddressInput(address)
    setShowAddressSuggestions(false)
  }

  const handleEircodeSelect = (code: string) => {
    setEircodeInput(code)
    setShowEircodeSuggestions(false)
  }

  return (
    <form id="hero-form" className="space-y-4" action="/thank-you" method="get">
      <input type="hidden" name="service" value={service} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2 relative">
          <label htmlFor="address" className="text-sm font-medium text-foreground">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            value={addressInput}
            onChange={(e) => {
              setAddressInput(e.target.value)
              setShowAddressSuggestions(true)
            }}
            onFocus={() => setShowAddressSuggestions(true)}
            onBlur={() => setTimeout(() => setShowAddressSuggestions(false), 200)}
            placeholder="Enter address"
            autoComplete="off"
            className="h-12 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
          {showAddressSuggestions && filteredAddresses.length > 0 && (
            <div className="absolute top-full left-0 right-0 z-50 mt-2 max-h-64 overflow-y-auto rounded-lg border border-border bg-white shadow-xl">
              {filteredAddresses.map((address, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAddressSelect(address)}
                  className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-blue-50 transition text-gray-900 first:rounded-t-lg last:rounded-b-lg"
                >
                  {address}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2 relative">
          <label htmlFor="eircode" className="text-sm font-medium text-foreground">
            Eircode <span className="text-red-500">*</span>
          </label>
          <input
            id="eircode"
            name="eircode"
            type="text"
            required
            value={eircodeInput}
            onChange={(e) => {
              setEircodeInput(e.target.value)
              setShowEircodeSuggestions(true)
            }}
            onFocus={() => setShowEircodeSuggestions(true)}
            onBlur={() => setTimeout(() => setShowEircodeSuggestions(false), 200)}
            placeholder="Enter eircode"
            autoComplete="off"
            className="h-12 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
          {showEircodeSuggestions && filteredEircodes.length > 0 && (
            <div className="absolute top-full left-0 right-0 z-50 mt-2 max-h-64 overflow-y-auto rounded-lg border border-border bg-white shadow-xl">
              {filteredEircodes.map((code, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleEircodeSelect(code)}
                  className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-blue-50 transition text-gray-900 first:rounded-t-lg last:rounded-b-lg"
                >
                  {code}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label htmlFor="propertyType" className="text-sm font-medium text-foreground">
            Property type <span className="text-red-500">*</span>
          </label>
          <select
            id="propertyType"
            name="propertyType"
            required
            defaultValue=""
            className="h-12 w-full rounded-xl border border-input bg-background px-3 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            <option value="" disabled>
              Select type
            </option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="bedrooms" className="text-sm font-medium text-foreground">
            Bedrooms <span className="text-red-500">*</span>
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            required
            defaultValue=""
            className="h-12 w-full rounded-xl border border-input bg-background px-3 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            <option value="" disabled>
              Select bedrooms
            </option>
            {bedrooms.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="bathrooms" className="text-sm font-medium text-foreground">
            Bathrooms <span className="text-red-500">*</span>
          </label>
          <select
            id="bathrooms"
            name="bathrooms"
            required
            defaultValue=""
            className="h-12 w-full rounded-xl border border-input bg-background px-3 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            <option value="" disabled>
              Select bathrooms
            </option>
            {bathrooms.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="size" className="text-sm font-medium text-foreground">
            Size (m2)
          </label>
          <input
            id="size"
            name="size"
            type="text"
            placeholder="Enter size"
            className="h-12 w-full rounded-xl border border-input bg-background px-3 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="condition" className="text-sm font-medium text-foreground">
            Condition <span className="text-red-500">*</span>
          </label>
          <select
            id="condition"
            name="condition"
            required
            defaultValue=""
            className="h-12 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            <option value="" disabled>
              Select condition
            </option>
            {conditions.map((condition) => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>

        {service === "sale" && (
          <div className="space-y-2">
            <label htmlFor="extension" className="text-sm font-medium text-foreground">
              Extension? <span className="text-red-500">*</span>
            </label>
            <select
              id="extension"
              name="extension"
              required
              defaultValue=""
              className="h-12 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="timeline" className="text-sm font-medium text-foreground">
          Timeline <span className="text-red-500">*</span>
        </label>
        <select
          id="timeline"
          name="timeline"
          required
          defaultValue=""
          className="h-12 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
        >
          <option value="" disabled>
            When would you like to {service === "sale" ? "sell" : "let"}?
          </option>
          {timelines.map((timeline) => (
            <option key={timeline} value={timeline}>
              {timeline}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full h-12 rounded-xl bg-accent text-base font-semibold text-accent-foreground shadow-lg transition hover:-translate-y-0.5 hover:bg-accent/90 flex items-center justify-center gap-2"
      >
        Request Agent Offers
        <ChevronRight className="h-4 w-4" />
      </button>
    </form>
  )
}


