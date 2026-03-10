import { MetadataRoute } from "next";

const baseUrl = "https://billcraft.at";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/preise", priority: 0.9, changeFrequency: "monthly" as const },
    // Produkt
    { path: "/rechnungen", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/angebote", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/kunden", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/belege", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/berichte", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/ki", priority: 0.8, changeFrequency: "monthly" as const },
    // Lösungen
    {
      path: "/loesungen/freelancer",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/loesungen/kleinunternehmer",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/loesungen/startups",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/loesungen/ecommerce",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/loesungen/agenturen",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/loesungen/handwerk",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    // Erkunden
    { path: "/ueber-uns", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/changelog", priority: 0.5, changeFrequency: "weekly" as const },
    { path: "/support", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/kontakt", priority: 0.6, changeFrequency: "monthly" as const },
    // Rechtliches
    { path: "/impressum", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/datenschutz", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/agb", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/avv", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
