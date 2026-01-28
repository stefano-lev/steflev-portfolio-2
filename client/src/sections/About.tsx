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
            I’m a CS graduate with a strong interest in building practical tools and
            systems. I enjoy projects where I can go from idea → prototype → polished
            deliverable.
          </p>
          <p>
            My strengths are consistency, learning quickly, and pushing projects across
            the finish line, not just starting them.
          </p>
          <p>
            Outside of coding, I study Japanese and love digging into media, language
            tools, and creative projects.
          </p>
        </div>
      </Container>
    </section>
  );
}
