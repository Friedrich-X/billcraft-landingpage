import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "@/components/BlogContent";

export const metadata: Metadata = {
  title: "Blog | BillCraft – Tipps und News rund um Buchhaltung",
  description:
    "Der BillCraft Blog: Tipps, Anleitungen und News rund um Buchhaltung, Steuern und Unternehmensführung für Selbstständige und Kleinunternehmer.",
};

export default function BlogPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <BlogContent />
      <Footer />
    </div>
  );
}
