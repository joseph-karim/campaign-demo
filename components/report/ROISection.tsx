"use client";

import { useState, useMemo, useCallback } from 'react';
import { usePersona } from '@/contexts/PersonaContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Calculator, Mail, Check, DollarSign, Clock } from 'lucide-react';
import type { PersonaId } from '@/types/report';

const colorMap: Record<PersonaId, { primary: string; light: string }> = {
  'primary-care': { primary: '#2563EB', light: 'bg-blue-50 dark:bg-blue-950/20' },
  'neurology': { primary: '#7C3AED', light: 'bg-violet-50 dark:bg-violet-950/20' },
  'mental-health': { primary: '#059669', light: 'bg-emerald-50 dark:bg-emerald-950/20' },
  'corporate-wellness': { primary: '#DC2626', light: 'bg-red-50 dark:bg-red-950/20' },
};

export function ROISection() {
  const { currentPersona, content } = usePersona();
  const { roi, checklist } = content;
  const colors = colorMap[currentPersona];

  // ROI Calculator State
  const [values, setValues] = useState({
    monthlyVisits: roi.defaults.monthlyVisits,
    currentRate: roi.defaults.currentScreeningRate,
    targetRate: roi.defaults.targetScreeningRate,
    revenuePerCase: roi.defaults.revenuePerCase,
  });

  // Email Form State
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Checklist State
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Calculate ROI
  const calculations = useMemo(() => {
    const additionalScreenings = values.monthlyVisits * ((values.targetRate - values.currentRate) / 100);
    const extraBillables = Math.round(additionalScreenings * values.revenuePerCase * 12);
    const timeSavedHours = Math.round((additionalScreenings * 15) / 60);
    
    return {
      extraBillables,
      timeSavedHours,
      monthlyAdditions: Math.round(additionalScreenings),
    };
  }, [values]);

  // Handle Email Submit
  const handleEmailSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    setEmailError('');
    setEmailSubmitted(true);
    // In production, this would send to an API
    console.log('Email submitted:', email);
  }, [email]);

  // Toggle checklist item
  const toggleItem = useCallback((phase: string, item: string) => {
    const key = `${phase}-${item}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* ROI Calculator */}
          <div className="animate-fade-in-left">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: colors.primary }}
              >
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {roi.headline}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {roi.description}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 space-y-6">
              {/* Monthly Visits */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <span>Monthly Cognitive-Related Visits</span>
                  <span style={{ color: colors.primary }}>{values.monthlyVisits}</span>
                </label>
                <Slider
                  value={[values.monthlyVisits]}
                  onValueChange={([v]) => setValues(prev => ({ ...prev, monthlyVisits: v }))}
                  min={50}
                  max={2000}
                  step={50}
                  className="cursor-pointer"
                />
              </div>

              {/* Current Screening Rate */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <span>Current Screening Rate</span>
                  <span style={{ color: colors.primary }}>{values.currentRate}%</span>
                </label>
                <Slider
                  value={[values.currentRate]}
                  onValueChange={([v]) => setValues(prev => ({ ...prev, currentRate: v }))}
                  min={0}
                  max={50}
                  step={5}
                  className="cursor-pointer"
                />
              </div>

              {/* Target Screening Rate */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <span>Target Screening Rate</span>
                  <span style={{ color: colors.primary }}>{values.targetRate}%</span>
                </label>
                <Slider
                  value={[values.targetRate]}
                  onValueChange={([v]) => setValues(prev => ({ ...prev, targetRate: v }))}
                  min={10}
                  max={100}
                  step={5}
                  className="cursor-pointer"
                />
              </div>

              {/* Revenue Per Case */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <span>Revenue Per Assessment</span>
                  <span style={{ color: colors.primary }}>${values.revenuePerCase}</span>
                </label>
                <Slider
                  value={[values.revenuePerCase]}
                  onValueChange={([v]) => setValues(prev => ({ ...prev, revenuePerCase: v }))}
                  min={50}
                  max={500}
                  step={10}
                  className="cursor-pointer"
                />
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className={cn("p-4 rounded-xl", colors.light)}>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <DollarSign className="w-4 h-4" />
                    Extra Annual Revenue
                  </div>
                  <div 
                    className="text-3xl font-bold"
                    style={{ color: colors.primary }}
                  >
                    ${calculations.extraBillables.toLocaleString()}
                  </div>
                </div>

                <div className={cn("p-4 rounded-xl", colors.light)}>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <Clock className="w-4 h-4" />
                    Monthly Hours Saved
                  </div>
                  <div 
                    className="text-3xl font-bold"
                    style={{ color: colors.primary }}
                  >
                    {calculations.timeSavedHours}
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                +{calculations.monthlyAdditions} additional screenings per month
              </p>
            </div>
          </div>

          {/* 90-Day Checklist */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {checklist.headline}
            </h3>

            <div className="space-y-6">
              {checklist.phases.map((phase, phaseIndex) => (
                <div 
                  key={phaseIndex}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {phase.phase}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {phase.weeks}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {phase.items.map((item, itemIndex) => {
                      const key = `${phase.phase}-${item}`;
                      const isChecked = checkedItems[key] || false;
                      
                      return (
                        <div 
                          key={itemIndex}
                          className="flex items-start gap-3 cursor-pointer"
                          onClick={() => toggleItem(phase.phase, item)}
                        >
                          <Checkbox 
                            checked={isChecked}
                            className="mt-0.5"
                            style={isChecked ? { backgroundColor: colors.primary, borderColor: colors.primary } : {}}
                          />
                          <span className={cn(
                            "text-sm transition-all",
                            isChecked 
                              ? "text-gray-400 line-through" 
                              : "text-gray-700 dark:text-gray-300"
                          )}>
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Email Form */}
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              {emailSubmitted ? (
                <div className="text-center py-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white">Check your inbox!</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We&apos;ve sent the 90-day implementation plan to {email}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Get the full 90-day plan as a PDF
                    </label>
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={cn(
                          "flex-1",
                          emailError && "border-red-500 focus:ring-red-500"
                        )}
                      />
                      <Button 
                        type="submit"
                        className="gap-2"
                        style={{ backgroundColor: colors.primary }}
                      >
                        <Mail className="w-4 h-4" />
                        Send
                      </Button>
                    </div>
                    {emailError && (
                      <p className="text-sm text-red-500 mt-1">{emailError}</p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
