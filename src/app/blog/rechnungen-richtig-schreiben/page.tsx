import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  ChevronRight,
  User,
} from "lucide-react";

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

const tags = [
  "Rechnung",
  "Pflichtangaben",
  "Österreich",
  "UStG",
  "Kleinunternehmer",
  "Buchhaltung",
  "Steuer",
  "Rechnungsnummer",
];

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
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
            {/* Left Column — Article */}
            <article className="min-w-0">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-sm text-foreground/50 mb-6">
                <Link href="/" className="hover:text-blue transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link
                  href="/blog"
                  className="hover:text-blue transition-colors"
                >
                  Blog
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-foreground/70 truncate">
                  Rechnungen richtig schreiben
                </span>
              </nav>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
                Rechnungen richtig schreiben: Pflichtangaben in Österreich
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/50 mb-8">
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  BillCraft Team
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  8. März 2026
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />5 Min. Lesezeit
                </span>
                <span className="px-2 py-0.5 rounded-full bg-blue/10 text-blue text-xs font-semibold">
                  Wissen
                </span>
              </div>

              {/* Hero Image */}
              <div className="aspect-[16/9] relative overflow-hidden rounded-2xl bg-gray/30 mb-10">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&h=788&fit=crop"
                  alt="Rechnungen richtig schreiben"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  priority
                />
              </div>

              {/* Article Content */}
              <div className="max-w-none">
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-3">
                  Warum korrekte Rechnungen so wichtig sind
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Eine fehlerhafte Rechnung kann dazu führen, dass dein Kunde
                  den Vorsteuerabzug verliert – und du im schlimmsten Fall
                  Steuernachzahlungen leisten musst. Außerdem wirkt eine
                  professionelle Rechnung seriös und stärkt das Vertrauen deiner
                  Kunden.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-3">
                  Die Pflichtangaben im Überblick
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Laut § 11 UStG müssen folgende Angaben auf jeder Rechnung
                  enthalten sein:
                </p>
                <ul className="space-y-2.5 mb-6">
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

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-3">
                  Sonderfall: Kleinbetragsrechnungen
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Für Rechnungen bis 400 Euro brutto gelten vereinfachte Regeln.
                  Hier reichen: Name und Anschrift des Leistenden, Menge und
                  Bezeichnung, Entgelt und Steuersatz sowie das
                  Ausstellungsdatum. Die UID-Nummer und der Name des Empfängers
                  sind nicht erforderlich.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-3">
                  Sonderfall: Kleinunternehmerregelung
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Wenn du die Kleinunternehmerregelung nach § 6 Abs. 1 Z 27 UStG
                  nutzt, darfst du keine Umsatzsteuer auf deinen Rechnungen
                  ausweisen. Stattdessen muss der Hinweis „Umsatzsteuerbefreit
                  gemäß § 6 Abs. 1 Z 27 UStG" auf der Rechnung stehen.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-3">
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

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-3">
                  So hilft dir BillCraft
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Mit BillCraft musst du dir um Pflichtangaben keine Gedanken
                  machen. Die Software sorgt automatisch dafür, dass alle
                  gesetzlichen Anforderungen erfüllt sind: fortlaufende
                  Rechnungsnummern, korrekte Steuerberechnung, Pflichthinweise
                  für Kleinunternehmer und vieles mehr.
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
            </article>

            {/* Right Column — Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start space-y-8">
              {/* Share */}
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  Teilen
                </h3>
                <div className="flex items-center gap-2">
                  <a
                    href="https://twitter.com/intent/tweet?url=https://billcraft.at/blog/rechnungen-richtig-schreiben&text=Rechnungen%20richtig%20schreiben"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gray/50 hover:bg-blue hover:text-white flex items-center justify-center text-foreground/60 transition-all"
                    aria-label="Auf X teilen"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://billcraft.at/blog/rechnungen-richtig-schreiben"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gray/50 hover:bg-blue hover:text-white flex items-center justify-center text-foreground/60 transition-all"
                    aria-label="Auf LinkedIn teilen"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://billcraft.at/blog/rechnungen-richtig-schreiben"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gray/50 hover:bg-blue hover:text-white flex items-center justify-center text-foreground/60 transition-all"
                    aria-label="Auf Facebook teilen"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <button
                    className="w-10 h-10 rounded-xl bg-gray/50 hover:bg-blue hover:text-white flex items-center justify-center text-foreground/60 transition-all cursor-pointer"
                    aria-label="Link kopieren"
                  >
                    <Link2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-gray/50 text-sm text-foreground/70 hover:bg-blue/10 hover:text-blue transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related */}
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  Weitere Artikel
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.title}
                      href={post.slug}
                      className="group flex gap-3 cursor-pointer"
                    >
                      <div className="w-20 h-16 relative overflow-hidden rounded-lg bg-gray/30 shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="80px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-semibold text-foreground leading-snug group-hover:text-blue transition-colors mb-0.5">
                          {post.title}
                        </h4>
                        <p className="text-xs text-foreground/50 leading-relaxed line-clamp-2">
                          {post.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
