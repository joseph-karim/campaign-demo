'use client';

import { useState } from 'react';
import { accountStoryboards } from '@/config/gtmBlueprint';
import { Building2, Target, Calendar, FlaskConical, TrendingUp, ChevronDown } from 'lucide-react';

const panelIcons: Record<string, React.ReactNode> = {
  context: <Building2 className="w-5 h-5" />,
  entry_wedge: <Target className="w-5 h-5" />,
  first_meeting: <Calendar className="w-5 h-5" />,
  pilot_sketch: <FlaskConical className="w-5 h-5" />,
  expansion: <TrendingUp className="w-5 h-5" />
};

const panelColors: Record<string, string> = {
  context: 'from-slate-500/20 to-slate-600/10 border-slate-500/30',
  entry_wedge: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30',
  first_meeting: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
  pilot_sketch: 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
  expansion: 'from-amber-500/20 to-amber-600/10 border-amber-500/30'
};

const panelAccentColors: Record<string, string> = {
  context: 'text-slate-400',
  entry_wedge: 'text-emerald-400',
  first_meeting: 'text-blue-400',
  pilot_sketch: 'text-purple-400',
  expansion: 'text-amber-400'
};

export function KaiserStoryboard() {
  const [selectedAccountId, setSelectedAccountId] = useState('kaiser');
  const [expandedPanel, setExpandedPanel] = useState<string | null>('context');

  const storyboard = accountStoryboards.find(s => s.accountId === selectedAccountId) || accountStoryboards[0];

  return (
    <section className="bg-slate-950 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Account Storyboard
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Concrete example showing how all the GTM elements fit together for a flagship account.
          </p>
        </div>

        {/* Account Selector */}
        <div className="flex justify-center gap-3 mb-10">
          {accountStoryboards.map(sb => (
            <button
              key={sb.accountId}
              onClick={() => {
                setSelectedAccountId(sb.accountId);
                setExpandedPanel('context');
              }}
              className={`px-5 py-3 rounded-xl font-medium transition-all ${
                selectedAccountId === sb.accountId
                  ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/25'
                  : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              {sb.accountName}
            </button>
          ))}
        </div>

        {/* Storyboard Panels */}
        <div className="space-y-4">
          {storyboard.panels.map((panel, index) => {
            const isExpanded = expandedPanel === panel.id;
            const Icon = () => panelIcons[panel.id] || <Building2 className="w-5 h-5" />;

            return (
              <div
                key={panel.id}
                className={`bg-gradient-to-r ${panelColors[panel.id]} border rounded-xl overflow-hidden transition-all duration-300`}
              >
                {/* Panel Header */}
                <button
                  onClick={() => setExpandedPanel(isExpanded ? null : panel.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-slate-900/50 rounded-lg">
                      <span className={panelAccentColors[panel.id]}>{panelIcons[panel.id]}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500 font-medium">STEP {index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{panel.title}</h3>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Panel Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <ul className="space-y-3">
                        {panel.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${panelAccentColors[panel.id]} bg-slate-800`}>
                              {i + 1}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Note */}
        <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <p className="text-slate-400 text-center text-sm">
            This storyboard shows how all GTM elements come together for <span className="text-white font-medium">{storyboard.accountName}</span>.
            The pattern generalizes to other accounts – adjust messaging and entry points based on their specific triggers and context.
          </p>
        </div>
      </div>
    </section>
  );
}

export default KaiserStoryboard;

