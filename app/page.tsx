import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, ChevronRight, Lock, ExternalLink, Lightbulb, BookOpen } from 'lucide-react';
import { pages, brand, execSummary } from '@/config/brand';

export const metadata = {
  title: 'Creyos Interactive Reports Hub',
  description: 'Validated Cognitive Assessment for Confident Clinical Decisions. Explore our interactive reports and tools.',
};

const colorClasses: Record<string, { bg: string; border: string; text: string; icon: string; number: string }> = {
  teal: {
    bg: 'bg-[var(--creyos-teal)]/5',
    border: 'border-[var(--creyos-teal)]/20 hover:border-[var(--creyos-teal)]/60',
    text: 'text-[var(--creyos-teal)]',
    icon: 'bg-[var(--creyos-teal)]/15',
    number: 'bg-[var(--creyos-teal)] text-white'
  },
  blue: {
    bg: 'bg-[var(--creyos-blue)]/5',
    border: 'border-[var(--creyos-blue)]/20 hover:border-[var(--creyos-blue)]/60',
    text: 'text-[var(--creyos-blue)]',
    icon: 'bg-[var(--creyos-blue)]/15',
    number: 'bg-[var(--creyos-blue)] text-white'
  },
  navy: {
    bg: 'bg-[var(--creyos-navy-light)]/30',
    border: 'border-[var(--creyos-gray-600)]/20 hover:border-[var(--creyos-gray-500)]/60',
    text: 'text-[var(--creyos-gray-300)]',
    icon: 'bg-[var(--creyos-navy-lighter)]',
    number: 'bg-slate-600 text-white'
  },
  accent: {
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/20 hover:border-amber-500/60',
    text: 'text-amber-400',
    icon: 'bg-amber-500/15',
    number: 'bg-amber-500 text-white'
  }
};


export default function ReportsHub() {
  return (
    <main className="min-h-screen bg-[var(--creyos-navy)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        {/* Gradient Orb */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[var(--creyos-blue)]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-20">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/CreyosLogo-RGB-1.webp"
              alt="Creyos"
              width={160}
              height={40}
              className="h-10 w-auto brightness-0 invert"
              priority
            />
          </div>

          {/* Intro */}
          <p className="text-lg text-[var(--creyos-teal)] font-medium mb-4">
            {execSummary.intro}
          </p>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-3xl leading-tight mb-6">
            Interactive Reports & Strategic Tools
          </h1>

          {/* Subhead */}
          <p className="text-lg text-[var(--creyos-gray-300)] max-w-2xl mb-10">
            Four reports that work together to explain the market, the product, the strategy, and the go-to-market plan.
          </p>

          {/* Quick Framework */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {execSummary.framework.map((item) => (
              <div 
                key={item.number}
                className={`p-4 rounded-xl border ${item.internal ? 'bg-amber-500/5 border-amber-500/20' : 'bg-white/5 border-white/10'}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold ${item.internal ? 'bg-amber-500 text-white' : 'bg-[var(--creyos-teal)] text-white'}`}>
                    {item.number}
                  </span>
                  {item.internal && <Lock className="w-3.5 h-3.5 text-amber-400" />}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[var(--creyos-gray-400)]">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Detail Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {pages.map((page) => {
              const colors = colorClasses[page.color] || colorClasses.blue;
              
              return (
                <div
                  key={page.id}
                  className={`rounded-2xl border ${colors.border} ${colors.bg} overflow-hidden transition-all duration-300`}
                >
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        {/* Number Badge */}
                        <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0 ${colors.number}`}>
                          {page.number}
                        </span>
                        
                        <div>
                          {/* Type Tag */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs font-medium uppercase tracking-wider ${colors.text}`}>
                              {page.type}
                            </span>
                            {page.internal && (
                              <span className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-medium rounded">
                                <Lock className="w-3 h-3" />
                                Internal
                              </span>
                            )}
                          </div>
                          
                          {/* Title */}
                          <h2 className="text-xl font-bold text-white mb-1">
                            {page.title}
                          </h2>
                          
                          {/* Working Name */}
                          <p className="text-sm text-[var(--creyos-gray-400)]">
                            Working name: <span className="text-[var(--creyos-gray-300)]">{page.workingName}</span>
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={page.href}
                        className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${colors.text} bg-white/5 hover:bg-white/10 border border-white/10`}
                      >
                        Open Report
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="px-6 pb-6 space-y-6">
                    {/* What it does + Key Question */}
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--creyos-gray-500)] mb-2">
                          What it does
                        </h4>
                        <p className="text-[var(--creyos-gray-300)] text-sm leading-relaxed">
                          {page.whatItDoes}
                        </p>
                      </div>
                      
                      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--creyos-gray-500)] mb-2">
                          Key Question It Answers
                        </h4>
                        <p className={`text-sm font-medium italic ${colors.text}`}>
                          &ldquo;{page.keyQuestion}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Audience */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--creyos-gray-500)] mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        Who it&apos;s for
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {page.audience.map((a, i) => (
                          <span key={i} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-[var(--creyos-gray-300)] border border-white/5">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* How it fits */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--creyos-gray-500)] mb-2">
                          Marketing & Positioning
                        </h4>
                        <p className="text-xs text-[var(--creyos-gray-400)] leading-relaxed">
                          {page.howItFits.marketing}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--creyos-gray-500)] mb-2">
                          Operations & Strategy
                        </h4>
                        <p className="text-xs text-[var(--creyos-gray-400)] leading-relaxed">
                          {page.howItFits.operations}
                        </p>
                      </div>
                    </div>

                    {/* Modules + How to use */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--creyos-gray-500)] mb-3 flex items-center gap-1.5">
                          <Lightbulb className="w-3.5 h-3.5" />
                          What&apos;s Inside
                        </h4>
                        <ul className="space-y-1.5">
                          {page.modules.map((m, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[var(--creyos-gray-400)]">
                              <ChevronRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${colors.text}`} />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--creyos-gray-500)] mb-3 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          How to Use It
                        </h4>
                        <ul className="space-y-1.5">
                          {page.howToUse.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[var(--creyos-gray-400)]">
                              <ChevronRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${colors.text}`} />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Mobile CTA */}
                    <Link
                      href={page.href}
                      className={`sm:hidden flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium transition-all ${colors.text} bg-white/5 hover:bg-white/10 border border-white/10`}
                    >
                      Open Report
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Validation Strip */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-12">
            <ValidationBadge value={brand.validation.yearsOfResearch} label="Years of Research" />
            <ValidationBadge value={brand.validation.peerReviewedStudies} label="Peer-Reviewed Studies" />
            <ValidationBadge value={brand.validation.providers} label="Healthcare Providers" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/CreyosLogo-RGB-1.webp"
                alt="Creyos"
                width={100}
                height={26}
                className="h-6 w-auto brightness-0 invert"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {pages.map(page => (
                <Link 
                  key={page.id}
                  href={page.href}
                  className="text-sm text-[var(--creyos-gray-400)] hover:text-white transition-colors flex items-center gap-1"
                >
                  {page.internal && <Lock className="w-3 h-3" />}
                  {page.title.split(' ').slice(0, 2).join(' ')}
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
    <div className="text-center">
      <div className="text-2xl font-bold text-[var(--creyos-teal)]">{value}</div>
      <div className="text-sm text-[var(--creyos-gray-400)]">{label}</div>
    </div>
  );
}
