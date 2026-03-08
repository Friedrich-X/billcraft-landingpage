import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Rechnungen richtig schreiben: Pflichtangaben in Österreich | BillCraft Blog",
  description:
    "Welche Pflichtangaben eine Rechnung in Österreich enthalten muss, häufige Fehler und wie BillCraft dir hilft, rechtssichere Rechnungen zu erstellen.",
  openGraph: {
    title: "Rechnungen richtig schreiben: Pflichtangaben in Österreich",
    description:
      "Welche Pflichtangaben eine Rechnung in Österreich enthalten muss und wie du häufige Fehler vermeidest.",
  },
};

const relatedPosts = [
  {
    title: "Belege digitalisieren",
    description:
      "So archivierst du Belege GoBD-konform digital und sparst dir den Papierkram.",
    image:
      "https://images.unsplash.com/photo-1568234928966-359c35dd8327?w=600&h=450&fit=crop",
    slug: "/blog",
  },
  {
    title: "Kleinunternehmerregelung 2026",
    description:
      "Alle Änderungen zur Kleinunternehmerregelung in Österreich auf einen Blick.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=450&fit=crop",
    slug: "/blog",
  },
  {
    title: "Mahnwesen ohne Stress",
    description:
      "Wie du professionell an offene Rechnungen erinnerst – ohne die Kundenbeziehung zu belasten.",
    image:
      "https://images.unsplash.com/photo-1553729459-uj4pj8d5332?w=600&h=450&fit=crop",
    slug: "/blog",
  },
];

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <article className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-blue transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zum Blog
          </Link>

          {/* Article Header */}
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-1.5 text-sm text-foreground/50">
                <Tag className="w-3.5 h-3.5" />
                Wissen
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-foreground/50">
                <Clock className="w-3.5 h-3.5" />5 Min. Lesezeit
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
              Rechnungen richtig schreiben: Pflichtangaben in Österreich
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Eine Rechnung ist mehr als nur eine Zahlungsaufforderung. In
              Österreich gibt es klare gesetzliche Vorgaben, welche Angaben
              enthalten sein müssen. Wir zeigen dir, worauf du achten musst.
            </p>
          </div>

          {/* Hero Image */}
          <div className="aspect-[21/9] relative overflow-hidden rounded-2xl bg-gray/30 mb-12">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&h=600&fit=crop"
              alt="Rechnungen richtig schreiben"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                Warum korrekte Rechnungen so wichtig sind
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Eine fehlerhafte Rechnung kann dazu führen, dass dein Kunde den
                Vorsteuerabzug verliert – und du im schlimmsten Fall
                Steuernachzahlungen leisten musst. Außerdem wirkt eine
                professionelle Rechnung seriös und stärkt das Vertrauen deiner
                Kunden.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                Die Pflichtangaben im Überblick
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Laut § 11 UStG müssen folgende Angaben auf jeder Rechnung
                enthalten sein:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Name und Anschrift des leistenden Unternehmers",
                  "Name und Anschrift des Leistungsempfängers",
                  "Menge und Bezeichnung der Lieferung oder Leistung",
                  "Tag oder Zeitraum der Lieferung/Leistung",
                  "Entgelt (Nettobetrag) für die Lieferung oder Leistung",
                  "Der anzuwendende Steuersatz (z.B. 20 % oder 10 %)",
                  "Der auf das Entgelt entfallende Steuerbetrag",
                  "Ausstellungsdatum der Rechnung",
                  "Fortlaufende Rechnungsnummer",
                  "UID-Nummer des Rechnungsstellers",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-foreground/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                Sonderfall: Kleinbetragsrechnungen
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Für Rechnungen bis 400 Euro brutto gelten vereinfachte Regeln.
                Hier reichen: Name und Anschrift des Leistenden, Menge und
                Bezeichnung, Entgelt und Steuersatz sowie das Ausstellungsdatum.
                Die UID-Nummer und der Name des Empfängers sind nicht
                erforderlich.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                Sonderfall: Kleinunternehmerregelung
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Wenn du die Kleinunternehmerregelung nach § 6 Abs. 1 Z 27 UStG
                nutzt, darfst du keine Umsatzsteuer auf deinen Rechnungen
                ausweisen. Stattdessen muss der Hinweis „Umsatzsteuerbefreit
                gemäß § 6 Abs. 1 Z 27 UStG" auf der Rechnung stehen.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                Häufige Fehler vermeiden
              </h2>
              <div className="space-y-4 mb-6">
                {[
                  {
                    title: "Fehlende Rechnungsnummer",
                    text: "Jede Rechnung braucht eine fortlaufende, einmalige Nummer. Lücken sind erlaubt, Doppelvergaben nicht.",
                  },
                  {
                    title: "Falscher Leistungszeitraum",
                    text: "Das Lieferdatum oder der Leistungszeitraum muss immer angegeben werden – auch wenn es mit dem Rechnungsdatum übereinstimmt.",
                  },
                  {
                    title: "USt falsch ausgewiesen",
                    text: "Der Steuerbetrag muss korrekt berechnet und separat ausgewiesen werden. Bei gemischten Steuersätzen für jede Position einzeln.",
                  },
                  {
                    title: "Fehlende UID-Nummer",
                    text: "Ab einer bestimmten Umsatzgrenze ist die UID-Nummer verpflichtend. Prüfe, ob du eine benötigst.",
                  },
                ].map((error) => (
                  <div
                    key={error.title}
                    className="border-l-2 border-orange-500 pl-4"
                  >
                    <p className="font-semibold text-foreground mb-1">
                      {error.title}
                    </p>
                    <p className="text-sm text-foreground/60">{error.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                So hilft dir BillCraft
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Mit BillCraft musst du dir um Pflichtangaben keine Gedanken
                machen. Die Software sorgt automatisch dafür, dass alle
                gesetzlichen Anforderungen erfüllt sind: fortlaufende
                Rechnungsnummern, korrekte Steuerberechnung, Pflichthinweise für
                Kleinunternehmer und vieles mehr.
              </p>

              {/* CTA Box */}
              <div className="rounded-2xl bg-foreground p-8 md:p-10 mt-10">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Rechtssichere Rechnungen in Sekunden
                </h3>
                <p className="text-white/70 mb-6">
                  Erstelle deine erste Rechnung mit allen Pflichtangaben –
                  kostenlos und ohne Einrichtung.
                </p>
                <Link
                  href="/rechnungen"
                  className="inline-flex items-center gap-2 bg-blue hover:bg-blue/90 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Jetzt kostenlos starten
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mt-20">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Weitere Artikel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-8">
            {relatedPosts.map((post) => (
              <Link
                key={post.title}
                href={post.slug}
                className="group cursor-pointer flex flex-col"
              >
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl bg-gray/30 mb-3">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed flex-1">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground mt-2.5 group-hover:text-blue transition-colors">
                  Mehr erfahren
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-200" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
