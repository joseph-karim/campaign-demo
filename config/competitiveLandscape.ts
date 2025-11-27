import type { Competitor } from '@/types/enterprise';

export const competitors: Competitor[] = [
  {
    id: 'moca-mmse',
    name: 'MoCA / MMSE',
    type: 'paper',
    x: 20, // Narrow clinical coverage
    y: 15, // Low deployability
    tooltips: {
      clinical: 'Dementia screening only. No ADHD, concussion, or behavioral assessment. Single point-in-time snapshot.',
      deployability: 'Paper-based, manual scoring, no remote capability. Requires trained administrator. Variable quality across sites.',
      evidence: 'Decades of use, well-validated for dementia screening. Limited sensitivity for mild impairment.'
    }
  },
  {
    id: 'qbtech',
    name: 'Qbtech (QbTest/QbCheck)',
    type: 'adhd',
    x: 30, // ADHD-focused
    y: 55, // Medium deployability
    tooltips: {
      clinical: 'ADHD-focused motion and attention testing. No dementia, concussion, or broader cognitive assessment.',
      deployability: 'QbTest requires specialized hardware. QbCheck adds remote capability but remains ADHD-only.',
      evidence: '80+ peer-reviewed studies. Strong ADHD evidence but single-condition focus.'
    }
  },
  {
    id: 'neurotrack',
    name: 'Neurotrack',
    type: 'dementia',
    x: 25, // Dementia risk only
    y: 70, // Good deployability
    tooltips: {
      clinical: 'Dementia risk and early detection only. Eye-tracking based. No ADHD, concussion, or behavioral assessment.',
      deployability: 'Cloud-based, consumer-friendly. But narrow clinical scope limits enterprise utility.',
      evidence: 'Emerging evidence base. Eye-tracking approach is novel but less established.'
    }
  },
  {
    id: 'cantab',
    name: 'CANTAB / Research Batteries',
    type: 'research',
    x: 75, // Broad domains
    y: 30, // Lower clinical deployability
    tooltips: {
      clinical: 'Comprehensive cognitive domains. Research-grade depth. Originally designed for clinical trials.',
      deployability: 'Complex administration. Research-centric workflows don\'t fit busy clinical settings. Training-intensive.',
      evidence: '30+ years of research. Gold standard in trials but overhead limits clinical adoption.'
    }
  },
  {
    id: 'cognigram',
    name: 'CogniGram / Cogstate',
    type: 'research',
    x: 65, // Multiple domains
    y: 45, // Moderate deployability
    tooltips: {
      clinical: 'Multiple cognitive domains. Originally sports concussion, expanding to clinical. Limited behavioral.',
      deployability: 'Tablet-based, reasonable training burden. Integration varies by product line.',
      evidence: '100+ publications. Strong in concussion, growing in other areas.'
    }
  },
  {
    id: 'creyos',
    name: 'Creyos',
    type: 'broad',
    x: 85, // Full-spectrum coverage
    y: 90, // High deployability
    isCreyos: true,
    tooltips: {
      clinical: 'Full-spectrum cognitive + behavioral: dementia, ADHD, concussion, depression, anxiety. Multi-condition by design.',
      deployability: 'Web-based, no proprietary hardware. Multi-site friendly. Remote and in-clinic. EHR-agnostic integration.',
      evidence: '30+ years of cognitive science validation. 400+ peer-reviewed studies using Creyos tasks.'
    }
  }
];

export const quadrantLabels = {
  xAxis: {
    low: 'Narrow single-condition',
    high: 'Multi-condition cognitive & behavioral'
  },
  yAxis: {
    low: 'Paper / manual / special hardware',
    high: 'Cloud-native, EHR-agnostic'
  }
};

export const creyosHighlights = [
  'Multi-condition (dementia, ADHD, concussion, depression)',
  'Cloud-native, remote capable, EHR-agnostic',
  '30+ years of cognitive science validation',
  '400+ peer-reviewed studies using our tasks'
];

export default competitors;

