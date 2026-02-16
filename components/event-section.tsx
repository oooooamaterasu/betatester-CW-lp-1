"use client"

import { Calendar, Clock, MapPin, Utensils } from "lucide-react"

const eventItems = [
  { icon: <Calendar size={22} />, label: "DATE", value: "2/23 (Mon)" },
  { icon: <Clock size={22} />, label: "TIME", value: "12:00 - 19:00" },
  { icon: <MapPin size={22} />, label: "LOCATION", value: "TOKYO METRO AREA" },
  { icon: <Utensils size={22} />, label: "SERVICE", value: "LIGHT MEALS & DRINKS" },
]

export function EventSection() {
  return (
    <section id="register" className="relative z-10 py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Event Details */}
          <div className="space-y-10 lg:space-y-12">
            <h2
              className="text-3xl lg:text-4xl font-black tracking-tight text-white pl-6"
              style={{ borderLeft: "4px solid hsl(var(--accent))" }}
            >
              EVENT LOG
            </h2>

            <div className="space-y-5 lg:space-y-6">
              {eventItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 lg:gap-6 group">
                  <div
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "hsl(var(--accent))",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-mono tracking-widest"
                      style={{ color: "rgb(100,116,139)" }}
                    >
                      {item.label}
                    </p>
                    <p className="text-lg lg:text-xl font-bold tracking-tight text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Card */}
          <div className="relative">
            <div
              className="relative z-10 p-10 lg:p-12 overflow-hidden text-center space-y-7 lg:space-y-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "2.5rem",
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute -top-24 -left-24 w-48 h-48 rounded-full"
                style={{ background: "hsl(var(--accent) / 0.15)", filter: "blur(80px)" }}
              />

              <h3
                className="text-2xl lg:text-3xl font-black italic tracking-tighter"
                style={{ color: "hsl(var(--accent))" }}
              >
                ACCESS PASS
              </h3>

              <div
                className="inline-block p-5 lg:p-6 rounded-3xl"
                style={{ background: "#fff", border: "4px solid hsl(var(--accent) / 0.25)" }}
              >
                <img src="/images/QR_0223_luma.png" alt="ACCESS PASS QR" className="w-36 lg:w-40 mx-auto" />
              </div>

              <div className="space-y-4">
                <a
                  href="https://luma.com/d1h2evee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 lg:py-5 rounded-xl font-black text-lg lg:text-xl text-white text-center transition-all active:scale-95 hover:shadow-[0_0_40px_rgba(202,138,4,0.5)]"
                  style={{ background: "linear-gradient(to right, #b8860b, #d4af37)" }}
                >
                  {"Lumaで参加登録"}
                </a>
                <p className="text-sm font-medium" style={{ color: "rgb(100,116,139)" }}>
                  {"※限定招待枠のため、定員に達し次第終了します"}
                </p>
              </div>
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12" style={{ borderTop: "2px solid hsl(var(--accent))", borderLeft: "2px solid hsl(var(--accent))" }} />
          <div className="absolute -bottom-4 -right-4 w-12 h-12" style={{ borderBottom: "2px solid hsl(var(--accent))", borderRight: "2px solid hsl(var(--accent))" }} />
          </div>
        </div>
      </div>
    </section>
  )
}
