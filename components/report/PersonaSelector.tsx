"use client";

import { usePersona } from '@/contexts/PersonaContext';
import { cn } from '@/lib/utils';
import { 
  Stethoscope, 
  Brain, 
  HeartPulse, 
  Building2,
  ChevronDown
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import type { PersonaId } from '@/types/report';

const iconMap = {
  'stethoscope': Stethoscope,
  'brain': Brain,
  'heart-pulse': HeartPulse,
  'building-2': Building2,
};

const colorMap: Record<PersonaId, string> = {
  'primary-care': 'from-blue-500 to-blue-600',
  'neurology': 'from-violet-500 to-violet-600',
  'mental-health': 'from-emerald-500 to-emerald-600',
  'corporate-wellness': 'from-red-500 to-red-600',
};

const bgColorMap: Record<PersonaId, string> = {
  'primary-care': 'bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400',
  'neurology': 'bg-violet-500/10 border-violet-500/30 text-violet-600 dark:text-violet-400',
  'mental-health': 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
  'corporate-wellness': 'bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400',
};

export function PersonaSelector() {
  const { currentPersona, setPersona, personas } = usePersona();
  const currentPersonaData = personas.find(p => p.id === currentPersona);
  const CurrentIcon = iconMap[currentPersonaData?.icon as keyof typeof iconMap] || Stethoscope;

  return (
    <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={cn(
              "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center",
              colorMap[currentPersona]
            )}>
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">Creyos</div>
              <div className="text-xs text-gray-500">Cognitive Assessment</div>
            </div>
          </div>

          {/* Desktop Persona Tabs */}
          <nav 
            className="hidden md:flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1"
            role="tablist"
            aria-label="Select your persona"
          >
            {personas.map((persona) => {
              const Icon = iconMap[persona.icon as keyof typeof iconMap] || Stethoscope;
              const isActive = currentPersona === persona.id;
              
              return (
                <button
                  key={persona.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="report-content"
                  onClick={() => setPersona(persona.id as PersonaId)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden lg:inline">{persona.name}</span>
                  <span className="lg:hidden">{persona.shortName}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className={cn(
                    "gap-2 border",
                    bgColorMap[currentPersona]
                  )}
                >
                  <CurrentIcon className="w-4 h-4" />
                  <span>{currentPersonaData?.shortName}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {personas.map((persona) => {
                  const Icon = iconMap[persona.icon as keyof typeof iconMap] || Stethoscope;
                  const isActive = currentPersona === persona.id;
                  
                  return (
                    <DropdownMenuItem
                      key={persona.id}
                      onClick={() => setPersona(persona.id as PersonaId)}
                      className={cn(
                        "gap-3 cursor-pointer",
                        isActive && "bg-gray-100 dark:bg-gray-800"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{persona.name}</span>
                      {isActive && (
                        <span className="ml-auto text-xs text-gray-500">Selected</span>
                      )}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

