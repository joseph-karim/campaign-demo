// GTM Blueprint Types

export type IcpType = 'mega_idn' | 'academic' | 'regional';
export type PersonaId = 'cmo' | 'primary_care' | 'neuro_psych' | 'pop_health' | 'digital' | 'ops';
export type PhaseId = 'phase_0_3' | 'phase_3_9' | 'phase_9_18';
export type OwnerType = 'exec' | 'pmm' | 'sales' | 'clinical' | 'product';
export type AccountTemp = 'cold' | 'warm' | 'hot';

export interface GtmOverview {
  objective: string;
  target: string;
  timeframeBands: string[];
  execView: string[];
  fieldView: string[];
}

export interface PersonaDetail {
  id: PersonaId;
  name: string;
  shortName: string;
  jtbd: string;
  currentPain: string[];
  triggerFit: string[];
  entryHook: string[];
  proofTheyCare: string[];
}

export interface IcpConfig {
  id: IcpType;
  name: string;
  example: string;
  personas: PersonaDetail[];
}

export interface Trigger {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Account {
  id: string;
  name: string;
  type: IcpType;
  region: string;
  triggers: string[];
  notes: string;
  whatWeKnow: string[];
  publicSignals: string[];
  recommendedEntry: PersonaId;
}

export interface AccountBlueprint {
  accountId: string;
  personas: {
    id: PersonaId;
    entryWedge: string;
    whatWeSay: string[];
    pilotProposal: string[];
    metrics: string[];
  }[];
}

export interface ChannelPlay {
  channelId: string;
  personaId: PersonaId;
  phaseId: PhaseId;
  intensity: 'low' | 'medium' | 'high';
  plays: string[];
}

export interface Channel {
  id: string;
  name: string;
  description: string;
}

export interface Phase {
  id: PhaseId;
  name: string;
  duration: string;
  description: string;
}

export interface PilotConfig {
  accountType: IcpType;
  scope: 'small' | 'medium' | 'large';
  useCase: 'dementia' | 'adhd' | 'mixed';
  integration: 'light' | 'medium' | 'deep';
}

export interface PilotOutput {
  duration: string;
  creyosRoles: string[];
  clientRoles: string[];
  objectives: string[];
  exitCriteria: string[];
}

export interface TimelineTask {
  id: string;
  phaseId: PhaseId;
  owner: OwnerType;
  title: string;
  description: string;
  estimatedTime: string;
  dependencies: string[];
  status: 'pending' | 'in_progress' | 'done';
}

export interface StoryboardPanel {
  id: string;
  title: string;
  content: string[];
}

export interface AccountStoryboard {
  accountId: string;
  accountName: string;
  panels: StoryboardPanel[];
}

export interface ExecDecision {
  id: string;
  category: string;
  title: string;
  items: string[];
}

