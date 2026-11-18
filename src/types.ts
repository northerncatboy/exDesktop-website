export type Theme = 'dark' | 'light';

export interface FaqTable {
  headers?: string[];
  rows: string[][];
}

export interface FaqItem {
  id: string;
  question: string;
  answer?: string;
  category: string;
  source?: string;
  code?: string;
  bullets?: string[];
  table?: FaqTable | null;
}

export interface FaqCategory {
  id: string;
  number: string;
  title: string;
  anchor: string;
  items: FaqItem[];
}

export interface RoadmapItem {
  id: string;
  title: string;
  text?: string;
  version?: string;
  status: 'progress' | 'planned' | 'done';
}

export interface RoadmapColumn {
  id: string;
  status: 'progress' | 'planned' | 'done';
  title: string;
  items: RoadmapItem[];
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
