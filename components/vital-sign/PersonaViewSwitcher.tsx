'use client';

import { useVitalSignPersona } from '@/contexts/VitalSignPersonaContext';
import type { PersonaType } from '@/types/vitalSign';
import { Stethoscope, UserCog, BarChart3 } from 'lucide-react';

const personaConfig: { id: PersonaType; label: string; icon: React.ReactNode; description: string }[] = [
  { id: 'clinician', label: 'Clinician', icon: <Stethoscope className="w-4 h-4" />, description: 'PCP, specialist' },
  { id: 'staff', label: 'Staff', icon: <UserCog className="w-4 h-4" />, description: 'MA, Nurse' },
  { id: 'manager', label: 'Manager', icon: <BarChart3 className="w-4 h-4" />, description: 'Lead, Director' }
];

export function PersonaViewSwitcher() {
  const { persona, setPersona } = useVitalSignPersona();

  return (
    <div className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 py-3 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">Viewing as:</span>
          <div className="flex gap-2">
            {personaConfig.map(p => (
              <button
                key={p.id}
                onClick={() => setPersona(p.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  persona === p.id
                    ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700 hover:border-slate-600'
                }`}
              >
                {p.icon}
                <span>{p.label}</span>
                <span className="hidden sm:inline text-xs opacity-70">({p.description})</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonaViewSwitcher;

