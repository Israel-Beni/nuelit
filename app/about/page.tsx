import { Summary } from "@/components/sections/summary";
import { GoalSection } from "@/components/sections/goal-section";
import { Values } from "@/components/sections/values";
import { LogoBand } from "@/components/sections/logo-band";

export const metadata = {
  title: "About Us | Neulit",
  description: "Learn how Neulit bridging the gap between talents and their career aspirations through our recruiter-backed expertise.",
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
