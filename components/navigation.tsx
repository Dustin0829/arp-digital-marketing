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
    <nav className={`fixed top-0 left-0 right-0 z-50 h-[70px] transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 h-full">
        <div className="flex items-center justify-center h-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
              <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/footer-logo.png"
                    alt="ARP Digital Marketing"
                    width={120}
                    height={28}
                    className="h-7 w-auto"
                  />
                </Link>
                
                <div className="w-px h-6 bg-gray-400"></div>
                
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-red-600 hover:text-white text-gray-700"
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
                <div className="w-px h-6 bg-gray-400"></div>
                <Button 
                  asChild
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-full"
                >
                  <Link href="#contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <button className="md:hidden absolute top-4 right-4 text-gray-700 bg-white/90 backdrop-blur-sm rounded-full p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-4 flex flex-col gap-3 shadow-xl border border-gray-200/50">
            <div className="flex justify-center mb-2">
              <Image
                src="/footer-logo.png"
                alt="ARP Digital Marketing"
                width={120}
                height={28}
                className="h-6 w-auto"
              />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-700 hover:text-white hover:bg-red-600 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
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
            <div className="border-t border-gray-300 my-2"></div>
            <Button 
              asChild
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-2 rounded-lg"
            >
              <Link href="#contact">Book Consultation</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
