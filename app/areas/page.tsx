import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ChevronRight, Building2, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Estate Agents by Area | Ireland Agent Comparison | CompareAgents.ie",
  description: "Find and compare estate agents in your area across Ireland. Browse agents by location with local market expertise and performance data.",
}

const dublinAreas = [
  {
    region: "Dublin City Centre",
    areas: [
      { name: "Dublin 1", agents: 42, avgPrice: "EUR385,000" },
      { name: "Dublin 2", agents: 38, avgPrice: "EUR595,000" },
      { name: "Dublin 4", agents: 45, avgPrice: "EUR725,000" },
      { name: "Dublin 6", agents: 52, avgPrice: "EUR685,000" },
      { name: "Dublin 7", agents: 36, avgPrice: "EUR425,000" },
      { name: "Dublin 8", agents: 34, avgPrice: "EUR395,000" },
    ]
  },
  {
    region: "North Dublin",
    areas: [
      { name: "Dublin 3 (Clontarf)", agents: 28, avgPrice: "EUR585,000" },
      { name: "Dublin 5 (Raheny)", agents: 24, avgPrice: "EUR495,000" },
      { name: "Dublin 9 (Drumcondra)", agents: 31, avgPrice: "EUR445,000" },
      { name: "Dublin 11 (Glasnevin)", agents: 26, avgPrice: "EUR485,000" },
      { name: "Dublin 13 (Donaghmede)", agents: 22, avgPrice: "EUR395,000" },
      { name: "Dublin 15 (Blanchardstown)", agents: 35, avgPrice: "EUR385,000" },
    ]
  },
  {
    region: "South Dublin",
    areas: [
      { name: "Dublin 6W (Terenure)", agents: 29, avgPrice: "EUR595,000" },
      { name: "Dublin 12 (Crumlin)", agents: 23, avgPrice: "EUR385,000" },
      { name: "Dublin 14 (Dundrum)", agents: 32, avgPrice: "EUR625,000" },
      { name: "Dublin 16 (Ballinteer)", agents: 27, avgPrice: "EUR585,000" },
      { name: "Dublin 18 (Sandyford)", agents: 25, avgPrice: "EUR545,000" },
      { name: "Dublin 24 (Tallaght)", agents: 21, avgPrice: "EUR345,000" },
    ]
  },
  {
    region: "Coastal & South County",
    areas: [
      { name: "Blackrock", agents: 18, avgPrice: "EUR745,000" },
      { name: "Dun Laoghaire", agents: 24, avgPrice: "EUR625,000" },
      { name: "Dalkey", agents: 15, avgPrice: "EUR1,125,000" },
      { name: "Killiney", agents: 12, avgPrice: "EUR985,000" },
      { name: "Bray", agents: 28, avgPrice: "EUR485,000" },
      { name: "Greystones", agents: 19, avgPrice: "EUR545,000" },
    ]
  },
  {
    region: "North County Dublin",
    areas: [
      { name: "Malahide", agents: 22, avgPrice: "EUR685,000" },
      { name: "Swords", agents: 31, avgPrice: "EUR425,000" },
      { name: "Portmarnock", agents: 14, avgPrice: "EUR595,000" },
      { name: "Howth", agents: 16, avgPrice: "EUR725,000" },
      { name: "Baldoyle", agents: 18, avgPrice: "EUR485,000" },
      { name: "Skerries", agents: 15, avgPrice: "EUR495,000" },
    ]
  },
  {
    region: "West Dublin & Kildare",
    areas: [
      { name: "Lucan", agents: 26, avgPrice: "EUR425,000" },
      { name: "Clondalkin", agents: 22, avgPrice: "EUR355,000" },
      { name: "Celbridge", agents: 18, avgPrice: "EUR445,000" },
      { name: "Maynooth", agents: 21, avgPrice: "EUR425,000" },
      { name: "Leixlip", agents: 16, avgPrice: "EUR415,000" },
      { name: "Naas", agents: 24, avgPrice: "EUR435,000" },
    ]
  },
]

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

        {/* Stats Banner */}
        <section className="border-b border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-3 text-center">
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">850+</p>
                <p className="mt-1 text-sm text-muted-foreground">Verified Agents</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">45+</p>
                <p className="mt-1 text-sm text-muted-foreground">Ireland Areas Covered</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">15-25%</p>
                <p className="mt-1 text-sm text-muted-foreground">Typical Fee Savings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {dublinAreas.map((region) => (
                <div key={region.region}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      {region.region}
                    </h2>
                  </div>
                  
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {region.areas.map((area) => (
                      <Card key={area.name} className="group hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center justify-between">
                            <span className="text-lg font-semibold">{area.name}</span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1.5 text-muted-foreground">
                              <Building2 className="h-4 w-4" />
                              <span>{area.agents} agents</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-muted-foreground">
                              <TrendingUp className="h-4 w-4" />
                              <span>Avg. {area.avgPrice}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                            <Link href={`/contact?area=${encodeURIComponent(area.name)}`}>
                              Compare Agents
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
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
