import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-18 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Ready to <span className="text-red-500">Elevate</span> Your Brand?</h2>
        <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto text-pretty opacity-90">
          Data-driven strategies that scale. Proven results, Real ROI.
        </p>
        <Button
          asChild
          size="default"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-5"
        >
          <Link href="/contact">Book a Free Consultation</Link>
        </Button>
      </div>
    </section>
  )
}
