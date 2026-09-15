import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinesh Kumar Katal · Product & Growth Manager",
  description: "Dinesh Kumar Katal · IIT Kharagpur grad combining technical depth with product analytics: I launch platforms, optimize conversion funnels, and build ML engines.",
  icons: {
    icon: "/assets/favicon.svg",
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
