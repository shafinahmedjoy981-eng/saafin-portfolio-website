import { Project, Service, Skill, ProcessStep, PricingPlan, Testimonial, FaqItem } from '../types';

export const SHAFIN_PROFILE_IMAGE_URL = '/about-profile.png';
export const SHAFIN_PROFILE_FALLBACK = '/shafin_profile.jpg';
export const HERO_BG_IMAGE_URL = '/hero-bg.png';
export const HERO_BG_FALLBACK = '/hero_bg.png';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'documorph',
    title: 'DocuMorph',
    cardTitle: 'Web App Development',
    cardDescription: 'Full-stack web applications, dashboards, and internal tools.',
    category: 'Custom SaaS',
    description: 'All-in-one PDF & image SaaS platform for merging, splitting, compressing, and converting files with a high-speed vector engine.',
    imageAlt: 'DocuMorph SaaS Interface',
    tags: ['Django', 'React', 'PostgreSQL', 'Vector Engine'],
    accentColor: '#7B5CFA',
    isClickable: true,
    detail: {
      imageSrc: '/documorph_screenshot.png',
      imageAlt: 'DocuMorph Web App Toolkit',
      browserUrl: 'docu-morph-pdf-image-platform.vercel.app',
      fullDescription:
        'An all-in-one PDF & image toolkit built for speed and reliability — merge, split, compress, and convert files in seconds. Features a fast vector processing engine, clean SaaS-style interface, and secure file handling for modern web workflows.',
      liveLinkText: 'Live Web App: https://docu-morph-pdf-image-platform.vercel.app/',
      liveLinkUrl: 'https://docu-morph-pdf-image-platform.vercel.app/',
    },
  },
  {
    id: 'primecare',
    title: 'Lumina Dental Studio',
    cardTitle: 'CRM & Booking System',
    cardDescription: 'HubSpot-powered CRM setups and real-time booking/appointment systems.',
    category: 'Web App',
    description: 'Multi-specialty clinic appointment platform with doctor profiles, service listings, and real-time online booking.',
    imageAlt: 'Lumina Dental Studio Platform',
    tags: ['React', 'DRF', 'PostgreSQL', 'Calendar Sync'],
    accentColor: '#6446E0',
    isClickable: true,
    detail: {
      imageSrc: '/dental_clinic_screenshot.png',
      imageAlt: 'Dental Clinic Booking System',
      browserUrl: 'dental-clinic-booking-website-snowy.vercel.app',
      fullDescription:
        'A comprehensive healthcare and clinic booking platform engineered with real-time appointment booking, doctor profiles, service listings, automated confirmations, and a seamless, mobile-responsive booking flow designed for high conversion.',
      liveLinkText: 'Dental Clinic Booking System: https://dental-clinic-booking-website-snowy.vercel.app/',
      liveLinkUrl: 'https://dental-clinic-booking-website-snowy.vercel.app/',
    },
  },
  {
    id: 'ai-marketing-automation',
    title: 'AI Marketing Automation (n8n)',
    cardTitle: 'AI & n8n Automation',
    cardDescription: 'Workflow automation that connects your tools and removes manual busywork.',
    category: 'Custom SaaS',
    description: 'An n8n-powered AI workflow that automates LinkedIn, Instagram, and long-form content — from generation to publishing.',
    imageAlt: 'n8n Automation Architecture',
    tags: ['n8n', 'AI Agents', 'OpenAI', 'Buffer API'],
    accentColor: '#7B5CFA',
    isClickable: true,
    detail: {
      imageSrc: '/n8n-workflow.jpg',
      imageAlt: 'n8n Workflow Automation Canvas',
      browserUrl: 'n8n.cloud/workflow/content-ai-automation',
      fullDescription:
        'This n8n automation runs on a scheduled trigger and branches into three content pipelines — LinkedIn, Instagram, and long-form articles. Each pipeline uses an AI content-strategy model to plan the post, a structured-output parser to format it correctly, a personalization step to match brand voice, an AI visual-generation node to create matching creative assets, and a final step that uploads the asset and logs the published record — fully automating content creation from idea to publish.',
    },
  },
  {
    id: 'nexabot',
    title: 'Personal Finance Tracker',
    cardTitle: 'Custom SaaS Application',
    cardDescription: 'End-to-end SaaS platforms built on Django, DRF, PostgreSQL and React.',
    category: 'Custom SaaS',
    description: 'End-to-end SaaS platforms built on Django, DRF, PostgreSQL and React.',
    imageAlt: 'Personal Finance Tracker Platform',
    tags: ['RAG', 'Vector DB', 'FastAPI', 'React'],
    accentColor: '#8C70FF',
    isClickable: true,
    detail: {
      imageSrc: '/finance_tracker_screenshot.png',
      imageAlt: 'Personal Finance Tracker Dashboard',
      browserUrl: 'finance-tracker-platform.vercel.app',
      fullDescription:
        'A personal finance tracker that tracks income/expenses, shows monthly trends, category breakdown, and real-time balance, built with a clean dashboard UI.',
      liveLinkText: 'Live Web App: https://finance-tracker-platform.vercel.app',
      liveLinkUrl: 'https://finance-tracker-platform.vercel.app',
      extraLinksTitle: 'Want to explore more of my projects? Check out below:',
      extraLinks: [
        {
          label: 'Cash on Delivery System: https://cash-on-delivery-system.vercel.app/',
          url: 'https://cash-on-delivery-system.vercel.app/',
        },
      ],
    },
  },
  {
    id: 'lumen-studio',
    title: 'PureNest Cleaning',
    cardTitle: 'Creative Website Design',
    cardDescription: 'Modern, conversion-focused websites with distinctive visual design.',
    category: 'Creative Website',
    description: 'A visually-driven agency portfolio concept with bold typography and smooth scroll storytelling.',
    imageAlt: 'PureNest Cleaning Creative Website',
    tags: ['Motion', 'Creative UI', 'Tailwind CSS'],
    accentColor: '#5337C4',
    isClickable: true,
    detail: {
      imageSrc: '/cleaning_website_screenshot.png',
      imageAlt: 'Creative Cleaning Website',
      browserUrl: 'cleaning-website-teal.vercel.app',
      fullDescription:
        'A modern, conversion-focused cleaning services website built with clean typography, high-impact aesthetic framing, quote/WhatsApp CTA buttons, and a fully responsive layout tailored for instant trust and inquiries.',
      liveLinkText: 'Creative Cleaning Website: https://cleaning-website-teal.vercel.app/',
      liveLinkUrl: 'https://cleaning-website-teal.vercel.app/',
      extraLinksTitle: 'Want to explore more creative work like this? Check out a few more:',
      extraLinks: [
        {
          label: 'Creative Healthcare Website: https://healthcare-website-mu.vercel.app',
          url: 'https://healthcare-website-mu.vercel.app',
        },
        {
          label: 'Creative Real Estate Website: https://realestatewebsite-pi.vercel.app',
          url: 'https://realestatewebsite-pi.vercel.app',
        },
        {
          label: 'Creative Interior Website: https://interior-design-website-gamma.vercel.app',
          url: 'https://interior-design-website-gamma.vercel.app',
        },
        {
          label: 'Creative Mortgage Broker Website: https://mortgage-broker-website-iota.vercel.app/',
          url: 'https://mortgage-broker-website-iota.vercel.app/',
        },
      ],
      closingText: 'Have a project in mind or looking for a custom creative website? Feel free to reach out and let’s craft something exceptional together.',
    },
  },
  {
    id: 'orderflow',
    title: 'Conversa — AI Chatbot Platform',
    cardTitle: 'AI Chatbot Development',
    cardDescription: 'Custom conversational AI agents for support, sales, and lead capture.',
    category: 'Web App',
    description: 'Custom conversational AI agents for support, sales, and lead capture.',
    imageAlt: 'Conversa AI Chatbot Platform Sign-In',
    tags: ['React', 'Django', 'HubSpot API', 'Charts'],
    accentColor: '#7B5CFA',
    isClickable: true,
    detail: {
      imageSrc: '/conversa_screenshot.png',
      imageAlt: 'Conversa AI Chatbot Platform Sign-In Interface',
      browserUrl: 'rag-chatbot-platform-fawn.vercel.app',
      fullDescription:
        'Conversa is a modern conversational AI chatbot and customer messaging platform equipped with seamless Google Single Sign-On (SSO) authentication and encrypted connections. The platform provides real-time chat log analysis, multi-channel customer support orchestration, and an intuitive admin dashboard for managing chatbot deflection and interactions — built to help modern businesses automate customer support and scale user engagement effectively.',
      liveLinkText: 'Live Web App: https://rag-chatbot-platform-fawn.vercel.app',
      liveLinkUrl: 'https://rag-chatbot-platform-fawn.vercel.app',
    },
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'service-1',
    iconName: 'LayoutTemplate',
    title: 'Web MVP Deploy',
    description: 'Custom 1-page web app built and deployed as a lean MVP — fast, functional, ready to launch.',
  },
  {
    id: 'service-2',
    iconName: 'Code2',
    title: 'Auth Web App',
    description: 'A 2–3 page web app with full auth, API integration, and issue-free deployment — launch ready.',
  },
  {
    id: 'service-3',
    iconName: 'Layers',
    title: 'Full SaaS MVP',
    description: 'A complete SaaS MVP — custom frontend, Supabase backend, and a core AI feature, fully deployed.',
  },
  {
    id: 'service-4',
    iconName: 'LayoutTemplate',
    title: 'Simple Web App',
    description: 'A simple, clean web application built around one core function — lightweight and functional.',
  },
  {
    id: 'service-5',
    iconName: 'Code2',
    title: 'Web App Package',
    description: 'Custom web app development with responsive design, user authentication, and a connected database.',
  },
  {
    id: 'service-6',
    iconName: 'Workflow',
    title: 'SaaS Admin System',
    description: 'An end-to-end SaaS system with a full dashboard, admin panel, and production deployment.',
  },
  {
    id: 'service-7',
    iconName: 'Bot',
    title: 'Website Chatbot',
    description: 'A chatbot trained on your website content, with a custom knowledge base for instant visitor support.',
  },
  {
    id: 'service-8',
    iconName: 'Workflow',
    title: 'RAG Lead Capture',
    description: 'Advanced RAG chatbot with a secure admin panel, lead capture, and CRM/email/Sheets integration.',
  },
  {
    id: 'service-9',
    iconName: 'Bot',
    title: 'Advanced RAG SaaS',
    description: 'A full RAG-powered AI chatbot system with CRM integration, user accounts, and a SaaS dashboard.',
  },
  {
    id: 'service-10',
    iconName: 'CalendarCheck2',
    title: 'Full Product Build',
    description: 'End-to-end product builds — from web app or SaaS MVP to an AI-powered chatbot system, fully deployed.',
  },
];

export const SKILLS_DATA: Skill[] = [
  {
    id: 'skill-1',
    name: 'AI Chatbot Development & RAG',
    percentage: 85,
  },
  {
    id: 'skill-2',
    name: 'AI & n8n Automation',
    percentage: 80,
  },
  {
    id: 'skill-3',
    name: 'Business Process Automation',
    percentage: 85,
  },
  {
    id: 'skill-4',
    name: 'HubSpot CRM Management',
    percentage: 78,
  },
  {
    id: 'skill-5',
    name: 'Frontend Development',
    percentage: 90,
  },
  {
    id: 'skill-6',
    name: 'Custom Booking / Order Systems',
    percentage: 90,
  },
];

export const PROCESS_STEPS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Requirement Mapping',
    description: 'Understand business goals, current bottlenecks, and technical requirements before writing a single line of code.',
  },
  {
    number: '02',
    title: 'System & Database Architecture',
    description: 'Plan the tech stack, data models, and API structure using Django, DRF and PostgreSQL for a scalable foundation.',
  },
  {
    number: '03',
    title: 'UI/UX & Interface Design',
    description: 'Design clean, user-friendly interfaces in React that make complex systems feel simple.',
  },
  {
    number: '04',
    title: 'Agile Development & Integration',
    description: 'Build in iterative sprints, integrating third-party APIs, webhooks, and CRM tools like HubSpot.',
  },
  {
    number: '05',
    title: 'AI Agent & Workflow Automation',
    description: 'Layer in n8n-powered AI agents to automate repetitive processes, content pipelines, and customer interactions.',
  },
  {
    number: '06',
    title: 'Testing, Deployment & Support',
    description: 'Rigorously test, deploy to production, and provide ongoing monitoring and support as the system scales.',
  },
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    tagline: 'For exploring & quick consultations',
    features: [
      '1 discovery call (30 min)',
      'Project feasibility notes',
      'Architecture overview',
      'Email support',
    ],
    ctaText: 'Get Started',
  },
  {
    id: 'basic',
    name: 'Basic',
    price: '$299',
    period: '/ project',
    tagline: 'For single-feature automation',
    features: [
      '1 AI agent or CRM workflow',
      'Tool webhook integration',
      '2 revisions included',
      '1-week delivery',
      'Deployment & handover guide',
    ],
    ctaText: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$799',
    period: '/ project',
    tagline: 'For full SaaS or AI systems',
    isPopular: true,
    features: [
      'Up to 3 integrations/agents',
      'Custom CRM & booking workflows',
      'Full-stack architecture & React UI',
      'Priority support channel',
      '2-week delivery',
      '30-day post-launch warranty',
    ],
    ctaText: 'Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    tagline: 'For large-scale operations',
    features: [
      'Dedicated system architecture',
      'Unlimited integrations & agents',
      'Enterprise database scaling',
      'Dedicated SLA & 24/7 support',
      'Custom timeline & roadmapping',
    ],
    ctaText: 'Contact Sales',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Shafin turned our messy multi-tool customer outreach into a streamlined, automated n8n pipeline. We saved over 20 hours each week and cut response times down to under 5 minutes.',
    name: 'Marcus Vance',
    role: 'Operations Director',
    company: 'Elevate Marketing Labs',
    avatarText: 'MV',
  },
  {
    id: 'test-2',
    quote: 'The full-stack booking system Shafin architected for our clinic network has been rock-solid. From Django backend to responsive React UI, every detail was carefully executed.',
    name: 'Dr. Sarah Lin',
    role: 'Co-Founder & Clinical Lead',
    company: 'Lumina Dental Studio',
    avatarText: 'SL',
  },
  {
    id: 'test-3',
    quote: 'Working with an engineer who genuinely understands both AI agent architectures and real-world SaaS mechanics is rare. Shafin delivered DocuMorph ahead of schedule.',
    name: 'Tariq Rahman',
    role: 'Product Lead',
    company: 'VectorFlow Technologies',
    avatarText: 'TR',
  },
  {
    id: 'test-4',
    quote: 'Shafin built an intelligent CRM workflow that synced our inbound leads directly into automated Slack alerts and calendar invites. Conversion speed improved dramatically.',
    name: 'Elena Rostova',
    role: 'Head of Growth',
    company: 'AuraScale Digital',
    avatarText: 'ER',
  },
  {
    id: 'test-5',
    quote: 'The attention to code quality and interface responsiveness was exceptional. Shafin took our rough Figma designs and turned them into a high-performance React application in record time.',
    name: 'David Chen',
    role: 'Chief Technology Officer',
    company: 'NovaStack Cloud',
    avatarText: 'DC',
  },
  {
    id: 'test-6',
    quote: 'Integrating custom AI retrieval pipelines into our customer knowledge base sounded intimidating until Shafin stepped in. Seamless execution and great communication throughout.',
    name: 'Amara Okafor',
    role: 'VP of Customer Experience',
    company: 'ApexBridge Solutions',
    avatarText: 'AO',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What services do you offer?',
    answer: 'I build full-stack web apps, custom SaaS platforms, AI chatbots with RAG, and n8n-powered automation and CRM/booking systems — end to end, from design to deployment.',
  },
  {
    id: 'faq-2',
    question: 'How long does a typical project take?',
    answer: 'Most single-feature builds take about 1 week, while full SaaS or AI systems usually take 2–3 weeks depending on scope.',
  },
  {
    id: 'faq-3',
    question: 'Do you work with clients outside Bangladesh?',
    answer: 'Yes, I work fully remote with clients globally and collaborate across time zones with clear async communication.',
  },
  {
    id: 'faq-4',
    question: 'What does your development process look like?',
    answer: 'I follow a 6-step process — discovery, architecture, UI/UX design, development, AI/automation integration, and testing & deployment — to keep every project structured and predictable.',
  },
  {
    id: 'faq-5',
    question: 'Can you improve or take over an existing project?',
    answer: 'Yes, I regularly audit, fix, and extend existing codebases rather than rebuilding from scratch, as long as the stack is compatible.',
  },
  {
    id: 'faq-6',
    question: 'Do you provide support after launch?',
    answer: 'Yes, Pro and Enterprise plans include post-launch support, and I offer maintenance retainers for ongoing updates.',
  },
  {
    id: 'faq-7',
    question: 'How do I get started?',
    answer: "Fill out the project inquiry form in the Contact section with your goals and budget, and I'll respond within 24 hours to schedule a discovery call.",
  },
];
