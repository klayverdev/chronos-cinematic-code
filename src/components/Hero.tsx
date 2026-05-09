import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={ref} id="top" className="relative h-[120vh] w-full overflow-hidden bg-background">
      {/* Video layer */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="/videos/portrait-1.mp4"
        />
      </motion.div>

      {/* Vignette + gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0_0_0/0.85)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />

      {/* Scanlines */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0, transparent 2px, oklch(1 0 0) 2px, oklch(1 0 0) 3px)",
        }}
      />

      {/* Top metadata strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute top-24 left-6 md:left-10 right-6 md:right-10 flex justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/60"
      >
        <span>REC ● 04:21:08</span>
        <span className="hidden md:inline">CAPÍTULO I O ARQUITETO</span>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-foreground/70 mb-6"
        >
          Backend Engineer / Software Engineering Student
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-6 md:left-10 bottom-24 md:bottom-32 text-left"
        >
          <h1 className="font-serif text-[clamp(3.5rem,9vw,7rem)] md:text-[clamp(5rem,14vw,10rem)] leading-[0.9] text-white uppercase tracking-[0.02em]">
            Klayver
          </h1>
          <p className="font-serif italic text-4xl md:text-6xl text-foreground/60 uppercase tracking-[0.2em] mt-2">
            Oliveira
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.2 }}
          className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <p className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-foreground/70 max-w-md">
            Código. Construir. Repetir. Arquitetando sistemas digitais com disciplina, curiosidade e evolução contínua.
          </p>
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50">
            <span className="w-8 h-px bg-foreground/40" />
            <span>ROLE</span>
            <div className="relative w-px h-10 bg-foreground/20 overflow-hidden">
              <span className="absolute inset-x-0 h-4 bg-foreground scroll-line" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
