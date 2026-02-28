interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-[8px] py-[28px] px-[28px]">
      <span className="font-display text-[clamp(32px,4vw,48px)] font-bold text-brand-yellow leading-none tracking-[-0.01em]">{value}</span>
      <span className="font-mono text-[10px] font-400 tracking-[2.5px] uppercase text-nav-text/45">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] bg-[#050510] flex flex-col overflow-hidden" style={{ backgroundColor: '#050510' }}>
      <div className="absolute right-0 top-0 w-[58%] h-full bg-[radial-gradient(ellipse_at_55%_40%,rgba(32,95,255,0.38)_0%,rgba(10,10,100,0.18)_45%,transparent_72%)] pointer-events-none z-0" aria-hidden="true" />

      {/* Ticker bar */}
      <div className="border-b border-white/5 bg-black/25 relative z-[1] shrink-0">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center px-[20px] md:px-[48px] py-[8px] md:py-[10px] gap-2 sm:gap-0">
          <span className="font-mono text-[10px] font-400 tracking-[1.5px] uppercase text-nav-text/35 text-center sm:text-left">Wagerbird Terminal — Confidence-Scored Signals</span>
          <div className="flex items-center justify-center gap-[8px] text-white min-w-0 sm:min-w-[200px] font-mono text-[10px] font-400 tracking-[1.5px] uppercase">
            <span className="w-[6px] h-[6px] rounded-full bg-brand-yellow shrink-0 animate-[live-pulse_2.5s_cubic-bezier(0.4,0,0.6,1)_infinite]" aria-hidden="true" />
            Live Signals Active
          </div>
          <span className="hidden sm:block font-mono text-[10px] font-400 tracking-[1.5px] uppercase text-nav-text/35 text-right">Thursday, February 19, 2020</span>
        </div>
      </div>

      {/* Two-column main */}
      <div className="grid grid-cols-1 md:grid-cols-2 flex-1 relative z-[1] min-h-0 before:hidden md:before:block before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[1px] before:bg-white/5 before:z-[2]">
        {/* Left column */}
        <div className="flex flex-col justify-center px-[20px] md:px-[48px] py-[40px] md:py-[60px] pb-[32px] md:pb-[100px]">
          <div className="inline-flex items-center gap-[10px] px-[16px] py-[8px] border border-brand-yellow/25 bg-brand-yellow/4 mb-[20px] md:mb-[32px] w-fit">
            <span className="w-[5px] h-[5px] rounded-full bg-brand-yellow shrink-0" aria-hidden="true" />
            <span className="font-mono text-[10px] font-400 tracking-[1.5px] uppercase text-nav-text/85">MLB · NBA · NFL · NHL — All Sports Covered</span>
          </div>

          <h1 className="font-display text-[clamp(42px,13vw,60px)] md:text-[clamp(48px,6.5vw,88px)] font-bold leading-[0.94] tracking-[-0.01em] uppercase text-nav-text/98 m-0 mb-[20px] md:mb-[32px]">
            Access<br />
            The <em className="text-brand-yellow italic font-bold not-italic">Edge.</em><br />
            Trade<br />
            The Game.
          </h1>

          <div className="border-l-2 border-brand-yellow pl-[20px] mb-[48px]">
            <p className="font-mono text-[13px] font-400 leading-[1.95] text-nav-text/55 m-0 max-w-[360px]">
              Signals scored by confidence. Priced by conviction. Stop guessing — start winning with the model on your side.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] md:gap-[20px]">
            <a href="/packs" className="w-full sm:w-auto inline-flex items-center justify-center px-[32px] py-[15px] bg-brand-yellow font-mono text-[11px] font-bold tracking-[1.5px] uppercase text-black whitespace-nowrap transition-all hover:bg-white hover:-translate-y-[1px]">Buy a Pack →</a>
            <a href="/picks" className="w-full sm:w-auto inline-flex items-center justify-center px-[32px] py-[14px] border border-nav-text/15 font-mono text-[11px] font-400 tracking-[1.5px] uppercase text-nav-text/55 whitespace-nowrap transition-all hover:border-nav-text/40 hover:text-white hover:bg-white/3">Free Picks via Email</a>
          </div>
        </div>

        {/* Right column — hero image */}
        <div className="hidden md:block relative">
          <div className="w-full h-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e7a48826f4f3592b62edc4a4adaa3da19d8075e3"
              alt="WagerBird signal cards terminal"
              className="w-full h-full object-cover object-center block"
            />
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch relative z-[1] shrink-0 border-t border-white/8 bg-[#050510] min-h-[104px]">
        <StatItem value="68%" label="Season Win Rate" />
        <div className="hidden md:block w-[1px] self-stretch bg-white/8 shrink-0 m-0" />
        <StatItem value="12K+" label="Active Bettors" />
        <div className="hidden md:block w-[1px] self-stretch bg-white/8 shrink-0 m-0" />
        <StatItem value="5" label="Sports Covered" />
      </div>
    </section>
  );
}
