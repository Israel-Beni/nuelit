import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { GoogleTagManager } from "@next/third-parties/google"
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { geistSans, geistMono, arialRounded, playfairDisplay } from "./fonts";

const siteUrl = "https://www.nuelit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Resume Writing and Career Coaching Services",
    template: "%s | Nuelit"
  },
  description: "Get hired faster with expert resume writing and career coaching. We help professionals stand out and land the jobs the deserve.",
  keywords: ["career services", "resume writing", "career coaching", "ATS optimization", "recruiter", "job search"],
  authors: [{ name: "Nuelit Team" }],
  creator: "Nuelit",
  publisher: "Nuelit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nuelit",
    title: "Nuelit | Professional Career Services",
    description: "Empowering careers through professional writing and recruiter-backed coaching.",
    images: [
      {
        url: "/logo-og-light--nuelit.png",
        width: 1200,
        height: 630,
        alt: "Nuelit - Career Breakthrough",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuelit | Professional Career Services",
    description: "Empowering careers through professional writing and recruiter-backed coaching.",
    images: ["/logo-og-light--nuelit.png"],
    creator: "@nuelit",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
  alternates: {
    canonical: siteUrl,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.className} ${geistSans.variable} ${geistMono.variable} ${arialRounded.variable} ${playfairDisplay.variable} antialiased bg-background text-foreground flex flex-col min-h-screen selection:bg-primary/30`}
      >
        <Header />
        <main className="flex flex-col pt-[calc(var(--vertical-offset-header)+var(--height-header))]">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID} />}
        <Analytics />
      </body>
    </html>
  );
}
