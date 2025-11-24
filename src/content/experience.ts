import type { ExperienceEntry } from '../types/content'

export const experiences: ExperienceEntry[] = [
  {
    id: 'skymatrix-analytics',
    company: 'SkyMatrix Analytics',
    companyUrl: 'https://www.skymatrix.dev',
    location: 'Ankara, Türkiye',
    role: 'Lead Software Engineer',
    start: 'Ocak 2022',
    end: 'Güncel',
    description:
      'Çok kiracılı veri platformunun uçtan uca mimarisini yöneterek ürün stratejisini teknik yol haritasına dönüştürdüm.',
    achievements: [
      'Gerçek zamanlı stream mimarisi ile aylık 50K müşteride gecikmeyi %35 azalttım.',
      'Domain-driven design yaklaşımıyla ekipler arası kod standartlarını ve context boundary’lerini netleştirdim.',
      'Feature flag ve progressive delivery pipeline’ı kurarak canlıya çıkış sürelerini %45 kısalttım.',
    ],
    technologies: ['Node.js', 'TypeScript', 'Kubernetes', 'Kafka', 'PostgreSQL', 'GraphQL'],
    recognition: ['2024 – Yılın Yenilikçi Ürünü Ödülü'],
  },
  {
    id: 'novapay-fintech',
    company: 'NovaPay Fintech',
    companyUrl: 'https://www.novapay.com.tr',
    location: 'İstanbul, Türkiye',
    role: 'Senior Full Stack Developer',
    start: 'Temmuz 2019',
    end: 'Aralık 2021',
    description:
      'Ödeme platformu yeniden yazımı ve PCI-DSS uyumluluğu kapsamında mikro servis dönüşümünü liderlik ettim.',
    achievements: [
      'Müşteri kimlik doğrulama sürecini orkestrasyon ile yeniden tasarlayıp sahtekârlık oranını %28 azalttım.',
      'Event-driven mimari ile settlement süreçlerini otomatikleştirerek operasyon yükünü %60 hafifleştirdim.',
      'Observability yığını (OpenTelemetry + Grafana) kurarak MTTR’ı 2 saatten 25 dakikaya indirdim.',
    ],
    technologies: ['Java', 'Spring Boot', 'AWS', 'Terraform', 'Redis', 'React'],
    recognition: ['2021 – En İyi Mentör Programı Ödülü'],
  },
  {
    id: 'codecraft-labs',
    company: 'CodeCraft Labs',
    companyUrl: 'https://www.codecraftlabs.com',
    location: 'Ankara, Türkiye',
    role: 'Yazılım Mühendisi',
    start: 'Eylül 2016',
    end: 'Haziran 2019',
    description:
      'Lojistik, telekom ve sigorta sektörlerine yönelik yüksek trafik alan web ve mobil çözümler geliştirdim.',
    achievements: [
      'Gerçek zamanlı lojistik takip çözümü ile 17 ülkede filo yönetimini dijitalleştirdim.',
      'React Native tabanlı mobil uygulama ile saha ekiplerinin raporlama süresini %50 kısalttım.',
      'CI/CD akışlarını kurarak sürümleme hatalarını %70 azalttım.',
    ],
    technologies: ['Python', 'Django', 'React Native', 'Docker', 'PostgreSQL', 'Airflow'],
  },
]


