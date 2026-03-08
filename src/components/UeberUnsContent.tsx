"use client";

import Image from "next/image";
import { Zap, Eye, Lightbulb, Heart } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Zap,
    iconColor: "text-[#5C6CFE]",
    iconBg: "bg-[#5C6CFE]/10",
    title: "Einfachheit",
    description:
      "Buchhaltung muss nicht kompliziert sein. BillCraft ist Software, die jeder versteht – ohne Fachjargon und ohne steile Lernkurve.",
  },
  {
    icon: Eye,
    iconColor: "text-[#00DB37]",
    iconBg: "bg-[#00DB37]/10",
    title: "Transparenz",
    description:
      "Keine versteckten Kosten, keine undurchsichtigen Prozesse. Was BillCraft kann und kostet, ist klar kommuniziert.",
  },
  {
    icon: Lightbulb,
    iconColor: "text-[#FFA85B]",
    iconBg: "bg-[#FFA85B]/10",
    title: "Innovation",
    description:
      "KI und Automatisierung eliminieren Routineaufgaben. Damit du mehr Zeit für dein Kerngeschäft hast.",
  },
  {
    icon: Heart,
    iconColor: "text-[#FF50A7]",
    iconBg: "bg-[#FF50A7]/10",
    title: "Kundennähe",
    description:
      "BillCraft wird gemeinsam mit Nutzern entwickelt. Feedback fließt direkt in die Produktentwicklung ein.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    num: "01",
    color: "text-blue",
    title: "Studium",
    text: "Im Studium am SAE Institute Wien wurde mir klar: Selbstständige kämpfen mit unübersichtlichen Tools und komplizierten Steuerregeln.",
  },
  {
    num: "02",
    color: "text-[#FFA85B]",
    title: "Diplomprojekt",
    text: "Aus einer Studienarbeit wurde ein echtes Produkt. Der erste Prototyp: Buchhaltung, die jeder versteht.",
  },
  {
    num: "03",
    color: "text-[#00DB37]",
    title: "BillCraft ist live",
    text: "Von der Rechnung bis zum Steuer-Export – die perfekte Vorbereitung für den Steuerberater. Gebaut in Wien.",
  },
];

export default function UeberUnsContent() {
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      {/* Hero — Centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <h1 className="font-semibold text-foreground leading-tight">
          Über BillCraft
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
          Buchhaltung sollte kein Hindernis sein – sondern ein Werkzeug, das
          kleine Unternehmen stärkt.
        </p>
      </motion.div>

      {/* Two Column: Text + Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="font-semibold text-foreground mb-4">
            Buchhaltung, die jeder versteht.
          </h2>
          <p className="text-lg text-foreground/65 leading-relaxed mb-6">
            Hi, ich bin Elias – Student für Webentwicklung und Webdesign am SAE
            Institute Wien und Gründer von BillCraft. Die Idee entstand während
            meines Studiums, als mir klar wurde: Buchhaltung ist für die meisten
            Selbstständigen unnötig kompliziert.
          </p>
          <p className="text-lg text-foreground/65 leading-relaxed">
            Mein Ziel: Ein Tool, das Buchhaltung für jeden Anwender verständlich
            macht – und gleichzeitig die bestmögliche Vorbereitung für den
            Steuerberater liefert.
          </p>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="relative"
        >
          <div className="aspect-[4/5] relative overflow-hidden rounded-3xl bg-gray">
            <Image
              src="/images/Ratt_Elias.webp"
              alt="Elias – Gründer von BillCraft"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Name Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5, ease }}
            className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-3 shadow-lg"
          >
            <p className="font-semibold text-foreground text-sm leading-tight">
              Elias Ratt
            </p>
            <p className="text-xs text-foreground/50 leading-tight">
              Gründer & Entwickler
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="mb-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="font-semibold text-foreground mb-14 text-center"
        >
          Vom Studienprojekt zum Produkt
        </motion.h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease }}
              className="relative"
            >
              {/* Number */}
              <span
                className={`text-5xl md:text-6xl font-bold ${step.color} leading-none mb-4 block opacity-20`}
              >
                {step.num}
              </span>
              {/* Title + Description */}
              <h3 className="!text-lg !font-semibold text-foreground !mb-2">
                {step.title}
              </h3>
              <p className="text-[length:var(--font-caption)] text-foreground/50 leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease }}
        className="bg-foreground rounded-3xl p-10 md:p-16 mb-28 text-center"
      >
        <p className="text-white/50 text-sm font-semibold uppercase mb-4">
          Unsere Mission
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-snug max-w-4xl mx-auto">
          Jedes Unternehmen verdient professionelle Buchhaltung – unabhängig von
          Größe oder Budget.
        </p>
      </motion.div>

      {/* Werte */}
      <div className="mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="font-semibold text-foreground mb-10 text-center"
        >
          Wofür wir stehen
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease }}
                className="bg-gray rounded-2xl p-8"
              >
                <div
                  className={`w-11 h-11 ${value.iconBg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-5 h-5 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-foreground/55 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
