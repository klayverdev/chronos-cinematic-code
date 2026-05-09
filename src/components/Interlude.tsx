import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Interlude() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-background">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/videos/portrait-3.mp4"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,oklch(0_0_0/0.9)_90%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      <div className="relative h-full flex items-center justify-center px-6">
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-editorial text-3xl md:text-6xl text-center max-w-5xl leading-[1.1] text-balance"
        >
          "Discipline is the invisible structure <br className="hidden md:block" />
          behind every <span className="italic text-foreground/60">great system.</span>"
        </motion.blockquote>
      </div>

      <div className="absolute bottom-8 left-6 right-6 md:left-10 md:right-10 flex justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/60">
        <span>— INTERLUDE 01</span>
        <span className="flicker">● TRANSMISSION</span>
      </div>
    </section>
  );
}
