"use client";
import Link from 'next/link';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Badge } from '../ui/badge';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { sendContactEmails } from '@/app/actions/email-actions';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  terms: z.boolean().refine((val: boolean) => val === true, { message: "You must agree to the Terms and Conditions" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
      terms: false,
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus('idle');
    try {
      // Logic for sending real emails via Server Action
      const result = await sendContactEmails(data);

      if (result.success) {
        setSubmissionStatus('success');
        reset();
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 flex flex-col gap-8 shadow-2xl relative">
      <div className="space-y-3 text-left">
        <Badge variant="green" text="GET IN TOUCH" />
        <h2 className="text-heading-4 font-medium !from-black !to-black/60">
          Have an <span className="emphasis !from-black/80 !to-black/50">inquiry or an idea?</span>
        </h2>
      </div>

      {/* Notification Box */}
      {submissionStatus !== 'idle' && (
        <div className={`
          flex items-start gap-4 p-4 rounded-lg border animate-in fade-in slide-in-from-top-4 duration-300
          ${submissionStatus === 'success'
            ? 'bg-green-50 border-green-100 text-green-800'
            : 'bg-red-50 border-red-100 text-red-800'}
        `}>
          {submissionStatus === 'success' ? (
            <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="size-5 shrink-0 mt-0.5" />
          )}
          <div className="flex-1">
            <p className="text-sm font-semibold">
              {submissionStatus === 'success' ? 'Email Sent Successfully!' : 'Something went wrong.'}
            </p>
            <p className="text-xs opacity-80 mt-1">
              {submissionStatus === 'success'
                ? 'Thank you for reaching out! A personalized confirmation email has been sent to your inbox. We will get back to you within 48 hours.'
                : 'Please try again later or contact hello@nuelit.com directly.'}
            </p>
          </div>
          <button
            onClick={() => setSubmissionStatus('idle')}
            className="p-1 hover:bg-black/5 rounded-full transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">NAME*</label>
            <input
              {...register('name')}
              type="text"
              placeholder="John Doe"
              className={`w-full bg-black/5 rounded-xl px-4 py-2.5 text-black placeholder:text-black/30 outline-none focus:ring-2 transition-all border-none ${errors.name ? 'focus:ring-red-500/20 bg-red-50' : 'focus:ring-accent/20'}`}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">EMAIL ADDRESS*</label>
            <input
              {...register('email')}
              type="email"
              placeholder="john.doe@gmail.com"
              className={`w-full bg-black/5 rounded-xl px-4 py-2.5 text-black placeholder:text-black/30 outline-none focus:ring-2 transition-all border-none ${errors.email ? 'focus:ring-red-500/20 bg-red-50' : 'focus:ring-accent/20'}`}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">COMPANY</label>
            <input
              {...register('company')}
              type="text"
              placeholder="Company name"
              className="w-full bg-black/5 rounded-xl px-4 py-2.5 text-black placeholder:text-black/30 outline-none focus:ring-2 focus:ring-accent/20 transition-all border-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">MESSAGE*</label>
            <textarea
              {...register('message')}
              placeholder="Your message"
              rows={4}
              className={`w-full bg-black/5 rounded-xl px-4 py-2.5 text-black placeholder:text-black/30 outline-none focus:ring-2 transition-all border-none resize-none ${errors.message ? 'focus:ring-red-500/20 bg-red-50' : 'focus:ring-accent/20'}`}
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <input
              {...register('terms')}
              type="checkbox"
              className="w-4 h-4 rounded border-black/10 text-accent focus:ring-accent"
              id="terms"
            />
            <label htmlFor="terms" className="text-sm text-black/50">
              I have read and agree to the <Link href="/terms" className="text-accent underline cursor-pointer">Terms and Conditions</Link>
            </label>
          </div>
          {errors.terms && <p className="text-xs text-red-500">{errors.terms.message}</p>}
        </div>

        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`w-full bg-[#B8A4FF] hover:bg-[#a691ff] text-white font-bold py-4 rounded-full transition-all shadow-lg shadow-accent/20 uppercase tracking-widest text-sm 
            ${(!isValid || isSubmitting) ? 'opacity-50 cursor-not-allowed grayscale' : 'active:scale-[0.98] cursor-pointer'}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
