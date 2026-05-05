import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Send } from 'lucide-react';
import Logo from '@/public/logo-light--nuelit.svg';
import { Badge } from '@/components/ui/badge';
import { Tag } from '@/components/ui/tag';

const FOOTER_LINKS = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Pricing', href: '/pricing' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]
};

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative py-16 md:py-25 overflow-hidden">
      <div className="container-section">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-16 mb-20 md:mb-32">

          {/* Logo & Links */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-center md:items-start text-center md:text-left">
            <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
              <Logo className="w-auto h-12 md:h-20" />
            </Link>

            <div className="flex flex-row md:flex-row gap-12 md:gap-24">
              <div className="flex flex-col items-center md:items-start">
                <Tag text="Main" className="mb-4 md:mb-6" />
                <ul className="space-y-3 md:space-y-4">
                  {FOOTER_LINKS.main.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-base md:text-lg font-medium text-white/50 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <Tag text="Company" className="mb-4 md:mb-6" />
                <ul className="space-y-3 md:space-y-4">
                  {FOOTER_LINKS.company.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-base md:text-lg font-medium text-white/50 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="relative group w-full lg:w-96 px-4 md:px-0">
            <div className="relative z-10 bg-white/80 rounded-xl p-8 md:p-10 flex flex-col items-center justify-center min-h-40 md:min-h-45 text-center shadow-[0_20px_50px_rgba(255,255,255,0.05)] md:shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 text-black/20 text-lg">+</div>
              <div className="absolute top-4 right-4 text-black/20 text-lg">+</div>
              <div className="absolute bottom-4 left-4 text-black/20 text-lg">+</div>
              <div className="absolute bottom-4 right-4 text-black/20 text-lg">+</div>

              <Badge variant="green" text="Email Us" className="mb-4 md:mb-6" />

              <Link href="mailto:hello@nuelit.com" className="text-sm md:text-body !text-black/60 hover:!text-primary transition-colors mb-2">
                hello@nuelit.com
              </Link>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-white/10 blur-[40px] md:blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>

        {/* Big Text Background Overlay */}
        <div className="absolute bottom-0 flex items-center justify-center w-full md:w-3/4 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none z-0">
          <Logo className="w-full h-auto opacity-5 md:opacity-10 grayscale-90 brightness-50" />
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 pt-8 md:pt-12 border-t border-white/5">
          <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/35 text-center md:text-left">
            © NUELIT, {year}. ALL RIGHTS RESERVED.
            <br />
            Toulouse, France
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex items-center gap-4 md:gap-6">
              <Link href="https://x.com/nuelit_services?s=21" target="_blank" className="p-2 text-white/35 hover:text-white transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </Link>
              <Link href="https://www.instagram.com/nuelit_services?igsh=MTAycjF0eTVmOHhrdw%3D%3D&utm_source=qr" target="_blank" className="p-2 text-white/35 hover:text-white transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/nuelit" target="_blank" className="p-2 text-white/35 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 fill-current" />
              </Link>
            </div>

            <Link href="/contact" className="w-full md:w-fit px-4 md:px-0">
              <Button variant="primary" className="w-full">
                NEED HELP?
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
