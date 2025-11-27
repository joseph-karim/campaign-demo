"use client";

import { useState, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { Calculator, Users, Brain, TrendingUp, UserCheck } from 'lucide-react';
import { valueScenarioDefaults, valueScenarioRanges } from '@/config/valueScenario';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function ValueScenarioExplorer() {
  const [values, setValues] = useState({
    hospitals: valueScenarioDefaults.hospitals,
    seniorsPerHospital: valueScenarioDefaults.seniorsPerHospital,
    currentScreeningRate: valueScenarioDefaults.currentScreeningRate,
    targetScreeningRate: valueScenarioDefaults.targetScreeningRate,
    detectionUplift: valueScenarioDefaults.detectionUplift,
  });

  const calculations = useMemo(() => {
    const totalSeniors = values.hospitals * values.seniorsPerHospital;
    const currentScreened = totalSeniors * (values.currentScreeningRate / 100);
    const targetScreened = totalSeniors * (values.targetScreeningRate / 100);
    const additionalScreened = targetScreened - currentScreened;
    
    // Assume 15% prevalence of cognitive impairment in 65+
    const prevalence = valueScenarioDefaults.prevalenceRate / 100;
    
    // Current detection (assume current tools detect only 40% of actual impairment)
    const currentDetectionRate = 0.4;
    const currentDetected = currentScreened * prevalence * currentDetectionRate;
    
    // After standardization (detection uplift improves detection)
    const improvedDetectionRate = currentDetectionRate + (values.detectionUplift / 100);
    const afterDetected = targetScreened * prevalence * improvedDetectionRate;
    
    const incrementalDetected = afterDetected - currentDetected;
    
    // Neuropsych equivalence
    const assessmentsPerNeuropsych = valueScenarioDefaults.assessmentsPerNeuropsych;
    const neuropsychEquivalent = Math.round(additionalScreened / assessmentsPerNeuropsych);

    return {
      totalSeniors,
      currentScreened: Math.round(currentScreened),
      targetScreened: Math.round(targetScreened),
      additionalScreened: Math.round(additionalScreened),
      currentDetected: Math.round(currentDetected),
      afterDetected: Math.round(afterDetected),
      incrementalDetected: Math.round(incrementalDetected),
      neuropsychEquivalent,
      atRiskPopulation: Math.round(totalSeniors * prevalence),
    };
  }, [values]);

  const chartData = [
    {
      name: 'Current',
      detected: calculations.currentDetected,
      undetected: calculations.atRiskPopulation - calculations.currentDetected,
    },
    {
      name: 'After Standardization',
      detected: calculations.afterDetected,
      undetected: calculations.atRiskPopulation - calculations.afterDetected,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            Value Scenario Explorer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What Happens Across a {values.hospitals}-Hospital Network?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore the impact of standardizing cognitive assessment at enterprise scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-8 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Configure Your Scenario
            </h3>

            {/* Number of Hospitals */}
            <div>
              <label className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                <span>Number of Hospitals</span>
                <span className="text-blue-500 font-bold">{values.hospitals}</span>
              </label>
              <Slider
                value={[values.hospitals]}
                onValueChange={([v]) => setValues(prev => ({ ...prev, hospitals: v }))}
                min={valueScenarioRanges.hospitals.min}
                max={valueScenarioRanges.hospitals.max}
                step={valueScenarioRanges.hospitals.step}
              />
            </div>

            {/* Seniors per Hospital */}
            <div>
              <label className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                <span>Average Annual Seniors (65+) per Hospital</span>
                <span className="text-blue-500 font-bold">{values.seniorsPerHospital.toLocaleString()}</span>
              </label>
              <Slider
                value={[values.seniorsPerHospital]}
                onValueChange={([v]) => setValues(prev => ({ ...prev, seniorsPerHospital: v }))}
                min={valueScenarioRanges.seniorsPerHospital.min}
                max={valueScenarioRanges.seniorsPerHospital.max}
                step={valueScenarioRanges.seniorsPerHospital.step}
              />
            </div>

            {/* Current Screening Rate */}
            <div>
              <label className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                <span>Current % Receiving Any Cognitive Screen</span>
                <span className="text-orange-500 font-bold">{values.currentScreeningRate}%</span>
              </label>
              <Slider
                value={[values.currentScreeningRate]}
                onValueChange={([v]) => setValues(prev => ({ ...prev, currentScreeningRate: v }))}
                min={valueScenarioRanges.currentScreeningRate.min}
                max={valueScenarioRanges.currentScreeningRate.max}
                step={valueScenarioRanges.currentScreeningRate.step}
              />
            </div>

            {/* Target Screening Rate */}
            <div>
              <label className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                <span>Target % with Standardized Digital Screening</span>
                <span className="text-emerald-500 font-bold">{values.targetScreeningRate}%</span>
              </label>
              <Slider
                value={[values.targetScreeningRate]}
                onValueChange={([v]) => setValues(prev => ({ ...prev, targetScreeningRate: v }))}
                min={valueScenarioRanges.targetScreeningRate.min}
                max={valueScenarioRanges.targetScreeningRate.max}
                step={valueScenarioRanges.targetScreeningRate.step}
              />
            </div>

            {/* Detection Uplift */}
            <div>
              <label className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                <span>Detection Uplift vs Current Tools</span>
                <span className="text-violet-500 font-bold">+{values.detectionUplift} pts</span>
              </label>
              <Slider
                value={[values.detectionUplift]}
                onValueChange={([v]) => setValues(prev => ({ ...prev, detectionUplift: v }))}
                min={valueScenarioRanges.detectionUplift.min}
                max={valueScenarioRanges.detectionUplift.max}
                step={valueScenarioRanges.detectionUplift.step}
              />
            </div>
          </div>

          {/* Outputs */}
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/20">
                <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-2">
                  <Users className="w-4 h-4" />
                  Additional Screened
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  ~{(calculations.additionalScreened / 1000).toFixed(0)}K
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  seniors per year
                </p>
              </div>

              <div className="bg-emerald-500/10 rounded-2xl p-6 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 mb-2">
                  <Brain className="w-4 h-4" />
                  Incremental Detected
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  ~{(calculations.incrementalDetected / 1000).toFixed(1)}K
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  additional patients identified with probable impairment
                </p>
              </div>

              <div className="bg-violet-500/10 rounded-2xl p-6 border border-violet-500/20">
                <div className="flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400 mb-2">
                  <UserCheck className="w-4 h-4" />
                  Neuropsych Equivalent
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {calculations.neuropsychEquivalent}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  FTE neuropsychologists worth of assessments
                </p>
              </div>

              <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-500/20">
                <div className="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400 mb-2">
                  <TrendingUp className="w-4 h-4" />
                  At-Risk Population
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  ~{(calculations.atRiskPopulation / 1000).toFixed(0)}K
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  seniors with estimated cognitive impairment
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                Cognitive Impairment Detection
              </h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} layout="vertical">
                    <XAxis type="number" domain={[0, calculations.atRiskPopulation]} tickFormatter={(v) => `${(v/1000).toFixed(0)}K`} />
                    <YAxis type="category" dataKey="name" width={140} />
                    <Tooltip 
                      formatter={(value: number) => [`${(value/1000).toFixed(1)}K patients`, '']}
                      labelClassName="font-semibold"
                    />
                    <Legend />
                    <Bar dataKey="detected" stackId="a" fill="#10B981" name="Detected" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="undetected" stackId="a" fill="#E5E7EB" name="Undetected" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Downstream Impact */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
              <h4 className="text-sm font-semibold mb-4">Potential Downstream Impact</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  Fewer preventable falls and fall-related hospitalizations
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  Fewer avoidable admissions from unmanaged cognitive decline
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  Better allocation of scarce neuropsych capacity to complex cases
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  Earlier care planning conversations with patients and families
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

