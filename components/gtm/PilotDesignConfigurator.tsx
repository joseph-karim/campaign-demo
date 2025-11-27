'use client';

import { useState } from 'react';
import { calculatePilotOutput, scopeDescriptions, useCaseDescriptions, integrationDescriptions, accountTypeDescriptions } from '@/config/gtmPilot';
import type { IcpType, PilotConfig } from '@/types/gtm';
import { Settings, Clock, Users, Target, CheckCircle, ChevronDown } from 'lucide-react';

export function PilotDesignConfigurator() {
  const [config, setConfig] = useState<PilotConfig>({
    accountType: 'regional',
    scope: 'medium',
    useCase: 'dementia',
    integration: 'medium'
  });

  const output = calculatePilotOutput(config);

  return (
    <section className="bg-slate-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pilot Design Configurator
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Configure a pilot design to see recommended duration, resources, objectives, and exit criteria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Inputs */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Configuration</h3>
            </div>

            <div className="space-y-6">
              {/* Account Type */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Pilot Account Type
                </label>
                <div className="relative">
                  <select
                    value={config.accountType}
                    onChange={(e) => setConfig(prev => ({ ...prev, accountType: e.target.value as IcpType }))}
                    className="appearance-none w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                  >
                    {Object.entries(accountTypeDescriptions).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Scope */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Pilot Scope
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['small', 'medium', 'large'] as const).map(scope => (
                    <button
                      key={scope}
                      onClick={() => setConfig(prev => ({ ...prev, scope }))}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        config.scope === scope
                          ? 'bg-amber-500 text-slate-900'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-700'
                      }`}
                    >
                      <div className="capitalize font-semibold">{scope}</div>
                      <div className="text-xs opacity-70 mt-0.5">{scopeDescriptions[scope]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Use Case */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Primary Use Case
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['dementia', 'adhd', 'mixed'] as const).map(useCase => (
                    <button
                      key={useCase}
                      onClick={() => setConfig(prev => ({ ...prev, useCase }))}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        config.useCase === useCase
                          ? 'bg-amber-500 text-slate-900'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-700'
                      }`}
                    >
                      <div className="capitalize font-semibold">{useCase}</div>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2">{useCaseDescriptions[config.useCase]}</p>
              </div>

              {/* Integration Level */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Integration Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['light', 'medium', 'deep'] as const).map(level => (
                    <button
                      key={level}
                      onClick={() => setConfig(prev => ({ ...prev, integration: level }))}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        config.integration === level
                          ? 'bg-amber-500 text-slate-900'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-700'
                      }`}
                    >
                      <div className="capitalize font-semibold">{level}</div>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2">{integrationDescriptions[config.integration]}</p>
              </div>
            </div>
          </div>

          {/* Right: Outputs */}
          <div className="space-y-4">
            {/* Duration */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-emerald-400" />
                <h4 className="font-semibold text-white">Suggested Duration</h4>
              </div>
              <p className="text-2xl font-bold text-emerald-400">{output.duration}</p>
            </div>

            {/* Creyos Roles */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold text-white">Creyos Resource Needs</h4>
              </div>
              <ul className="space-y-2">
                {output.creyosRoles.map((role, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="text-blue-400 mt-0.5">•</span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Roles */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-purple-400" />
                <h4 className="font-semibold text-white">Client Resource Needs</h4>
              </div>
              <ul className="space-y-2">
                {output.clientRoles.map((role, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="text-purple-400 mt-0.5">•</span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            {/* Objectives */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-amber-400" />
                <h4 className="font-semibold text-white">Pilot Objectives</h4>
              </div>
              <ul className="space-y-2">
                {output.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="text-amber-400 mt-0.5">{i + 1}.</span>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exit Criteria */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <h4 className="font-semibold text-white">Exit Criteria for Expansion</h4>
              </div>
              <ul className="space-y-2">
                {output.exitCriteria.map((criteria, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    {criteria}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PilotDesignConfigurator;

