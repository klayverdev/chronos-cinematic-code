import { motion } from "framer-motion";

const tech = [
  { n: "TypeScript", c: "TS", d: "Type-safe systems" },
  { n: "Node.js", c: "ND", d: "Runtime architecture" },
  { n: "APIs", c: "AP", d: "REST · GraphQL · RPC" },
  { n: "Databases", c: "DB", d: "Postgres · Mongo · Redis" },
  { n: "Authentication", c: "AU", d: "OAuth · JWT · Sessions" },
  { n: "Docker", c: "DK", d: "Containers · Orchestration" },
  { n: "GitHub", c: "GH", d: "Version control · CI/CD" },
  { n: "Backend Systems", c: "BS", d: "Distributed architecture" },
  { n: "Security", c: "SC", d: "Hardening · Encryption" },
  { n: "Next.js", c: "NX", d: "Full-stack React" },
];

export function Stack() {
  return (
    <section id="stack" className="relative bg-background py-32 md:py-48 border-t border-hairline">
      <div className="px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50 mb-4">
              03 — Arsenal
            </div>
            <h2 className="text-display text-5xl md:text-7xl leading-[0.9] text-balance">
              Tools forged<br />
              <span className="text-editorial text-foreground/50">into instinct.</span>
            </h2>
          </div>
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-foreground/50 max-w-xs">
            // The stack isn't a list — it's a discipline.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border">
          {tech.map((t, i) => (
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
                <div className="text-display text-5xl md:text-6xl text-foreground/90 mb-2 group-hover:text-foreground transition-colors">
                  {t.c}
                </div>
                <div className="font-mono text-xs tracking-[0.1em] uppercase text-foreground mb-1">
                  {t.n}
                </div>
                <div className="font-mono text-[10px] text-foreground/50">{t.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
