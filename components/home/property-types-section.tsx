import Link from "next/link"
import { Home, Building, Warehouse, TreePine, Store, ChevronRight } from "lucide-react"

const residentialSelling = [
  { name: "Sell your home", href: "/vendors?type=house" },
  { name: "Sell your apartment", href: "/vendors?type=apartment" },
  { name: "Sell your bungalow", href: "/vendors?type=bungalow" },
  { name: "Sell your townhouse", href: "/vendors?type=townhouse" },
]

const residentialLetting = [
  { name: "Rent out home", href: "/landlords?type=house" },
  { name: "Rent out apartment", href: "/landlords?type=apartment" },
  { name: "Student accommodation", href: "/landlords?type=student" },
  { name: "Short-term rental", href: "/landlords?type=short-term" },
]

const commercial = [
  { name: "Sell office space", href: "/vendors?type=office" },
  { name: "Sell retail property", href: "/vendors?type=retail" },
  { name: "Sell industrial property", href: "/vendors?type=industrial" },
  { name: "Lease commercial space", href: "/landlords?type=commercial" },
  { name: "Sell land / development site", href: "/vendors?type=land" },
]

const propertyCategories = [
  {
    icon: Home,
    title: "Residential Sales",
    description: "Find estate agents for selling houses, apartments, and homes",
    links: residentialSelling,
  },
  {
    icon: Building,
    title: "Residential Lettings",
    description: "Find letting agents for rental properties and management",
    links: residentialLetting,
  },
  {
    icon: Store,
    title: "Commercial Properties",
    description: "Find agents for office, retail, industrial, and land",
    links: commercial,
  },
]

export function PropertyTypesSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Property Types
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Agents for Every Property Type
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Whether you are selling, letting, or managing property, we connect you with specialists for your property type.
          </p>
        </div>

        {/* Property Categories */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {propertyCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <category.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between rounded-md px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-muted"
                    >
                      {link.name}
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            href="/agents"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            View all property types
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
