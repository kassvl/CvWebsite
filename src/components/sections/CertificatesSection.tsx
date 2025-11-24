import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { certificates } from '../../content/certificates'
import { motion } from 'framer-motion'
import { Icon } from '../ui/Icon'

export const CertificatesSection = () => (
  <section id="certificates" className="relative py-24 sm:py-28 md:py-32">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,51,102,0.18),transparent_60%)]" />
    <Container className="relative">
      <SectionHeading eyebrow="Sertifikalar" description="Bulut, mimari ve çevik metodoloji odaklı yetkinlikler.">
        Sürekli öğrenme ve uzmanlık belgeleri
      </SectionHeading>
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {certificates.map((certificate, index) => (
          <motion.article
            key={certificate.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-between rounded-[32px] border border-white/10 bg-white/5 p-8 text-white/80 shadow-[0_28px_70px_rgba(6,10,24,0.42)] backdrop-blur-2xl"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                <Icon name="certificate" size={16} className="text-brand-accent" />
                Sertifika
              </div>
              <h3 className="text-xl font-semibold text-white">{certificate.title}</h3>
              <p className="text-sm text-white/60">
                {certificate.issuer} · {certificate.issueDate}
              </p>
              {certificate.description ? <p className="text-sm text-white/75">{certificate.description}</p> : null}
            </div>
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition-colors hover:text-white"
            >
              Doğrulama bağlantısı
              <Icon name="external" size={18} className="text-brand-accent" />
            </a>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
)


