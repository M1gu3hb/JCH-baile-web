"use client";

import { motion, useReducedMotion, type Easing, type Transition } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  onAnimationComplete?: () => void;
};

function buildKeyframes(
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>,
) {
  const keys = new Set([...Object.keys(from), ...steps.flatMap((step) => Object.keys(step))]);
  const keyframes: Record<string, Array<string | number>> = {};

  keys.forEach((key) => {
    keyframes[key] = [from[key], ...steps.map((step) => step[key])];
  });

  return keyframes;
}

/** Adapted from React Bits BlurText (MIT + Commons Clause). */
export function BlurText({
  text,
  className = "",
  delay = 85,
  animateBy = "words",
  direction = "bottom",
  onAnimationComplete,
}: BlurTextProps) {
  const segments = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -7%" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const from = useMemo(
    () => ({ filter: "blur(12px)", opacity: 0, y: direction === "top" ? -34 : 34 }),
    [direction],
  );
  const to = useMemo(
    () => [
      { filter: "blur(5px)", opacity: 0.55, y: direction === "top" ? 4 : -4 },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction],
  );
  const easing: Easing = [0.16, 1, 0.3, 1];

  return (
    <span ref={ref} className={`blur-text ${className}`} aria-label={text}>
      {segments.map((segment, index) => {
        const transition: Transition = {
          duration: 0.7,
          times: [0, 0.45, 1],
          delay: (index * delay) / 1000,
          ease: easing,
        };

        return (
          <motion.span
            aria-hidden="true"
            key={`${segment}-${index}`}
            initial={reduceMotion ? false : from}
            animate={reduceMotion || inView ? (reduceMotion ? { opacity: 1, y: 0 } : buildKeyframes(from, to)) : from}
            transition={transition}
            onAnimationComplete={index === segments.length - 1 ? onAnimationComplete : undefined}
            className="inline-block will-change-[transform,filter,opacity]"
          >
            {segment}
            {animateBy === "words" && index < segments.length - 1 ? "\u00A0" : null}
          </motion.span>
        );
      })}
    </span>
  );
}

