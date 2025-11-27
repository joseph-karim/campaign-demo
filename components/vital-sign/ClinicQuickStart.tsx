'use client';

import { useState } from 'react';
import { workflowLanes } from '@/config/vitalSignContent';
import { UserCog, Stethoscope, Cpu, Info } from 'lucide-react';

const laneIcons: Record<string, React.ReactNode> = {
  staff: <UserCog className="w-5 h-5" />,
  clinician: <Stethoscope className="w-5 h-5" />,
  system: <Cpu className="w-5 h-5" />
};

const laneColors: Record<string, { bg: string; border: string; text: string; stepBg: string }> = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    stepBg: 'bg-emerald-500/5'
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    stepBg: 'bg-blue-500/5'
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    stepBg: 'bg-purple-500/5'
  }
};

export function ClinicQuickStart() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <section className="bg-slate-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            How This Runs in a Day
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A typical AWV morning: who does what, in what order. Hover for tips.
          </p>
        </div>

        {/* Swimlane Diagram */}
        <div className="space-y-6">
          {workflowLanes.map(lane => {
            const colors = laneColors[lane.color];
            
            return (
              <div key={lane.id} className={`rounded-2xl border ${colors.border} ${colors.bg} overflow-hidden`}>
                {/* Lane Header */}
                <div className={`flex items-center gap-3 p-4 border-b ${colors.border}`}>
                  <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center ${colors.text}`}>
                    {laneIcons[lane.id]}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{lane.name}</h3>
                </div>

                {/* Steps */}
                <div className="p-4">
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    {lane.steps.map((step, index) => (
                      <div
                        key={step.id}
                        className="relative flex-shrink-0"
                        onMouseEnter={() => setHoveredStep(step.id)}
                        onMouseLeave={() => setHoveredStep(null)}
                      >
                        {/* Step Card */}
                        <div className={`w-64 p-4 rounded-xl border ${colors.border} ${colors.stepBg} transition-all ${
                          hoveredStep === step.id ? 'ring-2 ring-indigo-500' : ''
                        }`}>
                          {/* Step Number */}
                          <div className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${colors.bg} ${colors.text} text-xs font-bold mb-3`}>
                            {index + 1}
                          </div>

                          <p className="text-sm text-slate-300">{step.text}</p>

                          {/* Tip indicator */}
                          {step.tip && (
                            <div className="mt-3 flex items-center gap-1 text-xs text-indigo-400">
                              <Info className="w-3 h-3" />
                              Hover for tip
                            </div>
                          )}
                        </div>

                        {/* Tooltip */}
                        {step.tip && hoveredStep === step.id && (
                          <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-10">
                            <p className="text-xs text-slate-300">{step.tip}</p>
                          </div>
                        )}

                        {/* Connector Arrow */}
                        {index < lane.steps.length - 1 && (
                          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
                            <div className={`w-4 h-0.5 ${colors.bg.replace('/10', '')}`} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {workflowLanes.map(lane => {
            const colors = laneColors[lane.color];
            return (
              <div key={lane.id} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded ${colors.bg} border ${colors.border}`} />
                <span className="text-sm text-slate-400">{lane.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ClinicQuickStart;

