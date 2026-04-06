import { FileText, Users, CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Submit Property Details",
    description: "Provide your property information including location, type, estimated value, size and condition.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Receive Agent Shortlist",
    description: "Receive up to 4 offers from verified agents within 24 hours, tailored to your area and property type.",
    icon: Users,
  },
  {
    step: "03",
    title: "Compare & Select",
    description: "Review competitive offers with transparent fee structures, marketing strategy, sales valuation and service scope. Make an informed decision.",
    icon: CheckCircle,
  },
]

export function ProcessSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            How It Works
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Three Steps to Optimal Agent Selection
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our data-driven process ensures you connect with the best-performing agents for your specific requirements.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden w-full translate-x-1/2 lg:block">
                  <ArrowRight className="h-5 w-5 text-border" />
                </div>
              )}

              <div className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg">
                {/* Step Number */}
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent">
                    {step.step}
                  </span>
                  <step.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
