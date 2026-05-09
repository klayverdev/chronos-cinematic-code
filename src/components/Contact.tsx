import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative bg-background py-32 md:py-48 border-t border-hairline overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <video autoPlay muted loop playsInline src="/videos/portrait-1.mp4" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0_0_0/0.95)_100%)]" />

      <div className="relative px-6 md:px-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50">
          06 — End Credits
        </div>

        <div className="col-span-12 md:col-span-6">
          <h2 className="text-display text-6xl md:text-8xl leading-[0.85] mb-8 text-balance">
            Let's build<br />
            <span className="text-editorial text-foreground/60">something quiet.</span>
          </h2>
          <p className="text-foreground/60 max-w-md mb-12 leading-relaxed">
            Open to collaborations on backend systems, APIs and infrastructure. The best work happens in the dark.
          </p>

          <div className="space-y-4 font-mono text-sm">
            <a
              href="https://github.com/klayverdev"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-hairline pb-3 hover:border-foreground transition-colors"
            >
              <span className="tracking-[0.2em] uppercase text-foreground/50">GitHub</span>
              <span className="group-hover:translate-x-1 transition-transform">@klayverdev ↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/klayver-oliveira"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-hairline pb-3 hover:border-foreground transition-colors"
            >
              <span className="tracking-[0.2em] uppercase text-foreground/50">LinkedIn</span>
              <span className="group-hover:translate-x-1 transition-transform">klayver-oliveira ↗</span>
            </a>
            <a
              href="mailto:hello@klayver.dev"
              className="group flex items-center justify-between border-b border-hairline pb-3 hover:border-foreground transition-colors"
            >
              <span className="tracking-[0.2em] uppercase text-foreground/50">Email</span>
              <span className="group-hover:translate-x-1 transition-transform">hello@klayver.dev ↗</span>
            </a>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 md:pl-8">
          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass p-6 md:p-8 space-y-5"
          >
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50 mb-2">
              // TRANSMISSION
            </div>
            <div className="space-y-1">
              <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/40">Name</label>
              <input required className="w-full bg-transparent border-b border-hairline focus:border-foreground outline-none py-2 text-foreground" />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/40">Channel</label>
              <input required type="email" className="w-full bg-transparent border-b border-hairline focus:border-foreground outline-none py-2 text-foreground" />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/40">Message</label>
              <textarea required rows={4} className="w-full bg-transparent border-b border-hairline focus:border-foreground outline-none py-2 text-foreground resize-none" />
            </div>
            <button
              type="submit"
              className="group relative w-full mt-4 border border-foreground/40 hover:border-foreground py-3 font-mono text-xs tracking-[0.3em] uppercase overflow-hidden"
            >
              <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative group-hover:text-background transition-colors duration-500">
                {sent ? "● SIGNAL SENT" : "Transmit Signal"}
              </span>
            </button>
          </motion.form>
        </div>
      </div>

      <div className="relative mt-24 px-6 md:px-10 flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/40 border-t border-hairline pt-8">
        <span>© KLAYVER OLIVEIRA — MMXXVI</span>
        <span>FIN — END OF TRANSMISSION</span>
        <span>BUILT IN THE DARK</span>
      </div>
    </section>
  );
}
