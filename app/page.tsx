import { LogoBand } from "@/components/sections/logo-band";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { Services } from "@/components/sections/services";
import { UnlockSection } from "@/components/sections/UnlockSection";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBand />
      {/* <ResumeSection /> */}
      <Services />
      {/* <UnlockSection /> */}
      <FAQ />
    </>
  );
}
