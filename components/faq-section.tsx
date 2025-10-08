"use client"

import { useState } from "react"
import { Fade } from "react-awesome-reveal"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "How much do your digital marketing services cost?",
    answer: "Our pricing varies based on the scope of services and project requirements. We offer flexible packages for graphic design, content creation, paid ads management, and social media management. Contact us for a free consultation and customized quote tailored to your business needs."
  },
  {
    id: 2,
    question: "What is your digital marketing process?",
    answer: "Our process follows a strategic approach:\n\n1. Brand Discovery & Strategy\n2. Content Creation & Campaign Setup\n3. Implementation & Optimization\n4. Performance Tracking & Reporting\n\nWe ensure every step aligns with your business goals and delivers measurable results."
  },

  {
    id: 4,
    question: "What happens after my campaign is launched?",
    answer: "We don't just launch and leave. Our team continuously monitors performance, optimizes campaigns, provides detailed reports, and adjusts strategies based on data insights. We're committed to your long-term success and growth."
  },
  {
    id: 5,
    question: "Do you guarantee positive results?",
    answer: "We guarantee our commitment to data-driven strategies, transparent reporting, and continuous optimization. Our track record shows consistent growth for our clients through proven methodologies and dedicated support."
  },
  {
    id: 6,
    question: "What platforms do you work with?",
    answer: "We work across all major digital platforms including Facebook, Instagram, TikTok, and more. Our team stays updated with the latest platform features and best practices to maximize your reach and engagement."
  }
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-red-500/5 to-red-600/10"></div>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <Fade duration={1500}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              <span className="text-red-600 italic">FAQs</span>
            </h2>
          </Fade>
          <Fade delay={300} duration={1200}>
            <p className="text-base text-gray-900 max-w-2xl mx-auto text-pretty">
              Everything you need to know about our digital marketing services
            </p>
          </Fade>
        </div>

        <div className="max-w-4xl mx-auto">
          <Fade cascade delay={600} duration={800}>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-base md:text-lg font-semibold text-gray-900 pr-4 hover:underline transition-all duration-200">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-red-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  </button>
                  
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
