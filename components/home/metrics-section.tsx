import { TrendingDown, Clock, BarChart3, Users } from "lucide-react"

const metrics = [
  {
    value: "18%",
    label: "Average Fee Reduction",
    description: "Users achieve lower fees compared to non-comparison transactions",
    icon: TrendingDown,
  },
  {
    value: "3.2",
    suffix: "Days",
    label: "Faster to Market",
    description: "Properties listed quicker with pre-vetted, responsive agents",
    icon: Clock,
  },
  {
    value: "4.8",
    suffix: "/5",
    label: "Client Satisfaction",
    description: "Average rating from property owners using our platform",
    icon: BarChart3,
  },
  {
    value: "2,400+",
    label: "Properties Matched",
    description: "Successful agent connections across Ireland since launch",
    icon: Users,
  },
]

export function MetricsSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Performance Data
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Results That Speak for Themselves
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our platform delivers measurable outcomes for property owners across Ireland.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <metric.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-serif text-4xl font-bold text-foreground">
                  {metric.value}
                </span>
                {metric.suffix && (
                  <span className="text-lg font-medium text-muted-foreground">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-sm font-semibold text-foreground">
                {metric.label}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
