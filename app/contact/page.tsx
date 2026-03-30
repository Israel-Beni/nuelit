import React from 'react';
import { ContactHeader } from '@/components/contact/header-contact';
import { ContactForm } from '@/components/contact/form-contact';
import { InfoCard } from '@/components/contact/card-info';
import { FAQ } from '@/components/sections/faq';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Nuelit",
  description: "Get in touch with Nuelit for personalized career coaching and top-tier resume writing services.",
};

export default function ContactPage() {
  return (
    <>
      <div className="container-section relative z-10">
        <ContactHeader />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start h-max">
          {/* Left Column */}
          <div className="md:col-span-3 flex flex-col sm:max-md:flex-row gap-5">
            <InfoCard
              tag="HIRE US"
              title="We're "
              subtitle="all ears"
              description="We always reply within 48 hours."
              footer="hello@nuelit.com"
              className="grow"
            />
            <div className="grow rounded-lg overflow-hidden glass max-h-60 flex justify-center items-center">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
                alt="Office Space"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Middle Column - Main Form */}
          <div className="md:col-span-6">
            <ContactForm />
          </div>

          {/* Right Column */}
          <div className="md:col-span-3 flex flex-col sm:max-md:flex-row gap-5">
            <div className="grow rounded-lg overflow-hidden glass max-h-60 flex justify-center items-center">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600"
                alt="Collaboration"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <InfoCard
              tag="GROWTH"
              title="Start "
              subtitle="the journey"
              description="to your career success"
              className="grow"
              footer="hello@nuelit.com"
            />
          </div>
        </div>
      </div>
      <FAQ />
    </>
  );
}
