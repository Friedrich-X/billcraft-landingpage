import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntermediateSection from "@/components/IntermediateSection";
import UeberUnsContent from "@/components/UeberUnsContent";

export const metadata: Metadata = {
  title: "Über uns | BillCraft – Die Geschichte hinter BillCraft",
  description:
    "Lernen Sie den Gründer hinter BillCraft kennen. Warum Buchhaltung einfacher sein muss – und wie BillCraft entstanden ist.",
};

export default function UeberUnsPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main className="pt-32">
        <UeberUnsContent />

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
