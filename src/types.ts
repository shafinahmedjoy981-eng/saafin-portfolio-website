export type ProjectCategory = 'All' | 'Web App' | 'Custom SaaS' | 'Creative Website';

export interface ProjectExtraLink {
  label: string;
  url: string;
}

export interface ProjectSubSection {
  imageSrc: string;
  imageAlt?: string;
  browserUrl?: string;
  introTitle?: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface ProjectDetail {
  imageSrc?: string;
  imageAlt?: string;
  browserUrl?: string;
  fullDescription: string;
  liveLinkText?: string;
  liveLinkUrl?: string;
  extraLinksTitle?: string;
  extraLinks?: ProjectExtraLink[];
  closingText?: string;
  subSection?: ProjectSubSection;
}

export interface Project {
  id: string;
  title: string;
  cardTitle?: string;
  cardDescription?: string;
  category: 'Web App' | 'Custom SaaS' | 'Creative Website';
  description: string;
  imageAlt: string;
  accentColor?: string;
  tags: string[];
  isClickable?: boolean;
  detail?: ProjectDetail;
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  percentage: number;
  highlight?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  tagline: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
