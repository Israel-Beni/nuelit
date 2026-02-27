import { ClientsSection } from "@/components/sections/ClientsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { UnlockSection } from "@/components/sections/UnlockSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsSection />
      <ResumeSection />
      <ServicesSection />
      <UnlockSection />
      <FAQSection />
    </>
  );
}
