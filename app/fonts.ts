import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const arialRounded = localFont({
  src: "../public/fonts/arial-rounded-mt-bold/arialroundedmtbold.ttf",
  variable: "--font-arial-rounded",
});


export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});
