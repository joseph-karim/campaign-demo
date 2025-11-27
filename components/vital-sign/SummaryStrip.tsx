'use client';

import { summaryBullets } from '@/config/vitalSignContent';
import { CheckCircle, Info } from 'lucide-react';

export function SummaryStrip() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-indigo-950 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            The Story in 4 Bullets
          </h2>
          <p className="text-slate-400">
            Everything on this page distilled to what matters.
          </p>
        </div>

        {/* Summary Bullets */}
        <div className="space-y-4">
          {summaryBullets.map((bullet) => (
            <div
              key={bullet.number}
              className="flex items-start gap-4 p-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-indigo-500/50 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-indigo-400">{bullet.number}</span>
              </div>
              <p className="text-lg text-slate-200 leading-relaxed pt-1">
                {bullet.text}
              </p>
            </div>
          ))}
        </div>

        {/* Internal Note */}
        <div className="mt-10 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-amber-300 font-medium mb-1">For internal use:</p>
              <p className="text-sm text-amber-200/80">
                This is the story every demo, deck, and training should mirror.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-400 transition-colors cursor-pointer">
            <CheckCircle className="w-5 h-5" />
            Ready to See It in Action?
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Request a demo or pilot conversation
          </p>
        </div>
      </div>
    </section>
  );
}

export default SummaryStrip;

