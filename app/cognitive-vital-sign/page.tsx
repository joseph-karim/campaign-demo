import { VitalSignPersonaProvider } from '@/contexts/VitalSignPersonaContext';
import {
  VitalSignHero,
  PersonaViewSwitcher,
  VisitFlowComparator,
  ThreePillarsExplorer,
  ReportWalkthrough,
  DecisionPlaybook,
  ClinicQuickStart,
  SummaryStrip
} from '@/components/vital-sign';
import { CreyosHeader, CreyosFooter } from '@/components/shared';

export const metadata = {
  title: 'From Gut Feel to a Cognitive Vital Sign | Creyos',
  description: 'Turn cognitive risk into a standardized vital sign any clinic can capture and act on.',
};

export default function CognitiveVitalSignPage() {
  return (
    <VitalSignPersonaProvider>
      <main className="min-h-screen bg-[var(--creyos-navy)]">
        {/* Header */}
        <CreyosHeader variant="dark" />
        {/* Hero */}
        <VitalSignHero />

        {/* Persona Switcher (sticky) */}
        <PersonaViewSwitcher />

        {/* Visit Flow Comparison */}
        <VisitFlowComparator />

        {/* Three Pillars */}
        <ThreePillarsExplorer />

        {/* Report Walkthrough */}
        <ReportWalkthrough />

        {/* Decision Playbook */}
        <DecisionPlaybook />

        {/* Clinic Quick Start */}
        <ClinicQuickStart />

        {/* Summary Strip */}
        <SummaryStrip />

        {/* Footer */}
        <CreyosFooter variant="dark" />
      </main>
    </VitalSignPersonaProvider>
  );
}

