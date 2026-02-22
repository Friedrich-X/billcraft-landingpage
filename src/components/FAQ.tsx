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
          <h2
            id={sectionId}
            className="text-2xl md:text-5xl font-medium text-foreground text-center mb-8"
          >
            {title}
          </h2>
        )}
        <div className="border-t border-gray">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-gray"
                role="region"
                aria-labelledby={`faq-q-${index}`}
              >
                <button
                  id={`faq-q-${index}`}
                  type="button"
                  onClick={() => handleToggle(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${index}`}
                  className="w-full py-4 px-0 flex items-center justify-between gap-4 text-left font-medium text-foreground cursor-pointer bg-transparent border-none"
                >
                  <span className="flex-1">{item.question}</span>
                  <span
                    className="shrink-0 w-8 h-8 relative flex items-center justify-center text-blue text-2xl leading-none select-none"
                    aria-hidden
                  >
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center"
                      initial={false}
                      animate={{
                        opacity: isOpen ? 0 : 1,
                        scale: isOpen ? 0.5 : 1,
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      +
                    </motion.span>
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center"
                      initial={false}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        scale: isOpen ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      −
                    </motion.span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 pt-0 text-foreground/80 text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
