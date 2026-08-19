import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 min-h-[44px]";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-amber text-on-amber hover:bg-amber-soft",
  ghost: "border border-amber-dim text-amber-soft hover:border-amber hover:text-amber-soft",
};

export function Button({ href, variant = "primary", external, className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (external || href.startsWith("http") || href.startsWith("https://wa.me")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
