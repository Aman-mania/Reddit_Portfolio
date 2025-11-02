import React from 'react';
import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  className?: string;
}

export default function PageHero({ title, subtitle, className = '' }: PageHeroProps) {
  return (
    <div className="max-w-4xl mx-auto">
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      <div
        className="h-44 md:h-56 lg:h-64 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/cover 1.png')" }}
      >
        <div className="absolute inset-0 bg-black/45" />

        {/* Text container positioned bottom-left */}
        <div className="absolute left-0 bottom-0 z-10 w-full">
          <div className="px-6 pb-6 md:px-8 md:pb-8">
            <div className="text-white text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{title}</h1>
              {subtitle && <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90">{subtitle}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
