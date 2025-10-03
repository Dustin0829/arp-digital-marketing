import { Card, CardContent } from "@/components/ui/card"
import { BlankCard } from "@/components/ui/blank-card"
import { Palette, FileText, TrendingUp, Share2 } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Eye-catching visuals that capture your brand essence and engage your audience across all platforms.",
  },
  {
    icon: FileText,
    title: "Content Creation",
    description:
      "Compelling content that tells your story, connects with your audience, and drives meaningful engagement.",
  },
  {
    icon: TrendingUp,
    title: "Paid Ads Management",
    description: "Strategic ad campaigns optimized for maximum ROI across Google, Facebook, Instagram, and more.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Complete social media management to build your community, increase engagement, and grow your brand.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive digital marketing solutions tailored to elevate your brand
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-video relative overflow-hidden rounded-lg bg-muted">
                    <BlankCard className="w-full h-full" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-pretty">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
