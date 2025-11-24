import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    id: 'helios-insight-platform',
    title: 'Helios Insight Platform',
    category: 'web',
    year: '2024',
    description: 'Fintek ekipleri için çok kiracılı analitik platformu ve karar destek paneli.',
    problem:
      'Farklı veri kaynaklarından gelen ödeme verilerini tek platformda toplayarak gerçek zamanlı içgoriğe dönüştürmek gerekiyordu.',
    solution:
      'Next.js ve GraphQL tabanlı ölçeklenebilir frontend, Hasura + BigQuery entegrasyonları ve role-based access ile güvenli veri paylaşımı sağlandı.',
    impact: 'Müşteri terk oranı %18’den %7’ye düştü, analitik rapor hazırlama süresi 3 saatten 20 dakikaya indi.',
    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'Hasura', 'BigQuery', 'Tailwind CSS'],
    coverImage: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80',
    links: [
      { label: 'Ürünü incele', url: 'https://helios.kadirhan.dev', type: 'live' },
      { label: 'Vaka çalışması', url: 'https://medium.com/@kadirhanmemis/helios', type: 'case-study' },
    ],
    highlights: [
      'Çok kiracılı mimari, ayrı veri katmanı ve erişim yönetimi',
      'Performans optimizasyonu ile Lighthouse puanı 97',
      'Design system ile 18 takımın UI tutarlılığı sağlandı',
    ],
  },
  {
    id: 'pulsepay-fraud-engine',
    title: 'PulsePay Fraud Engine',
    category: 'ai',
    year: '2024',
    description: 'Makine öğrenmesi destekli dolandırıcılık tespit motoru.',
    problem:
      'Gecikmeli ve yüksek yanlış pozitifli dolandırıcılık kontrol mekanizması finansal kayba neden oluyordu.',
    solution:
      'Zaman serisi özellik mühendisliği, graph tabanlı ilişki analizi ve gerçek zamanlı karar motoru ile yeni bir fraud pipeline tasarlandı.',
    impact: 'Şüpheli işlemleri %92 doğrulukla yakalayarak finansal kaybı çeyreklik bazda %37 azalttı.',
    technologies: ['Python', 'FastAPI', 'TensorFlow', 'Neo4j', 'Kafka', 'Redis'],
    coverImage: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80',
    links: [
      { label: 'Teknik doküman', url: 'https://docs.kadirhan.dev/pulsepay', type: 'case-study' },
    ],
    highlights: [
      'Graph ML ile ilişki skorlaması',
      'Gerçek zamanlı feature store ve stream processing',
      'Sahtekârlık analistleri için açıklanabilirlik modülü',
    ],
  },
  {
    id: 'atlas-logistics-tracker',
    title: 'Atlas Logistics Tracker',
    category: 'mobile',
    year: '2023',
    description: 'Gerçek zamanlı lojistik ve saha operasyon takibi sağlayan hibrit çözüm.',
    problem:
      'Çok uluslu lojistik ağında sahadan gelen teslimat verileri parçalı tutuluyor ve müşteri deneyimi düşüyordu.',
    solution:
      'React Native ile platformlar arası uygulama, Mapbox tabanlı harita bileşeni ve Firebase real-time sync ile uçtan uca çözüm.',
    impact: 'Saha raporlama süresi %50 kısaldı, SLA ihlallerinde %22 azalma sağlandı.',
    technologies: ['React Native', 'TypeScript', 'Mapbox', 'Firebase', 'Cloud Functions'],
    coverImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    links: [
      { label: 'Ürünü incele', url: 'https://atlas.kadirhan.dev', type: 'live' },
      { label: 'Kod deposu', url: 'https://github.com/kadirhanmemis/atlas-tracker', type: 'repo' },
    ],
    highlights: [
      'Çevrimdışı veri önbellekleme',
      'Saha ekipleri için rol bazlı yetki yönetimi',
      'Global kullanım için çoklu dil altyapısı',
    ],
  },
  {
    id: 'orbit-hr-automation',
    title: 'Orbit HR Automation',
    category: 'automation',
    year: '2022',
    description: 'İK süreçlerini otomatikleştiren iç araçlar paketi.',
    problem:
      'Çalışan onboarding süreçleri manuel ilerliyor ve ortalama sekiz gün sürüyordu; hatalar artıyordu.',
    solution:
      'Camunda BPM, NestJS ve PostgreSQL ile HR workflow motoru geliştirildi; Angular tabanlı self-service portal sunuldu.',
    impact: 'Onboarding süresi 36 saate düştü, hata oranı %65 azaldı.',
    technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Camunda', 'Azure AD'],
    coverImage: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
    links: [
      { label: 'Kod deposu', url: 'https://github.com/kadirhanmemis/orbit-automation', type: 'repo' },
    ],
    highlights: [
      'Workflow görselleştirme ve izlenebilirlik',
      'Çok adımlı formlar için tasarım sistemi',
      'SSO entegrasyonu ve denetim günlükleri',
    ],
  },
  {
    id: 'novapay-design-system',
    title: 'NovaPay Design System',
    category: 'web',
    year: '2021',
    description: 'Kurumsal ölçekte tasarım sistemi ve bileşen kütüphanesi.',
    problem:
      '18 ürün ekibi farklı UI çözümleriyle ilerliyor, bakım maliyeti artıyor ve marka tutarlılığı bozuluyordu.',
    solution:
      'Figma + Storybook destekli tasarım sistemi geliştirildi; token tabanlı tema yapısı ve erişilebilirlik yönergeleri sağlandı.',
    impact: 'UI geliştirme hızı %45 arttı, QA kaynaklı regresyonlar %32 azaldı.',
    technologies: ['Storybook', 'TypeScript', 'CSS Custom Properties', 'Figma Tokens'],
    coverImage: 'https://images.unsplash.com/photo-1523439838770-8d291777490f?auto=format&fit=crop&w=1600&q=80',
    links: [
      { label: 'Canlı dokümantasyon', url: 'https://design.novapay.com', type: 'live' },
    ],
    highlights: [
      'Tema başına 250+ token yönetimi',
      'Erişilebilirlik test süreci otomasyonu',
      'Monorepo yönetimi ve sürümleme stratejisi',
    ],
  },
]


