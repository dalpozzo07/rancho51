import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-amber">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-balance font-display text-3xl font-medium text-ink sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-ink-dim">{description}</p>}
    </div>
  );
}
