'use client';

import { useState } from 'react';
import { gtmOverview } from '@/config/gtmBlueprint';
import { Target, Users, Calendar, Eye, BarChart3 } from 'lucide-react';

type ViewMode = 'exec' | 'field';

export function GtmHeroOverview() {
  const [viewMode, setViewMode] = useState<ViewMode>('exec');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Internal GTM Blueprint
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enterprise GTM Blueprint
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            What are we trying to do?
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Objective, Target, Timeframe */}
          <div className="space-y-6">
            {/* Objective Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Objective</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {gtmOverview.objective}
              </p>
            </div>

            {/* Target Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Target</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {gtmOverview.target}
              </p>
            </div>

            {/* Timeframe Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Timeframe</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {gtmOverview.timeframeBands.map((band, index) => (
                  <div
                    key={band}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      index === 0
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : index === 1
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}
                  >
                    {band}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: View Toggle + Content */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
            {/* Toggle */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <button
                onClick={() => setViewMode('exec')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                  viewMode === 'exec'
                    ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/25'
                    : 'bg-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-4 h-4" />
                Exec View
              </button>
              <button
                onClick={() => setViewMode('field')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                  viewMode === 'field'
                    ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/25'
                    : 'bg-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                Field View
              </button>
            </div>

            {/* View Content */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                {viewMode === 'exec' ? (
                  <>
                    <Eye className="w-5 h-5 text-amber-400" />
                    Executive Success Criteria
                  </>
                ) : (
                  <>
                    <BarChart3 className="w-5 h-5 text-amber-400" />
                    Field Team Deliverables
                  </>
                )}
              </h3>
              
              <ul className="space-y-3">
                {(viewMode === 'exec' ? gtmOverview.execView : gtmOverview.fieldView).map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50 transition-all hover:border-amber-500/30"
                    style={{
                      animation: `fadeInUp 0.4s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center text-sm font-bold text-amber-400">
                      {index + 1}
                    </span>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default GtmHeroOverview;

