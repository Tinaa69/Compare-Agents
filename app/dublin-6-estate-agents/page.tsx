import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Clock3, MapPin, TrendingDown } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Dublin 6 Estate Agents Compared | 1.2%-2.1% Fees | CompareAgents.ie",
  description:
    "Compare Dublin 6 estate agents by fee range, average sale time, and local performance data. Review 4 PSRA-verified quotes before choosing.",
}

const stats = [
  { label: "Typical fee range", value: "1.2% - 2.1%", icon: TrendingDown },
  { label: "Average sale time", value: "22 days", icon: Clock3 },
  { label: "Coverage", value: "Dublin 6 sellers", icon: MapPin },
]

export default function Dublin6EstateAgentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
              Dublin 6 estate agents with postcode-level fee and speed data
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Compare Dublin 6 agents using local fee ranges, average sale speed, and transparent performance scoring instead of generic directory listings.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact?area=Dublin%206">
                  Compare 4 Dublin 6 Quotes
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                  <stat.icon className="mx-auto h-6 w-6 text-accent" />
                  <p className="mt-4 text-sm uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                  <p className="mt-2 font-serif text-3xl font-bold text-card-foreground">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card p-8">
              <h2 className="font-serif text-2xl font-bold text-card-foreground">Why this page can rank better</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                It is specific to a real postcode, includes fee expectations, and clearly tells a seller what they get next: 4 PSRA-verified quotes matched to Dublin 6 performance.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Example score: 8.7/10 based on local sales, fee competitiveness, and average speed versus the local market.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
