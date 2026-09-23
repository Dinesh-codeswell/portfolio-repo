import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/assets/files/"],
    },
    sitemap: "https://portfolio-omega-seven-69.vercel.app/sitemap.xml",
  };
}
