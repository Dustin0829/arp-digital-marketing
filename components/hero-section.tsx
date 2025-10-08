"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"
import { StatsSlider } from "@/components/stats-slider"

export function HeroSection() {

  return (
    <section id="home" className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/hero.png)' }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative py-16 md:py-30">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4">
            <Fade duration={1500}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <div className="text-white">BUILDING BRANDS</div>
                <div className="inline-block">
                  <span className="bg-red-600 text-white px-4 py-2">WITH PASSION</span>
                </div>
              </h1>
            </Fade>
            <Fade delay={300} duration={1200}>
              <p className="text-lg text-white md:text-xl text-pretty max-w-2xl mx-auto">
                Transform your digital presence with expert marketing strategies that drive real results
              </p>
            </Fade>
            <Fade delay={600} duration={1000}>
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-5"
              >
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </Fade>
          </div>
        </div>
      </div>
      <StatsSlider />
    </section>
  )
}
