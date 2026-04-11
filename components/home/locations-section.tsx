import Link from "next/link"
import { MapPin, ChevronRight } from "lucide-react"

const popularCities = [
  { name: "Dublin", href: "/agents?location=dublin", count: 145 },
  { name: "Cork", href: "/agents?location=cork", count: 42 },
  { name: "Galway", href: "/agents?location=galway", count: 28 },
  { name: "Limerick", href: "/agents?location=limerick", count: 24 },
]

const keyMarkets = [
  { name: "South Dublin", href: "/agents?location=south-dublin" },
  { name: "North Dublin", href: "/agents?location=north-dublin" },
  { name: "Dun Laoghaire", href: "/agents?location=dun-laoghaire" },
  { name: "Blackrock", href: "/agents?location=blackrock" },
  { name: "Cork City", href: "/agents?location=cork-city" },
  { name: "Galway City", href: "/agents?location=galway-city" },
  { name: "Limerick City", href: "/agents?location=limerick-city" },
  { name: "Waterford City", href: "/agents?location=waterford-city" },
]

const counties = [
  { name: "Co. Dublin", href: "/agents?location=co-dublin" },
  { name: "Co. Wicklow", href: "/agents?location=co-wicklow" },
  { name: "Co. Kildare", href: "/agents?location=co-kildare" },
  { name: "Co. Meath", href: "/agents?location=co-meath" },
  { name: "Co. Cork", href: "/agents?location=co-cork" },
  { name: "Co. Galway", href: "/agents?location=co-galway" },
]

export function LocationsSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Coverage Area
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Find Agents in Your Area
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We partner with verified estate and letting agents across Irish, from city centres to county markets.
          </p>
        </div>

        {/* Popular Cities */}
        <div className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            Popular Cities
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularCities.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-accent hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="font-semibold text-card-foreground">{city.name}</span>
                    <p className="text-xs text-muted-foreground">{city.count} agents</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Key Markets & Counties */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Key Markets
            </h3>
            <div className="flex flex-wrap gap-2">
              {keyMarkets.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-card-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Counties
            </h3>
            <div className="flex flex-wrap gap-2">
              {counties.map((county) => (
                <Link
                  key={county.name}
                  href={county.href}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-card-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {county.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Search by Location CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/agents"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            View all locations
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
