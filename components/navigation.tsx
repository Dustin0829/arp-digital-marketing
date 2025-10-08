"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#testimonials", label: "Testimonials" },
  ]

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      clearTimeout(scrollTimeout)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      scrollTimeout = setTimeout(() => {
        setIsVisible(true)
      }, 150)

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [lastScrollY])

  return (
    <nav className={`sticky top-0 z-50 bg-white border-b border-border h-[70px] transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="ARP Digital Marketing"
              width={200}
              height={48}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground hover:text-red-600 transition-colors font-medium"
                onClick={(e) => {
                  if (window.location.pathname === '/contact') {
                    return
                  }
                  e.preventDefault()
                  const element = document.querySelector(link.href.replace('/', ''))
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Button 
              asChild
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2"
            >
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border px-6 py-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground hover:text-red-600 transition-colors font-medium"
                onClick={(e) => {
                  setIsOpen(false)
                  if (window.location.pathname === '/contact') {
                    return
                  }
                  e.preventDefault()
                  const element = document.querySelector(link.href.replace('/', ''))
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white w-full text-sm"
            >
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
