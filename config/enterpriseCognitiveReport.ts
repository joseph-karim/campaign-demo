import type { EnterpriseConfig, MacroForce, StakeholderView, ExecPillar, HeroStats } from '@/types/enterprise';

export const heroStats: HeroStats = {
  dementiaPrevalence: {
    value: 57,
    unit: 'million',
    year: 2021,
    label: 'people with dementia worldwide today; ~10M new cases annually',
    sourceName: 'WHO',
    sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/dementia'
  },
  undiagnosedPct: {
    value: 75,
    unit: 'percent',
    year: 2021,
    label: 'of dementia cases globally go undiagnosed',
    sourceName: 'World Alzheimer Report',
    sourceUrl: 'https://www.alzint.org/news-events/news/over-41-million-cases-of-dementia-go-undiagnosed-across-the-globe-world-alzheimer-report-reveals/'
  },
  healthcareMarketSize: {
    value2023: 5.2,
    value2030: 26.1,
    unit: 'billion USD',
    sourceName: 'Grand View Research',
    sourceUrl: 'https://www.grandviewresearch.com/industry-analysis/cognitive-assessment-training-healthcare-market',
    cagr: '~26%'
  }
};

export const stakeholderViews: StakeholderView[] = [
  {
    id: 'clinical-quality',
    label: 'Clinical Quality',
    message: "You're judged on early detection, guideline adherence, and avoidable hospitalizations."
  },
  {
    id: 'population-health',
    label: 'Population Health / Value-Based Care',
    message: 'Cognitive impairment drives falls, polypharmacy, and readmissions across your attributed lives.'
  },
  {
    id: 'service-line',
    label: 'Service Line Leader',
    message: 'Neuro and mental health clinics are bottlenecked by slow, manual testing.'
  },
  {
    id: 'cio',
    label: 'Chief Digital / CIO',
    message: 'You need something that actually standardizes across EHRs and sites without custom hardware.'
  }
];

export const macroForces: MacroForce[] = [
  {
    id: 'demographics',
    title: 'Demographics & Disease Burden',
    shortDescription: 'Aging populations drive exponential cognitive risk.',
    icon: 'users',
    expandedContent: [
      'Global dementia rising from 57M in 2021 to ~139M by 2050.',
      'IDNs disproportionately serve older, multi-morbid patients.',
      'ADHD and other cognitive conditions increasingly recognized across all age groups.'
    ],
    enterpriseImplication: 'Uncontrolled cognitive impairment drives readmissions, long LOS, and caregiver strain across your network.'
  },
  {
    id: 'regulation',
    title: 'Regulation & Value-Based Care',
    shortDescription: 'Quality metrics and AWVs are increasingly tied to cognitive evaluation.',
    icon: 'shield-check',
    expandedContent: [
      'Guidelines and payers pushing cognitive screening in primary care and long-term care.',
      'Risk-based contracts care about falls, dementia-related complications, and long-term cost curves.',
      'CMS and commercial payers tracking cognitive screening rates.'
    ],
    enterpriseImplication: 'Networks need standardized, auditable processes at scale to meet quality metrics and avoid penalties.'
  },
  {
    id: 'workforce',
    title: 'Workforce & Burnout',
    shortDescription: 'You cannot throw more neuropsychologists at the problem.',
    icon: 'user-x',
    expandedContent: [
      "MMSE/MoCA still heavily used, but they're time-consuming, manual, and poorly suited for telehealth.",
      'There is a structural shortage of neuropsych and geriatric clinicians.',
      'Clinician burnout is at all-time highs; adding manual workflows makes it worse.'
    ],
    enterpriseImplication: 'You need workflows that can be run by front-line staff, backed by digital tools that scale.'
  },
  {
    id: 'technology',
    title: 'Technology & Digital Front Door',
    shortDescription: 'Digital, AI-enabled assessment is now mainstream market.',
    icon: 'cpu',
    expandedContent: [
      'Cognitive assessment & training market growing 16–26% CAGR to US$20–31B by 2030.',
      'AI-enabled, culturally fair, non-literacy-biased tools are emerging and well-accepted by patients.',
      'Remote and hybrid care models require digital-first cognitive assessment.'
    ],
    enterpriseImplication: 'You can build cognitive as a standard digital service across in-person and remote care.'
  }
];

export const execPillars: ExecPillar[] = [
  {
    id: 'strategic-fit',
    title: 'Strategic Fit',
    bullets: [
      'Standardizes a previously ad-hoc, high-risk domain (cognition) across your entire network.',
      'Aligned with dementia strategies, mental health access, and value-based care goals.'
    ],
    details: [
      'Cognitive assessment becomes a network-wide capability, not a clinic-by-clinic decision.',
      'Supports multiple strategic initiatives: aging population, mental health parity, quality improvement.',
      'Creates foundation for population-level cognitive health management.',
      'Enables consistent patient experience across all care settings.'
    ]
  },
  {
    id: 'operational-reality',
    title: 'Operational Reality',
    bullets: [
      'Deployable without proprietary hardware.',
      'Configurable protocols for each service line.',
      'Designed to be run by front-line staff, not only specialists.'
    ],
    details: [
      'Web-based platform works on any device – tablets, computers, patient smartphones.',
      'Protocol templates for dementia, ADHD, concussion, and mental health screening.',
      'Training designed for MAs, nurses, and care coordinators.',
      'EHR-agnostic integration via standard APIs (FHIR, HL7).'
    ]
  },
  {
    id: 'enterprise-upside',
    title: 'Enterprise Upside',
    bullets: [
      'More complete diagnosis capture in high-cost cohorts.',
      'Better referral triage and use of scarce neuropsych capacity.',
      'Foundation for research, AI, and population-level cognitive risk management.'
    ],
    details: [
      'Early detection reduces downstream costs from falls, hospitalizations, and complications.',
      'Digital triage means specialists see the right patients, not the loudest complaints.',
      'Aggregated data enables research partnerships and quality improvement initiatives.',
      'AI-ready infrastructure for future predictive risk scoring.'
    ]
  }
];

export const enterpriseConfig: EnterpriseConfig = {
  hero: {
    headline: 'Your network is flying blind on cognitive risk.',
    subheadline: 'Global dementia burden is rising toward ~57 million people today and millions more each year. Up to 75% of cases go undiagnosed. At enterprise scale, that\'s tens of thousands of patients in your system with unmanaged cognitive impairment and downstream cost.',
    body: 'The aging population, value-based care pressures, and quality metrics are converging. Your network needs standardized, digital, repeatable cognitive assessment across sites – not fragmented paper tests in isolated clinics.',
    stakeholderViews,
    stats: heroStats
  },
  macroForces,
  execPillars
};

export default enterpriseConfig;

