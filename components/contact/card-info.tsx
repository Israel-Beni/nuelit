import React from 'react';
import { Badge } from '../ui/badge';

interface InfoCardProps {
  tag?: string;
  title: string;
  subtitle?: string;
  description?: string;
  footer?: string;
  image?: string;
  className?: string;
}

export function InfoCard({ tag, title, subtitle, description, footer, image, className = "" }: InfoCardProps) {
  return (
    <div className={`glass rounded-lg p-8 flex flex-col gap-4 overflow-hidden relative ${className}`}>
      {tag && (
        <Badge variant="white" text={tag} className='!text-white' />
      )}

      <div className="space-y-1">
        <h3 className="text-heading-4 font-medium text-white/90">
          {title} {subtitle && <span className="font-serif italic text-white/40">{subtitle}</span>}
        </h3>
      </div>

      {description && (
        <p className="text-heading-5">
          {description}
        </p>
      )}

      {footer && (
        <div className="mt-auto">
          <p className="text-white/40 text-base">{footer}</p>
        </div>
      )}

      {image && (
        <div className="absolute inset-0 z-[-1]">
          <img src={image} alt={title} className="w-full h-full object-cover opacity-60" />
        </div>
      )}
    </div>
  );
}
