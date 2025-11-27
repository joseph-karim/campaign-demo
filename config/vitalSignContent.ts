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
    caption: "Structured tools exist, but coverage and consistency vary.",
    tooltip: "Clinicians use MoCA and clinical interviews, but time, training, and documentation limits create gaps."
  },
  newApproach: {
    label: "With cognitive vital sign",
    caption: "Same clinical judgment, better coverage and data.",
    tooltip: "Digital workflow makes structured assessment routine, not exceptional."
  }
};

// New section header content
export const comparisonSectionContent = {
  headline: "How we assess cognition today: structured tests, workarounds, and operational friction",
  subhead: "Clinicians are not \"just guessing.\" They use validated tools like the Montreal Cognitive Assessment (MoCA) and clinical interviews. The gap is not intent. It\'s time, coverage, and what happens to the results.",
  columnLabels: {
    statusQuo: "Standard practice (MoCA, interview, charting)",
    digital: "Standard practice + digital cognitive workflow"
  }
};

// MoCA Reality Check content
export const mocaRealityCheck = {
  strengths: {
    title: "What MoCA does well",
    bullets: [
      "Validated and widely recognized screen for cognitive impairment.",
      "Clinically intuitive tasks (clock drawing, recall, etc.).",
      "Low direct cost and no vendor dependency.",
      "Fits well into specialist memory clinics and motivated primary-care sites with time and training."
    ]
  },
  limitations: {
    title: "Operational limits in everyday clinics",
    bullets: [
      "10+ minutes of face-to-face time per patient is hard to sustain at scale.",
      "Requires trained staff and a quiet environment; not every site has both consistently.",
      "Manual scoring and charting are extra steps that don\'t feed into system-level dashboards.",
      "Difficult to run routinely for all eligible patients; in practice, often used selectively."
    ]
  },
  footer: "The goal is not to replace MoCA or clinical judgment where they fit well. The goal is to make structured cognitive assessment simpler, more consistent, and easier to scale across a whole network."
};

export const visitFlows: VisitFlow[] = [
  {
    id: 'awv',
    name: 'Annual Wellness Visit (65+)',
    statusQuo: [
      {
        id: 'sq1',
        title: 'Step 1 – Identifying who to assess',
        text: 'Some clinics follow protocol (AWVs → MoCA). Others trigger based on patient/family concern or observations. Coverage varies by site and clinician. High-risk patients can go years without structured testing if they don\'t complain or time is tight.',
        matchingStepId: 'vs1'
      },
      {
        id: 'sq2',
        title: 'Step 2 – Running the MoCA (or similar)',
        text: 'MoCA is validated, familiar, and widely used. Takes ~10 min face-to-face, requires trained staff and quiet setting. In a 15–20 min visit, hard to add on top of everything else—often reserved for "obvious" cases.',
        matchingStepId: 'vs2'
      },
      {
        id: 'sq3',
        title: 'Step 3 – Scoring and interpreting',
        text: 'Score calculated by hand, cut-offs guide interpretation. Clinician combines with history, function, mood, sleep, meds, family input. Manual scoring is error-prone; usually only a single total score, no domain breakdown.',
        matchingStepId: 'vs3'
      },
      {
        id: 'sq4',
        title: 'Step 4 – Documentation',
        text: '"MoCA 23/30 today. Mild deficits in delayed recall." Notes are scattered and free-text. Hard to aggregate across patients, see system-level coverage, or trend scores at scale.',
        matchingStepId: 'vs4'
      },
      {
        id: 'sq5',
        title: 'Step 5 – Follow-up and referrals',
        text: 'MoCA and clinical picture guide whether to reassure, order labs/imaging, or refer. Many clinicians are thoughtful here. Without consistent screening, referrals often skew toward later-stage cases.',
        matchingStepId: 'vs5'
      }
    ],
    withVitalSign: [
      {
        id: 'vs1',
        title: 'Step 1 – Identifying who to assess',
        text: 'Same clinical rules (AWVs, memory complaints, high-risk cohorts), but EHR schedule or registry flags eligible patients automatically. Consistent protocol applied across clinics—no reliance on individual memory.'
      },
      {
        id: 'vs2',
        title: 'Step 2 – Running the assessment',
        text: 'Patient completes 5–15 min tasks on tablet in waiting room or at home before visit. MA/Nurse launches and supports basic navigation. Frees up direct clinician time; makes routine screening realistic.'
      },
      {
        id: 'vs3',
        title: 'Step 3 – Scoring and interpreting',
        text: 'Tests scored automatically. Results presented as overall risk level, domain-specific scores (memory, attention, executive), and trends vs previous. Sits alongside MoCA if still used. Less manual calculation, easier to spot subtle changes.'
      },
      {
        id: 'vs4',
        title: 'Step 4 – Documentation',
        text: 'Structured summary saved in consistent format—smartphrases, flowsheets, PDF attachments. Reliably shows "this many screened," "this many with follow-up plans." Supports AWV metrics, dementia programs, and QA.'
      },
      {
        id: 'vs5',
        title: 'Step 5 – Follow-up and referrals',
        text: 'System suggests follow-up intervals, highlights patterns meriting referral. Clinician still decides, but with more structured input. Referrals based on objective patterns, not just how worried clinician feels that day.'
      }
    ]
  },
  {
    id: 'memory',
    name: 'Memory Complaint Visit',
    statusQuo: [
      {
        id: 'sq1',
        title: 'Step 1 – Patient presents concern',
        text: 'Patient or family says "I\'m worried about memory." Without baseline data, hard to know if this is new or longstanding. Severity unclear from subjective reports alone.',
        matchingStepId: 'vs1'
      },
      {
        id: 'sq2',
        title: 'Step 2 – Clinical interview',
        text: 'PCP asks open-ended questions, uses MoCA if time allows. Relies heavily on patient/family recall of symptoms. Quality of information varies with reporter and available time.',
        matchingStepId: 'vs2'
      },
      {
        id: 'sq3',
        title: 'Step 3 – Uncertain severity',
        text: 'Hard to distinguish normal aging, mild impairment, or something more serious without objective data. Single MoCA score doesn\'t show which domains are affected.',
        matchingStepId: 'vs3'
      },
      {
        id: 'sq4',
        title: 'Step 4 – Referral decision',
        text: 'Often defaults to specialist referral "just to be safe" even for borderline cases. Creates bottlenecks at memory clinics. Appropriate cases may wait longer.',
        matchingStepId: 'vs4'
      }
    ],
    withVitalSign: [
      {
        id: 'vs1',
        title: 'Step 1 – Objective baseline',
        text: 'Digital assessment completed—now you have actual data to anchor the conversation. If prior assessments exist, you can see change over time.'
      },
      {
        id: 'vs2',
        title: 'Step 2 – Domain-specific view',
        text: 'See exactly which domains are affected: memory, attention, or executive. More precise than a single total score. Helps distinguish patterns.'
      },
      {
        id: 'vs3',
        title: 'Step 3 – Clear severity indicator',
        text: 'Risk band shows where patient falls compared to age-matched norms. Combined with clinical judgment, guides appropriate level of concern.'
      },
      {
        id: 'vs4',
        title: 'Step 4 – Appropriate referral',
        text: 'Refer when data supports it; manage mild or stable cases in primary care. Reduces unnecessary specialist referrals while catching appropriate ones earlier.'
      },
      {
        id: 'vs5',
        title: 'Step 5 – Trackable over time',
        text: 'Repeat assessment shows if intervention is working or condition is progressing. Provides objective evidence for care plan adjustments.'
      }
    ]
  },
  {
    id: 'adhd',
    name: 'ADHD Evaluation',
    statusQuo: [
      {
        id: 'sq1',
        title: 'Step 1 – Subjective scales',
        text: 'Diagnosis relies on self-report questionnaires (Vanderbilt, ASRS). These are validated and useful, but capture perception, not performance.',
        matchingStepId: 'vs1'
      },
      {
        id: 'sq2',
        title: 'Step 2 – Limited objective data',
        text: 'No routine way to measure actual attention or impulsivity performance in most primary care settings. Full neuropsych testing is time-intensive and often inaccessible.',
        matchingStepId: 'vs2'
      },
      {
        id: 'sq3',
        title: 'Step 3 – Diagnostic uncertainty',
        text: 'Symptoms overlap with anxiety, depression, sleep issues. Without objective cognitive data, distinguishing ADHD from look-alike conditions is challenging.',
        matchingStepId: 'vs3'
      },
      {
        id: 'sq4',
        title: 'Step 4 – Treatment monitoring',
        text: 'Start medication and monitor subjective improvement. No baseline cognitive performance to compare against. Hard to objectively assess treatment response.',
        matchingStepId: 'vs4'
      }
    ],
    withVitalSign: [
      {
        id: 'vs1',
        title: 'Step 1 – Objective attention data',
        text: 'Digital tasks measure actual attention performance, not just self-perception. Complements subjective scales with objective evidence.'
      },
      {
        id: 'vs2',
        title: 'Step 2 – Multi-domain view',
        text: 'See attention, working memory, and executive function separately. Provides richer picture than questionnaires alone.'
      },
      {
        id: 'vs3',
        title: 'Step 3 – Differential support',
        text: 'Pattern of deficits helps distinguish ADHD from look-alike conditions. Anxiety and depression show different cognitive signatures.'
      },
      {
        id: 'vs4',
        title: 'Step 4 – Treatment monitoring',
        text: 'Re-test after intervention to see objective improvement. Provides concrete evidence of treatment response.'
      },
      {
        id: 'vs5',
        title: 'Step 5 – Longitudinal tracking',
        text: 'Build a cognitive profile over time, not just a single snapshot. Track stability, improvement, or new concerns.'
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
      staff: "You don\'t have to interpret anything; the report does it for you.",
      manager: 'Every provider follows the same cognitive assessment process.'
    },
    expanded: {
      bullets: [
        'Is there a cognitive problem?',
        'Where is it (memory, attention, executive)?',
        'Is it stable, improving or worsening?'
      ],
      example: {
        clinician: "Instead of: 'MoCA 24 – is that concerning?'\nYou see: 'Memory below age norms, attention average, stable over 2 visits.'",
        staff: "You don\'t have to know neuropsychology; you just start the test and the provider reads the result.",
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
          before: 'Learn/administer MoCA, hand-score, document results.',
          after: 'Launch → patient self-administers → result appears.'
        },
        {
          role: 'PCP',
          before: '"If I start a MoCA, I lose 10–15 minutes."',
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
        clinician: 'Your chart note includes objective data, not just "MoCA 24" or "patient denies memory problems."',
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
    vignette: "Ms. Garcia, 72, reports occasional forgetfulness; assessment shows low attention but normal memory and executive; PHQ-9 elevated; she sleeps 4–5h/night.",
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
    vignette: "Mr. Chen, 78, brought in by daughter who noticed increasing forgetfulness and poor judgment with finances; assessment shows memory and executive both below age norms.",
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
        tip: "Your EHR list can be pre-filtered to 65+ AWVs; you don\'t search manually."
      },
      {
        id: 's2',
        text: 'Launch assessment, hand tablet to patient.',
        tip: "Say: 'You\'ll see some short brain games; just follow the instructions.'"
      },
      {
        id: 's3',
        text: 'Check completion; note any issues.',
        tip: "If patient couldn\'t complete, document why (vision, motor, refused, etc.)."
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
        text: 'Open chart → see cognitive summary.',
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
        tip: "Managers see aggregated view; front-line doesn\'t have to run extra reports."
      }
    ]
  }
];

export const summaryBullets: SummaryBullet[] = [
  {
    number: 1,
    text: 'Clinicians already use structured tools like MoCA, but time, coverage, and documentation create gaps.'
  },
  {
    number: 2,
    text: "A 5–15 minute digital check makes structured cognitive assessment routine, not reserved for 'obvious' cases."
  },
  {
    number: 3,
    text: 'You get a simple, standardized report with domain scores and trends—easier to decide and document.'
  },
  {
    number: 4,
    text: 'At scale, your clinics and network finally see cognitive risk with data, not scattered free-text notes.'
  }
];

export default {
  hero: heroContent,
  comparisonSection: comparisonSectionContent,
  mocaRealityCheck,
  visitFlows,
  pillars,
  reportRegions,
  decisionRows,
  workflowLanes,
  summaryBullets
};
