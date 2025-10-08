"use client"

import Image from "next/image"
import { Fade, Slide } from "react-awesome-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "LOREM IPSUM DOLOR",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    brandDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    mission: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.",
    image: "/placeholder-project-1.jpg",
    reverse: false
  },
  {
    id: 2,
    title: "SIT AMET CONSECTETUR",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    brandDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/placeholder-project-2.jpg",
    reverse: true
  },
  {
    id: 3,
    title: "ADIPISCING ELIT SED",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    brandDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    mission: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    image: "/placeholder-project-3.jpg",
    reverse: false
  },
  {
    id: 4,
    title: "EIUSMOD TEMPOR",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    brandDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.",
    mission: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    image: "/placeholder-project-4.jpg",
    reverse: true
  }
]

export function FeaturedProjectsSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="space-y-12 md:space-y-16">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}>
              {/* Text Content */}
              <div className={`flex-1 ${project.reverse ? 'lg:pl-8' : 'lg:pr-8'}`}>
                <Slide direction={project.reverse ? "right" : "left"} triggerOnce>
                  <div className="space-y-4">
                    <div>
                      <span className="text-red-600 text-xs font-semibold tracking-wider uppercase">
                        Featured Project
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-3">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-base text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {project.brandDescription}
                    </p>
                    
                    {project.mission && (
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {project.mission}
                      </p>
                    )}
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 group"
                    >
                      Read more
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Slide>
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full">
                <Slide direction={project.reverse ? "left" : "right"} triggerOnce>
                  <div className="relative w-full">
                    <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-center text-gray-300">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gray-700 rounded-xl flex items-center justify-center border border-gray-600">
                            <span className="text-2xl sm:text-3xl">📱</span>
                          </div>
                          <p className="text-sm sm:text-base font-medium">Website Screenshot</p>
                          <p className="text-xs sm:text-sm mt-1 text-gray-400">Project {project.id}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <Fade delay={600} duration={1500}>
          <div className="text-center mt-12">
            <Button 
              size="default"
              className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300 px-6 py-5 font-semibold"
            >
                More Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  )
}
