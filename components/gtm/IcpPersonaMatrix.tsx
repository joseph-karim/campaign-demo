'use client';

import { useState } from 'react';
import { icpConfigs } from '@/config/gtmPersonas';
import type { IcpType, PersonaDetail } from '@/types/gtm';
import { Building2, GraduationCap, MapPin, X, Briefcase, Target, AlertCircle, Zap, MessageSquare, FileCheck } from 'lucide-react';

const icpIcons: Record<IcpType, React.ReactNode> = {
  mega_idn: <Building2 className="w-4 h-4" />,
  academic: <GraduationCap className="w-4 h-4" />,
  regional: <MapPin className="w-4 h-4" />
};

const personaColors: Record<string, string> = {
  cmo: 'from-rose-500/20 to-rose-600/20 border-rose-500/30 hover:border-rose-400',
  primary_care: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 hover:border-emerald-400',
  neuro_psych: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-400',
  pop_health: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-400',
  digital: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 hover:border-cyan-400',
  ops: 'from-amber-500/20 to-amber-600/20 border-amber-500/30 hover:border-amber-400'
};

const personaTextColors: Record<string, string> = {
  cmo: 'text-rose-400',
  primary_care: 'text-emerald-400',
  neuro_psych: 'text-purple-400',
  pop_health: 'text-blue-400',
  digital: 'text-cyan-400',
  ops: 'text-amber-400'
};

export function IcpPersonaMatrix() {
  const [selectedIcp, setSelectedIcp] = useState<IcpType>('regional');
  const [expandedPersona, setExpandedPersona] = useState<string | null>(null);

  const currentIcp = icpConfigs.find(icp => icp.id === selectedIcp) || icpConfigs[2];

  return (
    <section className="bg-slate-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            ICP & Persona Matrix
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Understand who we're targeting and what matters to each persona at different system types.
          </p>
        </div>

        {/* ICP Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {icpConfigs.map(icp => (
            <button
              key={icp.id}
              onClick={() => {
                setSelectedIcp(icp.id);
                setExpandedPersona(null);
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                selectedIcp === icp.id
                  ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/25'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {icpIcons[icp.id]}
              <span>{icp.name}</span>
              <span className="text-xs opacity-70">{icp.example}</span>
            </button>
          ))}
        </div>

        {/* Persona Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentIcp.personas.map((persona) => (
            <div
              key={persona.id}
              onClick={() => setExpandedPersona(expandedPersona === persona.id ? null : persona.id)}
              className={`relative cursor-pointer rounded-xl p-5 border bg-gradient-to-br transition-all duration-300 ${
                personaColors[persona.id]
              } ${expandedPersona === persona.id ? 'ring-2 ring-amber-500' : ''}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className={`font-semibold ${personaTextColors[persona.id]}`}>
                    {persona.shortName}
                  </h3>
                  <p className="text-sm text-slate-400">{persona.name}</p>
                </div>
                <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                  Click to expand
                </span>
              </div>
              
              {/* JTBD Preview */}
              <p className="text-sm text-slate-300 line-clamp-2">
                <span className="text-slate-500">JTBD:</span> {persona.jtbd}
              </p>
            </div>
          ))}
        </div>

        {/* Expanded Persona Panel */}
        {expandedPersona && (
          <PersonaDetailPanel
            persona={currentIcp.personas.find(p => p.id === expandedPersona)!}
            onClose={() => setExpandedPersona(null)}
          />
        )}
      </div>
    </section>
  );
}

function PersonaDetailPanel({ persona, onClose }: { persona: PersonaDetail; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div 
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`sticky top-0 z-10 bg-gradient-to-r ${personaColors[persona.id].replace('hover:border-', '')} p-6 rounded-t-2xl border-b border-slate-700`}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className={`text-xl font-bold ${personaTextColors[persona.id]}`}>
                {persona.name}
              </h3>
              <p className="text-slate-400 text-sm mt-1">{persona.shortName}</p>
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
          {/* Job to be Done */}
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className={`w-5 h-5 ${personaTextColors[persona.id]}`} />
              <h4 className="font-semibold text-white">Job to be Done</h4>
            </div>
            <p className="text-slate-300">{persona.jtbd}</p>
          </div>

          {/* Current Pain */}
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <h4 className="font-semibold text-white">Current Pain</h4>
            </div>
            <ul className="space-y-2">
              {persona.currentPain.map((pain, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300">
                  <span className="text-red-400 mt-1">•</span>
                  {pain}
                </li>
              ))}
            </ul>
          </div>

          {/* Trigger Fit */}
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-amber-400" />
              <h4 className="font-semibold text-white">Trigger Fit</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {persona.triggerFit.map((trigger, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm border border-amber-500/30"
                >
                  {trigger.replace(/_/g, ' ')}
                </span>
              ))}
            </div>
          </div>

          {/* Entry Hook */}
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className={`w-5 h-5 ${personaTextColors[persona.id]}`} />
              <h4 className="font-semibold text-white">Our Entry Hook</h4>
            </div>
            <ul className="space-y-3">
              {persona.entryHook.map((hook, i) => (
                <li key={i} className="p-3 bg-slate-900/50 rounded-lg border border-slate-700/50 text-slate-300 italic">
                  &ldquo;{hook}&rdquo;
                </li>
              ))}
            </ul>
          </div>

          {/* Proof They Care */}
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <FileCheck className="w-5 h-5 text-emerald-400" />
              <h4 className="font-semibold text-white">Proof They Care</h4>
            </div>
            <ul className="space-y-2">
              {persona.proofTheyCare.map((proof, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300">
                  <span className="text-emerald-400 mt-1">✓</span>
                  {proof}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IcpPersonaMatrix;

