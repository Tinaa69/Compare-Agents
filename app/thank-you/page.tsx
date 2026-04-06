import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Thank You | CompareAgents.ie",
  description: "Thanks for your enquiry. Your matched Ireland agents will review your details and contact you within 24 hours.",
}

const nextSteps = [
  "Agents review your details",
  "They'll call with fee quotes",
  "Compare all offers side-by-side",
  "Pick your favorite (or none)",
]

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="bg-primary py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Thanks! 4 Ireland agents contacting you in 24hrs.
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Your request is in. The next step is simple: compare the quotes and choose only if one feels right.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-card-foreground">Next</h2>
              <ul className="mt-6 space-y-4">
                {nextSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3 text-card-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/#comparison-sample">
                    See Sample Comparison
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/agents">Browse Agents</Link>
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
