"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DELIVERY_LINKS, SITE } from "@/data/site-config";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#o-rancho", label: "O Rancho" },
  { href: "#cardapio-semana", label: "Cardápio" },
  { href: "#delivery", label: "Delivery" },
  { href: "#localizacao", label: "Localização" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-24 transition-colors duration-500 lg:h-28",
        solid || open ? "border-b border-border bg-bg" : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-24 max-w-wrap items-center justify-between px-6 lg:h-28 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Rancho 51 — início">
          <Image
            src="/images/branding/rancho-badge.png"
            alt=""
            width={64}
            height={64}
            className="h-11 w-11 shrink-0 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
            priority
          />
          <span className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[42px]">
            Rancho <span className="font-quote italic font-normal text-amber-soft">51</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-body text-base font-medium text-ink-dim transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-amber after:transition-transform after:duration-300 hover:text-ink hover:after:origin-left hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={DELIVERY_LINKS.whatsapp} className="px-6 py-3.5 text-sm">
            Pedir Agora
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 items-center justify-center text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-50 flex flex-col justify-center gap-1 bg-bg px-6 md:hidden"
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.06 + i * 0.06 }}
                className="py-2 font-display text-4xl font-extrabold tracking-tight text-ink"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.06 + LINKS.length * 0.06 }}
            >
              <Button href={DELIVERY_LINKS.whatsapp} className="mt-8" onClick={() => setOpen(false)}>
                Pedir Agora
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
