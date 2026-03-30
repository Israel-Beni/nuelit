import { Summary } from "@/components/sections/summary";
import { GoalSection } from "@/components/sections/goal-section";
import { Values } from "@/components/sections/values";
import { LogoBand } from "@/components/sections/logo-band";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Nuelit",
  description: "Learn how Nuelit bridges the gap between top talent and elite employers through recruiter-backed career services and strategic coaching.",
  openGraph: {
    title: "About Us | Nuelit",
    description: "Learn how Nuelit bridges the gap between top talent and elite employers.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Summary />
      {/* <GoalSection /> */}
      <Values />
      <LogoBand />
    </>
  );
}
