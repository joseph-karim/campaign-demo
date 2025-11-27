'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import type { PersonaType, PersonaContent } from '@/types/vitalSign';

interface VitalSignPersonaContextType {
  persona: PersonaType;
  setPersona: (persona: PersonaType) => void;
  getContent: (content: string | PersonaContent) => string;
}

const VitalSignPersonaContext = createContext<VitalSignPersonaContextType | undefined>(undefined);

export function VitalSignPersonaProvider({ children }: { children: ReactNode }) {
  const [persona, setPersona] = useState<PersonaType>('clinician');

  const getContent = (content: string | PersonaContent): string => {
    if (typeof content === 'string') {
      return content;
    }
    return content[persona];
  };

  return (
    <VitalSignPersonaContext.Provider value={{ persona, setPersona, getContent }}>
      {children}
    </VitalSignPersonaContext.Provider>
  );
}

export function useVitalSignPersona() {
  const context = useContext(VitalSignPersonaContext);
  if (!context) {
    throw new Error('useVitalSignPersona must be used within VitalSignPersonaProvider');
  }
  return context;
}

export default VitalSignPersonaProvider;

