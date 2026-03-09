import React from 'react';
import { Tag } from '@/components/ui/tag';
import { UserCheck, Briefcase, GraduationCap, Globe } from 'lucide-react';

export function WhyUs() {
  return (
    <section id="why-us" className="py-padding-y-page">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* Left Column - Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Tag text="Why Choose Nuelit" className="mb-5 md:mb-8" />
            </div>
            <h2 className="text-heading-2 mb-5 md:mb-8">
              Expertise that,
              <span className="emphasis"> sets you apart</span>
            </h2>
            <p className="text-body mb-5 md:mb-12 mx-auto lg:mx-0 max-w-xl md:max-w-full">
              In a world of AI-generated content, we believe in the power of human intuition.
              Our recruiting specialists bring a decade of experience to your career journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex flex-col gap-3 md:gap-4 items-center lg:items-start text-center lg:text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg glass border border-white/10 flex items-center justify-center text-primary">
                    <feature.icon className="size-5 md:size-6" />
                  </div>
                  <div>
                    <h4 className="text-heading-5 mb-1 md:mb-2 !text-white">{feature.title}</h4>
                    <p className="text-body-sm text-white/40">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlight Box */}
          <div className="w-full lg:w-1/3 mt-8 md:mt-0">
            <div className="p-8 md:p-10 rounded-xl glass border border-primary/20 bg-primary/5 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50" />

              <div className="text-5xl md:text-heading-3 !text-white mb-4 md:mb-6">90%</div>
              <p className="text-body mb-5 md:mb-8 max-w-60 mx-auto">
                of our clients land interviews within 3 weeks of using our services.
              </p>

              <div className="space-y-4 px-4 md:px-0">
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[90%]" />
                </div>
                <p className="text-xs uppercase tracking-widest !text-white/30 font-bold">
                  Success Rate Verified
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: UserCheck,
    title: 'Human-Centric',
    desc: 'No bots. No templates. Every word is crafted by a professional recruiter.'
  },
  {
    icon: Briefcase,
    title: 'Industry Veterans',
    desc: 'Our team has 10+ years of hiring experience across diverse global markets.'
  },
  {
    icon: GraduationCap,
    title: 'Scholarship Experts',
    desc: 'Specialized focus on academic CVs that win prestigious global scholarships.'
  },
  {
    icon: Globe,
    title: 'Global Standards',
    desc: 'Resumes tailored to pass international ATS filters and cultural nuances.'
  }
];
