export type Theme = 'dark' | 'light';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  source?: string;
}

export interface FaqCategory {
  id: string;
  number: string;
  title: string;
  anchor: string;
  items: FaqItem[];
}

export interface RoadmapStage {
  id: string;
  number: string;
  badge: string;
  title: string;
  description: string;
  linkLabel: string;
  linkUrl: string;
  statusIcon: 'check' | 'work' | 'chat';
  isAccent?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: 'tune' | 'shield' | 'code';
}
