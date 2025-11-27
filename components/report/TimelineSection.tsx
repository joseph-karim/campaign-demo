"use client";

import { useState } from 'react';
import { usePersona } from '@/contexts/PersonaContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  User, 
  Clock, 
  HelpCircle, 
  AlertTriangle, 
  BarChart3,
  ClipboardCheck,
  Heart,
  FileText,
  Activity,
  CheckCircle,
  TrendingUp,
  Star,
  Clipboard,
  Pill,
  MessageCircle,
  UserPlus,
  AlertCircle,
  UserX,
  ChevronDown,
  Download
} from 'lucide-react';
import type { PersonaId } from '@/types/report';

const iconMap: Record<string, React.ElementType> = {
  'user': User,
  'clock': Clock,
  'help-circle': HelpCircle,
  'alert-triangle': AlertTriangle,
  'bar-chart': BarChart3,
  'clipboard-check': ClipboardCheck,
  'heart': Heart,
  'file-text': FileText,
  'activity': Activity,
  'check-circle': CheckCircle,
  'trending-up': TrendingUp,
  'star': Star,
  'clipboard': Clipboard,
  'pill': Pill,
  'message-circle': MessageCircle,
  'user-plus': UserPlus,
  'alert-circle': AlertCircle,
  'user-x': UserX,
};

const colorMap: Record<PersonaId, { primary: string; light: string }> = {
  'primary-care': { primary: '#2563EB', light: 'bg-blue-50 dark:bg-blue-950/30' },
  'neurology': { primary: '#7C3AED', light: 'bg-violet-50 dark:bg-violet-950/30' },
  'mental-health': { primary: '#059669', light: 'bg-emerald-50 dark:bg-emerald-950/30' },
  'corporate-wellness': { primary: '#DC2626', light: 'bg-red-50 dark:bg-red-950/30' },
};

export function TimelineSection() {
  const { currentPersona, content } = usePersona();
  const { timeline } = content;
  const [mode, setMode] = useState<'before' | 'after'>('before');
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const colors = colorMap[currentPersona];
  
  const currentData = mode === 'before' ? timeline.before : timeline.after;

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {timeline.headline}
          </h2>
          
          {/* Mode Toggle */}
          <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 mt-6">
            <button
              onClick={() => setMode('before')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                mode === 'before'
                  ? "bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
              )}
            >
              Before Digital
            </button>
            <button
              onClick={() => setMode('after')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                mode === 'after'
                  ? "text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400"
              )}
              style={mode === 'after' ? { backgroundColor: colors.primary } : {}}
            >
              With Digital
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div
          key={mode}
          className="max-w-3xl mx-auto animate-fade-in"
        >
          <div className={cn(
            "rounded-2xl p-8",
            mode === 'before' 
              ? "bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              : cn(colors.light, "border-2")
          )}
          style={mode === 'after' ? { borderColor: colors.primary } : {}}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
              {currentData.title}
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div 
                className={cn(
                  "absolute left-6 top-0 bottom-0 w-0.5",
                  mode === 'before' ? "bg-gray-300 dark:bg-gray-700" : ""
                )}
                style={mode === 'after' ? { backgroundColor: colors.primary } : {}}
              />

              {/* Timeline Steps */}
              <div className="space-y-6">
                {currentData.steps.map((step, index) => {
                  const Icon = iconMap[step.icon] || User;
                  const isExpanded = expandedStep === index;
                  
                  return (
                    <div
                      key={index}
                      className="relative flex gap-4 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Icon */}
                      <div 
                        className={cn(
                          "relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                          mode === 'before' 
                            ? "bg-gray-200 dark:bg-gray-700"
                            : "text-white"
                        )}
                        style={mode === 'after' ? { backgroundColor: colors.primary } : {}}
                      >
                        <Icon className={cn(
                          "w-5 h-5",
                          mode === 'before' ? "text-gray-600 dark:text-gray-400" : "text-white"
                        )} />
                      </div>

                      {/* Content */}
                      <div 
                        className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => setExpandedStep(isExpanded ? null : index)}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                              {step.time}
                            </span>
                            <h4 className="text-base font-semibold text-gray-900 dark:text-white mt-1">
                              {step.title}
                            </h4>
                          </div>
                          <ChevronDown 
                            className={cn(
                              "w-5 h-5 text-gray-400 transition-transform",
                              isExpanded && "rotate-180"
                            )} 
                          />
                        </div>
                        
                        {isExpanded && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 animate-fade-in">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Outcome */}
            <div 
              className={cn(
                "mt-8 p-4 rounded-xl",
                mode === 'before'
                  ? "bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800"
                  : "border"
              )}
              style={mode === 'after' ? { backgroundColor: `${colors.primary}15`, borderColor: colors.primary } : {}}
            >
              <p className={cn(
                "text-sm font-medium",
                mode === 'before' 
                  ? "text-orange-800 dark:text-orange-200"
                  : ""
              )}
              style={mode === 'after' ? { color: colors.primary } : {}}
              >
                <strong>Outcome:</strong> {currentData.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            size="lg"
            className="gap-2"
            style={{ backgroundColor: colors.primary }}
            asChild
          >
            <a href={timeline.ctaLink} download>
              <Download className="w-5 h-5" />
              {timeline.ctaText}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
