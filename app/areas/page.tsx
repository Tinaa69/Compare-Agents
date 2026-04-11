import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Coverage | Irish Agent Comparison | CompareAgents.ie",
  description: "Find and compare estate agents in your area. Browse agents by location with local market expertise and performance data.",
}

export default function AreasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Find Estate Agents in Your Area
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Compare local estate agents with proven track records across Ireland.
                Our data-driven approach helps you find agents who know your market best.
              </p>
              <div className="mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Get Agent Recommendations
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex justify-center mb-6">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
              </div>
              <p className="text-xl text-foreground leading-relaxed">
                We are currently covering all of the Leinster region but have plans to expand nationwide very soon, watch this space!
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-primary p-8 sm:p-12 lg:p-16 text-center">
              <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
                Not Sure Which Area to Choose?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Tell us your property details and we will recommend the best local agents 
                based on their performance in your specific area.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Get Personalised Recommendations
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
