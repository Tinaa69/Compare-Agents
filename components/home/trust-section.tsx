import { Shield, Scale, Lock, FileCheck } from "lucide-react"

const trustPoints = [
  {
    icon: Shield,
    title: "PSRA Verification",
    description: "All agents are verified as licensed by the Property Services Regulatory Authority, ensuring full legal compliance.",
  },
  {
    icon: Scale,
    title: "Transparent Comparison",
    description: "Our methodology uses objective performance data. No pay-to-play rankings or hidden agent referral fees.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Your information is protected under GDPR. We never share personal data without explicit consent.",
  },
  {
    icon: FileCheck,
    title: "Performance Audited",
    description: "Agent metrics are independently verified. We audit sales data and client feedback to ensure accuracy.",
  },
]

export function TrustSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Trust & Compliance
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Built on Transparency and Integrity
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            CompareAgents.ie operates with full regulatory compliance and a commitment to objective, unbiased comparison.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-card-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
