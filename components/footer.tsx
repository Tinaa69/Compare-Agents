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
    { name: "Partner with Us", href: "/partners" },
    { name: "About Us", href: "/about" },
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
        <div className="grid gap-8 lg:grid-cols-[1.5fr_2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-7 w-7" />
              <span className="text-xl font-semibold tracking-tight">
                CompareAgents<span className="text-accent">.ie</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              Compare verified real estate agents, review fee range, marketing strategy and performance metrics, receive 4 competitive offers.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground/80">All Agents PSRA Verified</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-primary-foreground/80">
              <span className="text-accent">✓</span>
              <span>4 quotes in 24hrs</span>
            </div>

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

          {/* Partner CTA */}
          <div className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 shadow-sm">
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary-foreground">Become a Partner</h3>
                <p className="mt-3 text-sm text-primary-foreground/80 leading-relaxed">
                  Join CompareAgents.ie to receive high-intent leads, grow your pipeline, and win more instructions across Ireland.
                </p>
              </div>
              <Link
                href="/partners"
                className="inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Become a Partner
              </Link>
            </div>
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
