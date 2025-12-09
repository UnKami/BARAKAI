import { ReactNode } from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface SectionData {
  id: string;
  stepNumber: number;
  headline: string;
  subText: string;
  description: string;
  visualSrc: string;
  visualAlt: string;
  colorTheme: string;
  features: FeatureItem[];
}