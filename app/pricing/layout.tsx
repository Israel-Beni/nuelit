import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pricing & Services",
  description: "Invest in your career with our professional resume writing, career coaching, and interview preparation services.",
  openGraph: {
    title: "Pricing & Services | Nuelit",
    description: "Flexible pricing for elite career services and recruiter-backed coaching.",
  },
};

export default function LayoutPricing({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
