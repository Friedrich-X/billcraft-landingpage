"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Linkedin, Instagram, ArrowDown, CheckCircle, AlertCircle } from "lucide-react";

const PRIMARY_COLOR = "#12E08F";

const ComingSoon: React.FC = () => {
  // States and Refs from previous implementation
  const [showInput, setShowInput] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Initial Animation
  useEffect(() => {
    gsap.fromTo(
      [headlineRef.current, sublineRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 }
    );
  }, []);

  // Form logic from previous implementation
  const handleNotifyClick = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.9,
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
                { scale: 0.9, opacity: 0 },
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
        setShowPopup(true);
        form.reset();
      } else {
        setError(data.error || "Unbekannter Fehler.");
      }
    } catch {
      setError("Serverfehler. Bitte versuche es später erneut.");
    }
  };

  const handleClosePopup = useCallback(() => setShowPopup(false), []);

  // Custom style for text shadow
  const textShadowStyle = { textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)' };

  return (
    <>
      <main className="relative min-h-screen text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/background.jpg"
          layout="fill"
          objectFit="cover"
          alt="Alpen bei Sonnenaufgang"
          className="z-0"
          priority
        />
        {/* NO Color Overlay */}

        {/* Content */}
        <div className="relative z-20 min-h-screen flex flex-col p-8 sm:p-12">
          {/* Header */}
          <header className="w-full text-center">
            <h2 className="text-2xl font-semibold tracking-[0.3em] uppercase" style={textShadowStyle}>
              BILLCRAFT
            </h2>
          </header>

          {/* Center Content */}
          <section className="flex-grow flex flex-col items-center justify-center text-center">
            <h1 ref={headlineRef} className="text-7xl md:text-9xl font-bold tracking-tight" style={textShadowStyle}>
              Coming Soon.
            </h1>
            <p ref={sublineRef} className="text-2xl md:text-3xl mt-4 font-medium" style={textShadowStyle}>
              Stay tuned.
            </p>
            <div className="mt-8">
              {!showInput ? (
                <button
                  ref={buttonRef}
                  onClick={handleNotifyClick}
                  className="bg-white text-gray-900 rounded-full px-10 py-4 text-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
                >
                  Subscribe
                </button>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full max-w-md"
                  style={{ opacity: 0, scale: 0.9 }}
                >
                  {showForm && (
                    <>
                      <input
                        ref={inputRef}
                        type="email"
                        required
                        placeholder="Your email address"
                        className="w-full flex-1 px-6 py-4 rounded-full border-2 border-white/50 bg-black/30 backdrop-blur-sm placeholder-white/70 text-white outline-none focus:border-white focus:ring-2 focus:ring-white/50 text-lg"
                      />
                      <button
                        type="submit"
                        className="px-8 py-4 rounded-full font-semibold bg-white text-gray-900 shadow-lg hover:scale-105 transition-transform"
                      >
                        Send
                      </button>
                    </>
                  )}
                </form>
              )}
              {error && (
                <div className="flex items-center gap-2 mt-4 text-red-300 bg-red-900/50 backdrop-blur-sm border border-red-400 rounded-lg px-4 py-2 text-sm font-medium">
                  <AlertCircle size={20} />
                  {error}
                </div>
              )}
            </div>
          </section>

          {/* Footer */}
          <footer className="flex justify-center items-center w-full">
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/eliasratt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform hover:scale-110">
                <Linkedin size={48} style={textShadowStyle} />
              </a>
              <a href="https://instagram.com/billcraft.app" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform hover:scale-110">
                <Instagram size={48} style={textShadowStyle} />
              </a>
            </div>
          </footer>
        </div>
      </main>

      {/* Success Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in"
          onClick={handleClosePopup}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl px-12 py-12 flex flex-col items-center gap-4 max-w-lg w-full relative text-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            <CheckCircle size={48} className="text-green-500 mb-2" />
            <div className="text-xl font-bold text-center">Danke für deine Anmeldung!</div>
            <div className="text-gray-600 text-center text-base">Du wirst benachrichtigt, sobald BillCraft startet.</div>
            <button
              onClick={handleClosePopup}
              className="mt-4 px-6 py-2 rounded-full bg-[#12E08F] text-white font-semibold shadow hover:bg-[#0fcf7e]"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ComingSoon; 