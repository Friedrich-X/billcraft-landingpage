import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt | BillCraft – Schreiben Sie uns",
  description:
    "Kontaktieren Sie das BillCraft-Team. Wir freuen uns auf Ihre Nachricht – ob Fragen, Feedback oder Zusammenarbeit.",
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Kontakt
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Haben Sie Fragen, Feedback oder möchten Sie zusammenarbeiten?
              Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gray rounded-2xl border border-gray/80 p-8">
              <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                E-Mail
              </h3>
              <p className="text-foreground/60 mb-4">
                Schreiben Sie uns – wir antworten in der Regel innerhalb von
                24 Stunden.
              </p>
              <a
                href="mailto:hello@billcraft.at"
                className="text-blue hover:text-dark-blue font-medium transition-colors"
              >
                hello@billcraft.at
              </a>
            </div>

            <div className="bg-gray rounded-2xl border border-gray/80 p-8">
              <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Standort
              </h3>
              <p className="text-foreground/60 mb-4">
                BillCraft wird in Österreich entwickelt.
              </p>
              <p className="text-foreground/80 font-medium">
                Wien, Österreich
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
