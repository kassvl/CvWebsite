import type { Insight } from '../types/content'

export const insights: Insight[] = [
  {
    id: 'progressive-delivery',
    title: 'Progressive Delivery ile Platform Ekiplerinin Risk Yönetimi',
    type: 'article',
    date: 'Ocak 2025',
    summary:
      'Feature flag, canary ve otomatik geri dönüş mekanizmalarını tek bir orkestrasyon katmanında birleştirerek yayın riskini %60 azalttığımız yaklaşımı anlattım.',
    url: 'https://medium.com/@kadirhanmemis/progressive-delivery-platform',
    source: 'Medium',
  },
  {
    id: 'graph-ml-detection',
    title: 'Graph ML ile Finansal Dolandırıcılıkta Jitter Analizi',
    type: 'talk',
    date: 'Kasım 2024',
    summary:
      'İstanbul Data Summit sahnesinde, streaming tabanlı graph özellik mühendisliği ile sahtekârlık tespitini nasıl %92 doğruluğa taşıdığımızı paylaştım.',
    url: 'https://slides.com/kadirhanmemis/graph-ml-detection',
    source: 'Istanbul Data Summit',
  },
  {
    id: 'azure-hardening',
    title: 'Azure’da Çok Kiracılı Platform Sertleştirme Rehberi',
    type: 'article',
    date: 'Eylül 2024',
    summary:
      'Azure Landing Zone ve Defender entegrasyonlarını IaC pipeline’larına nasıl gömerek denetim sürelerini yarıya indirdiğimizi adım adım anlattım.',
    url: 'https://github.com/kadirhanmemis/azure-hardening-guide',
    source: 'GitHub',
  },
  {
    id: 'incident-lab',
    title: 'Olay Müdahale Tatbikatlarında Oyunlaştırma',
    type: 'podcast',
    date: 'Temmuz 2024',
    summary:
      'IncidentLab podcast’inde, SRE ekipleriyle yürüttüğüm kaos oyunlaştırma programının kültürel etkilerini ve ölçüm metodolojisini konuştuk.',
    url: 'https://open.spotify.com/show/incident-lab',
    source: 'IncidentLab Podcast',
  },
]


