"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { execPillars } from '@/config/enterpriseCognitiveReport';
import { Target, Settings, TrendingUp, ChevronDown, Brain } from 'lucide-react';

const pillarIcons: Record<string, React.ElementType> = {
  'strategic-fit': Target,
  'operational-reality': Settings,
  'enterprise-upside': TrendingUp,
};

const pillarColors: Record<string, { bg: string; border: string; icon: string }> = {
  'strategic-fit': { bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: 'bg-blue-500' },
  'operational-reality': { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', icon: 'bg-emerald-500' },
  'enterprise-upside': { bg: 'bg-violet-500/10', border: 'border-violet-500/30', icon: 'bg-violet-500' },
};

export function SummaryForExecs() {
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            So What?
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Three pillars for enterprise decision-makers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {execPillars.map((pillar) => {
            const Icon = pillarIcons[pillar.id] || Target;
            const colors = pillarColors[pillar.id];
            const isExpanded = expandedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                className={cn(
                  "rounded-2xl p-6 border transition-all duration-300 cursor-pointer",
                  isExpanded
                    ? "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                    : "bg-slate-800/50 border-slate-700 hover:border-slate-600"
                )}
                onClick={() => setExpandedPillar(isExpanded ? null : pillar.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", colors.icon)}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 transition-transform",
                      isExpanded ? "text-slate-600 rotate-180" : "text-slate-500"
                    )}
                  />
                </div>

                {/* Title */}
                <h3 className={cn(
                  "text-xl font-semibold mb-4",
                  isExpanded ? "text-slate-900 dark:text-white" : "text-white"
                )}>
                  {pillar.title}
                </h3>

                {/* Summary Bullets */}
                <ul className="space-y-3 mb-4">
                  {pillar.bullets.map((bullet, idx) => (
                    <li 
                      key={idx} 
                      className={cn(
                        "text-sm flex items-start gap-2",
                        isExpanded ? "text-slate-600 dark:text-slate-300" : "text-slate-300"
                      )}
                    >
                      <span className={cn("w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0", colors.icon)} />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className={cn("mt-6 pt-6 border-t animate-fade-in", colors.border)}>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                      Key Details
                    </h4>
                    <ul className="space-y-2">
                      {pillar.details.map((detail, idx) => (
                        <li 
                          key={idx} 
                          className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                        >
                          <span className={cn("w-1 h-1 rounded-full mt-2 flex-shrink-0", colors.icon)} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-slate-800/50 rounded-full px-6 py-3 border border-slate-700">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Creyos</p>
              <p className="text-xs text-slate-400">The Cognitive Assessment Layer for Enterprise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

