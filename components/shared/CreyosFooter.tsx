'use client';

import Link from 'next/link';
import Image from 'next/image';
import { brand } from '@/config/brand';

interface CreyosFooterProps {
  variant?: 'light' | 'dark';
}

export function CreyosFooter({ variant = 'dark' }: CreyosFooterProps) {
  const isLight = variant === 'light';
  
  return (
    <footer className={`py-12 px-6 ${
      isLight 
        ? 'bg-[var(--creyos-gray-50)] border-t border-[var(--creyos-gray-200)]' 
        : 'bg-[var(--creyos-navy)] border-t border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/CreyosLogo-RGB-1.webp"
              alt="Creyos"
              width={140}
              height={36}
              className={`h-9 w-auto ${isLight ? '' : 'brightness-0 invert'}`}
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            <Link 
              href="/closing-the-gap"
              className={`text-sm ${
                isLight 
                  ? 'text-[var(--creyos-gray-600)] hover:text-[var(--creyos-blue)]' 
                  : 'text-[var(--creyos-gray-400)] hover:text-white'
              } transition-colors`}
            >
              Assessment Gap
            </Link>
            <Link 
              href="/cognitive-vital-sign"
              className={`text-sm ${
                isLight 
                  ? 'text-[var(--creyos-gray-600)] hover:text-[var(--creyos-blue)]' 
                  : 'text-[var(--creyos-gray-400)] hover:text-white'
              } transition-colors`}
            >
              Vital Sign
            </Link>
            <Link 
              href="/enterprise/cognitive-assessment-landscape"
              className={`text-sm ${
                isLight 
                  ? 'text-[var(--creyos-gray-600)] hover:text-[var(--creyos-blue)]' 
                  : 'text-[var(--creyos-gray-400)] hover:text-white'
              } transition-colors`}
            >
              Enterprise
            </Link>
            <Link 
              href="/internal/enterprise-gtm-blueprint"
              className={`text-sm ${
                isLight 
                  ? 'text-[var(--creyos-gray-600)] hover:text-[var(--creyos-blue)]' 
                  : 'text-[var(--creyos-gray-400)] hover:text-white'
              } transition-colors`}
            >
              GTM Blueprint
            </Link>
          </div>
        </div>

        {/* Validation */}
        <div className={`mt-8 pt-8 border-t ${isLight ? 'border-[var(--creyos-gray-200)]' : 'border-white/10'}`}>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <ValidationBadge label="Years of Research" value={brand.validation.yearsOfResearch} isLight={isLight} />
            <ValidationBadge label="Peer-Reviewed Studies" value={brand.validation.peerReviewedStudies} isLight={isLight} />
            <ValidationBadge label="Healthcare Providers" value={brand.validation.providers} isLight={isLight} />
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 text-center text-sm ${
          isLight ? 'text-[var(--creyos-gray-400)]' : 'text-[var(--creyos-gray-500)]'
        }`}>
          © {new Date().getFullYear()} Creyos. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function ValidationBadge({ label, value, isLight }: { label: string; value: string; isLight: boolean }) {
  return (
    <div className="text-center">
      <div className={`text-2xl font-bold ${
        isLight ? 'text-[var(--creyos-blue)]' : 'text-[var(--creyos-teal)]'
      }`}>
        {value}
      </div>
      <div className={`text-xs ${isLight ? 'text-[var(--creyos-gray-500)]' : 'text-[var(--creyos-gray-400)]'}`}>
        {label}
      </div>
    </div>
  );
}

export default CreyosFooter;

