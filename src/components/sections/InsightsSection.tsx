import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { insights } from '../../content/insights'
import { Icon } from '../ui/Icon'
import { motion } from 'framer-motion'

const badgeMap: Record<
  string,
  { label: string; icon: Parameters<typeof Icon>[0]['name']; tone: string }
> = {
  article: { label: 'Makale', icon: 'external', tone: 'bg-brand-accent/15 text-brand-accent' },
  talk: { label: 'Konuşma', icon: 'award', tone: 'bg-emerald-400/15 text-emerald-200' },
  podcast: { label: 'Podcast', icon: 'calendar', tone: 'bg-sky-400/15 text-sky-200' },
  resource: { label: 'Kaynak', icon: 'external', tone: 'bg-white/15 text-white/80' },
}

export const InsightsSection = () => (
  <section id="insights" className="relative py-24 sm:py-28 md:py-32">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,51,102,0.12),transparent_60%)]" />
    <Container className="relative">
      <SectionHeading eyebrow="İçgörüler" description="Paylaşımlar, konuşmalar ve kayda değer çıktılar.">
        Bilgiyi paylaşmayı bir mühendislik pratiği görüyorum
      </SectionHeading>
      <div className="mt-12 space-y-6">
        {insights.map((insight, index) => {
          const badge = badgeMap[insight.type] ?? badgeMap.article
          return (
            <motion.a
              key={insight.id}
              href={insight.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group block rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white/75 shadow-[0_20px_60px_rgba(4,6,18,0.4)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${badge.tone}`}>
                    <Icon name={badge.icon} size={16} />
                    {badge.label}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">{insight.date}</span>
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-white/40">{insight.source}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white transition-colors group-hover:text-brand-accent">
                {insight.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{insight.summary}</p>
            </motion.a>
          )
        })}
      </div>
    </Container>
  </section>
)


