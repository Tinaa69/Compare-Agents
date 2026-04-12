'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const benefits = [
  {
    title: "Pricing",
    description: "We offer very competitive fixed pricing for each lead. No hidden costs, and invoiced monthly.",
  },
  {
    title: "Customized Preferences",
    description: "Tell us what type of leads you would like to receive and we'll do the rest to make sure it happens.",
  },
  {
    title: "Open ended contract",
    description: "Cancel your subscription anytime, with no obligation once you sign up.",
  },
  {
    title: "Lead Data",
    description: "Receive reporting from us monthly, highlighting conversion rates and client feedback metrics.",
  },
]

function PartnerForm() {
  return (
    <form className="space-y-8" action="/thank-you" method="get">
      <input type="hidden" name="formType" value="partner" />

      {/* Company Information Section */}
      <div className="space-y-6">
        <div className="border-b border-border pb-2">
          <h3 className="text-lg font-semibold text-foreground">Company Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="companyName" className="block text-sm font-medium text-foreground">
              Company name <span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              className="w-full h-12 rounded-lg border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              placeholder="Enter your company name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="companyDirector" className="block text-sm font-medium text-foreground">
              Company director <span className="text-red-500">*</span>
            </label>
            <input
              id="companyDirector"
              name="companyDirector"
              type="text"
              required
              className="w-full h-12 rounded-lg border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              placeholder="Director's full name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="companyAddress" className="block text-sm font-medium text-foreground">
            Company address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="companyAddress"
            name="companyAddress"
            required
            rows={3}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 resize-none"
            placeholder="Enter your full company address"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="companyEircode" className="block text-sm font-medium text-foreground">
              Company eircode <span className="text-red-500">*</span>
            </label>
            <input
              id="companyEircode"
              name="companyEircode"
              type="text"
              required
              className="w-full h-12 rounded-lg border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              placeholder="Enter eircode"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-foreground">
              Years in business <span className="text-red-500">*</span>
            </label>
            <input
              id="yearsInBusiness"
              name="yearsInBusiness"
              type="number"
              required
              min="0"
              className="w-full h-12 rounded-lg border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              placeholder="e.g. 5"
            />
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="space-y-6">
        <div className="border-b border-border pb-2">
          <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="directorEmail" className="block text-sm font-medium text-foreground">
              Director email <span className="text-red-500">*</span>
            </label>
            <input
              id="directorEmail"
              name="directorEmail"
              type="email"
              required
              className="w-full h-12 rounded-lg border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              placeholder="director@company.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="leadsEmail" className="block text-sm font-medium text-foreground">
              Email for leads <span className="text-red-500">*</span>
            </label>
            <input
              id="leadsEmail"
              name="leadsEmail"
              type="email"
              required
              className="w-full h-12 rounded-lg border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              placeholder="leads@company.com"
            />
          </div>
        </div>
      </div>

      {/* Business Details Section */}
      <div className="space-y-6">
        <div className="border-b border-border pb-2">
          <h3 className="text-lg font-semibold text-foreground">Business Details</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="agencyType" className="block text-sm font-medium text-foreground">
              Type of agency <span className="text-red-500">*</span>
            </label>
            <select
              id="agencyType"
              name="agencyType"
              required
              defaultValue=""
              className="w-full h-12 rounded-lg border border-input bg-background px-4 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
            >
              <option value="" disabled>Select agency type</option>
              <option value="sales-lettings">Sales and lettings</option>
              <option value="sales-only">Sales only</option>
              <option value="lettings-only">Lettings only</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="companySize" className="block text-sm font-medium text-foreground">
              Company size <span className="text-red-500">*</span>
            </label>
            <select
              id="companySize"
              name="companySize"
              required
              defaultValue=""
              className="w-full h-12 rounded-lg border border-input bg-background px-4 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
            >
              <option value="" disabled>Select company size</option>
              <option value="1-10">1-10 employees</option>
              <option value="10-20">10-20 employees</option>
              <option value="20+">20+ employees</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="psraNumber" className="block text-sm font-medium text-foreground">
              PSRA Licence Number <span className="text-red-500">*</span>
            </label>
            <input
              id="psraNumber"
              name="psraNumber"
              type="text"
              required
              className="w-full h-12 rounded-lg border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              placeholder="Enter PSRA number"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="leadsRequired" className="block text-sm font-medium text-foreground">
            Do you require leads for <span className="text-red-500">*</span>
          </label>
          <select
            id="leadsRequired"
            name="leadsRequired"
            required
            defaultValue=""
            className="w-full h-12 rounded-lg border border-input bg-background px-4 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            <option value="" disabled>Select lead type</option>
            <option value="sales-lettings">Sales and lettings</option>
            <option value="sales-only">Sales only</option>
            <option value="lettings-only">Lettings only</option>
          </select>
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <button
          type="submit"
          className="w-full h-14 rounded-lg bg-accent text-lg font-semibold text-accent-foreground shadow-lg transition hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-xl flex items-center justify-center gap-2"
        >
          Become a Partner : Get Started
        </button>
      </div>
    </form>
  )
}

export default function PartnersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Partner with Us
                </span>
                <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                  Generate new clients with CompareAgents.ie
                </h1>
                <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                  We connect you with motivated sellers and landlords across Ireland who are actively looking for an estate agent right now. These aren’t cold contacts, they’re high-intent enquiries that convert into real business.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" onClick={() => setIsFormOpen(true)}>
                    Become a Partner
                  </Button>
                  <Button size="lg" asChild>
                    <Link href="/about">
                      Learn More About Us
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src="/images/partner-1.png"
                    alt="For sale home in Dublin"
                    width={720}
                    height={520}
                    className="h-[260px] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src="/images/partner-2.png"
                    alt="Country home for sale"
                    width={720}
                    height={520}
                    className="h-[260px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-foreground leading-relaxed">
                Getting started is simple. Sign up and you’ll immediately start receiving a steady flow of qualified leads designed to generate more instructions and, ultimately, a steady pipeline of new business.
              </p>
              <p className="mt-6 text-lg text-foreground leading-relaxed">
                Leads are delivered to you in real time, so you can respond first and win more instructions. Whether you prefer mobile alerts, email, or direct integration into your workflow, you’ll never miss an opportunity.
              </p>
              <p className="mt-6 text-lg text-foreground leading-relaxed">
                We’re a proudly Ireland-owned company, built specifically for the Ireland property market. That means better quality enquiries, stronger local demand, and more opportunities for you to grow your pipeline.
              </p>
              <p className="mt-6 text-lg text-foreground leading-relaxed">
                You stay in full control. Target the exact type of clients you want, from homeowners in Dublin to landlords in Waterford, and we’ll match you with the right opportunities to maximise your results.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Why Partner?
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Turn new enquiries into clients
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* Partner Form Modal */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Become a Partner Today</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get you set up to receive qualified leads within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <PartnerForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}
