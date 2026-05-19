```tsx
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Informe seu nome (mín. 2 caracteres)" })
    .max(100, { message: "Nome muito longo (máx. 100)" }),

  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail muito longo" }),

  message: z
    .string()
    .trim()
    .min(10, { message: "Mensagem muito curta (mín. 10 caracteres)" })
    .max(1000, { message: "Mensagem muito longa (máx. 1000)" }),
});

type FieldErrors = Partial<
  Record<"name" | "email" | "message", string>
>;

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = contactSchema.safeParse({
      name,
      email,
      message,
    });

    if (!result.success) {
      const fieldErrors: FieldErrors = {};

      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;

        if (key && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }

      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    const data = result.data;

    const subject = encodeURIComponent(
      `Contato do portfólio - ${data.name}`
    );

    const body = encodeURIComponent(
      `Nome: ${data.name}\nE-mail: ${data.email}\n\nMensagem:\n${data.message}`
    );

    window.location.href = `mailto:klayver261@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-hairline bg-background py-24 md:py-40"
    >
      {/* Background Video */}
      <div className="absolute inset-0 opacity-30">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/videos/portrait-1.mp4"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-background/80" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0_0_0/0.96)_100%)]" />

      {/* Content */}
      <div className="relative grid grid-cols-1 gap-14 px-4 sm:px-6 md:grid-cols-12 md:gap-8 md:px-10">
        {/* Header */}
        <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/50 md:mb-10 md:tracking-[0.3em]">
          06 Créditos Finais
        </div>

        {/* Left Side */}
        <div className="col-span-12 md:col-span-6 md:col-start-2">
          <h2 className="text-display mb-8 text-5xl leading-[0.9] text-balance sm:text-6xl md:text-8xl">
            Vamos construir
            <br />

            <span className="text-editorial text-foreground/60">
              algo significativo.
            </span>
          </h2>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-foreground/60 md:text-justify">
            Aberto a oportunidades, colaborações e experiências
            envolvendo sistemas backend, aplicações web e
            projetos de engenharia de software.
          </p>

          <div className="space-y-4 font-mono text-sm">
            <a
              href="https://github.com/klayverdev"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 border-b border-hairline pb-3 transition-colors hover:border-foreground"
            >
              <span className="shrink-0 uppercase tracking-[0.15em] text-foreground/50 md:tracking-[0.2em]">
                GitHub
              </span>

              <span className="truncate transition-transform group-hover:translate-x-1">
                @klayverdev ↗
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/klayver-oliveira"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 border-b border-hairline pb-3 transition-colors hover:border-foreground"
            >
              <span className="shrink-0 uppercase tracking-[0.15em] text-foreground/50 md:tracking-[0.2em]">
                LinkedIn
              </span>

              <span className="truncate transition-transform group-hover:translate-x-1">
                klayver-oliveira ↗
              </span>
            </a>

            <div className="group flex flex-col gap-1 border-b border-hairline pb-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
              <span className="shrink-0 uppercase tracking-[0.15em] text-foreground/50 md:tracking-[0.2em]">
                Localização
              </span>

              <span className="break-words text-left text-xs sm:text-right sm:text-sm">
                Tocantins, Minas Gerais — Brasil
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 md:pl-4">
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass mx-auto w-full max-w-md space-y-6 p-5 sm:p-6 md:p-8"
          >
            {/* Form Header */}
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/50 md:tracking-[0.3em]">
              // TRANSMISSÃO
            </div>

            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="contact-name"
                className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/40 md:tracking-[0.2em]"
              >
                Nome
              </label>

              <input
                id="contact-name"
                name="name"
                required
                maxLength={100}
                value={name}
                onChange={(event) => {
                  setName(event.target.value);

                  if (errors.name) {
                    setErrors((e) => ({
                      ...e,
                      name: undefined,
                    }));
                  }
                }}
                placeholder="Seu nome"
                aria-invalid={!!errors.name}
                className="w-full border-b border-hairline bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground"
              />

              {errors.name && (
                <p className="pt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/40 md:tracking-[0.2em]"
              >
                Canal
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);

                  if (errors.email) {
                    setErrors((e) => ({
                      ...e,
                      email: undefined,
                    }));
                  }
                }}
                placeholder="seu@email.com"
                aria-invalid={!!errors.email}
                className="w-full border-b border-hairline bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground"
              />

              {errors.email && (
                <p className="pt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/40 md:tracking-[0.2em]"
              >
                Mensagem
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                maxLength={1000}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);

                  if (errors.message) {
                    setErrors((e) => ({
                      ...e,
                      message: undefined,
                    }));
                  }
                }}
                placeholder="Escreva sua mensagem aqui"
                aria-invalid={!!errors.message}
                className="min-h-[130px] w-full resize-none border-b border-hairline bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground"
              />

              {errors.message && (
                <p className="pt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="group relative mt-2 w-full overflow-hidden border border-foreground/40 py-4 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-foreground md:tracking-[0.3em]"
            >
              <span className="absolute inset-0 translate-y-full bg-foreground transition-transform duration-500 group-hover:translate-y-0" />

              <span className="relative whitespace-nowrap transition-colors duration-500 group-hover:text-background">
                {sent ? "● SINAL ENVIADO" : "Vamos conversar"}
              </span>
            </button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-24 flex flex-col gap-4 border-t border-hairline px-4 pt-8 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/40 sm:px-6 md:flex-row md:justify-between md:px-10 md:tracking-[0.3em]">
        <span>© Klayver Oliveira MMXXVI</span>

        <span>FIM TRANSMISSÃO ENCERRADA</span>

        <span>CONSTRUÍDO COM DISCIPLINA</span>
      </div>
    </section>
  );
}
```
