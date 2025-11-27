'use client';

import { useState } from 'react';
import { reportRegions } from '@/config/vitalSignContent';
import { FileText, Info } from 'lucide-react';

export function ReportWalkthrough() {
  const [activeRegion, setActiveRegion] = useState<string | null>('risk-band');

  const currentRegion = reportRegions.find(r => r.id === activeRegion);

  return (
    <section className="bg-slate-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Reading the Report is Simple
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Click on any region to learn what it means and how to use it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Mock Report */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sticky top-24">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
              <FileText className="w-5 h-5 text-indigo-400" />
              <span className="font-semibold text-white">Cognitive Assessment Summary</span>
            </div>

            {/* Mock Report Layout */}
            <div className="space-y-4">
              {/* Region 1: Risk Band */}
              <button
                onClick={() => setActiveRegion('risk-band')}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  activeRegion === 'risk-band'
                    ? 'border-indigo-500 bg-indigo-500/10'
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-400">Overall Risk</span>
                  <span className="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded">Region 1</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg" title="Low" />
                    <div className="w-8 h-8 bg-amber-500 rounded-lg ring-2 ring-white" title="Moderate" />
                    <div className="w-8 h-8 bg-red-500 rounded-lg" title="High" />
                  </div>
                  <span className="text-sm text-amber-400 font-medium">Moderate Risk</span>
                </div>
              </button>

              {/* Region 2: Domain Scores */}
              <button
                onClick={() => setActiveRegion('domain-scores')}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  activeRegion === 'domain-scores'
                    ? 'border-indigo-500 bg-indigo-500/10'
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-slate-400">Domain Scores</span>
                  <span className="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded">Region 2</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-16">Memory</span>
                    <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-[35%] h-full bg-red-500 rounded-full" />
                    </div>
                    <span className="text-xs text-red-400">Below</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-16">Attention</span>
                    <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-[45%] h-full bg-amber-500 rounded-full" />
                    </div>
                    <span className="text-xs text-amber-400">Low-Avg</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-16">Executive</span>
                    <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-[65%] h-full bg-emerald-500 rounded-full" />
                    </div>
                    <span className="text-xs text-emerald-400">Average</span>
                  </div>
                </div>
              </button>

              {/* Region 3: Trend Line */}
              <button
                onClick={() => setActiveRegion('trend-line')}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  activeRegion === 'trend-line'
                    ? 'border-indigo-500 bg-indigo-500/10'
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-slate-400">Trend (Last 3 Visits)</span>
                  <span className="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded">Region 3</span>
                </div>
                <div className="h-12 flex items-end justify-between gap-2">
                  <div className="flex-1 flex items-end gap-1">
                    <div className="w-full h-10 bg-slate-600 rounded" />
                    <div className="w-full h-8 bg-slate-600 rounded" />
                    <div className="w-full h-6 bg-amber-500 rounded" />
                  </div>
                  <span className="text-xs text-amber-400">↓ Declining</span>
                </div>
              </button>

              {/* Region 4: Suggestions */}
              <button
                onClick={() => setActiveRegion('suggestions')}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  activeRegion === 'suggestions'
                    ? 'border-indigo-500 bg-indigo-500/10'
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-400">Suggestions</span>
                  <span className="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded">Region 4</span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-300">• Consider investigating reversible causes</p>
                  <p className="text-xs text-slate-300">• Repeat assessment in 3–6 months</p>
                  <p className="text-xs text-slate-300">• Discuss findings with family if appropriate</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right: Explanation */}
          <div>
            {currentRegion ? (
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <Info className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{currentRegion.name}</h3>
                </div>

                <div className="space-y-6">
                  {/* What it is */}
                  <div>
                    <h4 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                      What this is
                    </h4>
                    <p className="text-slate-300">{currentRegion.whatItIs}</p>
                  </div>

                  {/* What to look for */}
                  <div>
                    <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-2">
                      What to look for
                    </h4>
                    <p className="text-slate-300">{currentRegion.whatToLookFor}</p>
                  </div>

                  {/* Typical thinking */}
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                      Typical next-thinking
                    </h4>
                    <ul className="space-y-2">
                      {currentRegion.typicalThinking.map((thought, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <span className="text-emerald-400 mt-1">•</span>
                          {thought}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-12 text-center">
                <Info className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-500">Click a region on the report to learn more</p>
              </div>
            )}

            {/* Quick reference */}
            <div className="mt-6 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <p className="text-sm text-slate-400 text-center">
                <span className="text-indigo-400 font-medium">Pro tip:</span> You don't need to interpret raw scores.
                The report translates everything into risk levels and actionable suggestions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReportWalkthrough;

