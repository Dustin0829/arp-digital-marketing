"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Fade, Slide } from "react-awesome-reveal"

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlayPause = () => {
    console.log('togglePlayPause called, isPlaying:', isPlaying)
    if (videoRef.current) {
      if (isPlaying) {
        console.log('Pausing video')
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        console.log('Playing video')
        videoRef.current.play().catch(console.error)
        setIsPlaying(true)
      }
    } else {
      console.log('Video ref is null')
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.pause()
      setIsPlaying(false)
    }
  }, [])

  return (
    <section id="home" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Fade duration={1500}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                <div className="text-black">BUILDING BRANDS</div>
                <div className="inline-block">
                  <span className="bg-red-600 text-white px-4 py-2">WITH PASSION</span>
                </div>
              </h1>
            </Fade>
            <Fade delay={300} duration={1200}>
              <p className="text-xl text-black md:text-2xl text-pretty">
                Transform your digital presence with expert marketing strategies that drive real results
              </p>
            </Fade>
            <Fade delay={600} duration={1000}>
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6"
              >
                <Link href="#contact">Book a Free Consultation</Link>
              </Button>
            </Fade>
          </div>

              <Slide direction="right" duration={1500} delay={200}>
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              muted
              loop
              playsInline
              onClick={togglePlayPause}
            >
              <source src="/hero-vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={(e) => {
                    console.log('Play button clicked')
                    e.stopPropagation()
                    togglePlayPause()
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 p-0 shadow-lg"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
            )}

            <div className="absolute bottom-4 right-4">
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleMute()
                }}
                className="bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 p-0 shadow-lg"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </Button>
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
          </Slide>
        </div>
      </div>
    </section>
  )
}
