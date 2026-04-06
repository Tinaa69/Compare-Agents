import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Home, ShieldCheck, TimerReset } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Sell House Ireland? Compare 4 Estate Agent Quotes | CompareAgents.ie",
  description:
    "Sell your house in Ireland by comparing 4 PSRA-verified estate agent quotes. Review fee ranges, local performance, and response times before you choose.",
}

const sellingPoints = [
  "Postcode-level fee benchmarks across active Ireland markets",
  "4 PSRA-verified agent quotes within 48 hours",
  "Transparent fee, speed, and local-sales comparison",
]

export default function SellHouseIrelandPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
              <Home className="h-4 w-4 text-accent" />
              Sell House Ireland
            </div>
            <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
              Sell your house in Ireland with 4 agent quotes, not guesswork
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Compare Ireland estate agents using postcode data, fee ranges, and real local performance. The platform is built to help sellers choose with confidence.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get 4 Agent Quotes
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {sellingPoints.map((point, index) => {
                const Icon = index === 0 ? ShieldCheck : index === 1 ? TimerReset : Home
                return (
                  <div key={point} className="rounded-2xl border border-border bg-card p-6">
                    <Icon className="h-6 w-6 text-accent" />
                    <p className="mt-4 text-sm leading-relaxed text-card-foreground">{point}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-muted p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Ireland sellers want three things: evidence, speed, and transparency
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                CompareAgents.ie is positioned as Ireland&apos;s postcode agent comparison tool. Instead of just listing agencies, the site highlights fee competitiveness, average sale speed, and local sales evidence in the area that matters to the seller.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                This makes the service more useful for users and more defensible against generic directories that cannot explain why one agent is a stronger fit than another.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
