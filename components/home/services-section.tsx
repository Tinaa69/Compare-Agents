import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Home, Building, Check } from "lucide-react"

const vendorBenefits = [
  "Compare estate agent fees across Ireland markets",
  "Access verified sales performance data",
  "Receive competitive offers within 48 hours",
  "Transparent commission benchmarking",
  "Risk-free agent selection process",
]

const landlordBenefits = [
  "Compare letting agent management fees",
  "Tenant vetting standards comparison",
  "Rent collection efficiency metrics",
  "Maintenance protocol evaluation",
  "Yield optimisation analysis",
]

export function ServicesSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Services
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Tailored Solutions for Property Owners
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Whether selling or letting, access data-driven agent comparison designed for your specific objectives.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Vendor Services */}
          <div className="rounded-xl border border-border bg-card p-8 lg:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                <Home className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-card-foreground">
                  Vendor Services
                </h3>
                <p className="text-sm text-muted-foreground">Property Sales</p>
              </div>
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Selling your property in Ireland? Compare estate agents based on proven sales velocity, achieved prices, and transparent fee structures. Our methodology identifies agents with track records in your specific area.
            </p>

            <ul className="mt-6 space-y-3">
              {vendorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-card-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="mt-8 w-full sm:w-auto">
              <Link href="/vendors">
                Explore Vendor Services
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Landlord Services */}
          <div className="rounded-xl border border-border bg-card p-8 lg:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                <Building className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-card-foreground">
                  Landlord Services
                </h3>
                <p className="text-sm text-muted-foreground">Lettings & Management</p>
              </div>
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Maximise your rental yield with data-led letting agent comparison. Evaluate management fees, tenant quality standards, and operational efficiency to select the optimal partner for your investment.
            </p>

            <ul className="mt-6 space-y-3">
              {landlordBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-card-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="mt-8 w-full sm:w-auto">
              <Link href="/landlords">
                Explore Landlord Services
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
