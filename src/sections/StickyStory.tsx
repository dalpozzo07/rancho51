"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { StoryChapterImage, StoryChapterText, StoryProgressDot } from "@/components/ui/StoryChapter";
import { STORY_CHAPTERS } from "@/data/story";

export function StickyStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.3]);

  if (reduceMotion) {
    return (
      <section id="o-rancho" className="border-b border-border-soft bg-bg py-24">
        <div className="mx-auto max-w-wrap px-6 text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            O Rancho
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Não é só comida. É o jeito Rancho 51 de fazer.
          </h2>
        </div>
        <div className="mt-16 grid gap-16">
          {STORY_CHAPTERS.map((chapter) => (
            <div key={chapter.title} className="mx-auto max-w-wrap px-6">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                {chapter.eyebrow}
              </span>
              <h3 className="mt-2 text-balance font-display text-2xl font-extrabold tracking-tight text-ink">
                {chapter.title}
              </h3>
              <p className="mt-2 max-w-md text-ink-dim">{chapter.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="o-rancho" ref={ref} className="relative h-[380vh] bg-bg" aria-label="O jeito Rancho 51 de fazer">
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          {STORY_CHAPTERS.map((chapter, i) => (
            <StoryChapterImage
              key={chapter.title}
              chapter={chapter}
              index={i}
              total={STORY_CHAPTERS.length}
              progress={scrollYProgress}
              priority={i === 0}
            />
          ))}
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-bg/70" />

        {STORY_CHAPTERS.map((chapter, i) => (
          <StoryChapterText
            key={chapter.title}
            chapter={chapter}
            index={i}
            total={STORY_CHAPTERS.length}
            progress={scrollYProgress}
          />
        ))}

        <div className="absolute bottom-8 left-6 flex gap-2 sm:left-10">
          {STORY_CHAPTERS.map((chapter, i) => (
            <StoryProgressDot key={chapter.title} index={i} total={STORY_CHAPTERS.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
