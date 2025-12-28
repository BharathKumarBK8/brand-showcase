import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Layout from "./components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "R2 Media - Creative Production Studio",
  description:
    "We craft unforgettable experiences through Event Management, Video Production, Photography, and Creative Advertising.",
  keywords: [
    "event management",
    "video production",
    "photography",
    "creative advertising",
    "media production",
  ],
  robots: "index, follow",
  openGraph: {
    title: "R2 Media - Creative Production Studio",
    description:
      "We craft unforgettable experiences through Event Management, Video Production, Photography, and Creative Advertising.",
    type: "website",
    siteName: "R2 Media",
  },
  icons: {
    icon: [
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/assets/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/assets/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
