import { Target, Gift, Clock } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Tailored for You",
    description: "By telling us your needs, we put you in touch with agents who are experts in your local area with the services you require. No generic matches.",
  },
  {
    icon: Gift,
    title: "Free & Non-Binding",
    description: "The service is completely free and non-binding. You decide if you want to proceed with an agent or decline all offers. No pressure, no obligation.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "You don't have to search for the right estate agent on your own. By using our service, qualified agents will contact you directly with their best offers.",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Compare Agent Offers the Smart Way
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                <benefit.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary-foreground">
                {benefit.title}
              </h3>
              <p className="mt-3 text-primary-foreground/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
