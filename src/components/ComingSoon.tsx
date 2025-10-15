"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Linkedin, Instagram } from "lucide-react";

const ComingSoon: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);

  // Initial Animation
  useEffect(() => {
    gsap.fromTo(
      [headlineRef.current, sublineRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 }
    );
  }, []);

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
              <a href="https://www.linkedin.com/in/eliasratt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-all hover:scale-110 text-dark-blue hover:text-blue">
                <Linkedin className="h-8 w-8 md:h-10 md:w-10" />
              </a>
              <a href="https://instagram.com/billcraft.app" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-all hover:scale-110 text-dark-blue hover:text-blue">
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