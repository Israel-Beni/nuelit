"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tag } from '../ui/tag';
import Link from 'next/link';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-25 relative overflow-hidden">
      <div className="container-section py-16 md:py-25 flex flex-col lg:flex-row gap-12 lg:gap-20 bg-white/5 rounded-2xl md:rounded-3xl">

        {/* Left Col - Header */}
        <div className="flex-1 lg:max-w-md text-center lg:text-left px-4 md:px-0">
          <div className="flex justify-center lg:justify-start">
            <Tag text="FAQ" className="mb-5 md:mb-8" />
          </div>

          <h2 className="text-heading-2 mb-5 md:mb-8">
            Frequently
            <span className="emphasis"> Asked Question</span>
          </h2>

          <p className="text-subtitle my-6 md:my-10 max-w-xl">
            Got questions? We've got answers. Here's everything you need to know about working with us
          </p>

          <Link href="/contact">
            <Button variant="primary">
              GET IN TOUCH
            </Button>
          </Link>
        </div>

        {/* Right Col - Accordion */}
        <div className="flex-[1.2] flex flex-col gap-3 md:gap-4 px-2 md:px-0">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`
                group transition-slow overflow-hidden rounded-xl
                ${openIndex === index
                  ? 'bg-white/10'
                  : 'bg-white/5'
                }
              `}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 md:px-8 md:py-8 flex items-center justify-between text-left"
              >
                <span className={`text-body !text-white font-medium transition-slow pr-4`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 transition-slow ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <Minus className="w-4 h-4 md:w-5 md:h-5 text-white" /> : <Plus className="w-4 h-4 md:w-5 md:h-5 text-white/30" />}
                </div>
              </button>

              <div
                className={`
                  transition-slow
                  ${openIndex === index ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="px-6 pb-6 md:px-8 md:pb-8 text-body max-w-xl space-y-4">
                  {item.answer()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="hidden md:block absolute top-0 left-8 text-white/5 text-4xl font-thin select-none pointer-events-none">+</div>
      <div className="hidden md:block absolute top-0 right-8 text-white/5 text-4xl font-thin select-none pointer-events-none">+</div>
      <div className="hidden md:block absolute bottom-0 left-8 text-white/5 text-4xl font-thin select-none pointer-events-none">+</div>
      <div className="hidden md:block absolute bottom-0 right-8 text-white/5 text-4xl font-thin select-none pointer-events-none">+</div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    question: "Who should use Nuelit?",
    answer: () => (
      <>
        We work with professionals at every stage—from new graduates just starting to experienced managers and C-level executives. If you're serious about your next career move, we're here to help you prepare.
      </>
    )
  },
  {
    question: "I’m trying to decide between the different resume services. What is the difference between them?",
    answer: () => (
      <>
        <p>We offer three resume services based on your career level:</p>
        <p><strong>Executive Resume</strong> – For senior leaders like Presidents, CFOs, VPs, or Marketing Directors. Also, for anyone targeting roles with $125K+ compensation.</p>
        <p><strong>Professional Resume</strong> – For professionals with over 2 years of experience who aren't at the executive level yet.</p>
        <p><strong>Entry-Level Resume</strong> – For recent graduates or professionals with up to 2 years of experience.</p>
        <p>The pricing reflects the work involved. Executive resumes require more time because of longer career histories and higher-level positioning strategies.</p>
      </>
    )
  },
  {
    question: "Can I purchase just a resume? Or just a cover letter?",
    answer: () => (
      <>
        <p> Absolutely! You can choose any service on its own or combine them however you'd like. </p>
        <p>Most clients start with a resume, LinkedIn profile, and cover letter, then add interview prep once they land interviews. But it's completely up to you—pick what fits your needs right now.</p>
        <Link href="/#services" className="text-primary/70">View all services</Link>
      </>
    )
  },
  {
    question: "Do you work with candidates outside the US?",
    answer: () => (
      <>
        <p>Yes! We work with clients worldwide, as long as your resume and job search are in English.</p>
        <p>We've helped professionals across the U.S., Canada, Europe, Australia, South America, and Africa land their ideal roles.</p>
      </>
    )
  },
  {
    question: "Does Nuelit guarantee its work?",
    answer: () => (
      <>
        <p>Yes! We offer a 60-day interview guarantee, provided you do you due diligence of applying to jobs.</p>
        <p>If you don't receive an interview request within 60 days of getting your final resume, we'll rewrite it once at no extra charge.</p>
      </>
    )
  },
  {
    question: "I have more questions. How can I get in touch with Nuelit?",
    answer: () => (
      <>
        <p>We're here to help! Reach out anytime between 8am-5pm Central Time.</p>
        <p>Email: <Link href="mailto:hello@nuelit.com" className="text-primary/70">hello@nuelit.com</Link></p>
      </>
    )
  },
  {
    question: "Why do I need a personal website for my career?",
    answer: () => (
      <p>A personal website serves as a digital portfolio that you own. It allows you to showcase your work, personality, and professional brand in a way a resume cannot, significantly increasing your visibility and credibility to recruiters.</p>
    )
  },
  {
    question: "What is included in the Website Development service?",
    answer: () => (
      <p>We create a professional, responsive personal website tailored to your career goals. This includes custom design, mobile optimization, and a clear call-to-action for recruiters or clients.</p>
    )
  }
];
