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
    <header className="fixed top-[var(--vertical-offset-header)] left-1/2 -translate-x-1/2 z-50 w-full flex flex-col items-center pointer-events-none">
      <div
        className={`
          container-header glass md:rounded-full min-w-fit min-h-fit transition-slow 
          flex items-center justify-between md:gap-12 pointer-events-auto overflow-hidden
          ${isScrolled ? 'w-full' : 'w-full md:w-[40%]'}
        `}
      >
        {/* Logo */}
        <Link href="/" className={`flex items-center justify-center flex-shrink-0 overflow-hidden transition-slow ${isScrolled ? "w-16 md:w-24" : "w-16"}`}>
          <Logo className={`h-10 md:h-12 flex-shrink-0 ${isScrolled ? "w-22 md:w-35" : "w-22"}`} />
        </Link>

        {/* Desktop Nav - Middle */}
        <nav className="hidden md:flex items-center gap-5 mx-auto">
          {NAV_LINKS.desktop.filter((link) => link.name.toLowerCase() !== 'contact').map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-link hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button - Right (Desktop) */}
        <div className="hidden md:flex items-center">
          <Link href="/contact">
            <Button variant="primary">
              LET'S CONNECT
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          md:hidden w-[92%] -mt-2 glass rounded-lg overflow-hidden transition-slow pointer-events-auto
          ${isMobileMenuOpen ? 'min-h-fit max-h-fit opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col p-6 gap-4 bg-black/40">
          {NAV_LINKS.mobile.filter((link) => link.name.toLowerCase() !== 'contact').map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-2">
            <Button className="w-full">LET'S CONNECT</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
