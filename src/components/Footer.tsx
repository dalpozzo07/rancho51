import { SeloRancho } from "@/components/ui/SeloRancho";
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
        <SeloRancho size={72} />
        <div>
          <p className="font-display text-2xl font-semibold text-ink">{SITE.name}</p>
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
