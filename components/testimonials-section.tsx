"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const clientVideos = [
  {
    id: 1,
    src: "/client1.mp4",
    name: "Nica",
    company: "Corekit",
  },
  {
    id: 2,
    src: "/client2.mp4",
  },
  {
    id: 3,
    src: "/client3.mp4",
    name: "Josh Mojica",
    company: "KCO",
  },
  {
    id: 4,
    src: "/client4.mp4",
    name: "Sir JD",
    company: "Ang Pinuno",
  },
  {
    id: 5,
    src: "/client5.mp4",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(2) // Start with middle video (index 2)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const handleUserInteraction = () => {
    if (!hasUserInteracted) {
      setHasUserInteracted(true)
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    const newMutedState = !isMuted
    setIsMuted(newMutedState)
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = newMutedState
      }
    })
  }

  const playMiddleVideo = () => {
    handleUserInteraction()
    
    // Pause all videos first
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause()
      }
    })
    
    // Play only the middle video (index 2)
    const middleVideo = videoRefs.current[2]
    if (middleVideo) {
      middleVideo.muted = isMuted
      middleVideo.play().catch(console.error)
      setPlayingVideoIndex(2)
    }
  }

  const nextVideo = () => {
    console.log('Next video clicked')
    handleUserInteraction()
    // Stop current playing video
    setPlayingVideoIndex(null)
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    })
    setCurrentIndex((prev) => (prev + 1) % clientVideos.length)
  }

  const prevVideo = () => {
    console.log('Previous video clicked')
    handleUserInteraction()
    // Stop current playing video
    setPlayingVideoIndex(null)
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    })
    setCurrentIndex((prev) => (prev - 1 + clientVideos.length) % clientVideos.length)
  }

  const goToVideo = (index: number) => {
    handleUserInteraction()
    // Stop current playing video
    setPlayingVideoIndex(null)
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    })
    setCurrentIndex(index)
  }

  const getRotatedVideos = () => {
    const rotated = [...clientVideos]
    for (let i = 0; i < currentIndex; i++) {
      rotated.push(rotated.shift()!)
    }
    return rotated
  }

  const rotatedVideos = getRotatedVideos()

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Button
            onClick={prevVideo}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-30 bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 p-0 shadow-lg cursor-pointer"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={nextVideo}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-30 bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 p-0 shadow-lg cursor-pointer"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="flex gap-6 justify-center items-center overflow-hidden" style={{ pointerEvents: 'none' }}>
            {rotatedVideos.map((video, index) => (
              <div 
                key={video.id} 
                className={`relative transition-all duration-500 ${
                  index === 2 
                    ? 'z-20' 
                    : index === 1 || index === 3
                    ? 'z-10'
                    : 'opacity-70 z-0'
                }`}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className={`object-cover rounded-lg shadow-xl ${
                    index === 2 
                      ? 'w-80 h-[500px] md:w-96 md:h-[600px]' 
                      : index === 1 || index === 3
                      ? 'w-72 h-88 md:w-80 md:h-[520px]'
                      : 'w-64 h-80 md:w-72 md:h-96'
                  }`}
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {index === 2 && playingVideoIndex !== 2 && (
                  <div className="absolute inset-0 flex items-center justify-center z-40">
                    <Button
                      onClick={playMiddleVideo}
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 p-0 shadow-lg cursor-pointer"
                      aria-label="Play video"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </Button>
                  </div>
                )}
                

                {index === 2 && (
                  <div className="absolute bottom-4 right-4 z-50">
                    <Button
                      onClick={toggleMute}
                      className="bg-red-600 hover:bg-red-700 rounded-full p-2 shadow-lg cursor-pointer"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                      style={{ pointerEvents: 'auto' }}
                    >
                      {isMuted ? (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.617 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.617l3.766-3.794a1 1 0 011.617.794zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.617 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.617l3.766-3.794a1 1 0 011.617.794zM12.293 7.293a1 1 0 111.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </Button>
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                  <div className="text-white">
                    <h3 className="text-lg font-bold">{video.name}</h3>
                    <p className="text-sm text-gray-300">{video.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {clientVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVideo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
