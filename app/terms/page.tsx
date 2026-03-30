import React from 'react';
import { Tag } from "@/components/ui/tag";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Nuelit",
  description: "Read the Terms of Service for using Nuelit's career development services.",
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
    description: ["By accessing or using Nuelit's services, you agree to be bound by these Terms of Service."],
  },
  {
    title: "2. Description of Service",
    description: ["Nuelit provides career development services, including resume writing, career coaching, and website development."],
  },
  {
    title: "3. User Responsibilities",
    description: ["You are responsible for providing accurate information and for maintaining the confidentiality of any account details."],
  },
  {
    title: "4. Intellectual Property",
    description: ["All content provided as part of our services is the property of Nuelit or its licensors and is protected by intellectual property laws."],
  },
  {
    title: "5. Limitation of Liability",
    description: ["Nuelit shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services."],
  },
];