'use client';

import Link from 'next/link';
import Image from 'next/image';

interface CreyosHeaderProps {
  variant?: 'light' | 'dark';
  showNav?: boolean;
}

export function CreyosHeader({ variant = 'dark', showNav = true }: CreyosHeaderProps) {
  const isLight = variant === 'light';
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${
      isLight 
        ? 'bg-white/90 border-b border-[var(--creyos-gray-200)]' 
        : 'bg-[var(--creyos-navy)]/95 border-b border-white/10'
    } backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/CreyosLogo-RGB-1.webp"
            alt="Creyos"
            width={120}
            height={32}
            className={`h-8 w-auto ${isLight ? '' : 'brightness-0 invert'}`}
          />
        </Link>

        {/* Navigation */}
        {showNav && (
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/closing-the-gap" isLight={isLight}>
              Assessment Gap
            </NavLink>
            <NavLink href="/cognitive-vital-sign" isLight={isLight}>
              Vital Sign
            </NavLink>
            <NavLink href="/enterprise/cognitive-assessment-landscape" isLight={isLight}>
              Enterprise
            </NavLink>
            <NavLink href="/internal/enterprise-gtm-blueprint" isLight={isLight} badge="Internal">
              GTM Blueprint
            </NavLink>
          </nav>
        )}

        {/* CTA placeholder - can be customized per page */}
        <div className="flex items-center gap-3">
          <Link 
            href="/"
            className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
              isLight
                ? 'text-[var(--creyos-gray-600)] hover:text-[var(--creyos-navy)] hover:bg-[var(--creyos-gray-100)]'
                : 'text-[var(--creyos-gray-400)] hover:text-white hover:bg-white/10'
            }`}
          >
            All Reports
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({ 
  href, 
  children, 
  isLight,
  badge
}: { 
  href: string; 
  children: React.ReactNode; 
  isLight: boolean;
  badge?: string;
}) {
  return (
    <Link 
      href={href}
      className={`relative text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
        isLight
          ? 'text-[var(--creyos-gray-600)] hover:text-[var(--creyos-navy)] hover:bg-[var(--creyos-gray-100)]'
          : 'text-[var(--creyos-gray-400)] hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
      {badge && (
        <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded font-medium ${
          isLight
            ? 'bg-[var(--creyos-teal)]/10 text-[var(--creyos-teal-dark)]'
            : 'bg-[var(--creyos-teal)]/20 text-[var(--creyos-teal)]'
        }`}>
          {badge}
        </span>
      )}
    </Link>
  );
}

export default CreyosHeader;

