"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does CompareAgents.ie work?",
    answer: "By submitting the form on CompareAgents.ie, we match you with local estate agents that suit your needs. They will contact you by phone or email to provide more information about their work and prices. When you receive several offers, you can compare the agents based on what you believe is most important for a good sale - whether that be local knowledge, personal chemistry, years of experience, price, or service quality.",
  },
  {
    question: "How do I receive the offers?",
    answer: "Upon completing the form, you can see estate agents that cover your local area and property type. Within a day or two, the agents will contact you by phone or email to talk through their offer for you. This gives you the chance to speak with the agents right away, helping you decide if you want to work with them.",
  },
  {
    question: "Why shouldn't I just contact estate agents directly?",
    answer: "The Competition and Consumer Protection Commission (CCPC) advises you to talk to several estate agents before you decide on one. Finding the right agent can take time and resources. We built this service to streamline the process. When you use CompareAgents.ie, you get in direct contact with agents that want to sell or rent out your property, according to your needs - saving you time by having the agents come to you.",
  },
  {
    question: "If the service is free, how do you make money?",
    answer: "The estate agents who have partnered with us pay us a small commission whenever we put interested customers in touch with them. They pay this commission regardless of whether they win you as their customer, meaning they have every incentive to offer you their best service and results.",
  },
  {
    question: "What happens to my personal details?",
    answer: "When you fill out the form, our software matches your information with up to 4 matched local estate agents that can sell your property. The agents are provided with your contact details and information about the property. Your details will only be shared with the agents you match with - no one else. We comply fully with GDPR regulations.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Header */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              FAQ
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Want to Know More?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Curious about the service? Want to know what happens next? We have got you covered with answers to common questions.
            </p>
            <div className="mt-8">
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                View all FAQs
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
