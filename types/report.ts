// Persona types
export type PersonaId = 'primary-care' | 'neurology' | 'mental-health' | 'corporate-wellness';

export interface Persona {
  id: PersonaId;
  name: string;
  shortName: string;
  icon: string;
  color: string;
}

// Hero section
export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaAsset: string;
  stats: {
    label: string;
    diagnosed: number;
    undiagnosed: number;
    unit: string;
  };
}

// Detection Gap section
export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface DetectionGapTab {
  id: string;
  label: string;
  description: string;
  chartData: ChartDataPoint[];
  insight: string;
}

export interface DetectionGapContent {
  narrative: string;
  tabs: DetectionGapTab[];
  ctaText: string;
  ctaAsset: string;
}

// Tool Lens section
export interface ToolComparison {
  tool: string;
  whatYouGet: string[];
  whatYouMiss: string[];
}

export interface ToolLensContent {
  headline: string;
  description: string;
  tools: ToolComparison[];
}

// Timeline section
export interface TimelineStep {
  time: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineContent {
  headline: string;
  before: {
    title: string;
    steps: TimelineStep[];
    outcome: string;
  };
  after: {
    title: string;
    steps: TimelineStep[];
    outcome: string;
  };
  ctaText: string;
  ctaLink: string;
}

// Outcomes Dashboard
export interface MetricCard {
  id: string;
  stat: string;
  label: string;
  context: string;
  impact: string;
  tags: string[];
  source?: string;
}

export interface OutcomesContent {
  headline: string;
  subheadline: string;
  metrics: MetricCard[];
  ctaText: string;
  ctaAsset: string;
}

// ROI Calculator
export interface ROIContent {
  headline: string;
  description: string;
  defaults: {
    monthlyVisits: number;
    currentScreeningRate: number;
    targetScreeningRate: number;
    revenuePerCase: number;
  };
  formulas: {
    extraBillables: string;
    timeSaved: string;
  };
}

// 90-Day Checklist
export interface ChecklistPhase {
  phase: string;
  weeks: string;
  items: string[];
}

export interface ChecklistContent {
  headline: string;
  phases: ChecklistPhase[];
  ctaText: string;
}

// Final CTA
export interface FinalCTACard {
  personaId: PersonaId;
  headline: string;
  description: string;
  primaryCta: {
    text: string;
    asset: string;
  };
  secondaryCta: {
    text: string;
    link: string;
  };
}

export interface FinalCTAContent {
  headline: string;
  cards: FinalCTACard[];
}

// Complete persona content
export interface PersonaContent {
  hero: HeroContent;
  detectionGap: DetectionGapContent;
  toolLens: ToolLensContent;
  timeline: TimelineContent;
  outcomes: OutcomesContent;
  roi: ROIContent;
  checklist: ChecklistContent;
}

// Report metrics structure
export interface ReportMetrics {
  personas: Persona[];
  content: Record<PersonaId, PersonaContent>;
  shared: {
    finalCTA: FinalCTAContent;
    filterTags: string[];
  };
}

