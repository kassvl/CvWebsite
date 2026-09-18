export interface SkillGroup {
  title: string
  caption: string
  items: string[]
}

// Only tools used in a real project or job. Mirrors the skills lines in ~/cv/cv-data.yml.
export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    caption: 'What people click.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    title: 'Backend & APIs',
    caption: 'Where the rules live.',
    items: ['Python', 'FastAPI', 'Node.js', 'NestJS', 'Express', 'REST', 'JWT / OAuth'],
  },
  {
    title: 'Data',
    caption: 'State that has to be right.',
    items: ['PostgreSQL', 'SQL', 'Redis', 'SQLAlchemy', 'Alembic', 'Celery'],
  },
  {
    title: 'Testing',
    caption: 'Proof before merge.',
    items: ['pytest', 'Vitest', 'Playwright', 'Jest'],
  },
  {
    title: 'Shipping',
    caption: 'How code reaches users.',
    items: ['Docker', 'GitHub Actions', 'Vercel', 'Fly.io', 'Linux', 'Git'],
  },
  {
    title: 'Cloud & Infra',
    caption: 'The layer under the app.',
    items: ['AWS', 'Terraform', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'Istio'],
  },
  {
    title: 'Mobile',
    caption: 'When the web is not enough.',
    items: ['React Native', 'Expo', 'Flutter', 'SwiftUI'],
  },
  {
    title: 'AI in products',
    caption: 'Models behind a fallback.',
    items: ['OpenAI', 'Claude', 'Gemini', 'Mistral', 'Structured JSON output'],
  },
]
