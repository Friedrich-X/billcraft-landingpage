import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://billcraft.at'),
  title: "BillCraft – Die smarte Rechnungs-App für Freelancer & Teams",
  description:
    "BillCraft ist die moderne Rechnungs-App für Freelancer, kleine Unternehmen und Teams. Rechnungen, Kunden, Steuern & mehr – alles einfach und digital.",
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "BillCraft – Die smarte Rechnungs-App für Freelancer & Teams",
    description:
      "BillCraft ist die moderne Rechnungs-App für Freelancer, kleine Unternehmen und Teams. Rechnungen, Kunden, Steuern & mehr – alles einfach und digital.",
    url: "https://billcraft.at/",
    siteName: "BillCraft",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "BillCraft Logo",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BillCraft – Die smarte Rechnungs-App für Freelancer & Teams",
    description:
      "BillCraft ist die moderne Rechnungs-App für Freelancer, kleine Unternehmen und Teams. Rechnungen, Kunden, Steuern & mehr – alles einfach und digital.",
    images: ["/vercel.svg"],
    creator: "@billcraftapp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
