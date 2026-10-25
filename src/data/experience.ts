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
    company: 'Bluesense',
    role: 'Software Engineering Intern',
    start: 'Sep 2026',
    end: 'Present',
    location: 'Boston, USA · remote',
    bullets: [
      'Audited the Smart Beauty iOS app (Swift, SwiftUI) and fixed the session, checkout and cart bugs it surfaced.',
      'Removed invented data from the app: skin-scan results show only real values, placeholder modules are gone.',
      "Automated the team's GitHub workflow for about 30 people: issue forms, triage, PR checks, daily reports.",
    ],
    tags: ['Swift', 'SwiftUI', 'iOS', 'GitHub Actions'],
  },
  {
    company: 'BirthdayMessaging',
    role: 'Cybersecurity Intern',
    start: 'Sep 2026',
    end: 'Present',
    location: 'United Kingdom · remote',
    bullets: [
      'Run weekly security scans of a production messaging platform with OWASP ZAP, Burp Suite and nmap.',
      'Evaluated four EDR products against a real server intrusion; proposed open-source Wazuh as the start.',
      "Found in code review that a waitlist's Firestore rules exposed every signup email; reported it as High.",
    ],
    tags: ['OWASP ZAP', 'Burp Suite', 'nmap', 'Wazuh'],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    start: 'Apr 2026',
    end: 'Sep 2026',
    location: 'Wrocław, Poland',
    bullets: [
      'Built websites for small businesses end to end: requirements, design, build, deployment, domain and TLS.',
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
