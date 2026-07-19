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
  screenshot?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'meshmedic',
    title: 'MeshMedic',
    category: 'Service Mesh',
    summary:
      'Deterministic first responder for Istio incidents — watches the mesh’s Prometheus telemetry, matches a reviewed failure catalog, and answers with an evidence-backed GitOps pull request. Zero LLM, zero cluster mutation.',
    highlights: [
      '19-scenario failure catalog — every entry live-verified on a kind + Istio Ambient testbed',
      'Detects ambient L4 mTLS denials from ztunnel telemetry — failures that never reach request metrics',
      'Fix lands as a PR with labeled PromQL evidence, config reads and a rollback plan; Argo CD syncs the merge',
      'Learned per-service baselines (EWMA) + anomaly recorder for failures outside the catalog',
      'Closes the loop: resolution report + MTTR once the incident recovers',
    ],
    stack: ['Go', 'Prometheus / PromQL', 'Istio Ambient', 'Argo CD', 'GitOps', 'kind'],
    language: 'Go',
    stars: 1,
    repo: 'https://github.com/kassvl/meshmedic',
    screenshot:
      'https://raw.githubusercontent.com/kassvl/meshmedic/main/demo/video/meshmedic-demo.gif',
    featured: true,
  },
  {
    slug: 'mesh-incidents-bench',
    title: 'mesh-incidents-bench',
    category: 'Service Mesh',
    summary:
      'Reproducible service-mesh failure scenarios with documented ground truth — a benchmark for how diagnostic and remediation tools handle mesh-layer incidents, run against a live kind + Istio Ambient testbed.',
    highlights: [
      '11 scenarios — each a real injected fault with inject / check / reset scripts and a scoring rubric',
      'Scores false-positive discipline (noise-only) and absence-of-telemetry outages, not just loud failures',
      'Measures investigation footprint: wall time and cluster objects a tool creates while diagnosing',
      'Honest by design: misses are published, author bias is disclosed, istioctl analyze comparison included',
    ],
    stack: ['Bash', 'kind', 'Istio Ambient', 'Prometheus', 'Gateway API'],
    language: 'Shell',
    stars: 1,
    repo: 'https://github.com/kassvl/mesh-incidents-bench',
    featured: true,
  },
  {
    slug: 'istio-ambient-aiops-thesis',
    title: 'Istio Ambient vs Sidecar — AIOps Thesis',
    category: 'Service Mesh',
    summary:
      'Engineering thesis measuring whether Istio Ambient’s sidecar-less architecture plus an AIOps closed-loop controller beats the Envoy-sidecar pattern on resource cost and reliability under identical load.',
    highlights: [
      'Quantifies the "sidecar tax": memory, CPU and P99 latency overhead per pod under identical load profiles',
      'Autonomous AIOps feedback loop targeting sub-30s self-healing MTTR',
      'Ambient (ztunnel + waypoint) vs sidecar compared on the same workloads and SLOs',
    ],
    stack: ['Istio Ambient', 'Kubernetes 1.30', 'Python 3.11', 'Flask', 'Prometheus'],
    language: 'Python',
    stars: 0,
    repo: 'https://github.com/kassvl/istio-ambient-aiops-thesis',
    featured: true,
  },
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
    screenshot:
      'https://raw.githubusercontent.com/kassvl/biometric-payment-infrastructure/main/docs/screenshots/grafana-cluster-dashboard.png',
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
    screenshot:
      'https://raw.githubusercontent.com/kassvl/multi-cluster-istio-mesh/main/docs/screenshots/kiali-graph.png',
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
