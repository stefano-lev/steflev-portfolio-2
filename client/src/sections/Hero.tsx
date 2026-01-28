import Container from "../components/Container";
import ButtonLink from "../components/ButtonLink";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section id="top" className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6">
            <p className="text-sm text-zinc-400">
              CS Graduate • Python • Security-minded builder
            </p>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              I build clean, reliable software.
            </h1>

            <p className="text-zinc-300 max-w-2xl text-lg leading-relaxed">
              I’m Arman Levanti, a developer focused on practical engineering: automation
              tools, web apps, and systems that make life easier. I’m currently seeking an
              entry-level software role.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="#projects" variant="primary">
                View Projects
              </ButtonLink>

              <ButtonLink href="https://github.com/stefano-lev" variant="secondary">
                GitHub
              </ButtonLink>

              <ButtonLink
                href="https://www.linkedin.com/in/arman-levanti-b780a73a6/"
                variant="secondary"
              >
                LinkedIn
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </motion.div>
  );
}
