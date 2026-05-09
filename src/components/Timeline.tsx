import { motion } from "framer-motion";

const events = [
  { year: "2025", title: "Primeira Linha de Código", desc: "A programação deixou de ser curiosidade e se tornou direção. Iniciando a jornada por lógica, sistemas e fundamentos de desenvolvimento." },
  { year: "2025", title: "Descoberta do Backend", desc: "Começou a explorar APIs, bancos de dados e arquitetura backend descobrindo paixão por sistemas que o usuário nunca vê diretamente." },
  { year: "2026", title: "Engenharia de Software", desc: "Iniciou o curso de Bacharelado em Engenharia de Software na UNIGRANDE transformando curiosidade em crescimento técnico estruturado." },
  { year: "2026", title: "Harvard CS50 AI", desc: "Concluiu o curso Introdução à Inteligência Artificial com Python da Universidade de Harvard, expandindo fundamentos em conceitos de IA e resolução de problemas." },
  { year: "NOW", title: "Sempre Construindo", desc: "Cada projeto acumula experiência. Cada linha de código torna-se parte de um sistema maior. Código. Construir. Repetir." },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative bg-background py-32 md:py-48 border-t border-hairline">
      <div className="px-6 md:px-10">
        <div className="mb-20 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-2 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50">
            05 Cronologia
          </div>
          <h2 className="col-span-12 md:col-span-10 text-display text-5xl md:text-7xl leading-[0.9] text-balance">
            Um documentário<br />
            <span className="text-editorial text-foreground/50">em andamento.</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-hairline" />
          {events.map((e, i) => (
            <motion.div
              key={e.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`relative grid grid-cols-2 gap-8 mb-16 md:mb-24 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50 mb-2">
                  CAPÍTULO {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-display text-5xl md:text-7xl mb-3">{e.year}</div>
                <h3 className="text-editorial text-2xl mb-2">{e.title}</h3>
                <p className="text-foreground/60 max-w-sm md:inline-block">{e.desc}</p>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground ring-4 ring-background" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
