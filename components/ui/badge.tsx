import { Flame, Star, Send, Phone } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

type BadgeVariant = 'primary' | 'blue' | 'green' | 'dark' | 'white' | 'glass';

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantConfig: {
  [key in BadgeVariant]: {
    styles: string;
    icon?: LucideIcon;
  }
} = {
  primary: {
    styles: 'bg-[#FF4D00]/30 text-[#FF4D00]',
    icon: Flame,
  },
  blue: {
    styles: 'bg-[#3385FF]/30 text-[#3385FF]',
    icon: Star,
  },
  green: {
    styles: 'bg-[#0F9101]/30 text-[#0F9101]',
    icon: Send,
  },
  dark: {
    styles: 'bg-[#1A2333]/30 text-[#1A2333]',
    icon: Phone,
  },
  white: {
    styles: 'bg-[#FFFFFF]/30 text-[#FFFFFF]',
    icon: Phone,
  },
  glass: {
    styles: 'glass border border-white/10 text-white/60',
    // icon: Phone,
  },
};

export function Badge({ text, variant = 'primary', className = '' }: BadgeProps) {
  const { styles, icon: Icon } = variantConfig[variant];

  return (
    <div className={`
      inline-flex items-center gap-1.5 px-4 py-1.5 
      rounded-full text-[10px] font-bold tracking-widest uppercase 
      w-fit transition-all duration-300
      ${styles} 
      ${className}
    `}>
      {Icon && <Icon className="size-3.5" />}
      <span>{text}</span>
    </div>
  );
}
