"use client";

import React, { useState, useMemo } from 'react';
import { CardPricing, PricingPlan } from '@/components/card-pricing';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Tag } from '@/components/ui/tag';

export default function PricingPage() {
  const [cart, setCart] = useState<{ planId: string; levelIndex?: number }[]>([]);

  const handleAddToCart = (plan: PricingPlan, levelIndex?: number) => {
    setCart(prev => {
      const exists = prev.find(item => item.planId === plan.id);
      if (exists) {
        return prev.filter(item => item.planId !== plan.id);
      }
      return [...prev, { planId: plan.id, levelIndex }];
    });
  };

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => {
      const plan = PLANS.find(p => p.id === item.planId);
      if (!plan) return sum;
      const price = plan.levels && item.levelIndex !== undefined
        ? plan.levels[item.levelIndex].price
        : plan.basePrice;
      return sum + price;
    }, 0);
  }, [cart]);

  return (
    <div className="w-full rtext-white selection:bg-white selection:text-black">
      <section id="pricing-section" className="container-section relative z-10 py-25">
        {/* Header */}
        <div className="text-center mb-24">
          <Tag text="Pricing" />

          <h1 className="text-heading-1 mb-8 mt-5">
            Choose the <span className="emphasis">services</span><br />
            you need
          </h1>

          <p className="text-subtitle">
            ONE FLAT FEE, RESULTS YOU CAN TRUST.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {PLANS.map(plan => (
            <CardPricing
              key={plan.id}
              plan={plan}
              onAddToCart={handleAddToCart}
              isSelected={cart.some(item => item.planId === plan.id)}
            />
          ))}
        </div>

        {/* Checkout Summary */}
        {cart.length > 0 && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Items Selected ({cart.length})</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">${totalPrice}</span>
                  <span className="text-white/30 text-xs">TOTAL DUE</span>
                </div>
              </div>

              <div className="w-full md:w-70">
                <PayPalScriptProvider options={{
                  clientId: "test",
                  components: "buttons",
                  intent: "capture"
                }}>
                  <PayPalButtons
                    style={{
                      layout: "vertical",
                      color: "gold",
                      shape: "pill",
                      label: "checkout",
                      height: 54
                    }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [{
                          amount: {
                            value: totalPrice.toString()
                          }
                        }]
                      } as any);
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

const PLANS: PricingPlan[] = [
  {
    id: 'resume',
    name: 'RESUME',
    badge: 'RESUME - ENTRY LEVEL',
    basePrice: 249,
    originalPrice: 349,
    description: 'Launch your career with an ATS-friendly edge. Suited for 0-2 years experience.',
    levels: [
      { name: 'ENTRY', price: 249, originalPrice: 349, description: 'Launch your career with an ATS-friendly edge. Suited for 0-2 years experience.' },
      { name: 'PRO', price: 349, originalPrice: 449, description: 'Accelerate your growth with professional storytelling. Suited for 3-7 years experience.' },
      { name: 'EXECUTIVE', price: 549, originalPrice: 699, description: 'Command leadership roles with a high-impact profile. Suited for 8+ years experience.' }
    ],
    features: [
      'Phone Consultation with an expert',
      'Resume format that gets employer attention',
      'Optimized to get through ATS (Applicant Tracking Systems)',
      'First draft within 3 business days upon consultation',
      '2 Revisions based on your feedback',
      'Final Resume emailed to you in Word and PDF formats'
    ]
  },
  {
    id: 'cover-letter',
    name: 'COVER LETTER',
    badge: 'COVER LETTER',
    basePrice: 199,
    originalPrice: 249,
    description: 'A compelling narrative that opens doors to interviews.',
    features: [
      'Expertly written cover letter that gets you noticed',
      'Customized to your industry, role, and career story',
      'ATS-optimized formatting to pass automated screening systems',
      'Delivered within 3-5 business days',
      '1 Revision support'
    ]
  },
  {
    id: 'linkedin',
    name: 'LINKEDIN',
    badge: 'LINKEDIN OPTIMIZATION',
    basePrice: 199,
    originalPrice: 249,
    description: 'Optimize your digital presence and get noticed by recruiters.',
    features: [
      'We transform your profile to attract the right recruiters and opportunities',
      'Get found in searches with smart keyword placement',
      'Craft a headline and summary that actually represent who you are',
      'Showcase your wins and experience in a way that stands out'
    ]
  },
  {
    id: 'interview-prep',
    name: 'INTERVIEW PREP',
    badge: 'INTERVIEW PREPARATION',
    basePrice: 179,
    originalPrice: 199,
    description: 'Master your pitch with 60 minutes of expert coaching.',
    features: [
      'One-on-one training session matched to your target role',
      'Practice common and tough questions until you feel confident',
      'Learn how to tell your story in a way that resonates',
      'Get actionable feedback to improve your delivery and presence'
    ]
  },
  {
    id: 'scholarship-cv',
    name: 'SCHOLARSHIP CV',
    badge: 'SCHOLARSHIP CV',
    basePrice: 199,
    originalPrice: 249,
    description: 'Stand out to committees with an academic-focused CV.',
    features: [
      'Professionally crafted CV that highlights your academic achievements',
      'Formatted to meet scholarship committee expectations.',
      'Positioned to make you stand out among competitive applicants.',
      'Delivered within 3-5 business days',
      '1 Revision support'
    ]
  },
  {
    id: 'coaching',
    name: 'COACHING',
    badge: 'COACHING SESSIONS',
    basePrice: 399,
    description: 'Upgrade your career with extensive, personalized support.',
    levels: [
      { name: 'ONE', price: 399, originalPrice: 499, description: 'One-on-one intensive coaching session for immediate impact.' },
      { name: 'THREE', price: 899, originalPrice: 1199, description: 'Three comprehensive sessions to build a long-term roadmap.' }
    ],
    features: [
      'Pre-coaching needs assessment',
      '60 minute per session with your career coach',
      'Career strategy roadmap development',
      'Follow-up support and resource package'
    ]
  },
  {
    id: 'development',
    name: 'DEVELOPMENT',
    badge: 'WEB DEVELOPMENT',
    basePrice: 499,
    description: 'Professional web development tailored to your career goals.',
    levels: [
      { name: 'PORTFOLIO', price: 499, originalPrice: 649, description: 'Sleek personal portfolio to showcase your work and wins.' },
      { name: 'BUSINESS', price: 999, originalPrice: 1299, description: 'Professional business site with advanced features.' },
      { name: 'APP', price: 2499, originalPrice: 2999, description: 'Custom web application with complex functionality.' }
    ],
    features: [
      'Fully responsive and mobile-friendly',
      'Custom design reflective of your brand',
      'Optimized for speed and SEO',
      'Source code and deployment support'
    ]
  }
];
