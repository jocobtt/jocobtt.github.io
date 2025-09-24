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
  title: "Jacob Braswell - MLOps Engineer & Tech Enthusiast",
  description: "Personal website of Jacob Braswell, MLOps Engineer focused on cloud computing, DevOps, and data science.",
  authors: [{ name: "Jacob Braswell" }],
  keywords: ["MLOps", "Data Science", "Cloud Computing", "DevOps", "Software Engineering"],
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
