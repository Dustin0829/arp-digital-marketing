import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Building Brands <span className="text-primary">With Passion</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
              Transform your digital presence with expert marketing strategies that drive real results
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              <Link href="#contact">Book a Free Consultation</Link>
            </Button>
          </div>

          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-muted border border-border rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-lg">Video Placeholder</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
