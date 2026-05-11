import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative bg-background py-32 md:py-48 overflow-hidden">
      <div className="grid grid-cols-12 gap-6 px-6 md:px-10">
        <div className="col-span-12 md:col-span-2 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50">
          02 Identity
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
              <span>● AO VIVO</span>
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
            Uma obsessão silenciosa por aprendizado, sistemas e evolução constante.
          </motion.h2>

          {[
            "Sou estudante de Engenharia de Software e aspirante a engenheiro backend, focado em sistemas e na estrutura invisível por trás das experiências digitais.",
            "Comecei a programar em 2025, movido por curiosidade, disciplina e o desejo de transformar ideias em soluções funcionais.",
            "Minha jornada é construída em aprendizado contínuo combinando estudos acadêmicos, projetos práticos e experimentação constante com tecnologias modernas.",
            "De arquiteturas backend a sistemas de GTA RP e ferramentas para desenvolvedores, foco em criar experiências escaláveis, organizadas e funcionais.",
            "Cada projeto é mais um quadro em uma história maior.",
          ].map((t, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.15 }}
            className="text-foreground/70 mb-5 leading-relaxed max-w-md md:text-justify"
            >
              {t}
            </motion.p>
          ))}

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-hairline">
            {[
              { k: "Foco", v: "Backend · Sistemas" },
              { k: "Tecnologia", v: "TypeScript · Node.js · Next.js" },
              { k: "Status", v: "Sempre Construindo" },
            ].map((s, i) => (
              <div
                key={s.k}
                className="bg-background p-5 md:p-6 group hover:bg-card transition-colors"
              >
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-3 flex items-center gap-2">
                  <span>/{String(i + 1).padStart(2, "0")}</span>
                  <span>{s.k}</span>
                </div>
                <div className="text-display text-xl md:text-2xl leading-tight text-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
