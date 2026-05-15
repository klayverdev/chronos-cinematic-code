import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "Sistemas de API Backend",
    type: "Infraestrutura Backend",
    desc: "Arquiteturas de API REST focadas em escalabilidade, organização e estrutura limpa para aplicações modernas.",
    stack: ["TypeScript", "Node.js", "MySQL"],
    code: `app.use(authMiddleware);\napp.use(rateLimiter());\n\nrouter.post('/api/auth', handler);`,
    link: "https://github.com/klayverdev",
    linkLabel: "GitHub",
  },
  {
    n: "02",
    title: "Sistemas GTA RP",
    type: "Backend de Jogos",
    desc: "Sistemas de jogo focados em organização, imersão e experiências multiplayer persistentes.",
    stack: ["Lua", "MariaDB"],
    code: `class EconomySystem {\n  async transfer(player, amount) {\n    return validate(player, amount);\n  }\n}`,
    link: "https://github.com/klayverdev",
    linkLabel: "GitHub",
  },
  {
    n: "03",
    title: "Ferramentas para Desenvolvedores",
    type: "Automação e CLI",
    desc: "Experimentos de CLI e automação projetados para melhorar fluxo de trabalho e produtividade no desenvolvimento.",
    stack: ["Node.js", "JavaScript"],
    code: `$ create project api\n› instalando dependências...\n✓ ambiente pronto`,
    link: "https://github.com/klayverdev",
    linkLabel: "GitHub",
  },
  {
    n: "04",
    title: "Frontend e Experiências Web",
    type: "Interfaces Web",
    desc: "Interfaces web modernas combinando responsividade, UI limpa e performance.",
    stack: ["Next.js", "React", "TypeScript"],
    code: `export default function Home() {\n  return <Interface />;\n}`,
    link: "https://portfolio-klayveroliveira.klayveroliveira2020.workers.dev/",
    linkLabel: "Ver online",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative bg-background py-32 md:py-48 border-t border-hairline">
      <div className="px-6 md:px-10">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50 mb-12 md:mb-20">
          04 Trabalhos Selecionados
        </div>
        <div className="mb-20 grid grid-cols-12 gap-6 items-end">
          <h2 className="col-span-12 md:col-span-9 text-display text-4xl md:text-6xl leading-[0.95] text-balance">
            Projetos construídos<br />
            <span className="text-editorial text-foreground/50">através da evolução.</span>
          </h2>
          <a
            href="https://github.com/klayverdev"
            target="_blank"
            rel="noreferrer"
            className="col-span-12 md:col-span-3 md:text-right font-mono text-xs tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground transition-colors"
          >
            Ver Repositório ↗
          </a>
        </div>

        <div className="space-y-px bg-border">
          {projects.map((p) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-background grid grid-cols-12 gap-6 p-6 md:p-10 hover:bg-card transition-colors duration-500"
            >
              <div className="col-span-12 md:col-span-1 font-mono text-xs tracking-[0.3em] text-foreground/40">
                /{p.n}
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50 mb-3">
                  {p.type}
                </div>
                <h3 className="text-display text-3xl md:text-5xl mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {p.title}
                </h3>
                <p className="text-foreground/60 max-w-sm md:text-justify">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] tracking-[0.2em] uppercase border border-hairline px-2 py-1 text-foreground/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="relative bg-card border border-hairline overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-hairline bg-background/50">
                    <span className="w-2 h-2 rounded-full bg-foreground/30" />
                    <span className="w-2 h-2 rounded-full bg-foreground/20" />
                    <span className="w-2 h-2 rounded-full bg-foreground/10" />
                    <span className="ml-3 font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/40">
                      ~/klayver/{p.title.toLowerCase().replace(/\s/g, "-")}
                    </span>
                  </div>
                  <pre className="font-mono text-xs md:text-sm leading-relaxed p-6 text-foreground/80 overflow-x-auto whitespace-pre">
{p.code}
                  </pre>
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-foreground/[0.02] to-foreground/[0.05]" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
