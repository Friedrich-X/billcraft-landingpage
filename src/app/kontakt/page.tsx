import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  HelpCircle,
  Mail,
  Star,
  MessageSquare,
  Shield,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt | BillCraft – Schreiben Sie uns",
  description:
    "Kontaktieren Sie das BillCraft-Team. Wir freuen uns auf Ihre Nachricht – ob Fragen, Feedback oder Zusammenarbeit.",
};

const contactSections = [
  {
    icon: HelpCircle,
    iconColor: "text-[#00DB37]",
    iconBg: "bg-[#00DB37]/10",
    title: "Hilfe & Support",
    content: (
      <>
        Wenn du Probleme mit BillCraft hast, wirf einen Blick in unser{" "}
        <Link
          href="/support"
          className="underline hover:text-blue transition-colors"
        >
          Support Center
        </Link>
        . Dort findest du Antworten auf häufige Fragen, Anleitungen und
        Hilfestellungen. Als registrierter Nutzer kannst du dich auch direkt an
        unser Support-Team wenden.
      </>
    ),
  },
  {
    icon: Star,
    iconColor: "text-[#FFA85B]",
    iconBg: "bg-[#FFA85B]/10",
    title: "Presse- und Partnerschaftsanfragen",
    content: (
      <>
        Um BillCraft zum Thema Partnerschaften oder Presseanfragen zu
        kontaktieren, schreib uns an{" "}
        <a
          href="mailto:hallo@billcraft.app"
          className="underline hover:text-blue transition-colors"
        >
          hallo@billcraft.app
        </a>
        .
      </>
    ),
  },
  {
    icon: Mail,
    iconColor: "text-[#5C6CFE]",
    iconBg: "bg-[#5C6CFE]/10",
    title: "Allgemeine Anfragen",
    content: (
      <>
        Für alle sonstigen Fragen, Feedback oder wenn du einfach mit uns in
        Kontakt treten möchtest, erreichst du uns jederzeit per E-Mail unter{" "}
        <a
          href="mailto:hallo@billcraft.app"
          className="underline hover:text-blue transition-colors"
        >
          hallo@billcraft.app
        </a>
        . Wir antworten in der Regel innerhalb von 24 Stunden.
      </>
    ),
  },
  {
    icon: MessageSquare,
    iconColor: "text-[#FF50A7]",
    iconBg: "bg-[#FF50A7]/10",
    title: "Feedback & Vorschläge",
    content: (
      <>
        Du möchtest neue Funktionen vorschlagen oder hast Ideen, wie wir
        BillCraft verbessern können? Schreib uns an{" "}
        <a
          href="mailto:hallo@billcraft.app"
          className="underline hover:text-blue transition-colors"
        >
          hallo@billcraft.app
        </a>
        . Wir prüfen alle Einsendungen sorgfältig und lassen sie direkt in die
        Produktentwicklung einfließen.
      </>
    ),
  },
  {
    icon: Shield,
    iconColor: "text-[#A55BFF]",
    iconBg: "bg-[#A55BFF]/10",
    title: "Sicherheit & Datenschutz",
    content: (
      <>
        Wenn du eine sicherheitsrelevante Schwachstelle in BillCraft gefunden
        hast oder Fragen zum Datenschutz hast, kontaktiere uns bitte unter{" "}
        <a
          href="mailto:hallo@billcraft.app"
          className="underline hover:text-blue transition-colors"
        >
          hallo@billcraft.app
        </a>
        . Weitere Informationen findest du in unserer{" "}
        <Link
          href="/datenschutz"
          className="underline hover:text-blue transition-colors"
        >
          Datenschutzerklärung
        </Link>
        .
      </>
    ),
  },
  {
    icon: Lightbulb,
    iconColor: "text-[#FFA85B]",
    iconBg: "bg-[#FFA85B]/10",
    title: "Buchhaltung & Steuerfragen",
    content: (
      <>
        Hast du Fragen zur korrekten Rechnungserstellung, Pflichtangaben oder
        Steuerregelungen in Österreich? In unserem{" "}
        <Link
          href="/blog"
          className="underline hover:text-blue transition-colors"
        >
          Blog
        </Link>{" "}
        findest du hilfreiche Artikel und Anleitungen rund um Buchhaltung für
        Selbstständige und Kleinunternehmer.
      </>
    ),
  },
];

export default function KontaktPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main className="pt-32 pb-24">
        {/* Centered Headline */}
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h1 className="text-center !mb-20">Kontakt</h1>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16 lg:gap-y-20 max-w-5xl mx-auto mb-24">
            {contactSections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title}>
                  <div
                    className={`w-12 h-12 ${section.iconBg} rounded-2xl flex items-center justify-center mb-5`}
                  >
                    <Icon className={`w-6 h-6 ${section.iconColor}`} />
                  </div>
                  <h2 className="!text-[length:clamp(1.25rem,2vw,1.5rem)] !leading-snug !mb-3">
                    {section.title}
                  </h2>
                  <p className="text-foreground/60 leading-relaxed text-[length:var(--font-caption)]">
                    {section.content}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Centered Address */}
          <div className="text-center text-foreground/50 text-[length:var(--font-caption-small)] leading-relaxed">
            <p className="font-medium text-foreground/70">BillCraft</p>
            <p>Wien, Österreich</p>
            <p>
              <a
                href="mailto:hallo@billcraft.app"
                className="hover:text-blue transition-colors"
              >
                hallo@billcraft.app
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
