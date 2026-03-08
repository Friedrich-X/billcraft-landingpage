import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | BillCraft – Tipps und News rund um Buchhaltung",
  description:
    "Der BillCraft Blog: Tipps, Anleitungen und News rund um Buchhaltung, Steuern und Unternehmensführung für Selbstständige und Kleinunternehmer.",
};

const blogPosts = [
  {
    title: "Rechnungen richtig schreiben",
    description:
      "Welche Pflichtangaben eine Rechnung in Österreich enthalten muss und wie du häufige Fehler vermeidest.",
    category: "Wissen",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=450&fit=crop",
    slug: "#",
  },
  {
    title: "Belege digitalisieren",
    description:
      "So archivierst du Belege GoBD-konform digital und sparst dir den Papierkram.",
    category: "Tipps",
    image:
      "https://images.unsplash.com/photo-1568234928966-359c35dd8327?w=600&h=450&fit=crop",
    slug: "#",
  },
  {
    title: "KI in der Buchhaltung",
    description:
      "Was künstliche Intelligenz heute schon in der Buchhaltung leisten kann – und wo die Grenzen liegen.",
    category: "Technologie",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=450&fit=crop",
    slug: "#",
  },
  {
    title: "Kleinunternehmerregelung 2026",
    description:
      "Alle Änderungen zur Kleinunternehmerregelung in Österreich auf einen Blick.",
    category: "Steuern",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=450&fit=crop",
    slug: "#",
  },
  {
    title: "Buchhaltung für Freelancer",
    description:
      "Der komplette Leitfaden für Freelancer: Von der Einnahmen-Ausgaben-Rechnung bis zum Steuerberater-Export.",
    category: "Leitfaden",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop",
    slug: "#",
  },
  {
    title: "Automatische Belegerfassung",
    description:
      "Wie OCR und KI zusammenarbeiten, um Belege in Sekunden zu digitalisieren und zu kategorisieren.",
    category: "Produkt",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=450&fit=crop",
    slug: "#",
  },
  {
    title: "Mahnwesen ohne Stress",
    description:
      "Wie du professionell an offene Rechnungen erinnerst – ohne die Kundenbeziehung zu belasten.",
    category: "Tipps",
    image:
      "https://images.unsplash.com/photo-1553729459-uj4pj8d5332?w=600&h=450&fit=crop",
    slug: "#",
  },
  {
    title: "Steuertipps zum Jahresende",
    description:
      "Die wichtigsten Steuer-Deadlines und was du vor dem Jahreswechsel noch erledigen solltest.",
    category: "Steuern",
    image:
      "https://images.unsplash.com/photo-1586486855514-8c667a6354be?w=600&h=450&fit=crop",
    slug: "#",
  },
  {
    title: "BillCraft vs. Excel",
    description:
      "Warum spezialisierte Buchhaltungssoftware langfristig besser ist als die Tabellenkalkulation.",
    category: "Vergleich",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Tipps, Anleitungen und News rund um Buchhaltung und
              Unternehmensführung.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                href={post.slug}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl bg-gray/30 mb-3">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
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

          {/* Coming Soon */}
          <div className="text-center mt-16 py-12 rounded-2xl border border-dashed border-gray/80">
            <p className="text-foreground/50 text-lg mb-2">
              Weitere Artikel in Arbeit
            </p>
            <p className="text-foreground/40 text-sm">
              Wir arbeiten an spannenden Inhalten. Schauen Sie bald wieder
              vorbei.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
