import Image from "next/image";
import { SITE } from "@/data/site-config";

const LINKS = [
  { href: "#cardapio-semana", label: "Cardápio" },
  { href: "#delivery", label: "Delivery" },
  { href: SITE.instagram.url, label: "Instagram" },
  { href: "#localizacao", label: "Localização" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-bg-soft">
      <div className="mx-auto flex max-w-wrap flex-col items-center gap-6 px-6 py-16 text-center">
        <Image
          src="/images/branding/rancho-logo.png"
          alt={`${SITE.name} — ${SITE.tagline}`}
          width={168}
          height={168}
          className="h-32 w-32 sm:h-40 sm:w-40"
        />
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight text-ink">{SITE.name}</p>
          <p className="mt-1 font-body text-xs font-semibold uppercase tracking-[0.16em] text-amber">
            {SITE.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-ink-dim transition-colors hover:text-amber-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="font-body text-xs text-ink-faint">
          {SITE.address.street}, {SITE.address.city} - {SITE.address.state} · {SITE.hours.note}
        </p>
      </div>
    </footer>
  );
}
