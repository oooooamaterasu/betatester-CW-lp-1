"use client"

import { useScrollAudio } from "@/hooks/use-scroll-audio"
import { WonderlandBackground } from "@/components/wonderland-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { KuriemiSection } from "@/components/kuriemi-section"
import { EventSection } from "@/components/event-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  useScrollAudio()

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#020617", color: "#fff" }}>
      <WonderlandBackground />
      <Navigation />
      <HeroSection />
      <KuriemiSection />
      <EventSection />
      <SiteFooter />
    </div>
  )
}
