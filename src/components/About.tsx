import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative bg-background py-32 md:py-48 overflow-hidden">
      <div className="grid grid-cols-12 gap-6 px-6 md:px-10">
        <div className="col-span-12 md:col-span-2 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50">
          02 — Identity
        </div>

        <div className="col-span-12 md:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] overflow-hidden border border-hairline"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              src="/videos/portrait-2.mp4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/70">
              <span>FRAME 02 / OLIVEIRA, K.</span>
              <span>● LIVE</span>
            </div>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-5 md:pl-8 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-editorial text-4xl md:text-6xl leading-[1.05] mb-8 text-balance"
          >
            A quiet obsession with systems that don't break.
          </motion.h2>

          {[
            "I'm a software engineering student and backend engineer building APIs, infrastructure, and the unseen machinery behind digital experiences.",
            "I believe in clean architecture, deliberate design and the slow compounding of discipline. Each commit is a frame in a longer film.",
            "From GTA RP systems to scalable APIs — I architect what users never see, but always feel.",
          ].map((t, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.15 }}
              className="text-foreground/70 mb-5 leading-relaxed max-w-md"
            >
              {t}
            </motion.p>
          ))}

          <div className="mt-8 grid grid-cols-3 gap-6 font-mono text-[10px] tracking-[0.2em] uppercase">
            {[
              { k: "Focus", v: "Backend / APIs" },
              { k: "Stack", v: "TS / Node / Docker" },
              { k: "Status", v: "Always Building" },
            ].map((s) => (
              <div key={s.k} className="border-t border-hairline pt-3">
                <div className="text-foreground/40 mb-1">{s.k}</div>
                <div className="text-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
