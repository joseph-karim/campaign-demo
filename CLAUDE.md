# Creyos Interactive Microsites

This project contains two interactive single-page microsites for **Creyos** cognitive assessment marketing.

---

## 1. Closing the Cognitive Assessment Gap (/)

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
- `app/page.tsx` - Main page
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
│   ├── page.tsx                              # Persona report
│   └── enterprise/
│       └── cognitive-assessment-landscape/
│           └── page.tsx                      # Enterprise page
├── components/
│   ├── report/                               # Persona report components
│   ├── enterprise/                           # Enterprise components
│   └── ui/                                   # shadcn/ui components
├── config/
│   ├── enterpriseCognitiveReport.ts
│   ├── competitiveLandscape.ts
│   └── valueScenario.ts
├── contexts/
│   └── PersonaContext.tsx
├── data/
│   └── reportMetrics.json
├── types/
│   ├── report.ts
│   └── enterprise.ts
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
- **Persona Report**: http://localhost:3000/
- **Enterprise Page**: http://localhost:3000/enterprise/cognitive-assessment-landscape

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

---

## Design Principles

- **No gating/forms/logins** - Everything explorable on-page
- **Static data only** - All content from config files, no API calls
- **Enterprise-ready** - Professional, data-driven presentation
- **Accessible** - WCAG 2.1 AA baseline, keyboard navigation
- **Responsive** - Mobile, tablet, desktop breakpoints
