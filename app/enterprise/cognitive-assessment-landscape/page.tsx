"use client";

import {
  EnterpriseHero,
  MacroForcesPanel,
  CompetitiveQuadrant,
  ValueScenarioExplorer,
  EnterpriseRolloutTimeline,
  SalesAndPartnershipApproach,
  SummaryForExecs,
} from '@/components/enterprise';
import { CreyosHeader, CreyosFooter } from '@/components/shared';

export default function EnterpriseCognitiveAssessmentLandscapePage() {
  return (
    <div className="min-h-screen bg-[var(--creyos-navy)]">
      {/* Header */}
      <CreyosHeader variant="dark" />
      
      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Section 1: Enterprise Hero */}
      <EnterpriseHero />

      {/* Section 2: Macro Forces Panel */}
      <MacroForcesPanel />

      {/* Section 3: Competitive Quadrant */}
      <CompetitiveQuadrant />

      {/* Section 4: Value Scenario Explorer */}
      <ValueScenarioExplorer />

      {/* Section 5: Enterprise Rollout Timeline */}
      <EnterpriseRolloutTimeline />

      {/* Section 6: Sales & Partnership Approach */}
      <SalesAndPartnershipApproach />

      {/* Section 7: Summary for Execs */}
      <SummaryForExecs />

      {/* Footer */}
      <CreyosFooter variant="dark" />
    </div>
  );
}
