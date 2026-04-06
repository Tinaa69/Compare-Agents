import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ChevronRight, 
  Users, 
  Shield, 
  MapPin,
  Star,
  TrendingUp,
  Clock,
  Filter,
  Search
} from "lucide-react"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Agent Directory | PSRA Verified Estate & Letting Agents | CompareAgents.ie",
  description: "Browse verified PSRA-licensed estate and letting agents across Ireland. Access performance metrics, fee structures, and client ratings.",
}

// Sample agent data for demonstration
const agents = [
  {
    id: 1,
    name: "Sherry FitzGerald",
    type: "Estate & Letting Agent",
    areas: ["Dublin 2", "Dublin 4", "Dublin 6"],
    feeRange: "1.0% - 1.5%",
    avgSaleTime: "38 days",
    priceAchieved: "98.2%",
    clientRating: 4.8,
    reviewCount: 156,
    psraNumber: "001234",
    yearsActive: 45,
  },
  {
    id: 2,
    name: "DNG",
    type: "Estate & Letting Agent",
    areas: ["Dublin Wide", "Greater Dublin"],
    feeRange: "1.2% - 1.6%",
    avgSaleTime: "42 days",
    priceAchieved: "97.5%",
    clientRating: 4.6,
    reviewCount: 203,
    psraNumber: "001567",
    yearsActive: 50,
  },
  {
    id: 3,
    name: "Lisney",
    type: "Estate Agent",
    areas: ["Dublin 2", "Dublin 4", "South Dublin"],
    feeRange: "1.1% - 1.4%",
    avgSaleTime: "35 days",
    priceAchieved: "98.5%",
    clientRating: 4.9,
    reviewCount: 98,
    psraNumber: "002345",
    yearsActive: 90,
  },
  {
    id: 4,
    name: "Savills Ireland",
    type: "Estate Agent",
    areas: ["Dublin 2", "Dublin 4", "Dublin 6W"],
    feeRange: "1.0% - 1.3%",
    avgSaleTime: "40 days",
    priceAchieved: "98.8%",
    clientRating: 4.7,
    reviewCount: 87,
    psraNumber: "003456",
    yearsActive: 165,
  },
  {
    id: 5,
    name: "Hooke & MacDonald",
    type: "Estate & Letting Agent",
    areas: ["Dublin 9", "Dublin 11", "North Dublin"],
    feeRange: "1.3% - 1.5%",
    avgSaleTime: "45 days",
    priceAchieved: "97.1%",
    clientRating: 4.5,
    reviewCount: 142,
    psraNumber: "004567",
    yearsActive: 55,
  },
  {
    id: 6,
    name: "Quillsen",
    type: "Estate Agent",
    areas: ["Dublin Wide"],
    feeRange: "1.2% - 1.5%",
    avgSaleTime: "41 days",
    priceAchieved: "97.8%",
    clientRating: 4.6,
    reviewCount: 178,
    psraNumber: "005678",
    yearsActive: 15,
  },
]

const performanceMetrics = [
  {
    metric: "Commission Fee",
    description: "Percentage of final sale price charged as commission. Rates vary by property value and agency terms.",
    benchmark: "Ireland average: 1.25%",
  },
  {
    metric: "Sales Velocity",
    description: "Average number of days from listing to sale agreed. Faster isn't always better—price optimisation matters.",
    benchmark: "Ireland average: 42 days",
  },
  {
    metric: "Price Achievement",
    description: "Final sale price as a percentage of asking price. High performers consistently achieve 97%+ of asking.",
    benchmark: "Ireland average: 97.3%",
  },
  {
    metric: "Client Retention",
    description: "Percentage of clients who return for subsequent transactions. Indicates long-term satisfaction.",
    benchmark: "Industry average: 45%",
  },
]

const onboardingRequirements = [
  "Valid PSRA licence with no regulatory sanctions",
  "Minimum 3 years active trading in Ireland market",
  "Professional indemnity insurance confirmation",
  "Commitment to transparent fee disclosure",
  "Quarterly performance data submission",
  "Client feedback participation agreement",
]

export default function AgentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5">
                <Users className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground">Agent Directory</span>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                PSRA Verified Ireland Agents
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Browse our directory of verified estate and letting agents. Access performance data, fee structures, and client ratings to inform your comparison.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="border-b border-border bg-background py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search agents by name or area..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter by Area
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter by Type
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Directory */}
        <section className="bg-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Featured Agents
              </h2>
              <span className="text-sm text-muted-foreground">
                {agents.length} verified agents
              </span>
            </div>

            {/* Agent Cards */}
            <div className="grid gap-6 lg:grid-cols-2">
              {agents.map((agent) => (
                <div 
                  key={agent.id}
                  className="rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-card-foreground">
                        {agent.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{agent.type}</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1">
                      <Shield className="h-3.5 w-3.5 text-accent" />
                      <span className="text-xs font-medium text-accent">PSRA Verified</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {agent.areas.slice(0, 3).map((area) => (
                      <span 
                        key={area}
                        className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        <MapPin className="h-3 w-3" />
                        {area}
                      </span>
                    ))}
                    {agent.areas.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{agent.areas.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="mt-6 grid grid-cols-4 gap-4 border-t border-border pt-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <TrendingUp className="h-3.5 w-3.5 text-accent" />
                        <span className="text-sm font-semibold text-foreground">{agent.feeRange}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Fee Range</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-accent" />
                        <span className="text-sm font-semibold text-foreground">{agent.avgSaleTime}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Avg. Sale Time</span>
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-semibold text-foreground">{agent.priceAchieved}</span>
                      <span className="block text-xs text-muted-foreground">Price Achieved</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                        <span className="text-sm font-semibold text-foreground">{agent.clientRating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({agent.reviewCount})</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      PSRA: {agent.psraNumber} | {agent.yearsActive} years active
                    </span>
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline">
                Load More Agents
              </Button>
            </div>
          </div>
        </section>

        {/* Performance Metrics Explained */}
        <section id="metrics" className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Understanding Our Data
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Performance Metrics Explained
              </h2>
              <p className="mt-4 text-muted-foreground">
                How we measure and compare agent performance to help you make informed decisions.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {performanceMetrics.map((metric) => (
                <div 
                  key={metric.metric}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-semibold text-card-foreground">{metric.metric}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>
                  <div className="mt-4 rounded-lg bg-accent/10 px-3 py-2">
                    <span className="text-sm font-medium text-accent">{metric.benchmark}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent Onboarding */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  For Agents
                </span>
                <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Join Our Agent Network
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  CompareAgents.ie connects verified agents with qualified property owners actively seeking representation. Our platform delivers pre-screened leads with clear requirements and realistic expectations.
                </p>
                <Button asChild className="mt-8">
                  <Link href="/contact">
                    Apply for Listing
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  Onboarding Requirements
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To maintain platform quality, all agents must meet the following criteria:
                </p>
                <ul className="mt-6 space-y-3">
                  {onboardingRequirements.map((requirement) => (
                    <li key={requirement} className="flex items-start gap-3">
                      <Shield className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm text-card-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Let Us Match You with the Right Agent
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Submit your property details and receive tailored offers from agents best suited to your requirements.
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
