import { Service, Project, Skill, ProcessStep, PricingPlan, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: "SHAFIN",
  fullName: "Shafin Ahmed Joy",
  title: "AI Agent Developer & Automation Specialist",
  tagline: "Building Autonomous AI Workflows & High-Performance Digital Systems.",
  profileImage: "https://i.postimg.cc/SxYYZgzx/c9e18c5d-d6df-4cec-bc24-b3c5e0e1dc60.jpg",
  bioShort: "Senior AI Agent Developer specializing in n8n pipelines, enterprise CRM automation, custom LLM agents, and high-converting digital media production.",
  bioLong: "I architect self-healing AI agents and automated business workflows that reduce operational overhead by up to 80%. Combining deep technical prompt engineering with custom API integrations and high-end visual aesthetics, I turn complex manual bottlenecks into seamless 24/7 autonomous engines.",
  location: "Global / Remote",
  availability: "Available for Q3/Q4 Projects",
  responseTime: "< 2 Hours Response",
  email: "nishankhannihan@gmail.com",
  phone: "+8801327486198",
  linkedin: "https://www.linkedin.com/in/shafin-ahmed-joy",
  github: "https://github.com/shafin-dev",
  twitter: "https://x.com/shafin_ai",
  stats: {
    yearsExperience: "5+",
    workflowsDeployed: "150+",
    clientSatisfaction: "99.4%",
    rating: "5.0 / 5.0"
  }
};

export const SERVICES_LIST: Service[] = [
  {
    id: "ai-agent-dev",
    number: "01",
    title: "AI Agent Development",
    description: "Custom autonomous AI agents trained on proprietary knowledge bases, equipped with function calling, tool execution, and multi-step reasoning capabilities.",
    tags: ["Autonomous Agents", "LangChain/LlamaIndex", "Function Calling"],
    features: [
      "Custom RAG pipeline setup",
      "Multi-agent orchestration systems",
      "Real-time memory & vector database context",
      "API & Webhook integration"
    ],
    icon: "Bot",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "n8n-workflow-automation",
    number: "02",
    title: "AI Workflow & n8n Automation",
    description: "End-to-end business process automation using n8n, Make, and Python. Seamlessly connecting your stack into zero-touch operational pipelines.",
    tags: ["n8n Specialist", "Webhooks", "ETL Pipelines"],
    features: [
      "n8n enterprise cloud & self-hosted nodes",
      "CRM & ERP automated syncing",
      "Automated lead enrichment & routing",
      "Self-healing error detection & retries"
    ],
    icon: "Workflow",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "crm-lead-gen",
    number: "03",
    title: "CRM & Lead Generation Systems",
    description: "Intelligent lead capture, AI qualification calls, email warmup, automated scoring, and instant deal pipeline updates across HubSpot, Salesforce & GoHighLevel.",
    tags: ["Lead Scraper", "GoHighLevel", "HubSpot Automation"],
    features: [
      "Multi-channel lead scraping & verification",
      "AI-driven lead qualification chatbots",
      "Personalized cold email & SMS triggers",
      "Real-time pipeline analytics"
    ],
    icon: "Target",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "creative-ai-website-dev",
    number: "04",
    title: "Creative AI Website Development",
    description: "Design and develop premium AI-powered websites using modern tools such as Google AI Studio and Lovable. Responsive, visually polished, business-focused builds with modern UI/UX, fast performance, SEO-friendly architecture, and scalable design systems.",
    tags: ["Google AI Studio", "Lovable", "Responsive UI/UX", "SEO Architecture"],
    features: [
      "Google AI Studio & Lovable design workflows",
      "High-performance, SEO-friendly frontend architecture",
      "Responsive, modern UI/UX for startups & agencies",
      "Scalable component libraries & design systems"
    ],
    icon: "Layout",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "ai-video-creation",
    number: "05",
    title: "AI Video Creation",
    description: "Cinematic AI-generated videos using industry-leading tools such as Seedance, Veo 3, and other advanced AI video platforms — from promotional videos and product ads to social content and storytelling, built for professional quality.",
    tags: ["Seedance", "Veo 3", "Cinematic AI", "Video Ads"],
    features: [
      "Seedance & Veo 3 high-fidelity video generation",
      "Commercial ads & social media creative campaign assets",
      "AI voice synthesis & soundtrack integration",
      "Multi-format video variations for marketing"
    ],
    icon: "Video",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "ai-product-design",
    number: "06",
    title: "AI Product Design",
    description: "Premium AI-generated product concepts, marketing visuals, mockups, packaging designs, ads, and brand assets that help businesses present products with a modern, high-converting, visually compelling identity.",
    tags: ["Product Concepts", "3D Mockups", "Brand Assets", "Packaging Design"],
    features: [
      "Photorealistic 3D product render generation",
      "E-commerce packaging & visual mockup creation",
      "High-converting ad creative & marketing design kits",
      "Consistent brand style guide & visual identity"
    ],
    icon: "Palette",
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop"
  }
];

export const ALL_SERVICES_KEYWORDS = [
  "AI Agent Development",
  "AI Workflow Automation",
  "Business Automation",
  "CRM Automation",
  "Lead Generation",
  "AI Video Creation",
  "AI Image Generation",
  "n8n Automation",
  "API Integration",
  "Prompt Engineering"
];

export const PROJECTS_LIST: Project[] = [
  {
    id: "crm-automation",
    title: "CRM Automation Engine",
    category: "Automation",
    tags: ["n8n", "HubSpot API", "AI Lead Scoring"],
    summary: "Autonomous lead routing & enrichment engine processing 10,000+ inbound leads weekly with 0 manual intervention.",
    fullDescription: "Built a multi-stage n8n enterprise pipeline connected to HubSpot, Apollo, and OpenAI. Inbound leads are instantly enriched with company firmographics, categorized by intent score, and dispatched to the best account executive within 12 seconds.",
    results: [
      "Reduced lead response time from 4 hours to 12 seconds",
      "Increased meeting conversion rate by 34%",
      "Eliminated 25+ hours of manual data entry weekly"
    ],
    metrics: [
      { label: "Response Speed", value: "12 sec" },
      { label: "Lead Enrichment", value: "100%" },
      { label: "Weekly Volume", value: "10k+ Leads" }
    ],
    client: "Fintech Growth Partners",
    techStack: ["n8n", "OpenAI API", "HubSpot", "Apollo API", "Webhooks"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    demoWorkflow: {
      nodesCount: 14,
      triggers: ["Webhook Inbound", "Typeform Submit"],
      actions: ["Apollo Enrichment", "GPT-4 Intent Rating", "Slack Notification", "HubSpot Deal Create"]
    }
  },
  {
    id: "dental-ai-support",
    title: "Dental AI Support Agent",
    category: "AI Agents",
    tags: ["AI Voice/Text Agent", "Appointment Booking", "Twilio"],
    summary: "24/7 Voice & Chat assistant handling patient scheduling, emergency intake, and insurance query resolution.",
    fullDescription: "Engineered an AI receptionist for a network of dental clinics. The agent handles inbound calls, checks dentist availability in real time via EHR integration, answers insurance coverage questions, and sends SMS confirmation links.",
    results: [
      "Handled 1,200+ patient calls monthly outside business hours",
      "Decreased appointment no-shows by 42%",
      "Saved clinic $3,500/mo in receptionist overtime"
    ],
    metrics: [
      { label: "Uptime", value: "24/7" },
      { label: "No-Show Reduction", value: "-42%" },
      { label: "Calls Processed", value: "1.2k+/mo" }
    ],
    client: "Apex Dental Network",
    techStack: ["Gemini API", "Twilio Voice", "Pinecone Vector DB", "Cal.com API"],
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    demoWorkflow: {
      nodesCount: 18,
      triggers: ["Inbound Call", "Web Widget Chat"],
      actions: ["EHR Calendar Query", "Gemini Intent Classification", "SMS Confirmation Sent"]
    }
  },
  {
    id: "lead-generation-system",
    title: "Lead Generation System",
    category: "Automation",
    tags: ["Outbound Engine", "AI Personalization", "Email Automation"],
    summary: "Hyper-personalized cold outreach engine scraping, verifying, and crafting custom email angles for prospective clients.",
    fullDescription: "A self-contained outbound engine that scans LinkedIn & Google Maps for qualified businesses, scrapes key decision maker contacts, runs AI research on their current tech stack, and generates tailored hyper-relevant email copy.",
    results: [
      "Achieved 68% open rate and 14% response rate",
      "Generated 140+ qualified sales calls in 60 days",
      "Automated complete prospect list building"
    ],
    metrics: [
      { label: "Open Rate", value: "68%" },
      { label: "Reply Rate", value: "14%" },
      { label: "Qualified Calls", value: "140+" }
    ],
    client: "SaaS Scaling Studio",
    techStack: ["n8n", "Instantly.ai", "OpenAI GPT-4", "PhantomBuster"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    featured: true
  },
  {
    id: "restaurant-poster",
    title: "Restaurant Poster Generation",
    category: "Creative AI",
    tags: ["AI Image Gen", "Creative Direction", "Midjourney/Imagen"],
    summary: "Automated high-resolution culinary promotional asset creation pipeline for multi-location dining brands.",
    fullDescription: "Developed an AI asset factory for culinary marketing. Restaurant managers input dish details and seasonal offers into a simple form, and the pipeline outputs studio-grade print & social media posters in 4K resolution.",
    results: [
      "Cut poster production turnaround from 5 days to 2 minutes",
      "Reduced graphic design costs by 85%",
      "Delivered 300+ custom promotional assets in month 1"
    ],
    metrics: [
      { label: "Turnaround", value: "2 Mins" },
      { label: "Cost Savings", value: "85%" },
      { label: "Assets Created", value: "300+" }
    ],
    client: "Gourmet Group Int.",
    techStack: ["Imagen 3", "Midjourney API", "Canva API", "Python Flask"],
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    featured: false
  },
  {
    id: "ai-website-dev",
    title: "AI Website Development",
    category: "Creative AI",
    tags: [
      "AI Website Development",
      "Modern Responsive Design",
      "Business Landing Pages",
      "High-Performance UI/UX",
      "SEO-Friendly Architecture",
      "Fast Loading Performance"
    ],
    summary: "Bespoke AI-powered website development delivering modern responsive business landing pages, high-performance UI/UX, and SEO-friendly architecture.",
    fullDescription: "Architected high-converting, modern AI website solutions tailored for scaling businesses. Combining intelligent layout generation, responsive design systems, SEO-friendly component architecture, and ultra-fast loading performance.",
    results: [
      "Achieved 99/100 Google Lighthouse performance & SEO score",
      "Increased user engagement and landing page conversion rate by 48%",
      "Ultra-fast sub-500ms page loading across mobile and desktop devices"
    ],
    metrics: [
      { label: "Lighthouse", value: "99/100" },
      { label: "Load Speed", value: "< 0.5s" },
      { label: "Conversion", value: "+48%" }
    ],
    client: "Nexus Digital Suite",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite / Next.js", "SEO Engine"],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    featured: false
  },
  {
    id: "customer-support-agent",
    title: "Customer Support Agent",
    category: "AI Agents",
    tags: ["Knowledge Base RAG", "Intercom/Zendesk", "Multi-Language"],
    summary: "Autonomous support agent solving 78% of incoming customer inquiries instantly across 12 languages.",
    fullDescription: "Integrated an enterprise RAG knowledge base agent into Intercom and Zendesk. The agent reads ticket history, checks Shopify order fulfillment data, handles refund validations, and resolves user queries with natural conversational tones.",
    results: [
      "78% first-contact resolution without human agent",
      "Instant response time 24/7 in 12 languages",
      "CSAT score improved from 4.1 to 4.9 stars"
    ],
    metrics: [
      { label: "Deflection Rate", value: "78%" },
      { label: "Languages", value: "12" },
      { label: "CSAT Score", value: "4.9 / 5" }
    ],
    client: "Global Logistics Direct",
    techStack: ["Pinecone Vector DB", "LangChain", "Intercom API", "Shopify API"],
    imageUrl: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1000&auto=format&fit=crop",
    featured: false
  }
];

export const SKILLS_LIST: Skill[] = [
  {
    id: "ai-agent-dev",
    name: "AI Agent Development & RAG",
    category: "AI & ML",
    percentage: 96,
    iconName: "Cpu",
    description: "Function calling, multi-agent orchestration, LangChain, LlamaIndex, and Vector DB retrieval."
  },
  {
    id: "n8n-automation",
    name: "n8n & Workflow Automation",
    category: "Automation",
    percentage: 98,
    iconName: "Workflow",
    description: "Enterprise workflow design, custom nodes, error handler hooks, and webhook architecture."
  },
  {
    id: "prompt-engineering",
    name: "Prompt Engineering & System Specs",
    category: "AI & ML",
    percentage: 95,
    iconName: "Terminal",
    description: "Few-shot prompting, structured JSON outputs, guardrails, and context window optimization."
  },
  {
    id: "api-integration",
    name: "API Integration & Webhooks",
    category: "Development",
    percentage: 94,
    iconName: "Code2",
    description: "REST & GraphQL APIs, authentication flows, OAuth, serverless functions, and middleware."
  },
  {
    id: "crm-systems",
    name: "CRM & Business Systems",
    category: "Automation",
    percentage: 92,
    iconName: "Database",
    description: "HubSpot, Salesforce, GoHighLevel, Airtable, and custom SQL data pipelines."
  },
  {
    id: "ai-media",
    name: "AI Media & Video Generation",
    category: "Design & Media",
    percentage: 90,
    iconName: "Sparkles",
    description: "Midjourney, Imagen 3, HeyGen, ElevenLabs, and automated creative asset pipelines."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Audit",
    subtitle: "Mapping Bottlenecks",
    description: "We analyze your current manual workflows, data silos, and repetitive overhead to identify high-ROI AI automation opportunities.",
    deliverables: ["Process Map Audit", "ROI & Savings Projection", "Tech Stack Compatibility Report"]
  },
  {
    number: "02",
    title: "Architecture & Specs",
    subtitle: "Designing the Engine",
    description: "Crafting technical specifications, prompt security guardrails, schema definitions, and node execution diagrams before touching code.",
    deliverables: ["Workflow Blueprint", "API & Webhook Schema", "Security & Privacy Protocol"]
  },
  {
    number: "03",
    title: "Custom Agent Build",
    subtitle: "Core Engineering",
    description: "Developing autonomous agents, custom n8n nodes, vector databases, and fine-tuned system prompts with zero-fail redundancy.",
    isFeatured: true,
    deliverables: ["Tested AI Agent Nodes", "Multi-Agent Orchestration", "Function Calling Logic"]
  },
  {
    number: "04",
    title: "Integration & Testing",
    subtitle: "Stress Testing Systems",
    description: "Connecting agents to your CRM, database, Slack, and email systems while stress-testing edge cases and error handles.",
    deliverables: ["API Webhook Live Connect", "Edge-case Failure Handlers", "Real Data Dry-Run"]
  },
  {
    number: "05",
    title: "Deployment & Training",
    subtitle: "Launch & Empowerment",
    description: "Rolling out production builds seamlessly without interrupting daily operations, paired with video walkthroughs for your team.",
    deliverables: ["Live Production Rollout", "Staff Video Training", "Operations Manual"]
  },
  {
    number: "06",
    title: "Maintenance & Scaling",
    subtitle: "Continuous Improvement",
    description: "Proactive monitoring of API uptime, vector index updates, prompt optimizations, and periodic performance reviews.",
    deliverables: ["Uptime & Error Alerts", "Monthly Model Optimization", "Dedicated SLA Support"]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter-automation",
    title: "Workflow Automation",
    subtitle: "For Small Teams & Growing Businesses",
    price: "$550",
    period: "one-time",
    description: "Streamline 2 to 3 core repetitive business tasks into an automated zero-touch n8n pipeline.",
    features: [
      "Up to 3 Custom n8n / Make Workflows",
      "CRM & Email Integration (HubSpot / GHL)",
      "Automated Lead Enrichment Pipeline",
      "Self-Healing Error Notifications",
      "Video Walkthrough & Staff Training",
      "14 Days Post-Launch Support"
    ],
    ctaText: "Start Automation"
  },
  {
    id: "growth-ai-agents",
    title: "Autonomous AI System",
    subtitle: "Our Most Popular Complete Build",
    price: "$1,560",
    period: "one-time",
    description: "Complete custom AI Agent ecosystem with vector knowledge base, function calling, and deep CRM sync.",
    isPopular: true,
    features: [
      "Custom Autonomous AI Agent (Voice/Text)",
      "RAG Vector Database with Your Docs",
      "Full n8n Enterprise Workflow Integration",
      "Multi-Channel Connect (Web, WhatsApp, Slack, CRM)",
      "Advanced Lead Qualification & Scheduling",
      "Dedicated Dashboard & Analytics",
      "30 Days VIP Support & Optimization"
    ],
    ctaText: "Build AI System"
  },
  {
    id: "enterprise-custom",
    title: "Enterprise Ecosystem",
    subtitle: "For Scale-Ups & Multi-Branch Brands",
    price: "$2,150",
    period: "custom scope",
    description: "End-to-end AI infrastructure, custom multi-agent fleets, dedicated cloud hosting, and SLA support.",
    features: [
      "Fleet of Multi-Agent Orchestrated Bots",
      "Custom API & Serverless Middleware",
      "Self-Hosted Private Vector Store",
      "AI Creative & Video Generation Suite",
      "Custom Security & Guardrail Compliance",
      "Dedicated Slack Channel & Priority SLA",
      "Monthly Model Fine-Tuning & Updates"
    ],
    ctaText: "Request Custom Proposal"
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: "testi-1",
    quote: "SHAFIN completely transformed our lead handling. We went from taking 4 hours to contact new prospects to responding in under 15 seconds. Our sales team closed 34% more deals in the first month alone.",
    author: "Marcus Vance",
    role: "VP of Growth",
    company: "Apex Capital Partners",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    impactTag: "+34% Conversion Boost"
  },
  {
    id: "testi-2",
    quote: "The Dental AI receptionist SHAFIN built handles call spikes flawlessly. Patients love getting instant bookings at 11 PM, and our staff no longer spends hours playing phone tag.",
    author: "Dr. Elena Rostova",
    role: "Founder & Lead Dentist",
    company: "Rostova Dental Aesthetics",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    impactTag: "Saved $3.5k/mo"
  },
  {
    id: "testi-3",
    quote: "SHAFIN's mastery of n8n and AI agents is unreal. He didn't just build scripts; he architected a resilient business engine that handles our entire fulfillment flow with zero downtime.",
    author: "David Chen",
    role: "Co-Founder",
    company: "Nexus Logistics Tech",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    impactTag: "150+ Workflows Deployed"
  }
];
