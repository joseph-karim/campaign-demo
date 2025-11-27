"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { PersonaId, Persona, PersonaContent, ReportMetrics } from '@/types/report';
import reportMetrics from '@/data/reportMetrics.json';

interface PersonaContextType {
  currentPersona: PersonaId;
  setPersona: (id: PersonaId) => void;
  personas: Persona[];
  content: PersonaContent;
  allContent: Record<PersonaId, PersonaContent>;
  filterTags: string[];
  finalCTA: ReportMetrics['shared']['finalCTA'];
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

const DEFAULT_PERSONA: PersonaId = 'primary-care';

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [currentPersona, setCurrentPersona] = useState<PersonaId>(DEFAULT_PERSONA);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage after mount
  useEffect(() => {
    const stored = localStorage.getItem('selectedPersona') as PersonaId | null;
    if (stored && (reportMetrics.content as Record<string, unknown>)[stored]) {
      setCurrentPersona(stored);
    }
    setIsHydrated(true);
  }, []);

  const setPersona = useCallback((id: PersonaId) => {
    setCurrentPersona(id);
    localStorage.setItem('selectedPersona', id);
    
    // Announce change for screen readers
    const announcement = document.getElementById('persona-announcement');
    if (announcement) {
      const persona = reportMetrics.personas.find(p => p.id === id);
      announcement.textContent = `Content updated for ${persona?.name || id}`;
    }
  }, []);

  const content = (reportMetrics.content as Record<PersonaId, PersonaContent>)[currentPersona];

  // Prevent hydration mismatch by not rendering until hydrated
  if (!isHydrated) {
    return (
      <PersonaContext.Provider
        value={{
          currentPersona: DEFAULT_PERSONA,
          setPersona,
          personas: reportMetrics.personas as Persona[],
          content: (reportMetrics.content as Record<PersonaId, PersonaContent>)[DEFAULT_PERSONA],
          allContent: reportMetrics.content as Record<PersonaId, PersonaContent>,
          filterTags: reportMetrics.shared.filterTags,
          finalCTA: reportMetrics.shared.finalCTA as ReportMetrics['shared']['finalCTA'],
        }}
      >
        {children}
      </PersonaContext.Provider>
    );
  }

  return (
    <PersonaContext.Provider
      value={{
        currentPersona,
        setPersona,
        personas: reportMetrics.personas as Persona[],
        content,
        allContent: reportMetrics.content as Record<PersonaId, PersonaContent>,
        filterTags: reportMetrics.shared.filterTags,
        finalCTA: reportMetrics.shared.finalCTA as ReportMetrics['shared']['finalCTA'],
      }}
    >
      {/* Screen reader announcement region */}
      <div
        id="persona-announcement"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
}

