import React from 'react';
import { Tag } from '@/components/ui/tag';

export function Process() {
  return (
    <section id="how-it-works" className="py-25 bg-black/5">
      <div className="container-section">
        <div className="text-center mb-20 flex flex-col items-center gap-5">
          <Tag text="The Process" />
          <h2 className="text-heading-2">
            How it <span className="emphasis">works</span>
          </h2>
          <p className="text-subtitle max-w-md mx-auto leading-relaxed">
            From your first click to your next big career move
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10" />

          {STEPS.map((step, index) => (
            <div key={step.id} className="group relative">
              <div className="p-8 rounded-lg glass border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 h-full flex flex-col">
                <span className="text-xl font-serif italic text-white/20 mb-6 group-hover:text-primary/50 transition-colors">
                  {step.id}
                </span>

                <h3 className="text-heading-5 mb-4 !text-white">
                  {step.title}
                </h3>

                <p className="text-body-sm text-white/50 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    id: '01',
    title: 'Choose Your Service',
    desc: 'Select the package(s) that fits your career goals—from entry-level resumes to executive coaching.'
  },
  {
    id: '02',
    title: 'Share Your Story',
    desc: 'Provide your current resume and details through our secure form. Tell us about your ambitions.'
  },
  {
    id: '03',
    title: 'Expert Crafting',
    desc: 'Our recruiting specialists transform your profile over 3-5 business days with human-centered precision.'
  },
  {
    id: '04',
    title: 'Final Delivery',
    desc: 'Receive your optimized documents via email, ready for applications and noticed by recruiters.'
  }
];
