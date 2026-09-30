import Image from "next/image";
import { aestheticPhotos, plasticRestoration } from "@/lib/content";

export function AutomotiveAesthetics() {
  const headlightPhotos = aestheticPhotos.slice(0, 2);
  const otherPhotos = aestheticPhotos.slice(2);

  return (
    <section id="estetica" className="scroll-mt-20 bg-paper py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
          Estética automotiva
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight font-medium text-balance sm:text-5xl">
          Cuidado por dentro e por fora
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Higienização, revitalização, polimento e recuperação de detalhes para renovar
          o acabamento do veículo.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="bg-ink p-3 text-paper sm:p-5">
            <h3 className="px-1 pb-4 font-display text-2xl font-medium sm:text-3xl">
              Restauração de faróis
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {headlightPhotos.map((photo, index) => (
                <figure key={photo.src}>
                  <div className="relative h-[280px] overflow-hidden bg-panel sm:h-[360px] lg:h-[320px]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 265px, 50vw"
                      className="object-contain"
                    />
                    <span
                      className={
                        index === 0
                          ? "absolute bottom-3 left-3 bg-ink/85 px-3 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase"
                          : "absolute bottom-3 left-3 bg-gold px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-ink uppercase"
                      }
                    >
                      {index === 0 ? "Antes" : "Depois"}
                    </span>
                  </div>
                </figure>
              ))}
            </div>
          </article>

          <article className="bg-ink p-3 text-paper sm:p-5">
            <h3 className="px-1 pb-4 font-display text-2xl font-medium sm:text-3xl">
              {plasticRestoration.title}
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {[plasticRestoration.before, plasticRestoration.after].map((photo, index) => (
                <figure key={photo.src}>
                  <div className="relative h-[280px] overflow-hidden bg-panel sm:h-[360px] lg:h-[320px]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 265px, 50vw"
                      className="object-contain"
                    />
                    <span
                      className={
                        index === 0
                          ? "absolute bottom-3 left-3 bg-ink/85 px-3 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase"
                          : "absolute bottom-3 left-3 bg-gold px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-ink uppercase"
                      }
                    >
                      {index === 0 ? "Antes" : "Depois"}
                    </span>
                  </div>
                </figure>
              ))}
            </div>
          </article>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherPhotos.map((photo) => (
            <li key={photo.src} className="overflow-hidden border border-ink/10 bg-white/50">
              <div className="relative aspect-[9/16] bg-paper-2">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="p-5 font-display text-2xl leading-tight font-medium">
                {photo.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
