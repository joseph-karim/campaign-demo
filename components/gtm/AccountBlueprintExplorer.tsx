'use client';

import { useState } from 'react';
import { dream25Accounts } from '@/config/gtmBlueprint';
import { accountBlueprints } from '@/config/gtmPersonas';
import type { PersonaId } from '@/types/gtm';
import { ChevronDown, Target, MessageSquare, FileText, BarChart3 } from 'lucide-react';

const personaOptions: { id: PersonaId; label: string }[] = [
  { id: 'cmo', label: 'CMO / Quality' },
  { id: 'primary_care', label: 'Primary Care' },
  { id: 'neuro_psych', label: 'Neuro / Psych' },
  { id: 'pop_health', label: 'Pop Health' },
  { id: 'digital', label: 'Digital / CIO' },
  { id: 'ops', label: 'Operations' }
];

const stepConfig = [
  { id: 'wedge', icon: Target, title: 'Where We Wedge In', color: 'emerald' },
  { id: 'say', icon: MessageSquare, title: 'What We Say', color: 'blue' },
  { id: 'propose', icon: FileText, title: 'What We Propose', color: 'purple' },
  { id: 'measure', icon: BarChart3, title: 'What We Measure', color: 'amber' }
];

export function AccountBlueprintExplorer() {
  const [selectedAccountId, setSelectedAccountId] = useState('kaiser');
  const [selectedPersonaId, setSelectedPersonaId] = useState<PersonaId>('pop_health');

  const selectedAccount = dream25Accounts.find(a => a.id === selectedAccountId) || dream25Accounts[0];
  const blueprint = accountBlueprints.find(b => b.accountId === selectedAccountId);
  const personaBlueprint = blueprint?.personas.find(p => p.id === selectedPersonaId);

  // If no blueprint exists for this account, show a placeholder
  const hasBlueprint = !!personaBlueprint;

  return (
    <section className="bg-slate-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Account Blueprint Explorer
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Interactive storyboard for any key account. Select an account and persona to see the tailored approach.
          </p>
        </div>

        {/* Selectors */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {/* Account Selector */}
          <div className="relative">
            <select
              value={selectedAccountId}
              onChange={(e) => setSelectedAccountId(e.target.value)}
              className="appearance-none bg-slate-800 border border-slate-700 text-white px-5 py-3 pr-10 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent cursor-pointer"
            >
              {dream25Accounts.map(account => (
                <option key={account.id} value={account.id}>
                  {account.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>

          {/* Persona Selector */}
          <div className="flex flex-wrap gap-2">
            {personaOptions.map(persona => (
              <button
                key={persona.id}
                onClick={() => setSelectedPersonaId(persona.id)}
                className={`px-4 py-2.5 rounded-lg font-medium transition-all ${
                  selectedPersonaId === persona.id
                    ? 'bg-amber-500 text-slate-900'
                    : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
                }`}
              >
                {persona.label}
              </button>
            ))}
          </div>
        </div>

        {/* Account Info Bar */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">{selectedAccount.name}</h3>
            <p className="text-slate-400 text-sm mt-1">
              {selectedAccount.type.replace('_', ' ')} • {selectedAccount.region}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-400">Viewing as:</span>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium border border-amber-500/30">
              {personaOptions.find(p => p.id === selectedPersonaId)?.label}
            </span>
          </div>
        </div>

        {/* Blueprint Steps */}
        {hasBlueprint ? (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Step 1: Where We Wedge In */}
            <StepCard
              icon={Target}
              title="Where We Wedge In"
              color="emerald"
              content={[personaBlueprint.entryWedge]}
              type="text"
            />

            {/* Step 2: What We Say */}
            <StepCard
              icon={MessageSquare}
              title="What We Say"
              color="blue"
              content={personaBlueprint.whatWeSay}
              type="list"
            />

            {/* Step 3: What We Propose */}
            <StepCard
              icon={FileText}
              title="What We Propose"
              color="purple"
              content={personaBlueprint.pilotProposal}
              type="list"
            />

            {/* Step 4: What We Measure */}
            <StepCard
              icon={BarChart3}
              title="What We Measure"
              color="amber"
              content={personaBlueprint.metrics}
              type="list"
            />
          </div>
        ) : (
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-12 text-center">
            <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-400 mb-2">
              Blueprint Not Yet Available
            </h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Detailed blueprint for {selectedAccount.name} with {personaOptions.find(p => p.id === selectedPersonaId)?.label} persona is being developed. 
              Try selecting a different account or persona.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

interface StepCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  color: 'emerald' | 'blue' | 'purple' | 'amber';
  content: string[];
  type: 'text' | 'list';
}

function StepCard({ icon: Icon, title, color, content, type }: StepCardProps) {
  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      icon: 'text-emerald-400',
      accent: 'text-emerald-400'
    },
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      icon: 'text-blue-400',
      accent: 'text-blue-400'
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      icon: 'text-purple-400',
      accent: 'text-purple-400'
    },
    amber: {
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      icon: 'text-amber-400',
      accent: 'text-amber-400'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`${colors.bg} border ${colors.border} rounded-xl p-6`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${colors.icon}`} />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      
      {type === 'text' ? (
        <p className="text-slate-300 leading-relaxed">{content[0]}</p>
      ) : (
        <ul className="space-y-3">
          {content.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className={`flex-shrink-0 w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center text-xs font-bold ${colors.accent}`}>
                {i + 1}
              </span>
              <span className="text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AccountBlueprintExplorer;

