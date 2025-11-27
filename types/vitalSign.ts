// Cognitive Vital Sign Page Types

export type PersonaType = 'clinician' | 'staff' | 'manager';
export type VisitType = 'awv' | 'memory' | 'adhd';
export type RiskLevel = 'low' | 'moderate' | 'high';

export interface PersonaContent {
  clinician: string;
  staff: string;
  manager: string;
}

export interface HeroContent {
  headline: string;
  subhead: string;
  body: string[];
  statusQuo: {
    label: string;
    caption: string;
    tooltip: string;
  };
  newApproach: {
    label: string;
    caption: string;
    tooltip: string;
  };
}

export interface VisitStep {
  id: string;
  title: string;
  text: string | PersonaContent;
  matchingStepId?: string;
}

export interface VisitFlow {
  id: VisitType;
  name: string;
  statusQuo: VisitStep[];
  withVitalSign: VisitStep[];
}

export interface Pillar {
  id: string;
  icon: string;
  tagline: string;
  preview: string | PersonaContent;
  expanded: {
    bullets: string[];
    example?: string | PersonaContent;
    beforeAfter?: {
      role: string;
      before: string;
      after: string;
    }[];
  };
}

export interface ReportRegion {
  id: string;
  name: string;
  whatItIs: string;
  whatToLookFor: string;
  typicalThinking: string[];
}

export interface DecisionRow {
  id: string;
  title: string;
  vignette: string;
  cells: {
    low: string;
    moderate: string;
    high: string;
  };
  patientScript?: {
    low?: string;
    moderate?: string;
    high?: string;
  };
}

export interface WorkflowStep {
  id: string;
  text: string;
  tip?: string;
}

export interface WorkflowLane {
  id: string;
  name: string;
  color: string;
  steps: WorkflowStep[];
}

export interface SummaryBullet {
  number: number;
  text: string;
}

