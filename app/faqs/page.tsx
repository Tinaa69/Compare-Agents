import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronRight, HelpCircle, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQs | Common Questions | CompareAgents.ie",
  description: "Frequently asked questions about CompareAgents.ie, our agent comparison service, PSRA compliance, and how we help Ireland property owners.",
}

const faqCategories = [
  {
    category: "About Our Service",
    faqs: [
      {
        question: "What is CompareAgents.ie?",
        answer: "CompareAgents.ie is a data-led comparison platform that helps Ireland property owners find and compare estate and letting agents. We analyse agent performance data, fee structures, and client feedback to match you with agents best suited to your specific requirements. Our service is completely free for property owners.",
      },
      {
        question: "How is CompareAgents.ie different from other services?",
        answer: "Unlike simple directory listings, we provide objective performance data and facilitate competitive offers from matched agents. Our comparison includes verified metrics like sales velocity, price achievement, and client satisfaction—enabling informed decisions rather than guesswork. We have no pay-to-play rankings; agent placement is based purely on performance fit.",
      },
      {
        question: "Is there a cost to use CompareAgents.ie?",
        answer: "No. Our service is completely free for property owners. We are compensated by agents for qualified lead referrals, but this never influences our matching algorithm or recommendations. You receive objective comparisons regardless of any commercial arrangements.",
      },
      {
        question: "What areas do you cover?",
        answer: "We match property owners with verified agents across Ireland, covering major cities, counties, and commuter markets. Coverage continues to expand as new verified agents are onboarded.",
      },
    ],
  },
  {
    category: "The Comparison Process",
    faqs: [
      {
        question: "How does the matching process work?",
        answer: "After you submit your property details, our algorithm analyses your requirements against our database of agent performance data. We consider factors including your property type, location, value/rental expectation, and timeline. Matched agents are then invited to submit competitive proposals tailored to your property.",
      },
      {
        question: "How many agent offers will I receive?",
        answer: "Typically, you will receive 3-5 competitive offers from agents matched to your requirements. The exact number depends on how many agents meet our matching criteria for your specific property and location.",
      },
      {
        question: "How long does the process take?",
        answer: "Most users receive agent offers within 24 hours of submission. You can take as long as you need to review offers and make a decision; there is no time pressure.",
      },
      {
        question: "Am I obligated to choose an agent?",
        answer: "Absolutely not. Our service is completely no-obligation. You can review all offers and decide not to proceed if none meet your expectations. You are also free to continue searching for agents through other channels.",
      },
    ],
  },
  {
    category: "Agent Verification & Compliance",
    faqs: [
      {
        question: "How do you verify agents?",
        answer: "All agents on our platform must hold a valid licence from the Property Services Regulatory Authority (PSRA). We verify licence status directly with the PSRA register and conduct regular re-verification. Agents must also meet minimum trading history requirements and provide proof of professional indemnity insurance.",
      },
      {
        question: "What is the PSRA?",
        answer: "The Property Services Regulatory Authority (PSRA) is the statutory body responsible for licensing and regulating property service providers in Ireland, including estate agents, letting agents, and property management companies. PSRA licensing ensures agents meet professional standards and comply with relevant legislation.",
      },
      {
        question: "What happens if I have a complaint about an agent?",
        answer: "If you experience issues with an agent sourced through our platform, please contact us immediately. We take all feedback seriously and will investigate accordingly. For formal complaints, you may also contact the PSRA directly, who have powers to investigate and sanction licensed agents.",
      },
    ],
  },
  {
    category: "Data & Privacy",
    faqs: [
      {
        question: "How is my personal data protected?",
        answer: "We are fully GDPR compliant and take data protection seriously. Your personal information is stored securely and only shared with agents you are matched with. We never sell your data to third parties. You can request deletion of your data at any time by contacting us.",
      },
      {
        question: "Will I receive unwanted contact from agents?",
        answer: "Only agents matched to your requirements will receive your contact details, and only after you submit the enquiry form. You will not be added to marketing lists or receive unsolicited contact from agents not involved in your comparison.",
      },
      {
        question: "Where does your performance data come from?",
        answer: "Our performance data is compiled from multiple sources including public property registers, agent-submitted data (independently verified), and client feedback collected post-transaction. We audit data regularly to ensure accuracy and currency.",
      },
    ],
  },
  {
    category: "Fees & Costs",
    faqs: [
      {
        question: "What are typical estate agent fees in Ireland?",
        answer: "Estate agent fees in Ireland typically range from 1.0% to 1.75% of the sale price (plus VAT), depending on the property value, location, and agency terms. Higher-value properties often attract lower percentage rates. Our comparison service helps you understand the market rate for your specific property and secure competitive terms.",
      },
      {
        question: "What are typical letting agent fees?",
        answer: "Letting agent fees vary by service level. Tenant-find only services typically cost 50-75% of the first month's rent. Full management services range from 6-10% of monthly rent (plus VAT). Our platform helps you compare these fees alongside service quality metrics.",
      },
      {
        question: "Can I negotiate agent fees?",
        answer: "Yes, and our service facilitates this process. By receiving multiple competitive offers, you have leverage to negotiate. Agents know they are competing, which often results in more competitive fee proposals than approaching agents individually.",
      },
    ],
  },
]

export default function FAQsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5">
                <HelpCircle className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground">Support</span>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Find answers to common questions about our agent comparison service, compliance standards, and how we help Ireland property owners.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category) => (
                <div key={category.category}>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.category}-${index}`}
                        className="rounded-lg border border-border bg-card px-6"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium text-card-foreground">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Still Have Questions?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our team is available Monday to Friday, 9am to 6pm to answer your questions.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link href="/contact">
                    Contact Us
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:info@compareagents.ie">
                    Email: info@compareagents.ie
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-primary py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-8">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm text-primary-foreground/80">PSRA Verified Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm text-primary-foreground/80">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm text-primary-foreground/80">No Hidden Fees</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
