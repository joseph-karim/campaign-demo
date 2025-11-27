"use client";

import { usePersona } from '@/contexts/PersonaContext';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PersonaId } from '@/types/report';

const colorMap: Record<PersonaId, { primary: string; secondary: string; bg: string }> = {
  'primary-care': { primary: '#2563EB', secondary: '#93C5FD', bg: 'from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-950/50' },
  'neurology': { primary: '#7C3AED', secondary: '#C4B5FD', bg: 'from-violet-50 to-purple-100 dark:from-violet-950/50 dark:to-purple-950/50' },
  'mental-health': { primary: '#059669', secondary: '#6EE7B7', bg: 'from-emerald-50 to-green-100 dark:from-emerald-950/50 dark:to-green-950/50' },
  'corporate-wellness': { primary: '#DC2626', secondary: '#FCA5A5', bg: 'from-red-50 to-orange-100 dark:from-red-950/50 dark:to-orange-950/50' },
};

export function HeroSection() {
  const { currentPersona, content } = usePersona();
  const { hero } = content;
  const colors = colorMap[currentPersona];

  return (
    <section className={cn(
      "relative min-h-[80vh] flex items-center py-20 px-4 bg-gradient-to-br",
      colors.bg
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${colors.primary}15 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, ${colors.secondary}20 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 
              key={currentPersona + '-headline'}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-fade-in"
            >
              {hero.headline}
            </h1>

            <p 
              key={currentPersona + '-subhead'}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-xl animate-fade-in animation-delay-100"
            >
              {hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-200">
              <Button 
                size="lg"
                className="gap-2 text-base px-8 shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: colors.primary }}
                asChild
              >
                <a href={hero.ctaAsset} download>
                  <Download className="w-5 h-5" />
                  {hero.ctaText}
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="gap-2 text-base"
                onClick={() => {
                  document.getElementById('detection-gap')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore the Data
                <ArrowDown className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Animated Stats Visualization */}
          <div 
            key={currentPersona + '-chart'}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-800 animate-fade-in animation-delay-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              {hero.stats.label}
            </h3>
            
            <div className="space-y-6">
              {/* Diagnosed Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Diagnosed</span>
                  <span className="font-semibold" style={{ color: colors.primary }}>
                    {hero.stats.diagnosed}{hero.stats.unit}
                  </span>
                </div>
                <div className="h-10 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out animate-grow-width"
                    style={{ 
                      backgroundColor: colors.primary,
                      '--target-width': `${hero.stats.diagnosed}%` 
                    } as React.CSSProperties}
                  />
                </div>
              </div>

              {/* Undiagnosed Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Undiagnosed / Missed</span>
                  <span className="font-semibold text-gray-500">
                    {hero.stats.undiagnosed}{hero.stats.unit}
                  </span>
                </div>
                <div className="h-10 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gray-300 dark:bg-gray-600 transition-all duration-1000 ease-out animate-grow-width animation-delay-200"
                    style={{ '--target-width': `${hero.stats.undiagnosed}%` } as React.CSSProperties}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold" style={{ color: colors.primary }}>
                  {hero.stats.undiagnosed}%
                </span>{" "}
                of cases go undetected with current methods. Digital cognitive assessment closes this gap.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}
