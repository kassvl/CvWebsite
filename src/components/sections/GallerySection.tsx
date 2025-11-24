import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { galleryItems } from '../../content/gallery'
import { clsx } from 'clsx'

const categories = [
  { label: 'Tümü', value: 'all' },
  { label: 'Konferans', value: 'conference' },
  { label: 'Hackathon', value: 'hackathon' },
  { label: 'Atölye', value: 'workshop' },
  { label: 'Ödüller', value: 'award' },
  { label: 'Doğa', value: 'nature' },
] as const

type CategoryValue = (typeof categories)[number]['value']

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryValue>('all')
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null)

  const filteredItems =
    activeCategory === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const selectedItem = selectedImageId ? galleryItems.find((item) => item.id === selectedImageId) ?? null : null

  return (
    <section id="gallery" className="relative py-24 sm:py-28 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_65%)]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Galeri"
          description="Konuşmalar, ekip anları ve kişisel ilgi alanlarına dair seçkiler."
        >
          Fotoğraf ve anılar
        </SectionHeading>
        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              className={clsx(
                'rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-[0.14em] transition-all',
                category.value === activeCategory
                  ? 'border-white/20 bg-white/10 text-white shadow-[0_20px_48px_rgba(6,10,24,0.4)]'
                  : 'border-white/10 text-white/60 hover:border-white/20 hover:text-white',
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="mb-6 break-inside-avoid overflow-hidden rounded-[28px] border border-white/10 bg-white/5 text-white/80 shadow-[0_24px_60px_rgba(4,6,18,0.4)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1"
            >
              <button
                type="button"
                className="w-full overflow-hidden"
                onClick={() => setSelectedImageId(item.id)}
                aria-label={`${item.title} görselini büyüt`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                  loading="lazy"
                />
              </button>
              <div className="space-y-2 p-5 text-sm text-white/75">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                {item.description ? <p>{item.description}</p> : null}
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/50">
                  <span>{item.location}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Lightbox item={selectedItem} onClose={() => setSelectedImageId(null)} />
    </section>
  )
}

const Lightbox = ({
  item,
  onClose,
}: {
  item: (typeof galleryItems)[number] | null
  onClose: () => void
}) => (
  <AnimatePresence>
    {item ? (
      <>
        <motion.div
          className="fixed inset-0 z-[99] bg-ink-900/80 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.div
          className="fixed inset-x-4 top-1/2 z-[100] w-auto -translate-y-1/2 rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-[0_32px_80px_rgba(14,23,38,0.4)] backdrop-blur-2xl md:inset-x-auto md:left-1/2 md:w-[720px] md:-translate-x-1/2"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
        >
          <div className="overflow-hidden rounded-3xl">
            <img src={item.image} alt={item.alt} className="h-auto w-full object-cover" />
          </div>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {item.description ? <p className="text-white/80">{item.description}</p> : null}
            <div className="text-xs uppercase tracking-[0.2em] text-white/60">
              {item.location} · {item.date}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white/50 hover:text-brand-accent"
          >
            ✕
          </button>
        </motion.div>
      </>
    ) : null}
  </AnimatePresence>
)


