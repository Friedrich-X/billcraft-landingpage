"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { Linkedin, Instagram, CheckCircle, AlertCircle } from "lucide-react";

const PRIMARY_COLOR = "#12E08F";

const ComingSoon: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  // Initial Animation for Headline and Subline
  useEffect(() => {
    if (headlineRef.current && sublineRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        sublineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power3.out" }
      );
    }
  }, []);

  // Focus input when form is shown
  useEffect(() => {
    if (showForm && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showForm]);

  // Click outside and Escape detection
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(e.target as Node)) {
      // Animate form out
      gsap.to(formRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          setShowForm(false);
          setTimeout(() => {
            setShowInput(false);
            if (buttonRef.current) {
              gsap.fromTo(
                buttonRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
              );
            }
          }, 50);
        },
      });
    }
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && showForm) {
      if (formRef.current) {
        gsap.to(formRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.35,
          ease: "power2.inOut",
          onComplete: () => {
            setShowForm(false);
            setTimeout(() => {
              setShowInput(false);
              if (buttonRef.current) {
                gsap.fromTo(
                  buttonRef.current,
                  { scale: 0.8, opacity: 0 },
                  { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
                );
              }
            }, 50);
          },
        });
      }
    }
  }, [showForm]);

  useEffect(() => {
    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [showForm, handleClickOutside, handleKeyDown]);

  const handleNotifyClick = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          setShowInput(true);
          setTimeout(() => {
            setShowForm(true);
            if (formRef.current) {
              gsap.fromTo(
                formRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
              );
            }
          }, 50);
        },
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    const form = e.target as HTMLFormElement;
    const email = (form.elements[0] as HTMLInputElement).value;
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setShowPopup(true);
        form.reset();
      } else {
        setError(data.error || "Unbekannter Fehler.");
      }
    } catch {
      setError("Serverfehler. Bitte versuche es später erneut.");
    }
  };

  // Popup schließen (Overlay, Button, Escape)
  const handleClosePopup = useCallback(() => setShowPopup(false), []);
  useEffect(() => {
    if (!showPopup) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPopup(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [showPopup]);

  // Progress Bar Animation
  useEffect(() => {
    // Progress Bar Animation
    const bar = document.getElementById("progress-bar");
    if (bar) {
      gsap.to(bar, { width: "20%", duration: 1.2, ease: "power3.out", delay: 1 });
    }
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-white via-[#e6fcf3] to-[#d2f5e6] overflow-hidden">
      <h1
        ref={headlineRef}
        className="text-6xl md:text-7xl font-extrabold font-sans text-center text-gray-900 mb-4 tracking-tight outline-none"
        tabIndex={0}
        aria-label="Coming Soon"
      >
        Coming Soon
      </h1>
      <p
        ref={sublineRef}
        className="text-2xl font-medium font-sans text-gray-600 text-center mb-10 outline-none"
        tabIndex={0}
        aria-label="BillCraft – Die smarte Rechnungs-App"
      >
        BillCraft – Die smarte Rechnungs-App
      </p>
      {!showInput ? (
        <button
          ref={buttonRef}
          className="px-8 py-3 rounded-full font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-[#12E08F]/50 transition-all duration-200 bg-[#12E08F] hover:bg-[#0fcf7e] active:bg-[#0bbf6e] text-base font-sans uppercase tracking-wide transform hover:scale-105 focus:scale-105"
          aria-label="Notify Me"
          tabIndex={0}
          onClick={handleNotifyClick}
        >
          Notify Me
        </button>
      ) : (
        <form
          ref={formRef}
          className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full max-w-xs"
          aria-label="Benachrichtige mich beim Launch"
          onSubmit={handleSubmit}
          style={{ opacity: 0, scale: 0.8 }}
        >
          {showForm && (
            <>
              <input
                ref={inputRef}
                type="email"
                required
                placeholder="Deine E-Mail-Adresse"
                className="w-full flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-[#12E08F] focus:ring-2 focus:ring-[#12E08F]/30 outline-none text-gray-900 text-base font-sans"
                aria-label="E-Mail-Adresse für Benachrichtigung"
                tabIndex={0}
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-[#12E08F]/50 transition-all duration-200 bg-[#12E08F] hover:bg-[#0fcf7e] active:bg-[#0bbf6e] text-base font-sans uppercase tracking-wide transform hover:scale-110 focus:scale-110 hover:shadow-2xl"
                aria-label="Senden"
                tabIndex={0}
              >
                Senden
              </button>
            </>
          )}
        </form>
      )}
      {/* Feedback-Meldungen */}
      {success && error && (
        <div className="flex items-center gap-2 mt-3 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-sm font-medium animate-fade-in">
          <AlertCircle size={20} />
          {error}
        </div>
      )}
      {/* Fullscreen Erfolgspopup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in"
          aria-modal="true"
          tabIndex={-1}
          onClick={handleClosePopup}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl px-12 py-12 flex flex-col items-center gap-4 max-w-lg w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <CheckCircle size={48} className="text-green-500 mb-2" />
            <div className="text-xl font-bold text-gray-900 text-center">Danke für deine Anmeldung!</div>
            <div className="text-gray-600 text-center text-base">Du wirst benachrichtigt, sobald BillCraft startet.</div>
            <button
              onClick={handleClosePopup}
              className="mt-4 px-6 py-2 rounded-full bg-[#12E08F] text-white font-semibold shadow hover:bg-[#0fcf7e] focus:outline-none focus:ring-2 focus:ring-[#12E08F]/50 transition"
              aria-label="Popup schließen"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
      {/* Progress Bar & Socials unten mittig */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 w-full max-w-xs">
        {/* Progress Bar */}
        <div className="w-full flex flex-col items-center mb-2">
          <div className="flex items-center justify-between w-full mb-1">
            <span className="text-xs text-gray-500 font-medium">Projektfortschritt</span>
            <span className="text-xs text-gray-700 font-semibold">20% fertig</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div id="progress-bar" className="h-full bg-[#12E08F] rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex gap-4 justify-center mt-1">
          <a href="https://www.linkedin.com/in/eliasratt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[#12E08F] transition-colors duration-200">
            <Linkedin size={24} strokeWidth={2} />
          </a>
          <a href="https://instagram.com/elias.ratt" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#12E08F] transition-colors duration-200">
            <Instagram size={24} strokeWidth={2} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default ComingSoon; 