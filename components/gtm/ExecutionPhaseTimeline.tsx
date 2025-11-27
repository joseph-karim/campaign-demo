'use client';

import { useState } from 'react';
import { timelineTasks, phases } from '@/config/gtmBlueprint';
import type { PhaseId, OwnerType, TimelineTask } from '@/types/gtm';
import { Users, Megaphone, DollarSign, Stethoscope, Code, ChevronRight, X, Clock, GitBranch } from 'lucide-react';

const ownerConfig: Record<OwnerType, { label: string; icon: React.ReactNode; color: string }> = {
  exec: { label: 'Exec / Founders', icon: <Users className="w-4 h-4" />, color: 'rose' },
  pmm: { label: 'PMM / Marketing', icon: <Megaphone className="w-4 h-4" />, color: 'purple' },
  sales: { label: 'Sales / BD', icon: <DollarSign className="w-4 h-4" />, color: 'emerald' },
  clinical: { label: 'Clinical', icon: <Stethoscope className="w-4 h-4" />, color: 'blue' },
  product: { label: 'Product / SE', icon: <Code className="w-4 h-4" />, color: 'amber' }
};

const phaseColors: Record<PhaseId, string> = {
  phase_0_3: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30',
  phase_3_9: 'from-amber-500/20 to-amber-600/10 border-amber-500/30',
  phase_9_18: 'from-rose-500/20 to-rose-600/10 border-rose-500/30'
};

const phaseAccentColors: Record<PhaseId, string> = {
  phase_0_3: 'text-emerald-400',
  phase_3_9: 'text-amber-400',
  phase_9_18: 'text-rose-400'
};

export function ExecutionPhaseTimeline() {
  const [selectedTask, setSelectedTask] = useState<TimelineTask | null>(null);

  const getTasksByPhaseAndOwner = (phaseId: PhaseId, owner: OwnerType) => {
    return timelineTasks.filter(t => t.phaseId === phaseId && t.owner === owner);
  };

  const owners: OwnerType[] = ['exec', 'pmm', 'sales', 'clinical', 'product'];

  return (
    <section className="bg-slate-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Execution Phase Timeline
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Who does what, when. Click tasks for details.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[1000px]">
            {/* Phase Headers */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="p-4">
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Owner</span>
              </div>
              {phases.map(phase => (
                <div 
                  key={phase.id}
                  className={`bg-gradient-to-r ${phaseColors[phase.id]} border rounded-xl p-4 text-center`}
                >
                  <h3 className={`font-bold ${phaseAccentColors[phase.id]}`}>{phase.name}</h3>
                  <p className="text-sm text-slate-400">{phase.duration}</p>
                  <p className="text-xs text-slate-500 mt-1">{phase.description}</p>
                </div>
              ))}
            </div>

            {/* Owner Rows */}
            {owners.map(owner => {
              const config = ownerConfig[owner];
              return (
                <div key={owner} className="grid grid-cols-4 gap-4 mb-4">
                  {/* Owner Label */}
                  <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                    <div className={`w-8 h-8 rounded-lg bg-${config.color}-500/20 flex items-center justify-center text-${config.color}-400`}>
                      {config.icon}
                    </div>
                    <span className="text-sm font-medium text-white">{config.label}</span>
                  </div>

                  {/* Phase Cells */}
                  {phases.map(phase => {
                    const tasks = getTasksByPhaseAndOwner(phase.id, owner);
                    return (
                      <div key={phase.id} className="p-3 bg-slate-800/20 rounded-xl border border-slate-700/30 min-h-[100px]">
                        <div className="space-y-2">
                          {tasks.map(task => (
                            <button
                              key={task.id}
                              onClick={() => setSelectedTask(task)}
                              className="w-full text-left p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-all group"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <span className="text-sm text-slate-300 group-hover:text-white">
                                  {task.title}
                                </span>
                                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 flex-shrink-0 mt-0.5" />
                              </div>
                            </button>
                          ))}
                          {tasks.length === 0 && (
                            <div className="text-center py-4 text-slate-600 text-sm">
                              —
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* Task Detail Modal */}
        {selectedTask && (
          <TaskDetailModal 
            task={selectedTask} 
            onClose={() => setSelectedTask(null)} 
          />
        )}
      </div>
    </section>
  );
}

function TaskDetailModal({ task, onClose }: { task: TimelineTask; onClose: () => void }) {
  const phase = phases.find(p => p.id === task.phaseId);
  const owner = ownerConfig[task.owner];
  const dependencies = task.dependencies.map(depId => 
    timelineTasks.find(t => t.id === depId)
  ).filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div 
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-6 border-b border-slate-700 bg-gradient-to-r ${phaseColors[task.phaseId]} rounded-t-2xl`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${phaseAccentColors[task.phaseId]} bg-slate-800`}>
                  {phase?.name}
                </span>
                <span>•</span>
                <span>{owner.label}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{task.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Description */}
          <div>
            <h4 className="text-sm font-medium text-slate-400 mb-2">Description</h4>
            <p className="text-slate-300">{task.description}</p>
          </div>

          {/* Estimated Time */}
          <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <Clock className="w-5 h-5 text-amber-400" />
            <div>
              <span className="text-sm text-slate-400">Estimated Time:</span>
              <span className="ml-2 text-white font-medium">{task.estimatedTime}</span>
            </div>
          </div>

          {/* Dependencies */}
          {dependencies.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-4 h-4 text-blue-400" />
                <h4 className="text-sm font-medium text-slate-400">Dependencies</h4>
              </div>
              <ul className="space-y-2">
                {dependencies.map(dep => (
                  <li key={dep!.id} className="flex items-center gap-2 text-sm text-slate-300 p-2 bg-slate-800/30 rounded">
                    <span className="text-blue-400">→</span>
                    {dep!.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-400">Status:</span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              task.status === 'done' 
                ? 'bg-emerald-500/20 text-emerald-400'
                : task.status === 'in_progress'
                ? 'bg-amber-500/20 text-amber-400'
                : 'bg-slate-700 text-slate-400'
            }`}>
              {task.status.replace('_', ' ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExecutionPhaseTimeline;

