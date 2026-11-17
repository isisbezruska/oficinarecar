"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CloseIcon, MenuIcon } from "@/components/Icons";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-paper/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6">
        <a href="#topo" className="shrink-0" aria-label="RECAR, início da página">
          <Image
            src="/images/recar-logo-new.png"
            alt=""
            width={897}
            height={159}
            priority
            className="h-auto w-36 sm:w-44"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Seções">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-wide text-paper/75 transition hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <WhatsAppButton variant="primary">Solicitar orçamento</WhatsAppButton>
          </span>
          <span className="sm:hidden">
            <WhatsAppButton
              variant="icon"
              ariaLabel="Solicitar orçamento pelo WhatsApp"
            />
          </span>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="menu-mobile"
          className="border-t border-paper/10 bg-ink px-4 py-4 lg:hidden"
          aria-label="Seções"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-lg text-paper"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppButton className="mt-3 w-full" variant="primary">
            Solicitar orçamento
          </WhatsAppButton>
        </nav>
      ) : null}
    </header>
  );
}
