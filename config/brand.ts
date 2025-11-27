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

// Page configurations for navigation
export const pages = [
  {
    id: 'closing-the-gap',
    title: 'Closing the Cognitive Assessment Gap',
    subtitle: 'State of the Union Report',
    description: 'Interactive report exploring the detection gap across clinical personas with ROI calculator and implementation guidance.',
    href: '/closing-the-gap',
    pillar: 'Early Detection',
    audience: ['Primary Care', 'Neurology', 'Mental Health', 'Corporate Wellness'],
    features: ['Persona Selector', 'Detection Gap Charts', 'ROI Calculator', '90-Day Checklist'],
    color: 'teal'
  },
  {
    id: 'cognitive-vital-sign',
    title: 'From Gut Feel to a Cognitive Vital Sign',
    subtitle: 'Product Marketing Narrative',
    description: 'Transform how you approach cognitive assessment with clear before/after comparisons and decision playbooks.',
    href: '/cognitive-vital-sign',
    pillar: 'Seamless Implementation',
    audience: ['Clinicians', 'Clinical Staff', 'Operations Managers'],
    features: ['Visit Flow Comparator', 'Report Walkthrough', 'Decision Playbook', 'Workflow Guide'],
    color: 'blue'
  },
  {
    id: 'enterprise-landscape',
    title: 'Enterprise Cognitive Assessment Landscape',
    subtitle: 'Strategic Overview for Health Systems',
    description: 'Comprehensive view of the market opportunity, competitive positioning, and enterprise rollout strategy.',
    href: '/enterprise/cognitive-assessment-landscape',
    pillar: 'A Smarter Approach',
    audience: ['CMO / CNO', 'Service Line Leaders', 'Chief Digital / CIO'],
    features: ['Market Analysis', 'Competitive Quadrant', 'Value Calculator', 'Rollout Timeline'],
    color: 'navy'
  },
  {
    id: 'gtm-blueprint',
    title: 'Enterprise GTM Blueprint',
    subtitle: 'Internal Planning Tool',
    description: 'Account targeting, persona mapping, channel strategy, and pilot design configurator for the GTM team.',
    href: '/internal/enterprise-gtm-blueprint',
    pillar: 'Seamless Implementation',
    audience: ['Sales', 'Marketing', 'Executive Team'],
    features: ['ICP Matrix', 'Trigger Radar', 'Account Blueprints', 'Pilot Configurator'],
    color: 'accent',
    internal: true
  }
];

export default {
  brand,
  colors,
  typography,
  spacing,
  radius,
  pages
};

