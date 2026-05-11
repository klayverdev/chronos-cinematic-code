import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Sobre" },
  { href: "#stack", label: "Tecnologias" },
  { href: "#work", label: "Projetos" },
  { href: "#timeline", label: "Linha do Tempo" },
  { href: "#contact", label: "Contato" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[80] mix-blend-difference"
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-5 text-foreground">
          <a href="#top" className="font-mono text-xs tracking-[0.3em] uppercase">
            K/O 001
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-[10px] tracking-[0.3em] uppercase">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:opacity-60 transition-opacity">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block font-mono text-[10px] tracking-[0.3em] uppercase opacity-70">
            MMXXVI
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="md:hidden p-2 -mr-2"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-background md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-foreground">
                K/O 001
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="p-2 -mr-2 text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col px-6 mt-12 gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  className="text-display text-5xl text-foreground border-b border-hairline py-5"
                >
                  <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/40 mr-3">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="absolute bottom-8 left-6 right-6 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/40 flex justify-between">
              <span>K/O 001</span>
              <span>MMXXVI</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
