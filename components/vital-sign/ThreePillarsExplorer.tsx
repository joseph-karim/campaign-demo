'use client';

import { useState } from 'react';
import { useVitalSignPersona } from '@/contexts/VitalSignPersonaContext';
import { pillars } from '@/config/vitalSignContent';
import { Eye, Clock, Building2, ChevronDown, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  eye: <Eye className="w-6 h-6" />,
  clock: <Clock className="w-6 h-6" />,
  building: <Building2 className="w-6 h-6" />
};

const colorMap: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
  clarity: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    text: 'text-cyan-400',
    gradient: 'from-cyan-500/20 to-cyan-600/5'
  },
  workload: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    gradient: 'from-amber-500/20 to-amber-600/5'
  },
  system: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    gradient: 'from-purple-500/20 to-purple-600/5'
  }
};

export function ThreePillarsExplorer() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { getContent } = useVitalSignPersona();

  return (
    <section className="bg-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Three Reasons It Works
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Clarity for decisions, time that fits your day, and visibility that transforms the system.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(pillar => {
            const isExpanded = expandedId === pillar.id;
            const colors = colorMap[pillar.id];

            return (
              <div
                key={pillar.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? `${colors.border} bg-gradient-to-b ${colors.gradient}` 
                    : 'border-slate-700 bg-slate-800/30 hover:border-slate-600'
                } ${isExpanded ? 'md:col-span-3' : ''}`}
              >
                {/* Card Header (always visible) */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : pillar.id)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text}`}>
                        {iconMap[pillar.icon]}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {pillar.tagline}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {getContent(pillar.preview)}
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
                  className={`transition-all duration-300 ${
                    isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                      {/* Bullets */}
                      {pillar.expanded.bullets.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                            Key Questions Answered
                          </h4>
                          <ul className="space-y-2">
                            {pillar.expanded.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${colors.bg} ${colors.text}`} />
                                <span className="text-slate-300">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Before/After */}
                      {pillar.expanded.beforeAfter && (
                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                            Time Comparison
                          </h4>
                          {pillar.expanded.beforeAfter.map((item, i) => (
                            <div key={i} className="grid grid-cols-3 gap-4 items-start">
                              <div className="text-sm font-medium text-slate-300">{item.role}</div>
                              <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                                <div className="text-xs text-red-400 font-medium mb-1">Before</div>
                                <p className="text-sm text-slate-300">{item.before}</p>
                              </div>
                              <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                                <div className="text-xs text-emerald-400 font-medium mb-1">After</div>
                                <p className="text-sm text-slate-300">{item.after}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Example */}
                      {pillar.expanded.example && (
                        <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                          <h4 className="text-sm font-semibold text-slate-400 mb-2 flex items-center gap-2">
                            <ArrowRight className={`w-4 h-4 ${colors.text}`} />
                            Example
                          </h4>
                          <p className="text-slate-300 text-sm whitespace-pre-line">
                            {getContent(pillar.expanded.example)}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ThreePillarsExplorer;

