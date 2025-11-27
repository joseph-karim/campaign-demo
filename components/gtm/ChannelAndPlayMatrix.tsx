'use client';

import { useState } from 'react';
import { channels, phases } from '@/config/gtmBlueprint';
import { channelPlays } from '@/config/gtmPersonas';
import type { PhaseId, PersonaId } from '@/types/gtm';
import { Lightbulb, X } from 'lucide-react';

const personaColumns: { id: PersonaId; label: string }[] = [
  { id: 'cmo', label: 'CMO' },
  { id: 'primary_care', label: 'PC Lead' },
  { id: 'neuro_psych', label: 'Neuro' },
  { id: 'pop_health', label: 'Pop Health' },
  { id: 'digital', label: 'Digital' },
  { id: 'ops', label: 'Ops' }
];

const intensityColors = {
  low: 'bg-slate-700/50 text-slate-500',
  medium: 'bg-amber-500/30 text-amber-400',
  high: 'bg-emerald-500/30 text-emerald-400'
};

export function ChannelAndPlayMatrix() {
  const [selectedPhase, setSelectedPhase] = useState<PhaseId>('phase_3_9');
  const [selectedCell, setSelectedCell] = useState<{ channelId: string; personaId: PersonaId } | null>(null);

  const getIntensity = (channelId: string, personaId: PersonaId): 'low' | 'medium' | 'high' => {
    const play = channelPlays.find(
      p => p.channelId === channelId && p.personaId === personaId && p.phaseId === selectedPhase
    );
    return play?.intensity || 'low';
  };

  const getPlays = (channelId: string, personaId: PersonaId): string[] => {
    const play = channelPlays.find(
      p => p.channelId === channelId && p.personaId === personaId && p.phaseId === selectedPhase
    );
    return play?.plays || [];
  };

  const currentPhase = phases.find(p => p.id === selectedPhase);

  return (
    <section className="bg-slate-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Channel & Play Matrix
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Channel choices by phase and persona. Click cells to see specific plays.
          </p>
        </div>

        {/* Phase Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {phases.map(phase => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`px-5 py-3 rounded-xl font-medium transition-all ${
                selectedPhase === phase.id
                  ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/25'
                  : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              <span className="block font-semibold">{phase.name}</span>
              <span className="text-xs opacity-70">{phase.description}</span>
            </button>
          ))}
        </div>

        {/* Phase Description */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 mb-8 text-center">
          <p className="text-slate-300">
            <span className="text-amber-400 font-semibold">{currentPhase?.name}</span>
            <span className="mx-2 text-slate-600">•</span>
            <span>{currentPhase?.duration}</span>
            <span className="mx-2 text-slate-600">•</span>
            <span>{currentPhase?.description}</span>
          </p>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr>
                <th className="text-left p-4 text-slate-400 font-medium text-sm border-b border-slate-700">
                  Channel
                </th>
                {personaColumns.map(persona => (
                  <th 
                    key={persona.id} 
                    className="p-4 text-slate-400 font-medium text-sm text-center border-b border-slate-700"
                  >
                    {persona.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {channels.map(channel => (
                <tr key={channel.id} className="border-b border-slate-800/50">
                  <td className="p-4">
                    <div className="font-medium text-white">{channel.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{channel.description}</div>
                  </td>
                  {personaColumns.map(persona => {
                    const intensity = getIntensity(channel.id, persona.id);
                    const plays = getPlays(channel.id, persona.id);
                    const hasPlays = plays.length > 0;

                    return (
                      <td key={persona.id} className="p-2 text-center">
                        <button
                          onClick={() => hasPlays && setSelectedCell({ channelId: channel.id, personaId: persona.id })}
                          disabled={!hasPlays}
                          className={`w-full py-3 px-2 rounded-lg text-xs font-semibold transition-all ${
                            intensityColors[intensity]
                          } ${hasPlays ? 'cursor-pointer hover:ring-2 hover:ring-amber-500/50' : 'cursor-default opacity-50'}`}
                        >
                          {intensity.toUpperCase()}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-slate-700/50" />
            <span className="text-sm text-slate-400">Low priority</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-amber-500/30" />
            <span className="text-sm text-slate-400">Medium priority</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-emerald-500/30" />
            <span className="text-sm text-slate-400">High priority</span>
          </div>
        </div>

        {/* Plays Modal */}
        {selectedCell && (
          <PlaysModal
            channelId={selectedCell.channelId}
            personaId={selectedCell.personaId}
            phaseId={selectedPhase}
            onClose={() => setSelectedCell(null)}
          />
        )}
      </div>
    </section>
  );
}

interface PlaysModalProps {
  channelId: string;
  personaId: PersonaId;
  phaseId: PhaseId;
  onClose: () => void;
}

function PlaysModal({ channelId, personaId, phaseId, onClose }: PlaysModalProps) {
  const channel = channels.find(c => c.id === channelId);
  const persona = personaColumns.find(p => p.id === personaId);
  const phase = phases.find(p => p.id === phaseId);
  const playData = channelPlays.find(
    p => p.channelId === channelId && p.personaId === personaId && p.phaseId === phaseId
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div 
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded text-xs">
                  {phase?.name}
                </span>
                <span>•</span>
                <span>{persona?.label}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{channel?.name}</h3>
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
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-amber-400" />
            <h4 className="font-semibold text-white">Specific Plays</h4>
          </div>
          
          {playData?.plays && playData.plays.length > 0 ? (
            <ul className="space-y-3">
              {playData.plays.map((play, i) => (
                <li 
                  key={i} 
                  className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 text-slate-300"
                >
                  {play}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-400 text-center py-8">
              No specific plays defined for this combination.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChannelAndPlayMatrix;

