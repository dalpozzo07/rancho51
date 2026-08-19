const PHRASES = [
  "Comida caseira de verdade",
  "Churrasqueira sempre acesa",
  "Cardápio novo todo dia",
  "Porção que enche a mesa",
  "Boteco raiz",
  "Cerveja sempre gelada",
];

export function Marquee() {
  const items = [...PHRASES, ...PHRASES];

  return (
    <div className="overflow-hidden border-y border-border-soft bg-bg-soft py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-12">
        {items.map((phrase, i) => (
          <span
            key={i}
            className="flex items-center gap-12 whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.2em] text-ink-dim"
          >
            {phrase}
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </div>
  );
}
