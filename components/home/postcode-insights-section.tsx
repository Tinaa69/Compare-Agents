import Link from "next/link"
import { ArrowRight, Clock, MapPin, TrendingDown } from "lucide-react"

const postcodeStats = [
  {
    area: "Dublin 6",
    feeRange: "1.2% - 2.1%",
    saleTime: "22 days avg sale",
    takeaway: "Competitive family-home market with faster-than-average turnaround.",
    href: "/dublin-6-estate-agents",
  },
  {
    area: "Dublin 4",
    feeRange: "1.0% - 1.8%",
    saleTime: "19 days avg sale",
    takeaway: "Premium market where fee spread stays tight and speed matters.",
    href: "/dublin-4-agent-fees",
  },
  {
    area: "Dublin 8",
    feeRange: "1.4% - 2.3%",
    saleTime: "28 days avg sale",
    takeaway: "Broader fee range, so comparing agents can materially change seller costs.",
    href: "/areas",
  },
]

export function PostcodeInsightsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Killer Feature
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Hyper-specific postcode data competitors do not show
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            CompareAgents.ie is positioned around one thing: helping sellers compare agents using local evidence, not generic directory listings.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {postcodeStats.map((stat) => (
            <div key={stat.area} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    {stat.area}
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-card-foreground">
                    {stat.feeRange}
                  </h3>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-foreground">
                  <TrendingDown className="h-4 w-4 text-accent" />
                  {stat.feeRange} fees
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-foreground">
                  <Clock className="h-4 w-4 text-accent" />
                  {stat.saleTime}
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {stat.takeaway}
              </p>

              <Link
                href={stat.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Explore local stats
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
