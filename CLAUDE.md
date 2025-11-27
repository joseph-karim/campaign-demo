# Creyos Interactive Microsites

This project contains four interactive single-page microsites for **Creyos** cognitive assessment marketing, GTM planning, and sales enablement, plus a unified navigation hub.

## Navigation Hub (/)

The landing page provides a central navigation point to all reports with:
- Creyos branding and logo
- Validation badges (30+ years, 400+ studies, 10,000+ providers)
- Brand attribute tags
- Report cards with descriptions, target audiences, and key features
- Four pillars section

---

## 1. Closing the Cognitive Assessment Gap (/closing-the-gap)

An interactive "State of the Union" report targeting clinical personas.

### Target Personas
- Primary Care
- Neurology
- Mental Health / ADHD
- Corporate Wellness

### Features
- Sticky persona selector with real-time content switching
- Animated hero visualization (diagnosed vs undiagnosed)
- Tabbed detection gap charts (Recharts)
- Tool Lens toggle comparison
- Day-in-the-Life timeline (Before/After)
- Filterable outcomes dashboard
- ROI calculator with sliders
- 90-Day implementation checklist
- Persona-specific CTA cards

### Files
- `app/closing-the-gap/page.tsx` - Main page
- `components/report/*` - All section components
- `contexts/PersonaContext.tsx` - Persona state management
- `data/reportMetrics.json` - All content/data

---

## 2. Enterprise Cognitive Assessment Landscape (/enterprise/cognitive-assessment-landscape)

An enterprise-focused microsite for IDN/health system executives.

### Target Audience
- CMO / CNO / Chief Population Health
- Service Line Leaders (Neuro, Psych, Primary Care)
- Chief Digital / CIO

### Features
1. **EnterpriseHero** - Stakeholder toggle with persona-specific messaging
2. **MacroForcesPanel** - 4 expandable cards (Demographics, Regulation, Workforce, Technology)
3. **CompetitiveQuadrant** - Interactive scatter plot with lens toggle (Clinical/Deployability/Evidence)
4. **ValueScenarioExplorer** - Multi-slider calculator for network-scale impact modeling
5. **EnterpriseRolloutTimeline** - 4-phase implementation timeline with expandable details
6. **SalesAndPartnershipApproach** - Swimlane diagram (Creyos/Clinical/IT lanes)
7. **SummaryForExecs** - 3 expandable pillars (Strategic Fit, Operational Reality, Enterprise Upside)

### Files
- `app/enterprise/cognitive-assessment-landscape/page.tsx` - Main page
- `components/enterprise/*` - All section components
- `config/enterpriseCognitiveReport.ts` - Hero, macro forces, exec pillars
- `config/competitiveLandscape.ts` - Competitor data and quadrant config
- `config/valueScenario.ts` - Calculator defaults, rollout phases, swimlane stages
- `types/enterprise.ts` - TypeScript interfaces

---

## 3. Enterprise GTM Blueprint (/internal/enterprise-gtm-blueprint)

An internal-only GTM planning tool for enterprise sales strategy.

### Purpose
The "control room" for execs and GTM teams to explore account targeting, triggers, messaging, channels, and execution planning.

### Features
1. **GtmHeroOverview** - Objective, target, timeframe with Exec/Field view toggle
2. **IcpPersonaMatrix** - ICP selector (Mega-IDN, Academic, Regional) with 6 persona cards per type, expandable details
3. **TriggerRadar** - Trigger checklist with Dream 25 account scoring (hot/warm/cold), account drawer with signals
4. **AccountBlueprintExplorer** - 4-step storyboard (Wedge, Say, Propose, Measure) per account/persona
5. **ChannelAndPlayMatrix** - Channel × Persona matrix by phase, clickable cells with specific plays
6. **PilotDesignConfigurator** - Interactive pilot builder (type, scope, use case, integration level → outputs)
7. **ExecutionPhaseTimeline** - Task grid by phase (0-3, 3-9, 9-18 months) and owner (Exec, PMM, Sales, Clinical, Product)
8. **KaiserStoryboard** - Concrete account example with 5-panel storyboard (Context, Entry, Meeting, Pilot, Expansion)
9. **SummaryForExecs** - 3 decision categories (Targets, Resourcing, Risk/ROI) with expandable details

### Files
- `app/internal/enterprise-gtm-blueprint/page.tsx` - Main page
- `components/gtm/*` - All section components
- `config/gtmBlueprint.ts` - Overview, triggers, accounts, channels, phases, tasks, storyboards, decisions
- `config/gtmPersonas.ts` - ICP configs, persona details, account blueprints, channel plays
- `config/gtmPilot.ts` - Pilot templates and calculator logic
- `types/gtm.ts` - TypeScript interfaces

---

## 4. Cognitive Vital Sign (/cognitive-vital-sign)

An interactive product marketing page translating the narrative into a demo-ready experience.

### Purpose
Makes the status quo vs new approach obvious in under 30 seconds for clinicians, staff, and ops.

### Features
1. **VitalSignHero** - Split card comparing "Today" vs "With cognitive vital sign" with hover tooltips
2. **PersonaViewSwitcher** - Sticky bar to switch between Clinician, Staff, and Manager views
3. **VisitFlowComparator** - Side-by-side before/after timelines for AWV, Memory Complaint, and ADHD visits
4. **ThreePillarsExplorer** - Expandable cards for Clarity, Workload, and System Value with persona-specific content
5. **ReportWalkthrough** - Interactive mock report with clickable regions explaining each part
6. **DecisionPlaybook** - If-this-then-that grid with clinical vignettes and patient scripts
7. **ClinicQuickStart** - Swimlane diagram showing Staff, Clinician, and System workflows
8. **SummaryStrip** - 4-bullet story summary with CTA

### Files
- `app/cognitive-vital-sign/page.tsx` - Main page
- `components/vital-sign/*` - All section components
- `contexts/VitalSignPersonaContext.tsx` - Persona state for content switching
- `config/vitalSignContent.ts` - All content, flows, pillars, playbook, workflows
- `types/vitalSign.ts` - TypeScript interfaces

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix primitives)
- **Charts**: Recharts
- **State**: React useState/useContext (no external state library)

---

## Project Structure

```
├── app/
│   ├── page.tsx                              # Navigation Hub (landing)
│   ├── closing-the-gap/
│   │   └── page.tsx                          # Persona report
│   ├── cognitive-vital-sign/
│   │   └── page.tsx                          # Cognitive Vital Sign
│   ├── enterprise/
│   │   └── cognitive-assessment-landscape/
│   │       └── page.tsx                      # Enterprise page
│   └── internal/
│       └── enterprise-gtm-blueprint/
│           └── page.tsx                      # GTM Blueprint (internal)
├── components/
│   ├── shared/                               # Shared header, footer, brand
│   ├── report/                               # Persona report components
│   ├── vital-sign/                           # Cognitive Vital Sign components
│   ├── enterprise/                           # Enterprise components
│   ├── gtm/                                  # GTM blueprint components
│   └── ui/                                   # shadcn/ui components
├── config/
│   ├── brand.ts                              # Creyos brand colors, typography, pages
│   ├── enterpriseCognitiveReport.ts
│   ├── competitiveLandscape.ts
│   ├── valueScenario.ts
│   ├── vitalSignContent.ts                   # Vital Sign flows, pillars, playbook
│   ├── gtmBlueprint.ts                       # GTM overview, triggers, accounts
│   ├── gtmPersonas.ts                        # ICP/persona configurations
│   └── gtmPilot.ts                           # Pilot design templates
├── contexts/
│   ├── PersonaContext.tsx                    # Persona report context
│   └── VitalSignPersonaContext.tsx           # Vital Sign persona context
├── data/
│   └── reportMetrics.json
├── types/
│   ├── report.ts
│   ├── enterprise.ts
│   ├── gtm.ts
│   └── vitalSign.ts
├── public/
│   └── CreyosLogo-RGB-1.webp                 # Creyos logo
└── documentation/                            # Project requirements docs
```

---

## Getting Started

```bash
# Fix npm cache permissions (if needed)
sudo chown -R $(whoami) ~/.npm

# Install dependencies
npm install

# Run development server
npm run dev
```

### URLs
- **Navigation Hub**: http://localhost:3000/
- **Closing the Gap**: http://localhost:3000/closing-the-gap
- **Cognitive Vital Sign**: http://localhost:3000/cognitive-vital-sign
- **Enterprise Page**: http://localhost:3000/enterprise/cognitive-assessment-landscape
- **GTM Blueprint** (internal): http://localhost:3000/internal/enterprise-gtm-blueprint

---

## Content Updates

### Persona Report
Edit `data/reportMetrics.json` to update:
- Headlines, copy, stats
- Chart data
- Timeline steps
- ROI defaults
- CTA content

### Enterprise Page
Edit config files in `/config/`:
- `enterpriseCognitiveReport.ts` - Hero, macro forces, exec pillars
- `competitiveLandscape.ts` - Competitor positions and tooltips
- `valueScenario.ts` - Calculator defaults, rollout phases

### GTM Blueprint
Edit config files in `/config/`:
- `gtmBlueprint.ts` - Overview, triggers, Dream 25 accounts, channels, phases, tasks, storyboards, exec decisions
- `gtmPersonas.ts` - ICP configurations, persona details, account blueprints, channel plays
- `gtmPilot.ts` - Pilot templates (duration, roles, objectives, exit criteria)

### Cognitive Vital Sign
Edit `config/vitalSignContent.ts` to update:
- `heroContent` - Headline, subhead, body, comparison cards
- `visitFlows` - AWV, Memory Complaint, ADHD before/after steps
- `pillars` - Clarity, Workload, System Value content (with persona variants)
- `reportRegions` - Mock report explanations
- `decisionRows` - Playbook scenarios, vignettes, patient scripts
- `workflowLanes` - Staff, Clinician, System swimlane steps
- `summaryBullets` - Final 4-bullet story

---

## Design Principles

- **No gating/forms/logins** - Everything explorable on-page
- **Static data only** - All content from config files, no API calls
- **Enterprise-ready** - Professional, data-driven presentation
- **Accessible** - WCAG 2.1 AA baseline, keyboard navigation
- **Responsive** - Mobile, tablet, desktop breakpoints
