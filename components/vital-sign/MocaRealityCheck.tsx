'use client';

import { mocaRealityCheck } from '@/config/vitalSignContent';
import { CheckCircle, AlertTriangle, Info } from 'lucide-react';

export function MocaRealityCheck() {
  return (
    <div className="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">
          A Realistic View of MoCA
        </h3>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Understanding what works well and where operational limits exist
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Strengths Card */}
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-semibold text-emerald-400">
              {mocaRealityCheck.strengths.title}
            </h4>
          </div>
          <ul className="space-y-3">
            {mocaRealityCheck.strengths.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-emerald-400 mt-0.5 flex-shrink-0">•</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Limitations Card */}
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
            </div>
            <h4 className="font-semibold text-amber-400">
              {mocaRealityCheck.limitations.title}
            </h4>
          </div>
          <ul className="space-y-3">
            {mocaRealityCheck.limitations.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">•</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-400 italic">
            {mocaRealityCheck.footer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MocaRealityCheck;

