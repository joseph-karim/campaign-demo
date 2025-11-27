'use client';

import { useState } from 'react';
import { execDecisions } from '@/config/gtmBlueprint';
import { Target, Users, Scale, ChevronDown } from 'lucide-react';

const categoryConfig: Record<string, { icon: React.ReactNode; color: string; bg: string }> = {
  'Targets & Focus': {
    icon: <Target className="w-6 h-6" />,
    color: 'text-emerald-400',
    bg: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30'
  },
  'Resourcing': {
    icon: <Users className="w-6 h-6" />,
    color: 'text-blue-400',
    bg: 'from-blue-500/20 to-blue-600/10 border-blue-500/30'
  },
  'Risk & ROI Appetite': {
    icon: <Scale className="w-6 h-6" />,
    color: 'text-amber-400',
    bg: 'from-amber-500/20 to-amber-600/10 border-amber-500/30'
  }
};

export function SummaryForExecs() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="bg-slate-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            Action Required
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Summary for Execs
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            What decisions you need from leadership. Not just a pretty blueprint – these are the asks.
          </p>
        </div>

        {/* Decision Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {execDecisions.map(decision => {
            const config = categoryConfig[decision.category] || categoryConfig['Targets & Focus'];
            const isExpanded = expandedId === decision.id;

            return (
              <div
                key={decision.id}
                className={`bg-gradient-to-b ${config.bg} border rounded-xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'md:col-span-3' : ''
                }`}
              >
                {/* Card Header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : decision.id)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 ${config.color}`}>
                        {config.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {decision.category}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {decision.title}
                        </p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                        isExpanded ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <ul className="space-y-3">
                        {decision.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${config.color} bg-slate-800`}>
                              {i + 1}
                            </div>
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Collapsed Preview */}
                {!isExpanded && (
                  <div className="px-6 pb-6">
                    <div className="text-sm text-slate-500">
                      {decision.items.length} decision points
                      <span className="mx-2">•</span>
                      <span className={config.color}>Click to expand</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-slate-800/50 border border-slate-700 rounded-xl text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            Ready to Align?
          </h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            This blueprint is for internal alignment. Schedule a leadership sync to review these decisions
            and commit to the enterprise GTM plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-amber-500 text-slate-900 rounded-xl font-semibold hover:bg-amber-400 transition-colors">
              Schedule GTM Review
            </button>
            <button className="px-6 py-3 bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-600 transition-colors border border-slate-600">
              Export Blueprint
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummaryForExecs;

