import type {
  HeroContent,
  VisitFlow,
  Pillar,
  ReportRegion,
  DecisionRow,
  WorkflowLane,
  SummaryBullet
} from '@/types/vitalSign';

export const heroContent: HeroContent = {
  headline: "Turn cognitive risk into a vital sign.",
  subhead: "Right now cognitive problems are handled ad-hoc. With a 5–15 minute digital check, they become a standardized vital sign any clinic can capture and act on.",
  body: [
    "Patients complete a short set of tasks.",
    "You get a one-page summary by domain.",
    "You follow clear patterns to monitor, manage or refer."
  ],
  statusQuo: {
    label: "Today",
    caption: "Gut feel, quick questions, inconsistent notes.",
    tooltip: "Cognitive concerns depend on who asks, what they remember, and how much time they have."
  },
  newApproach: {
    label: "With cognitive vital sign",
    caption: "Short digital check, clear report, repeatable decisions.",
    tooltip: "Same quick check, same format, every time, across sites."
  }
};

export const visitFlows: VisitFlow[] = [
  {
    id: 'awv',
    name: 'Annual Wellness Visit (65+)',
    statusQuo: [
      {
        id: 'sq1',
        title: 'Rooming',
        text: 'MA asks routine questions; no structured cognitive test by default.',
        matchingStepId: 'vs1'
      },
      {
        id: 'sq2',
        title: 'Quick question',
        text: "PCP may ask 'How's your memory?' if they remember or have time.",
        matchingStepId: 'vs2'
      },
      {
        id: 'sq3',
        title: 'On-the-spot judgment',
        text: 'PCP decides based on gut feel whether to ignore, watch, or refer.',
        matchingStepId: 'vs3'
      },
      {
        id: 'sq4',
        title: 'Documentation',
        text: "Checkbox 'cognitive screen done' and 1–2 sentences in free text.",
        matchingStepId: 'vs5'
      }
    ],
    withVitalSign: [
      {
        id: 'vs1',
        title: '5–10 min digital check',
        text: 'Patient completes brief tasks on tablet or at home before visit.'
      },
      {
        id: 'vs2',
        title: 'MA confirms completion',
        text: "Staff launches test, ensures it's done; no manual scoring."
      },
      {
        id: 'vs3',
        title: 'PCP sees summary',
        text: 'One-page report in chart: risk band + domain scores (memory, attention, executive).'
      },
      {
        id: 'vs4',
        title: 'Guided decision',
        text: 'PCP follows simple pattern: monitor, manage here, or refer.'
      },
      {
        id: 'vs5',
        title: 'Standardized documentation',
        text: 'Structured result recorded the same way across all providers and sites.'
      }
    ]
  },
  {
    id: 'memory',
    name: 'Memory Complaint Visit',
    statusQuo: [
      {
        id: 'sq1',
        title: 'Patient concern',
        text: "Patient or family says 'I'm worried about memory' – no baseline data.",
        matchingStepId: 'vs1'
      },
      {
        id: 'sq2',
        title: 'Brief interview',
        text: 'PCP asks open-ended questions, relies on patient/family recall.',
        matchingStepId: 'vs2'
      },
      {
        id: 'sq3',
        title: 'Uncertain severity',
        text: "Hard to tell if it's normal aging, mild impairment, or something serious.",
        matchingStepId: 'vs3'
      },
      {
        id: 'sq4',
        title: 'Default to referral',
        text: 'Often sends to specialist "just to be safe" even for borderline cases.',
        matchingStepId: 'vs4'
      }
    ],
    withVitalSign: [
      {
        id: 'vs1',
        title: 'Objective baseline',
        text: 'Digital assessment completed – now you have actual data to discuss.'
      },
      {
        id: 'vs2',
        title: 'Domain-specific view',
        text: 'See exactly which domains are affected: memory, attention, or executive.'
      },
      {
        id: 'vs3',
        title: 'Clear severity indicator',
        text: 'Risk band shows where patient falls compared to age-matched norms.'
      },
      {
        id: 'vs4',
        title: 'Appropriate referral',
        text: 'Refer only when data supports it; manage mild cases in primary care.'
      },
      {
        id: 'vs5',
        title: 'Trackable over time',
        text: 'Repeat assessment shows if intervention is working or not.'
      }
    ]
  },
  {
    id: 'adhd',
    name: 'ADHD Evaluation',
    statusQuo: [
      {
        id: 'sq1',
        title: 'Subjective scales only',
        text: 'Diagnosis relies on self-report questionnaires (Vanderbilt, ASRS).',
        matchingStepId: 'vs1'
      },
      {
        id: 'sq2',
        title: 'No objective data',
        text: 'No way to measure actual attention or impulsivity performance.',
        matchingStepId: 'vs2'
      },
      {
        id: 'sq3',
        title: 'Uncertain diagnosis',
        text: 'Hard to distinguish ADHD from anxiety, depression, or sleep issues.',
        matchingStepId: 'vs3'
      },
      {
        id: 'sq4',
        title: 'Trial and error treatment',
        text: 'Start meds and hope they work; no baseline to compare against.',
        matchingStepId: 'vs4'
      }
    ],
    withVitalSign: [
      {
        id: 'vs1',
        title: 'Objective attention data',
        text: 'Digital tasks measure actual attention, not just self-perception.'
      },
      {
        id: 'vs2',
        title: 'Multi-domain view',
        text: 'See attention, working memory, and executive function separately.'
      },
      {
        id: 'vs3',
        title: 'Differential support',
        text: 'Pattern of deficits helps distinguish ADHD from look-alike conditions.'
      },
      {
        id: 'vs4',
        title: 'Treatment monitoring',
        text: 'Re-test after intervention to see objective improvement.'
      },
      {
        id: 'vs5',
        title: 'Longitudinal tracking',
        text: 'Build a cognitive profile over time, not just a single snapshot.'
      }
    ]
  }
];

export const pillars: Pillar[] = [
  {
    id: 'clarity',
    icon: 'eye',
    tagline: 'You stop guessing.',
    preview: {
      clinician: 'You get specific, objective answers to 3 questions.',
      staff: "You don't have to interpret anything; the report does it for you.",
      manager: 'Every provider follows the same cognitive assessment process.'
    },
    expanded: {
      bullets: [
        'Is there a cognitive problem?',
        'Where is it (memory, attention, executive)?',
        'Is it stable, improving or worsening?'
      ],
      example: {
        clinician: "Instead of: 'Patient seems a bit off, maybe normal aging.'\nYou see: 'Memory and attention both below age norms on last two visits.'",
        staff: "You don't have to know neuropsychology; you just start the test and the provider reads the result.",
        manager: "You know every clinic is following the same process and documenting the same way."
      }
    }
  },
  {
    id: 'workload',
    icon: 'clock',
    tagline: 'It fits in your day.',
    preview: {
      clinician: 'Moves from a 10–15 min manual chore to a 2–3 min review.',
      staff: 'Launch and confirm – no manual scoring or retyping.',
      manager: 'This adds 5–10 minutes of patient time, not provider time.'
    },
    expanded: {
      bullets: [],
      beforeAfter: [
        {
          role: 'MA',
          before: 'Learn/administer paper tests, hand-score, retype results.',
          after: 'Launch → patient self-administers → result appears.'
        },
        {
          role: 'PCP',
          before: '"If I start, I lose 15 minutes."',
          after: '"I spend 2–3 minutes reading a summary and deciding."'
        }
      ]
    }
  },
  {
    id: 'system',
    icon: 'building',
    tagline: 'Everyone stops flying blind.',
    preview: {
      clinician: 'Your documentation is always complete and defensible.',
      staff: 'You can show exactly what you did and when.',
      manager: 'You go from anecdotes to a cognitive dashboard.'
    },
    expanded: {
      bullets: [
        'You can see how many patients were actually screened.',
        'You can see where cognitive risk clusters across clinics.',
        'You have a defensible pattern for referrals and care plans.'
      ],
      example: {
        clinician: 'Your chart note includes objective data, not just "patient denies memory problems."',
        staff: 'When someone asks "did we screen this patient?" you have a clear answer.',
        manager: 'Quality reports show screening coverage and risk distribution across your network.'
      }
    }
  }
];

export const reportRegions: ReportRegion[] = [
  {
    id: 'risk-band',
    name: 'Overall Risk Band',
    whatItIs: 'A simple green/amber/red indicator showing overall cognitive status compared to age norms.',
    whatToLookFor: 'Red = immediate attention needed. Amber = watch closely. Green = within normal range.',
    typicalThinking: [
      'Does this match what patient and family are reporting?',
      'Is this consistent with their medical history?',
      'Has it changed since last assessment?'
    ]
  },
  {
    id: 'domain-scores',
    name: 'Domain Scores',
    whatItIs: 'How this patient performs in each cognitive domain (memory, attention, executive) vs people their age.',
    whatToLookFor: 'Anything consistently below the "average" band.',
    typicalThinking: [
      'Is this consistent with what patient and family are saying?',
      'Is there an obvious cause (meds, mood, sleep)?',
      'Which domain is most affected?'
    ]
  },
  {
    id: 'trend-line',
    name: 'Trend Line',
    whatItIs: 'Shows cognitive performance across the last 2–3 visits.',
    whatToLookFor: 'Declining trend = concern. Stable = reassuring. Improving = intervention may be working.',
    typicalThinking: [
      'Is this person getting worse, staying stable, or improving?',
      'Does the trend match the clinical picture?',
      'Do I need to act now or can I monitor?'
    ]
  },
  {
    id: 'suggestions',
    name: 'Suggestions & Notes',
    whatItIs: 'System-generated recommendations based on the pattern of results.',
    whatToLookFor: 'Specific action items: monitor, investigate causes, consider referral.',
    typicalThinking: [
      'What does the system recommend?',
      'Does this align with my clinical judgment?',
      'What should I document as next steps?'
    ]
  }
];

export const decisionRows: DecisionRow[] = [
  {
    id: 'attention-mood',
    title: 'Isolated attention drop, mood high, sleep poor',
    vignette: "Ms. Garcia, 72, reports occasional forgetfulness; Creyos shows low attention but normal memory and executive; PHQ-9 elevated; she sleeps 4–5h/night.",
    cells: {
      low: 'Reassure patient; focus on sleep hygiene and mood support.',
      moderate: 'Address depression/sleep/meds, repeat test in 6–12 weeks.',
      high: 'Initiate treatment for mood/sleep; urgent follow-up; consider specialist if no improvement.'
    },
    patientScript: {
      moderate: '"Your results show more trouble with concentration right now, but your memory is in the normal range. Given your sleep and mood, I\'d like to start by addressing those and see how your brain responds."'
    }
  },
  {
    id: 'multi-domain',
    title: 'Multi-domain deficits, memory + executive low',
    vignette: "Mr. Chen, 78, brought in by daughter who noticed increasing forgetfulness and poor judgment with finances; Creyos shows memory and executive both below age norms.",
    cells: {
      low: 'Unlikely scenario – multi-domain deficits typically warrant action.',
      moderate: 'Start cognitive workup (labs, imaging); involve family in care planning.',
      high: 'Initiate full cognitive workup or refer to memory clinic; discuss driving and safety.'
    },
    patientScript: {
      high: '"The testing shows some areas where your brain isn\'t working as well as we\'d expect for your age. I want to make sure we understand why, so I\'m going to order some additional tests and connect you with our memory specialists."'
    }
  },
  {
    id: 'stable-mild',
    title: 'Stable mild deficits over 3 visits',
    vignette: "Mrs. Johnson, 75, has shown slightly below-average memory scores for 3 annual visits but no decline; lives independently, manages medications and finances.",
    cells: {
      low: 'Reassure, monitor at annual visit, focus on brain-healthy habits.',
      moderate: 'Continue monitoring; ensure no new medications or health changes.',
      high: 'Unlikely – stable pattern suggests low immediate risk.'
    },
    patientScript: {
      low: '"Your brain function has been steady for the past few years. This is reassuring. Let\'s keep doing what we\'re doing and check in again next year."'
    }
  }
];

export const workflowLanes: WorkflowLane[] = [
  {
    id: 'staff',
    name: 'What Staff Do',
    color: 'emerald',
    steps: [
      {
        id: 's1',
        text: 'Flag patients due for cognitive check from daily schedule.',
        tip: "Your EHR list can be pre-filtered to 65+ AWVs; you don't search manually."
      },
      {
        id: 's2',
        text: 'Launch Creyos, hand tablet to patient.',
        tip: "Say: 'You'll see some short brain games; just follow the instructions.'"
      },
      {
        id: 's3',
        text: 'Check completion; note any issues.',
        tip: "If patient couldn't complete, document why (vision, motor, refused, etc.)."
      }
    ]
  },
  {
    id: 'clinician',
    name: 'What Clinicians Do',
    color: 'blue',
    steps: [
      {
        id: 'c1',
        text: 'Open chart → see Creyos summary.',
        tip: 'The summary appears in your results section like any other lab.'
      },
      {
        id: 'c2',
        text: 'Review main domain scores + risk band.',
        tip: 'Takes 2–3 minutes; focus on red/amber flags first.'
      },
      {
        id: 'c3',
        text: 'Use decision playbook to decide monitoring/management/referral.',
        tip: 'Simple patterns: stable mild = monitor; declining = act; multi-domain = investigate.'
      }
    ]
  },
  {
    id: 'system',
    name: 'What the System Does',
    color: 'purple',
    steps: [
      {
        id: 'sys1',
        text: 'Auto-score tasks and generate summary.',
        tip: 'No manual scoring or calculation required.'
      },
      {
        id: 'sys2',
        text: 'Write summary into structured field (or attach PDF).',
        tip: 'Integrates with your EHR workflow; no copy-paste needed.'
      },
      {
        id: 'sys3',
        text: 'Update quality dashboard (screening coverage, risk distribution).',
        tip: "Managers see aggregated view; front-line doesn't have to run extra reports."
      }
    ]
  }
];

export const summaryBullets: SummaryBullet[] = [
  {
    number: 1,
    text: 'Cognitive problems are currently handled ad-hoc and too late.'
  },
  {
    number: 2,
    text: "We add a 5–15 minute digital check that becomes a repeatable 'cognitive vital sign' at high-risk visits."
  },
  {
    number: 3,
    text: 'You get a simple, standardized report that makes it easier to decide and document.'
  },
  {
    number: 4,
    text: 'At scale, your clinics and network finally see and manage cognitive risk with data, not anecdotes.'
  }
];

export default {
  hero: heroContent,
  visitFlows,
  pillars,
  reportRegions,
  decisionRows,
  workflowLanes,
  summaryBullets
};

