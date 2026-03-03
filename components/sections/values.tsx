"use client";

import { UserRound, Search, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SupportBanner } from "./support-banner";


export function Values() {
  return (
    <section className="py-25">
      <div className="container-section space-y-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="text-heading-2">
            Core <span className="emphasis">values</span>
          </h2>
          <p className="text-body-sm uppercase text-white/50 w-full max-w-sm">
            THESE ARE THE PRINCIPLES THAT GUIDE HOW WE WORK WITH YOU AND WHY OUR CLIENTS TRUST US TO HELP SHAPE THEIR CAREERS.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="glass rounded-lg p-8 space-y-5 transition-colors group"
            >
              <div className="flex items-center gap-5">
                {value.icon}
                <h3 className="text-body-sm font-medium !text-white/80">
                  {value.title}
                </h3>
              </div>
              <p className="text-body-sm text-white">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <SupportBanner />
      </div>
    </section>
  );
}

const values = [
  {
    icon: <UserRound className="w-5 h-5 text-white" />,
    title: "PERSONALIZED, NOT TEMPLATED",
    description: "We build from scratch based on your background, and roles you're targeting.",
  },
  {
    icon: <Search className="w-5 h-5 text-white" />,
    title: "RECRUITER-INFORMED INSIGHT",
    description: "We bring real hiring experience into every piece of work we deliver.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    title: "HONEST AND DIRECT",
    description: "We tell you what work and what don't. No fluff, no overselling.",
  },
];
