"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";
import type { StoryChapter as StoryChapterData } from "@/data/story";

interface Props {
  chapter: StoryChapterData;
  index: number;
  total: number;
  progress: MotionValue<number>;
  priority?: boolean;
}

/**
 * Uma "fatia" do progresso do scroll pertence a este capítulo. Cada instância
 * calcula sua própria opacidade/posição a partir do MotionValue compartilhado —
 * por isso vive em componente próprio (hooks não podem rodar dentro de .map()).
 */
export function StoryChapterImage({ chapter, index, total, progress, priority }: Props) {
  const seg = 1 / total;
  const start = index * seg;
  const end = start + seg;
  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.03), start + 0.03, end - 0.05, Math.min(1, end)],
    [0, 1, 1, 0]
  );

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <Image src={chapter.image} alt={chapter.alt} fill priority={priority} sizes="100vw" className="object-cover" />
    </motion.div>
  );
}

export function StoryChapterText({ chapter, index, total, progress }: Props) {
  const seg = 1 / total;
  const start = index * seg;
  const end = start + seg;
  const opacity = useTransform(progress, [start, start + 0.06, end - 0.09, end - 0.03], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, start + 0.06], [26, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-6 top-1/2 max-w-xl -translate-y-1/2 sm:inset-x-10"
    >
      <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-amber">
        {chapter.eyebrow}
      </span>
      <h2 className="mt-3 text-balance font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-ink sm:text-6xl">
        {chapter.title}
      </h2>
      <p className="mt-4 max-w-md text-ink-dim sm:text-lg">{chapter.text}</p>
    </motion.div>
  );
}

export function StoryProgressDot({ index, total, progress }: Omit<Props, "chapter" | "priority">) {
  const seg = 1 / total;
  const start = index * seg;
  const end = start + seg;
  const opacity = useTransform(progress, [start, start + 0.02, end - 0.02, end], [0.3, 1, 1, 0.3]);

  return <motion.i style={{ opacity }} className="block h-0.5 w-8 rounded-full bg-amber" />;
}
