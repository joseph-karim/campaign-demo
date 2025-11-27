# Tech Stack Document

## 1. Frontend Technologies

We want a fast, accessible, and flexible user interface that adapts to four personas without reloading the page. Here’s how we’ll build it:

- **Next.js (React framework)**
  - Provides server-side rendering (SSR) and static-site generation (SSG) for quick first loads and SEO benefits.
  - Out-of-the-box routing and API routes simplify asset handling without a separate backend service.
- **React**
  - Powers the dynamic persona selector and interactive UI components.
  - Lets us break the page into reusable pieces (charts, toggles, timelines).
- **TypeScript**
  - Adds static typing to catch errors early and improve code maintainability.
  - Ensures our JSON config (reportMetrics.json) and component props align with expected shapes.
- **Tailwind CSS**
  - Utility-first CSS framework that keeps styles consistent and minimal.
  - Tree-shaking removes unused classes, keeping the final CSS bundle tiny.
- **Shadcn UI**
  - Pre-built, accessible React components (buttons, cards, modals, tabs).
  - Matches our existing Creyos design patterns (border radius, shadows, hover states).
- **Charting Libraries**
  - **Recharts** and **Chart.js** for interactive bar charts and small comparison graphics.
  - Both integrate smoothly with React and can read from our static JSON.
- **Static JSON Configuration**
  - All numbers, labels, and metric definitions live in one `reportMetrics.json` file.
  - Centralizes quarterly updates without code changes—just update the JSON and redeploy.
- **SVG Assets & Typography**
  - Creyos logo SVG imported directly into the header and footer.
  - Same font family, color tokens, and type scale as creyos.com, centralized via CSS variables.
- **Accessibility (WCAG baseline)**
  - Semantic HTML, proper alt text for charts and icons, focus states for interactive elements.
  - Ensures everyone—including screen-reader users—can navigate and consume content.

## 2. Backend Technologies

This project relies almost entirely on static assets and client-side interactivity. Here’s what we do have running on the server side:

- **Next.js API Routes (optional)**
  - Ready for future data needs or form submissions, though v1 keeps all data client-side.
- **Node.js (LTS)**
  - The runtime for building and serving the Next.js app.
- **No External Database**
  - All interactive data comes straight from versioned JSON.
  - Eliminates complex setup, speeds up builds, and guarantees predictable performance.

## 3. Infrastructure and Deployment

We aim for a frictionless developer experience, automated builds, and instant previews:

- **Version Control: Git + GitHub**
  - Branch-based workflow with pull-requests for code review.
- **Hosting & CI/CD: Netlify**
  - Automatic builds and deploy previews on every push.
  - Separate branches for staging and production environments.
- **Static Asset Hosting**
  - PDFs, slide decks, and sample reports live in the `/public` folder.
  - Served via the same CDN as the site, ensuring fast downloads.

## 4. Third-Party Integrations

To keep the initial launch lean, we’re not wiring up any external services yet:

- **Forms & CRM:** Ungated downloads—no HubSpot or Salesforce integration in v1.
- **Analytics:** No tracking by default. (Optionally add Google Analytics or Segment later.)
- **Email & Lead Magnets:** Handled via simple mailto links or file downloads.

## 5. Security and Performance Considerations

Our choices ensure the page is quick to load, secure, and accessible:

- **Performance Optimizations**
  - Static-site generation (SSG) for near-instant page loads.
  - Tailwind CSS purge and code-splitting via Next.js.
  - CDN distribution by Netlify for global coverage.
- **Security Measures**
  - No user authentication or sensitive data storage in v1.
  - All assets served over HTTPS.
- **Accessibility Standards**
  - WCAG baseline compliance: semantic markup, color contrast tokens from Creyos design system, keyboard navigation.

## 6. Conclusion and Overall Tech Stack Summary

By combining Next.js, React, and TypeScript with Tailwind CSS and Shadcn UI, we get a maintainable, accessible, and brand-consistent frontend. Static JSON files power our charts and metrics, eliminating the need for a database while making quarterly updates trivial. Netlify’s CI/CD pipeline delivers frictionless deployments and previews. We’ve deferred complex integrations—like CRM or analytics—to focus on a fast, reliable, skimmable report that prospects can personalize in one click. This lean but powerful tech stack aligns perfectly with our goals:

- Drive traffic and leads through dynamic, persona-tailored content.
- Offer deep insights for clinicians with interactive charts and JTBD timelines.
- Maintain a single codebase and URL for all four personas.
- Ensure fast load times, accessibility, and easy maintenance.

Unique Aspect: Using a static JSON config alongside React-based interactivity gives us the best of both worlds—maximum performance with all the personalization and flexibility of a modern web app.