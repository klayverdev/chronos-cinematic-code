import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiMysql,
  SiPython,
  SiGithub,
  SiJavascript,
  SiReact,
  SiLua,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

type Tech = { n: string; d: string; Icon: IconType };

const tech: Tech[] = [
  { n: "TypeScript", d: "Desenvolvimento com tipagem", Icon: SiTypescript },
  { n: "Node.js", d: "Sistemas de runtime backend", Icon: SiNodedotjs },
  { n: "Next.js", d: "Arquitetura full-stack moderna", Icon: SiNextdotjs },
  { n: "APIs", d: "Sistemas RESTful e integrações", Icon: TbApi },
  { n: "Databases", d: "MySQL · Supabase", Icon: SiMysql },
  { n: "Python", d: "Automação e construção de lógica", Icon: SiPython },
  { n: "GitHub", d: "Controle de versão e colaboração", Icon: SiGithub },
  { n: "JavaScript", d: "Fundamentos web", Icon: SiJavascript },
  { n: "React", d: "Interfaces interativas modernas", Icon: SiReact },
  { n: "Lua", d: "Sistemas de jogo e scripting", Icon: SiLua },
];

export function Stack() {
  return (
    <section id="stack" className="relative bg-background py-32 md:py-48 border-t border-hairline">
      <div className="px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50 mb-4">
              03 Arsenal
            </div>
            <h2 className="text-display text-5xl md:text-7xl leading-[0.9] text-balance">
              Ferramentas forjadas<br />
              <span className="text-editorial text-foreground/50">através da consistência.</span>
            </h2>
          </div>
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-foreground/50 max-w-xs md:text-justify">
            // A stack não é apenas tecnologia é repetição, disciplina e evolução.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border">
          {tech.map((t, i) => {
            const Icon = t.Icon;
            return (
              <motion.div
                key={t.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="group relative bg-background p-6 md:p-8 aspect-square flex flex-col justify-between overflow-hidden hover:bg-card transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/40">
                  /{String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-foreground/80 mb-4 group-hover:text-foreground group-hover:scale-110 transition-all duration-500 origin-left" />
                  <div className="font-mono text-xs md:text-sm tracking-[0.1em] uppercase text-foreground mb-1">
                    {t.n}
                  </div>
                  <div className="font-mono text-[10px] text-foreground/50">{t.d}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
