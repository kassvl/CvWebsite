export type ProjectCategory = 'Client work' | 'Team product' | 'Open source' | 'Cloud / Infra'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  summary: string
  highlights: string[]
  stack: string[]
  language: string
  /** Public repo URL. Omit for private code and set `privateNote` instead. */
  repo?: string
  /** GitHub stars, shown only for public repos. */
  stars?: number
  /** Live site. */
  demo?: string
  /** Shown instead of the Code button when the repo is private, e.g. "private repo, team of 4". */
  privateNote?: string
  screenshot?: string
  featured?: boolean
}

// Order matters: client work first, then team products, then open source and infra.
// Every claim here must match ~/cv/cv-data.yml (the CV's single source of truth).
export const projects: Project[] = [
  {
    slug: 'kulama-booking',
    title: 'Kulama Booking',
    category: 'Client work',
    summary:
      'Website and booking system for a braiding studio in Wrocław. Guests request a slot and follow it on a private status page; the studio answers from its own admin desk.',
    highlights: [
      'The studio confirms, declines or offers a different time, and the guest accepts the new slot from their page',
      'Start times follow opening hours and service length; single slots can be closed or opened from the admin',
      'Next.js 16 route handlers, Postgres and signed-cookie admin auth, with its own mobile layout',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Postgres', 'Tailwind v4', 'Framer Motion', 'Vercel'],
    language: 'TypeScript',
    repo: 'https://github.com/kassvl/KulamaHairCare',
    stars: 1,
    demo: 'https://braidss.xyz',
    screenshot: '/projects/kulama-booking.jpg',
    featured: true,
  },
  {
    slug: 'loomr',
    title: 'LOOMR',
    category: 'Client work',
    summary:
      'Website for a fashion and textile design studio. A film intro hands off to a showroom you walk through, where garments open a made-to-order configurator.',
    highlights: [
      'Scroll-scrubbed canvas film intro tuned to hold 60 fps',
      'Showroom views with clickable hotspots that open the garment configurator',
      'Configurator recolours real product photos part by part with masks and procedural fabric textures, with live pricing',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Canvas', 'Tailwind v4', 'Vercel'],
    language: 'TypeScript',
    demo: 'https://loomr.net',
    privateNote: 'private repo, built with 1 collaborator',
    screenshot: '/projects/loomr.jpg',
    featured: true,
  },
  {
    slug: 'emlakplus',
    title: 'EmlakPlus',
    category: 'Team product',
    summary:
      'CRM and marketing platform for real-estate agencies: listings, clients, map search and scheduled social posts. Largest contributor in a team of four.',
    highlights: [
      'FastAPI backend with a Next.js and React front end on PostgreSQL, including distance and polygon map search',
      'Scheduled social publishing on Redis and Celery workers; LLM captions with a template fallback',
      'AWS in Terraform; CI gates merges on Checkov, a frontend build and pytest against live PostgreSQL',
    ],
    stack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Celery', 'Terraform', 'AWS'],
    language: 'Python / TS',
    privateNote: 'private repo, team of 4',
    featured: true,
  },
  {
    slug: 'data-stock',
    title: 'data-stock',
    category: 'Team product',
    summary:
      'Inventory SaaS for an import business. Stock is logged by scanning barcodes and listings are synced to online marketplaces.',
    highlights: [
      'REST API in FastAPI with Alembic migrations, JWT auth and an append-only stock ledger',
      'React and Vite admin panel plus an Expo scanning client, all on one API contract',
      'Amazon, Allegro and eBay integrations; CI runs pytest, Vitest and Playwright on every pull request',
    ],
    stack: ['Python', 'FastAPI', 'React', 'Vite', 'Expo', 'PostgreSQL', 'Playwright'],
    language: 'Python / TS',
    privateNote: 'private repo, team of 4',
    featured: true,
  },
  {
    slug: 'vantage',
    title: 'Vantage',
    category: 'Team product',
    summary: 'Instagram analytics app: a React Native client backed by a TypeScript API that I built.',
    highlights: [
      'Instagram Graph API login for paid users; ad-supported free tier built on verified AdMob reward tokens',
      'Multi-stage Docker build on Fly.io; CI tests every pull request and deploys on merge to main',
    ],
    stack: ['TypeScript', 'Node.js', 'React Native', 'Expo', 'Docker', 'Fly.io'],
    language: 'TypeScript',
    privateNote: 'private repo, team of 3',
    featured: true,
  },
  {
    slug: 'meshmedic',
    title: 'MeshMedic',
    category: 'Open source',
    summary:
      'Incident responder for the Istio service mesh, written in Go. It watches Prometheus telemetry, matches a reviewed failure catalog and answers with a pull request that carries the evidence and a rollback plan.',
    highlights: [
      '16 of 18 detections proven by injecting the real fault on a live cluster',
      'Read-only on the cluster: every fix arrives as a pull request that a human reviews',
      'Scored on mesh-incidents-bench, a public set of reproducible failure scenarios I built for it',
    ],
    stack: ['Go', 'Prometheus', 'Istio Ambient', 'Argo CD', 'kind'],
    language: 'Go',
    repo: 'https://github.com/kassvl/meshmedic',
    stars: 1,
    featured: true,
  },
  {
    slug: 'biometric-payment-infrastructure',
    title: 'Biometric Payment Infrastructure',
    category: 'Cloud / Infra',
    summary:
      'Two-region AWS reference architecture for a payment platform, written in Terraform, with security scanners gating every change.',
    highlights: [
      'VPC, EKS, WAF, IRSA and Istio mTLS policies across two AWS regions',
      'Checkov, tfsec and Trivy gate every pull request in CI',
      'Controls mapped to PCI-DSS v4.0 and GDPR',
    ],
    stack: ['Terraform', 'AWS', 'EKS', 'Istio', 'GitHub Actions'],
    language: 'HCL',
    repo: 'https://github.com/kassvl/biometric-payment-infrastructure',
    stars: 2,
    screenshot:
      'https://raw.githubusercontent.com/kassvl/biometric-payment-infrastructure/main/docs/screenshots/grafana-cluster-dashboard.png',
    featured: true,
  },
  {
    slug: 'istio-ambient-aiops-thesis',
    title: 'Engineering thesis: Istio Ambient vs sidecar',
    category: 'Cloud / Infra',
    summary:
      'Compares the sidecar-less Istio Ambient mesh with the classic sidecar pattern on resource cost and reliability, with a closed-loop controller that heals injected faults.',
    highlights: [
      'Measures the memory, CPU and p99 latency cost of sidecars under identical load',
      'Ambient and sidecar compared on the same workloads and SLOs',
    ],
    stack: ['Kubernetes', 'Istio Ambient', 'Python', 'Prometheus', 'Chaos Mesh'],
    language: 'Python',
    repo: 'https://github.com/kassvl/istio-ambient-aiops-thesis',
    stars: 0,
    featured: true,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
