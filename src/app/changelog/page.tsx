import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Changelog | BillCraft – Alle Updates und neue Features",
  description:
    "Alle neuen Features, Verbesserungen und Änderungen in BillCraft. Bleiben Sie auf dem Laufenden über die Entwicklung.",
};

export default function ChangelogPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center min-h-[50vh] flex flex-col items-center justify-center">
            <span className="inline-block px-4 py-1.5 bg-blue/10 text-blue text-sm font-semibold rounded-full mb-6">
              Coming Soon
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Changelog
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed">
              Wir sind am Tüfteln und kündigen bald den Announce für unseren
              Beta Launch an. Bleib gespannt!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
