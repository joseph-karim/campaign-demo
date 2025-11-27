import {
  GtmHeroOverview,
  IcpPersonaMatrix,
  TriggerRadar,
  AccountBlueprintExplorer,
  ChannelAndPlayMatrix,
  PilotDesignConfigurator,
  ExecutionPhaseTimeline,
  KaiserStoryboard,
  SummaryForExecs
} from '@/components/gtm';
import { CreyosHeader, CreyosFooter } from '@/components/shared';

export const metadata = {
  title: 'Enterprise GTM Blueprint | Creyos Internal',
  description: 'Internal GTM planning tool for enterprise health system strategy',
};

export default function EnterpriseGtmBlueprintPage() {
  return (
    <main className="min-h-screen bg-[var(--creyos-navy)]">
      {/* Header */}
      <CreyosHeader variant="dark" />
      
      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Internal Badge */}
      <div className="fixed top-20 left-4 z-40">
        <div className="px-3 py-1.5 bg-[var(--creyos-error)]/20 border border-[var(--creyos-error)]/40 rounded-full text-[var(--creyos-error)] text-xs font-semibold uppercase tracking-wider">
          Internal Only
        </div>
      </div>

      {/* Navigation Helper */}
      <nav className="fixed top-20 right-4 z-40 hidden xl:block">
        <div className="bg-[var(--creyos-navy-light)]/90 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-xs space-y-1.5">
          <a href="#hero" className="block text-[var(--creyos-gray-400)] hover:text-white transition-colors">Overview</a>
          <a href="#icp" className="block text-[var(--creyos-gray-400)] hover:text-white transition-colors">ICP & Personas</a>
          <a href="#triggers" className="block text-[var(--creyos-gray-400)] hover:text-white transition-colors">Trigger Radar</a>
          <a href="#blueprint" className="block text-[var(--creyos-gray-400)] hover:text-white transition-colors">Account Blueprint</a>
          <a href="#channels" className="block text-[var(--creyos-gray-400)] hover:text-white transition-colors">Channel Matrix</a>
          <a href="#pilot" className="block text-[var(--creyos-gray-400)] hover:text-white transition-colors">Pilot Configurator</a>
          <a href="#timeline" className="block text-[var(--creyos-gray-400)] hover:text-white transition-colors">Execution Timeline</a>
          <a href="#storyboard" className="block text-[var(--creyos-gray-400)] hover:text-white transition-colors">Kaiser Storyboard</a>
          <a href="#summary" className="block text-[var(--creyos-gray-400)] hover:text-white transition-colors">Summary for Execs</a>
        </div>
      </nav>

      {/* Sections */}
      <div id="hero">
        <GtmHeroOverview />
      </div>
      
      <div id="icp">
        <IcpPersonaMatrix />
      </div>
      
      <div id="triggers">
        <TriggerRadar />
      </div>
      
      <div id="blueprint">
        <AccountBlueprintExplorer />
      </div>
      
      <div id="channels">
        <ChannelAndPlayMatrix />
      </div>
      
      <div id="pilot">
        <PilotDesignConfigurator />
      </div>
      
      <div id="timeline">
        <ExecutionPhaseTimeline />
      </div>
      
      <div id="storyboard">
        <KaiserStoryboard />
      </div>
      
      <div id="summary">
        <SummaryForExecs />
      </div>

      {/* Footer */}
      <CreyosFooter variant="dark" />
    </main>
  );
}
