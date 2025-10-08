"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal"

export function ContactSection() {
  const [result, setResult] = useState("")

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.currentTarget)

    formData.append("access_key", "e4cfe46a-5029-4375-a2c5-a521b34b61a0")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setResult("Form Submitted Successfully")
        if (event.currentTarget && event.currentTarget.reset) {
          event.currentTarget.reset()
        }
      } else {
        setResult(data.message || "Form submission failed. Please try again.")
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <Zoom duration={1500}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              Get In <span className="text-red-600">Touch</span>
            </h2>
          </Zoom>
          <Zoom delay={300} duration={1200}>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to start your digital marketing journey? Contact us today for a consultation
            </p>
          </Zoom>
        </div>

        <div className="max-w-2xl mx-auto">
          <Bounce duration={1500} delay={400}>
            <form onSubmit={onSubmit} className="space-y-4">
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
          </Bounce>
        </div>
      </div>
    </section>
  )
}
