import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Buchhaltung neu erfunden für{" "}
              <span className="text-blue">moderne Unternehmer</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              Die intuitive Buchhaltungssoftware, die dir Zeit spart und dein Business wachsen lässt. Einfach, schnell und intelligent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="#signup" variant="primary" size="lg">
                Kostenlos starten
              </Button>
              <Button href="#demo" variant="outline" size="lg">
                Live Demo ansehen
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-foreground/50">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Grundfunktionen kostenlos</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Keine Kreditkarte erforderlich</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Jederzeit upgraden oder kündbar</span>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 max-w-7xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray">
              <Image
                src="/images/dashboardtest.png"
                alt="BillCraft Dashboard Preview"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 