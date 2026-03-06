"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tag } from '../ui/tag';
import Link from 'next/link';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-25 relative overflow-hidden">
      <div className="container-section py-25 flex flex-col lg:flex-row gap-10 lg:gap-20 bg-white/5 rounded-lg">

        {/* Left Col - Header */}
        <div className="flex-1 lg:max-w-md">
          <Tag text="FAQ" className="mb-8" />

          <h2 className="text-heading-2 mb-8">
            Frequently <span className="text-white/40">Asked</span> <br />
            <span className="emphasis">Question</span>
          </h2>

          <p className="text-subtitle my-10">
            Got questions? We've got answers. Here's everything you need to know about working with us
          </p>

          <Link href="/contact">
            <Button variant="primary">
              GET IN TOUCH
            </Button>
          </Link>
        </div>

        {/* Right Col - Accordion */}
        <div className="flex-[1.2] flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`
                group transition-slow overflow-hidden rounded-lg
                ${openIndex === index
                  ? 'bg-white/5 '
                  : 'bg-white/2'
                }
              `}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-8 flex items-center justify-between text-left"
              >
                <span className={`text-body !text-white font-medium transition-slow`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-white/30" />}
                </div>
              </button>

              <div
                className={`
                  transition-slow
                  ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="px-8 pb-8 text-body-sm max-w-2xl">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-8 text-white/5 text-4xl font-thin select-none pointer-events-none">+</div>
      <div className="absolute top-0 right-8 text-white/5 text-4xl font-thin select-none pointer-events-none">+</div>
      <div className="absolute bottom-0 left-8 text-white/5 text-4xl font-thin select-none pointer-events-none">+</div>
      <div className="absolute bottom-0 right-8 text-white/5 text-4xl font-thin select-none pointer-events-none">+</div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    question: "Who should use Nuelit?",
    answer: "We work with professionals at every stage—from new graduates just starting to experienced managers and C-level executives. If you're serious about your next career move, we're here to help you prepare."
  },
  {
    question: "I'm trying to decide between the different resume services. What is the difference between them?",
    answer: "Our services range from basic resume reviews to full-scale professional branding. Entry-level focus on foundational strengths, while Executive services emphasize leadership impact and strategic value."
  },
  {
    question: "Can I purchase just a resume? Or just a cover letter?",
    answer: "Yes, all our services are available à la carte. However, we recommend our bundled packages for the most cohesive professional narrative."
  },
  {
    question: "Do you work with candidates outside the US?",
    answer: "Absolutely. We have experience with international markets and understand the specific requirements for various global regions."
  },
  {
    question: "Does Nuelit guarantee its work?",
    answer: "We guarantee a high-quality, recruiter-approved final product. While we cannot guarantee a job offer, our clients consistently report higher interview rates after our services."
  },
  {
    question: "I have more questions. How can I get in touch with Nuelit?",
    answer: "You can reach out via our contact form, email us directly, or use the 'Get In Touch' button right here on the page."
  },
  {
    question: "Why do I need a personal website for my career?",
    answer: "A personal website serves as a digital portfolio that you own. It allows you to showcase your work, personality, and professional brand in a way a resume cannot, significantly increasing your visibility and credibility to recruiters."
  },
  {
    question: "What is included in the Website Development service?",
    answer: "We create a professional, responsive personal website tailored to your career goals. This includes custom design, mobile optimization, and a clear call-to-action for recruiters or clients."
  }
];
