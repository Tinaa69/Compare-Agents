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
  Lightbulb
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | CompareAgents.ie - Dublin Estate Agent Comparison",
  description: "Learn about CompareAgents.ie, Ireland's leading estate agent comparison platform. Our mission is to bring transparency and data-driven decisions to property transactions.",
}

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "We believe property owners deserve complete visibility into agent performance, fees, and track records before making decisions.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    description: "Every recommendation is backed by objective performance metrics, not paid placements or subjective rankings.",
  },
  {
    icon: Users,
    title: "Client-First",
    description: "Our service is designed around your needs. We earn trust through results, not aggressive sales tactics.",
  },
  {
    icon: Target,
    title: "Local Expertise",
    description: "We focus exclusively on the Dublin market, ensuring deep knowledge of local dynamics and agent performance.",
  },
]

const milestones = [
  {
    year: "2021",
    title: "Founded",
    description: "CompareAgents.ie launched to address the lack of transparency in Dublin's estate agent market.",
  },
  {
    year: "2022",
    title: "1,000 Matches",
    description: "Helped our 1,000th property owner find the right agent, with average fee savings of 18%.",
  },
  {
    year: "2023",
    title: "Landlord Services",
    description: "Expanded to include letting agent comparison for Dublin landlords and property investors.",
  },
  {
    year: "2024",
    title: "850+ Agents",
    description: "Our database grew to cover 850+ verified agents across Greater Dublin Area.",
  },
  {
    year: "2025",
    title: "AI-Powered Matching",
    description: "Launched advanced matching algorithm to improve agent-property fit recommendations.",
  },
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
                Bringing Transparency to Property Transactions
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                CompareAgents.ie was founded on a simple belief: property owners deserve 
                objective, data-driven insights when choosing an estate or letting agent.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Our Mission
                </span>
                <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Empowering Property Owners with Data
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  For too long, choosing an estate agent has been a process dominated by 
                  marketing promises and personal referrals. We are changing that by providing 
                  objective performance data that puts property owners in control.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our platform aggregates agent performance metrics, client reviews, and market 
                  data to help you make informed decisions. Whether you are selling your family 
                  home or managing a rental portfolio, you deserve to know how agents actually 
                  perform, not just how they present themselves.
                </p>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/process">
                      Learn How It Works
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6 text-center">
                    <p className="font-serif text-4xl font-bold">2,400+</p>
                    <p className="mt-2 text-sm text-primary-foreground/80">Successful Matches</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="font-serif text-4xl font-bold text-foreground">850+</p>
                    <p className="mt-2 text-sm text-muted-foreground">Verified Agents</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="font-serif text-4xl font-bold text-foreground">18%</p>
                    <p className="mt-2 text-sm text-muted-foreground">Avg. Fee Savings</p>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-accent-foreground">
                  <CardContent className="p-6 text-center">
                    <p className="font-serif text-4xl font-bold">4.9/5</p>
                    <p className="mt-2 text-sm">Client Rating</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Our Values
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                What We Stand For
              </h2>
            </div>
            
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mt-4 font-semibold text-card-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Our Journey
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Building Trust, One Match at a Time
              </h2>
            </div>
            
            <div className="mt-16 relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
              
              <div className="space-y-8 lg:space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                      <Card>
                        <CardContent className="p-6">
                          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                            {milestone.year}
                          </span>
                          <h3 className="mt-3 font-semibold text-card-foreground">
                            {milestone.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Center dot */}
                    <div className="hidden lg:flex h-4 w-4 rounded-full bg-primary border-4 border-background z-10" />
                    
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Why Choose Us
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                What Sets Us Apart
              </h2>
            </div>
            
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <Card>
                <CardContent className="p-8">
                  <Building2 className="h-10 w-10 text-primary" />
                  <h3 className="mt-4 text-xl font-semibold text-card-foreground">
                    Dublin-Focused
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    We focus exclusively on Dublin and the Greater Dublin Area. This local 
                    specialisation means deeper market knowledge and more relevant agent recommendations.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <Award className="h-10 w-10 text-primary" />
                  <h3 className="mt-4 text-xl font-semibold text-card-foreground">
                    No Pay-to-Play
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Unlike other comparison sites, agents cannot pay for better rankings. 
                    Our recommendations are based solely on performance data and client fit.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <Lightbulb className="h-10 w-10 text-primary" />
                  <h3 className="mt-4 text-xl font-semibold text-card-foreground">
                    Ongoing Support
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    We do not disappear after making a match. Our team is available throughout 
                    your transaction to ensure you receive the service you were promised.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
              Ready to Find Your Perfect Agent?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Join thousands of Dublin property owners who have found the right agent through 
              our data-driven comparison platform.
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
