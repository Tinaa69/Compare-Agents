import type { Metadata } from "next"
import Link from "next/link"
import { BadgePercent, ChevronRight, Clock3, Euro } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Dublin 4 Agent Fees | Compare 4 Quotes Free | CompareAgents.ie",
  description:
    "See the Dublin 4 estate agent fee range, average sale speed, and compare 4 PSRA-verified quotes for free.",
}

export default function Dublin4AgentFeesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
              Dublin 4 estate agent fees typically range from 1.0% to 1.8%
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Compare fee expectations in Dublin 4, understand the local speed benchmark, and request 4 verified quotes for free.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact?area=Dublin%204">
                  Compare 4 Dublin 4 Quotes
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <BadgePercent className="mx-auto h-6 w-6 text-accent" />
                <p className="mt-4 text-sm uppercase tracking-wide text-muted-foreground">Low fee</p>
                <p className="mt-2 font-serif text-3xl font-bold text-card-foreground">1.0%</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <Euro className="mx-auto h-6 w-6 text-accent" />
                <p className="mt-4 text-sm uppercase tracking-wide text-muted-foreground">Average fee</p>
                <p className="mt-2 font-serif text-3xl font-bold text-card-foreground">1.4%</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <Clock3 className="mx-auto h-6 w-6 text-accent" />
                <p className="mt-4 text-sm uppercase tracking-wide text-muted-foreground">Average sale time</p>
                <p className="mt-2 font-serif text-3xl font-bold text-card-foreground">19 days</p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-muted p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">Example on a EUR500,000 home</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">Low</p>
                  <p className="mt-1 text-2xl font-semibold text-foreground">EUR5,000</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">Average</p>
                  <p className="mt-1 text-2xl font-semibold text-foreground">EUR7,000</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">High</p>
                  <p className="mt-1 text-2xl font-semibold text-foreground">EUR9,000</p>
                </div>
              </div>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Fee transparency helps this page act like both an SEO landing page and a practical decision tool for sellers who want a realistic benchmark before speaking to agents.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
