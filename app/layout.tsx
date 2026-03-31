import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { geistSans, geistMono, arialRounded, playfairDisplay } from "./fonts";

const siteUrl = "https://www.nuelit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nuelit | Professional Career Services",
    template: "%s | Nuelit"
  },
  description: "Find your career breakthrough with Nuelit. We bridge the gap between top talent and elite employers using data-driven matching. Empower your career and change your life now.",
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
      </body>
    </html>
  );
}
