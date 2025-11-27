"use client";

import { PersonaProvider } from '@/contexts/PersonaContext';
import {
  PersonaSelector,
  HeroSection,
  DetectionGapSection,
  ToolLensSection,
  TimelineSection,
  OutcomesSection,
  ROISection,
  FinalCTASection,
} from '@/components/report';

export default function CognitiveAssessmentGapReport() {
  return (
    <PersonaProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950" id="report-content">
        {/* Sticky Persona Selector */}
        <PersonaSelector />
        
        {/* Main Content Sections */}
        <main>
          {/* Section 1: Hero with animated visualization */}
          <HeroSection />
          
          {/* Section 2: Detection Gap with tabbed charts */}
          <DetectionGapSection />
          
          {/* Section 3: Tool Lens toggle comparison */}
          <ToolLensSection />
          
          {/* Section 4: Day-in-the-Life Timeline */}
          <TimelineSection />
          
          {/* Section 5: Outcomes Dashboard */}
          <OutcomesSection />
          
          {/* Section 6: ROI Calculator + 90-Day Checklist */}
          <ROISection />
          
          {/* Section 7: Final CTA Strip */}
          <FinalCTASection />
      </main>
    </div>
    </PersonaProvider>
  );
}
