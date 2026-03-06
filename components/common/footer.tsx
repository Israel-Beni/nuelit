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

export function Footer() {
  return (
    <footer className="relative py-25 overflow-hidden ">
      <div className="container-section">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-32">

          {/* Logo & Links */}
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
              <Logo className="w-auto h-20" />
            </Link>

            <div className="flex gap-24">
              <div>
                <Tag text="Main" className="mb-6" />
                <ul className="space-y-4">
                  {FOOTER_LINKS.main.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-lg font-medium text-white/50 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Tag text="Company" className="mb-6" />
                <ul className="space-y-4">
                  {FOOTER_LINKS.company.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-lg font-medium text-white/50 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="relative group lg:w-96">
            <div className="relative z-10 bg-white/80 rounded-lg p-10 flex flex-col items-center justify-center min-h-45 text-center shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 text-black/20 text-xl">+</div>
              <div className="absolute top-4 right-4 text-black/20 text-xl">+</div>
              <div className="absolute bottom-4 left-4 text-black/20 text-xl">+</div>
              <div className="absolute bottom-4 right-4 text-black/20 text-xl">+</div>

              <Badge variant="green" text="Email Us" className="mb-6" />

              <Link href="mailto:hello@nuelit.com" className="text-body !text-black/60 hover:!text-primary transition-colors mb-2">
                hello@nuelit.com
              </Link>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-white/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>

        {/* Big Text Background Overlay */}
        <div className="absolute bottom-0 flex items-center justify-center w-3/4 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none z-0">
          <Logo className="w-full h-auto opacity-10 grayscale-90 brightness-50" />
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">
            © NUELIT, 2026. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link href="https://x.com/nuelit_services?s=21" target="_blank" className="p-2 text-white/30 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </Link>
              <Link href="https://www.instagram.com/nuelit_services?igsh=MTAycjF0eTVmOHhrdw%3D%3D&utm_source=qr" target="_blank" className="p-2 text-white/30 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="linkedin.com/company/nuelit" target="_blank" className="p-2 text-white/30 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5 fill-current" />
              </Link>
            </div>

            <Link href="/contact">
              <Button variant="primary">
                NEED HELP?
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
