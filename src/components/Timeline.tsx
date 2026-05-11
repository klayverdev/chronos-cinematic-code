import { motion } from "framer-motion";

const events = [
  {
    year: "2025",
    chapter: "I",
    title: "Primeira Linha de Código",
    desc: "A programação deixou de ser curiosidade e se tornou direção. Iniciando a jornada por lógica, sistemas e fundamentos de desenvolvimento.",
    tag: "GÊNESE",
  },
  {
    year: "2025",
    chapter: "II",
    title: "Descoberta do Backend",
    desc: "Começou a explorar APIs, bancos de dados e arquitetura backend descobrindo paixão por sistemas que o usuário nunca vê diretamente.",
    tag: "DIRECIONAMENTO",
  },
  {
    year: "2026",
    chapter: "III",
    title: "Engenharia de Software",
    desc: "Iniciou o curso de Bacharelado em Engenharia de Software na UNIGRANDE transformando curiosidade em crescimento técnico estruturado.",
    tag: "ACADEMIA",
  },
  {
    year: "2026",
    chapter: "IV",
    title: "Harvard CS50 AI",
    desc: "Concluiu o curso Introdução à Inteligência Artificial com Python da Universidade de Harvard, expandindo fundamentos em conceitos de IA e resolução de problemas.",
    tag: "CERTIFICAÇÃO",
  },
  {
    year: "NOW",
    chapter: "V",
    title: "Sempre Construindo",
    desc: "Cada projeto acumula experiência. Cada linha de código torna-se parte de um sistema maior. Código. Construir. Repetir.",
    tag: "PRESENTE",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative bg-background py-32 md:py-48 border-t border-hairline overflow-hidden">
      <div className="px-6 md:px-10">
        <div className="mb-20 md:mb-32 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-2 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50">
            05 Cronologia
          </div>
          <h2 className="col-span-12 md:col-span-10 text-display text-5xl md:text-7xl leading-[0.9] text-balance">
            Um documentário<br />
            <span className="text-editorial text-foreground/50">em andamento.</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* linha vertical */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-hairline to-transparent md:-translate-x-px" />

          <div className="space-y-16 md:space-y-24">
            {events.map((e, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${e.year}-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid md:grid-cols-2 md:gap-16"
                >
                  {/* ponto */}
                  <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-foreground" />
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-foreground animate-ping opacity-30" />
                    </div>
                  </div>

                  {/* card */}
                  <div
                    className={`pl-16 md:pl-0 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="relative inline-block w-full md:w-auto">
                      <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-foreground/40 mb-3">
                        CAPÍTULO {e.chapter} · {e.tag}
                      </div>
                      <div className="text-display text-6xl md:text-8xl leading-[0.85] mb-4 text-foreground">
                        {e.year}
                      </div>
                      <h3 className="text-editorial text-2xl md:text-3xl text-foreground/90 mb-3 leading-snug">
                        {e.title}
                      </h3>
                      <p
                        className={`text-foreground/60 leading-relaxed max-w-md text-justify ${
                          isLeft ? "md:ml-auto" : ""
                        }`}
                      >
                        {e.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* fim */}
          <div className="relative mt-20 md:mt-24 flex justify-center">
            <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 border border-foreground rotate-45 bg-background" />
            <div className="pl-16 md:pl-0 md:text-center pt-12 font-mono text-[10px] tracking-[0.4em] uppercase text-foreground/40">
              CONTINUA...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
