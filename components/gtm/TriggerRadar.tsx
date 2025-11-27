'use client';

import { useState, useMemo } from 'react';
import { triggers, dream25Accounts } from '@/config/gtmBlueprint';
import type { Account, PersonaId } from '@/types/gtm';
import { Brain, ClipboardCheck, Clock, Heart, Cpu, Users, X, Building2, GraduationCap, MapPin, ArrowRight } from 'lucide-react';

const triggerIcons: Record<string, React.ReactNode> = {
  brain: <Brain className="w-4 h-4" />,
  'clipboard-check': <ClipboardCheck className="w-4 h-4" />,
  clock: <Clock className="w-4 h-4" />,
  heart: <Heart className="w-4 h-4" />,
  cpu: <Cpu className="w-4 h-4" />,
  users: <Users className="w-4 h-4" />
};

const typeIcons = {
  mega_idn: <Building2 className="w-4 h-4" />,
  academic: <GraduationCap className="w-4 h-4" />,
  regional: <MapPin className="w-4 h-4" />
};

const personaLabels: Record<PersonaId, string> = {
  cmo: 'CMO',
  primary_care: 'Primary Care',
  neuro_psych: 'Neuro/Psych',
  pop_health: 'Pop Health',
  digital: 'Digital/CIO',
  ops: 'Ops'
};

export function TriggerRadar() {
  const [activeTriggers, setActiveTriggers] = useState<string[]>(triggers.map(t => t.id));
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  const scoredAccounts = useMemo(() => {
    return dream25Accounts
      .map(account => {
        const matchedTriggers = account.triggers.filter(t => activeTriggers.includes(t));
        const score = activeTriggers.length > 0 
          ? (matchedTriggers.length / activeTriggers.length) * 100 
          : 0;
        return { ...account, matchedTriggers, score };
      })
      .sort((a, b) => b.score - a.score);
  }, [activeTriggers]);

  const getTemperature = (score: number): { label: string; color: string; bg: string } => {
    if (score >= 70) return { label: 'Hot', color: 'text-red-400', bg: 'bg-red-500/20' };
    if (score >= 40) return { label: 'Warm', color: 'text-amber-400', bg: 'bg-amber-500/20' };
    return { label: 'Cold', color: 'text-blue-400', bg: 'bg-blue-500/20' };
  };

  const toggleTrigger = (triggerId: string) => {
    setActiveTriggers(prev => 
      prev.includes(triggerId)
        ? prev.filter(t => t !== triggerId)
        : [...prev, triggerId]
    );
  };

  return (
    <section className="bg-slate-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trigger Radar
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Filter by triggers to see which accounts are hot, warm, or cold for our outreach.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Trigger Checklist */}
          <div className="lg:col-span-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-amber-400" />
                Active Triggers
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Toggle triggers to filter accounts by relevance.
              </p>
              
              <div className="space-y-3">
                {triggers.map(trigger => {
                  const isActive = activeTriggers.includes(trigger.id);
                  return (
                    <button
                      key={trigger.id}
                      onClick={() => toggleTrigger(trigger.id)}
                      className={`w-full flex items-start gap-3 p-3 rounded-lg border transition-all text-left ${
                        isActive
                          ? 'bg-amber-500/10 border-amber-500/30 text-white'
                          : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      <div className={`mt-0.5 ${isActive ? 'text-amber-400' : 'text-slate-500'}`}>
                        {triggerIcons[trigger.icon]}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{trigger.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{trigger.description}</div>
                      </div>
                      <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                        isActive ? 'bg-amber-500 border-amber-500' : 'border-slate-600'
                      }`}>
                        {isActive && <span className="text-slate-900 text-xs font-bold">✓</span>}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Active triggers:</span>
                  <span className="text-amber-400 font-semibold">{activeTriggers.length} / {triggers.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Account Table */}
          <div className="lg:col-span-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 p-4 bg-slate-800 border-b border-slate-700 text-sm font-medium text-slate-400">
                <div className="col-span-4">Account</div>
                <div className="col-span-2">Type</div>
                <div className="col-span-2">Region</div>
                <div className="col-span-2 text-center">Score</div>
                <div className="col-span-2 text-center">Status</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-slate-700/50">
                {scoredAccounts.map((account) => {
                  const temp = getTemperature(account.score);
                  return (
                    <button
                      key={account.id}
                      onClick={() => setSelectedAccount(account)}
                      className="w-full grid grid-cols-12 gap-4 p-4 hover:bg-slate-700/30 transition-colors text-left"
                    >
                      <div className="col-span-4">
                        <div className="font-medium text-white">{account.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {account.matchedTriggers.length} / {activeTriggers.length} triggers
                        </div>
                      </div>
                      <div className="col-span-2 flex items-center gap-2 text-slate-400 text-sm">
                        {typeIcons[account.type]}
                        <span className="capitalize">{account.type.replace('_', '-')}</span>
                      </div>
                      <div className="col-span-2 text-slate-400 text-sm">
                        {account.region}
                      </div>
                      <div className="col-span-2 flex justify-center">
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${temp.bg} ${temp.color}`}>
                          {Math.round(account.score)}%
                        </div>
                      </div>
                      <div className="col-span-2 flex justify-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${temp.bg} ${temp.color}`}>
                          {temp.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Account Drawer */}
        {selectedAccount && (
          <AccountDrawer 
            account={selectedAccount} 
            onClose={() => setSelectedAccount(null)} 
          />
        )}
      </div>
    </section>
  );
}

function AccountDrawer({ account, onClose }: { account: Account; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
      <div 
        className="bg-slate-900 border-l border-slate-700 w-full max-w-lg overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900 p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                {typeIcons[account.type]}
                <span className="capitalize">{account.type.replace('_', '-')}</span>
                <span>•</span>
                <span>{account.region}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{account.name}</h3>
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
        <div className="p-6 space-y-6">
          {/* Matched Triggers */}
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Matched Triggers
            </h4>
            <div className="flex flex-wrap gap-2">
              {account.triggers.map((triggerId) => {
                const trigger = triggers.find(t => t.id === triggerId);
                return trigger ? (
                  <span
                    key={triggerId}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/20 text-amber-400 rounded-lg text-sm border border-amber-500/30"
                  >
                    {triggerIcons[trigger.icon]}
                    {trigger.name}
                  </span>
                ) : null;
              })}
            </div>
          </div>

          {/* What We Know */}
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <h4 className="font-semibold text-white mb-3">What We Know</h4>
            <ul className="space-y-2">
              {account.whatWeKnow.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <span className="text-amber-400 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Public Signals */}
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <h4 className="font-semibold text-white mb-3">Public Signals</h4>
            <ul className="space-y-2">
              {account.publicSignals.map((signal, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  {signal}
                </li>
              ))}
            </ul>
          </div>

          {/* Notes */}
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <h4 className="font-semibold text-white mb-3">Notes</h4>
            <p className="text-slate-300 text-sm">{account.notes}</p>
          </div>

          {/* Recommended Entry */}
          <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/30">
            <h4 className="font-semibold text-emerald-400 mb-2 flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              Recommended Entry Wedge
            </h4>
            <p className="text-white">
              Start with: <span className="font-semibold text-emerald-400">{personaLabels[account.recommendedEntry]}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TriggerRadar;

