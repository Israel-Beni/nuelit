import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Transparent Pricing for Career Services",
  description: "Invest in your career with our professional resume writing, career coaching, and interview preparation services.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function LayoutPricing({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
