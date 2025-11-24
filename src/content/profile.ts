import type { Profile } from '../types/content'

export const profile: Profile = {
  name: 'Kadirhan Emre Memiş',
  title: 'Full Stack Yazılım Geliştiricisi · Sistem Tasarımcısı',
  tagline: 'Mikro servis mimarileri ve veri odaklı ürünlerle ekiplerinizi ölçeklendiririm.',
  summary:
    'Sekiz yılı aşkın süredir finans, SaaS ve lojistik sektörlerinde yüksek etkileşimli ürünler geliştiriyorum. Domain-driven design, olay güdümlü mimariler ve veri odaklı karar desteği ile ürün ekiplerini hızlandırmayı önceliklendiriyorum.',
  location: 'Ankara, Türkiye',
  availability: 'Hibrit · Uzaktan',
  education: 'ODTÜ Bilgisayar Mühendisliği, 2020',
  languages: ['Türkçe (Ana dil)', 'İngilizce (C1)'],
  interests: ['Tasarım odaklı düşünme', 'Hackathon mentörlüğü', 'Doğa fotoğrafçılığı'],
  email: 'hello@kadirhan.dev',
  phone: '+90 532 123 45 67',
  avatar: '/profile-photo.png',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kadirhan-emre/', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://github.com/kassvl', icon: 'github' },
    { label: 'Medium', url:"https://medium.com/@melture33", icon: 'medium' },
    // Removed Twitter and YouTube per request
  ],
  highlights: [
    {
      title: 'SaaS & fintech uzmanlığı',
      description: 'Çok kiracılı SaaS platformları ve ödeme çözümlerinde yüksek erişilebilirlikli ürünler inşa ettim.',
    },
    {
      title: 'Bulut yerlileştirme',
      description: 'AWS ve GCP üzerinde maliyet optimizasyonu ve bölgesel uyumluluk stratejileri geliştirdim.',
    },
    {
      title: 'AI destekli otomasyon',
      description: 'Veri iş akışlarını makine öğrenmesi ile güçlendirerek operasyonel verimlilikte %40 artış sağladım.',
    },
  ],
  stats: [
    { label: 'yıl deneyim', value: '08+' },
    { label: 'tamamlanan proje', value: '25+' },
    { label: 'ödül', value: '5' },
    { label: 'patent başvurusu', value: '3' },
  ],
}


