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
      <section id="top" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="flex flex-col gap-6">
            <p className="text-sm text-zinc-400">
              CS Graduate • React/TypeScript • Python
            </p>

            <h1 className="max-w-4xl text-2xl font-extrabold tracking-tight leading-tight sm:text-4xl lg:text-5xl">
              I’m a developer focused on building useful, well-crafted software.
            </h1>

            <p className="text-zinc-300 max-w-2xl text-base sm:text-lg leading-relaxed">
              I’m Arman Levanti, a CS graduate building practical web apps, automation
              tools, and small systems that help me learn by shipping. I’m currently
              looking for an entry-level software role where I can keep growing and
              contribute to real-world projects.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="/resume" variant="primary">
                Resume
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
