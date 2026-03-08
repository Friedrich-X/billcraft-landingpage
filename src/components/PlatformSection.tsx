"use client";

import { Smartphone, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export default function PlatformSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-[4.5rem] font-semibold text-foreground text-center mb-16 md:mb-20 leading-tight"
        >
          Starten Sie jetzt mit BillCraft.
        </motion.h2>

        {/* 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Mobile App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gray rounded-2xl p-8 md:p-10"
          >
            <div className="w-12 h-12 bg-[#FF50A7]/10 rounded-2xl flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6 text-[#FF50A7]" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Mobile
            </h3>
            <p className="text-foreground/55 leading-relaxed mb-8">
              Rechnungen erstellen, Belege scannen und Kunden verwalten –
              unterwegs auf deinem Smartphone.
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-foreground hover:bg-blue text-white font-semibold py-3.5 px-6 rounded-xl transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-foreground hover:bg-blue text-white font-semibold py-3.5 px-6 rounded-xl transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
                </svg>
                Google Play
              </a>
            </div>
          </motion.div>

          {/* Web-App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-gray rounded-2xl p-8 md:p-10"
          >
            <div className="w-12 h-12 bg-[#5C6CFE]/10 rounded-2xl flex items-center justify-center mb-6">
              <Monitor className="w-6 h-6 text-[#5C6CFE]" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Web-App
            </h3>
            <p className="text-foreground/55 leading-relaxed mb-8">
              Voller Funktionsumfang direkt im Browser. Kein Download nötig –
              einfach einloggen und loslegen.
            </p>
            <div className="space-y-3">
              <a
                href="#signup"
                className="flex items-center justify-center gap-3 bg-foreground hover:bg-blue text-white font-semibold py-3.5 px-6 rounded-xl transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Im Browser öffnen
              </a>
            </div>

            {/* Browser Icons */}
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-foreground/5">
              <span className="text-xs text-foreground/40 mr-1">
                Unterstützt:
              </span>
              {/* Chrome */}
              <div
                className="w-9 h-9 rounded-xl bg-white flex items-center justify-center"
                title="Chrome"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9L9.5 12l-1.82 5.6C9.08 18.48 10.47 19 12 19c1.53 0 2.92-.52 4.03-1.4L14.21 12l3.82-5.52A7.96 7.96 0 0120 12c0 4.41-3.59 8-8 8z"
                    opacity="0.3"
                  />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </div>
              {/* Firefox */}
              <div
                className="w-9 h-9 rounded-xl bg-white flex items-center justify-center"
                title="Firefox"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  opacity="0.7"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              {/* Safari */}
              <div
                className="w-9 h-9 rounded-xl bg-white flex items-center justify-center"
                title="Safari"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  opacity="0.7"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.31-4.69L7.5 16.5l1.19-3.19L15.5 7.5l-1.19 3.19-3.62 4.62z" />
                </svg>
              </div>
              {/* Edge */}
              <div
                className="w-9 h-9 rounded-xl bg-white flex items-center justify-center"
                title="Edge"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  opacity="0.7"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-13h4v2h-4zm0 4h6v2H8v-2zm0 4h8v2H8v-2z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
