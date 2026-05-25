export type ProjectCategory = 'Cloud / Infra' | 'Service Mesh' | 'DevOps Tools' | 'Platform' | 'Web'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  summary: string
  highlights: string[]
  stack: string[]
  language: string
  stars: number
  repo: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'biometric-payment-infrastructure',
    title: 'Secure Biometric Payment Infrastructure',
    category: 'Cloud / Infra',
    summary:
      'FinTech-grade Terraform IaC modeled after a regulated European payment processor — EKS + Istio Ambient on AWS with PCI-DSS, GDPR and EU DORA mapped controls.',
    highlights: [
      '7 Terraform modules across 2 AWS regions (eu-central-1 + eu-west-1 DR)',
      'EKS 1.30 + Istio Ambient (ztunnel + waypoint) — sidecar-less mTLS',
      'IRSA per workload, External Secrets Operator + AWS Secrets Manager',
      'CI gates every PR through Checkov + tfsec + Trivy — fail blocks merge',
      'Mapped to PCI-DSS v4.0, GDPR / Schrems II, EU DORA, CIS AWS, NIST 800-53',
    ],
    stack: ['Terraform 1.9', 'AWS EKS', 'Istio Ambient', 'Aurora', 'WAF v2', 'IRSA', 'KMS'],
    language: 'HCL',
    stars: 2,
    repo: 'https://github.com/kassvl/biometric-payment-infrastructure',
    featured: true,
  },
  {
    slug: 'multi-cluster-istio-mesh',
    title: 'Multi-Cluster Istio Service Mesh',
    category: 'Service Mesh',
    summary:
      'Two-cluster Kubernetes setup simulating AWS + GCP locally with Kind, enforcing strict mTLS and zero-trust traffic policies cluster-wide.',
    highlights: [
      'Automatic mTLS verified via `istioctl x authz check`',
      'AuthorizationPolicy + PeerAuthentication as default-deny',
      'Kiali + Prometheus + Grafana for golden-signal observability',
      'East-west gateway for true multi-cluster discovery in roadmap',
    ],
    stack: ['Kubernetes', 'Istio v1.28', 'Kind', 'Helm', 'Prometheus', 'Grafana', 'Kiali'],
    language: 'YAML / Bash',
    stars: 1,
    repo: 'https://github.com/kassvl/multi-cluster-istio-mesh',
    featured: true,
  },
  {
    slug: 'githealthcheck-cli',
    title: 'GitHealthCheck CLI',
    category: 'DevOps Tools',
    summary:
      'Fully offline command-line tool that audits Git repositories for code quality, architectural debt, sustainability and best-practice gaps.',
    highlights: [
      '20+ quality metrics computed without AST parsing',
      'SOLID / architecture pressure scoring',
      'Single-binary CLI — no GUI, no network calls',
      'Designed for both OSS maintainers and enterprise repos',
    ],
    stack: ['Python', 'Click', 'GitPython', 'Rich', 'pytest'],
    language: 'Python',
    stars: 1,
    repo: 'https://github.com/kassvl/GitHealthCheck-CLI',
    featured: true,
  },
  {
    slug: 'renecore-greenfleet',
    title: 'Renecore GreenFleet',
    category: 'Platform',
    summary:
      'Renewable-energy monitoring & 7-day forecasting platform for distributed sites, with battery-storage simulation and real-time data ingestion.',
    highlights: [
      'FastAPI + Next.js 14 stack, ML forecasting (7-day horizon)',
      'Battery storage simulation for off-grid scheduling',
      'Real-time telemetry ingestion + chart-grade dashboards',
      'Containerised, ready for K8s deployment',
    ],
    stack: ['Python 3.11', 'FastAPI', 'Next.js 14', 'PostgreSQL', 'Docker'],
    language: 'Python / TypeScript',
    stars: 2,
    repo: 'https://github.com/kassvl/Rxxxxx-GreenFleet',
    featured: true,
  },
  {
    slug: 'kulama-haircare',
    title: 'Kulama HairCare',
    category: 'Web',
    summary: 'Modern marketing site for a wellness brand, built with TypeScript-first React tooling.',
    highlights: ['TypeScript-strict React app', 'Marketing pages with editorial layout'],
    stack: ['React', 'TypeScript', 'Vite'],
    language: 'TypeScript',
    stars: 1,
    repo: 'https://github.com/kassvl/KulamaHairCare',
  },
  {
    slug: 'tsp-project',
    title: 'TSP Optimisation',
    category: 'Platform',
    summary: 'Travelling Salesman Problem experiments — heuristics, metaheuristics and benchmarking harness.',
    highlights: ['Multiple algorithm baselines', 'Reproducible benchmarking'],
    stack: ['Python', 'NumPy'],
    language: 'Python',
    stars: 1,
    repo: 'https://github.com/kassvl/TSP-Project',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
