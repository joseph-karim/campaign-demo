"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { rolloutPhases } from '@/config/valueScenario';
import { ChevronRight, Check, Building, Users, AlertTriangle, Stethoscope } from 'lucide-react';

const phaseColors = ['bg-blue-500', 'bg-emerald-500', 'bg-violet-500', 'bg-orange-500'];

export function EnterpriseRolloutTimeline() {
  const [activePhaseId, setActivePhaseId] = useState<string | null>(null);
  const activePhase = rolloutPhases.find(p => p.id === activePhaseId);

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            How a Health System Actually Implements This
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A realistic multi-phase rollout designed for enterprise scale and complexity.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-12">
          {/* Connector Line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-4">
            {rolloutPhases.map((phase, idx) => (
              <button
                key={phase.id}
                onClick={() => setActivePhaseId(activePhaseId === phase.id ? null : phase.id)}
                className={cn(
                  "relative bg-white dark:bg-slate-800 rounded-2xl p-6 border transition-all duration-300 text-left",
                  activePhaseId === phase.id
                    ? "border-blue-500 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/20"
                    : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                )}
              >
                {/* Phase Number */}
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4",
                  phaseColors[idx]
                )}>
                  {phase.phase}
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                  {phase.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                  {phase.duration}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {phase.focus}
                </p>

                {/* Expand Indicator */}
                <div className={cn(
                  "absolute bottom-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-transform",
                  phaseColors[idx],
                  "text-white",
                  activePhaseId === phase.id && "rotate-90"
                )}>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Expanded Phase Details */}
        {activePhase && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 animate-fade-in">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* What Creyos Delivers */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">What Creyos Delivers</h4>
                </div>
                <ul className="space-y-3">
                  {activePhase.creyosDelivers.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What Health System Does */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">What the Health System Does</h4>
                </div>
                <ul className="space-y-3">
                  {activePhase.healthSystemDoes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risks & De-risking */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Typical Risks</h4>
                </div>
                <ul className="space-y-3">
                  {activePhase.risks.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Clinic Types or Roles */}
            {(activePhase.clinicTypes || activePhase.rolesInvolved) && (
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-violet-500 flex items-center justify-center">
                    {activePhase.clinicTypes ? <Stethoscope className="w-4 h-4 text-white" /> : <Users className="w-4 h-4 text-white" />}
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {activePhase.clinicTypes ? 'Recommended Clinic Types for Pilot' : 'Key Roles Involved'}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(activePhase.clinicTypes || activePhase.rolesInvolved || []).map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

