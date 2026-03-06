"use client";

import Image from "next/image";
import Link from "next/link";

export function GoalSection() {
  return (
    <section className="container-section py-20">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Column: Team Images */}
        <div className="flex flex-col gap-6">
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-2xl border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Using a placeholder SVG with a descriptive alt */}
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-white/20 text-xs text-center p-8 uppercase tracking-widest">
              Team collaboration photo
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-2xl border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Using a placeholder SVG with a descriptive alt */}
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-white/20 text-xs text-center p-8 uppercase tracking-widest">
              Office environment photo
            </div>
          </div>
        </div>

        {/* Right Column: Founder Quote & CTA */}
        <div className="glass border border-white/10 rounded-2xl p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          {/* Background circles (matching the design) */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 border border-white/5 rounded-full" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 border border-white/5 rounded-full" />

          <div className="relative z-10 space-y-10">
            {/* Small Logo */}
            <div className="text-2xl font-serif text-white/80 italic">Neulit</div>

            {/* Headline */}
            <h2 className="text-3xl lg:text-4xl font-medium leading-tight">
              We are the trusted partner that <span className="text-white/40">turns professional experience</span> into career opportunities.
            </h2>

            {/* Quote */}
            <blockquote className="text-2xl lg:text-3xl font-serif italic text-white/90 leading-relaxed border-l-2 border-primary/40 pl-6 py-2">
              &quot;We exist so no one has to wonder if their resume is holding them back.&quot;
            </blockquote>

            {/* Founder Info */}
            <div className="flex flex-col gap-1">
              <span className="font-medium text-white/80">Frank B. — Founder & CEO</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-8">
              <Link
                href="/team"
                className="px-6 py-3 bg-[var(--hero-gradient)] rounded-full text-xs font-bold tracking-widest hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                MEET THE TEAM
              </Link>
              <Link
                href="mailto:HELLO@NEULIT.COM"
                className="px-6 py-3 border border-white/10 rounded-full text-xs font-bold tracking-widest hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                HELLO@NEULIT.COM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
