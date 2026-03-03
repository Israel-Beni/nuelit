"use client";

import Link from "next/link";
import { MyCldImage } from "../utils/my-cld-image";
import { Button } from "../ui/button";

export function SupportBanner() {
  return (
    <div className="relative w-full max-w-200 mx-auto  glass border border-white/10 rounded-full p-2  flex items-center justify-between group overflow-hidden">
      {/* Animated gradient border glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

      <div className="flex items-center gap-6">
        {/* Team member avatar */}
        <MyCldImage width={70} height={70} src="support-personnel_m1rzac" gravity="center" alt="Support Team Member" className="object-cover size-17.5 rounded-full flex-shrink-0" />
        <div className="hidden sm:block space-y-2">
          <span className="block text-lg lg:text-xl">
            Hi there, the <span className="emphasis">support team here</span>
          </span>
          <span className="block text-body-sm uppercase">
            FEEL FREE TO ASK IF ANYTHING'S UNCLEAR ABOUT NEULIT
          </span>
        </div>
        <span className="sm:hidden text-body-sm">
          Hi, we&apos;re <span className="emphasis">here to help!</span>
        </span>
      </div>

      <Link
        href="/contact"
        className="px-8 py-3 bg-[var(--hero-gradient)] rounded-full text-[10px] font-bold tracking-widest hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        <Button variant="primary">
          CONTACT US
        </Button>
      </Link>
    </div>
  );
}
