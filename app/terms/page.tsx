import React from 'react';
import { Tag } from "@/components/ui/tag";

export const metadata = {
  title: "Terms of Service | Neulit",
  description: "Terms of Service for Neulit services.",
};

export default function TermsPage() {
  return (
    <div className="py-25">
      <div className="container-section max-w-4xl">
        <div className="mb-16">
          <Tag text="Legal" className="mb-6" />
          <h1 className="text-heading-1 mb-8">
            Terms of <span className="text-white/40">Service</span>
          </h1>
          <p className="text-body-sm">
            Last updated: March 2026
          </p>
        </div>

        <div className="space-y-12 text-body">
          {terms.map((term, index) => (
            <section key={index}>
              <h2 className="text-2xl font-medium text-white mb-4">{term.title}</h2>
              {term.description.map((description, index) => (
                <p key={index} className="leading-relaxed mb-4 last:mb-0">
                  {description}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

const terms: { title: string; description: string[] }[] = [
  {
    title: "1. Acceptance of Terms",
    description: ["By accessing or using Neulit's services, you agree to be bound by these Terms of Service."],
  },
  {
    title: "2. Description of Service",
    description: ["Neulit provides career development services, including resume writing, career coaching, and website development."],
  },
  {
    title: "3. User Responsibilities",
    description: ["You are responsible for providing accurate information and for maintaining the confidentiality of any account details."],
  },
  {
    title: "4. Intellectual Property",
    description: ["All content provided as part of our services is the property of Neulit or its licensors and is protected by intellectual property laws."],
  },
  {
    title: "5. Limitation of Liability",
    description: ["Neulit shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services."],
  },
];