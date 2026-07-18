import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/component/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Jacob Braswell - Senior AI Solutions Engineer";
const description = "Personal website of Jacob Braswell — Senior AI Solutions Engineer at Seekr. Fine-tuning, Sovereign AI, agentic architectures, LLMOps.";
const siteUrl = "https://jocobtt.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Jacob Braswell" }],
  keywords: ["AI Engineer", "Fine-tuning", "Sovereign AI", "Agentic AI", "LLMOps", "MLOps", "KServe", "vLLM", "Terraform", "Kubernetes"],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Jacob Braswell",
    images: [{ url: "/img/me.png", width: 460, height: 460, alt: "Jacob Braswell" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/img/me.png"],
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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
