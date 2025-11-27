"use client";

import { usePersona } from '@/contexts/PersonaContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Download, ExternalLink, Stethoscope, Brain, HeartPulse, Building2 } from 'lucide-react';
import type { PersonaId } from '@/types/report';

const iconMap = {
  'primary-care': Stethoscope,
  'neurology': Brain,
  'mental-health': HeartPulse,
  'corporate-wellness': Building2,
};

const colorMap: Record<PersonaId, { primary: string; gradient: string; light: string }> = {
  'primary-care': { 
    primary: '#2563EB', 
    gradient: 'from-blue-500 to-blue-600',
    light: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800'
  },
  'neurology': { 
    primary: '#7C3AED', 
    gradient: 'from-violet-500 to-violet-600',
    light: 'bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800'
  },
  'mental-health': { 
    primary: '#059669', 
    gradient: 'from-emerald-500 to-emerald-600',
    light: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800'
  },
  'corporate-wellness': { 
    primary: '#DC2626', 
    gradient: 'from-red-500 to-red-600',
    light: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800'
  },
};

export function FinalCTASection() {
  const { currentPersona, finalCTA } = usePersona();

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {finalCTA.headline}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose your path to better cognitive assessment
          </p>
        </div>

        {/* CTA Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {finalCTA.cards.map((card, index) => {
            const Icon = iconMap[card.personaId];
            const colors = colorMap[card.personaId];
            const isCurrentPersona = currentPersona === card.personaId;

            return (
              <div
                key={card.personaId}
                className={cn(
                  "relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 animate-fade-in",
                  isCurrentPersona
                    ? `${colors.light} ring-2`
                    : "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                )}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  ...(isCurrentPersona ? { '--tw-ring-color': colors.primary } as React.CSSProperties : {})
                }}
              >
                {/* Current Persona Badge */}
                {isCurrentPersona && (
                  <div 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: colors.primary }}
                  >
                    Your Selection
                  </div>
                )}

                {/* Icon */}
                <div 
                  className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br",
                    colors.gradient
                  )}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {card.headline}
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  {card.description}
                </p>

                {/* CTAs */}
                <div className="space-y-3">
                  <Button 
                    className="w-full gap-2"
                    style={{ backgroundColor: colors.primary }}
                    asChild
                  >
                    <a href={card.primaryCta.asset} download>
                      <Download className="w-4 h-4" />
                      {card.primaryCta.text}
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full gap-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                    asChild
                  >
                    <a href={card.secondaryCta.link} target="_blank" rel="noopener noreferrer">
                      {card.secondaryCta.text}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-white">Creyos</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Creyos Health. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Closing the Cognitive Assessment Gap • 2025 State of the Union Report
          </p>
        </div>
      </div>
    </section>
  );
}
