import Image from "next/image";
import { customerReviews } from "@/lib/content";

export function CustomerReviews() {
  return (
    <section id="avaliacoes" className="scroll-mt-20 bg-paper-2 py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
          Avaliações de clientes
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight font-medium text-balance sm:text-5xl">
          Clientes satisfeitos com o resultado
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Relatos reais de quem confiou o veículo aos cuidados da RECAR.
        </p>

        <ul className="mt-12 grid items-start gap-5 md:grid-cols-2">
          {customerReviews.map((review) => (
            <li key={review.src} className="overflow-hidden border border-ink/10 bg-white">
              <Image
                src={review.src}
                alt={review.alt}
                width={review.width}
                height={review.height}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
