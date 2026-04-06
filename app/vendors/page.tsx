import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ChevronRight, 
  Home, 
  Check, 
  TrendingUp, 
  Shield, 
  Clock,
  BarChart3,
  FileText,
  Users,
  CheckCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Vendor Services | Compare Estate Agents Ireland | CompareAgents.ie",
  description: "Compare estate agents for your Ireland property sale. Access performance data, fee benchmarks, and receive competitive offers from PSRA-verified agents.",
}

const benefits = [
  {
    icon: TrendingUp,
    title: "15-25% Fee Savings",
    description: "Users typically achieve significant fee reductions through competitive offers compared to accepting standard rates.",
  },
  {
    icon: BarChart3,
    title: "Performance-Based Selection",
    description: "Access verified data on sales velocity, achieved vs. asking price, and marketing effectiveness for each agent.",
  },
  {
    icon: Shield,
    title: "PSRA Verified Only",
    description: "Every agent on our platform is verified as licensed by the Property Services Regulatory Authority.",
  },
  {
    icon: Clock,
    title: "48-Hour Response",
    description: "Receive competitive offers from matched agents within 24 hours of submitting your property details.",
  },
]

const methodology = [
  {
    title: "Area-Specific Performance",
    description: "We analyse agent performance at the postcode level, ensuring you connect with agents who have a proven track record in your specific location.",
  },
  {
    title: "Price Bracket Expertise",
    description: "Agent effectiveness varies by property value. Our matching considers historical performance within your property's estimated price range.",
  },
  {
    title: "Property Type Alignment",
    description: "Whether apartment, terraced house, or detached property—we match agents with demonstrated expertise in your property type.",
  },
  {
    title: "Fee Structure Analysis",
    description: "Transparent comparison of commission rates, sole agency vs. multi-agency terms, and any additional marketing costs.",
  },
]

const timeline = [
  {
    step: "Day 1",
    title: "Submit Property Details",
    description: "Complete our brief form with your property information, estimated value, and preferred timeline.",
    icon: FileText,
  },
  {
    step: "Day 1-2",
    title: "Agent Matching",
    description: "Our algorithm identifies agents with proven performance in your area and property segment.",
    icon: Users,
  },
  {
    step: "Day 2-3",
    title: "Receive Offers",
    description: "Matched agents submit competitive proposals with fees, marketing plans, and performance guarantees.",
    icon: BarChart3,
  },
  {
    step: "Day 3-7",
    title: "Compare & Select",
    description: "Review offers with full transparency. We provide objective comparison metrics to inform your decision.",
    icon: CheckCircle,
  },
]

const dublinBenchmarks = [
  { area: "Dublin 2 & 4", avgFee: "1.2%", avgTime: "42 days", priceAchieved: "98.5%" },
  { area: "Dublin 6 & 6W", avgFee: "1.3%", avgTime: "38 days", priceAchieved: "97.8%" },
  { area: "Dublin 9 & 11", avgFee: "1.4%", avgTime: "45 days", priceAchieved: "96.9%" },
  { area: "South Dublin", avgFee: "1.25%", avgTime: "40 days", priceAchieved: "97.2%" },
  { area: "North Dublin", avgFee: "1.35%", avgTime: "48 days", priceAchieved: "96.4%" },
]

export default function VendorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5">
                <Home className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground">Property Sales</span>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Compare Estate Agents for Your Ireland Property Sale
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Access performance data, fee benchmarks, and receive competitive offers from verified estate agents. Achieve optimal outcomes for your property transaction.
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
                Why Compare
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The Vendor Advantage
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

        {/* Methodology */}
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Our Methodology
                </span>
                <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Data-Led Agent Comparison
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our comparison methodology goes beyond simple fee comparison. We analyse multiple performance dimensions to ensure you connect with agents best suited to your specific requirements.
                </p>
                <div className="mt-8 space-y-6">
                  {methodology.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  Ireland Market Benchmarks
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Current average performance metrics by area (Q1 2026)
                </p>
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="pb-3 text-left font-semibold text-foreground">Area</th>
                        <th className="pb-3 text-right font-semibold text-foreground">Avg Fee</th>
                        <th className="pb-3 text-right font-semibold text-foreground">Avg Time</th>
                        <th className="pb-3 text-right font-semibold text-foreground">Price %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dublinBenchmarks.map((benchmark) => (
                        <tr key={benchmark.area} className="border-b border-border/50">
                          <td className="py-3 text-foreground">{benchmark.area}</td>
                          <td className="py-3 text-right text-muted-foreground">{benchmark.avgFee}</td>
                          <td className="py-3 text-right text-muted-foreground">{benchmark.avgTime}</td>
                          <td className="py-3 text-right text-muted-foreground">{benchmark.priceAchieved}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Price % = Achieved price as percentage of asking price
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Process Timeline
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                From Submission to Selection
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our streamlined process delivers competitive offers within days, not weeks.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {timeline.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < timeline.length - 1 && (
                    <div className="absolute right-0 top-8 hidden w-full border-t-2 border-dashed border-border lg:block" style={{ width: 'calc(100% - 2rem)', left: '50%' }} />
                  )}
                  <div className="relative rounded-xl border border-border bg-card p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">{step.step}</span>
                    </div>
                    <h3 className="font-semibold text-card-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Mitigation */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Shield className="mx-auto h-12 w-12 text-accent" />
              <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Risk Mitigation Guaranteed
              </h2>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                Every agent on CompareAgents.ie is verified as PSRA-licensed. Our platform provides full transparency on agent performance, fee structures, and client feedback—enabling informed decisions that protect your interests.
              </p>
              <ul className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  PSRA License Verification
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  Performance Data Transparency
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  No Hidden Referral Fees
                </li>
              </ul>
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
