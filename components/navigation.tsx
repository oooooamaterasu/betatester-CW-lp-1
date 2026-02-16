"use client"

import { useState, useEffect } from "react"
import { Sparkles, Menu, X } from "lucide-react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4"
          : "py-8"
      }`}
      style={{
        background: scrolled ? "rgba(0,0,0,0.4)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg animate-pulse" style={{ background: "hsl(var(--accent))", filter: "blur(12px)", opacity: 0.12 }} />
            <div
              className="relative w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: "#000", border: "1px solid hsl(var(--accent) / 0.5)" }}
            >
              <Sparkles className="text-accent" size={22} />
            </div>
          </div>
          <span
            className="text-xl font-black tracking-widest"
            style={{
              background: "linear-gradient(to right, #fff, #f0c75e, #d4af37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {"CREATORS' WONDERLAND"}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest" style={{ color: "rgb(148 163 184)" }}>
          <a href="#" className="hover:text-accent transition-colors">VISION</a>
          <a href="#" className="hover:text-accent transition-colors">PROJECTS</a>
          <a href="#" className="hover:text-accent transition-colors">COMMUNITY</a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 flex flex-col gap-4 text-sm font-bold tracking-widest" style={{ color: "rgb(148 163 184)" }}>
          <a href="#" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>VISION</a>
          <a href="#" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>PROJECTS</a>
          <a href="#" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>COMMUNITY</a>
        </div>
      )}
    </nav>
  )
}
