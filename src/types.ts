export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  features: string[];
  icon: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  fullDescription: string;
  results: string[];
  metrics: { label: string; value: string }[];
  client: string;
  techStack: string[];
  imageUrl: string;
  featured?: boolean;
  demoWorkflow?: {
    nodesCount: number;
    triggers: string[];
    actions: string[];
  };
}

export interface Skill {
  id: string;
  name: string;
  category: 'AI & ML' | 'Automation' | 'Development' | 'Design & Media';
  percentage: number;
  iconName: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  isFeatured?: boolean;
  deliverables: string[];
}

export interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatarUrl: string;
  impactTag: string;
}

export interface AgentSimulationResult {
  agentName: string;
  status: 'idle' | 'running' | 'completed' | 'error';
  executionTimeMs: number;
  logs: { timestamp: string; step: string; status: 'info' | 'success' | 'warning' }[];
  outputData: Record<string, any>;
}
