import Link from "next/link"
import { Building2, Shield, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Find Estate Agents", href: "/vendors" },
    { name: "Find Letting Agents", href: "/landlords" },
    { name: "Find Auctioneers", href: "/agents?type=auctioneer" },
    { name: "Property Management", href: "/landlords#management" },
  ],
  residential: [
    { name: "Sell Your Home", href: "/vendors?type=house" },
    { name: "Sell Your Apartment", href: "/vendors?type=apartment" },
    { name: "Rent Out Home", href: "/landlords?type=house" },
    { name: "Rent Out Apartment", href: "/landlords?type=apartment" },
  ],
  commercial: [
    { name: "Sell Office Space", href: "/vendors?type=office" },
    { name: "Sell Retail Property", href: "/vendors?type=retail" },
    { name: "Lease Commercial Space", href: "/landlords?type=commercial" },
    { name: "Sell Land / Site", href: "/vendors?type=land" },
  ],
  locations: [
    { name: "Dublin", href: "/agents?location=dublin" },
    { name: "Cork", href: "/agents?location=cork" },
    { name: "Galway", href: "/agents?location=galway" },
    { name: "Limerick", href: "/agents?location=limerick" },
    { name: "Co. Wicklow", href: "/agents?location=wicklow" },
    { name: "Co. Kildare", href: "/agents?location=kildare" },
  ],
  resources: [
    { name: "How It Works", href: "/process" },
    { name: "Agent Directory", href: "/agents" },
    { name: "FAQs", href: "/faqs" },
    { name: "Sell House Ireland", href: "/sell-house-ireland" },
    { name: "Dublin 6 Agents", href: "/dublin-6-estate-agents" },
    { name: "Dublin 4 Fees", href: "/dublin-4-agent-fees" },
  ],
  articles: [
    { name: "How Long to Sell a House in Ireland?", href: "/insights/how-long-to-sell" },
    { name: "What Does Sale Agreed Mean?", href: "/insights/sale-agreed" },
    { name: "Understanding Conveyancing", href: "/insights/conveyancing" },
    { name: "Property Price Index Explained", href: "/insights/price-index" },
    { name: "Tips for First-Time Sellers", href: "/insights/first-time-sellers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "GDPR Compliance", href: "/gdpr" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-7 w-7" />
              <span className="text-xl font-semibold tracking-tight">
                CompareAgents<span className="text-accent">.ie</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
              Ireland&apos;s agent comparison tool. Compare verified estate and letting agents, review fee ranges and performance by area, and receive 4 competitive offers.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground/80">All Agents PSRA Verified</span>
            </div>
            <div className="mt-3 text-sm text-primary-foreground/80">4 quotes in 24hrs</div>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@compareagents.ie" className="hover:text-accent transition-colors">
                  info@compareagents.ie
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+35312345678" className="hover:text-accent transition-colors">
                  +353 1 234 5678
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Made with love in Dublin, Ireland.</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Residential */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Residential
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.residential.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Locations
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner CTA */}
        <div className="mt-12 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-semibold text-primary-foreground">Are you an estate agent?</h3>
              <p className="mt-1 text-sm text-primary-foreground/80">
                Get more customers by partnering with CompareAgents.ie
              </p>
            </div>
            <Link
              href="/partners"
              className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Become a Partner
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-primary-foreground/60">
              &copy; {new Date().getFullYear()} CompareAgents.ie. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
