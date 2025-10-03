"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border h-[80px]">
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="ARP Digital Marketing"
                  width={280}
                  height={64}
                  className="h-14 w-auto"
                />
              </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-red-600 transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(link.href)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Book Consultation
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-red-600 transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  const element = document.querySelector(link.href)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white w-full"
              onClick={() => {
                setIsOpen(false)
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Book Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
