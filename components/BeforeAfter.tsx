import Image from "next/image";
import { collisionComparisons } from "@/lib/content";

export function BeforeAfter() {
  return (
    <section
      id="trabalhos"
      className="scroll-mt-20 border-t border-paper/10 bg-ink py-20 text-paper sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
          Reparos de colisão
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight font-medium text-balance sm:text-5xl">
          Antes e depois de verdade
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/70 sm:text-base">
          Veja veículos batidos e peças danificadas recuperados pela equipe da RECAR.
        </p>

        <ul className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {collisionComparisons.map((item) => (
            <li key={item.title} className="border border-paper/10 bg-ink-soft p-3 sm:p-4">
              <h3 className="px-1 pb-4 font-display text-2xl font-medium">{item.title}</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <figure>
                  <div className="relative aspect-[9/16] overflow-hidden bg-panel">
                    <Image
                      src={item.before.src}
                      alt={item.before.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-ink/85 px-3 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase">
                      Antes
                    </span>
                  </div>
                </figure>
                <figure>
                  <div className="relative aspect-[9/16] overflow-hidden bg-panel">
                  <Image
                      src={item.after.src}
                      alt={item.after.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                  />
                    <span className="absolute bottom-3 left-3 bg-gold px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-ink uppercase">
                      Depois
                    </span>
                  </div>
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
