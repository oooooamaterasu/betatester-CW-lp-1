"use client"

import { ChevronRight, Utensils } from "lucide-react"
import { SpatialHud } from "@/components/spatial-hud"

export function HeroSection() {
  return (
    <main id="hero" className="relative z-10 pt-36 lg:pt-44 pb-24 lg:pb-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-5 space-y-8 lg:space-y-10">
          <div
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-xs font-black uppercase"
            style={{
              background: "rgba(250,204,21,0.08)",
              border: "1px solid rgba(250,204,21,0.25)",
              color: "#facc15",
              letterSpacing: "0.2em",
            }}
          >
            <div className="w-2 h-2 rounded-full animate-ping" style={{ background: "#facc15" }} />
            {"B-Version Release Party"}
          </div>

          <div className="space-y-5">
            <h2
              className="text-xl lg:text-2xl font-light"
              style={{ letterSpacing: "0.3em", color: "rgba(147,197,253,0.7)" }}
            >
              FUTURE OF CREATION
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white text-balance">
              {"CREATORS'"}
              <br />
              <span className="relative inline-block">
                <span
                  style={{
                    background: "linear-gradient(to bottom, #fff, #fef08a, #facc15)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  WONDERLAND
                </span>
                <span
                  className="absolute -bottom-2 left-0 w-full h-1"
                  style={{ background: "#facc15", boxShadow: "0 0 15px rgba(250,204,21,0.8)" }}
                />
              </span>
            </h1>
          </div>

          <p className="text-lg lg:text-xl leading-relaxed font-light" style={{ color: "rgb(148,163,184)" }}>
            {"半透明のディスプレイが映し出す、AIと共鳴する創造の世界。"}
            <br />
            {"新たなプラットフォームの「お披露目会」へようこそ。"}
          </p>

          <div className="flex flex-wrap gap-4 lg:gap-6">
            <a
              href="https://luma.com/d1h2evee"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 lg:px-10 py-4 lg:py-5 font-black text-base lg:text-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
              style={{
                background: "#facc15",
                color: "#000",
                boxShadow: "0 0 30px rgba(250,204,21,0.4)",
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                {"参加登録はこちら"} <ChevronRight size={22} />
              </span>
              <span
                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"
                style={{ background: "rgba(255,255,255,0.2)" }}
              />
            </a>
            <div
              className="flex items-center gap-3 px-6 lg:px-8 py-4 lg:py-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Utensils size={22} style={{ color: "#ec4899" }} />
              <span className="text-sm font-bold tracking-widest" style={{ color: "rgb(203,213,225)" }}>
                CATERING INCLUDED
              </span>
            </div>
          </div>
        </div>

        {/* Right: Spatial HUD Display */}
        <div className="lg:col-span-7 relative">
          <SpatialHud />
        </div>
      </div>
    </main>
  )
}
