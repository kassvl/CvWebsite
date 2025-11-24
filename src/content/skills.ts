import type { SkillCategory } from '../types/content'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programlama Dilleri',
    items: [
      { name: 'TypeScript', level: 'critical', description: 'Frontend ve backend projelerinde ana dil' },
      { name: 'Java', level: 'advanced', description: 'Kurumsal ölçekli mikro servisler' },
      { name: 'Python', level: 'advanced', description: 'Veri iş akışları ve ML servisleri' },
      { name: 'Go', level: 'intermediate', description: 'Yüksek performanslı servis modülleri' },
      { name: 'SQL', level: 'critical', description: 'Analitik sorgular, optimizasyon ve veri modeli' },
    ],
  },
  {
    title: 'Framework & Kütüphaneler',
    items: [
      { name: 'React · Next.js', level: 'critical', description: 'Tasarımdan üretime uçtan uca UI geliştirme' },
      { name: 'Node.js · Express', level: 'critical', description: 'API orkestrasyonu, event-driven servisler' },
      { name: 'Spring Boot', level: 'advanced', description: 'Fintek ve regülasyon uyumlu backend' },
      { name: 'FastAPI', level: 'advanced', description: 'ML servisleri, async data pipeline uçları' },
      { name: 'LangChain', level: 'intermediate', description: 'LLM tabanlı üretkenlik otomasyonları' },
    ],
  },
  {
    title: 'Bulut & DevOps',
    items: [
      { name: 'AWS', level: 'critical', description: 'ECS, Lambda, RDS, CloudFormation' },
      { name: 'Google Cloud', level: 'advanced', description: 'BigQuery, Composer, Vertex AI' },
      { name: 'Docker · Kubernetes', level: 'critical', description: 'Kapsayıcı orkestrasyonu ve operasyon' },
      { name: 'Terraform', level: 'advanced', description: 'IaC ve ortam standardizasyonu' },
      { name: 'GitHub Actions', level: 'advanced', description: 'CI/CD, kalite kapıları ve aç-kapa dağıtım' },
    ],
  },
  {
    title: 'Veri & AI',
    items: [
      { name: 'Kafka · Pulsar', level: 'advanced', description: 'Gerçek zamanlı olay güdümlü toplama' },
      { name: 'Airflow · dbt', level: 'intermediate', description: 'Orkestrasyon ve veri modeli' },
      { name: 'TensorFlow · PyTorch', level: 'intermediate', description: 'Fraud ve öneri sistemi prototipleri' },
      { name: 'Neo4j', level: 'intermediate', description: 'İlişkisel veri analizi ve graph ML' },
    ],
  },
  {
    title: 'Çalışma Prensipleri',
    items: [
      { name: 'Domain-Driven Design', level: 'critical', description: 'Bağımsız ekipler için stratejik tasarım' },
      { name: 'Event Storming', level: 'advanced', description: 'Şeffaf iş süreci modelleme' },
      { name: 'TDD & BDD', level: 'advanced', description: 'Risk azaltan yazılım geliştirme' },
      { name: 'OKR Yönetimi', level: 'advanced', description: 'Hedef odaklı ürün geliştirme' },
      { name: 'SRE Prensipleri', level: 'intermediate', description: 'Gözlemlenebilirlik ve güvenilirlik' },
    ],
  },
]


