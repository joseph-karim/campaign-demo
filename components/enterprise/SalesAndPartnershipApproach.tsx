"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { swimlaneStages } from '@/config/valueScenario';
import { ArrowRight, Building, Server, FileCheck, Info } from 'lucide-react';

const stageColors = ['bg-blue-500', 'bg-emerald-500', 'bg-violet-500'];

export function SalesAndPartnershipApproach() {
  const [activeStageId, setActiveStageId] = useState<string | null>(null);
  const activeStage = swimlaneStages.find(s => s.id === activeStageId);

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            How Creyos Works with Enterprise Networks
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Land-and-expand partnership model: co-design, long-term collaboration, not transactional SaaS.
          </p>
        </div>

        {/* Swimlane Diagram */}
        <div className="relative overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="col-span-1" /> {/* Empty cell for lane labels */}
              {swimlaneStages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(activeStageId === stage.id ? null : stage.id)}
                  className={cn(
                    "p-4 rounded-xl text-center transition-all",
                    activeStageId === stage.id
                      ? `${stageColors[idx]} text-white shadow-lg`
                      : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                  )}
                >
                  <h3 className={cn(
                    "font-semibold",
                    activeStageId === stage.id ? "text-white" : "text-slate-900 dark:text-white"
                  )}>
                    {stage.title}
                  </h3>
                  <p className={cn(
                    "text-sm mt-1",
                    activeStageId === stage.id ? "text-white/80" : "text-slate-500 dark:text-slate-400"
                  )}>
                    {stage.duration}
                  </p>
                </button>
              ))}
            </div>

            {/* Lane: Creyos */}
            <div className="grid grid-cols-4 gap-4 mb-2">
              <div className="flex items-center gap-2 p-4 bg-blue-500/10 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="font-medium text-slate-900 dark:text-white">Creyos</span>
              </div>
              {swimlaneStages.map((stage, idx) => (
                <div key={stage.id} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <ul className="space-y-2">
                    {stage.creyos.slice(0, 2).map((item, i) => (
                      <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1">
                        <span className="text-blue-500 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                    {stage.creyos.length > 2 && (
                      <li className="text-xs text-slate-400">+{stage.creyos.length - 2} more...</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            {/* Lane: Clinical Leadership */}
            <div className="grid grid-cols-4 gap-4 mb-2">
              <div className="flex items-center gap-2 p-4 bg-emerald-500/10 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                  <Building className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-slate-900 dark:text-white text-sm">Clinical Leadership</span>
              </div>
              {swimlaneStages.map((stage, idx) => (
                <div key={stage.id} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <ul className="space-y-2">
                    {stage.clinical.slice(0, 2).map((item, i) => (
                      <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1">
                        <span className="text-emerald-500 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                    {stage.clinical.length > 2 && (
                      <li className="text-xs text-slate-400">+{stage.clinical.length - 2} more...</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            {/* Lane: IT / Digital */}
            <div className="grid grid-cols-4 gap-4">
              <div className="flex items-center gap-2 p-4 bg-violet-500/10 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-violet-500 flex items-center justify-center">
                  <Server className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-slate-900 dark:text-white text-sm">IT / Digital</span>
              </div>
              {swimlaneStages.map((stage, idx) => (
                <div key={stage.id} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <ul className="space-y-2">
                    {stage.it.slice(0, 2).map((item, i) => (
                      <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1">
                        <span className="text-violet-500 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                    {stage.it.length > 2 && (
                      <li className="text-xs text-slate-400">+{stage.it.length - 2} more...</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stage Detail Panel */}
        {activeStage && (
          <div className="mt-8 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Full Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    Creyos Activities
                  </h4>
                  <ul className="space-y-2">
                    {activeStage.creyos.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center">
                      <Building className="w-3 h-3 text-white" />
                    </div>
                    Clinical Leadership
                  </h4>
                  <ul className="space-y-2">
                    {activeStage.clinical.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-violet-500 flex items-center justify-center">
                      <Server className="w-3 h-3 text-white" />
                    </div>
                    IT / Digital
                  </h4>
                  <ul className="space-y-2">
                    {activeStage.it.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Deal Shape & Proof Points */}
              <div className="space-y-6">
                {activeStage.dealShape && (
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-blue-500" />
                      Typical Deal Shape
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">{activeStage.dealShape}</p>
                  </div>
                )}

                {activeStage.proofPoints && (
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Info className="w-4 h-4 text-emerald-500" />
                      Proof Points Used
                    </h4>
                    <ul className="space-y-2">
                      {activeStage.proofPoints.map((item, idx) => (
                        <li key={idx} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

