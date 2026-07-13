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

  const [expandedHighlights, setExpandedHighlights] = useState<Record<string, boolean>>(
    {},
  );

  const toggleHighlights = (title: string) => {
    setExpandedHighlights((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  const close = () => setLightboxImages(null);

  const open = (images: string[], startIndex = 0) => {
    setLightboxImages(images);
    setLightboxIndex(startIndex);
  };

  return (
    <section id="projects" className="py-16 border-t border-white/10">
      <Container>
        <SectionHeading title="Projects" />

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
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold">{p.title}</h3>

                      {p.featured && (
                        <span className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs font-semibold">
                          Featured
                        </span>
                      )}

                      {p.status && (
                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs font-semibold text-emerald-200">
                          {p.status}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm font-medium text-zinc-200">{p.tagline}</p>

                    <div className="mt-3 max-w-2xl space-y-3 text-zinc-300">
                      {p.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    {p.highlights && p.highlights.length > 0 && (
                      <div className="mt-4">
                        <button
                          type="button"
                          onClick={() => toggleHighlights(p.title)}
                          aria-expanded={!!expandedHighlights[p.title]}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-zinc-300 transition hover:bg-white/10 hover:text-white"
                        >
                          <span>
                            {expandedHighlights[p.title]
                              ? "Hide details"
                              : "Show details"}
                          </span>
                          <span
                            className={`transition-transform duration-200 ${
                              expandedHighlights[p.title] ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          >
                            ↓
                          </span>
                        </button>

                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                            expandedHighlights[p.title]
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-sm text-zinc-400">
                              {p.highlights.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

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
                        Live Demo (beta)
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
