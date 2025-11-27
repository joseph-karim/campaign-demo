import type { ValueScenarioDefaults, ValueScenarioRanges, RolloutPhase, SwimlaneStage } from '@/types/enterprise';

export const valueScenarioDefaults: ValueScenarioDefaults = {
  hospitals: 20,
  seniorsPerHospital: 15000,
  currentScreeningRate: 15,
  targetScreeningRate: 60,
  detectionUplift: 20, // percentage points
  prevalenceRate: 15, // % of 65+ with some cognitive impairment
  assessmentsPerNeuropsych: 800 // annual capacity of one neuropsychologist
};

export const valueScenarioRanges: ValueScenarioRanges = {
  hospitals: { min: 5, max: 50, step: 5 },
  seniorsPerHospital: { min: 5000, max: 50000, step: 5000 },
  currentScreeningRate: { min: 0, max: 50, step: 5 },
  targetScreeningRate: { min: 20, max: 100, step: 5 },
  detectionUplift: { min: 0, max: 40, step: 5 }
};

export const rolloutPhases: RolloutPhase[] = [
  {
    id: 'pilot',
    phase: 1,
    title: 'Pilot',
    duration: '3–6 months',
    focus: '1–2 flagship clinics (e.g., memory clinic + one primary care clinic)',
    elements: [
      'Connect to EHR in read-only mode (or manual report upload)',
      'Train a small cohort of clinicians and MAs',
      'Use dementia and ADHD protocols in defined patient segments'
    ],
    creyosDelivers: [
      'Account setup and configuration',
      'Clinical protocol templates',
      'Training materials and live onboarding sessions',
      'Dedicated implementation support'
    ],
    healthSystemDoes: [
      'Identify pilot sites and champions',
      'Provide IT access for integration',
      'Allocate staff time for training',
      'Define success metrics'
    ],
    risks: [
      'Low adoption if champions not engaged',
      'IT delays if security review not started early'
    ],
    clinicTypes: [
      'Memory / cognitive neurology clinic',
      'Primary care (high-volume seniors)',
      'Geriatric medicine',
      'Tele-psych / tele-neurology'
    ]
  },
  {
    id: 'programization',
    phase: 2,
    title: 'Programization',
    duration: '6–12 months',
    focus: 'Create network-standard protocols and governance',
    elements: [
      'AWV dementia screen template',
      'ADHD and concussion pathways',
      'Standard reporting bundle for neuro, psych, primary care',
      'Steering committee and governance documentation'
    ],
    creyosDelivers: [
      'Protocol customization for network standards',
      'Reporting templates and dashboards',
      'Train-the-trainer program',
      'Change management resources'
    ],
    healthSystemDoes: [
      'Form steering committee (service-line leaders, IT, quality)',
      'Draft documentation on "When to test" and "What to do with results"',
      'Approve protocols for clinical use',
      'Communicate program to broader organization'
    ],
    risks: [
      'Governance delays if leadership not aligned',
      'Inconsistent adoption without clear protocols'
    ],
    rolesInvolved: [
      'CMO / Chief Clinical Officer',
      'CMIO',
      'Service line chiefs (Neurology, Psychiatry, Primary Care)',
      'Quality / Population Health leadership',
      'IT / Digital Health leadership'
    ]
  },
  {
    id: 'rollout',
    phase: 3,
    title: 'Network Rollout',
    duration: '12–24 months',
    focus: 'Expand to all primary care sites and key specialty clinics',
    elements: [
      'All primary care sites enabled',
      'Key specialty clinics (pain, sleep, geriatrics)',
      'EHR orderables and documentation',
      'Remote workflows (telehealth + pre-visit testing)'
    ],
    creyosDelivers: [
      'Site-by-site rollout support',
      'EHR integration (order sets, smartphrases, flowsheets)',
      'Remote patient workflow configuration',
      'Ongoing technical support'
    ],
    healthSystemDoes: [
      'Site readiness assessment and scheduling',
      'Local champion identification per site',
      'EHR build and testing',
      'Patient communication and education'
    ],
    risks: [
      'Site-level resistance if not properly communicated',
      'EHR integration delays',
      'Staff turnover requiring retraining'
    ]
  },
  {
    id: 'optimization',
    phase: 4,
    title: 'Optimization & Outcomes',
    duration: '24+ months',
    focus: 'Embed in population health and quality infrastructure',
    elements: [
      'Population health dashboards (cognitive risk registry)',
      'Quality scorecards (screening rates, diagnosis capture)',
      'At-risk cohort interventions',
      'Research collaborations using aggregated data'
    ],
    creyosDelivers: [
      'Advanced analytics and reporting',
      'Quarterly business reviews',
      'Product updates and new features',
      'Research partnership support'
    ],
    healthSystemDoes: [
      'Integrate into quality reporting',
      'Build population health interventions',
      'Track and report outcomes',
      'Explore research opportunities'
    ],
    risks: [
      'Data quality issues if adoption inconsistent',
      'Leadership changes affecting program priority'
    ]
  }
];

export const swimlaneStages: SwimlaneStage[] = [
  {
    id: 'discovery',
    stage: 1,
    title: 'Discovery & Design',
    duration: '0–3 months',
    creyos: [
      'Map current cognitive workflows and pain points',
      'Run small-scale proof-of-concept (e.g., in one department)',
      'Present findings and recommendations'
    ],
    clinical: [
      'Identify priority cohorts (e.g., 65+ AWV, memory clinic backlog, tele-ADHD)',
      'Assign clinical champion(s)',
      'Review current state workflows'
    ],
    it: [
      'Validate security requirements',
      'Review data flows and integration options',
      'Complete vendor assessment'
    ],
    dealShape: 'Pilot licensing (1-3 sites, limited duration)',
    proofPoints: [
      'Case study: Health system improved detection rate by 40%',
      'Peer-reviewed validation studies'
    ]
  },
  {
    id: 'program-build',
    stage: 2,
    title: 'Program Build',
    duration: '3–12 months',
    creyos: [
      'Configure standard protocols for the network',
      'Provide training materials and co-branded clinician guides',
      'Deliver implementation support'
    ],
    clinical: [
      'Approve protocols and embed in local guidelines',
      'Train clinical staff',
      'Establish referral pathways'
    ],
    it: [
      'Set up EHR hooks (FHIR-based integration, SSO if desired)',
      'Configure data flows',
      'Complete go-live technical readiness'
    ],
    dealShape: 'Network license (multi-site, multi-year)',
    proofPoints: [
      'Implementation playbook with timeline',
      'Reference calls with similar health systems'
    ]
  },
  {
    id: 'scale-optimize',
    stage: 3,
    title: 'Scale & Optimize',
    duration: '12+ months',
    creyos: [
      'Quarterly reviews and outcome analysis',
      'Product updates and new feature rollout',
      'Research and publication collaboration support'
    ],
    clinical: [
      'Expand to new sites',
      'Drive adoption and quality improvement',
      'Develop internal expertise'
    ],
    it: [
      'Maintain and optimize data flows',
      'Support new integration requests',
      'Plan for expansion'
    ],
    dealShape: 'Enterprise partnership (strategic, multi-year)',
    proofPoints: [
      'Published outcomes data',
      'Expanded use case deployment'
    ]
  }
];

export default {
  defaults: valueScenarioDefaults,
  ranges: valueScenarioRanges,
  rolloutPhases,
  swimlaneStages
};

