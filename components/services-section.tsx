import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Fade, Slide } from "react-awesome-reveal"

const services = [
  {
    number: 1,
    title: "Social Media Management",
    description: "We plan, post, and stay consistent so your brand shows up and stands out, every time.",
    image: "/services/social-media-management.jpg",
  },
  {
    number: 2,
    title: "Paid Ads Management",
    description: "Our ad campaigns are built around your business goals and ideal audience, powered by data, guided by strategy and focused on the results.",
    image: "/services/paid-ads.jpg",
  },
  {
    number: 3,
    title: "Graphic Design",
    description: "We craft branded visuals that grab attention, stop the scroll, and tell your story at first glance.",
    image: "/services/graphic-design.jpg",
  },
  {
    number: 4,
    title: "Copywriting",
    description: "We know what to say and how to say it. Let us help you talk to your audience in a way that actually clicks.",
    image: "/services/copywriting.jpg",
  },
  {
    number: 5,
    title: "Marketing Virtual Assistance",
    description: "Get the daily report you need from someone trained in digital marketing and ready to execute.",
    image: "/services/marketing-virtual.jpg",
  },
  {
    number: 6,
    title: "Email Marketing",
    description: "Build relationships right from the inbox with targeted campaigns that nurture and convert.",
    image: "/services/email-marketing.jpg",
  },
  {
    number: 7,
    title: "Content Creation",
    description: "We create photo and video content that tells your story, stops the scroll, and strengthens your online presence.",
    image: "/services/content-creation.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Fade duration={1500}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Our <span className="text-red-600">Services</span>
            </h2>
          </Fade>
          <Fade delay={300} duration={1200}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive digital marketing solutions tailored to elevate your brand
            </p>
          </Fade>
        </div>

        <Slide direction="up" cascade damping={0.2} triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {services.slice(0, 4).map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600"></div>
                
                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">
                        OUR SERVICES
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-black leading-tight">{service.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Slide>

        <Slide direction="up" cascade damping={0.3} triggerOnce delay={400}>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
              {services.slice(4, 7).map((service) => (
                <Card
                  key={service.title}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600"></div>
                  
                  <CardContent className="p-0">
                    <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">
                          OUR SERVICES
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-bold text-black leading-tight">{service.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Slide>
      </div>
    </section>
  )
}
