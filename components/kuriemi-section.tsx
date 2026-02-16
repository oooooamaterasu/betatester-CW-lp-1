"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"

export function KuriemiSection() {
  return (
    <section id="kuriemi" className="relative z-10 py-20 lg:py-24 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative group overflow-hidden rounded-3xl"
          style={{
            border: "1px solid rgba(250,204,21,0.25)",
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(24px)",
          }}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(250,204,21,0.04), rgba(168,85,247,0.04))" }}
          />

          {/* Scanline effect for digital contest emphasis */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(250,204,21,0.3) 2px, rgba(250,204,21,0.3) 4px)",
              }}
            />
            <div
              className="absolute w-full h-1 animate-scan"
              style={{ background: "#facc15", boxShadow: "0 0 20px #facc15", opacity: 0.6 }}
            />
          </div>

          <div className="relative flex flex-col md:flex-row items-center p-8 lg:p-12 gap-10 lg:gap-16">
            {/* Banner Image with Scan effect */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 shrink-0">
              <div
                className="absolute inset-0 rounded-2xl animate-pulse"
                style={{ border: "2px solid rgba(250,204,21,0.4)" }}
              />
              <div
                className="absolute top-0 left-0 w-full h-1 animate-scan z-10"
                style={{ background: "#facc15", boxShadow: "0 0 15px #facc15" }}
              />
              <div
                className="w-full h-full rounded-2xl overflow-hidden relative"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Image
                  src="/images/KASFC_2.jpeg"
                  alt="KURIEMI AI SHORT FILM CONTEST"
                  fill
                  priority
                  unoptimized
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
                />
              </div>
              {/* Corner markers */}
              <div className="absolute top-2 left-2 w-5 h-5 z-10" style={{ borderTop: "2px solid #facc15", borderLeft: "2px solid #facc15" }} />
              <div className="absolute top-2 right-2 w-5 h-5 z-10" style={{ borderTop: "2px solid #facc15", borderRight: "2px solid #facc15" }} />
              <div className="absolute bottom-2 left-2 w-5 h-5 z-10" style={{ borderBottom: "2px solid #facc15", borderLeft: "2px solid #facc15" }} />
              <div className="absolute bottom-2 right-2 w-5 h-5 z-10" style={{ borderBottom: "2px solid #facc15", borderRight: "2px solid #facc15" }} />
            </div>

            <div className="space-y-5 lg:space-y-6">
              <div
                className="inline-block px-4 py-1 font-black text-xs"
                style={{ background: "#facc15", color: "#000" }}
              >
                TOPIC
              </div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white text-balance">
                KURIEMI AI Short Film Contest
                <br />
                <span className="text-lg md:text-2xl lg:text-3xl font-bold" style={{ color: "rgb(148,163,184)" }}>
                  {"produced by Creators' Wonderland"}
                </span>
              </h3>
              <p
                className="text-base lg:text-lg max-w-2xl leading-relaxed"
                style={{ color: "rgb(148,163,184)" }}
              >
                {"伝説的なAIクリエイターのミューズ「くりえみ」の公式アセットを使用した、次世代のクリエイティブ・バトル。ワンダーランドが提供する究極の素材セットで、あなたの想像力の限界を超えろ。"}
              </p>
              <button
                className="flex items-center gap-3 font-bold hover:translate-x-2 transition-transform"
                style={{ color: "#facc15" }}
              >
                {"詳細を見る"} <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
