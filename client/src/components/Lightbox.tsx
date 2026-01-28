import { useEffect } from "react";

export default function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="mx-auto flex h-full max-w-6xl items-center justify-center px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full">
          <img
            src={images[index]}
            alt={`Screenshot ${index + 1}`}
            className="w-full rounded-2xl border border-white/10"
          />

          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm font-semibold text-white hover:bg-black/70"
          >
            Close
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm font-semibold text-white hover:bg-black/70"
              >
                ←
              </button>
              <button
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm font-semibold text-white hover:bg-black/70"
              >
                →
              </button>
            </>
          )}

          <div className="mt-3 text-center text-xs text-zinc-300">
            {index + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}
