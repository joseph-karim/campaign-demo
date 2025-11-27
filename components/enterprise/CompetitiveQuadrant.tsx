"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { competitors, quadrantLabels, creyosHighlights } from '@/config/competitiveLandscape';
import type { QuadrantLens, Competitor } from '@/types/enterprise';
import { Check, Stethoscope, Server, BookOpen } from 'lucide-react';

const lensOptions: { id: QuadrantLens; label: string; icon: React.ElementType }[] = [
  { id: 'clinical', label: 'Clinical Coverage', icon: Stethoscope },
  { id: 'deployability', label: 'Enterprise Deployability', icon: Server },
  { id: 'evidence', label: 'Evidence Base', icon: BookOpen },
];

const typeColors: Record<string, string> = {
  'paper': '#94A3B8',
  'adhd': '#F59E0B',
  'dementia': '#8B5CF6',
  'research': '#6B7280',
  'broad': '#3B82F6',
};

export function CompetitiveQuadrant() {
  const [activeLens, setActiveLens] = useState<QuadrantLens>('clinical');
  const [hoveredCompetitor, setHoveredCompetitor] = useState<Competitor | null>(null);

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Market & Competitive Landscape
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            See how Creyos positions relative to the market: breadth of clinical coverage vs. enterprise deployability.
          </p>
        </div>

        {/* Lens Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-white dark:bg-slate-800 rounded-full p-1 shadow-sm border border-slate-200 dark:border-slate-700">
            {lensOptions.map((lens) => {
              const Icon = lens.icon;
              return (
                <button
                  key={lens.id}
                  onClick={() => setActiveLens(lens.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    activeLens === lens.id
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {lens.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quadrant Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
              <div className="absolute inset-0">
                {/* Axis Labels */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-slate-400">← {quadrantLabels.xAxis.low}</span>
                    <span className="mx-4 font-medium text-slate-600 dark:text-slate-300">Breadth of Clinical Coverage</span>
                    <span className="text-slate-400">{quadrantLabels.xAxis.high} →</span>
                  </p>
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 -rotate-90 text-center whitespace-nowrap">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-slate-400">← {quadrantLabels.yAxis.low}</span>
                    <span className="mx-4 font-medium text-slate-600 dark:text-slate-300">Deployability</span>
                    <span className="text-slate-400">{quadrantLabels.yAxis.high} →</span>
                  </p>
                </div>

                {/* Grid */}
                <div className="absolute inset-8 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                  {/* Crosshairs */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 dark:bg-slate-700" />

                  {/* Quadrant Labels */}
                  <div className="absolute top-2 left-2 text-[10px] text-slate-400 uppercase tracking-wider">
                    Limited Use Cases
                  </div>
                  <div className="absolute top-2 right-2 text-[10px] text-slate-400 uppercase tracking-wider text-right">
                    Enterprise-Ready
                  </div>
                  <div className="absolute bottom-2 left-2 text-[10px] text-slate-400 uppercase tracking-wider">
                    Niche / Legacy
                  </div>
                  <div className="absolute bottom-2 right-2 text-[10px] text-slate-400 uppercase tracking-wider text-right">
                    Emerging
                  </div>

                  {/* Competitor Points */}
                  {competitors.map((comp) => (
                    <button
                      key={comp.id}
                      className={cn(
                        "absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200",
                        comp.isCreyos 
                          ? "z-20" 
                          : "z-10 hover:z-30"
                      )}
                      style={{
                        left: `${comp.x}%`,
                        bottom: `${comp.y}%`,
                      }}
                      onMouseEnter={() => setHoveredCompetitor(comp)}
                      onMouseLeave={() => setHoveredCompetitor(null)}
                    >
                      <div
                        className={cn(
                          "rounded-full flex items-center justify-center text-white font-medium text-xs transition-transform",
                          comp.isCreyos 
                            ? "w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30 hover:scale-110" 
                            : "w-10 h-10 hover:scale-125"
                        )}
                        style={!comp.isCreyos ? { backgroundColor: typeColors[comp.type] } : {}}
                      >
                        {comp.isCreyos ? 'Creyos' : comp.name.slice(0, 2)}
                      </div>
                      
                      {/* Tooltip */}
                      {hoveredCompetitor?.id === comp.id && !comp.isCreyos && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 text-left z-50">
                          <p className="font-semibold text-slate-900 dark:text-white mb-2">{comp.name}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            {comp.tooltips[activeLens]}
                          </p>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 mt-12 pt-4 border-t border-slate-200 dark:border-slate-700">
              {Object.entries(typeColors).map(([type, color]) => (
                <div key={type} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Creyos Highlight Panel */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl font-bold">C</span>
            </div>

            <h3 className="text-2xl font-bold mb-2">Creyos</h3>
            <p className="text-blue-100 mb-6">
              The standardized cognitive assessment layer for enterprise health networks.
            </p>

            <div className="space-y-3">
              {creyosHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-sm text-blue-50">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-xl">
              <p className="text-xs text-blue-200 uppercase tracking-wider mb-1">Current Lens: {activeLens}</p>
              <p className="text-sm">
                {competitors.find(c => c.isCreyos)?.tooltips[activeLens]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

