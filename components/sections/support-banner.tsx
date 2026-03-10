"use client";

import Link from "next/link";
import { MyCldImage } from "../utils/my-cld-image";
import { Button } from "../ui/button";

export function SupportBanner() {
  return (
    <div className="relative w-full max-w-200 mx-auto  glass  border-white/10 md:rounded-full p-5 md:p-2  flex flex-col md:flex-row items-center justify-between group overflow-hidden">
      {/* Animated gradient border glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

      <div className="flex flex-col md:flex-row items-center gap-5">
        {/* Team member avatar */}
        <MyCldImage width={70} height={70} src="support-personnel_m1rzac" gravity="center" alt="Support Team Member" className="object-cover size-17.5 rounded-full flex-shrink-0" />
        <div className="block space-y-2 text-center md:text-left mx-w-sm">
          <span className="block text-lg lg:text-xl">
            Hi there, the <span className="emphasis">support team here</span>
          </span>
          <span className="block text-body-sm uppercase">
            FEEL FREE TO ASK IF ANYTHING'S UNCLEAR ABOUT NUELIT
          </span>
        </div>
      </div>

      <Link
        href="/contact"
        className="mt-5"
      >
        <Button variant="primary">
          CONTACT US
        </Button>
      </Link>
    </div>
  );
}
