import { motion } from "framer-motion";

const phrases = [
  "CODE. BUILD. REPEAT.",
  "CONSISTENCY CREATES REALITY.",
  "DISCIPLINE OVER MOTIVATION.",
  "BUILDING SYSTEMS THAT SCALE.",
  "ARCHITECTING DIGITAL EXPERIENCES.",
];

export function Marquee() {
  const items = [...phrases, ...phrases, ...phrases];
  return (
    <div className="relative border-y border-hairline py-6 md:py-8 overflow-hidden bg-background">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {items.map((p, i) => (
          <span
            key={i}
            className="text-display text-[8vw] md:text-[5vw] text-foreground/90 flex items-center gap-12"
          >
            {p}
            <span className="text-foreground/30">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
