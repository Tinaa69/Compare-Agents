"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Calculator, ChevronRight } from "lucide-react"

const postcodeRates = {
  "Dublin 6": { low: 1.2, high: 2.1, average: 1.7 },
  "Dublin 4": { low: 1.0, high: 1.8, average: 1.4 },
  "Dublin 8": { low: 1.4, high: 2.3, average: 1.8 },
} as const

type PostcodeKey = keyof typeof postcodeRates

const euro = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
})

export function FeeCalculatorSection() {
  const [postcode, setPostcode] = useState<PostcodeKey>("Dublin 6")
  const [propertyValue, setPropertyValue] = useState(500000)

  const totals = useMemo(() => {
    const rates = postcodeRates[postcode]

    return {
      low: propertyValue * (rates.low / 100),
      high: propertyValue * (rates.high / 100),
      average: propertyValue * (rates.average / 100),
      rates,
    }
  }, [postcode, propertyValue])

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Conversion Tool
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Show sellers a realistic fee range before they request quotes
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A simple calculator makes the savings tangible. Users enter a home value, see the postcode fee range, then continue to get matched quotes.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                <Calculator className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Fee calculator</p>
                <h3 className="font-serif text-2xl font-bold text-card-foreground">Estimate agent fees by postcode</h3>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-foreground">
                Postcode
                <select
                  value={postcode}
                  onChange={(event) => setPostcode(event.target.value as PostcodeKey)}
                  className="h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
                >
                  {Object.keys(postcodeRates).map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 text-sm font-medium text-foreground">
                Property value
                <input
                  type="number"
                  min={100000}
                  step={10000}
                  value={propertyValue}
                  onChange={(event) => setPropertyValue(Number(event.target.value) || 0)}
                  className="h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
                />
              </label>
            </div>

            <div className="mt-8 rounded-2xl bg-muted p-5">
              <p className="text-sm text-muted-foreground">
                {postcode}, {euro.format(propertyValue)} home
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Low</p>
                  <p className="mt-1 text-xl font-semibold text-foreground">{euro.format(totals.low)}</p>
                  <p className="text-sm text-muted-foreground">{totals.rates.low}% fee</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Average</p>
                  <p className="mt-1 text-xl font-semibold text-foreground">{euro.format(totals.average)}</p>
                  <p className="text-sm text-muted-foreground">{totals.rates.average}% fee</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">High</p>
                  <p className="mt-1 text-xl font-semibold text-foreground">{euro.format(totals.high)}</p>
                  <p className="text-sm text-muted-foreground">{totals.rates.high}% fee</p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Get quotes matching this range
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
