'use client';

import { useState } from 'react';
import { heroContent } from '@/config/vitalSignContent';
import { Brain, CircleHelp, CheckCircle, ArrowRight } from 'lucide-react';

export function VitalSignHero() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-20 px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-500/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              Cognitive Vital Sign
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {heroContent.headline}
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {heroContent.subhead}
            </p>

            <ul className="space-y-3 mb-8">
              {heroContent.body.map((line, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-indigo-400" />
                  </div>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Interactive Split Card */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between p-4 bg-slate-800/70 border-b border-slate-700">
                <span className="text-sm font-medium text-slate-400">Compare Approaches</span>
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </div>

              {/* Split View */}
              <div className="grid grid-cols-2 divide-x divide-slate-700">
                {/* Left: Status Quo */}
                <div 
                  className={`p-6 transition-all duration-300 cursor-pointer ${
                    hoveredSide === 'left' 
                      ? 'bg-red-500/10' 
                      : hoveredSide === 'right' 
                      ? 'opacity-50' 
                      : ''
                  }`}
                  onMouseEnter={() => setHoveredSide('left')}
                  onMouseLeave={() => setHoveredSide(null)}
                >
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-red-500/10 rounded-full flex items-center justify-center relative">
                      <Brain className="w-10 h-10 text-slate-500" />
                      <CircleHelp className="w-6 h-6 text-red-400 absolute -top-1 -right-1" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {heroContent.statusQuo.label}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4">
                      {heroContent.statusQuo.caption}
                    </p>
                    
                    {/* Tooltip */}
                    <div className={`transition-all duration-300 ${
                      hoveredSide === 'left' ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      <div className="p-3 bg-slate-900/80 rounded-lg text-xs text-slate-300 border border-slate-700">
                        {heroContent.statusQuo.tooltip}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: New Approach */}
                <div 
                  className={`p-6 transition-all duration-300 cursor-pointer ${
                    hoveredSide === 'right' 
                      ? 'bg-emerald-500/10' 
                      : hoveredSide === 'left' 
                      ? 'opacity-50' 
                      : ''
                  }`}
                  onMouseEnter={() => setHoveredSide('right')}
                  onMouseLeave={() => setHoveredSide(null)}
                >
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-emerald-500/10 rounded-full flex items-center justify-center relative">
                      <Brain className="w-10 h-10 text-emerald-400" />
                      <CheckCircle className="w-6 h-6 text-emerald-400 absolute -top-1 -right-1" />
                      {/* Three bars */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        <div className="w-1.5 h-3 bg-emerald-400 rounded-full" />
                        <div className="w-1.5 h-4 bg-emerald-400 rounded-full" />
                        <div className="w-1.5 h-5 bg-emerald-400 rounded-full" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {heroContent.newApproach.label}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4">
                      {heroContent.newApproach.caption}
                    </p>

                    {/* Tooltip */}
                    <div className={`transition-all duration-300 ${
                      hoveredSide === 'right' ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      <div className="p-3 bg-slate-900/80 rounded-lg text-xs text-slate-300 border border-slate-700">
                        {heroContent.newApproach.tooltip}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VitalSignHero;

