import Navbar from "../components/Navbar";
import Container from "../components/Container";
import ButtonLink from "../components/ButtonLink";

export default function Resume() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />

      <main className="py-16">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
              <p className="mt-2 text-zinc-300">
                Download the PDF or view it directly below.
              </p>
            </div>

            <div className="flex gap-2">
              <ButtonLink href="/" variant="secondary">
                ← Back Home
              </ButtonLink>

              <ButtonLink href="/Levanti_Arman_Resume_2026.pdf" variant="primary">
                Download PDF
              </ButtonLink>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            {/* PDF embed */}
            <iframe
              src="/Levanti_Arman_Resume_2026.pdf"
              title="Resume PDF"
              className="w-full h-[80vh]"
            />
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            If the PDF preview doesn’t load in your browser, use the download button.
          </p>
        </Container>
      </main>
    </div>
  );
}
