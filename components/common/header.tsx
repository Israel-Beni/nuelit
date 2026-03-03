"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useScroll } from '@/hooks/useScroll';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/lib/constants';
import Logo from '@/public/logo-light--nuelit.svg';

export function Header() {
  const isScrolled = useScroll(70);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="container-header fixed top-[var(--vertical-offset-header)] left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none">
      <div
        className={`
          glass rounded-full p-4 min-w-fit  transition-slow 
          flex items-center justify-between md:gap-12 pointer-events-auto overflow-hidden
          ${isScrolled
            ? 'w-full'
            : 'w-[40%]'
          }
        `}
      >
        {/* Logo */}
        <Link href="/" className={`flex justify-center flex-shrink-0 overflow-hidden transition-slow ${isScrolled ? "w-35" : "w-22"}`}>
          <Logo className="w-35 h-10 md:h-12 flex-shrink-0" />
        </Link>

        {/* Desktop Nav - Middle */}
        <nav className={`
            hidden md:flex items-center gap-5 mx-auto
          `}>
          {NAV_LINKS.filter((link) => link.name.toLowerCase() !== 'contact').map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-link"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button - Right */}
        <div className={`
            flex items-center
          `}>
          <Link href="/contact" className="hidden md:block">
            <Button variant="primary">
              LET'S CONNECT
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white/60 hover:text-white transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-500 md:hidden
          flex flex-col items-center justify-center gap-8
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-20px]'}
        `}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
          <Button >Get Started</Button>
        </Link>

        <button
          className="absolute top-10 right-10 text-white/30 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
};
