"use client";

import { useState } from 'react';
import { usePersona } from '@/contexts/PersonaContext';
import { cn } from '@/lib/utils';
import { Check, X, ChevronRight } from 'lucide-react';
import type { PersonaId } from '@/types/report';

const colorMap: Record<PersonaId, { bg: string; text: string; accent: string }> = {
  'primary-care': { bg: 'bg-blue-500', text: 'text-blue-600', accent: 'border-blue-500' },
  'neurology': { bg: 'bg-violet-500', text: 'text-violet-600', accent: 'border-violet-500' },
  'mental-health': { bg: 'bg-emerald-500', text: 'text-emerald-600', accent: 'border-emerald-500' },
  'corporate-wellness': { bg: 'bg-red-500', text: 'text-red-600', accent: 'border-red-500' },
};

export function ToolLensSection() {
  const { currentPersona, content } = usePersona();
  const { toolLens } = content;
  const [selectedTool, setSelectedTool] = useState(0);
  const colors = colorMap[currentPersona];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {toolLens.headline}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {toolLens.description}
          </p>
        </div>

        {/* Tool Toggle */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {toolLens.tools.map((tool, index) => (
            <button
              key={index}
              onClick={() => setSelectedTool(index)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                selectedTool === index
                  ? cn(colors.bg, "text-white shadow-lg")
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              )}
            >
              {tool.tool}
            </button>
          ))}
        </div>

        {/* Comparison Grid */}
        <div
          key={selectedTool}
          className="grid md:grid-cols-2 gap-6 animate-fade-in"
        >
          {/* What You Get */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", colors.bg)}>
                <Check className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                What You Get
              </h3>
            </div>
            
            <ul className="space-y-3">
              {toolLens.tools[selectedTool].whatYouGet.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Check className={cn("w-5 h-5 mt-0.5 flex-shrink-0", colors.text)} />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Miss */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-400 dark:bg-gray-600">
                <X className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                What You Miss
              </h3>
            </div>
            
            <ul className="space-y-3">
              {toolLens.tools[selectedTool].whatYouMiss.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pipeline Diagram */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 animate-fade-in">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
            The Assessment Pipeline
          </h4>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {[
              { label: 'Patient Complaint', sub: '"Memory issues"' },
              { label: 'Assessment Method', sub: toolLens.tools[selectedTool].tool },
              { label: 'Diagnostic Insight', sub: selectedTool === 2 ? 'Complete picture' : 'Gaps remain' },
              { label: 'Clinical Decision', sub: selectedTool === 2 ? 'Confident action' : 'Uncertainty' },
            ].map((step, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className={cn(
                    "px-6 py-4 rounded-xl text-center min-w-[140px]",
                    index === 1 && selectedTool === 2 
                      ? cn("border-2", colors.accent, "bg-white dark:bg-gray-900")
                      : "bg-gray-100 dark:bg-gray-700"
                  )}
                >
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {step.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {step.sub}
                  </div>
                </div>
                {index < 3 && (
                  <ChevronRight className="w-5 h-5 text-gray-400 mx-2 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
