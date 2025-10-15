import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://billcraft.at'),
  title: "BillCraft – Die smarte Rechnungs-App für Freelancer & Teams",
  description:
    "BillCraft ist die moderne Rechnungs-App für Freelancer, kleine Unternehmen und Teams. Rechnungen, Kunden, Steuern & mehr – alles einfach und digital.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
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
        url: "/billcraft.svg",
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
    images: ["/billcraft.svg"],
    creator: "@billcraftapp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${sora.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
