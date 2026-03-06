import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from '@/public/logo-light--nuelit.svg';
import { MyCldImage } from '../utils/my-cld-image';

export function CTA() {
  return (
    <section className="py-25 bg-black/20 relative">
      <div className="container-section overflow-hidden relative rounded-lg glass border border-white/5 bg-white/[0.02] flex flex-col lg:flex-row items-center gap-8 overflow-hidden">

        {/* Left Content */}
        <div className="flex-1 my-25 relative z-10 text-center lg:text-left">
          <Logo className="w-auto h-10" />

          <h2 className="text-heading-2 mb-8">
            Let's unlock your
            <span className="emphasis">dream career</span>
          </h2>

          <p className="text-subtitle mb-8 mx-auto lg:mx-0">
            Tell us your vision — we'll will equip you with what you need to achieve it
          </p>

          <Link href="/pricing">
            <Button variant="primary">
              GET STARTED
            </Button>
          </Link>
        </div>

        {/* Right Content - VR Headset */}
        <div className="relative flex items-start w-full md:w-1/2 h-140 rounded-lg overflow-hidden">
          <MyCldImage
            src="iLEjx33naVHB8Pm4Fhai3j6cusc_bmqn3q"
            alt="Man wearing a VR headset"
            fill
            className="object-cover"
          />
          {/* Minimalist UI tags */}
          <div className="absolute top-20 right-0 px-4 py-2 glass rounded-lg border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60">
            Vision Active
          </div>
          <div className="absolute bottom-40 left-0 px-4 py-2 glass rounded-lg border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60">
            + Skill Upload
          </div>
        </div>

        {/* Background grid-like texture */}
        <div className="absolute inset-0 flex justify-center opacity-20 pointer-events-none z-0"
        >
          <MyCldImage fill src="2W5tYAp7KVU2COjxLNhiNawYU_pgtscq" className='size-4/2 ' alt="Grid background abstract pattern" />
        </div>
      </div>
    </section >
  );
}
