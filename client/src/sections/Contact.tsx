import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ButtonLink from "../components/ButtonLink";

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-white/10">
      <Container>
        <SectionHeading
          title="Contact"
          subtitle="If you'd like to reach out, email is best."
        />

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-zinc-300">
            Email:{" "}
            <a
              className="font-semibold text-white underline underline-offset-4"
              href="mailto:stefano-lev@protonmail.com"
            >
              stefano-lev@protonmail.com
            </a>
          </p>

          <div className="flex gap-2">
            <ButtonLink href="mailto:stefano-lev@protonmail.com" variant="primary">
              Email me
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
