import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | BillCraft – Tipps und News rund um Buchhaltung",
  description:
    "Der BillCraft Blog: Tipps, Anleitungen und News rund um Buchhaltung, Steuern und Unternehmensführung für Selbstständige und Kleinunternehmer.",
};

const placeholderArticles = [
  {
    title: "Rechnungen richtig schreiben: Pflichtangaben in Österreich",
    category: "Wissen",
    date: "Bald verfügbar",
  },
  {
    title: "Belege digitalisieren: So geht GoBD-konforme Archivierung",
    category: "Tipps",
    date: "Bald verfügbar",
  },
  {
    title: "KI in der Buchhaltung: Was ist heute schon möglich?",
    category: "Technologie",
    date: "Bald verfügbar",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Tipps, Anleitungen und News rund um Buchhaltung und
              Unternehmensführung. Bald geht es hier los.
            </p>
          </div>

          {/* Placeholder Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {placeholderArticles.map((article) => (
              <div
                key={article.title}
                className="bg-gray rounded-2xl border border-gray/80 p-8 flex flex-col"
              >
                <span className="text-xs font-semibold text-blue uppercase tracking-wider mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-4 leading-snug flex-1">
                  {article.title}
                </h3>
                <p className="text-sm text-foreground/40">{article.date}</p>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="text-center mt-16">
            <p className="text-foreground/50 text-lg">
              Wir arbeiten an den ersten Artikeln. Schauen Sie bald wieder vorbei.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
