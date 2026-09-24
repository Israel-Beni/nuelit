import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
  alternates: {
    canonical: "/blog",
  },
};

export default function Blog() {
  return (
    <>
      <span>Blog test</span>
    </>
  );
}
