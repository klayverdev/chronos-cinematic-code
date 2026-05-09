import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Grain } from "@/components/Grain";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Interlude } from "@/components/Interlude";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Klayver Oliveira — Backend Engineer / System Architect" },
      { name: "description", content: "Cinematic portfolio of Klayver Oliveira — backend engineer building APIs, infrastructure and systems that scale." },
      { property: "og:title", content: "Klayver Oliveira — Backend Engineer" },
      { property: "og:description", content: "Code. Build. Repeat. A futuristic portfolio in the dark." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground min-h-screen">
      <SmoothScroll />
      <Grain />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Interlude />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  );
}
