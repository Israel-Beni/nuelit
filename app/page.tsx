import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/sections/hero').then(m => m.Hero));
const LogoBand = dynamic(() => import('@/components/sections/logo-band').then(m => m.LogoBand));
const Intro = dynamic(() => import('@/components/sections/intro').then(m => m.Intro));
const WhyUs = dynamic(() => import('@/components/sections/why-us').then(m => m.WhyUs));
const Services = dynamic(() => import('@/components/sections/services').then(m => m.Services));
const Process = dynamic(() => import('@/components/sections/process').then(m => m.Process));
const CTA = dynamic(() => import('@/components/sections/cta').then(m => m.CTA));
const FAQ = dynamic(() => import('@/components/sections/faq').then(m => m.FAQ));

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
