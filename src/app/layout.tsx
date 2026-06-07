import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteProfile } from "@/data/siteProfile";
import { SiteProviders } from "@/components/SiteProviders";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${siteProfile.name} | Portfolio`,
  description: `${siteProfile.title} at ${siteProfile.companyShort}. Welcome to my portfolio!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-white text-[#1e1e2f]">
        <SiteProviders>{children}</SiteProviders>
      </body>
    </html>
  );
}
