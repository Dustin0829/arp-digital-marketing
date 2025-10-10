"use client"

import { useState } from "react"
import { Fade } from "react-awesome-reveal"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    text: "They have an excellent understanding of social media trends! We truly appreciate their strategic approach and creativity. Communication is always clear, and they consistently deliver on time. The staff was friendly, attentive, and made sure all our requests were met. We highly recommend ARP MARKETING for anyone looking to elevate their social media presence! 👋",
    author: "Palaya Natural Farm",
    position: "Natural Farm & Agriculture Business",
    rating: 5,
    logo: "/company-logo/palaya.jpg"
  },
  {
    id: 2,
    text: "We were in a difficult situation when we discovered ARP Digital Marketing. Their team are always brainstorming new ways to elevate and push the boundaries of our power tools further. They are also transparent, communicates effectively, and are open to suggestions. Overall, they are passionate at what they do.",
    author: "Vics Construction and Sons Co.",
    position: "Construction & Power Tools Company",
    rating: 5,
    logo: "/company-logo/vicscon.jpg"
  },
  {
    id: 3,
    text: "Our experience with ARP Digital Marketing has been overwhelming positive. As their client, we are impressed by their professionalism. They have boosted our company image and as well exceeded our expectations. They are lenient and easy to work with. We highly recommend their team and expertise.",
    author: "DCA Power Tools",
    position: "Power Tools & Equipment Company",
    rating: 5,
    logo: "/company-logo/dca.jpg"
  },
  {
    id: 4,
    text: "ARP Digital Marketing helped me launch my Resorts and Hotels PH travel agency business. Their SMM, Ads and Graphics teams are A+, very easy to work with! Highly recommended if you want to get more sales. Love their work! 👍",
    author: "Ray Cayabyab",
    position: "Resorts and Hotels PH Travel Agency",
    rating: 5,
    logo: null
  }
]

export function TextTestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection('left')
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      setSlideDirection(null)
      setTimeout(() => setIsAnimating(false), 50)
    }, 300)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection('right')
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setSlideDirection(null)
      setTimeout(() => setIsAnimating(false), 50)
    }, 300)
  }

  const current = testimonials[currentTestimonial]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <Fade duration={1500}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Trusted By Brands
            </h2>
          </Fade>
          <Fade delay={300} duration={1200}>
            <p className="text-2xl md:text-3xl font-bold italic text-red-600 mb-4">
              Proven Results Across Industries
            </p>
          </Fade>
          <Fade delay={600} duration={1200}>
            <p className="text-base text-gray-600 max-w-2xl mx-auto text-pretty">
              Hear What Our Clients Say About Us
            </p>
          </Fade>
        </div>

        <div className="max-w-4xl mx-auto">
          <Fade delay={900} duration={1200}>
            <div className="relative">
              <button
                onClick={prevTestimonial}
                disabled={isAnimating}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 shadow-lg hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <button
                onClick={nextTestimonial}
                disabled={isAnimating}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 shadow-lg hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              <div className={`bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-8 md:p-12 shadow-2xl relative transition-all duration-300 ease-in-out transform ${
                slideDirection === 'left' ? 'translate-x-full opacity-0' : 
                slideDirection === 'right' ? '-translate-x-full opacity-0' : 
                'translate-x-0 opacity-100'
              }`}>
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-12 h-12 text-red-400 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-white text-lg md:text-xl leading-relaxed mb-4">
                      <span className="font-bold">{current.text.split('.')[0]}.</span>
                      {current.text.split('.').slice(1).join('.')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-red-400 font-bold text-lg mb-1">
                      {current.author}
                    </h4>
                    <p className="text-white text-sm">
                      {current.position}
                    </p>
                  </div>
                  
                  {current.logo && (
                    <div className="ml-4">
                      <Image
                        src={current.logo}
                        alt={`${current.author} logo`}
                        width={60}
                        height={60}
                        className="w-15 h-15 object-contain bg-white rounded-lg p-2"
                      />
                    </div>
                  )}
                </div>
              </div>

            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
