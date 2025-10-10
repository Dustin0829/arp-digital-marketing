  "use client"

  import Image from "next/image"
  import { Fade, Slide } from "react-awesome-reveal"

  const teamMembers = [
    {
      name: "AZE ENRIQUEZ",
      title: "CEO/FOUNDER",
      image: "/placeholder-team.jpg"
    },
    {
      name: "KAMILLE PAUS",
      title: "CHIEF OF STRATEGY",
      image: "/placeholder-team.jpg"
    },
    {
      name: "SHARI LIVETA",
      title: "HR ASSOCIATE",
      image: "/placeholder-team.jpg"
    },
    {
      name: "LUISA GONZALES",
      title: "MARKETING COORDINATOR",
      image: "/placeholder-team.jpg"
    },
    {
      name: "ARZANE MALTO",
      title: "CLIENT CONCERN SPECIALIST & MARKETING VA",
      image: "/placeholder-team.jpg"
    },
    {
      name: "JOYCE CUSTODIO",
      title: "HEAD OF SOCIAL MEDIA & BRAND STRATEGY",
      image: "/placeholder-team.jpg"
    },
    {
      name: "STEPHANIE PAPICA",
      title: "SOCIAL MEDIA STRATEGIST",
      image: "/placeholder-team.jpg"
    },
    {
      name: "CAROL CRUZADA",
      title: "CONTENT & CAMPAIGN SPECIALIST",
      image: "/placeholder-team.jpg"
    },
    {
      name: "KEI ABLIR",
      title: "HEAD OF GROWTH & PERFORMANCE MARKETING",
      image: "/placeholder-team.jpg"
    },
    {
      name: "AERON CASTILLO",
      title: "PAID MEDIA STRATEGIST",
      image: "/placeholder-team.jpg"
    },
    {
      name: "GHIDZ ARNILLO",
      title: "CREATIVE DIRECTOR",
      image: "/placeholder-team.jpg"
    },
    {
      name: "VICTOR ACOSTA JR.",
      title: "ART DIRECTOR",
      image: "/placeholder-team.jpg"
    },
  ]

  export function TeamSection() {
    return (
      <section id="team" className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
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
              {teamMembers.slice(0, 10).map((member, index) => (
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
                  <h3 className="text-base font-bold text-red-400 mb-1" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(220,38,38,0.3)' }}>
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-200 leading-tight" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(255,255,255,0.2)' }}>
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center gap-8 mt-4">
              {teamMembers.slice(10).map((member, index) => (
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
                  <h3 className="text-base font-bold text-red-400 mb-1" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(220,38,38,0.3)' }}>
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-200 leading-tight" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(255,255,255,0.2)' }}>
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
