import { Award, Users, MessageSquare, Briefcase, TrendingUp } from "lucide-react"

const criteria = [
  {
    icon: Award,
    title: "Experience",
    description: "Look for an agent with a solid track record and positive reviews in the real estate industry. Years of experience in your local market matters.",
  },
  {
    icon: TrendingUp,
    title: "Market Expertise",
    description: "A good estate agent should be an expert on your local area, with knowledge of market trends, pricing strategies, and buyer demographics.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Effective communication and a good rapport is crucial. Ensure the agent listens to your needs, provides regular updates, and is responsive.",
  },
  {
    icon: Briefcase,
    title: "Services Offered",
    description: "Compare services offered by agents. Consider if you require marketing expertise, professional photography, virtual tours, or negotiation skills.",
  },
  {
    icon: Users,
    title: "Value for Money",
    description: "By comparing offers, you can select an agent who provides the best overall value and service for your needs, rather than focusing solely on fee.",
  },
]

export function AgentCriteriaSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Selection Guide
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            What Should You Look for in an Agent?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Choosing the right estate agent can significantly impact your property transaction. Here are the key factors to consider.
          </p>
        </div>

        {/* Criteria Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-xl border border-border bg-card p-6 ${
                index === criteria.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Advice */}
        <div className="mt-16 rounded-xl border border-accent/20 bg-accent/5 p-8 text-center">
          <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            The Competition and Consumer Protection Commission (CCPC) advises property owners to speak with several estate agents before making a decision. Our free service helps you do exactly that.
          </p>
        </div>
      </div>
    </section>
  )
}
