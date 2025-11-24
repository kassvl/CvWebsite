import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { profile } from '../../content/profile'
import { Icon } from '../ui/Icon'

export const AboutSection = () => (
  <section id="about" className="relative py-24 sm:py-28 md:py-32">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,51,102,0.18),transparent_55%)]" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.2),transparent_60%)]" />
    <Container className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr]">
      <div className="space-y-8">
        <SectionHeading eyebrow="Hakkımda" description="Ürün geliştirme vizyonum ve değer odağım.">
          Teknolojiye stratejik bakış açısı
        </SectionHeading>
        <p className="max-w-xl text-lg leading-relaxed text-white/75">{profile.summary}</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/75 shadow-[0_24px_60px_rgba(9,12,26,0.28)] backdrop-blur-xl">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Ana Yetkinlikler</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Çok kiracılı SaaS platform mimarisi</li>
              <li>Olay güdümlü veri akışları</li>
              <li>Ekipler arası teknik liderlik ve mentörlük</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/75 shadow-[0_24px_60px_rgba(9,12,26,0.28)] backdrop-blur-xl">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">İlgi Alanları</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {profile.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-white/75 shadow-[0_28px_64px_rgba(9,12,26,0.32)] backdrop-blur-xl">
          <h3 className="text-xs uppercase tracking-[0.24em] text-brand-accent">Profesyonel yolculuk</h3>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            {profile.name}, yüksek ölçekli ürün ekiplerinde yazılım mimarisini stratejik iş hedefleriyle hizalayarak
            fark yarattı. Domain-driven design ve servis odaklı yaklaşımlarla ekiplerin bağımsız, hızlı ve ölçülebilir
            değer üretmesini destekliyor.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon="location" label="Konum">
            {profile.location}
          </InfoCard>
          <InfoCard icon="calendar" label="Çalışma Modeli">
            {profile.availability}
          </InfoCard>
          <InfoCard icon="company" label="Eğitim">
            {profile.education}
          </InfoCard>
          <InfoCard icon="award" label="Diller">
            {profile.languages.join(' · ')}
          </InfoCard>
        </div>
      </div>
    </Container>
  </section>
)

const InfoCard = ({
  icon,
  label,
  children,
}: {
  icon: Parameters<typeof Icon>[0]['name']
  label: string
  children: React.ReactNode
}) => (
  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80 shadow-[0_24px_60px_rgba(9,12,26,0.28)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1">
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent/20">
        <Icon name={icon as never} className="text-brand-accent" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">{label}</p>
        <p className="text-sm font-medium text-white">{children}</p>
      </div>
    </div>
  </div>
)


