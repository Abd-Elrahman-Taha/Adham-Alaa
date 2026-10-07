export interface TelemetryMetric {
  label: string;
  value: string;
  unit?: string;
  description?: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  positioningStatement: string;
  summary: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  cvUrl: string;
  portrait: {
    src: string;
    srcset: string;
    alt: string;
    sizes: string;
  };
  metrics: TelemetryMetric[];
  status: {
    indicator: 'active' | 'busy' | 'offline';
    label: string;
    sublabel: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  year: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  impactPoints?: string[];
  technologies: string[];
  architecturePatterns: string[];
}

export interface ProjectFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Enterprise Backend' | 'Operational Platform' | 'API & Microservices';
  description: string;
  architectureNotes: string;
  keyFeatures: ProjectFeature[];
  technologies: string[];
  architecturePatterns: string[];
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  flowSteps?: string[];
  metrics?: ProjectMetric[];
  operationalValue?: string;
}

export interface SkillItem {
  id: string;
  label: string;
  icon: string;
  description?: string;
  tags?: string[];
  isFeatured?: boolean;
}

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  codeName: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  expectedGraduation: string;
  location: string;
  status: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  trackCode: string;
  issueDate: string;
  duration: string;
  skillsAcquired: string[];
  description: string;
  credentialNote?: string;
}

export interface LanguageItem {
  id: string;
  language: string;
  proficiency: 'Native' | 'Proficient' | 'Working Knowledge' | 'Conversational';
  note?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  displayValue: string;
  icon: 'github' | 'linkedin' | 'mail' | 'phone';
  actionPrompt: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  number: string;
}
