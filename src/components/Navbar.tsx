"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DELIVERY_LINKS, SITE } from "@/data/site-config";

const LINKS = [
  { href: "#o-rancho", label: "O Rancho" },
  { href: "#cardapio-semana", label: "Cardápio" },
  { href: "#delivery", label: "Delivery" },
  { href: "#localizacao", label: "Localização" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-bg">
      <div className="mx-auto flex h-20 max-w-wrap items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <svg width="30" height="28" viewBox="0 0 56 52" aria-hidden="true" className="shrink-0">
            <circle cx="28" cy="26" r="21" fill="none" stroke="var(--color-amber-dim)" strokeWidth="1.5" />
            <circle cx="28" cy="26" r="12" fill="none" stroke="var(--color-amber)" strokeWidth="1.5" />
            <circle cx="28" cy="26" r="4" fill="var(--color-ember)" />
          </svg>
          <span className="font-display text-2xl font-semibold tracking-wide text-ink sm:text-[28px]">
            Rancho <span className="italic text-amber-soft">51</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink-dim transition-colors hover:text-amber-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={DELIVERY_LINKS.whatsapp} className="px-5 py-3 text-xs">
            Pedir Agora
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border-soft bg-bg md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pt-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-body text-base text-ink-dim"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-4">
              <Button href={DELIVERY_LINKS.whatsapp} className="mt-3 w-full">
                Pedir Agora
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
