"use client"

import { useState, useEffect, useRef } from "react"
import { Activity, Globe, Zap, ShieldCheck } from "lucide-react"

function useSystemLogs() {
  const [logs, setLogs] = useState<string[]>([])

  useEffect(() => {
    const entries = [
      "[SYS] Neural link established ...",
      "[AI] Model sync: v4.2.7 online",
      "[NET] Latency: 12ms | Seoul CDN",
      "[GPU] Cluster temp: 42C nominal",
      "[SEC] Auth token refreshed OK",
      "[SYS] Memory alloc: 87.3% used",
      "[AI] Creative engine: READY",
      "[NET] Peer nodes: 2,847 active",
      "[SYS] Heartbeat OK [14ms]",
      "[AI] Inference pipeline warm",
    ]
    let idx = 0
    setLogs(entries.slice(0, 4))
    const interval = setInterval(() => {
      idx = (idx + 1) % entries.length
      setLogs((prev) => [...prev.slice(-3), entries[idx]])
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return logs
}

export function SpatialHud() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: -12 })
  const logs = useSystemLogs()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / rect.width
    const dy = (e.clientY - cy) / rect.height
    setTilt({ x: dy * 8, y: -12 + dx * 12 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: -12 })
  }

  const barData = [40, 70, 45, 90, 65, 80, 50, 85, 95, 60, 75, 55]

  return (
    <div
      ref={containerRef}
      className="relative perspective-1200"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main HUD Panel */}
      <div
        className="relative z-20 transition-transform duration-700 ease-out animate-hud-flicker"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            background: "hsl(var(--accent) / 0.06)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid hsl(var(--accent) / 0.25)",
            boxShadow: "0 0 60px hsl(var(--accent) / 0.12), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* HUD Header */}
          <div
            className="flex items-center justify-between px-6 lg:px-8 py-5"
            style={{ borderBottom: "1px solid hsl(var(--accent) / 0.15)", background: "hsl(var(--accent) / 0.03)" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-7 h-7 rounded-full animate-spin"
                style={{
                  border: "2px solid hsl(var(--accent))",
                  borderTopColor: "transparent",
                  animationDuration: "3s",
                }}
              />
              <span className="font-mono text-accent font-bold tracking-tight text-sm">
                DIYYO : SYSTEM_OVERVIEW
              </span>
            </div>
            <div className="flex gap-3">
              <Activity size={16} style={{ color: "hsl(var(--accent) / 0.4)" }} />
              <Globe size={16} style={{ color: "hsl(var(--accent) / 0.4)" }} />
            </div>
          </div>

          {/* HUD Content Grid */}
          <div className="p-5 lg:p-8 grid grid-cols-2 gap-5 lg:gap-8">
            {/* Circular Gauge */}
            <div
              className="p-5 rounded-xl space-y-4"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-mono text-[#facc15] tracking-wide">CREATIVE_SYNC</span>
                <span className="text-2xl font-mono font-black text-white">88%</span>
              </div>
              <div className="relative h-24 flex items-center justify-center">
                <svg className="w-20 h-20" style={{ transform: "rotate(-90deg)" }}>
                  <circle cx="40" cy="40" r="35" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="4"
                    strokeDasharray="220"
                    className="animate-gauge-fill"
                    style={{ "--gauge-offset": "26" } as React.CSSProperties}
                    strokeLinecap="round"
                    filter="drop-shadow(0 0 6px hsl(var(--accent)))"
                  />
                </svg>
                <Zap className="absolute animate-pulse" size={18} style={{ color: "hsl(var(--accent))" }} />
              </div>
            </div>

            {/* Bar Chart */}
            <div
              className="p-5 rounded-xl space-y-4"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="text-[10px] font-mono text-accent tracking-wide">TRAFFIC_DENSITY</span>
              <div className="h-24 flex items-end gap-1">
                {barData.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm animate-bar-grow"
                    style={{
                      "--bar-h": `${h}%`,
                      background: "linear-gradient(to top, rgba(212,175,55,0.45), rgba(240,199,94,0.75))",
                      animationDelay: `${i * 0.08}s`,
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>

            {/* Area Chart */}
            <div
              className="col-span-2 p-5 rounded-xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex justify-between mb-4">
                <span className="text-[10px] font-mono text-accent tracking-wide">NEURAL_NETWORK_STABILITY</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-ping" style={{ background: "hsl(var(--accent))" }} />
                  <span className="text-[10px] font-mono text-white">LIVE</span>
                </div>
              </div>
              <div className="relative h-36 w-full overflow-hidden" style={{ background: "rgba(250,204,21,0.03)" }}>
                <svg viewBox="0 0 400 100" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="hud-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(250,204,21)" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="rgb(250,204,21)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 80 Q 50 20 100 70 T 200 40 T 300 80 T 400 30 V 100 H 0 Z"
                    fill="url(#hud-grad)"
                    opacity="0.5"
                  />
                  <path
                    d="M0 80 Q 50 20 100 70 T 200 40 T 300 80 T 400 30"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                    filter="drop-shadow(0 0 4px hsl(var(--accent)))"
                  />
                  {/* secondary line */}
                  <path
                    d="M0 60 Q 60 50 120 75 T 240 55 T 360 70 L 400 50"
                    fill="none"
                    stroke="rgba(167,139,250,0.4)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>

            {/* System Logs */}
            <div
              className="col-span-2 p-5 rounded-xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="text-[10px] font-mono text-[#facc15] tracking-wide block mb-3">SYSTEM_LOG</span>
              <div className="space-y-1.5 font-mono text-[11px] leading-relaxed min-h-[80px]">
                {logs.map((log, i) => (
                  <div
                    key={`${log}-${i}`}
                    className="animate-data-stream"
                    style={{
                      color: log.includes("[AI]") ? "#a78bfa" : log.includes("[SEC]") ? "#4ade80" : "rgba(148,163,184,0.7)",
                      animationDelay: `${i * 0.15}s`,
                    }}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HUD Footer */}
          <div
            className="px-6 lg:px-8 py-3 flex justify-between items-center"
            style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex gap-6">
              <div className="text-[10px] font-mono">
                <span style={{ color: "rgb(100,116,139)" }}>ID:</span>{" "}
                <span className="text-white">C-WONDER-01</span>
              </div>
              <div className="text-[10px] font-mono">
                <span style={{ color: "rgb(100,116,139)" }}>LOC:</span>{" "}
                <span className="text-white">35.6895 N, 139.6917 E</span>
              </div>
            </div>
            <ShieldCheck size={14} style={{ color: "#4ade80" }} />
          </div>
        </div>

        {/* Floating Sub-Panel */}
        <div
          className="absolute -top-10 -right-10 w-48 p-4 rounded-xl animate-float hidden lg:block"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.12)",
            transform: "rotate(12deg)",
          }}
        >
          <div className="text-[10px] font-black tracking-widest mb-2" style={{ color: "#facc15" }}>
            SYSTEM STATUS
          </div>
          <div className="h-1 w-full mb-3 overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div className="h-full w-3/4" style={{ background: "#facc15", boxShadow: "0 0 10px #facc15" }} />
          </div>
          <div className="text-[10px] font-mono text-white leading-relaxed">
            ENCRYPTION: ACTIVE
            <br />
            LATENCY: 14MS
          </div>
        </div>

        {/* Floating Sub-Panel 2 - bottom-left */}
        <div
          className="absolute -bottom-8 -left-8 w-40 p-3 rounded-xl animate-float hidden lg:block"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.1)",
            transform: "rotate(-8deg)",
            animationDelay: "3s",
          }}
        >
          <div className="text-[10px] font-black tracking-widest mb-2" style={{ color: "#a78bfa" }}>
            AI ENGINE
          </div>
          <div className="text-[10px] font-mono text-white leading-relaxed">
            MODE: CREATIVE
            <br />
            THREADS: 128
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 w-full h-full rounded-full z-0 animate-pulse"
        style={{
          transform: "translate(-50%, -50%)",
          background: "rgba(250,204,21,0.15)",
          filter: "blur(120px)",
        }}
      />
    </div>
  )
}
