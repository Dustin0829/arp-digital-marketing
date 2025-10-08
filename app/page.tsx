import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ClientsCarousel } from "@/components/clients-carousel"
import { FeaturedProjectsSection } from "@/components/featured-projects-section"
import { TeamSection } from "@/components/team-section"
import { TextTestimonialsSection } from "@/components/text-testimonials-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ClientsCarousel />
      <FeaturedProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <TeamSection />
      <TextTestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  )
}
