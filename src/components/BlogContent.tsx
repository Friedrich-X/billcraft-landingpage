"use client";

import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BlogContent() {
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <h1 className="!mb-4">Blog</h1>
          <p className="text-[length:var(--font-body)] text-foreground/70 leading-[1.75]">
            Tipps, Anleitungen und News rund um Buchhaltung und
            {" Unternehmensf\u00fchrung."}
          </p>
        </motion.div>

        {/* Empty State */}
        <motion.div
          className="text-center py-20 md:py-28 rounded-2xl border border-dashed border-foreground/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          <div className="w-14 h-14 rounded-2xl bg-blue/10 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-7 h-7 text-blue" />
          </div>
          <p className="text-xl font-semibold text-foreground mb-2">
            Noch keine Beitr&auml;ge vorhanden
          </p>
          <p className="text-foreground/50 max-w-md mx-auto">
            Wir arbeiten an spannenden Inhalten rund um Buchhaltung, Steuern und
            Tipps f&uuml;r Selbstst&auml;ndige. Schau bald wieder vorbei!
          </p>
        </motion.div>
      </div>
    </main>
  );
}
