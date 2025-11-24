import type { Competency } from '../types/content'

export const competencies: Competency[] = [
  {
    id: 'platform-engineering',
    title: 'Platform Engineering',
    headline: 'Dağıtık sistemleri operasyonel güvenceyle ölçeklerim.',
    description:
      'Mikro servis mimarilerini olay güdümlü altyapıyla hizalayarak ekiplerin yayın hızını artırırken güvenilirlikten ödün vermem.',
    capabilities: [
      'Çok kiracılı SaaS ve domain-driven design stratejileri',
      'Kubernetes + service mesh ile self-service platformlar',
      'IaC, progressive delivery ve gözlemlenebilirlik otomasyonu',
    ],
    tools: ['AWS', 'GCP', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Argo Rollouts'],
  },
  {
    id: 'data-intelligence',
    title: 'Data & Intelligence',
    headline: 'Veri akışlarını karar destek sistemlerine dönüştürürüm.',
    description:
      'Gerçek zamanlı veri işleme, özelleştirilmiş feature store ve ML operasyonlarıyla ürün ekiplerinin karar hızını yükseltirim.',
    capabilities: [
      'Event streaming ve stream-first ETL/ELT tasarımları',
      'Feature engineering ve model tetikleme pipeline’ları',
      'Graf & zaman serisi analitiği ile anormallik tespiti',
    ],
    tools: ['Kafka', 'BigQuery', 'dbt', 'Airflow', 'TensorFlow', 'Neo4j'],
  },
  {
    id: 'security-resilience',
    title: 'Security & Resilience',
    headline: 'Üretim ortamlarını tehdit odaklı olarak sertleştiririm.',
    description:
      'Red/blue team deneyiminden beslenen güvenlik katmanlarını SRE prensipleriyle birleştirerek proaktif savunma oluştururum.',
    capabilities: [
      'Zero trust ve politika otomasyonu',
      'Tehdit simülasyonu, detection engineering ve runbook’lar',
      'SLA/SLO ile entegre edilmiş kaos ve tatbikat programları',
    ],
    tools: ['Azure Defender', 'Falco', 'Osquery', 'Elastic Stack', 'Grafana', 'Snyk'],
  },
]


