import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, Activity, Building2, Target, Users, BarChart3, Lightbulb, CheckCircle } from 'lucide-react';
import { pages, brand } from '@/config/brand';

export const metadata = {
  title: 'Creyos Interactive Reports Hub',
  description: 'Validated Cognitive Assessment for Confident Clinical Decisions. Explore our interactive reports and tools.',
};

const colorClasses: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  teal: {
    bg: 'bg-[var(--creyos-teal)]/10',
    border: 'border-[var(--creyos-teal)]/30 hover:border-[var(--creyos-teal)]',
    text: 'text-[var(--creyos-teal)]',
    icon: 'bg-[var(--creyos-teal)]/20'
  },
  blue: {
    bg: 'bg-[var(--creyos-blue)]/10',
    border: 'border-[var(--creyos-blue)]/30 hover:border-[var(--creyos-blue)]',
    text: 'text-[var(--creyos-blue)]',
    icon: 'bg-[var(--creyos-blue)]/20'
  },
  navy: {
    bg: 'bg-[var(--creyos-navy-light)]/50',
    border: 'border-[var(--creyos-gray-600)]/30 hover:border-[var(--creyos-gray-500)]',
    text: 'text-[var(--creyos-gray-300)]',
    icon: 'bg-[var(--creyos-navy-lighter)]'
  },
  accent: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30 hover:border-amber-500',
    text: 'text-amber-400',
    icon: 'bg-amber-500/20'
  }
};

const pageIcons: Record<string, React.ReactNode> = {
  'closing-the-gap': <BarChart3 className="w-6 h-6" />,
  'cognitive-vital-sign': <Activity className="w-6 h-6" />,
  'enterprise-landscape': <Building2 className="w-6 h-6" />,
  'gtm-blueprint': <Target className="w-6 h-6" />
};

export default function ReportsHub() {
  return (
    <main className="min-h-screen bg-[var(--creyos-navy)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        {/* Gradient Orb */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[var(--creyos-blue)]/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/CreyosLogo-RGB-1.webp"
              alt="Creyos"
              width={180}
              height={48}
              className="h-12 w-auto brightness-0 invert"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            {brand.tagline}
          </h1>

          {/* Subhead */}
          <p className="text-xl text-[var(--creyos-gray-300)] max-w-2xl mb-10">
            Explore our interactive reports and strategic tools for cognitive assessment implementation across clinical settings.
          </p>

          {/* Validation Strip */}
          <div className="flex flex-wrap items-center gap-8 mb-12">
            <ValidationBadge value={brand.validation.yearsOfResearch} label="Years of Research" />
            <ValidationBadge value={brand.validation.peerReviewedStudies} label="Peer-Reviewed Studies" />
            <ValidationBadge value={brand.validation.providers} label="Healthcare Providers" />
          </div>

          {/* Brand Attributes */}
          <div className="flex flex-wrap gap-3">
            {brand.attributes.map((attr, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[var(--creyos-gray-400)]"
              >
                {attr}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-16 px-6 bg-[var(--creyos-navy-light)]/30">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-10">
            <FileText className="w-6 h-6 text-[var(--creyos-teal)]" />
            <h2 className="text-2xl font-bold text-white">Interactive Reports & Tools</h2>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {pages.map((page) => {
              const colors = colorClasses[page.color] || colorClasses.blue;
              
              return (
                <Link
                  key={page.id}
                  href={page.href}
                  className={`group relative rounded-2xl border ${colors.border} ${colors.bg} p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/20`}
                >
                  {/* Internal Badge */}
                  {page.internal && (
                    <span className="absolute top-4 right-4 px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded">
                      Internal Only
                    </span>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center mb-4`}>
                    <span className={colors.text}>
                      {pageIcons[page.id]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <div className={`text-xs font-medium uppercase tracking-wider ${colors.text} mb-2`}>
                      {page.pillar}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--creyos-teal)] transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-sm text-[var(--creyos-gray-400)]">
                      {page.subtitle}
                    </p>
                  </div>

                  <p className="text-[var(--creyos-gray-300)] text-sm mb-6 leading-relaxed">
                    {page.description}
                  </p>

                  {/* Audience Tags */}
                  <div className="mb-4">
                    <div className="text-xs text-[var(--creyos-gray-500)] mb-2 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      Target Audience
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {page.audience.map((a, i) => (
                        <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-[var(--creyos-gray-400)]">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-xs text-[var(--creyos-gray-500)] mb-2 flex items-center gap-1">
                      <Lightbulb className="w-3 h-3" />
                      Key Features
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {page.features.map((f, i) => (
                        <span key={i} className="flex items-center gap-1.5 text-xs text-[var(--creyos-gray-400)]">
                          <CheckCircle className="w-3 h-3 text-[var(--creyos-teal)]" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 text-sm font-medium ${colors.text} group-hover:gap-3 transition-all`}>
                    Explore Report
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Built on Four Pillars</h2>
            <p className="text-[var(--creyos-gray-400)] max-w-xl mx-auto">
              Every report and tool maps to these core principles that define the Creyos approach.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {brand.pillars.map((pillar, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-[var(--creyos-navy-light)]/30 border border-white/5">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--creyos-blue)]/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-[var(--creyos-blue)]">{i + 1}</span>
                </div>
                <h3 className="text-white font-semibold">{pillar}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/CreyosLogo-RGB-1.webp"
                alt="Creyos"
                width={120}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {pages.map(page => (
                <Link 
                  key={page.id}
                  href={page.href}
                  className="text-sm text-[var(--creyos-gray-400)] hover:text-white transition-colors"
                >
                  {page.title.split(' ').slice(0, 3).join(' ')}
                </Link>
              ))}
            </div>

            <div className="text-sm text-[var(--creyos-gray-500)]">
              © {new Date().getFullYear()} Creyos
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ValidationBadge({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-[var(--creyos-teal)]">{value}</div>
      <div className="text-sm text-[var(--creyos-gray-400)]">{label}</div>
    </div>
  );
}
