"use client";

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'pricing' | 'secondary' | 'secondary-pale' | 'glass' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-[0.2em] uppercase transition-slow  rounded-full active:scale-95 disabled:opacity-50 disabled:pointer-events-none group overflow-hidden cursor-pointer";

  const variants = {
    primary: "[background:var(--btn-primary)] hover:[background:var(--btn-primary-hover)] text-white shadow-[0_4px_30px_rgba(217,154,106,0.3)] hover:shadow-[0_4px_40px_rgba(217,154,106,0.5)] border-0",
    pricing: "[background:var(--btn-pricing)] hover:[background:var(--btn-pricing-hover)] text-white hover:bg-[var(--btn-pricing-hover)] border-0 shadow-xl",
    secondary: "[background:var(--btn-secondary)] hover:[background:var(--btn-secondary-hover)] text-white hover:bg-[var(--btn-secondary-hover)] border-0 shadow-lg",
    "secondary-pale": "[background:var(--btn-secondary-pale)] hover:[background:var(--btn-secondary-pale-hover)] text-white/90 hover:text-white hover:bg-[var(--btn-secondary-pale-hover)] border-0 shadow-md",
    glass: "glass-hover glass text-white text-[10px] sm:text-xs",
    outline: "border border-white/20 text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-5 py-3 text-sm font-semibold tracking-[0.5px]"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes.sm} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
