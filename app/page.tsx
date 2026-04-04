import { LogoBand } from "@/components/sections/logo-band";
import { Intro } from "@/components/sections/intro";
import { Services } from "@/components/sections/services";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Elite Career Services & Resume Writing",
  description: "Accelerate your career with recruiter-backed coaching, ATS-perfect resumes, and strategic career services.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBand />
      <Intro />
      <WhyUs />
      <Services />
      <Process />
      <CTA />
      <FAQ />
    </>
  );
}
