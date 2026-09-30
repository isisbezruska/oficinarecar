"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { galleryPhotos, type Photo } from "@/lib/content";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const photo: Photo | null = active === null ? null : galleryPhotos[active];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
  }, [active]);

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateEdges();
    track.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      track.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  function scrollByPage(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.9,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }

  function showPrevious() {
    setActive((current) => {
      if (current === null) return current;
      return (current - 1 + galleryPhotos.length) % galleryPhotos.length;
    });
  }

  function showNext() {
    setActive((current) => {
      if (current === null) return current;
      return (current + 1) % galleryPhotos.length;
    });
  }

  const arrowClass =
    "inline-flex size-12 items-center justify-center border border-paper/25 text-paper transition hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-30";

  return (
    <section id="galeria" className="scroll-mt-20 bg-ink pb-20 text-paper sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="max-w-xl font-display text-3xl leading-tight font-medium text-balance sm:text-4xl">
              Veículos prontos para a entrega
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/70 sm:text-base">
              Resultados recentes de funilaria, pintura e polimento realizados pela
              equipe da RECAR.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              className={arrowClass}
              onClick={() => scrollByPage(-1)}
              disabled={atStart}
              aria-label="Fotos anteriores"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className={arrowClass}
              onClick={() => scrollByPage(1)}
              disabled={atEnd}
              aria-label="Próximas fotos"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
        >
          {galleryPhotos.map((item, index) => (
            <li
              key={item.src}
              className="w-[78%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
            >
              <button
                type="button"
                className="group relative block aspect-[4/5] w-full overflow-hidden bg-panel"
                onClick={() => setActive(index)}
                aria-label={`Ampliar foto ${index + 1} de ${galleryPhotos.length}`}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 78vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between gap-4 sm:hidden">
          <p className="text-xs text-paper/55">Deslize para ver mais fotos</p>
          <div className="flex gap-2">
            <button
              type="button"
              className={arrowClass}
              onClick={() => scrollByPage(-1)}
              disabled={atStart}
              aria-label="Fotos anteriores"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className={arrowClass}
              onClick={() => scrollByPage(1)}
              disabled={atEnd}
              aria-label="Próximas fotos"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/10 pt-8">
          <p className="font-display text-3xl font-medium sm:text-4xl">
            Seu carro precisa de reparo?
          </p>
          <WhatsAppButton className="mt-6">Solicitar orçamento</WhatsAppButton>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={active === null ? "Foto ampliada" : `Foto ${active + 1} de ${galleryPhotos.length}`}
        className="fixed inset-0 m-auto h-fit max-h-[calc(100svh-2rem)] w-[min(100%-1.5rem,960px)] overflow-auto border-0 bg-ink p-3 text-paper backdrop:bg-ink/80"
        onClose={() => setActive(null)}
      >
        {photo ? (
          <div>
            <div className="flex justify-end px-1 pb-3">
              <button
                type="button"
                className="min-h-11 shrink-0 px-3 text-sm"
                onClick={() => setActive(null)}
              >
                Fechar
              </button>
            </div>
            <div
              className="mx-auto"
              style={{
                width: `min(100%, calc(70svh * ${photo.width} / ${photo.height}))`,
                aspectRatio: `${photo.width} / ${photo.height}`,
              }}
            >
              <Image
                src={photo.src}
                alt=""
                width={photo.width}
                height={photo.height}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="mt-3 flex justify-between">
              <button type="button" className="min-h-11 px-3 text-sm" onClick={showPrevious}>
                Anterior
              </button>
              <button type="button" className="min-h-11 px-3 text-sm" onClick={showNext}>
                Próxima
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
