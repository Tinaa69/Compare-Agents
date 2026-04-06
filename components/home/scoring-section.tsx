import { BadgeCheck, Clock3, Home, TrendingDown } from "lucide-react"

const scoreBreakdown = [
  {
    label: "Local sales",
    value: "42/50 homes sold in D6",
    score: "4.2 / 5",
    icon: Home,
  },
  {
    label: "Fee competitiveness",
    value: "1.35% fee vs 1.8% average",
    score: "2.6 / 3",
    icon: TrendingDown,
  },
  {
    label: "Speed",
    value: "22 days vs 28 days average",
    score: "1.9 / 2",
    icon: Clock3,
  },
]

export function ScoringSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Trust Layer
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Transparent scoring that explains why an agent ranks well
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Instead of a vague top-agents list, the site can show a plain-English scorecard built from local sales, fee competitiveness, and speed.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {scoreBreakdown.map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-card p-5">
                <item.icon className="h-5 w-5 text-accent" />
                <p className="mt-3 text-sm font-semibold text-card-foreground">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.value}</p>
                <p className="mt-3 text-sm font-medium text-accent">{item.score}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
              <BadgeCheck className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Example score</p>
              <h3 className="font-serif text-3xl font-bold text-card-foreground">Agent Score: 8.7/10</h3>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {scoreBreakdown.map((item) => (
              <div key={item.label} className="rounded-xl bg-muted p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                  <span className="text-sm font-medium text-accent">{item.score}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            This kind of breakdown builds trust because users can see exactly how the recommendation was earned.
          </p>
        </div>
      </div>
    </section>
  )
}
