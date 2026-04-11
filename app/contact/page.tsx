import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LeadCaptureForm } from "@/components/lead-capture-form"
import { Shield, Lock, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Request Agent Offers | CompareAgents.ie",
  description: "Submit your Irish property details and receive competitive offers from verified estate and letting agents within 24 hours.",
}

const trustSignals = [
  {
    icon: Shield,
    title: "PSRA Verified Agents",
    description: "All agents are licensed by the Property Services Regulatory Authority",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Your information is protected under GDPR and never shared without consent",
  },
  {
    icon: CheckCircle,
    title: "No Obligation",
    description: "Review offers at your own pace with no commitment required",
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Request Agent Offers
              </h1>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                Submit your property details below and receive competitive offers from verified Irish agents within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-background py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
                  <LeadCaptureForm />
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Trust Signals */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-card-foreground">Your Privacy Matters</h3>
                  <div className="mt-4 space-y-4">
                    {trustSignals.map((signal) => (
                      <div key={signal.title} className="flex gap-3">
                        <signal.icon className="h-5 w-5 shrink-0 text-accent" />
                        <div>
                          <h4 className="text-sm font-medium text-card-foreground">
                            {signal.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {signal.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-card-foreground">Contact Us Directly</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Prefer to speak with an advisor? We are available Monday to Friday, 9am to 6pm.
                  </p>
                  <div className="mt-4 space-y-3">
                    <a 
                      href="tel:+35312345678"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                    >
                      <Phone className="h-4 w-4 text-accent" />
                      +353 1 234 5678
                    </a>
                    <a 
                      href="mailto:info@compareagents.ie"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                    >
                      <Mail className="h-4 w-4 text-accent" />
                      info@compareagents.ie
                    </a>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 shrink-0 text-accent" />
                      <span>Irish</span>
                    </div>
                  </div>
                </div>

                {/* Process */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-card-foreground">What Happens Next</h3>
                  <ol className="mt-4 space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
                        1
                      </span>
                      <span className="text-muted-foreground">
                        We review your submission and verify property details
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
                        2
                      </span>
                      <span className="text-muted-foreground">
                        Matched agents are notified and prepare competitive offers
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
                        3
                      </span>
                      <span className="text-muted-foreground">
                        You receive offers within 24 hours to compare at your convenience
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
