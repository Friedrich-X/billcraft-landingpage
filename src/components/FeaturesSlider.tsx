"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Receipt, 
  Users, 
  CreditCard, 
  BarChart3, 
  Sparkles,
  Calculator,
  Clock,
  FileCheck,
  Mail,
  Smartphone,
  Cloud,
  Lock,
  TrendingUp,
  FileSignature,
  Package,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import BillCraftSymbol from "./BillCraftSymbol";

const FeaturesSlider: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const features = [
    {
      icon: FileText,
      title: "Rechnungen erstellen",
      description: "Professionelle Rechnungen in Sekunden erstellt",
      color: "text-blue",
      bgColor: "bg-blue/10",
      hoverBgColor: "group-hover:bg-blue/20",
    },
    {
      icon: FileSignature,
      title: "Angebote schreiben",
      description: "Überzeugende Angebote schnell und einfach",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      hoverBgColor: "group-hover:bg-purple-500/20",
    },
    {
      icon: Receipt,
      title: "Belege erfassen",
      description: "Alle Belege digital an einem Ort",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      hoverBgColor: "group-hover:bg-green-500/20",
    },
    {
      icon: Users,
      title: "Kundenverwaltung",
      description: "Kontakte zentral verwalten",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      hoverBgColor: "group-hover:bg-orange-500/20",
    },
    {
      icon: CreditCard,
      title: "Zahlungsübersicht",
      description: "Behalte offene Zahlungen im Blick",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      hoverBgColor: "group-hover:bg-pink-500/20",
    },
    {
      icon: BarChart3,
      title: "Finanzberichte",
      description: "EÜR und BWA automatisch erstellt",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      hoverBgColor: "group-hover:bg-indigo-500/20",
    },
    {
      icon: Calculator,
      title: "Umsatzsteuer",
      description: "Automatische USt-Voranmeldung",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      hoverBgColor: "group-hover:bg-cyan-500/20",
    },
    {
      icon: Sparkles,
      title: "KI-Assistent",
      description: "Intelligente Buchhaltungs-Automatisierung",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      hoverBgColor: "group-hover:bg-yellow-500/20",
    },
    {
      icon: Clock,
      title: "Zeiterfassung",
      description: "Projektzeiten erfassen und abrechnen",
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
      hoverBgColor: "group-hover:bg-teal-500/20",
    },
    {
      icon: FileCheck,
      title: "Mahnwesen",
      description: "Automatische Zahlungserinnerungen",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      hoverBgColor: "group-hover:bg-red-500/20",
    },
    {
      icon: Mail,
      title: "E-Mail-Versand",
      description: "Dokumente direkt versenden",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      hoverBgColor: "group-hover:bg-blue-600/20",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Buchhaltung auch unterwegs",
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      hoverBgColor: "group-hover:bg-violet-500/20",
    },
    {
      icon: Cloud,
      title: "Cloud-Backup",
      description: "Deine Daten sicher gespeichert",
      color: "text-sky-500",
      bgColor: "bg-sky-500/10",
      hoverBgColor: "group-hover:bg-sky-500/20",
    },
    {
      icon: Lock,
      title: "GoBD-konform",
      description: "Rechtssichere Buchhaltung",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      hoverBgColor: "group-hover:bg-emerald-500/20",
    },
    {
      icon: TrendingUp,
      title: "Dashboard",
      description: "Alle Kennzahlen auf einen Blick",
      color: "text-lime-500",
      bgColor: "bg-lime-500/10",
      hoverBgColor: "group-hover:bg-lime-500/20",
    },
    {
      icon: Package,
      title: "Produktverwaltung",
      description: "Artikel und Leistungen verwalten",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      hoverBgColor: "group-hover:bg-amber-500/20",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray/30 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nutzen Sie Ihre Ideen – und Ihre Zeit – optimal
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
            Erfassen Sie alles, was wichtig ist, war oder sein könnte, und greifen Sie jederzeit und überall darauf zu.
          </p>
        </div>
      </div>

      {/* Scrollable Features - Full Width */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 mb-8 py-4 px-4 md:px-6 lg:px-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative flex-shrink-0 w-80 min-h-[280px] bg-white rounded-2xl p-8 border border-gray hover:border-blue transition-all duration-300 group cursor-pointer hover:shadow-xl hover:-translate-y-3 overflow-hidden"
            >
              {/* BillCraft Symbol - Animated on Hover */}
              <div className="absolute pointer-events-none select-none opacity-0 group-hover:opacity-20 transition-all duration-300 z-0 w-[140px] h-[80px] -top-5 -right-10 rotate-45 scale-75 group-hover:translate-x-[-15px] group-hover:translate-y-[15px] group-hover:rotate-0 group-hover:scale-100 text-gray-400">
                <BillCraftSymbol width={140} height={80} />
              </div>

              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 ${feature.bgColor} ${feature.hoverBgColor} rounded-xl flex items-center justify-center mb-6 transition-colors`}>
                <Icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Arrow Bottom Right on Hover */}
              <div className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 z-10">
                <motion.div
                  className="group-hover:animate-arrow-slide"
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-5 h-5 text-foreground" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Arrows - Below Slider */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="hover:bg-blue border border-foreground/20 hover:border-blue rounded-full p-3 transition-all hover:scale-110 cursor-pointer group"
            aria-label="Scroll Left"
          >
            <ArrowLeft className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hover:bg-blue border border-foreground/20 hover:border-blue rounded-full p-3 transition-all hover:scale-110 cursor-pointer group"
            aria-label="Scroll Right"
          >
            <ArrowRight className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSlider;
