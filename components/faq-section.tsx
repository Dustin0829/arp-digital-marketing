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
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-red-500/3 to-red-600/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Fade duration={1500}>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                <span className="text-red-600">FAQs</span>
              </h2>
            </div>
          </Fade>
          <Fade delay={300} duration={1200}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Get answers to the most common questions about our digital marketing services
            </p>
          </Fade>
        </div>

        <div className="max-w-3xl mx-auto">
          <Fade cascade delay={600} duration={800}>
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl hover:border-red-200 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-red-50/50 hover:to-transparent transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                        <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4 group-hover:text-red-700 transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openItems.includes(faq.id) 
                          ? 'bg-red-600 text-white rotate-180' 
                          : 'bg-gray-100 text-red-600 group-hover:bg-red-100'
                      }`}>
                        {openItems.includes(faq.id) ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {openItems.includes(faq.id) && (
                    <div className="px-8 pb-6 animate-in slide-in-from-top-2 duration-300">
                      <div className="border-t border-gray-100 pt-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                          <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Fade>
        </div>

        <Fade delay={1200} duration={1000}>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-50 rounded-full border border-red-200">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-red-700 font-medium">Still have questions?</span>
              <a href="#contact" className="text-red-600 hover:text-red-700 font-semibold underline">
                Contact us
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}
