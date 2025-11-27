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

export const metadata = {
  title: 'Enterprise GTM Blueprint | Creyos Internal',
  description: 'Internal GTM planning tool for enterprise health system strategy',
};

export default function EnterpriseGtmBlueprintPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Internal Badge */}
      <div className="fixed top-4 left-4 z-50">
        <div className="px-3 py-1.5 bg-red-500/20 border border-red-500/40 rounded-full text-red-400 text-xs font-semibold uppercase tracking-wider">
          Internal Only
        </div>
      </div>

      {/* Navigation Helper */}
      <nav className="fixed top-4 right-4 z-50 hidden xl:block">
        <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-xl p-3 text-xs space-y-1.5">
          <a href="#hero" className="block text-slate-400 hover:text-white transition-colors">Overview</a>
          <a href="#icp" className="block text-slate-400 hover:text-white transition-colors">ICP & Personas</a>
          <a href="#triggers" className="block text-slate-400 hover:text-white transition-colors">Trigger Radar</a>
          <a href="#blueprint" className="block text-slate-400 hover:text-white transition-colors">Account Blueprint</a>
          <a href="#channels" className="block text-slate-400 hover:text-white transition-colors">Channel Matrix</a>
          <a href="#pilot" className="block text-slate-400 hover:text-white transition-colors">Pilot Configurator</a>
          <a href="#timeline" className="block text-slate-400 hover:text-white transition-colors">Execution Timeline</a>
          <a href="#storyboard" className="block text-slate-400 hover:text-white transition-colors">Kaiser Storyboard</a>
          <a href="#summary" className="block text-slate-400 hover:text-white transition-colors">Summary for Execs</a>
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
      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            Creyos Enterprise GTM Blueprint • Internal Planning Document
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Not for external distribution
          </p>
        </div>
      </footer>
    </main>
  );
}

