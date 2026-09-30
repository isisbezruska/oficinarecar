import Image from "next/image";
import { aboutImage } from "@/lib/content";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-paper pb-20 text-ink sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden bg-ink">
          <Image
            src={aboutImage.src}
            alt={aboutImage.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
            Sobre a oficina
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight font-medium text-balance sm:text-5xl">
            Experiência que atravessa gerações
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80">
            <p>
              Desde {site.sinceYear}, a RECAR está em Curitiba, no bairro São Braz, na
              reparação automotiva. O trabalho prioriza o profissionalismo e a
              qualidade — de veículos batidos e riscos na pintura ao martelinho de
              ouro, polimento, higienização, cristalização e vitrificação.
            </p>
            <p>
              A oficina conta com profissionais especializados e com experiência no
              ramo automotivo. Os orçamentos são gratuitos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
