# Frontend Guideline Document

This document outlines the architecture, design principles, and technologies for the interactive web report “Closing the Cognitive Assessment Gap.” It’s written in everyday language so anyone can understand how the frontend is structured, styled, and maintained.

## 1. Frontend Architecture

### 1.1 Frameworks and Libraries
- **Next.js**: Provides server-side rendering (SSR), static site generation (SSG), routing, and a fast developer experience. We use it in “single-page mode,” loading all content on one URL.
- **React**: Handles UI components and interactivity.
- **TypeScript**: Adds type safety to JavaScript, catching bugs early and improving code clarity.
- **Tailwind CSS**: Utility-first CSS for rapid styling and consistency.
- **shadcn/ui**: A component library built on Radix UI, giving us accessible, customizable UI building blocks.
- **Recharts** (or **Chart.js**): For animated, interactive charts and data visualizations.

### 1.2 How the Architecture Scales and Performs
- **Scalability**: Component-based structure makes it easy to add new features or personas. Shared components (buttons, cards, charts) live in a single folder, so updates ripple through the app.
- **Maintainability**: TypeScript types and centralized JSON (`reportMetrics.json`) keep data and copy in one place. CSS variables and Tailwind config ensure consistent styling.
- **Performance**: Next.js SSG and code splitting give us a fast initial load. Tailwind’s purge step removes unused styles. Charts load lazily to cut bundle size.

## 2. Design Principles

### 2.1 Key Principles
- **Usability**: Simple, clear interactions. Persona selector is always visible (sticky), so users never lose context.
- **Accessibility**: Follows WCAG baseline—semantic HTML, keyboard navigation, ARIA attributes on custom components, color contrast checks.
- **Responsiveness**: Mobile-first layout, using Tailwind’s responsive utilities to adapt across screen sizes.
- **Clarity**: Visual hierarchy guides the eye—headlines, subheadlines, and calls to action stand out.

### 2.2 Applying Principles to UI
- Buttons and links have focus states and clear labels.
- Charts include tooltips and alternate text for screen readers.
- Interactive elements meet minimum 44×44px touch targets.
- Persona selector uses radio buttons under the hood for accessibility but styled as a sticky horizontal menu.

## 3. Styling and Theming

### 3.1 CSS Approach
- **Tailwind CSS**: Utilities handle layout, spacing, typography, and colors.
- **CSS Variables**: Store brand colors and font families in `:root`. Tailwind’s `theme.extend` pulls these in.
- **No BEM/SMACSS**: Utility-first approach removes the need for traditional naming conventions.

### 3.2 Theme Configuration
In `tailwind.config.js`:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('shadcn/ui')],
}
```

### 3.3 Visual Style
- **Style**: Modern, flat design with subtle shadows and rounded corners. Where appropriate, use light glassmorphism (semi-transparent panels over solid backgrounds).
- **Color Palette** (brand values to be updated from Creyos guidelines):
  • --color-primary: #1E3A8A (Deep Blue)
  • --color-secondary: #D97706 (Amber)
  • --color-accent: #10B981 (Emerald)
  • --color-background: #FFFFFF (White)
  • --color-surface: #F3F4F6 (Light Gray)
  • --color-text: #111827 (Almost Black)
  • --color-text-muted: #6B7280 (Gray)
- **Font**: Inter for body and headings—readable at small sizes, with good character shapes for data labels.

## 4. Component Structure

### 4.1 Folder Organization
```
/components       # Reusable UI elements (Button, Card, Chart)
/components/PersonaSelector
/components/OutcomeCard
/components/ROIcalculator
/pages             # Next.js page resides here: pages/index.tsx
/public            # Static assets, images, icons
/data              # reportMetrics.json and other static JSON
/styles            # Global CSS, variables
```

### 4.2 Reusability and Consistency
- Each component has its own folder with:
  - `index.tsx` (component code)
  - `styles.module.css` or associated Tailwind classes
  - `component.test.tsx` (unit tests)
- Shared parts (e.g., ChartWrapper, PersonaContext) live under `/components/common`.
- Props are typed via TypeScript interfaces to ensure correct usage.

## 5. State Management

### 5.1 Approach
- **React Context + useState**: No heavy library (like Redux) needed for this scale.
- **PersonaContext**: Holds the selected persona and provides data slices (headlines, charts, copy) to all components.

### 5.2 Data Flow
1. On page load, `PersonaContextProvider` reads the default persona (e.g., “Primary Care”).
2. When a user selects a new persona, context updates and re-renders:
   - Headlines
   - Chart data
   - CTA text and URLs
3. Components subscribe to context via `useContext(PersonaContext)`.

## 6. Routing and Navigation

- **Single Page**: Only one route (`/`). Next.js handles this in `pages/index.tsx` or the App Router equivalent.
- **Internal Navigation**: Smooth scroll links to sections (e.g., Outcomes, ROI Calculator). Use Next.js `Link` or `<a href="#section-id">` for in-page jumps.
- **Sticky Persona Selector**: Always visible at top; no routing needed to switch content.

## 7. Performance Optimization

- **Static Generation**: Next.js pre-builds the page with SSG; no runtime data fetching.
- **Code Splitting & Lazy Loading**: Dynamic `import()` for heavy chart components. Example:
  ```js
  const AnimatedChart = dynamic(() => import('../components/Chart'), {
    ssr: false,
    loading: () => <Spinner />,
  })
  ```
- **Tailwind Purge**: Removes unused CSS classes in production build.
- **Image Optimization**: Use Next.js `<Image>` for automatic resizing and compression.
- **Bundle Analysis**: Run `next build --profile` and inspect with `@next/bundle-analyzer`.
- **Netlify Edge**: CDN caching for static assets, gzip compression, and Brotli where available.

## 8. Testing and Quality Assurance

### 8.1 Testing Strategy
- **Unit Tests**: Jest + React Testing Library for components, focusing on:
  - Rendering correct text for each persona
  - Button clicks updating context
  - Chart renders with given data
- **Integration Tests**: Simple tests that render multiple components together (e.g., PersonaSelector + a Card).
- **End-to-End Tests**: Cypress simulating a user flow:
  1. Load page
  2. Switch persona
  3. Scroll to ROI Calculator, enter values, verify output
  4. Download asset via CTA (email capture flow)
- **Accessibility Tests**: `jest-axe` for automated accessibility checks in unit tests; manual runs with browser axe plugin.

### 8.2 Code Quality Tools
- **ESLint** with Airbnb + TypeScript rules, plus Next.js plugin.
- **Prettier** for consistent formatting.
- **Husky + lint-staged** to run linters/tests on pre-commit.

## 9. Conclusion and Overall Frontend Summary

This frontend setup balances performance, maintainability, and ease of development:
- **Next.js + React**: Fast SSG, familiar patterns.
- **TypeScript**: Early error detection.
- **Tailwind + shadcn UI**: Rapid, consistent styling with brand tokens.
- **React Context**: Lightweight state sharing for persona-driven content.
- **Static JSON**: All data and copy live in one version-controlled file, ensuring transparency.
- **Testing & QA**: End-to-end coverage and accessibility checks keep the product reliable.

Together, these guidelines ensure that anyone joining the project can understand and contribute to the frontend with confidence, while delivering a fast, accessible, and brand-aligned report experience.