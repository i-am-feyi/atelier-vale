import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/providers/smooth-scroll";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hatton = localFont({
  src: [
    {
      path: "../fonts/PPHatton-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-hatton",
});

export const metadata: Metadata = {
  title: "Atelier Vale",
  description: "Crafting furniture for places of lasting character – By Feyi Badmus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, hatton.variable, "h-full antialiased")}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
