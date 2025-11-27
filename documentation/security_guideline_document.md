# Implementation Plan: "Closing the Cognitive Assessment Gap"

This plan is organized into phases, feature breakdowns, and cross-cutting concerns (performance, accessibility, security). Each section outlines key tasks, deliverables, and responsible parties.

---

## 1. Project Setup & Architecture

### 1.1. Repository & Tooling
- Fork and clone the CodeGuide Starter Fullstack repo.
- Initialize Git branches: `main`, `develop`, feature branches (`feature/persona-selector`, etc.).
- Install dependencies:
  - Next.js (latest LTS)
  - React, TypeScript
  - Tailwind CSS + Shadcn UI
  - Recharts or Chart.js
  - ESLint + Prettier for code quality
- Configure:
  - `tsconfig.json` (strict mode)
  - `tailwind.config.js` (brand colors, fonts)
  - `.env.local` for secrets (PDF storage URL, email-capture API key)

### 1.2. Directory Structure
```
/pages
  index.tsx             # Main report page
  api/download.ts       # (Optional) email capture endpoint
/components
  PersonaSelector.tsx
  Charts/
  Timelines/
  ROI/
  Checklist/
  CTA/
/data
  reportMetrics.json    # static content & chart data
/public
  assets/brand          # logos, fonts, PDF files
/styles
  globals.css           # Tailwind import
```

---

## 2. Data Modeling & Static JSON

- Define `reportMetrics.json` schema:
  - Personas: id, name, copy blocks, chart datasets, timeline steps, checklist items, CTA links
  - Chart definitions: type, labels, values
  - ROI parameters: default rates, cost factors
- Validate JSON against a TypeScript interface (`src/types.ts`).
- Embed JSON as a strongly-typed import in Next.js (no runtime parsing surprises).

Cross-Cutting: Input Validation
- The JSON file is the only external data source. Validate its shape at build time using Zod or a similar schema validator.

---

## 3. Feature Breakdown

### 3.1. Persona Personalization
- **Component:** `<PersonaSelector>`
- **Behavior:** Sticky on scroll, persists selection in React context and `localStorage`.
- **Dynamic Content:** Wrap content regions in a `PersonaContext` provider to switch copy, charts, timelines, CTAs.
- **Accessibility:** Keyboard navigable, `aria-current` on selected persona.

### 3.2. Interactive Data Visualization
- **Components:** `<GapChart>`, `<BenefitChart>`
- **Library:** Recharts (tree-shakeable) or Chart.js (bundle-typed)
- **Data Binding:** Pull persona-specific datasets from `reportMetrics.json`
- **Performance:** Lazy-load chart library with `next/dynamic` and suspense fallback.
- **Security:** No user input feeds charts, so XSS risk is negligible.

### 3.3. Tool Lens Toggle
- **Component:** `<ToolLensToggle>`
- **State:** Selected assessment method stored in context.
- **UI:** Accessible radio buttons or segmented control (Shadcn UI).
- **Content Update:** Highlight corresponding data series in charts and timeline annotations.

### 3.4. Day-in-the-Life Timelines
- **Component:** `<Timeline beforeData=s… afterData=…>`
- **Structure:** Side-by-side panels with icons, timestamps, descriptions.
- **Responsive:** Vertical stacking on small screens.
- **Animation:** Simple CSS transitions (no heavy libraries).

### 3.5. Outcomes Dashboard
- **Component:** `<OutcomeGrid>`
- **Functionality:** Persona and filterable metric cards.
- **Grid System:** CSS Grid via Tailwind.
- **Accessibility:** Cards use semantic `<article>`, proper headings.

### 3.6. ROI Calculator
- **Component:** `<ROICalculator>`
- **Inputs:** Number inputs, selects. All values validated client-side (min, max, step).
- **Calculation:** Pure function in TS. Unit-test edge cases.
- **Security:** No code injection; sanitize numeric inputs.

### 3.7. 90-Day Implementation Checklist
- **Component:** `<Checklist>`
- **Data:** Persona-specific steps from JSON.
- **Interaction:** Check/uncheck, persist in `localStorage`.
- **Email Capture:** Modal or inline form on CTA; POST to `/api/download` to send PDF link via email.

### 3.8. Final CTA Strip
- **Component:** `<PersonaCTACards>`
- **Content:** Links to ungated PDF downloads, contact sales.
- **Analytics:** Data attributes for click tracking (Google Analytics or Segment).

---

## 4. UI/UX & Accessibility

- **WCAG 2.1 AA** compliance:
  - Color contrast (Tailwind config enforced)
  - Keyboard navigation, focus states
  - ARIA roles & labels for interactive elements
- **Responsive Design:** Mobile-first breakpoints in Tailwind
- **Consistency:** Reuse Shadcn UI tokens and utility classes for spacing, typography

---

## 5. Performance Optimization

- **Code Splitting & Lazy Loading:** Charts, timeline animations, ROI modules
- **Image Optimization:** Next.js `<Image>` for brand assets
- **Static Export:** Prefer `next export` for a fully static site behind Netlify
- **Bundle Size Targets:** Enforce budget in CI (e.g., webpack bundle analyzer)
- **Caching:** Leverage Netlify cache headers for JSON, assets

---

## 6. Security Considerations

- **HTTPS Everywhere:** Netlify defaults to TLS 1.2+ with HSTS
- **Content Security Policy:** Define a strict CSP via `next.config.js` headers
- **Secure Headers:** `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`
- **No User-Generated HTML:** All content is static; injection risk is minimal
- **CSRF:** Only one state-changing endpoint (`/api/download`); protect with a synchronizer token
- **Secrets Management:** Email API key in Netlify environment variables (never in code)
- **Dependency Hygiene:** Lockfile in place; integrate automated vulnerability scanning (GitHub Dependabot)

---

## 7. Testing & QA

- **Unit Tests:** Calculator logic, context state management
- **Integration Tests:** Persona switching, chart rendering snapshots
- **E2E Tests:** Cypress to simulate user flows (persona select → interact → download)
- **Accessibility Audit:** Axe CI or Lighthouse checks in CI
- **Performance Checks:** Lighthouse budget enforcement

---

## 8. Deployment & Monitoring

- **Pipeline:** Push to `main` triggers Netlify deploy
- **Environments:** Preview deploys per PR; production on merge to main
- **Monitoring:** Netlify analytics and Sentry for client-side errors
- **Rollbacks:** Netlify instant rollback on failure

---

### Timeline Estimate (4 Weeks)

1. Week 1: Project setup, JSON modeling, persona selector, context layer
2. Week 2: Charts, tool lens toggle, timelines
3. Week 3: Dashboard, ROI calculator, checklist & email capture
4. Week 4: Final CTA, styling, accessibility, performance tuning, testing, deployment

*All code reviews will include security and accessibility checkpoints.*