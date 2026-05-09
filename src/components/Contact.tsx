import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Contato do portfólio - ${name || email}`);
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);
    window.location.href = `mailto:klayver261@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-background py-32 md:py-48 border-t border-hairline overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <video autoPlay muted loop playsInline src="/videos/portrait-1.mp4" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0_0_0/0.95)_100%)]" />

      <div className="relative px-6 md:px-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50">
          06 Créditos Finais
        </div>

        <div className="col-span-12 md:col-span-6">
          <h2 className="text-display text-6xl md:text-8xl leading-[0.85] mb-8 text-balance">
            Vamos construir<br />
            <span className="text-editorial text-foreground/60">algo significativo.</span>
          </h2>
          <p className="text-foreground/60 max-w-md mb-12 leading-relaxed">
            Aberto a oportunidades, colaborações e experiências envolvendo sistemas backend, APIs, aplicações web e projetos de engenharia de software.
          </p>

          <div className="space-y-4 font-mono text-sm">
            <a
              href="https://github.com/klayverdev"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-hairline pb-3 hover:border-foreground transition-colors"
            >
              <span className="tracking-[0.2em] uppercase text-foreground/50">GitHub</span>
              <span className="group-hover:translate-x-1 transition-transform">@klayverdev ↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/klayver-oliveira"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-hairline pb-3 hover:border-foreground transition-colors"
            >
              <span className="tracking-[0.2em] uppercase text-foreground/50">LinkedIn</span>
              <span className="group-hover:translate-x-1 transition-transform">klayver-oliveira ↗</span>
            </a>
            <div className="group flex items-center justify-between border-b border-hairline pb-3">
              <span className="tracking-[0.2em] uppercase text-foreground/50">Localização</span>
              <span>Tocantins, Minas Gerais Brasil</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 md:pl-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass p-6 md:p-8 space-y-5"
          >
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/50 mb-2">
              // TRANSMISSÃO
            </div>
            <div className="space-y-1">
              <label htmlFor="contact-name" className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/40">Nome</label>
              <input
                id="contact-name"
                name="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Seu nome"
                className="w-full bg-transparent border-b border-hairline focus:border-foreground outline-none py-2 text-foreground"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="contact-email" className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/40">Canal</label>
              <input
                id="contact-email"
                name="email"
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="seu@email.com"
                className="w-full bg-transparent border-b border-hairline focus:border-foreground outline-none py-2 text-foreground"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="contact-message" className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/40">Mensagem</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Escreva sua mensagem aqui"
                className="w-full bg-transparent border-b border-hairline focus:border-foreground outline-none py-2 text-foreground resize-none"
              />
            </div>
            <button
              type="submit"
              className="group relative w-full mt-4 border border-foreground/40 hover:border-foreground py-3 font-mono text-xs tracking-[0.3em] uppercase overflow-hidden"
            >
              <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative group-hover:text-background transition-colors duration-500">
                {sent ? "● SINAL ENVIADO" : "Transmitir Sinal"}
              </span>
            </button>
          </motion.form>
        </div>
      </div>

      <div className="relative mt-24 px-6 md:px-10 flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/40 border-t border-hairline pt-8">
        <span>© Klayver Oliveira MMXXVI</span>
        <span>FIM TRANSMISSÃO ENCERRADA</span>
        <span>CONSTRUÍDO COM DISCIPLINA</span>
      </div>
    </section>
  );
}
