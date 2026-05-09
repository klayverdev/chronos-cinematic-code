import { motion } from "framer-motion";

export function Nav() {
  return (
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
          <a href="#about" className="hover:opacity-60 transition-opacity">Sobre</a>
          <a href="#stack" className="hover:opacity-60 transition-opacity">Tecnologias</a>
          <a href="#work" className="hover:opacity-60 transition-opacity">Projetos</a>
          <a href="#timeline" className="hover:opacity-60 transition-opacity">Linha do Tempo</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contato</a>
        </nav>
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70">
          MMXXVI
        </div>
      </div>
    </motion.header>
  );
}
