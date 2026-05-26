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

export const metadata: Metadata = {
  title: "Jacob Braswell - Senior AI Solutions Engineer",
  description: "Personal website of Jacob Braswell — Senior AI Solutions Engineer at Seekr. Fine-tuning, Sovereign AI, agentic architectures, LLMOps.",
  authors: [{ name: "Jacob Braswell" }],
  keywords: ["AI Engineer", "Fine-tuning", "Sovereign AI", "Agentic AI", "LLMOps", "MLOps", "KServe", "vLLM", "Terraform", "Kubernetes"],
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
