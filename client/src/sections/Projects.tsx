import { useMemo, useState } from "react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Badge from "../components/Badge";
import ButtonLink from "../components/ButtonLink";
import Lightbox from "../components/Lightbox";
import { projects } from "../data/projects";

export default function Projects() {
  const sorted = useMemo(() => {
    return [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, []);

  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const close = () => setLightboxImages(null);

  const open = (images: string[], startIndex = 0) => {
    setLightboxImages(images);
    setLightboxIndex(startIndex);
  };

  return (
    <section id="projects" className="py-16 border-t border-white/10">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="A few things I’ve built. I prioritize clean architecture, documentation, and shippable results."
        />

        <div className="grid gap-6">
          {sorted.map((p) => (
            <article
              key={p.title}
              className={`rounded-2xl border p-6 transition ${
                p.featured
                  ? "border-white/20 bg-white/10"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="grid gap-5 sm:grid-cols-[1.3fr_1fr]">
                {/* left */}
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    {p.featured && (
                      <span className="text-xs font-semibold rounded-full border border-white/10 bg-white/10 px-2 py-1">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-zinc-300 max-w-2xl">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.github && (
                      <ButtonLink href={p.github} variant="secondary">
                        GitHub
                      </ButtonLink>
                    )}
                    {p.demo && (
                      <ButtonLink href={p.demo} variant="primary">
                        Live Demo
                      </ButtonLink>
                    )}

                    {p.screenshots && p.screenshots.length > 0 && (
                      <button
                        onClick={() => open(p.screenshots!, 0)}
                        className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition border bg-transparent text-zinc-100 border-white/15 hover:bg-white/5"
                      >
                        View screenshots ({p.screenshots.length})
                      </button>
                    )}
                  </div>
                </div>

                {/* right */}
                <div>
                  {p.coverImage ? (
                    <button
                      className="w-full"
                      onClick={() => {
                        const imgs = p.screenshots?.length
                          ? p.screenshots
                          : [p.coverImage!];
                        open(imgs, 0);
                      }}
                    >
                      <img
                        src={p.coverImage}
                        alt={`${p.title} cover`}
                        className="w-full rounded-2xl border border-white/10 hover:border-white/20 transition"
                      />
                    </button>
                  ) : (
                    <div className="w-full h-44 rounded-2xl border border-white/10 bg-white/5" />
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>

      {lightboxImages && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={close}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex + lightboxImages.length - 1) % lightboxImages.length,
            )
          }
          onNext={() => setLightboxIndex((lightboxIndex + 1) % lightboxImages.length)}
        />
      )}
    </section>
  );
}
