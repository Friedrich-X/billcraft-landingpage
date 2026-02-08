"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { Menu, X, FileText, Users, Receipt, CreditCard, BarChart3, Settings, ChevronDown, Info, Briefcase, BookOpen, Zap, HelpCircle, Mail, Sparkles, User, Building2, Rocket, Store, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isExploreMenuOpen, setIsExploreMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
      href: "#rechnungen",
    },
    {
      icon: Users,
      label: "Kundenverwaltung",
      description: "Verwalte deine Kunden zentral und übersichtlich",
      href: "#kunden",
    },
    {
      icon: Receipt,
      label: "Belege",
      description: "Digitalisiere und organisiere alle Belege",
      href: "#belege",
    },
    {
      icon: CreditCard,
      label: "Zahlungen",
      description: "Behalte alle Zahlungen im Überblick",
      href: "#zahlungen",
    },
    {
      icon: BarChart3,
      label: "Berichte",
      description: "Analysiere deine Finanzen mit detaillierten Reports",
      href: "#berichte",
    },
    {
      icon: Sparkles,
      label: "KI-Funktionen",
      description: "Intelligente Automatisierung durch künstliche Intelligenz",
      href: "#ki",
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
          href: "#about",
        },
        {
          icon: Briefcase,
          label: "Karriere",
          description: "Werde Teil unseres Teams",
          href: "#karriere",
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
          href: "#blog",
        },
        {
          icon: Zap,
          label: "Changelog",
          description: "Alle neuen Features und Updates",
          href: "#changelog",
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
          href: "#support",
        },
        {
          icon: Mail,
          label: "Kontakt",
          description: "Schreib uns eine Nachricht",
          href: "#kontakt",
        },
      ],
    },
  ];

  const solutionsItems = {
    main: [
      {
        label: "Für Freelancer & Selbstständige",
        description: "Starte direkt mit digitaler Buchhaltung in deine Selbstständigkeit",
        image: "/images/freelancer.jpg", // Platzhalter
        href: "#freelancer",
      },
      {
        label: "Für Kleinunternehmer",
        description: "Nutze deine Zeit sinnvoll und setze auf einfache und verständliche Buchhaltung",
        image: "/images/kleinunternehmer.jpg",
        href: "#kleinunternehmer",
      },
      {
        label: "Für Startups & KMUs",
        description: "Behalte deine Finanzen im Blick und steuere dein Unternehmen mit Effizienz zum Erfolg",
        image: "/images/startups.jpg", // Platzhalter
        href: "#startups",
      },
    ],
    side: [
      {
        category: "Nach Zielgruppe",
        items: [
          { label: "E-Commerce & Online-Shops", href: "#ecommerce" },
          { label: "Agenturen & Kreative", href: "#agenturen" },
          { label: "Handwerk & Dienstleistung", href: "#handwerk" },
        ],
      },
    ],
  };

  const navItems = [
    { label: "Preise", href: "#preise" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
            aria-label="BillCraft Home"
          >
            <Logo width={150} height={25} className="w-[120px] md:w-[150px]" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {/* Produkt Megamenu */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterMegaMenu}
              onMouseLeave={handleMouseLeaveMegaMenu}
            >
              <button
                className="flex items-center gap-1 text-foreground hover:text-blue font-medium transition-colors duration-200 text-sm lg:text-base cursor-pointer"
                aria-label="Produkt Menu"
                aria-expanded={isMegaMenuOpen}
              >
                Produkt
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Invisible bridge to prevent menu from closing */}
              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 right-0 h-10 bg-transparent"></div>
              )}
            </div>

            {/* Lösungen Megamenu */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterSolutionsMenu}
              onMouseLeave={handleMouseLeaveSolutionsMenu}
            >
              <button
                className="flex items-center gap-1 text-foreground hover:text-blue font-medium transition-colors duration-200 text-sm lg:text-base cursor-pointer"
                aria-label="Lösungen Menu"
                aria-expanded={isSolutionsMenuOpen}
              >
                Lösungen
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSolutionsMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Invisible bridge to prevent menu from closing */}
              {isSolutionsMenuOpen && (
                <div className="absolute top-full left-0 right-0 h-10 bg-transparent"></div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-blue font-medium transition-colors duration-200 text-sm lg:text-base"
              >
                {item.label}
              </Link>
            ))}

            {/* Erkunden Megamenu */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterExploreMenu}
              onMouseLeave={handleMouseLeaveExploreMenu}
            >
              <button
                className="flex items-center gap-1 text-foreground hover:text-blue font-medium transition-colors duration-200 text-sm lg:text-base cursor-pointer"
                aria-label="Erkunden Menu"
                aria-expanded={isExploreMenuOpen}
              >
                Erkunden
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExploreMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Invisible bridge to prevent menu from closing */}
              {isExploreMenuOpen && (
                <div className="absolute top-full left-0 right-0 h-10 bg-transparent"></div>
              )}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
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

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggleMobileMenu}
            className="md:hidden p-2 text-foreground hover:text-blue transition-colors cursor-pointer"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg border border-gray">
            <div className="flex flex-col space-y-2">
              {/* Produkt Section in Mobile */}
              <div className="px-4 py-2">
                <div className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">
                  Produkt
                </div>
                <div className="space-y-1">
                  {productItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={handleCloseMobileMenu}
                        className="flex items-center gap-3 px-3 py-2 text-foreground hover:text-blue hover:bg-gray rounded-lg font-medium transition-all duration-200"
                      >
                        <Icon className="w-5 h-5 text-blue" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
              
              <div className="border-t border-gray my-2"></div>
              
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleCloseMobileMenu}
                  className="px-4 py-2 text-foreground hover:text-blue hover:bg-gray font-medium transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-gray pt-4 px-4 space-y-3">
                <Link
                  href="#login"
                  onClick={handleCloseMobileMenu}
                  className="block w-full text-center py-2.5 text-foreground hover:text-blue font-medium transition-colors duration-200"
                >
                  Anmelden
                </Link>
                <Button 
                  href="#signup" 
                  variant="primary" 
                  size="md"
                  className="w-full"
                  onClick={handleCloseMobileMenu}
                >
                  Kostenlos starten
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Megamenu Dropdown - Outside nav to span full width */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray py-10 z-50"
            onMouseEnter={handleMouseEnterMegaMenu}
            onMouseLeave={handleMouseLeaveMegaMenu}
          >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-blue uppercase tracking-wider mb-1">
                  Produkt Features
                </h3>
              </div>

              {/* Grid */}
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
                        <div className="flex-shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-foreground/70 group-hover:text-blue transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-blue transition-colors text-sm">
                            {item.label}
                          </h4>
                          <p className="text-xs text-foreground/60 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer Link */}
              <div className="pt-6 border-t border-gray">
                <Link
                  href="#alle-features"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-dark-blue transition-colors group"
                >
                  Alle Features anzeigen
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lösungen Dropdown */}
      <AnimatePresence>
        {isSolutionsMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray py-10 z-50"
            onMouseEnter={handleMouseEnterSolutionsMenu}
            onMouseLeave={handleMouseLeaveSolutionsMenu}
          >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-blue uppercase tracking-wider mb-1">
                  Lösungen für jedes Business
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Solutions with Images */}
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
                        {/* Image */}
                        <div className="relative w-full h-40 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="p-4">
                          <h4 className="font-semibold text-foreground mb-2 group-hover:text-blue transition-colors text-sm">
                            {item.label}
                          </h4>
                          <p className="text-xs text-foreground/60 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Side Categories */}
                <div className="lg:col-span-1">
                  {solutionsItems.side.map((category, categoryIndex) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                    >
                      {/* Category Header */}
                      <div className="mb-4">
                        <h3 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                          {category.category}
                        </h3>
                      </div>

                      {/* Category Items */}
                      <div className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2 text-blue hover:text-dark-blue font-medium text-sm transition-colors group cursor-pointer"
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

      {/* Erkunden Dropdown */}
      <AnimatePresence>
        {isExploreMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray py-10 z-50"
            onMouseEnter={handleMouseEnterExploreMenu}
            onMouseLeave={handleMouseLeaveExploreMenu}
          >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
                {exploreItems.map((category, categoryIndex) => {
                  return (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: categoryIndex * 0.1 }}
                    >
                      {/* Category Header */}
                      <div className="mb-6">
                        <h3 className="text-xs font-semibold text-blue uppercase tracking-wider">
                          {category.category}
                        </h3>
                      </div>

                      {/* Category Items */}
                      <div className="space-y-6">
                        {category.items.map((item, itemIndex) => {
                          const Icon = item.icon;
                          return (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                            >
                              <Link
                                href={item.href}
                                className="flex items-start gap-3 hover:text-blue transition-all duration-200 group cursor-pointer"
                              >
                                <div className="flex-shrink-0 mt-0.5">
                                  <Icon className="w-5 h-5 text-foreground/70 group-hover:text-blue transition-colors" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-blue transition-colors text-sm">
                                    {item.label}
                                  </h4>
                                  <p className="text-xs text-foreground/60 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
