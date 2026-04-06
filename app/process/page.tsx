import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ChevronRight, 
  FileText,
  Search,
  BarChart3,
  Users,
  CheckCircle,
  Shield,
  Clock,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works | Our Process | CompareAgents.ie",
  description: "Learn how CompareAgents.ie uses data-led methodology to match Ireland property owners with the best-performing estate and letting agents.",
}

const processSteps = [
  {
    number: "01",
    title: "Submit Your Property Details",
    description: "Complete our brief online form with your property information, including type, location, estimated value or rental expectation, and your preferred timeline.",
    details: [
      "Takes less than 3 minutes to complete",
      "All information kept strictly confidential",
      "No obligation to proceed at any stage",
    ],
    icon: FileText,
  },
  {
    number: "02",
    title: "Intelligent Agent Matching",
    description: "Our proprietary algorithm analyses your requirements against our database of agent performance data to identify the best matches for your specific situation.",
    details: [
      "Area-specific performance analysis",
      "Property type expertise matching",
      "Fee structure alignment",
    ],
    icon: Search,
  },
  {
    number: "03",
    title: "Agents Prepare Offers",
    description: "Matched agents are notified and prepare competitive proposals tailored to your property. Each offer includes fee structure, marketing plan, and performance guarantees.",
    details: [
      "Agents compete for your business",
      "Transparent fee disclosure required",
      "Typically 3-5 agent offers received",
    ],
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Compare with Confidence",
    description: "Receive a comprehensive comparison of all offers with performance metrics, enabling an objective, data-informed decision.",
    details: [
      "Side-by-side offer comparison",
      "Historical performance data included",
      "Our team available for guidance",
    ],
    icon: Users,
  },
  {
    number: "05",
    title: "Select & Proceed",
    description: "Choose the agent that best fits your requirements. We facilitate the introduction and remain available throughout your transaction.",
    details: [
      "Direct engagement with chosen agent",
      "No fees from CompareAgents.ie",
      "Post-transaction feedback collected",
    ],
    icon: CheckCircle,
  },
]

const dataPoints = [
  {
    title: "Sales Velocity",
    description: "Average time from listing to sale agreed, analysed at postcode level",
  },
  {
    title: "Price Achievement",
    description: "Final sale price as percentage of asking price, tracked over 24 months",
  },
  {
    title: "Fee Structures",
    description: "Commission rates, marketing costs, and any additional charges",
  },
  {
    title: "Client Feedback",
    description: "Verified ratings and reviews from previous property owners",
  },
  {
    title: "Market Activity",
    description: "Current listings, recent sales, and market share by area",
  },
  {
    title: "Regulatory Status",
    description: "PSRA licence verification and any regulatory actions",
  },
]

export default function ProcessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                How CompareAgents.ie Works
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Our data-led methodology ensures you connect with the best-performing agents for your specific property and requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connector */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-6 top-20 bottom-0 w-px bg-border" />
                  )}
                  
                  <div className="flex gap-6">
                    {/* Step Number */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground font-bold">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 rounded-xl border border-border bg-card p-6">
                      <div className="flex items-start justify-between">
                        <h3 className="font-serif text-xl font-semibold text-card-foreground">
                          {step.title}
                        </h3>
                        <step.icon className="h-6 w-6 text-accent" />
                      </div>
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="h-3 w-3 text-accent" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Methodology */}
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Our Methodology
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Data-Driven Agent Analysis
              </h2>
              <p className="mt-4 text-muted-foreground">
                We continuously collect and verify performance data to ensure accurate, objective comparisons.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dataPoints.map((point) => (
                <div key={point.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-card-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Expected Timeline
                </span>
                <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  From Submission to Selection
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our streamlined process delivers competitive agent offers quickly, allowing you to make an informed decision without unnecessary delays.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <Clock className="mx-auto h-8 w-8 text-accent" />
                  <span className="mt-4 block font-serif text-3xl font-bold text-foreground">3 min</span>
                  <span className="text-sm text-muted-foreground">Form completion</span>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <Search className="mx-auto h-8 w-8 text-accent" />
                  <span className="mt-4 block font-serif text-3xl font-bold text-foreground">24 hrs</span>
                  <span className="text-sm text-muted-foreground">Agent matching</span>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <BarChart3 className="mx-auto h-8 w-8 text-accent" />
                  <span className="mt-4 block font-serif text-3xl font-bold text-foreground">24 hrs</span>
                  <span className="text-sm text-muted-foreground">Receive offers</span>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <CheckCircle className="mx-auto h-8 w-8 text-accent" />
                  <span className="mt-4 block font-serif text-3xl font-bold text-foreground">Your pace</span>
                  <span className="text-sm text-muted-foreground">Decision making</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Shield className="mx-auto h-12 w-12 text-accent" />
              <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Submit your property details today and experience our data-driven agent comparison process.
              </p>
              <div className="mt-8">
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
