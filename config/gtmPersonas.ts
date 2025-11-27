import type { IcpConfig, PersonaDetail, AccountBlueprint, ChannelPlay } from '@/types/gtm';

const basePersonas: Omit<PersonaDetail, 'jtbd' | 'currentPain' | 'triggerFit' | 'entryHook' | 'proofTheyCare'>[] = [
  { id: 'cmo', name: 'CMO / Chief Quality Officer', shortName: 'CMO' },
  { id: 'primary_care', name: 'Primary Care / Geriatrics Lead', shortName: 'PC Lead' },
  { id: 'neuro_psych', name: 'Neurology / Psych Lead', shortName: 'Neuro/Psych' },
  { id: 'pop_health', name: 'Pop Health / VBC Lead', shortName: 'Pop Health' },
  { id: 'digital', name: 'Digital / CIO / CMIO', shortName: 'Digital' },
  { id: 'ops', name: 'Ops (Primary Care / Ambulatory)', shortName: 'Ops' }
];

export const icpConfigs: IcpConfig[] = [
  {
    id: 'mega_idn',
    name: 'Mega-IDN',
    example: 'e.g., Kaiser, HCA, CommonSpirit',
    personas: [
      {
        ...basePersonas[0],
        jtbd: 'Drive quality metrics across dozens of hospitals and hundreds of clinics while managing brand reputation.',
        currentPain: [
          'Quality metrics are inconsistent across regions',
          'Cognitive screening is a checkbox, not a program',
          'Hard to standardize anything at this scale'
        ],
        triggerFit: ['dementia_strategy', 'awv_optimization', 'medicare_pophealth'],
        entryHook: [
          'At your scale, ad-hoc cognitive screening is a risk – standardize with a validated digital layer.',
          'We can help you turn AWV cognitive requirements from a checkbox into a competitive advantage.'
        ],
        proofTheyCare: ['Quality scorecards', 'CMS star ratings focus', 'Brand reputation initiatives']
      },
      {
        ...basePersonas[1],
        jtbd: 'Increase annual cognitive screening and dementia diagnosis capture in 65+ without crushing clinic throughput.',
        currentPain: [
          'AWVs are inconsistent; cognitive check is a checkbox at best',
          'Staff already overloaded; anything manual is dead on arrival',
          'Neuropsych access is limited; referrals are bottlenecked'
        ],
        triggerFit: ['awv_optimization', 'neuropsych_backlog'],
        entryHook: [
          'A 10-minute digital assessment your MAs can run that actually catches cognitive impairment.',
          'Free up your neuropsych pipeline by screening appropriately upstream.'
        ],
        proofTheyCare: ['AWV completion rates', 'Dementia guidelines', 'Clinic efficiency metrics']
      },
      {
        ...basePersonas[2],
        jtbd: 'Get the right patients into my memory clinic without drowning in inappropriate referrals.',
        currentPain: [
          'Memory clinic is always full of worried well',
          'No objective data on referrals – just "family is concerned"',
          'Waitlists are months long'
        ],
        triggerFit: ['neuropsych_backlog', 'dementia_strategy'],
        entryHook: [
          'Objective cognitive data on every referral so you see the right patients.',
          'Triage referrals by severity – focus your time on complex cases.'
        ],
        proofTheyCare: ['Referral quality complaints', 'Waitlist metrics', 'Memory program expansion']
      },
      {
        ...basePersonas[3],
        jtbd: 'Identify and manage high-risk seniors before they become high-cost.',
        currentPain: [
          'Cognitive impairment drives falls, readmissions, and complications',
          'No way to identify cognitive risk at population level',
          'MA and VBC contracts penalize us for missing dementia'
        ],
        triggerFit: ['medicare_pophealth', 'dementia_care_model', 'dementia_strategy'],
        entryHook: [
          'Turn cognitive risk into a manageable data point in your population health dashboard.',
          'Early identification = earlier intervention = lower downstream costs.'
        ],
        proofTheyCare: ['MA star ratings', 'Readmission penalties', 'Risk stratification programs']
      },
      {
        ...basePersonas[4],
        jtbd: 'Deploy digital tools that actually get used and integrate with our EHR.',
        currentPain: [
          'Tired of point solutions that don\'t integrate',
          'Clinicians won\'t use tools that add clicks',
          'Need vendor that understands enterprise IT requirements'
        ],
        triggerFit: ['ai_digital', 'awv_optimization'],
        entryHook: [
          'Web-based, EHR-agnostic, no proprietary hardware – built for enterprise.',
          'We\'ve done Epic, Cerner, and others – integration is not a science project.'
        ],
        proofTheyCare: ['Digital transformation initiatives', 'EHR optimization projects', 'Interoperability focus']
      },
      {
        ...basePersonas[5],
        jtbd: 'Keep clinics running efficiently without adding more admin burden.',
        currentPain: [
          'Everything is a workflow problem',
          'Staff turnover is killing us',
          'Any new tool better save time, not add time'
        ],
        triggerFit: ['awv_optimization'],
        entryHook: [
          '10 minutes, MA-administered, automatic scoring – net time savings vs. paper.',
          'Workflow that fits how your clinics actually run.'
        ],
        proofTheyCare: ['Clinic throughput metrics', 'Staff satisfaction surveys', 'AWV completion rates']
      }
    ]
  },
  {
    id: 'academic',
    name: 'Academic System',
    example: 'e.g., Mayo, Cleveland Clinic, Mount Sinai',
    personas: [
      {
        ...basePersonas[0],
        jtbd: 'Maintain research and clinical excellence while expanding access.',
        currentPain: [
          'Research prestige doesn\'t always translate to operational efficiency',
          'Faculty want to do research, not run screening programs',
          'Need to balance innovation with standardization'
        ],
        triggerFit: ['dementia_strategy', 'ai_digital'],
        entryHook: [
          'Research-validated assessments that your faculty will trust.',
          'Built on 30+ years of cognitive science – not a startup guessing.'
        ],
        proofTheyCare: ['Research publications', 'NIH grants', 'Clinical innovation awards']
      },
      {
        ...basePersonas[1],
        jtbd: 'Bridge the gap between research excellence and primary care reality.',
        currentPain: [
          'Specialty-centric culture; PC often underserved',
          'Research tools too complex for routine clinical use',
          'Need to prove value in real-world settings'
        ],
        triggerFit: ['awv_optimization', 'dementia_strategy'],
        entryHook: [
          'Research-grade assessments designed for primary care workflows.',
          'Prove your research insights work in routine clinical practice.'
        ],
        proofTheyCare: ['Primary care quality initiatives', 'Translational research goals']
      },
      {
        ...basePersonas[2],
        jtbd: 'Lead the field in dementia/ADHD diagnosis while managing overwhelming demand.',
        currentPain: [
          'Referrals exceed capacity',
          'Want to do research but drowning in clinical volume',
          'Need better triage to focus on complex cases'
        ],
        triggerFit: ['neuropsych_backlog', 'dementia_strategy', 'ai_digital'],
        entryHook: [
          'Pre-visit cognitive data means you focus on diagnosis, not basic testing.',
          'Research-quality data collection embedded in clinical workflow.'
        ],
        proofTheyCare: ['Research output metrics', 'Clinic volume data', 'Referral pattern analysis']
      },
      {
        ...basePersonas[3],
        jtbd: 'Demonstrate value-based care impact despite research-first culture.',
        currentPain: [
          'VBC is newer territory for academic systems',
          'Need to prove population health impact',
          'Faculty incentives don\'t always align with VBC goals'
        ],
        triggerFit: ['medicare_pophealth', 'dementia_care_model'],
        entryHook: [
          'Bridge research excellence with population health outcomes.',
          'Generate publishable data while improving care quality.'
        ],
        proofTheyCare: ['VBC contract performance', 'Population health initiatives', 'Quality improvement publications']
      },
      {
        ...basePersonas[4],
        jtbd: 'Deploy technology that faculty will actually adopt and that supports research.',
        currentPain: [
          'Faculty are picky about tools',
          'Need something that supports research use cases too',
          'Integration with complex academic EHR environments'
        ],
        triggerFit: ['ai_digital'],
        entryHook: [
          'Validated by researchers, built for clinicians – best of both worlds.',
          '400+ peer-reviewed studies using our tasks – credibility your faculty will trust.'
        ],
        proofTheyCare: ['Digital innovation initiatives', 'Research platform investments', 'Faculty adoption metrics']
      },
      {
        ...basePersonas[5],
        jtbd: 'Keep academic clinics running despite complex workflows and research requirements.',
        currentPain: [
          'Research protocols add complexity to clinical operations',
          'High faculty expectations; low tolerance for workflow friction',
          'Need to balance research and clinical efficiency'
        ],
        triggerFit: ['awv_optimization'],
        entryHook: [
          'Clinical-grade efficiency with research-grade data quality.',
          'Workflow that works for busy academic clinics.'
        ],
        proofTheyCare: ['Clinic efficiency metrics', 'Research protocol compliance', 'Staff satisfaction']
      }
    ]
  },
  {
    id: 'regional',
    name: 'Regional IDN',
    example: 'e.g., Intermountain, Geisinger, UCHealth',
    personas: [
      {
        ...basePersonas[0],
        jtbd: 'Be the quality leader in our region and prove we compete with national players.',
        currentPain: [
          'Competing with mega-IDNs on quality reputation',
          'Need to differentiate on care quality',
          'Limited resources compared to larger systems'
        ],
        triggerFit: ['dementia_strategy', 'awv_optimization', 'medicare_pophealth'],
        entryHook: [
          'Be the regional leader in cognitive care – ahead of national players.',
          'Prove your quality story with objective cognitive outcomes.'
        ],
        proofTheyCare: ['Regional quality rankings', 'Community health initiatives', 'Competitive positioning']
      },
      {
        ...basePersonas[1],
        jtbd: 'Operationalize our care guidelines across all primary care sites.',
        currentPain: [
          'We write great guidelines but implementation is inconsistent',
          'Need practical tools to make guidelines actionable',
          'Limited specialist access means PC must do more'
        ],
        triggerFit: ['awv_optimization', 'dementia_strategy'],
        entryHook: [
          'You wrote the guideline – we\'re the tool to operationalize it across primary care.',
          'Standardized assessment means consistent implementation.'
        ],
        proofTheyCare: ['Published clinical guidelines', 'Primary care quality metrics', 'AWV completion rates']
      },
      {
        ...basePersonas[2],
        jtbd: 'Build a cognitive care program that matches our specialty reputation.',
        currentPain: [
          'Specialty reputation depends on referral quality',
          'Limited neuropsych resources',
          'Need to prove outcomes to maintain funding'
        ],
        triggerFit: ['neuropsych_backlog', 'dementia_strategy'],
        entryHook: [
          'Objective referral data means you see the right patients.',
          'Build the cognitive care program your region deserves.'
        ],
        proofTheyCare: ['Specialty program development', 'Referral pattern analysis', 'Outcome reporting']
      },
      {
        ...basePersonas[3],
        jtbd: 'Prove our value-based care model works for cognitive conditions.',
        currentPain: [
          'VBC contracts are core to our strategy',
          'Cognitive impairment is a risk we don\'t manage well',
          'Need data to prove intervention value'
        ],
        triggerFit: ['medicare_pophealth', 'dementia_care_model', 'dementia_strategy'],
        entryHook: [
          'Cognitive risk is a VBC blind spot – we help you see and manage it.',
          'Prove your care model works for dementia and cognitive conditions.'
        ],
        proofTheyCare: ['VBC performance metrics', 'Risk stratification programs', 'Care model publications']
      },
      {
        ...basePersonas[4],
        jtbd: 'Deploy digital tools that prove we\'re innovative despite smaller scale.',
        currentPain: [
          'Want to be seen as innovative',
          'Limited IT resources compared to mega-IDNs',
          'Need partners, not just vendors'
        ],
        triggerFit: ['ai_digital', 'awv_optimization'],
        entryHook: [
          'Enterprise-ready without enterprise complexity – built for your scale.',
          'Partner with us to lead digital cognitive health in your region.'
        ],
        proofTheyCare: ['Innovation initiatives', 'Digital health investments', 'Partnership announcements']
      },
      {
        ...basePersonas[5],
        jtbd: 'Run efficient clinics that deliver on our quality promises.',
        currentPain: [
          'Efficiency is survival for regional systems',
          'Can\'t afford workflow disruptions',
          'Need tools that pay for themselves in time savings'
        ],
        triggerFit: ['awv_optimization'],
        entryHook: [
          'Net time savings vs. current workflows – efficiency that works.',
          'Designed for real clinic operations, not demo environments.'
        ],
        proofTheyCare: ['Clinic efficiency metrics', 'Staff satisfaction', 'Operational cost management']
      }
    ]
  }
];

export const accountBlueprints: AccountBlueprint[] = [
  {
    accountId: 'kaiser',
    personas: [
      {
        id: 'pop_health',
        entryWedge: 'Pop Health / Senior Care program lead + Geriatrics/Memory lead. They feel the cost and quality impact of underdiagnosed dementia; they already led dementia projects.',
        whatWeSay: [
          "You've already proved structured dementia care works; let's move standardized cognitive detection upstream into every primary-care AWV.",
          'We give you a 5–15 min digital assessment MAs can run that aligns with AWV cognitive requirements.',
          'We turn memory concerns from ad-hoc to standardized across regions.'
        ],
        pilotProposal: [
          'Three-site, 9–12 month pilot across two high-volume primary-care centers and one memory clinic in Region X.',
          'Baseline vs post % of AWVs with structured cognitive assessment.',
          'Increase in early-stage (MCI/early dementia) diagnosis rate per 1,000 seniors.',
          'Neuropsych referral appropriateness and volume changes.'
        ],
        metrics: [
          'Process: Screening coverage, time per screen, documentation quality.',
          'Clinical: Stage at initial diagnosis, follow-up plan creation.',
          'Business: HCC coding uplift on cognitive conditions, avoidable ED visits in dementia.'
        ]
      },
      {
        id: 'cmo',
        entryWedge: 'CMO / Quality Officer focused on AWV quality and dementia outcomes across the system.',
        whatWeSay: [
          'Your AWV cognitive screening is a checkbox – we make it a competitive advantage.',
          'Standardized detection means standardized quality metrics you can actually track.',
          'Reduce variability in cognitive screening across your hundreds of clinics.'
        ],
        pilotProposal: [
          'Quality improvement pilot focused on AWV cognitive screening standardization.',
          'Track screening rate improvement and documentation quality.',
          'Demonstrate quality metric improvement potential for system-wide rollout.'
        ],
        metrics: [
          'Process: AWV completion with cognitive component, documentation compliance.',
          'Clinical: Screening positivity rate, follow-up completion.',
          'Business: Quality score impact, documentation revenue opportunity.'
        ]
      }
    ]
  },
  {
    accountId: 'intermountain',
    personas: [
      {
        id: 'primary_care',
        entryWedge: 'Primary Care / Geriatrics Lead who authored the dementia guideline. They literally wrote the playbook – we help them operationalize it.',
        whatWeSay: [
          "You literally wrote the guideline saying 'improve annual cognitive screening and diagnosis capture' – Creyos is the standardized instrument to operationalize that across primary care.",
          'Turn your guideline from paper to practice with a tool MAs can run in any clinic.',
          'Consistent screening means consistent implementation of your clinical vision.'
        ],
        pilotProposal: [
          '3–5 site primary care pilot focused on AWV cognitive screening improvement.',
          'Direct alignment with published dementia guideline recommendations.',
          'Integration with SelectHealth quality incentive programs.',
          '9-month duration with clear expansion criteria.'
        ],
        metrics: [
          'Process: % AWVs with structured cognitive screening (baseline vs post).',
          'Clinical: Dementia diagnosis capture rate per 1,000 seniors.',
          'Business: SelectHealth quality incentive performance, coding accuracy.'
        ]
      },
      {
        id: 'pop_health',
        entryWedge: 'Pop Health lead focused on SelectHealth MA population and VBC performance.',
        whatWeSay: [
          'Cognitive impairment is a risk driver you\'re not managing systematically.',
          'SelectHealth incentives align with cognitive screening – let\'s capture that value.',
          'Population-level cognitive risk visibility for better care management.'
        ],
        pilotProposal: [
          'Population health pilot focused on MA population cognitive risk identification.',
          'Integration with SelectHealth risk stratification and care management.',
          'Outcomes-focused design for VBC contract performance.'
        ],
        metrics: [
          'Process: Population-level screening coverage in target cohort.',
          'Clinical: Risk stratification accuracy, care plan creation.',
          'Business: VBC quality metric performance, cost trend impact.'
        ]
      }
    ]
  }
];

export const channelPlays: ChannelPlay[] = [
  // Phase 0-3
  { channelId: 'thought_leadership', personaId: 'cmo', phaseId: 'phase_0_3', intensity: 'high', plays: [
    "Pitch NEJM Catalyst / Health Affairs blog piece on 'Why IDNs need a cognitive assessment layer, not just better memory clinics' with co-author from an early adopter site.",
    'Develop CMO-focused content on cognitive quality metrics and risk reduction.',
    'Create shareable infographic on dementia detection gap at enterprise scale.'
  ]},
  { channelId: 'thought_leadership', personaId: 'pop_health', phaseId: 'phase_0_3', intensity: 'medium', plays: [
    'Publish population health angle on cognitive risk and VBC performance.',
    'Develop ROI calculator content for pop health leaders.',
    'Create case study outline from any early pilot data.'
  ]},
  { channelId: 'conferences', personaId: 'digital', phaseId: 'phase_0_3', intensity: 'medium', plays: [
    'Identify speaking opportunities at HIMSS, HLTH for later phases.',
    'Develop conference booth strategy and materials.',
    'Schedule pre-conference meetings with key accounts attending.'
  ]},
  
  // Phase 3-9
  { channelId: 'abm_outbound', personaId: 'pop_health', phaseId: 'phase_3_9', intensity: 'high', plays: [
    'Send 1–2 targeted emails monthly with link to enterprise interactive report pre-filtered to Pop Health view.',
    'Include 2-line commentary on AWV/detection gap specific to their system.',
    'Offer a 30-min call to sanity-check their cognitive risk strategy.'
  ]},
  { channelId: 'abm_outbound', personaId: 'cmo', phaseId: 'phase_3_9', intensity: 'high', plays: [
    'Quality-focused outreach referencing their public quality initiatives.',
    'Share relevant thought leadership with personalized annotation.',
    'Offer executive briefing on cognitive quality landscape.'
  ]},
  { channelId: 'conferences', personaId: 'digital', phaseId: 'phase_3_9', intensity: 'high', plays: [
    'Meet them at HIMSS/HLTH – they live at these conferences.',
    'Anchor messaging on tech: "Validated digital cognitive layer – not another research toy."',
    'Pre-schedule meetings 4-6 weeks before conference.'
  ]},
  { channelId: 'peer_influence', personaId: 'primary_care', phaseId: 'phase_3_9', intensity: 'medium', plays: [
    'Connect them with physician champions from early adopter sites.',
    'Facilitate peer-to-peer calls on workflow and clinical experience.',
    'Share clinician testimonials and case examples.'
  ]},
  { channelId: 'peer_influence', personaId: 'neuro_psych', phaseId: 'phase_3_9', intensity: 'high', plays: [
    'Leverage clinical advisory board for introductions.',
    'Facilitate research collaboration discussions.',
    'Share neuropsych-specific validation data and use cases.'
  ]},
  
  // Phase 9-18
  { channelId: 'deal_assets', personaId: 'cmo', phaseId: 'phase_9_18', intensity: 'high', plays: [
    'Executive summary deck for CMO/C-suite.',
    'ROI and business case one-pager.',
    'Implementation timeline and resource requirements.'
  ]},
  { channelId: 'deal_assets', personaId: 'ops', phaseId: 'phase_9_18', intensity: 'high', plays: [
    'Workflow integration documentation.',
    'Training and change management plan.',
    'Pilot playbook with timeline and milestones.'
  ]},
  { channelId: 'deal_assets', personaId: 'digital', phaseId: 'phase_9_18', intensity: 'high', plays: [
    'Technical architecture and integration documentation.',
    'Security and compliance materials.',
    'IT implementation timeline and requirements.'
  ]},
  { channelId: 'peer_influence', personaId: 'cmo', phaseId: 'phase_9_18', intensity: 'medium', plays: [
    'Reference calls with CMOs from successful implementations.',
    'Executive briefings with satisfied customers.',
    'Site visit opportunities if applicable.'
  ]}
];

export default {
  icpConfigs,
  accountBlueprints,
  channelPlays
};

