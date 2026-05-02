import { Summary } from "@/components/sections/summary";
import { GoalSection } from "@/components/sections/goal-section";
import { Values } from "@/components/sections/values";
import { LogoBand } from "@/components/sections/logo-band";
import { Founders } from "@/components/sections/founders";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Our Mission & Expert Team",
  description: "Learn how Nuelit bridges the gap between top talent and elite employers through recruiter-backed career services and strategic coaching.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Summary />
      {/* <GoalSection /> */}
      <Values />
      <Founders />
      <LogoBand />
    </>
  );
}
