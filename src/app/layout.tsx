import type { Metadata } from "next";
import {
  Bodoni_Moda,
  Comfortaa,
  Cormorant_Garamond,
  Dancing_Script,
  Fredoka,
  Inter_Tight,
  Italiana,
  Pinyon_Script,
  Playfair_Display,
  Quicksand,
  Syne,
} from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-inter-tight",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
});

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const pinyon = Pinyon_Script({ subsets: ["latin"], weight: "400", variable: "--font-pinyon" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni" });
const italiana = Italiana({ subsets: ["latin"], weight: "400", variable: "--font-italiana" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });
const comfortaa = Comfortaa({ subsets: ["latin"], variable: "--font-comfortaa" });

const fontVariables = [
  interTight,
  cormorant,
  playfair,
  pinyon,
  bodoni,
  italiana,
  syne,
  quicksand,
  fredoka,
  dancing,
  comfortaa,
]
  .map((font) => font.variable)
  .join(" ");

export const metadata: Metadata = {
  title: "hoon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
