"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

type Faq = { question: string; answer: string };

export function FaqAccordion({ items }: { items: readonly Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div className={`faq-item ${expanded ? "is-open" : ""}`} key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(expanded ? null : index)}
                aria-expanded={expanded}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq-item__number">0{index + 1}</span>
                <span>{item.question}</span>
                <Plus className="faq-item__icon" aria-hidden="true" />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  id={`faq-answer-${index}`}
                  role="region"
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                  className="faq-item__answer"
                >
                  <p>{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
