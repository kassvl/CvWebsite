export const profile = {
  name: 'Kadirhan Emre Memiş',
  shortName: 'Kadirhan',
  monogram: 'KEM',
  role: 'Cloud & DevOps Engineer',
  tagline:
    'I build production-shaped AWS platforms — Terraform IaC, EKS + Istio Ambient, and DevSecOps CI gates — with EU compliance baked in (PCI-DSS, GDPR, EU DORA).',
  location: 'Wrocław, Poland',
  region: 'EU · UTC+1',
  status: 'Open to Cloud / DevOps / DevSecOps internships & working-student roles',
  email: 'kadirhanemre@proton.me',
  phone: '+48 572 412 433',
  github: 'https://github.com/kassvl',
  linkedin: 'https://linkedin.com/in/kadirhan-emre',
  website: 'https://kadirhanemrememis.xyz',
  avatar: 'https://avatars.githubusercontent.com/u/195515554?v=4',
  resumeUrl: '#contact',
  // Portfolio status (hero floating card) — real, dürüst metrikler
  systemStatus: {
    region: 'wrocław · eu',
    role: 'EPAM Cloud & DevOps Trainee',
    status: 'open to internships',
    incidents: 0,
  },
} as const

export type Profile = typeof profile
