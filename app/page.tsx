import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ProcessSection } from "@/components/home/process-section"
import { MetricsSection } from "@/components/home/metrics-section"
import { ServicesSection } from "@/components/home/services-section"
import { AgentCriteriaSection } from "@/components/home/agent-criteria-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { LocationsSection } from "@/components/home/locations-section"
import { PropertyTypesSection } from "@/components/home/property-types-section"
import { TrustSection } from "@/components/home/trust-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProcessSection />
        <MetricsSection />
        <ServicesSection />
        <AgentCriteriaSection />
        <BenefitsSection />
        <LocationsSection />
        <PropertyTypesSection />
        <TrustSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
