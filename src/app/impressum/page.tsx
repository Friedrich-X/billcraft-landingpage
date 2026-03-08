import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum | BillCraft",
  description:
    "Impressum der BillCraft-Website gemäß § 5 E-Commerce-Gesetz (ECG).",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">
            Impressum
          </h1>

          <div className="space-y-8 text-foreground/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Angaben gemäß § 5 E-Commerce-Gesetz (ECG)
              </h2>
              <p>
                <strong className="text-foreground">Elias Ratt</strong>
                <br />
                Erdbergstraße 150/1/26-27
                <br />
                1030 Wien
                <br />
                Österreich
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Kontakt
              </h2>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:hallo@billcraft.app"
                  className="text-primary hover:underline"
                >
                  hallo@billcraft.app
                </a>
                <br />
                Website:{" "}
                <a
                  href="https://billcraft.app"
                  className="text-primary hover:underline"
                >
                  https://billcraft.app
                </a>
                <br />
                Service:{" "}
                <a
                  href="https://app.billcraft.app"
                  className="text-primary hover:underline"
                >
                  https://app.billcraft.app
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Unternehmensgegenstand
              </h2>
              <p>
                Entwicklung und Betrieb einer cloudbasierten Software zur
                Rechnungserstellung und Buchhaltung (Software-as-a-Service).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Anwendbare Rechtsvorschriften
              </h2>
              <p>
                Gewerbeordnung (GewO), E-Commerce-Gesetz (ECG),
                Datenschutzgesetz (DSG), Datenschutz-Grundverordnung (DSGVO).
              </p>
              <p className="mt-2">
                Abrufbar unter:{" "}
                <a
                  href="https://www.ris.bka.gv.at"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.ris.bka.gv.at
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Umsatzsteuer
              </h2>
              <p>
                Gemäß § 6 Abs. 1 Z 27 UStG (Kleinunternehmerregelung) wird keine
                Umsatzsteuer ausgewiesen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Verantwortlich für den Inhalt
              </h2>
              <p>Elias Ratt (Anschrift wie oben)</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht verpflichtet und nicht bereit, an einem
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Haftungsausschluss
              </h2>

              <h3 className="text-lg font-medium text-foreground mb-2 mt-4">
                Haftung für Inhalte
              </h3>
              <p>
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
                erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                der Inhalte wird jedoch keine Gewähr übernommen.
              </p>

              <h3 className="text-lg font-medium text-foreground mb-2 mt-4">
                Haftung für Links
              </h3>
              <p>
                Diese Website enthält Links zu externen Websites Dritter, auf
                deren Inhalte kein Einfluss besteht. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter
                verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden
                derartige Links umgehend entfernt.
              </p>

              <h3 className="text-lg font-medium text-foreground mb-2 mt-4">
                Urheberrecht
              </h3>
              <p>
                Die durch den Betreiber erstellten Inhalte und Werke auf dieser
                Website unterliegen dem österreichischen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
                schriftlichen Zustimmung des Betreibers.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
