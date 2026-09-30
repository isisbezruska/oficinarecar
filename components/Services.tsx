import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { services } from "@/lib/content";

export function Services() {
  const featured = services.filter((service) => service.featured);
  const rest = services.filter((service) => !service.featured);

  return (
    <section id="servicos" className="scroll-mt-20 bg-paper py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
          Serviços
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight font-medium text-balance sm:text-5xl">
          Seu carro em boas mãos
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Cuidamos desde pequenos retoques e riscos até reparos completos após colisões.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {featured.map((service) => (
            <article key={service.title} className="overflow-hidden bg-ink text-paper">
              {"image" in service ? (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-3xl font-medium">{service.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/75 sm:text-base">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((service, index) => (
            <article key={service.title} className="border border-ink/10 bg-white/50 p-6">
              <p className="text-xs tracking-[0.16em] text-muted">
                {String(featured.length + index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-2xl leading-tight font-medium">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-base text-ink/80">
            Conte o que aconteceu com o veículo. O orçamento é sem compromisso.
          </p>
          <WhatsAppButton variant="inverse">Solicitar orçamento</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
