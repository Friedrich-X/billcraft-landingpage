import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntermediateSection from "@/components/IntermediateSection";

export const metadata: Metadata = {
  title: "Über uns | BillCraft – Das Team hinter BillCraft",
  description:
    "Lernen Sie das Team hinter BillCraft kennen. Unsere Mission: Buchhaltung für kleine Unternehmen einfach, intelligent und zugänglich machen.",
};

const values = [
  {
    title: "Einfachheit",
    description:
      "Buchhaltung muss nicht kompliziert sein. Wir bauen Software, die jeder versteht – ohne Fachjargon und ohne steile Lernkurve.",
  },
  {
    title: "Transparenz",
    description:
      "Keine versteckten Kosten, keine undurchsichtigen Prozesse. Was BillCraft kann und kostet, ist klar kommuniziert.",
  },
  {
    title: "Innovation",
    description:
      "Wir setzen auf KI und Automatisierung, um Routineaufgaben zu eliminieren. Damit unsere Nutzer mehr Zeit für ihr Kerngeschäft haben.",
  },
  {
    title: "Kundennähe",
    description:
      "BillCraft wird gemeinsam mit unseren Nutzern entwickelt. Feedback fließt direkt in die Produktentwicklung ein.",
  },
];

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Über BillCraft
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Wir glauben, dass Buchhaltung kein Hindernis sein sollte – sondern
              ein Werkzeug, das kleine Unternehmen stärkt. BillCraft macht
              Finanzverwaltung einfach, intelligent und zugänglich.
            </p>
          </div>

          {/* Mission */}
          <div className="max-w-3xl mx-auto mb-24">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Unsere Mission
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Jedes Unternehmen verdient professionelle Buchhaltung – unabhängig
              von Größe oder Budget. BillCraft wird in Österreich entwickelt und
              verbindet moderne Technologie mit den Anforderungen des
              deutschsprachigen Marktes. Von der ersten Rechnung bis zur
              Steuerauswertung.
            </p>
          </div>

          {/* Werte */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">
              Unsere Werte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-gray rounded-2xl border border-gray/80 p-8"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <IntermediateSection
          headline="Überzeugt? Probieren Sie BillCraft aus."
          description="Starten Sie kostenlos und erleben Sie, wie einfach Buchhaltung sein kann."
          ctaText="Kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
          headlineHighlight="BillCraft"
        />
      </main>

      <Footer />
    </div>
  );
}
