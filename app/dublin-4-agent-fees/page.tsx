import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ProcessSection } from "@/components/home/process-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Dublin 4 Agent Fees | Compare 4 Quotes Free | CompareAgents.ie",
  description:
    "Receive up to 4 offers from verified agents, compare fees and performance side by side, and choose the right fit for you and your property.",
}

export default function Dublin4AgentFeesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
