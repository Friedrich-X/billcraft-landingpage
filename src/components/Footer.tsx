import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const footerColumns = [
  {
    title: "Lösungen",
    links: [
      { label: "Rechnungen", href: "#rechnungen" },
      { label: "Angebote", href: "#angebote" },
      { label: "Belege", href: "#belege" },
      { label: "Kunden", href: "#kunden" },
      { label: "Zahlungen", href: "#zahlungen" },
      { label: "Berichte", href: "#berichte" },
      { label: "KI-Funktionen", href: "#ki" },
      { label: "Zeiterfassung", href: "#zeiterfassung" },
      { label: "Mahnwesen", href: "#mahnwesen" },
      { label: "E-Mail-Versand", href: "#e-mail-versand" },
      { label: "Mobile App", href: "#mobile-app" },
    ],
  },
  {
    title: "Entdecken",
    links: [
      { label: "KI-Funktionen", href: "#ki" },
      { label: "Zeiterfassung", href: "#zeiterfassung" },
      { label: "Mahnwesen", href: "#mahnwesen" },
      { label: "E-Mail-Versand", href: "#e-mail-versand" },
    ],
  },
  {
    title: "Ressourcen",
    links: [
      { label: "Dokumentation", href: "#dokumentation" },
      { label: "Hilfe-Center", href: "#hilfe" },
      { label: "Changelog", href: "#changelog" },
      { label: "Problemlösung", href: "#problemloesung" },
      { label: "Forum", href: "#forum" },
      { label: "Entwickler", href: "#entwickler" },
      { label: "Kontakt", href: "#kontakt" },
      { label: "Karriere", href: "#karriere" },
    ],
  },
  {
    title: "Loslegen",
    links: [
      { label: "Kostenlos anmelden", href: "#signup" },
      { label: "Einloggen", href: "#login" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Top bar: Logo left, Social right */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-12 md:pb-16 border-b border-background/10">
          <Link
            href="/"
            className="inline-block"
            aria-label="BillCraft Startseite"
          >
            <Logo className="text-background" width={160} height={27} />
          </Link>
          <div className="flex items-center gap-5" role="list" aria-label="Social Media">
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-blue transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5" aria-hidden />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-blue transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" aria-hidden />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" aria-hidden />
            </Link>
            <Link
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-blue transition-colors"
              aria-label="Discord"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mega nav: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 pt-12 md:pt-16">
          {footerColumns.map((column) => (
            <nav
              key={column.title}
              className="col-span-1"
              aria-label={column.title}
            >
              <h3 className="text-lg font-semibold text-background mb-5">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base text-background/60 hover:text-blue transition-colors leading-relaxed"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar: Copyright left, Legal right */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50 order-2 sm:order-1">
            © {new Date().getFullYear()} BillCraft. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-xs order-1 sm:order-2">
            <Link
              href="#cookies"
              className="text-background/50 hover:text-background transition-colors"
            >
              Cookie-Einstellungen
            </Link>
            <Link
              href="#impressum"
              className="text-background/50 hover:text-background transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="#datenschutz"
              className="text-background/50 hover:text-background transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="#agb"
              className="text-background/50 hover:text-background transition-colors"
            >
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
