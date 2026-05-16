import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ExplainerVideoSection } from "@/components/home/explainer-video-section"
import { ProcessSection } from "@/components/home/process-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ExplainerVideoSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
