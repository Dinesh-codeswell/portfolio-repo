import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://portfolio-omega-seven-69.vercel.app";
const OG_IMAGE = "/assets/og/og-card.png";
const TITLE = "Dinesh Kumar Katal · Product & Growth Manager";
const DESCRIPTION =
  "Dinesh Kumar Katal · IIT Kharagpur grad combining technical depth with product analytics: I launch platforms, optimize conversion funnels, and build ML engines.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Dinesh Kumar Katal",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dinesh Kumar Katal — I build scalable products using data, AI & analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
