import { Tag } from "@/components/ui/tag";

export const metadata = {
  title: "Privacy Policy | Neulit",
  description: "Privacy Policy for Neulit services.",
};

export default function PrivacyPage() {
  return (
    <div className="py-25">
      <div className="container-section">
        <div className="mb-16">
          <Tag text="Legal" className="mb-6" />
          <h1 className="text-heading-1 mb-8">
            Privacy <span className="text-white/40">Policy</span>
          </h1>
          <p className="text-body-sm">
            Last updated: March 2026
          </p>
        </div>

        <div className="space-y-12 text-body">
          {policies.map((policy, index) => (
            <section key={index}>
              <h2 className="text-heading-3 mb-4">{policy.title}</h2>
              {policy.description.map((description, index) => (
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

const policies: { title: string; description: string[]; }[] = [
  {
    title: "1. Information We Collect",
    description: ["We collect information you provide directly to us when you use our services, including your name, email address, resume details, and any other information you choose to provide."],
  },
  {
    title: "2. How We Use Your Information",
    description: ["We use the information we collect to provide, maintain, and improve our services, including resume writing, career coaching, and website development."],
  },
  {
    title: "3. Information Sharing",
    description: ["We do not share your personal information with third parties except as necessary to provide our services or as required by law."],
  },
  {
    title: "4. Data Security",
    description: ["We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access."],
  },
  {
    title: "5. Contact Us",
    description: ["If you have any questions about this Privacy Policy, please contact us at hello@nuelit.com."],
  },
];
