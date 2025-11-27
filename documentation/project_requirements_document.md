# Project Requirements Document (PRD)

## 1. Project Overview

This project is a single, highly interactive “State of the Union” web report called **Closing the Cognitive Assessment Gap**. It educates and engages four key personas—Primary Care, Neurology, Mental Health/ADHD, and Corporate Wellness—by dynamically changing headlines, charts, copy, and calls to action on the same URL. The goal is to drive traffic (ads, email, social), generate downloads of PDF assets as lead magnets, and produce reusable content for sales decks, slide packs, and social snippets.

We’re building it to spotlight under- and mis-diagnosis of cognitive issues (dementia, ADHD) and demonstrate how a 5–10 min digital assessment workflow catches more cases than legacy tools. The page must be skimmable for executives and deep enough for clinicians. Success means fast load times, zero friction downloads (no auth or gating), clear persona-driven messaging, and a polished clinical design that matches existing Creyos brand tokens.

## 2. In-Scope vs. Out-of-Scope

### In-Scope (Version 1)

*   A **single Next.js page** with seven interactive sections:

    1.  Hero with animated symptom-vs-diagnosed bars and soft “Download PDF” CTA (ungated)
    2.  Detection Gap narrative + tabbed charts (Dementia / ADHD / Traditional vs. Digital)
    3.  “Tool Lens” toggle comparing paper tests, ADHD tools, and impression-only
    4.  Persona-specific “Day-in-the-Life” workflows (Before vs. After digital)
    5.  Outcomes Dashboard (filterable metric cards)
    6.  ROI Calculator widget + 90-Day Implementation Checklist (email form only for PDF)
    7.  Final CTA strip with four persona cards (downloadable assets + secondary link)

*   **Sticky persona selector** that swaps text, visuals, and CTAs client-side without a page reload.

*   All chart & metric data stored in a **static JSON** config (e.g. `reportMetrics.json`), version-controlled.

*   Deployment on **Netlify** (public, static site).

*   **WCAG baseline** accessibility (keyboard focus, ARIA labels, color contrast).

*   Responsive design at mobile, tablet, desktop breakpoints.

### Out-of-Scope (Version 1)

*   User authentication or content gating beyond a simple email field for the 90-day plan PDF.
*   Analytics beyond Netlify logs (no GA, Segment, Amplitude).
*   Headless CMS or external API for dynamic content.
*   Time-series charts or real-time data updates.
*   Separate URLs or analytics segments per persona.
*   Complex backend services—this is a static build.

## 3. User Flow

A visitor lands on **/cognitive-assessment-gap** and sees the sticky persona selector at the top. They click “Primary Care,” immediately updating the hero headline, subhead, and animated bars to spotlight undiagnosed dementia. The “Download Evidence Pack” button triggers a direct PDF download. As they scroll, each section’s copy, charts, and CTAs remain tailored to their selected role. No full page reload occurs—every swap is handled in React state.

Further down, the user explores tabbed detection-gap charts, flips the “Tool Lens” toggle to see blind spots in paper tests, and examines a two-mode timeline contrasting “Before Digital” vs. “With Digital” workflows. They hover charts for tooltips, expand timeline steps for details, and finally play with the mini ROI calculator. After adjusting sliders, they click “Email Me the 90-Day Plan,” enter their address, and receive a PDF. At the end, they pick their persona’s final CTA card (e.g., “Download Dementia Screening Playbook”) and the asset downloads immediately.

## 4. Core Features

*   **Persona Personalization**\
    Sticky selector for four roles; updates hero text, subheads, chart data, copy emphasis, and CTAs in real time on one URL.
*   **Animated Hero Visualization**\
    Bars comparing diagnosed vs. undiagnosed dementia or ADHD overdiagnosis reduction, animated on load.
*   **Tabbed Detection-Gap Charts**\
    Three tabs (“Dementia,” “ADHD,” “Traditional vs. Digital”) driven by static JSON data.
*   **Tool Lens Toggle**\
    Side-by-side columns “What You Get” vs. “What You Miss” for paper tests, single-purpose ADHD tools, and clinical impression.
*   **Day-in-the-Life Timeline**\
    Two-mode (Before/After) persona-specific workflows with short labels and expandable descriptions.
*   **Outcomes Dashboard**\
    Filterable grid of metric cards tagged by “All,” “Dementia,” “ADHD,” “Operations,” “Research.”
*   **ROI Calculator Widget**\
    Slider inputs for monthly visits, screening rates, and revenue; real-time outputs for extra billables and time saved.
*   **90-Day Implementation Checklist**\
    Persona-specific, phase-based checklist with a simple email form to download a PDF.
*   **Final CTA Strip**\
    Four persona cards, each with primary downloadable asset and secondary navigation link.
*   **Static JSON Config**\
    Single source for all numbers and copy snippets, enabling quarterly updates in code.

## 5. Tech Stack & Tools

*   Frontend: **Next.js** (React framework) + **TypeScript**
*   Styling: **Tailwind CSS** with brand color tokens in a theme file
*   UI Components: **shadcn/ui** (prebuilt accessible components)
*   Charts: **Recharts** or **Chart.js** (lightweight, interactive)
*   Data: Static **JSON** config file (`reportMetrics.json`)
*   Deployment: **Netlify** (continuous deploy from Git)
*   Accessibility: WCAG baseline (ARIA roles, keyboard nav)

Brand assets (logo SVG, color hex, font families) are imported from the Creyos marketing site bundle. No additional IDE or plugin integrations required for v1.

## 6. Non-Functional Requirements

*   **Performance**:

    *   First Contentful Paint < 1.5 s on 3G throttled network
    *   Total bundle size < 250 KB gzipped

*   **Accessibility**:

    *   WCAG 2.1 AA baseline (color contrast ≥ 4.5:1, keyboard operability)

*   **Responsiveness**:

    *   Breakpoints at 320px (mobile), 768px (tablet), 1024px+ (desktop)

*   **Security**:

    *   Serve over HTTPS
    *   No user-generated content or XSS vectors

*   **Maintainability**:

    *   Single JSON config for all stats and copy
    *   Modular React components with clear props

## 7. Constraints & Assumptions

*   All data and copy live in a static JSON file; no headless CMS or external API.
*   No user accounts—PDF downloads occur immediately or via a simple email form without authentication.
*   Netlify handles builds, hosting, and asset delivery.
*   Creyos brand tokens (colors, fonts, logo) exist in a shared asset bundle.
*   Chart libraries chosen must support tree-shaking to keep bundles small.

## 8. Known Issues & Potential Pitfalls

*   **Bundle bloat from charts**: mitigate by lazy-loading chart components or using only necessary chart types.
*   **Interactive toggles SSR**: ensure persona selection is hydrated correctly on the client side—guard against mismatch warnings.
*   **JSON config drift**: enforce code reviews when updating stats; consider schema validation in build step.
*   **Mobile UX**: sticky persona selector must collapse or hide gracefully on small screens to avoid blocking content.
*   **Accessibility of dynamic content**: ensure ARIA live regions announce tab or toggle changes for screen-reader users.

This document is the single source of truth for all future technical specs—Tech Stack, Frontend Guidelines, Backend Structure, App Flowcharts, and Security Guidelines. All sections are unambiguous and complete for an AI or engineering team to begin implementation immediately.
