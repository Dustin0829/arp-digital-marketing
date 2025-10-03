"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import { Fade, Slide } from "react-awesome-reveal"

export function ContactSection() {
  const [result, setResult] = useState("")

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.currentTarget)

    formData.append("access_key", "e4cfe46a-5029-4375-a2c5-a521b34b61a0")

    try {
      console.log("Sending form data to Web3Forms...")
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      console.log("Response status:", response.status)
      const data = await response.json()
      console.log("Response data:", data)

      if (data.success) {
        setResult("Form Submitted Successfully")
        // Reset form safely
        if (event.currentTarget && event.currentTarget.reset) {
          event.currentTarget.reset()
        }
      } else {
        console.log("Web3Forms Error:", data)
        setResult(data.message || "Form submission failed. Please try again.")
      }
    } catch (error) {
      console.log("Network/Request Error:", error)
      setResult("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Fade duration={1500}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Get In <span className="text-red-600">Touch</span>
            </h2>
          </Fade>
          <Fade delay={300} duration={1200}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to start your digital marketing journey? Contact us today for a free consultation
            </p>
          </Fade>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Slide direction="left" duration={1500} delay={400}>
            <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:arpdigitalmarketingservices@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      arpdigitalmarketingservices@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    0949 412 1734

                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/arpdigitalmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/arpdigitalmarketing_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/arp-digital-marketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@arpdigitalmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
            </div>
          </Slide>

          <Slide direction="right" duration={1500} delay={600}>
            <div>
            <form onSubmit={onSubmit} className="space-y-6">
              <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />
              
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="bg-background"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">
                Send Message
              </Button>
              {result && (
                <div className={`text-center p-3 rounded-md ${
                  result === "Form Submitted Successfully" 
                    ? "bg-green-100 text-green-800 border border-green-200" 
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}>
                  {result}
                </div>
              )}
            </form>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  )
}
