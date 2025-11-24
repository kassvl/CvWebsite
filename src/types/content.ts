export type SocialLink = {
  label: string
  url: string
  icon?: string
}

export type HighlightStat = {
  label: string
  value: string
}

export type HeroHighlight = {
  title: string
  description: string
}

export type Profile = {
  name: string
  title: string
  tagline: string
  summary: string
  location: string
  availability: string
  education: string
  languages: string[]
  interests: string[]
  email: string
  phone: string
  avatar?: string
  socials: SocialLink[]
  highlights: HeroHighlight[]
  stats: HighlightStat[]
}

export type ExperienceEntry = {
  id: string
  company: string
  companyUrl?: string
  location: string
  role: string
  start: string
  end: string
  description: string
  achievements: string[]
  technologies: string[]
  recognition?: string[]
}

export type SkillLevel = 'critical' | 'advanced' | 'intermediate'

export type SkillItem = {
  name: string
  level: SkillLevel
  description?: string
}

export type SkillCategory = {
  title: string
  items: SkillItem[]
}

export type ProjectLink = {
  label: string
  url: string
  type: 'live' | 'repo' | 'case-study'
}

export type Project = {
  id: string
  title: string
  category: 'web' | 'mobile' | 'ai' | 'hackathon' | 'automation'
  year: string
  description: string
  problem: string
  solution: string
  impact: string
  technologies: string[]
  coverImage: string
  links: ProjectLink[]
  highlights: string[]
}

export type Certificate = {
  id: string
  title: string
  issuer: string
  issueDate: string
  credentialUrl: string
  description?: string
}

export type GalleryItem = {
  id: string
  title: string
  category: 'conference' | 'hackathon' | 'workshop' | 'nature' | 'award'
  image: string
  alt: string
  location?: string
  date?: string
  description?: string
}

export type ContactChannel = {
  label: string
  value: string
  url?: string
  icon?: string
}

export type Competency = {
  id: string
  title: string
  headline: string
  description: string
  capabilities: string[]
  tools: string[]
}

export type Insight = {
  id: string
  title: string
  type: 'article' | 'talk' | 'podcast' | 'resource'
  date: string
  summary: string
  url: string
  source: string
}


