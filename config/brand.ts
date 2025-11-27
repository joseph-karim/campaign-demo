// Creyos Brand Configuration
// Based on official Creyos brand guidelines

export const brand = {
  name: 'Creyos',
  tagline: 'Validated Cognitive Assessment for Confident Clinical Decisions',
  
  // Core promise
  promise: 'Validated cognitive "infrastructure" for care.',
  
  // Brand attributes
  attributes: [
    'Scientific',
    'Clinical but human',
    'Clear',
    'Accessible',
    'Modern, not gimmicky'
  ],
  
  // Messaging pillars
  pillars: [
    'Early Detection',
    'Seamless Implementation',
    'Designed for Accessibility',
    'A Smarter Approach'
  ],
  
  // Validation points
  validation: {
    yearsOfResearch: '30+',
    peerReviewedStudies: '400+',
    providers: '10,000+'
  }
};

// Color System
export const colors = {
  // Primary colors
  primary: {
    blue: '#0066CC',        // Main brand color, primary actions, key headings
    navy: '#0A1628',        // Hero backgrounds, footer, high-contrast
    navyLight: '#1A2744',   // Slightly lighter navy for cards on dark
  },
  
  // Accent colors
  accent: {
    teal: '#00A3A3',        // Subtle highlights, icons, hover states
    tealLight: '#00C4C4',   // Lighter teal for hover
    tealDark: '#008080',    // Darker teal
  },
  
  // Neutrals
  neutral: {
    white: '#FFFFFF',
    lightest: '#F8FAFC',    // Very light grey for backgrounds
    light: '#F1F5F9',       // Light grey for cards, panels
    mid: '#94A3B8',         // Secondary text, borders
    dark: '#475569',        // Body text on light
    darkest: '#1E293B',     // Headings on light
  },
  
  // State colors (use sparingly)
  state: {
    success: '#059669',     // Confirmations, positive status
    warning: '#D97706',     // Caution messages
    error: '#DC2626',       // Errors, validation
    info: '#0284C7',        // Info messages
  }
};

// Typography
export const typography = {
  fontFamily: {
    primary: 'Inter, system-ui, -apple-system, sans-serif',
  },
  
  // Font sizes (in pixels)
  fontSize: {
    h1Desktop: 44,
    h1Mobile: 32,
    h2Desktop: 32,
    h2Mobile: 24,
    h3: 22,
    body: 16,
    small: 14,
    overline: 12,
  },
  
  // Font weights
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  }
};

// Spacing (based on 8px unit)
export const spacing = {
  unit: 8,
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
  xxl: 64,
};

// Border radius
export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

// Page configurations for navigation - structured for exec clarity
export const pages = [
  {
    id: 'closing-the-gap',
    number: 1,
    workingName: 'Cognitive Detection Gap & Market Context',
    title: 'Market & Detection Gap Report',
    type: 'External-facing "state of the union" report',
    href: '/closing-the-gap',
    color: 'teal',
    
    // What it does
    whatItDoes: 'Shows executives and clinical leaders how cognitive assessment is done today (MoCA, interviews, referral patterns), where the gaps are in coverage and timing, and how a standardized digital workflow changes detection with simple, defensible assumptions.',
    
    // Key question it answers
    keyQuestion: 'Is this a real problem, and is it big enough to matter to our system?',
    
    // Primary audience
    audience: [
      'Health system execs (CMO, Chief Quality, Pop Health)',
      'Service-line leaders (Primary Care, Neuro, Psych)',
      'Internal leadership for market sizing'
    ],
    
    // How it fits
    howItFits: {
      marketing: 'Sets the category problem (under-detection and inconsistent screening). Provides neutral charts reusable in decks and website.',
      operations: 'Frames the opportunity in terms of coverage and workflow, not just science. Supports AWV and dementia strategy conversations.'
    },
    
    // What\'s inside
    modules: [
      'Persona selector (PCP, Neuro, MH, Wellness)',
      'Detection gap visuals (current vs target)',
      'Simple ROI calculator (volume-based, not hype)',
      '90-day implementation outline'
    ],
    
    // How to use
    howToUse: [
      'First thing to send a serious prospect who asks "Why do we need this at all?"',
      'Backbone for the "Problem" section in enterprise pitches and talks'
    ]
  },
  {
    id: 'cognitive-vital-sign',
    number: 2,
    workingName: 'How Digital Cognitive Assessment Fits Into a Visit',
    title: 'Clinical Workflow & Product Value Report',
    type: 'External-facing product/operations report',
    href: '/cognitive-vital-sign',
    color: 'blue',
    
    whatItDoes: 'Shows, step-by-step, how Creyos fits into real workflows: AWV in primary care, memory/neurology consults, ADHD/mental health evaluations. Compares standard practice (MoCA + history + notes) with standard practice plus digital—no dunking on clinicians.',
    
    keyQuestion: 'What actually changes in my day and my clinic if we use this?',
    
    audience: [
      'Clinicians (PCP, Neuro, Psych)',
      'Clinical staff (MAs, Nurses)',
      'Clinic managers and operations leads'
    ],
    
    howItFits: {
      marketing: 'Bridges the gap between abstract "we detect things earlier" claims and what happens in a 20-minute visit.',
      operations: 'Gives clinic managers a concrete view of roles, time impact, and documentation flow. Basis for training content.'
    },
    
    modules: [
      'Visit flow comparator (today vs today + digital)',
      'Report walkthrough (what each part means)',
      'Decision playbook (3-5 common patterns with scripts)',
      'Workflow lanes (staff / clinician / system)'
    ],
    
    howToUse: [
      'Demo spine when talking to clinicians or managers',
      'Reference when someone says "show me exactly where it fits"'
    ]
  },
  {
    id: 'enterprise-landscape',
    number: 3,
    workingName: 'Cognitive Assessment for Health Systems – Strategy & Rollout',
    title: 'Enterprise Strategy & Positioning Report',
    type: 'External-facing strategic/positioning report',
    href: '/enterprise/cognitive-assessment-landscape',
    color: 'navy',
    
    whatItDoes: 'Gives health system leadership a full picture of the cognitive assessment category, where existing tools sit (MoCA, Qbtech, Neurotrack, CANTAB), where Creyos sits (multi-condition, deployable, validated), and how system-level rollout typically happens.',
    
    keyQuestion: 'How does this fit our overall digital and clinical strategy, and why this platform vs others?',
    
    audience: [
      'CMO, CNO, Chief Quality',
      'Service-line leaders (Neuro, Psych, Primary Care)',
      'Chief Digital Officer, CIO, CMIO, Innovation teams'
    ],
    
    howItFits: {
      marketing: 'Clarifies Creyos as a layer across a system, not a tool for one clinic. Competitive context for RFPs.',
      operations: 'Realistic sense of a 2-3 year journey. Frames pilots, governance, and integration levels.'
    },
    
    modules: [
      'Market context (dementia burden, AWV requirements)',
      'Competitive quadrant (breadth vs deployability)',
      'Network value scenarios (5, 10, 20 hospitals)',
      'Rollout timeline (phases, decisions, roles)'
    ],
    
    howToUse: [
      'Main pre-read for serious enterprise prospects',
      'Reference for your own strategy on segments and use cases'
    ]
  },
  {
    id: 'gtm-blueprint',
    number: 4,
    workingName: 'Enterprise GTM Blueprint',
    title: 'Enterprise GTM Operating Plan',
    type: 'Internal only – sales/marketing/exec planning tool',
    href: '/internal/enterprise-gtm-blueprint',
    color: 'accent',
    internal: true,
    
    whatItDoes: 'Pulls together which types of systems to target, which personas matter, which triggers make an account worth your time, how pilots should be shaped, and which channels and plays to use at each phase.',
    
    keyQuestion: 'Who are we targeting, with what story, through which channels, and what does a "good" pilot and deal look like?',
    
    audience: [
      'Sales / BD',
      'PMM / Marketing',
      'Exec team (focus and resourcing decisions)'
    ],
    
    howItFits: {
      marketing: 'Ensures all outward efforts (reports, website, decks) are pointed at the same accounts with consistent narrative.',
      operations: 'Defines "success" in 12-18 months. Shared view of account prioritization and pilot design.'
    },
    
    modules: [
      'ICP & persona matrix (jobs-to-be-done)',
      'Trigger radar (which systems are "warm")',
      'Account blueprints (4-step entry story)',
      'Pilot configurator (duration, metrics, exit criteria)',
      'Execution timeline (0-3, 3-9, 9-18 months)'
    ],
    
    howToUse: [
      'Single reference for "Which systems are we going after?"',
      'Answer to "What does a good pilot look like?"',
      'How marketing supports sales right now'
    ]
  }
];

// Executive summary of how all reports fit together
export const execSummary = {
  intro: 'Think of this as your internal catalog of reports.',
  framework: [
    {
      number: 1,
      title: 'Market & Detection Gap Report',
      summary: 'Why this category matters at all.'
    },
    {
      number: 2,
      title: 'Clinical Workflow & Product Value Report',
      summary: 'What actually changes in a visit or clinic.'
    },
    {
      number: 3,
      title: 'Enterprise Strategy & Positioning Report',
      summary: 'How this fits a health system\'s broader strategy and why us vs others.'
    },
    {
      number: 4,
      title: 'Enterprise GTM Operating Plan',
      summary: 'How we focus our efforts and turn all of the above into real deals and pilots.',
      internal: true
    }
  ]
};

export default {
  brand,
  colors,
  typography,
  spacing,
  radius,
  pages,
  execSummary
};
