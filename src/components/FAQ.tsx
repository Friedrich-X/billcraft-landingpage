"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  /** Liste der FAQ-Einträge */
  items: FAQItem[];
  /** Optional: Überschrift über der FAQ (wenn nicht gesetzt, wird keine H2 gerendert) */
  title?: string;
  /** Optional: Zusätzliche Klassen für die Section */
  className?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const FAQ: React.FC<FAQProps> = ({ items, title, className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionId = "faq-heading";

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle(index);
    }
  };

  return (
    <section
      className={`w-full ${className}`.trim()}
      aria-labelledby={title ? sectionId : undefined}
    >
      <div className="w-full">
        {title && (
          <motion.h2
            id={sectionId}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
          >
            {title}
          </motion.h2>
        )}
        <div className="border-t border-gray">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className="border-b border-gray"
                role="region"
                aria-labelledby={`faq-q-${index}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease,
                }}
              >
                <button
                  id={`faq-q-${index}`}
                  type="button"
                  onClick={() => handleToggle(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${index}`}
                  className="w-full py-5 md:py-6 px-0 flex items-center justify-between gap-4 text-left text-lg md:text-xl font-medium text-foreground cursor-pointer bg-transparent border-none"
                >
                  <span className="flex-1">{item.question}</span>
                  <motion.span
                    className="shrink-0 w-8 h-8 md:w-10 md:h-10 relative flex items-center justify-center text-blue text-2xl md:text-3xl leading-none select-none"
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    <span className="absolute inset-0 flex items-center justify-center">
                      +
                    </span>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease },
                        opacity: { duration: 0.25, delay: 0.1 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 md:pb-6 pt-0 text-foreground/70 text-base md:text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
