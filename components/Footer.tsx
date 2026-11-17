import Image from "next/image";
import { PhoneLink } from "@/components/PhoneLink";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { nav, site } from "@/lib/site";

const pageLinks = nav.filter((item) =>
  ["#servicos", "#sobre", "#localizacao"].includes(item.href),
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 bg-ink pb-28 text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image
            src="/images/recar-logo-new.png"
            alt={site.name}
            width={897}
            height={159}
            className="h-auto w-56"
          />
          <p className="mt-4 text-sm text-paper/75">{site.name}</p>
          <p className="text-sm text-paper/75">
            {site.address.city} — {site.address.state}
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] text-paper/50 uppercase">Contato</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <PhoneLink
                href={`tel:${site.phoneTel}`}
                ariaLabel={`Ligar para ${site.phoneDisplay}`}
                className="underline decoration-gold/70 underline-offset-4"
              >
                {site.phoneDisplay}
              </PhoneLink>
            </li>
            <li>
              <PhoneLink
                href={`tel:${site.landlineTel}`}
                ariaLabel={`Ligar para o telefone fixo ${site.landlineDisplay}`}
                className="underline decoration-gold/70 underline-offset-4"
              >
                {site.landlineDisplay}
              </PhoneLink>
            </li>
            <li>
              <WhatsAppButton variant="linkLight">
                WhatsApp {site.whatsappDisplay}
              </WhatsAppButton>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] text-paper/50 uppercase">Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {pageLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-paper/80 hover:text-paper">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/80 hover:text-paper"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-6 text-xs text-paper/45 sm:px-6">
        © {year} {site.name}
      </p>
    </footer>
  );
}
