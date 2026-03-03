import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { geistSans, geistMono, arialRounded, playfairDisplay } from "./fonts";

export const metadata: Metadata = {
  title: "Neulit - Professional Career Services",
  description: "Find your career breakthrough with Nuelit. We bridge the gap between top talent and elite employers using data-driven matching. Empower your career and change your life now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.className} ${geistSans.variable} ${geistMono.variable} ${arialRounded.variable} ${playfairDisplay.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
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
