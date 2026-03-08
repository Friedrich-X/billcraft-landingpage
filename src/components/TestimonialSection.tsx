"use client";

import React from "react";
import { motion } from "framer-motion";

export interface TestimonialSectionProps {
  headline?: string;
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    company?: string;
  }>;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  headline = "Was unsere Kunden sagen",
  testimonials,
}) => {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-background"
      aria-labelledby="testimonial-section-heading"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.h2
          id="testimonial-section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-12"
        >
          {headline}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1,
              }}
              className="rounded-2xl bg-gray border border-gray/80 p-6 md:p-8"
            >
              <span className="block text-4xl text-blue/20 leading-none mb-4">
                &ldquo;
              </span>
              <p className="text-lg text-foreground/80 leading-relaxed italic mb-6">
                {testimonial.quote}
              </p>
              <div>
                <p className="text-base font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-foreground/60">
                  {testimonial.role}
                  {testimonial.company && `, ${testimonial.company}`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
