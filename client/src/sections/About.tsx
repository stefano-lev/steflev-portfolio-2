import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-white/10">
      <Container>
        <SectionHeading
          title="About"
          subtitle="A little context on who I am and how I work."
        />

        <div className="text-zinc-300 leading-relaxed space-y-4 max-w-3xl">
          <p>
            I’m a CS graduate who enjoys building practical tools and systems. I like
            taking projects from idea → prototype → finished product, even when that means
            learning new technologies along the way.
          </p>

          <p>
            I value clarity, consistency, and finishing what I start. Most of my work has
            been self-directed, which has helped me become comfortable learning
            independently and solving problems from first principles.
          </p>

          <p>
            Outside of coding, I study Japanese and enjoy exploring language tools, media,
            and small creative side projects.
          </p>
        </div>
      </Container>
    </section>
  );
}
