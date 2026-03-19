import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ChevronRight, 
  Building, 
  Check, 
  TrendingUp, 
  Shield, 
  Users,
  Calculator,
  Percent,
  Wrench,
  UserCheck
} from "lucide-react"

export const metadata: Metadata = {
  title: "Landlord Services | Compare Letting Agents Dublin | CompareAgents.ie",
  description: "Compare letting and property management agents in Dublin. Optimise rental yield with transparent fee comparison, tenant vetting standards, and management efficiency metrics.",
}

const benefits = [
  {
    icon: Percent,
    title: "Management Fee Benchmarking",
    description: "Compare management fees across Dublin agents, typically ranging from 6-10% of rental income plus VAT.",
  },
  {
    icon: UserCheck,
    title: "Tenant Quality Standards",
    description: "Evaluate agent vetting processes including employment verification, reference checks, and credit scoring protocols.",
  },
  {
    icon: TrendingUp,
    title: "Yield Optimisation",
    description: "Access data on agents' rent achievement rates, void periods, and rental review practices.",
  },
  {
    icon: Wrench,
    title: "Maintenance Efficiency",
    description: "Compare response times, contractor networks, and maintenance cost transparency across agents.",
  },
]

const serviceComparisons = [
  {
    service: "Tenant Sourcing Only",
    typical: "50-75% first month's rent",
    includes: ["Property marketing", "Viewings management", "Tenant vetting", "Lease preparation"],
  },
  {
    service: "Full Management",
    typical: "6-10% monthly rent + VAT",
    includes: ["All tenant sourcing services", "Rent collection", "Maintenance coordination", "Property inspections", "Deposit management"],
  },
  {
    service: "Rent Collection Only",
    typical: "3-5% monthly rent + VAT",
    includes: ["Monthly rent collection", "Payment processing", "Arrears management", "Rental statements"],
  },
]

const vettingStandards = [
  {
    category: "Employment Verification",
    items: ["Employer reference", "Payslip verification", "Contract status confirmation", "Income-to-rent ratio assessment"],
  },
  {
    category: "Reference Checks",
    items: ["Previous landlord references", "Character references", "Rental history verification", "Tenancy duration analysis"],
  },
  {
    category: "Financial Assessment",
    items: ["Credit bureau check", "Bank statement review", "Outstanding debt analysis", "Rental affordability calculation"],
  },
  {
    category: "Identity Verification",
    items: ["Photo ID validation", "Proof of address", "Right to rent check", "Anti-money laundering compliance"],
  },
]

export default function LandlordsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5">
                <Building className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground">Lettings & Management</span>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Compare Letting Agents for Optimal Rental Yield
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Maximise your investment returns with data-led letting agent comparison. Evaluate management fees, tenant quality standards, and operational efficiency across Dublin agents.
              </p>
              <div className="mt-10">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Request Agent Offers
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Landlord Benefits
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Protect and Grow Your Investment
              </h2>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Level Comparisons */}
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Service Levels
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Compare Service Packages
              </h2>
              <p className="mt-4 text-muted-foreground">
                Understand the typical service levels and fee structures available in the Dublin market.
              </p>
            </div>
            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {serviceComparisons.map((service) => (
                <div key={service.service} className="rounded-xl border border-border bg-card p-6 lg:p-8">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground">
                    {service.service}
                  </h3>
                  <p className="mt-2 text-2xl font-bold text-accent">{service.typical}</p>
                  <p className="text-sm text-muted-foreground">Typical fee range</p>
                  <ul className="mt-6 space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm text-card-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tenant Vetting Standards */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Quality Assurance
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Tenant Vetting Standards Comparison
              </h2>
              <p className="mt-4 text-muted-foreground">
                We evaluate agents on the comprehensiveness of their tenant vetting processes.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {vettingStandards.map((standard) => (
                <div key={standard.category} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-card-foreground">{standard.category}</h3>
                  <ul className="mt-4 space-y-2">
                    {standard.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator Concept */}
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  ROI Analysis
                </span>
                <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Landlord ROI Calculator
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our ROI calculator helps you understand the true cost of property management services and their impact on your net yield. Compare scenarios across different agent fee structures.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <span className="font-medium text-foreground">Fee Impact Analysis</span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Visualise how different management fee structures affect your annual returns.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <span className="font-medium text-foreground">Void Period Modelling</span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Understand how agent performance on tenant retention impacts your yield.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <span className="font-medium text-foreground">Rent Achievement Comparison</span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        See how agents' rent optimisation track records translate to your bottom line.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6 text-accent" />
                  <h3 className="font-serif text-xl font-semibold text-card-foreground">
                    Sample Yield Comparison
                  </h3>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Monthly Rent</span>
                      <span className="font-semibold text-foreground">€2,500</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Agent A (8% fee)</span>
                      <span className="font-semibold text-foreground">€27,600/yr net</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Agent B (10% fee)</span>
                      <span className="font-semibold text-foreground">€27,000/yr net</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-accent/10 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">Annual Difference</span>
                      <span className="font-bold text-accent">€600</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Simplified example. Full calculator considers VAT, void periods, and rent achievement rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Shield className="mx-auto h-12 w-12 text-accent" />
              <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Protect Your Investment
              </h2>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                Submit your rental property details and receive competitive proposals from verified letting agents. Compare management fees, service levels, and performance metrics to make an informed decision.
              </p>
              <div className="mt-10">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Request Agent Offers
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
