"use client"

import { useEffect, useRef } from "react"

export function WonderlandBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    const stars: { x: number; y: number; r: number; speed: number; opacity: number }[] = []

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function initStars() {
      stars.length = 0
      const count = Math.floor((window.innerWidth * window.innerHeight) / 4000)
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          r: Math.random() * 1.5 + 0.3,
          speed: Math.random() * 0.3 + 0.05,
          opacity: Math.random() * 0.8 + 0.2,
        })
      }
    }

    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const star of stars) {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 230, 255, ${star.opacity})`
        ctx.fill()
        star.y -= star.speed
        if (star.y < -5) {
          star.y = canvas.height + 5
          star.x = Math.random() * canvas.width
        }
      }
      animId = requestAnimationFrame(draw)
    }

    resize()
    initStars()
    draw()

    window.addEventListener("resize", () => {
      resize()
      initStars()
    })

    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Nebula Gradients */}
      <div
        className="absolute w-[80%] h-[80%] rounded-full animate-glow-pulse"
        style={{ top: "-20%", left: "-10%", background: "rgba(124,58,237,0.18)" }}
      />
      <div
        className="absolute w-[70%] h-[70%] rounded-full animate-glow-pulse"
        style={{ bottom: "-10%", right: "-10%", background: "rgba(37,99,235,0.18)", animationDelay: "3s" }}
      />
      <div
        className="absolute w-[40%] h-[40%] rounded-full animate-glow-pulse"
        style={{ top: "30%", right: "10%", background: "rgba(219,39,119,0.08)", animationDelay: "1.5s" }}
      />

      {/* Floating Island Orbs */}
      <div
        className="absolute w-32 h-32 rounded-full border animate-float"
        style={{
          top: "20%",
          left: "15%",
          background: "linear-gradient(135deg, rgba(255,255,255,0.08), transparent)",
          borderColor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
        }}
      />
      <div
        className="absolute w-20 h-20 rounded-full border animate-float"
        style={{
          bottom: "25%",
          right: "20%",
          background: "linear-gradient(135deg, rgba(255,255,255,0.08), transparent)",
          borderColor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute w-14 h-14 rounded-full border animate-float"
        style={{
          top: "60%",
          left: "8%",
          background: "linear-gradient(135deg, rgba(250,204,21,0.06), transparent)",
          borderColor: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(4px)",
          animationDelay: "4s",
        }}
      />

      {/* Canvas star particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Scanline overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div
          className="w-full h-40 animate-scanline-sweep"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(250,204,21,0.4), transparent)" }}
        />
      </div>
    </div>
  )
}
