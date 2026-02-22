import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ProductHero } from "../../components/product-hero";
import InvoiceExampleCard from "../../components/invoice/InvoiceExampleCard";

export const metadata: Metadata = {
  title: "Rechnungen erstellen | BillCraft – Professionelle Rechnungen in Minuten",
  description:
    "Erstellen und versenden Sie professionelle Rechnungen mit BillCraft. Alle Pflichtangaben, individuelle Vorlagen, Versand per E-Mail.",
};

export default function RechnungenPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <ProductHero
          title="Rechnungen erstellen – schnell und rechtssicher"
          description="Erstellen Sie professionelle Rechnungen mit allen Pflichtangaben. Wählen Sie eine Vorlage, füllen Sie die Felder aus und versenden Sie per E-Mail – alles aus einer Oberfläche."
          ctaText="Kostenlos Rechnung erstellen"
          ctaHref="#signup"
          headingId="rechnungen-hero-heading"
        >
          <InvoiceExampleCard />
        </ProductHero>
      </main>

      <Footer />
    </div>
  );
}
