'use client';

import { useState } from 'react';
import { visitFlows, comparisonSectionContent } from '@/config/vitalSignContent';
import type { VisitType, VisitStep } from '@/types/vitalSign';
import { ArrowRight, Stethoscope, Zap } from 'lucide-react';
import { MocaRealityCheck } from './MocaRealityCheck';

export function VisitFlowComparator() {
  const [selectedVisit, setSelectedVisit] = useState<VisitType>('awv');
  const [hoveredStepId, setHoveredStepId] = useState<string | null>(null);

  const currentFlow = visitFlows.find(f => f.id === selectedVisit) || visitFlows[0];

  const isMatchingStep = (step: VisitStep, hoveredId: string | null): boolean => {
    if (!hoveredId) return false;
    const hoveredStep = currentFlow.statusQuo.find(s => s.id === hoveredId) || 
                        currentFlow.withVitalSign.find(s => s.id === hoveredId);
    if (!hoveredStep) return false;
    
    // Check if this step matches the hovered step
    if (hoveredStep.matchingStepId === step.id) return true;
    if (step.matchingStepId === hoveredId) return true;
    return false;
  };

  return (
    <section className="bg-slate-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header - Updated with honest framing */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {comparisonSectionContent.headline}
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            {comparisonSectionContent.subhead}
          </p>
        </div>

        {/* Visit Type Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {visitFlows.map(flow => (
            <button
              key={flow.id}
              onClick={() => setSelectedVisit(flow.id)}
              className={`px-5 py-3 rounded-xl font-medium transition-all ${
                selectedVisit === flow.id
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              {flow.name}
            </button>
          ))}
        </div>

        {/* Comparison Columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Standard Practice */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {comparisonSectionContent.columnLabels.statusQuo}
                </h3>
                <p className="text-sm text-slate-500">Validated but constrained by time</p>
              </div>
            </div>

            <div className="space-y-4">
              {currentFlow.statusQuo.map((step, index) => (
                <div
                  key={step.id}
                  onMouseEnter={() => setHoveredStepId(step.id)}
                  onMouseLeave={() => setHoveredStepId(null)}
                  className={`relative p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    hoveredStepId === step.id
                      ? 'bg-slate-700/50 border-slate-500 shadow-lg'
                      : isMatchingStep(step, hoveredStepId)
                      ? 'bg-slate-800/50 border-slate-600 ring-2 ring-indigo-500/50'
                      : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600'
                  }`}
                >
                  {/* Step Number */}
                  <div className="absolute -left-3 top-4 w-6 h-6 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-slate-400">
                    {index + 1}
                  </div>

                  <h4 className="font-semibold text-white mb-2 pl-4 text-sm">{step.title}</h4>
                  <p className="text-sm text-slate-400 pl-4 leading-relaxed">
                    {typeof step.text === 'string' ? step.text : step.text.clinician}
                  </p>

                  {/* Connector Line */}
                  {index < currentFlow.statusQuo.length - 1 && (
                    <div className="absolute left-0 top-full h-4 w-px bg-slate-700 ml-[9px]" />
                  )}
                </div>
              ))}
            </div>

            {/* Note about standard practice */}
            <div className="mt-6 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <p className="text-xs text-slate-500 italic">
                This is not &quot;gut feel only.&quot; It&apos;s a mix of structured tools and clinical judgment, 
                constrained by time, training, and documentation limits.
              </p>
            </div>
          </div>

          {/* With Digital Workflow */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {comparisonSectionContent.columnLabels.digital}
                </h3>
                <p className="text-sm text-slate-500">Additive, not replacement</p>
              </div>
            </div>

            <div className="space-y-4">
              {currentFlow.withVitalSign.map((step, index) => {
                const matchingStatusQuoStep = currentFlow.statusQuo.find(s => s.matchingStepId === step.id);
                const isHighlighted = matchingStatusQuoStep && hoveredStepId === matchingStatusQuoStep.id;

                return (
                  <div
                    key={step.id}
                    onMouseEnter={() => setHoveredStepId(step.id)}
                    onMouseLeave={() => setHoveredStepId(null)}
                    className={`relative p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      hoveredStepId === step.id
                        ? 'bg-indigo-500/10 border-indigo-500/40 shadow-lg shadow-indigo-500/10'
                        : isHighlighted
                        ? 'bg-slate-800/50 border-slate-600 ring-2 ring-indigo-500/50'
                        : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600'
                    }`}
                  >
                    {/* Step Number */}
                    <div className="absolute -left-3 top-4 w-6 h-6 bg-indigo-500/20 border border-indigo-500/30 rounded-full flex items-center justify-center text-xs font-bold text-indigo-400">
                      {index + 1}
                    </div>

                    <h4 className="font-semibold text-white mb-2 pl-4 text-sm">{step.title}</h4>
                    <p className="text-sm text-slate-400 pl-4 leading-relaxed">
                      {typeof step.text === 'string' ? step.text : step.text.clinician}
                    </p>

                    {/* Connector Line */}
                    {index < currentFlow.withVitalSign.length - 1 && (
                      <div className="absolute left-0 top-full h-4 w-px bg-indigo-500/30 ml-[9px]" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Note about digital workflow */}
            <div className="mt-6 p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/20">
              <p className="text-xs text-indigo-300/70 italic">
                Digital workflows focus on coverage, efficiency, and making results easier to reuse and trend—
                building on, not replacing, clinical judgment.
              </p>
            </div>
          </div>
        </div>

        {/* Arrow indicator between columns (desktop) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <ArrowRight className="w-8 h-8 text-indigo-400" />
        </div>

        {/* MoCA Reality Check Panel */}
        <MocaRealityCheck />
      </div>
    </section>
  );
}

export default VisitFlowComparator;
