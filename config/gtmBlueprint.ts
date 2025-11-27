import type { 
  GtmOverview, 
  Trigger, 
  Account, 
  Channel, 
  Phase, 
  TimelineTask,
  ExecDecision,
  AccountStoryboard
} from '@/types/gtm';

export const gtmOverview: GtmOverview = {
  objective: "Land 2–3 multi-site pilots with top-tier IDNs/health systems and convert at least one into a network-level agreement within 18 months.",
  target: "US integrated delivery networks and large systems with big Medicare / MA panels and explicit dementia/AWV/value-based care goals.",
  timeframeBands: ["0–3 months", "3–9 months", "9–18 months"],
  execView: [
    "Win 2–3 credible pilots (not just one-off clinics).",
    "Anchor Creyos as the cognitive layer for AWV and dementia programs.",
    "Create 1–2 case stories that are attractive to other systems."
  ],
  fieldView: [
    "Dream 25 account list built and owned.",
    "At least 10 exploratory conversations booked with real decision-makers.",
    "Standard pilot template and deck used across all accounts."
  ]
};

export const triggers: Trigger[] = [
  {
    id: 'dementia_strategy',
    name: 'Dementia / Brain-Health Strategy',
    description: 'Has a dementia or brain-health strategic plan or task force',
    icon: 'brain'
  },
  {
    id: 'awv_optimization',
    name: 'AWV Optimization',
    description: 'Active work on AWV optimization & cognitive screening',
    icon: 'clipboard-check'
  },
  {
    id: 'neuropsych_backlog',
    name: 'Neuropsych Backlog',
    description: 'Neuropsych / memory clinic backlog issues',
    icon: 'clock'
  },
  {
    id: 'dementia_care_model',
    name: 'Dementia Care Model',
    description: 'Participation in dementia care models (e.g., GUIDE) or similar',
    icon: 'heart'
  },
  {
    id: 'ai_digital',
    name: 'AI / Digital Exploration',
    description: 'AI or digital brain-health exploratory work',
    icon: 'cpu'
  },
  {
    id: 'medicare_pophealth',
    name: 'Medicare / Pop Health Focus',
    description: 'High MA / Medicare share and explicit pop health goals',
    icon: 'users'
  }
];

export const dream25Accounts: Account[] = [
  {
    id: 'kaiser',
    name: 'Kaiser Permanente',
    type: 'mega_idn',
    region: 'National',
    triggers: ['dementia_strategy', 'awv_optimization', 'neuropsych_backlog', 'dementia_care_model', 'medicare_pophealth'],
    notes: 'Strong dementia programs, memory clinics, large MA population',
    whatWeKnow: [
      'Already runs structured dementia care programs in multiple regions',
      'Published research on dementia screening in primary care',
      'Known neuropsych capacity constraints',
      'Strong quality improvement culture'
    ],
    publicSignals: [
      'Published dementia strategy 2024',
      'AWV program enhancement blog post',
      'Memory clinic expansion in Southern CA'
    ],
    recommendedEntry: 'pop_health'
  },
  {
    id: 'intermountain',
    name: 'Intermountain Health',
    type: 'regional',
    region: 'Mountain West',
    triggers: ['dementia_strategy', 'awv_optimization', 'medicare_pophealth'],
    notes: 'Published primary-care dementia guideline, value-based care leader',
    whatWeKnow: [
      'Published primary-care dementia clinical guideline',
      'Strong value-based care infrastructure',
      'SelectHealth MA plan integration',
      'Innovation hub open to digital tools'
    ],
    publicSignals: [
      'Primary care dementia guideline publication',
      'SelectHealth quality initiatives',
      'Digital health innovation announcements'
    ],
    recommendedEntry: 'primary_care'
  },
  {
    id: 'geisinger',
    name: 'Geisinger',
    type: 'regional',
    region: 'Northeast',
    triggers: ['dementia_strategy', 'awv_optimization', 'ai_digital', 'medicare_pophealth'],
    notes: 'Innovation leader, ProvenCare model, 65+ Labs initiative',
    whatWeKnow: [
      'ProvenCare evidence-based model',
      '65+ Labs innovation initiative',
      'Strong analytics and population health',
      'Geisinger Health Plan integration'
    ],
    publicSignals: [
      '65+ Labs cognitive health pilot',
      'Digital innovation partnerships',
      'Population health analytics expansion'
    ],
    recommendedEntry: 'digital'
  },
  {
    id: 'mayo',
    name: 'Mayo Clinic',
    type: 'academic',
    region: 'Midwest',
    triggers: ['dementia_strategy', 'neuropsych_backlog', 'ai_digital'],
    notes: 'Research powerhouse, brand value, can anchor credibility',
    whatWeKnow: [
      "World-renowned Alzheimer's research program",
      'Mayo Clinic Platform digital initiatives',
      'Strong neuropsych and geriatrics departments',
      'Research collaboration opportunities'
    ],
    publicSignals: [
      "Alzheimer's research publications",
      'Digital health platform launches',
      'AI in healthcare initiatives'
    ],
    recommendedEntry: 'neuro_psych'
  },
  {
    id: 'cleveland_clinic',
    name: 'Cleveland Clinic',
    type: 'academic',
    region: 'Midwest',
    triggers: ['dementia_strategy', 'neuropsych_backlog', 'ai_digital', 'dementia_care_model'],
    notes: 'Lou Ruvo Center, strong neuro brand, innovation focus',
    whatWeKnow: [
      'Lou Ruvo Center for Brain Health',
      'Strong neurology brand and research',
      'Innovation and digital transformation focus',
      'Multi-state footprint'
    ],
    publicSignals: [
      'Lou Ruvo Center expansion',
      'Brain health awareness campaigns',
      'Digital innovation investments'
    ],
    recommendedEntry: 'neuro_psych'
  },
  {
    id: 'commonspirit',
    name: 'CommonSpirit Health',
    type: 'mega_idn',
    region: 'National',
    triggers: ['awv_optimization', 'medicare_pophealth', 'dementia_care_model'],
    notes: 'Largest nonprofit health system, huge primary care footprint',
    whatWeKnow: [
      'Largest nonprofit health system in US',
      'Massive primary care and senior care footprint',
      'Value-based care initiatives',
      'Standardization opportunities across regions'
    ],
    publicSignals: [
      'Senior care program announcements',
      'Value-based care partnerships',
      'Quality improvement initiatives'
    ],
    recommendedEntry: 'pop_health'
  },
  {
    id: 'hca',
    name: 'HCA Healthcare',
    type: 'mega_idn',
    region: 'National',
    triggers: ['awv_optimization', 'medicare_pophealth'],
    notes: 'Largest for-profit, data-driven, scale opportunity',
    whatWeKnow: [
      'Largest for-profit health system',
      'Strong data and analytics culture',
      'Scale and standardization potential',
      'Physician group integration'
    ],
    publicSignals: [
      'Clinical data analytics investments',
      'Quality and outcomes focus',
      'Physician group growth'
    ],
    recommendedEntry: 'ops'
  },
  {
    id: 'uchealth',
    name: 'UCHealth (Colorado)',
    type: 'regional',
    region: 'Mountain West',
    triggers: ['dementia_strategy', 'awv_optimization', 'ai_digital'],
    notes: 'Innovation-forward, strong neurology, research ties',
    whatWeKnow: [
      'Innovation and digital health focus',
      'Strong neurology and research programs',
      'Growing regional footprint',
      'Quality and outcomes emphasis'
    ],
    publicSignals: [
      'Digital health innovation center',
      'Neurology program expansion',
      'Research partnership announcements'
    ],
    recommendedEntry: 'digital'
  },
  {
    id: 'northwell',
    name: 'Northwell Health',
    type: 'regional',
    region: 'Northeast',
    triggers: ['dementia_strategy', 'awv_optimization', 'ai_digital', 'medicare_pophealth'],
    notes: "Largest in NY, Feinstein Institutes research, innovation culture",
    whatWeKnow: [
      "Largest health system in New York",
      'Feinstein Institutes for Medical Research',
      'Strong innovation and digital culture',
      'Significant Medicare/MA population'
    ],
    publicSignals: [
      'Brain health research publications',
      'Digital innovation investments',
      'Population health initiatives'
    ],
    recommendedEntry: 'digital'
  },
  {
    id: 'mount_sinai',
    name: 'Mount Sinai Health System',
    type: 'academic',
    region: 'Northeast',
    triggers: ['dementia_strategy', 'neuropsych_backlog', 'ai_digital'],
    notes: "Strong Alzheimer's research, NYC academic powerhouse",
    whatWeKnow: [
      "Renowned Alzheimer's Disease Research Center",
      'Strong geriatrics and neurology programs',
      'Research collaboration potential',
      'NYC market reach'
    ],
    publicSignals: [
      "Alzheimer's research breakthroughs",
      'Brain health center expansion',
      'Digital health partnerships'
    ],
    recommendedEntry: 'neuro_psych'
  }
];

export const channels: Channel[] = [
  { id: 'thought_leadership', name: 'Thought Leadership', description: 'Articles, bylines, webinars' },
  { id: 'conferences', name: 'Tier-1 Conferences', description: "HIMSS, HLTH, Alzheimer's Association, IHI, Becker's" },
  { id: 'abm_outbound', name: 'ABM Outbound', description: 'Email, LinkedIn, warm intros' },
  { id: 'peer_influence', name: 'Peer-to-Peer / KOL', description: 'Clinicians talking to clinicians' },
  { id: 'deal_assets', name: 'Deal-Room Assets', description: 'Decks, pilot one-pagers, interactive tools' }
];

export const phases: Phase[] = [
  { id: 'phase_0_3', name: 'Phase 0–3', duration: '0–3 months', description: 'Narrative + content seeding' },
  { id: 'phase_3_9', name: 'Phase 3–9', duration: '3–9 months', description: 'ABM + first conversations' },
  { id: 'phase_9_18', name: 'Phase 9–18', duration: '9–18 months', description: 'Pilot design + deal support' }
];

export const timelineTasks: TimelineTask[] = [
  // Phase 0-3
  { id: 't1', phaseId: 'phase_0_3', owner: 'exec', title: 'Align on Dream 25', description: 'Approve Dream 25 account list and assign owners', estimatedTime: '2 hours', dependencies: [], status: 'pending' },
  { id: 't2', phaseId: 'phase_0_3', owner: 'pmm', title: 'Finalize enterprise narrative', description: 'Complete enterprise narrative and interactive report', estimatedTime: '2 weeks', dependencies: [], status: 'pending' },
  { id: 't3', phaseId: 'phase_0_3', owner: 'sales', title: 'Generate account dossiers', description: 'Create initial account dossiers for top 10 accounts', estimatedTime: '1 week', dependencies: ['t1'], status: 'pending' },
  { id: 't4', phaseId: 'phase_0_3', owner: 'clinical', title: 'Draft pilot outcome framework', description: 'Create pilot outcome framework (process + clinical + business)', estimatedTime: '1 week', dependencies: [], status: 'pending' },
  { id: 't5', phaseId: 'phase_0_3', owner: 'product', title: 'Prepare integration patterns', description: 'Document standard pilot integration patterns (Epic/EHR examples)', estimatedTime: '2 weeks', dependencies: [], status: 'pending' },
  
  // Phase 3-9
  { id: 't6', phaseId: 'phase_3_9', owner: 'exec', title: 'High-level intros', description: 'Make 3–5 high-level intros where we have relationships', estimatedTime: 'Ongoing', dependencies: ['t1'], status: 'pending' },
  { id: 't7', phaseId: 'phase_3_9', owner: 'sales', title: 'Run outreach waves', description: 'Execute 2–3 outreach waves to each key persona in top 10 accounts', estimatedTime: 'Ongoing', dependencies: ['t3'], status: 'pending' },
  { id: 't8', phaseId: 'phase_3_9', owner: 'pmm', title: 'Account-customized materials', description: 'Create 1 account-customized slide addendum per opportunity', estimatedTime: '1 day each', dependencies: ['t2'], status: 'pending' },
  { id: 't9', phaseId: 'phase_3_9', owner: 'clinical', title: 'Join early calls', description: "Join 3–6 early calls as 'peer clinician' voice", estimatedTime: '1-2 hrs each', dependencies: ['t4'], status: 'pending' },
  
  // Phase 9-18
  { id: 't10', phaseId: 'phase_9_18', owner: 'product', title: 'Implement pilot footprint', description: 'Implement pilot; attend kickoff, mid-point, final review', estimatedTime: '0.25 FTE', dependencies: ['t5'], status: 'pending' },
  { id: 't11', phaseId: 'phase_9_18', owner: 'clinical', title: 'Interpret early data', description: 'Help interpret early data and craft results stories', estimatedTime: 'Ongoing', dependencies: ['t10'], status: 'pending' },
  { id: 't12', phaseId: 'phase_9_18', owner: 'sales', title: 'Negotiate expansion', description: 'Negotiate expansion contracts based on pilot exit criteria', estimatedTime: 'Ongoing', dependencies: ['t10'], status: 'pending' },
  { id: 't13', phaseId: 'phase_9_18', owner: 'pmm', title: 'Create case story', description: 'Turn at least 1 pilot into an anonymized enterprise case story', estimatedTime: '2 weeks', dependencies: ['t11'], status: 'pending' }
];

export const accountStoryboards: AccountStoryboard[] = [
  {
    accountId: 'kaiser',
    accountName: 'Kaiser Permanente',
    panels: [
      {
        id: 'context',
        title: 'Context',
        content: [
          'Kaiser: largest integrated system, large MA population, known dementia projects, memory clinics.',
          'They already care about dementia quality; early detection is still uneven across primary care.',
          'Strong quality improvement culture and data infrastructure.'
        ]
      },
      {
        id: 'entry_wedge',
        title: 'Entry Wedge',
        content: [
          'Primary: Pop Health / Senior Care medical director + Memory program lead.',
          'Hook: "Standardize early cognitive assessment across AWVs to feed your dementia programs with better upstream detection."',
          'Secondary: Geriatrics leads in specific regions.'
        ]
      },
      {
        id: 'first_meeting',
        title: 'First Meeting Agenda',
        content: [
          '5-min: Recap their public work and our understanding.',
          '10-min: Walkthrough of "cognitive layer" concept using the enterprise report visualization.',
          '10-min: Interactive scenario: "What happens if you move screens from 10% to 60% in Region X?"',
          '5-min: Discuss possible pilot pattern and stakeholders.'
        ]
      },
      {
        id: 'pilot_sketch',
        title: 'Pilot Sketch',
        content: [
          '2–3 sites, 9–12 months, AWV + memory complaints.',
          'Metrics: AWV coverage, early-stage diagnoses, referral patterns.',
          'Integration: EHR flowsheets + smartphrases for documentation.',
          'Champions: 1 physician lead + 1 nurse manager per site.'
        ]
      },
      {
        id: 'expansion',
        title: 'Expansion Path',
        content: [
          'If pilot works, move to additional regions.',
          'Broader cohorts (e.g., patients with diabetes + cognitive risk).',
          'Integration into their MA plan chronic care programs.',
          'Potential research collaboration on outcomes data.'
        ]
      }
    ]
  },
  {
    accountId: 'intermountain',
    accountName: 'Intermountain Health',
    panels: [
      {
        id: 'context',
        title: 'Context',
        content: [
          'Intermountain: Value-based care pioneer, published dementia guideline, SelectHealth integration.',
          "They literally wrote the guideline saying 'improve annual cognitive screening and diagnosis capture.'",
          'Strong primary care network and quality infrastructure.'
        ]
      },
      {
        id: 'entry_wedge',
        title: 'Entry Wedge',
        content: [
          'Primary: Primary Care / Geriatrics Lead who authored the dementia guideline.',
          'Hook: "You wrote the guideline – Creyos is the standardized instrument to operationalize that across primary care."',
          'Secondary: Pop Health lead focused on AWV quality.'
        ]
      },
      {
        id: 'first_meeting',
        title: 'First Meeting Agenda',
        content: [
          '5-min: Reference their published dementia guideline and AWV goals.',
          '10-min: Show how digital assessment fits their workflow recommendations.',
          '10-min: Discuss current screening rates and improvement targets.',
          '5-min: Explore pilot sites and SelectHealth integration.'
        ]
      },
      {
        id: 'pilot_sketch',
        title: 'Pilot Sketch',
        content: [
          '3–5 primary care sites, 9 months, AWV focus.',
          'Metrics: Screening rate improvement, diagnosis capture, workflow efficiency.',
          'Integration: Medium – EHR documentation templates.',
          'SelectHealth quality incentive alignment.'
        ]
      },
      {
        id: 'expansion',
        title: 'Expansion Path',
        content: [
          'Network-wide primary care rollout.',
          'SelectHealth MA population targeting.',
          'Specialty clinic expansion (neurology, geriatrics).',
          'Research publication on outcomes.'
        ]
      }
    ]
  }
];

export const execDecisions: ExecDecision[] = [
  {
    id: 'targets',
    category: 'Targets & Focus',
    title: 'Account and Strategy Decisions',
    items: [
      'Approve Dream 25 account list (and top 5 for year one).',
      'Confirm we are prioritizing dementia / AWV / cognitive risk as the enterprise wedge, not chasing every possible use case at once.',
      'Agree on ICP prioritization: Regional IDNs first, or go for flagship academic/mega-IDN?'
    ]
  },
  {
    id: 'resourcing',
    category: 'Resourcing',
    title: 'Team and Bandwidth Commitments',
    items: [
      'Assign named owner(s) for top 5 accounts (sales/BD).',
      'Commit 0.5–1 FTE clinical champion time for enterprise GTM (someone credible to talk to CMOs).',
      'Commit minimal product/SE bandwidth to support 2–3 pilots.',
      'PMM bandwidth for account-specific materials and thought leadership.'
    ]
  },
  {
    id: 'risk_roi',
    category: 'Risk & ROI Appetite',
    title: 'Strategic Trade-offs',
    items: [
      'Agree we are willing to do 1–2 strategic pilots with aggressive pricing/terms to land flagship logos.',
      'Agree on what a successful pilot looks like and how we will decide to invest more vs. pause.',
      'Define acceptable timeline: 18-month horizon to first enterprise contract?'
    ]
  }
];

export default {
  overview: gtmOverview,
  triggers,
  accounts: dream25Accounts,
  channels,
  phases,
  tasks: timelineTasks,
  storyboards: accountStoryboards,
  decisions: execDecisions
};

