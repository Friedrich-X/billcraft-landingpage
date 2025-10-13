"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Linkedin, Instagram, CheckCircle, AlertCircle } from "lucide-react";

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

  return (
    <>
      <main className="relative h-screen overflow-hidden">
        {/* Content */}
        <div className="relative z-20 h-screen flex flex-col p-4 md:p-12">
          {/* Center Content */}
          <section className="flex-grow flex flex-col items-center justify-center">
            <div ref={headlineRef}>
              <Image src="/billcraft.svg" alt="BillCraft Logo" width={280} height={280} className="w-48 h-48 md:w-[280px] md:h-[280px]" />
            </div>
          </section>

          {/* Footer */}
          <footer className="flex justify-center items-center w-full">
            <div className="flex items-center gap-5">
              <a href="https://www.linkedin.com/in/eliasratt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-all hover:scale-110 text-graphite-black hover:text-dark-blue">
                <Linkedin className="h-8 w-8 md:h-10 md:w-10" />
              </a>
              <a href="https://instagram.com/billcraft.app" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-all hover:scale-110 text-graphite-black hover:text-dark-blue">
                <Instagram className="h-8 w-8 md:h-10 md:w-10" />
              </a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default ComingSoon; 