"use client"

import Image from "next/image"
import { Fade, Slide } from "react-awesome-reveal"

const clientLogos = [
  { name: "Vicscon", image: "/company-logo/vicscon.jpg" },
  { name: "DCA", image: "/company-logo/dca.jpg" },
  { name: "Offset", image: "/company-logo/offset.jpg" },
  { name: "7Twenty7", image: "/company-logo/7twenty7.jpg" },
  { name: "Ang Ninuno", image: "/company-logo/ang-ninuno.jpg" },
  { name: "Aftermarket", image: "/company-logo/aftermarket.jpg" },
  { name: "Secret Fresh", image: "/company-logo/secret-fresh.jpg" },
  { name: "MNLA", image: "/company-logo/mnla.webp" },
  { name: "KCO", image: "/company-logo/kco.jpg" },
]

export function ClientsCarousel() {
  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <Fade duration={1500} triggerOnce>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Fade duration={1500}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Our <span className="text-red-600">Top Clients</span>
            </h2>
            </Fade>
            <Fade delay={300} duration={1200}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Trusted by leading brands to deliver exceptional digital marketing results
              </p>
            </Fade>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedLogos.map((client, index) => (
                <div key={`${client.name}-${index}`} className="flex-shrink-0 w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 px-4">
                      <div className="bg-white p-4 md:p-6 rounded-lg transition-all duration-300 hover:scale-105">
                    <div className="relative w-full h-16 md:h-20 lg:h-24">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 120px, (max-width: 1024px) 160px, 200px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}
