// Enterprise Report Types

export interface MarketStat {
  value: number;
  unit: string;
  year: number;
  sourceName: string;
  sourceUrl: string;
  label?: string;
}

export interface MarketStatRange {
  value2023: number;
  value2030: number;
  unit: string;
  sourceName: string;
  sourceUrl: string;
  cagr?: string;
}

export type StakeholderId = 'clinical-quality' | 'population-health' | 'service-line' | 'cio';

export interface StakeholderView {
  id: StakeholderId;
  label: string;
  message: string;
}

export interface HeroStats {
  dementiaPrevalence: MarketStat;
  undiagnosedPct: MarketStat;
  healthcareMarketSize: MarketStatRange;
}

export interface MacroForce {
  id: string;
  title: string;
  shortDescription: string;
  expandedContent: string[];
  enterpriseImplication: string;
  icon: string;
}

export interface CompetitorTooltips {
  clinical: string;
  deployability: string;
  evidence: string;
}

export interface Competitor {
  id: string;
  name: string;
  type: 'paper' | 'adhd' | 'dementia' | 'broad' | 'research';
  x: number; // 0-100 (breadth of coverage)
  y: number; // 0-100 (deployability)
  tooltips: CompetitorTooltips;
  isCreyos?: boolean;
}

export type QuadrantLens = 'clinical' | 'deployability' | 'evidence';

export interface ValueScenarioDefaults {
  hospitals: number;
  seniorsPerHospital: number;
  currentScreeningRate: number;
  targetScreeningRate: number;
  detectionUplift: number;
  prevalenceRate: number;
  assessmentsPerNeuropsych: number;
}

export interface ValueScenarioRanges {
  hospitals: { min: number; max: number; step: number };
  seniorsPerHospital: { min: number; max: number; step: number };
  currentScreeningRate: { min: number; max: number; step: number };
  targetScreeningRate: { min: number; max: number; step: number };
  detectionUplift: { min: number; max: number; step: number };
}

export interface RolloutPhase {
  id: string;
  phase: number;
  title: string;
  duration: string;
  focus: string;
  elements: string[];
  creyosDelivers: string[];
  healthSystemDoes: string[];
  risks: string[];
  clinicTypes?: string[];
  rolesInvolved?: string[];
}

export interface SwimlaneStage {
  id: string;
  stage: number;
  title: string;
  duration: string;
  creyos: string[];
  clinical: string[];
  it: string[];
  dealShape?: string;
  proofPoints?: string[];
}

export interface ExecPillar {
  id: string;
  title: string;
  bullets: string[];
  details: string[];
}

export interface EnterpriseConfig {
  hero: {
    headline: string;
    subheadline: string;
    body: string;
    stakeholderViews: StakeholderView[];
    stats: HeroStats;
  };
  macroForces: MacroForce[];
  execPillars: ExecPillar[];
}

