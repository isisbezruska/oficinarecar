"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { customerReviews } from "@/lib/content";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function CustomerReviews() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

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

  const arrowClass =
    "inline-flex size-12 items-center justify-center border border-ink/20 bg-white text-xl text-ink transition hover:border-gold-deep hover:bg-gold hover:text-ink disabled:pointer-events-none disabled:opacity-30";

  return (
    <section id="avaliacoes" className="scroll-mt-20 bg-paper-2 py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
              Avaliações de clientes
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight font-medium text-balance sm:text-5xl">
              Clientes satisfeitos com o resultado
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Relatos reais de quem confiou o veículo aos cuidados da RECAR.
            </p>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              className={arrowClass}
              onClick={() => scrollByPage(-1)}
              disabled={atStart}
              aria-label="Avaliações anteriores"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className={arrowClass}
              onClick={() => scrollByPage(1)}
              disabled={atEnd}
              aria-label="Próximas avaliações"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="-mx-5 mt-12 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto scroll-px-5 px-5 pb-3 [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
        >
          {customerReviews.map((review) => (
            <li
              key={review.src}
              className="flex w-[86%] shrink-0 snap-start items-center overflow-hidden border border-ink/10 bg-white p-2 shadow-[0_16px_40px_rgb(18_20_23/0.08)] sm:w-[46%] sm:p-3 lg:w-[32%]"
            >
              <div className="relative w-full" style={{ aspectRatio: `${review.width} / ${review.height}` }}>
                <Image
                  src={review.src}
                  alt={review.alt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, 86vw"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between gap-4 sm:hidden">
          <p className="text-xs text-muted">Deslize para ver mais avaliações</p>
          <div className="flex gap-2">
            <button
              type="button"
              className={arrowClass}
              onClick={() => scrollByPage(-1)}
              disabled={atStart}
              aria-label="Avaliações anteriores"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className={arrowClass}
              onClick={() => scrollByPage(1)}
              disabled={atEnd}
              aria-label="Próximas avaliações"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
