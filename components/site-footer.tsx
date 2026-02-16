export function SiteFooter() {
  return (
    <footer
      className="relative z-10 py-14 lg:py-16 px-6 lg:px-8"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(0,0,0,0.5)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-10">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-xl font-black tracking-widest" style={{ color: "hsl(var(--accent))" }}>
            {"CREATORS' WONDERLAND"}
          </span>
          <span className="text-xs" style={{ color: "rgb(75,85,99)", letterSpacing: "0.3em" }}>
            C-W_PRJ-2026-X
          </span>
        </div>
        <div className="flex gap-10 lg:gap-12 text-xs font-black tracking-widest uppercase" style={{ color: "rgb(100,116,139)" }}>
          <a href="#" className="hover:text-accent transition-colors">
            Privacy
          </a>
          <a href="https://discord.gg/paFfaHP9" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            Discord
          </a>
          <a href="https://luma.com/d1h2evee" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            Luma
          </a>
        </div>
      </div>
    </footer>
  )
}
