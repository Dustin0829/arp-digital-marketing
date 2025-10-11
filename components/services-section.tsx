"use client"

import { useState } from "react"
import { Fade } from "react-awesome-reveal"
import { Button } from "@/components/ui/button"
import { Monitor, Megaphone, Image as ImageIcon, Users, Mail, Camera, ShoppingBag, Headphones, Code, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: "graphic-design",
    name: "Graphic Design",
    icon: ImageIcon,
    details: {
      title: "Graphic Design",
      steps: [
        {
          number: 1,
          title: "Brand Discovery",
          description: "We start by understanding your brand identity, values, and visual direction to ensure every design aligns with your goals.",
          image: "/service/discovery.png"
        },
        {
          number: 2,
          title: "Concept & Creation",
          description: "From initial sketches to refined visuals — we craft designs that grab attention and communicate your message clearly.",
          image: "/service/creation.png"
        },
        {
          number: 3,
          title: "Finalization & Delivery",
          description: "We fine-tune the details and deliver print- and digital-ready assets that make your brand look its best.",
          image: "/service/delivery.png"
        }
      ]
    }
  },
  {
    id: "content-creation",
    name: "Content Creation",
    icon: Camera,
    details: {
      title: "Content Creation",
      steps: [
        {
          number: 1,
          title: "Strategy & Planning",
          description: "We identify your target audience, define your message, and plan content that resonates across platforms.",
          image: "/service/strategy.png"
        },
        {
          number: 2,
          title: "Production",
          description: "From photo and video shoots to written copy, we produce engaging, high-quality content tailored to your brand.",
          image: "/service/production.png"
        },
        {
          number: 3,
          title: "Publishing & Optimization",
          description: "We optimize every piece for performance, ensuring your content drives engagement and delivers results.",
          image: "/service/publishing.png"
        }
      ]
    }
  },
  {
    id: "paid-ads",
    name: "Social Media Advertising",
    icon: Megaphone,
    details: {
      title: "Paid Ads Management",
      steps: [
        {
          number: 1,
          title: "Market Research & Setup",
          description: "We analyze your target audience, competitors, and goals to build ad campaigns that reach the right people.",
          image: "/service/research.png"
        },
        {
          number: 2,
          title: "Campaign Execution",
          description: "We create compelling visuals, write persuasive ad copy, and launch campaigns across top-performing platforms.",
          image: "/service/campaign.png"
        },
        {
          number: 3,
          title: "Monitoring & Optimization",
          description: "We continuously track performance, A/B test creatives, and adjust strategies to maximize ROI.",
          image: "/service/monitoring.png"
        }
      ]
    }
  },
  {
    id: "social-media",
    name: "Social Media Management",
    icon: Users,
    details: {
      title: "Social Media Management",
      steps: [
        {
          number: 1,
          title: "Social Audit & Strategy",
          description: "We evaluate your current presence and create a strategy that boosts visibility and aligns with your brand voice.",
          image: "/service/audit.png"
        },
        {
          number: 2,
          title: "Content Scheduling & Engagement",
          description: "We plan, post, and interact with your audience consistently to keep your community active and engaged.",
          image: "/service/schedule.png"
        },
        {
          number: 3,
          title: "Performance Tracking",
          description: "We provide detailed reports and insights to help you understand what's working and what to improve next.",
          image: "/service/tracking.png"
        }
      ]
    }
  },
  {
    id: "virtual-assistance",
    name: "Virtual Assistance",
    icon: Headphones,
    details: {
      title: "Virtual Assistance",
      steps: [
        {
          number: 1,
          title: "Lead Qualification & Capture",
          description: "We identify and capture high-quality leads through various channels, ensuring your sales pipeline stays full.",
          image: "/service/lead.png"
        },
        {
          number: 2,
          title: "Lead Nurturing & Follow-up",
          description: "We maintain consistent communication with prospects, nurturing relationships until they're ready to convert.",
          image: "/service/nurture.png"
        },
        {
          number: 3,
          title: "CRM Management & Reporting",
          description: "We organize all lead data, track interactions, and provide detailed reports on lead performance and conversion rates.",
          image: "/service/report.png"
        }
      ]
    }
  },
  {
    id: "web-development",
    name: "Web Design & Development",
    icon: Code,
    details: {
      title: "Web Design & Development",
      steps: [
        {
          number: 1,
          title: "Design & Planning",
          description: "We create stunning, user-friendly designs that reflect your brand and provide an exceptional user experience.",
          image: "/service/design.png"
        },
        {
          number: 2,
          title: "Development & Implementation",
          description: "We build responsive, fast-loading websites using the latest technologies and best practices.",
          image: "/service/implementation.png"
        },
        {
          number: 3,
          title: "Testing & Launch",
          description: "We thoroughly test all functionality, optimize performance, and ensure a smooth launch with ongoing support.",
          image: "/service/launch.png"
        }
      ]
    }
  },
  {
    id: "tiktok-live",
    name: "TikTok Live Selling and Management Services",
    icon: Video,
    details: {
      title: "TikTok Live Selling and Management Services",
      steps: [
        {
          number: 1,
          title: "Live Stream Setup & Strategy",
          description: "We set up your TikTok Live selling infrastructure and create engaging strategies to maximize sales during live sessions.",
          image: "/service/contentcreation.png"
        },
        {
          number: 2,
          title: "Content Creation & Management",
          description: "We create compelling live content, manage your live streams, and engage with your audience in real-time.",
          image: "/service/livestream.png"
        },
        {
          number: 3,
          title: "Sales Optimization & Analytics",
          description: "We track performance metrics, optimize conversion rates, and provide insights to improve your live selling results.",
          image: "/service/optimization.png"
        }
      ]
    }
  }
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>("graphic-design")

  const activeService = services.find(s => s.id === selectedService)

  return (
    <section id="services" className="py-12 md:py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <Fade duration={1500}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              Ready to <span className="text-red-600">Grow</span> Your Brand?
            </h2>
          </Fade>
          <Fade delay={300} duration={1200}>
            <p className="text-base text-gray-300 max-w-2xl mx-auto text-pretty">
            Discover what each service can do for you
            </p>
          </Fade>
        </div>

        <Fade delay={500} duration={1500}>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-4xl mx-auto mb-12">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
                  className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 ${
                    selectedService === service.id
                      ? 'bg-white text-gray-900'
                      : 'bg-transparent text-white border-2 border-gray-600 hover:border-gray-400'
                  }`}
                >
                  {service.name}
                </button>
              )
            })}
          </div>
        </Fade>

        {activeService && (
          <Fade key={activeService.id} duration={800}>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {activeService.details.steps.map((step) => (
                  <div key={step.number} className="text-center">
                    <div className="mb-4">
                      {(activeService.id === "graphic-design" || activeService.id === "content-creation" || activeService.id === "paid-ads" || activeService.id === "social-media" || activeService.id === "virtual-assistance" || activeService.id === "web-development" || activeService.id === "tiktok-live") && (step as any).image ? (
                        <div className="w-16 h-16 mx-auto flex items-center justify-center">
                          <Image
                            src={(step as any).image}
                            alt={step.title}
                            width={64}
                            height={64}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 mx-auto bg-red-600 rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-bold">{step.number}</span>
                        </div>
                      )}
                    </div>
                    <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  asChild
                  className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300 px-8 py-6 text-base font-semibold rounded-full"
                >
                  <Link href="/contact">Book a Free Consultation</Link>
                </Button>
              </div>
            </div>
          </Fade>
        )}
      </div>
    </section>
  )
}
