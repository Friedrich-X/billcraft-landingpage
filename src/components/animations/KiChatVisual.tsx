"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

const USER_MESSAGE = "Rechnung für Kunde Müller erstellen";
const AI_RESPONSE_LINES = [
  "Rechnung RE-2025-003 erstellt:",
  "Kunde Müller GmbH, 1010 Wien",
  "Beratung · 10 Std. · 1.000,00 €",
  "USt 20% · 200,00 €",
  "Gesamt: 1.200,00 €",
];

type Phase = "idle" | "typing" | "sent" | "thinking" | "responding" | "done";

const DELAY_IDLE = 1200;
const TYPING_SPEED = 55;
const DELAY_AFTER_SENT = 800;
const DELAY_THINKING = 1400;
const DELAY_PER_LINE = 400;
const DELAY_DONE_PAUSE = 5000;

const KiChatVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("idle");
  const [typedChars, setTypedChars] = useState(0);
  const [visibleResponseLines, setVisibleResponseLines] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (phase === "idle") {
      setTypedChars(0);
      setVisibleResponseLines(0);
      const t = setTimeout(() => setPhase("typing"), DELAY_IDLE);
      return () => clearTimeout(t);
    }

    if (phase === "typing") {
      if (typedChars < USER_MESSAGE.length) {
        const t = setTimeout(() => setTypedChars((n) => n + 1), TYPING_SPEED);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("sent"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "sent") {
      const t = setTimeout(() => setPhase("thinking"), DELAY_AFTER_SENT);
      return () => clearTimeout(t);
    }

    if (phase === "thinking") {
      const t = setTimeout(() => setPhase("responding"), DELAY_THINKING);
      return () => clearTimeout(t);
    }

    if (phase === "responding") {
      if (visibleResponseLines < AI_RESPONSE_LINES.length) {
        const t = setTimeout(
          () => setVisibleResponseLines((n) => n + 1),
          DELAY_PER_LINE,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("done"), 600);
      return () => clearTimeout(t);
    }

    if (phase === "done") {
      const t = setTimeout(() => {
        setPhase("idle");
        setTypedChars(0);
        setVisibleResponseLines(0);
      }, DELAY_DONE_PAUSE);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, typedChars, visibleResponseLines, isInView]);

  const showUserMessage =
    phase === "typing" ||
    phase === "sent" ||
    phase === "thinking" ||
    phase === "responding" ||
    phase === "done";

  const showThinking = phase === "thinking";
  const showResponse = phase === "responding" || phase === "done";

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-base font-semibold text-foreground">
            BillCraft KI
          </span>
          <span className="ml-auto text-xs text-green-600 font-medium">
            Online
          </span>
        </div>

        {/* Chat area */}
        <div className="flex-1 p-4 space-y-3 overflow-hidden flex flex-col justify-end">
          <AnimatePresence>
            {/* User message */}
            {showUserMessage && (
              <motion.div
                key="user-msg"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="flex justify-end"
              >
                <div className="bg-foreground text-white rounded-2xl rounded-br-sm px-3.5 py-2 max-w-[85%] text-sm">
                  {phase === "typing"
                    ? USER_MESSAGE.slice(0, typedChars)
                    : USER_MESSAGE}
                  {phase === "typing" && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="inline-block w-0.5 h-4 bg-white/80 ml-0.5 align-middle"
                    />
                  )}
                </div>
              </motion.div>
            )}

            {/* Thinking indicator */}
            {showThinking && (
              <motion.div
                key="thinking"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex justify-start"
              >
                <div className="bg-gray/60 rounded-2xl rounded-bl-sm px-3.5 py-2.5 flex items-center gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      className="w-1.5 h-1.5 rounded-full bg-purple-500"
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* AI response */}
            {showResponse && (
              <motion.div
                key="ai-response"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="flex justify-start"
              >
                <div className="bg-purple-50 border border-purple-100 rounded-2xl rounded-bl-sm px-3.5 py-2.5 max-w-[90%]">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Sparkles className="w-3 h-3 text-purple-600" />
                    <span className="text-xs font-semibold text-purple-700">
                      KI-Assistent
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    {AI_RESPONSE_LINES.slice(0, visibleResponseLines).map(
                      (line, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                          className={`text-sm text-foreground/90 ${
                            i === 0 ? "font-semibold" : ""
                          } ${
                            i === AI_RESPONSE_LINES.length - 1
                              ? "font-semibold text-purple-700 mt-1"
                              : ""
                          }`}
                        >
                          {line}
                        </motion.p>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input bar */}
        <div className="px-3 py-2.5 border-t border-gray/50 flex items-center gap-2">
          <div className="flex-1 bg-gray/40 rounded-lg px-3 py-1.5 text-sm text-foreground/40">
            Nachricht eingeben...
          </div>
          <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center">
            <Send className="w-4 h-4 text-foreground/40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KiChatVisual;
