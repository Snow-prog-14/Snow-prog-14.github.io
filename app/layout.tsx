import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alejandra Maraasin | Software and Web Developer",
  description:
    "Portfolio of Alejandra Maraasin, a software and web developer focused on practical, user-friendly systems, responsive web applications, and clean interface design.",
  keywords: [
    "Alejandra Maraasin",
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "React TypeScript",
    "ASP.NET Core",
    "C#",
    "SQL",
    "Portfolio",
    "Computer Engineering",
  ],
  authors: [{ name: "Alejandra Maraasin" }],
  creator: "Alejandra Maraasin",
  publisher: "Alejandra Maraasin",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alejandra Maraasin | Software and Web Developer",
    description:
      "Software and web development portfolio focused on clean, practical, and user-friendly systems.",
    siteName: "Alejandra Maraasin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandra Maraasin | Software and Web Developer",
    description:
      "Portfolio of Alejandra Maraasin, focused on software development, web development, and user-friendly systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}