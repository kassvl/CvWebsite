export interface ExperienceItem {
  company: string
  role: string
  start: string
  end: string
  location: string
  bullets: string[]
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'EPAM Systems',
    role: 'Cloud & DevOps Trainee',
    start: 'Feb 2026',
    end: 'Apr 2026',
    location: 'Wrocław, Poland',
    bullets: [
      'Selected for the EPAM Cloud & DevOps Lab — competitive technical screening, hands-on tracks across AWS, Kubernetes, Terraform and CI/CD.',
      'Built 2 reference CI/CD pipelines (GitHub Actions, Jenkins) for Docker workloads: build → test → image push → deploy, removing manual ops steps.',
      'Provisioned workloads across 2 cloud providers (AWS + Azure) using modular Terraform with state-locked plan/apply gates.',
      'Operated Kubernetes clusters and Linux hosts; wrote shell automation for routine ops (log rotation, image cleanup, health checks).',
      'Pair-programmed with senior DevOps engineers on container hardening and observability stacks (Prometheus, Grafana, Loki, CloudWatch).',
    ],
    tags: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions'],
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
    degree: 'B.Eng. — Information Technology',
    start: 'Sep 2023',
    end: 'Jun 2027',
    location: 'Wrocław, Poland',
    highlights: [
      'Final-year focus on cloud-native architecture and service mesh research.',
      'Engineering thesis: "Istio Ambient Mesh — a sidecar-less service-mesh architecture".',
      'Active in cloud / DevOps student community; weekly hands-on labs.',
    ],
  },
]
