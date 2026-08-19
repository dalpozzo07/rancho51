import { EmberPlayground } from "@/components/ui/EmberPlayground";

/**
 * Pequeno momento interativo entre o Hero e "O Rancho" — as brasas reagem ao
 * mouse/toque. Decorativo, sem informação essencial: nada aqui depende dele.
 */
export function FirePit() {
  return (
    <section className="relative h-56 overflow-hidden border-b border-border-soft bg-bg sm:h-72">
      <div
        className="absolute inset-x-0 bottom-0 h-full"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(201,74,36,0.16), transparent 70%)",
        }}
      />
      <span className="pointer-events-none absolute left-6 top-6 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint sm:left-10 sm:top-8">
        Mexa o mouse (ou toque) nas brasas
      </span>
      <EmberPlayground className="absolute inset-0" />
    </section>
  );
}
