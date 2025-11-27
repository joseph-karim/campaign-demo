"use client";

import { useState } from 'react';
import { usePersona } from '@/contexts/PersonaContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Download, ExternalLink } from 'lucide-react';
import type { PersonaId } from '@/types/report';

const colorMap: Record<PersonaId, { primary: string; light: string }> = {
  'primary-care': { primary: '#2563EB', light: 'bg-blue-50 dark:bg-blue-950/20' },
  'neurology': { primary: '#7C3AED', light: 'bg-violet-50 dark:bg-violet-950/20' },
  'mental-health': { primary: '#059669', light: 'bg-emerald-50 dark:bg-emerald-950/20' },
  'corporate-wellness': { primary: '#DC2626', light: 'bg-red-50 dark:bg-red-950/20' },
};

export function OutcomesSection() {
  const { currentPersona, content, filterTags } = usePersona();
  const { outcomes } = content;
  const [activeFilter, setActiveFilter] = useState('All');
  const colors = colorMap[currentPersona];

  const filteredMetrics = activeFilter === 'All' 
    ? outcomes.metrics 
    : outcomes.metrics.filter(m => m.tags.includes(activeFilter));

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {outcomes.headline}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {outcomes.subheadline}
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeFilter === tag
                  ? "text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              )}
              style={activeFilter === tag ? { backgroundColor: colors.primary } : {}}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMetrics.map((metric, index) => (
            <div
              key={metric.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div 
                className="text-4xl font-bold mb-2"
                style={{ color: colors.primary }}
              >
                {metric.stat}
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {metric.context}
              </div>
              <div 
                className={cn("text-sm p-3 rounded-lg", colors.light)}
                style={{ color: colors.primary }}
              >
                {metric.impact}
              </div>
              
              {metric.source && (
                <div className="mt-4 flex items-center gap-1 text-xs text-gray-400">
                  <ExternalLink className="w-3 h-3" />
                  {metric.source}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-4">
                {metric.tags.filter(t => t !== 'All').map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            size="lg"
            className="gap-2"
            style={{ backgroundColor: colors.primary }}
            asChild
          >
            <a href={outcomes.ctaAsset} download>
              <Download className="w-5 h-5" />
              {outcomes.ctaText}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
