"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Users, ShieldCheck, UserX, Cpu, ChevronDown, AlertTriangle } from 'lucide-react';
import { macroForces } from '@/config/enterpriseCognitiveReport';

const iconMap: Record<string, React.ElementType> = {
  'users': Users,
  'shield-check': ShieldCheck,
  'user-x': UserX,
  'cpu': Cpu,
};

const colorMap: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  'demographics': { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', icon: 'bg-blue-500' },
  'regulation': { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', icon: 'bg-emerald-500' },
  'workforce': { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', icon: 'bg-orange-500' },
  'technology': { bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-400', icon: 'bg-violet-500' },
};

export function MacroForcesPanel() {
  const [activeForceId, setActiveForceId] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Enterprise Networks Are Being Forced to Act
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Four macro forces are converging to make cognitive assessment a strategic imperative for health systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {macroForces.map((force) => {
            const Icon = iconMap[force.icon] || Users;
            const colors = colorMap[force.id] || colorMap['demographics'];
            const isActive = activeForceId === force.id;

            return (
              <div
                key={force.id}
                className={cn(
                  "rounded-2xl border transition-all duration-300 cursor-pointer",
                  isActive 
                    ? `${colors.bg} ${colors.border} shadow-lg` 
                    : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                )}
                onClick={() => setActiveForceId(isActive ? null : force.id)}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", colors.icon)}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <ChevronDown 
                      className={cn(
                        "w-5 h-5 text-slate-400 transition-transform duration-300",
                        isActive && "rotate-180"
                      )}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {force.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {force.shortDescription}
                  </p>

                  {/* Expanded Content */}
                  {isActive && (
                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 animate-fade-in">
                      <ul className="space-y-3 mb-4">
                        {force.expandedContent.map((content, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0", colors.icon)} />
                            {content}
                          </li>
                        ))}
                      </ul>

                      {/* Enterprise Implication */}
                      <div className={cn("p-4 rounded-xl", colors.bg)}>
                        <div className="flex items-start gap-2">
                          <AlertTriangle className={cn("w-4 h-4 mt-0.5 flex-shrink-0", colors.text)} />
                          <div>
                            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                              Enterprise Implication
                            </p>
                            <p className={cn("text-sm font-medium", colors.text)}>
                              {force.enterpriseImplication}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

