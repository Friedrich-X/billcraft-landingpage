"use client";
import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import {
  FileText,
  Users,
  Receipt,
  CreditCard,
  BarChart3,
  ChevronDown,
  Info,
  BookOpen,
  Zap,
  HelpCircle,
  Mail,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/** Burger (2 Striche) → X. Außerhalb von Header, damit bei Dropdown-Klicks kein Re-Mount und keine Re-Animation. */
const BurgerToCloseIcon = ({ open }: { open: boolean }) => (
  <span
    className="relative w-6 h-6 flex items-center justify-center shrink-0"
    aria-hidden
  >
    <motion.span
      className="absolute left-1/2 top-1/2 h-0.5 w-5 bg-current rounded-full origin-center -translate-x-1/2 -translate-y-1/2"
      animate={{
        rotate: open ? 45 : 0,
        y: open ? 0 : -5,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
    <motion.span
      className="absolute left-1/2 top-1/2 h-0.5 w-5 bg-current rounded-full origin-center -translate-x-1/2 -translate-y-1/2"
      animate={{
        rotate: open ? -45 : 0,
        y: open ? 0 : 5,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  </span>
);

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(80);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<
    "produkt" | "losungen" | "erkunden" | null
  >(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isExploreMenuOpen, setIsExploreMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);

  const updateHeaderHeight = () => {
    if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [isScrolled, isMobileMenuOpen]);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileExpandedSection(null);
  };

  const handleToggleMobileSection = (
    section: "produkt" | "losungen" | "erkunden",
  ) => {
    setMobileExpandedSection((prev) => (prev === section ? null : section));
  };

  const handleMouseEnterMegaMenu = () => {
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveMegaMenu = () => {
    setIsMegaMenuOpen(false);
  };

  const handleMouseEnterExploreMenu = () => {
    setIsExploreMenuOpen(true);
  };

  const handleMouseLeaveExploreMenu = () => {
    setIsExploreMenuOpen(false);
  };

  const handleMouseEnterSolutionsMenu = () => {
    setIsSolutionsMenuOpen(true);
  };

  const handleMouseLeaveSolutionsMenu = () => {
    setIsSolutionsMenuOpen(false);
  };

  const productItems = [
    {
      icon: FileText,
      label: "Rechnungen",
      description: "Erstelle und versende professionelle Rechnungen",
      href: "/rechnungen",
    },
    {
      icon: Users,
      label: "Kundenverwaltung",
      description: "Verwalte deine Kunden zentral und übersichtlich",
      href: "/kunden",
    },
    {
      icon: Receipt,
      label: "Belege",
      description: "Digitalisiere und organisiere alle Belege",
      href: "/belege",
    },
    {
      icon: CreditCard,
      label: "Zahlungen",
      description: "Behalte alle Zahlungen im Überblick",
      href: "/zahlungen",
    },
    {
      icon: BarChart3,
      label: "Berichte",
      description: "Analysiere deine Finanzen mit detaillierten Reports",
      href: "/berichte",
    },
    {
      icon: Sparkles,
      label: "KI-Funktionen",
      description: "Intelligente Automatisierung durch künstliche Intelligenz",
      href: "/ki",
    },
  ];

  const exploreItems = [
    {
      category: "Unternehmen",
      items: [
        {
          icon: Info,
          label: "Über uns",
          description: "Lerne das Team hinter BillCraft kennen",
          href: "/ueber-uns",
        },
      ],
    },
    {
      category: "Ressourcen",
      items: [
        {
          icon: BookOpen,
          label: "Blog",
          description: "Tipps und News rund um Buchhaltung",
          href: "/blog",
        },
        {
          icon: Zap,
          label: "Changelog",
          description: "Alle neuen Features und Updates",
          href: "/changelog",
        },
      ],
    },
    {
      category: "Hilfe & Support",
      items: [
        {
          icon: HelpCircle,
          label: "Support Center",
          description: "Hilfe und Antworten auf deine Fragen",
          href: "/support",
        },
        {
          icon: Mail,
          label: "Kontakt",
          description: "Schreib uns eine Nachricht",
          href: "/kontakt",
        },
      ],
    },
  ];

  const solutionsItems = {
    main: [
      {
        label: "Für Freelancer & Selbstständige",
        description:
          "Starte direkt mit digitaler Buchhaltung in deine Selbstständigkeit",
        image: "/images/freelancer.jpg", // Platzhalter
        href: "/loesungen/freelancer",
      },
      {
        label: "Für Kleinunternehmer",
        description:
          "Nutze deine Zeit sinnvoll und setze auf einfache und verständliche Buchhaltung",
        image: "/images/kleinunternehmer.jpg",
        href: "/loesungen/kleinunternehmer",
      },
      {
        label: "Für Startups & KMUs",
        description:
          "Behalte deine Finanzen im Blick und steuere dein Unternehmen mit Effizienz zum Erfolg",
        image: "/images/startups.jpg", // Platzhalter
        href: "/loesungen/startups",
      },
    ],
    side: [
      {
        category: "Nach Zielgruppe",
        items: [
          { label: "E-Commerce & Online-Shops", href: "/loesungen/ecommerce" },
          { label: "Agenturen & Kreative", href: "/loesungen/agenturen" },
          { label: "Handwerk & Dienstleistung", href: "/loesungen/handwerk" },
        ],
      },
    ],
  };

  const navItems = [{ label: "Preise", href: "/preise" }];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
            aria-label="BillCraft Home"
          >
            <Logo width={150} height={25} className="w-[120px] md:w-[150px]" />
          </Link>

          {/* Desktop Navigation - ab lg (1024px), semantisch mit ul/li */}
          <ul className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 list-none p-0 m-0">
            {/* Produkt Megamenu */}
            <li
              className="relative py-9"
              onMouseEnter={handleMouseEnterMegaMenu}
              onMouseLeave={handleMouseLeaveMegaMenu}
            >
              <button
                className="flex items-center gap-1 text-foreground hover:text-blue font-medium transition-colors duration-200 text-sm lg:text-base cursor-pointer"
                aria-label="Produkt Menu"
                aria-expanded={isMegaMenuOpen}
              >
                Produkt
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMegaMenuOpen && (
                <div
                  className="absolute top-full left-0 right-0 h-10 bg-transparent pointer-events-none"
                  aria-hidden
                />
              )}
            </li>

            {/* Lösungen Megamenu */}
            <li
              className="relative py-7"
              onMouseEnter={handleMouseEnterSolutionsMenu}
              onMouseLeave={handleMouseLeaveSolutionsMenu}
            >
              <button
                className="flex items-center gap-1 text-foreground hover:text-blue font-medium transition-colors duration-200 text-sm lg:text-base cursor-pointer"
                aria-label="Lösungen Menu"
                aria-expanded={isSolutionsMenuOpen}
              >
                Lösungen
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isSolutionsMenuOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isSolutionsMenuOpen && (
                <div
                  className="absolute top-full left-0 right-0 h-10 bg-transparent pointer-events-none"
                  aria-hidden
                />
              )}
            </li>

            {navItems.map((item) => (
              <li key={item.label} className="py-7">
                <Link
                  href={item.href}
                  className="text-foreground hover:text-blue font-medium transition-colors duration-200 text-sm lg:text-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Erkunden Megamenu */}
            <li
              className="relative py-7"
              onMouseEnter={handleMouseEnterExploreMenu}
              onMouseLeave={handleMouseLeaveExploreMenu}
            >
              <button
                className="flex items-center gap-1 text-foreground hover:text-blue font-medium transition-colors duration-200 text-sm lg:text-base cursor-pointer"
                aria-label="Erkunden Menu"
                aria-expanded={isExploreMenuOpen}
              >
                Erkunden
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isExploreMenuOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isExploreMenuOpen && (
                <div
                  className="absolute top-full left-0 right-0 h-10 bg-transparent pointer-events-none"
                  aria-hidden
                />
              )}
            </li>
          </ul>

          {/* CTA Button - Desktop ab lg */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#login"
              className="text-foreground hover:text-blue font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Anmelden
            </Link>
            <Button href="#signup" variant="primary" size="md">
              Kostenlos starten
            </Button>
          </div>

          {/* Burger/Close Button – bis lg, gleiche Größe offen/zu, 2 Striche → X */}
          <button
            onClick={handleToggleMobileMenu}
            className="lg:hidden w-10 h-10 min-w-10 min-h-10 flex items-center justify-center text-foreground hover:text-blue transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMobileMenuOpen}
          >
            <BurgerToCloseIcon open={isMobileMenuOpen} />
          </button>
        </div>
      </nav>

      {/* Megamenu Dropdowns – direkt unter Header, volle Breite (absolute top-full left-0 right-0) */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t border-gray py-10 z-50"
            onMouseEnter={handleMouseEnterMegaMenu}
            onMouseLeave={handleMouseLeaveMegaMenu}
          >
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-blue uppercase mb-1">
                  Produkt Features
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8 mb-10">
                {productItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-start gap-3 hover:text-blue transition-all duration-200 group cursor-pointer"
                      >
                        <div className="shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-foreground/70 group-hover:text-blue transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-blue transition-colors text-base">
                            {item.label}
                          </h4>
                          <p className="text-sm text-foreground/60 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <div className="pt-6 border-t border-gray">
                <Link
                  href="/preise"
                  className="inline-flex items-center gap-2 text-base font-semibold text-blue hover:text-dark-blue transition-colors group"
                >
                  Alle Features anzeigen
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSolutionsMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t border-gray py-10 z-50"
            onMouseEnter={handleMouseEnterSolutionsMenu}
            onMouseLeave={handleMouseLeaveSolutionsMenu}
          >
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-blue uppercase mb-1">
                  Lösungen für jedes Business
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {solutionsItems.main.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="group block bg-white hover:bg-gray rounded-lg overflow-hidden transition-all duration-200 cursor-pointer border border-gray hover:border-blue"
                      >
                        <div className="relative w-full h-40 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-foreground mb-2 group-hover:text-blue transition-colors text-base">
                            {item.label}
                          </h4>
                          <p className="text-sm text-foreground/60 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="lg:col-span-1">
                  {solutionsItems.side.map((category, categoryIndex) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                    >
                      <div className="mb-4">
                        <h3 className="text-xs font-semibold text-foreground/50 uppercase">
                          {category.category}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {category.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2 text-blue hover:text-dark-blue font-medium text-base transition-colors group cursor-pointer"
                          >
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExploreMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t border-gray py-10 z-50"
            onMouseEnter={handleMouseEnterExploreMenu}
            onMouseLeave={handleMouseLeaveExploreMenu}
          >
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
                {exploreItems.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: categoryIndex * 0.1 }}
                  >
                    <div className="mb-6">
                      <h3 className="text-xs font-semibold text-blue uppercase">
                        {category.category}
                      </h3>
                    </div>
                    <div className="space-y-6">
                      {category.items.map((item, itemIndex) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.2,
                              delay: categoryIndex * 0.1 + itemIndex * 0.05,
                            }}
                          >
                            <Link
                              href={item.href}
                              className="flex items-start gap-3 hover:text-blue transition-all duration-200 group cursor-pointer"
                            >
                              <div className="shrink-0 mt-0.5">
                                <Icon className="w-5 h-5 text-foreground/70 group-hover:text-blue transition-colors" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-foreground mb-1 group-hover:text-blue transition-colors text-base">
                                  {item.label}
                                </h4>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Burger-Menu Overlay – unter dem Header (Logo + Icon bleiben fix), nur Inhalt scrollbar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed left-0 right-0 bottom-0 z-40 bg-white flex flex-col border-t border-gray"
            style={{ top: headerHeight }}
          >
            {/* Gleicher Container wie Nav (Zeile 562): Listen + Buttons, Buttons unten sticky */}
            <div className="container mx-auto max-w-7xl w-full px-4 md:px-6 lg:px-8 flex-1 flex flex-col min-h-0">
              {/* Mitte: nur hier scrollbar */}
              <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden py-6">
                {/* Einheitliche Zeilenhöhe für alle Hauptpunkte (Produkt, Lösungen, Preise, Erkunden) */}
                <div className="border-b border-gray py-2">
                  <button
                    onClick={() => handleToggleMobileSection("produkt")}
                    className="flex items-center justify-between w-full min-h-12 py-4 text-left text-foreground hover:text-blue font-medium transition-colors cursor-pointer"
                    aria-expanded={mobileExpandedSection === "produkt"}
                  >
                    Produkt
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-200 ${mobileExpandedSection === "produkt" ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpandedSection === "produkt" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-1 pb-2">
                          {productItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={handleCloseMobileMenu}
                                className="flex items-center gap-3 px-3 py-2.5 text-foreground/80 hover:text-blue hover:bg-gray/50 rounded-lg font-medium transition-all"
                              >
                                <Icon
                                  className="w-5 h-5 text-blue shrink-0"
                                  aria-hidden
                                />
                                {item.label}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Lösungen – Dropdown */}
                <div className="border-b border-gray py-2">
                  <button
                    onClick={() => handleToggleMobileSection("losungen")}
                    className="flex items-center justify-between w-full min-h-12 py-4 text-left text-foreground hover:text-blue font-medium transition-colors cursor-pointer"
                    aria-expanded={mobileExpandedSection === "losungen"}
                  >
                    Lösungen
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-200 ${mobileExpandedSection === "losungen" ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpandedSection === "losungen" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 pb-2">
                          {solutionsItems.main.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={handleCloseMobileMenu}
                              className="block py-2 text-foreground/80 hover:text-blue font-medium transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                          {solutionsItems.side.map((cat) =>
                            cat.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={handleCloseMobileMenu}
                                className="flex items-center gap-2 py-2 text-blue hover:text-dark-blue font-medium text-sm transition-colors"
                              >
                                <ArrowRight
                                  className="w-4 h-4 shrink-0"
                                  aria-hidden
                                />
                                {item.label}
                              </Link>
                            )),
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Preise – gleiche Zeilenhöhe wie andere Punkte */}
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-gray py-2">
                    <Link
                      href={item.href}
                      onClick={handleCloseMobileMenu}
                      className="flex items-center justify-between w-full min-h-12 py-4 text-left text-foreground hover:text-blue font-medium transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <span className="w-5 h-5 shrink-0" aria-hidden />
                    </Link>
                  </div>
                ))}

                {/* Erkunden – Dropdown */}
                <div className="border-b border-gray py-2">
                  <button
                    onClick={() => handleToggleMobileSection("erkunden")}
                    className="flex items-center justify-between w-full min-h-12 py-4 text-left text-foreground hover:text-blue font-medium transition-colors cursor-pointer"
                    aria-expanded={mobileExpandedSection === "erkunden"}
                  >
                    Erkunden
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-200 ${mobileExpandedSection === "erkunden" ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpandedSection === "erkunden" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-1 pb-2">
                          {exploreItems.flatMap((cat) =>
                            cat.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={`${cat.category}-${item.label}`}
                                  href={item.href}
                                  onClick={handleCloseMobileMenu}
                                  className="flex items-center gap-3 px-3 py-2.5 text-foreground/80 hover:text-blue hover:bg-gray/50 rounded-lg font-medium transition-all"
                                >
                                  <Icon
                                    className="w-5 h-5 text-blue shrink-0"
                                    aria-hidden
                                  />
                                  {item.label}
                                </Link>
                              );
                            }),
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Unten fix: Buttons – gleicher Container */}
              <div className="shrink-0 flex flex-col gap-3 py-4 border-t border-gray bg-white">
                <Button
                  href="#signup"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={handleCloseMobileMenu}
                >
                  Kostenlos registrieren
                </Button>
                <Button
                  href="#login"
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={handleCloseMobileMenu}
                >
                  Anmelden
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
