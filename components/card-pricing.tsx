"use client";

import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { Button } from './ui/button';

export interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  basePrice: number;
  originalPrice?: number;
  description: string;
  levels?: { name: string; price: number; originalPrice?: number; description: string }[];
  features: string[];
}

interface CardPricingProps {
  plan: PricingPlan;
  onAddToCart: (plan: PricingPlan, selectedLevelIndex?: number) => void;
  isSelected?: boolean;
}

export function CardPricing({ plan, onAddToCart, isSelected }: CardPricingProps) {
  const [levelIndex, setLevelIndex] = useState(0);

  const currentPrice = plan.levels ? plan.levels[levelIndex].price : plan.basePrice;
  const currentDescription = plan.levels ? plan.levels[levelIndex].description : plan.description;

  return (
    <div className={`relative group p-8 rounded-lg border transition-all duration-300 ${isSelected
      ? 'bg-white/10 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)]'
      : 'bg-white/5 border-white/10 hover:border-white/20'
      } backdrop-blur-xl flex flex-col h-full`}>

      <div className="mb-6">
        <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-widest text-white/50 border border-white/10">
          {plan.badge}
        </span>
      </div>

      <div className="mb-6 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-white">${currentPrice}</span>
        <span className="text-white/40 line-through text-xl">
          ${plan.levels
            ? (plan.levels[levelIndex].originalPrice || Math.round(currentPrice * 1.2))
            : (plan.originalPrice || Math.round(currentPrice * 1.2))}
        </span>
      </div>

      {plan.levels && (
        <div className="mb-8">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-white/40 mb-4 px-1">
            {plan.levels.map((level, i) => (
              <span key={level.name} className={i === levelIndex ? 'text-white' : ''}>
                {level.name}
              </span>
            ))}
          </div>
          <div className="relative h-1 bg-white/10 rounded-full mb-2">
            <input
              type="range"
              min="0"
              max={plan.levels.length - 1}
              value={levelIndex}
              onChange={(e) => setLevelIndex(parseInt(e.target.value))}
              className="absolute top-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div
              className="absolute top-0 h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(217,154,106,0.3)]"
              style={{ width: `${(levelIndex / (plan.levels.length - 1)) * 100}%` }}
            />
            <div
              className="absolute top-1/2 -mt-2 w-4 h-4 bg-white rounded-full border-2 border-primary shadow-[0_0_15px_rgba(217,154,106,0.8)] transition-all duration-300 z-20"
              style={{ left: `calc(${(levelIndex / (plan.levels.length - 1)) * 100}% - 8px)` }}
            />
          </div>
        </div>
      )}

      <p className="text-white/70 text-sm mb-8 leading-relaxed min-h-[40px]">
        {currentDescription}
      </p>

      <Button
        onClick={() => onAddToCart(plan, plan.levels ? levelIndex : undefined)}
        variant={isSelected ? 'secondary' : 'pricing'}
        className="w-full mb-8"
      >
        {isSelected ? 'ADDED TO CART' : 'ADD TO CART'}
      </Button>

      <div className="space-y-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">What's Included:</p>
        {plan.features.map((feature, i) => (
          <div key={i} className="flex gap-3 items-start group/feature">
            <div className="mt-1 transition-transform duration-300 group-hover/feature:scale-110">
              <Plus className="w-3 h-3 text-white/40" />
            </div>
            <span className="text-white/60 text-xs leading-tight transition-colors duration-300 group-hover/feature:text-white/90">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
