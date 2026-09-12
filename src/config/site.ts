export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "The Loopler Wiki",
  shortName: "The Loopler",
  logoText: "TL",
  tagline: "Guides, Updates & Tips",
  description: "Explore The Loopler Wiki for gameplay guides, mechanics, updates, tips, and useful information to master the unique looping adventure experience.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://theloopler.top",
  gameUrl: "https://store.steampowered.com/app/4150860/The_Loopler/",
  heroVideoId: "Y2Cnr5JqMaU", // The Loopler gameplay & release showcase
  social: {
    discord: "https://discord.gg/steam",
    youtube: "https://www.youtube.com/watch?v=Y2Cnr5JqMaU",
  },
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
