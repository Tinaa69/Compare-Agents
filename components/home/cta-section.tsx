import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-primary">
          <div className="px-8 py-16 sm:px-16 lg:px-24 lg:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Ready to Optimise Your Property Transaction?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
                Submit your property details today and receive competitive offers from verified Irish agents within 24 hours. No obligation, completely free.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="#hero-form">
                    Request Agent Offers
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <a href="tel:+35312345678">
                    <Phone className="mr-2 h-4 w-4" />
                    Speak to an Advisor
                  </a>
                </Button>
              </div>

              <p className="mt-8 text-sm text-primary-foreground/60">
                Average response time: 24 hours. Service available for properties across Irish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
