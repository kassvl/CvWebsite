export interface ExperienceItem {
  company: string
  role: string
  start: string
  end: string
  location: string
  bullets: string[]
  tags: string[]
}

// Mirrors ~/cv/cv-data.yml. Change facts there first, then here.
export const experience: ExperienceItem[] = [
  {
    company: 'Freelance',
    role: 'Web Developer',
    start: 'Apr 2026',
    end: 'Present',
    location: 'Wrocław, Poland',
    bullets: [
      'Build websites for small businesses end to end: requirements, design, build, deployment, domain and TLS.',
      'loomr.net for a textile design studio: Next.js, video-driven room navigation, custom design system.',
      'braidss.xyz for a hair salon: booking requests with an admin desk, Next.js and Postgres on Vercel.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Postgres', 'Vercel'],
  },
  {
    company: 'EPAM Systems',
    role: 'Cloud & DevOps Trainee',
    start: 'Feb 2026',
    end: 'Apr 2026',
    location: 'Wrocław, Poland',
    bullets: [
      "Selected through a competitive technical screen for EPAM's Cloud & DevOps program.",
      'Built CI/CD pipelines in GitHub Actions and Jenkins for Docker apps: build, test, image push, deploy.',
      'Provisioned AWS and Azure infrastructure with modular Terraform; ran Kubernetes clusters and Linux hosts.',
      'Set up Prometheus and Grafana monitoring and automated routine operations with Bash.',
    ],
    tags: ['GitHub Actions', 'Docker', 'Terraform', 'AWS', 'Kubernetes'],
  },
]

export interface EducationItem {
  school: string
  degree: string
  start: string
  end: string
  location: string
  highlights: string[]
}

export const education: EducationItem[] = [
  {
    school: 'WSB Merito University',
    degree: 'B.Eng. Information Technology',
    start: 'Sep 2023',
    end: 'Feb 2027',
    location: 'Wrocław, Poland',
    highlights: [
      'Final year; graduating February 2027.',
      'Engineering thesis: Istio Ambient vs the sidecar pattern, with a self-healing controller.',
    ],
  },
]
