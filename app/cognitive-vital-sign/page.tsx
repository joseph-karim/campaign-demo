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

export const metadata = {
  title: 'From Gut Feel to a Cognitive Vital Sign | Creyos',
  description: 'Turn cognitive risk into a standardized vital sign any clinic can capture and act on.',
};

export default function CognitiveVitalSignPage() {
  return (
    <VitalSignPersonaProvider>
      <main className="min-h-screen bg-slate-950">
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
        <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-slate-500 text-sm">
              Creyos • Cognitive Vital Sign
            </p>
            <p className="text-slate-600 text-xs mt-2">
              Making cognitive assessment as routine as blood pressure
            </p>
          </div>
        </footer>
      </main>
    </VitalSignPersonaProvider>
  );
}

