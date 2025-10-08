"use client"

import Image from "next/image"
import { Fade, Slide } from "react-awesome-reveal"

const teamMembers = [
  {
    name: "Alex",
    title: "FOUNDER & CEO",
    image: "/placeholder-team.jpg"
  },
  {
    name: "Brigitte",
    title: "SOCIAL MEDIA MANAGER",
    image: "/placeholder-team.jpg"
  },
  {
    name: "Reg",
    title: "PAID ADS SPECIALIST",
    image: "/placeholder-team.jpg"
  },
  {
    name: "John",
    title: "CONTENT CREATOR",
    image: "/placeholder-team.jpg"
  },
  {
    name: "Ryan",
    title: "GRAPHIC DESIGNER",
    image: "/placeholder-team.jpg"
  },
  {
    name: "Rey",
    title: "MARKETING STRATEGIST",
    image: "/placeholder-team.jpg"
  },
  {
    name: "Marc",
    title: "BRAND MANAGER",
    image: "/placeholder-team.jpg"
  },
  {
    name: "Jas",
    title: "EMAIL MARKETING SPECIALIST",
    image: "/placeholder-team.jpg"
  },
  {
    name: "Kiel",
    title: "VIRTUAL ASSISTANT",
    image: "/placeholder-team.jpg"
  },
  {
    name: "Ben",
    title: "VIDEO EDITOR",
    image: "/placeholder-team.jpg"
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-red-800 to-gray-500">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <Fade duration={1500}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              <span className="text-white">Meet The Team Behind{" "}</span>
              <span className="text-red-400 italic"><br />ARP Digital Marketing</span>
            </h2>
          </Fade>
          <Fade delay={300} duration={1200}>
            <p className="text-base text-gray-200 max-w-2xl mx-auto text-pretty">
              Your partners in strategic growth.
            </p>
          </Fade>
        </div>

        <Slide direction="up" cascade damping={0.2} triggerOnce>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="text-center group"
              >
                <div className="relative mb-3 mx-auto w-36 h-40 sm:w-40 sm:h-44 md:w-44 md:h-52">
                  <div className="w-full h-full bg-gray-700 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center bg-gray-600">
                      <div className="text-center text-gray-400">
                        <div className="text-2xl sm:text-3xl mb-1">👤</div>
                        <div className="text-xs">Placeholder</div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-base font-bold text-red-400 mb-1">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-200 leading-tight">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </section>
  )
}
