"use client"

import { useEffect, useRef, useState } from "react"

interface SectionAudio {
  sectionId: string
  audioPath: string
}

const SECTIONS: SectionAudio[] = [
  { sectionId: "hero", audioPath: "/audio/#" },
  { sectionId: "kuriemi", audioPath: "/audio/#" },
  { sectionId: "register", audioPath: "/audio/#" },
]

export function useScrollAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [currentSection, setCurrentSection] = useState<string>("")
  const currentSectionRef = useRef<string>("")

  useEffect(() => {
    // Create audio element
    if (!audioRef.current) {
      const audio = new Audio()
      audio.volume = 0.1 // Set 
      audio.loop = true
      audioRef.current = audio
    }

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      let activeSection = ""

      SECTIONS.forEach(({ sectionId }) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if section is in viewport (top 50% of the screen)
          if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5) {
            activeSection = sectionId
          }
        }
      })

      // Change audio if section changed
      if (activeSection && activeSection !== currentSectionRef.current) {
        currentSectionRef.current = activeSection
        setCurrentSection(activeSection)

        const section = SECTIONS.find((s) => s.sectionId === activeSection)
        if (section && audioRef.current) {
          audioRef.current.src = section.audioPath
          audioRef.current.currentTime = 0
          audioRef.current.play().catch(() => {
            // Autoplay might be blocked; user interaction required
          })
        }
      } else if (!activeSection && currentSectionRef.current) {
        // No section in view
        currentSectionRef.current = ""
        setCurrentSection("")
        if (audioRef.current) {
          audioRef.current.pause()
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { currentSection }
}
