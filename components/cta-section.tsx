import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Ready to <span className="text-red-200">Elevate</span> Your Brand?</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pretty opacity-90">
          Let's create a digital marketing strategy that drives real results for your business
        </p>
        <Button
          asChild
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6"
        >
          <Link href="#contact">Book a Free Consultation</Link>
        </Button>
      </div>
    </section>
  )
}
