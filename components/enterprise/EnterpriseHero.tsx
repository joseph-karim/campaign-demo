"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, Users, Activity, Server, Info } from 'lucide-react';
import { heroStats, stakeholderViews } from '@/config/enterpriseCognitiveReport';
import type { StakeholderId } from '@/types/enterprise';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const stakeholderIcons: Record<StakeholderId, React.ElementType> = {
  'clinical-quality': Activity,
  'population-health': Users,
  'service-line': TrendingUp,
  'cio': Server,
};

export function EnterpriseHero() {
  const [activeStakeholder, setActiveStakeholder] = useState<StakeholderId>('clinical-quality');
  const currentView = stakeholderViews.find(v => v.id === activeStakeholder);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, #3B82F6 0%, transparent 40%),
                           radial-gradient(circle at 80% 70%, #8B5CF6 0%, transparent 40%)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Copy */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your network is <span className="text-blue-400">flying blind</span> on cognitive risk.
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Global dementia burden is rising toward ~57 million people today and millions more each year. 
              Up to <span className="text-blue-400 font-semibold">75% of cases go undiagnosed</span>. 
              At enterprise scale, that's tens of thousands of patients in your system with unmanaged 
              cognitive impairment and downstream cost.
            </p>

            <p className="text-lg text-slate-400">
              The aging population, value-based care pressures, and quality metrics are converging. 
              Your network needs standardized, digital, repeatable cognitive assessment across sites – 
              not fragmented paper tests in isolated clinics.
            </p>

            {/* Stakeholder Toggle */}
            <div className="pt-4">
              <p className="text-sm text-slate-500 mb-3 uppercase tracking-wider">Your perspective:</p>
              <div className="flex flex-wrap gap-2">
                {stakeholderViews.map((view) => {
                  const Icon = stakeholderIcons[view.id];
                  return (
                    <button
                      key={view.id}
                      onClick={() => setActiveStakeholder(view.id)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                        activeStakeholder === view.id
                          ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                          : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {view.label}
                    </button>
                  );
                })}
              </div>

              {/* Stakeholder Message */}
              <div className="mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <p className="text-blue-300 font-medium">
                  {currentView?.message}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stats Tiles */}
          <div className="space-y-4">
            <TooltipProvider>
              {/* Stat 1: Dementia Prevalence */}
              <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {heroStats.dementiaPrevalence.value}M
                    </div>
                    <p className="text-slate-300">
                      {heroStats.dementiaPrevalence.label}
                    </p>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="p-2 rounded-lg bg-slate-700/50 text-slate-400 hover:text-white transition-colors">
                        <Info className="w-4 h-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="max-w-xs">
                      <p className="font-medium">{heroStats.dementiaPrevalence.sourceName} ({heroStats.dementiaPrevalence.year})</p>
                      <a href={heroStats.dementiaPrevalence.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xs hover:underline">
                        View source →
                      </a>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* Stat 2: Undiagnosed */}
              <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-6 border border-slate-700 hover:border-orange-500/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-4xl font-bold text-orange-400 mb-2">
                      {heroStats.undiagnosedPct.value}%
                    </div>
                    <p className="text-slate-300">
                      {heroStats.undiagnosedPct.label}
                    </p>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="p-2 rounded-lg bg-slate-700/50 text-slate-400 hover:text-white transition-colors">
                        <Info className="w-4 h-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="max-w-xs">
                      <p className="font-medium">{heroStats.undiagnosedPct.sourceName} ({heroStats.undiagnosedPct.year})</p>
                      <a href={heroStats.undiagnosedPct.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xs hover:underline">
                        View source →
                      </a>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* Stat 3: Market Size */}
              <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-slate-400">${heroStats.healthcareMarketSize.value2023}B</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-4xl font-bold text-emerald-400">${heroStats.healthcareMarketSize.value2030}B</span>
                    </div>
                    <p className="text-slate-300">
                      Cognitive assessment & training in healthcare: 2023 → 2030 ({heroStats.healthcareMarketSize.cagr} CAGR)
                    </p>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="p-2 rounded-lg bg-slate-700/50 text-slate-400 hover:text-white transition-colors">
                        <Info className="w-4 h-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="max-w-xs">
                      <p className="font-medium">{heroStats.healthcareMarketSize.sourceName}</p>
                      <a href={heroStats.healthcareMarketSize.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xs hover:underline">
                        View source →
                      </a>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
}

