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
                  className="h-16 w-auto"
                />
              </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-red-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="#contact">Book Consultation</Link>
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
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white w-full">
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Book Consultation
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
