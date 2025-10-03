import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="h-12 w-48 bg-gray-800 border border-gray-700 rounded flex items-center justify-center mb-4">
              <span className="text-lg font-bold text-gray-300">ARP <span className="text-red-500">Digital</span> Marketing</span>
            </div>
            <p className="text-gray-300 max-w-md text-pretty">
              Building brands with <span className="text-red-400">passion</span> through innovative digital marketing strategies that deliver measurable
              results.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-red-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Graphic Design</li>
              <li className="text-gray-300">Content Creation</li>
              <li className="text-gray-300">Paid Ads Management</li>
              <li className="text-gray-300">Social Media Management</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ARP Digital Marketing. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/arpdigitalmarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/arpdigitalmarketing_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/arpdigitalmarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
