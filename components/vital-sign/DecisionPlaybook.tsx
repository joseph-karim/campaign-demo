'use client';

import { useState, Fragment } from 'react';
import { decisionRows } from '@/config/vitalSignContent';
import type { RiskLevel } from '@/types/vitalSign';
import { Lightbulb, MessageCircle, X, User } from 'lucide-react';

const riskColors: Record<RiskLevel, { bg: string; border: string; text: string; headerBg: string }> = {
  low: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    headerBg: 'bg-emerald-500/20'
  },
  moderate: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    headerBg: 'bg-amber-500/20'
  },
  high: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    text: 'text-red-400',
    headerBg: 'bg-red-500/20'
  }
};

export function DecisionPlaybook() {
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const [selectedCell, setSelectedCell] = useState<{ rowId: string; risk: RiskLevel } | null>(null);

  return (
    <section className="bg-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Decision Playbook
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            If-this-then-that patterns for common scenarios. Click rows for clinical vignettes, cells for patient scripts.
          </p>
        </div>

        {/* Decision Grid */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            {/* Header */}
            <thead>
              <tr>
                <th className="p-4 text-left text-sm font-medium text-slate-400 border-b border-slate-700 w-1/4">
                  Scenario
                </th>
                {(['low', 'moderate', 'high'] as RiskLevel[]).map(risk => (
                  <th 
                    key={risk}
                    className={`p-4 text-center text-sm font-medium border-b border-slate-700 ${riskColors[risk].text}`}
                  >
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${riskColors[risk].headerBg}`}>
                      {risk.charAt(0).toUpperCase() + risk.slice(1)} Risk
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {decisionRows.map(row => (
                <Fragment key={row.id}>
                  <tr className="border-b border-slate-800">
                    {/* Scenario Title */}
                    <td className="p-4">
                      <button
                        onClick={() => setExpandedRowId(expandedRowId === row.id ? null : row.id)}
                        className="text-left w-full group"
                      >
                        <div className="font-medium text-white group-hover:text-indigo-400 transition-colors">
                          {row.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                          <User className="w-3 h-3" />
                          Click for vignette
                        </div>
                      </button>
                    </td>

                    {/* Action Cells */}
                    {(['low', 'moderate', 'high'] as RiskLevel[]).map(risk => {
                      const colors = riskColors[risk];
                      const hasScript = row.patientScript?.[risk];
                      const isSelected = selectedCell?.rowId === row.id && selectedCell?.risk === risk;

                      return (
                        <td key={risk} className="p-2">
                          <button
                            onClick={() => hasScript && setSelectedCell(isSelected ? null : { rowId: row.id, risk })}
                            className={`w-full p-3 rounded-lg border text-sm text-left transition-all ${
                              colors.bg
                            } ${
                              isSelected ? `${colors.border} ring-2 ring-indigo-500` : colors.border
                            } ${
                              hasScript ? 'cursor-pointer hover:ring-2 hover:ring-indigo-500/50' : 'cursor-default'
                            }`}
                          >
                            <p className="text-slate-300">{row.cells[risk]}</p>
                            {hasScript && (
                              <div className="mt-2 flex items-center gap-1 text-xs text-indigo-400">
                                <MessageCircle className="w-3 h-3" />
                                Script available
                              </div>
                            )}
                          </button>
                        </td>
                      );
                    })}
                  </tr>

                  {/* Expanded Vignette Row */}
                  {expandedRowId === row.id && (
                    <tr>
                      <td colSpan={4} className="p-4 bg-slate-800/50">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Lightbulb className="w-5 h-5 text-indigo-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white mb-1">Clinical Vignette</h4>
                            <p className="text-slate-300 text-sm">{row.vignette}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Patient Script Modal */}
        {selectedCell && (
          <PatientScriptModal
            row={decisionRows.find(r => r.id === selectedCell.rowId)!}
            risk={selectedCell.risk}
            onClose={() => setSelectedCell(null)}
          />
        )}
      </div>
    </section>
  );
}

interface PatientScriptModalProps {
  row: typeof decisionRows[0];
  risk: RiskLevel;
  onClose: () => void;
}

function PatientScriptModal({ row, risk, onClose }: PatientScriptModalProps) {
  const script = row.patientScript?.[risk];
  if (!script) return null;

  const colors = riskColors[risk];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div 
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-6 border-b border-slate-700 ${colors.bg}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className={`w-6 h-6 ${colors.text}`} />
              <div>
                <h3 className="text-lg font-bold text-white">What You Might Say</h3>
                <p className="text-sm text-slate-400">{row.title} • {risk} risk</p>
              </div>
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
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
            <p className="text-slate-300 italic leading-relaxed">{script}</p>
          </div>

          <p className="mt-4 text-xs text-slate-500 text-center">
            Adapt this language to your style and the patient&apos;s needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DecisionPlaybook;

