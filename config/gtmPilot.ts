import type { PilotConfig, PilotOutput, IcpType } from '@/types/gtm';

type PilotScope = 'small' | 'medium' | 'large';
type UseCase = 'dementia' | 'adhd' | 'mixed';
type Integration = 'light' | 'medium' | 'deep';

interface PilotTemplate {
  duration: Record<PilotScope, string>;
  creyosRoles: Record<PilotScope, string[]>;
  clientRoles: Record<IcpType, string[]>;
  objectives: Record<UseCase, string[]>;
  exitCriteria: Record<Integration, string[]>;
}

export const pilotTemplates: PilotTemplate = {
  duration: {
    small: '6–9 months',
    medium: '9–12 months',
    large: '12–18 months'
  },
  creyosRoles: {
    small: [
      '0.25 FTE Clinical PM',
      '0.15 FTE SE / Integration',
      '0.1 FTE Data Analyst (as needed)'
    ],
    medium: [
      '0.5 FTE Clinical PM',
      '0.25 FTE SE / Integration',
      '0.15 FTE Data Analyst',
      'Executive sponsor check-ins quarterly'
    ],
    large: [
      '0.75 FTE Clinical PM (dedicated)',
      '0.5 FTE SE / Integration',
      '0.25 FTE Data Analyst',
      'Executive sponsor monthly',
      'Clinical advisory support'
    ]
  },
  clientRoles: {
    mega_idn: [
      'Executive sponsor (VP or above)',
      '2–3 physician champions (per region)',
      '1 nurse manager per site',
      '1 IT project manager',
      '1 analytics/data lead',
      'Quality/compliance liaison'
    ],
    academic: [
      'Department chair or division chief sponsor',
      '1–2 physician champions',
      '1 research coordinator (if research component)',
      '1 IT analyst',
      '1 nurse manager per clinic',
      'IRB coordinator (if research)'
    ],
    regional: [
      'CMO or service line VP sponsor',
      '1 physician champion per site',
      '1 nurse manager per site',
      '1 IT contact',
      'Quality improvement lead'
    ]
  },
  objectives: {
    dementia: [
      'Raise AWV cognitive structured screening from baseline (e.g., 10%) to target (e.g., 50–60%) in pilot sites.',
      'Increase early-stage (MCI/early dementia) diagnosis rate per 1,000 seniors by X%.',
      'Improve neuropsych referral appropriateness (% of referrals with objective cognitive data).',
      'Shorten time from first complaint to documented cognitive diagnosis by 2–3 months on average.',
      'Achieve >80% clinician documentation compliance with cognitive results.'
    ],
    adhd: [
      'Standardize ADHD assessment with objective cognitive testing for all new evaluations.',
      'Reduce diagnostic uncertainty (% of evaluations with clear diagnostic recommendation).',
      'Decrease time from referral to completed evaluation by X%.',
      'Improve treatment response monitoring with objective pre/post data.',
      'Achieve >90% patient completion rate for digital assessments.'
    ],
    mixed: [
      'Establish standardized cognitive assessment across multiple use cases (dementia, ADHD, other).',
      'Improve screening coverage across target populations (e.g., 65+ for dementia, referrals for ADHD).',
      'Demonstrate workflow efficiency across primary care, neurology, and psychiatry.',
      'Create unified cognitive data layer across service lines.',
      'Prove ROI across multiple use cases for enterprise expansion.'
    ]
  },
  exitCriteria: {
    light: [
      '>50% of target patients in pilot sites receive structured cognitive assessment.',
      'Clinician NPS for assessment workflow is neutral or positive.',
      'Clear documentation of assessment results in patient records.',
      'Qualitative feedback supports workflow fit.',
      'If met: Move to medium integration for expanded pilot.'
    ],
    medium: [
      '>60% of AWVs/target visits in pilot sites have structured cognitive assessment documented in EHR.',
      'Positive NPS from clinicians on workload impact (<10 min added per assessment).',
      'Clear signal on detection uplift vs. baseline (e.g., 20% more MCI identified).',
      'IT confirms integration is stable and supportable.',
      'If met: System commits to plan network-wide rollout within next FY.'
    ],
    deep: [
      '>75% of target population assessed with cognitive battery.',
      'Full EHR integration with automated documentation and order flows.',
      'Measurable clinical outcome improvements (diagnosis rates, referral quality).',
      'Demonstrated ROI (time savings, revenue impact, quality scores).',
      'If met: Multi-year enterprise agreement; expansion to additional regions/use cases.'
    ]
  }
};

export function calculatePilotOutput(config: PilotConfig): PilotOutput {
  const { accountType, scope, useCase, integration } = config;
  
  return {
    duration: pilotTemplates.duration[scope],
    creyosRoles: pilotTemplates.creyosRoles[scope],
    clientRoles: pilotTemplates.clientRoles[accountType],
    objectives: pilotTemplates.objectives[useCase],
    exitCriteria: pilotTemplates.exitCriteria[integration]
  };
}

export const scopeDescriptions = {
  small: '2 sites (1 PCP + 1 specialty)',
  medium: '3–5 sites',
  large: '6–10 sites'
};

export const useCaseDescriptions = {
  dementia: 'Dementia / Cognitive Impairment',
  adhd: 'ADHD / Mental Health',
  mixed: 'Mixed (PC + Neuro + Psych)'
};

export const integrationDescriptions = {
  light: 'PDF reports and manual workflow',
  medium: 'EHR flowsheets & smartphrases',
  deep: 'Full orderables + automated documentation'
};

export const accountTypeDescriptions = {
  mega_idn: 'Mega-IDN (Kaiser, HCA, etc.)',
  academic: 'Academic System (Mayo, Cleveland Clinic, etc.)',
  regional: 'Regional IDN (Intermountain, Geisinger, etc.)'
};

export default {
  templates: pilotTemplates,
  calculateOutput: calculatePilotOutput,
  descriptions: {
    scope: scopeDescriptions,
    useCase: useCaseDescriptions,
    integration: integrationDescriptions,
    accountType: accountTypeDescriptions
  }
};

