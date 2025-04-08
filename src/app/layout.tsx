import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeToggle } from '@/components/ThemeToggle'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Miguel Sandrino Portfolio",
  description: "Portfolio of Carlos Miguel Sandrino, a Fullstack web and mobile developer.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased transition-colors duration-300 min-h-screen">
        {children}
        <ThemeToggle />
        <ScrollToTop />
      </body>
    </html>
  );
}