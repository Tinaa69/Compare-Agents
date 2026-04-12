import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ChevronRight, 
  Target, 
  Users, 
  Shield, 
  BarChart3,
  Building2,
  Award,
  Lightbulb,
  CheckCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | CompareAgents.ie",
  description: "Learn about Compare Agents - a proudly Irish company with 15+ years of property industry experience. We connect serious sellers with trusted estate agents nationwide.",
}

const whyChooseUs = [
  "Proudly Irish, built for the local market",
  "15+ years of industry experience",
  "Genuine leads only, no spam",
  "Designed for both agents and sellers",
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                About Us
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Compare Agents is a proudly Irish company built on over 15 years of experience in the property industry.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Having worked closely with estate agents and sellers across Irish, we understand one thing clearly: quality lead generation is essential. Our goal is simple: to connect serious property sellers with trusted estate agents nationwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                What We Do
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Connecting Sellers with Trusted Agents
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We help homeowners easily compare estate agents, while providing agents with genuine, high-intent leads, not time-wasters.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our platform creates better matches, better conversations, and ultimately better outcomes for everyone involved.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Our Mission
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Quality Over Quantity
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                To deliver real, high-quality leads to estate agents across Irish while helping sellers make smarter decisions.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We focus on quality over quantity, ensuring every enquiry has real intent behind it.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Why Choose Us
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                What Sets Us Apart
              </h2>
              
              <div className="mt-10 space-y-4">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
              Ready to Compare Agents?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Find the right estate agent for your property with our simple, data-driven comparison tool.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Started Today
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
