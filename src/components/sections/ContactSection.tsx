import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { profile } from '../../content/profile'
import { clsx } from 'clsx'

const contactSchema = z.object({
  name: z.string().min(2, 'Lütfen adınızı girin.'),
  email: z.string().email('Geçerli bir e-posta adresi girin.'),
  organization: z.string().optional(),
  message: z.string().min(10, 'Mesajınız en az 10 karakter olmalı.'),
})

type ContactFormValues = z.infer<typeof contactSchema>

export const ContactSection = () => {
  const form = useForm<ContactFormValues>({
    mode: 'onBlur',
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      organization: '',
      message: '',
    },
  })

  const contactChannels = useMemo(
    () => [
      { icon: 'mail', label: 'E-posta', value: profile.email, url: `mailto:${profile.email}` },
      { icon: 'phone', label: 'Telefon', value: profile.phone, url: `tel:${profile.phone.replace(/\\s+/g, '')}` },
      { icon: 'location', label: 'Konum', value: profile.location },
      { icon: 'calendar', label: 'Toplantı planla', value: 'Calendly', url: 'https://calendly.com/kadirhan' },
    ],
    [],
  )

  const onSubmit = (values: ContactFormValues) => {
    const params = new URLSearchParams({
      subject: `Portfolio iletişim - ${values.name}`,
      body: `Merhaba Kadirhan,\n\n${values.message}\n\nİsim: ${values.name}\nE-posta: ${values.email}\nOrganizasyon: ${
        values.organization ?? '-'
      }\n`,
    })
    window.open(`mailto:${profile.email}?${params.toString()}`, '_blank')
    form.reset()
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,51,102,0.12),transparent_60%)]" />
      <Container className="relative grid gap-16 lg:grid-cols-[minmax(280px,360px)_1fr]">
        <div className="marquee overflow-hidden border-b border-white/10 pb-3 text-xs uppercase tracking-[0.35em] text-white/50 lg:col-span-2">
          <div className="marquee__inner flex gap-10">
            {Array.from({ length: 6 }).map((_, idx) => (
              <span key={idx}>let&apos;s build resilient systems together ▸</span>
            ))}
          </div>
        </div>
        <div className="space-y-10">
          <SectionHeading eyebrow="Contact" description="Yeni projeler, danışmanlık veya topluluk girişimleri için bana ulaşın.">
            Birlikte çalışalım
          </SectionHeading>
          <p className="text-sm text-white/70">
            Teknik stratejinizi hızlandıracak, mikro servis geçişini kolaylaştıracak veya veri platformunuzu yeniden
            kurgulayacak bir ortağa ihtiyacınız varsa tanışalım. Kısa bir e-posta yeterli.
          </p>
          <ul className="space-y-4 text-sm text-white/75">
            {contactChannels.map((channel) => (
              <li key={channel.label} className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-white/45">{channel.label}</span>
                {channel.url ? (
                  <a
                    href={channel.url}
                    target={channel.url.startsWith('http') ? '_blank' : undefined}
                    rel={channel.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 border-b border-white/20 pb-1 text-white transition-colors hover:text-brand-accent"
                  >
                    {channel.value}
                    <Icon name="external" size={14} />
                  </a>
                ) : (
                  <span className="border-b border-white/20 pb-1 text-white">{channel.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-white/80">
          <div className="flex flex-wrap gap-6">
            <InputField
              label="Adınız Soyadınız"
              placeholder="Adınızı girin"
              error={form.formState.errors.name?.message}
              wrapperClassName="min-w-[220px] flex-1"
              {...form.register('name')}
            />
            <InputField
              label="E-posta"
              placeholder="E-posta adresiniz"
              type="email"
              error={form.formState.errors.email?.message}
              wrapperClassName="min-w-[220px] flex-1"
              {...form.register('email')}
            />
            <InputField
              label="Şirket / Organizasyon"
              placeholder="Opsiyonel"
              error={form.formState.errors.organization?.message}
              wrapperClassName="min-w-[220px] flex-1"
              {...form.register('organization')}
            />
          </div>
          <TextAreaField
            label="Mesajınız"
            placeholder="Planladığınız proje veya ihtiyacınızı anlatın."
            rows={6}
            error={form.formState.errors.message?.message}
            {...form.register('message')}
          />
          <Button
            type="submit"
            icon={<Icon name="mail" size={18} />}
            iconPosition="right"
            variant="ghost"
            className="w-full justify-center border border-white/25 bg-transparent text-white hover:bg-white hover:text-ink-900"
          >
            Mesajı gönder
          </Button>
        </form>
      </Container>
    </section>
  )
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; wrapperClassName?: string }

const InputField = ({ label, error, wrapperClassName, ...props }: InputProps) => (
  <label className={clsx('flex flex-col gap-2 text-sm text-white/60', wrapperClassName)}>
    <span className="text-xs uppercase tracking-[0.2em] text-white/45">{label}</span>
    <input
      {...props}
      className="border-b border-white/25 bg-transparent pb-2 text-sm text-white transition-colors focus:border-brand-accent focus:outline-none"
    />
    {error ? <span className="text-xs text-red-500">{error}</span> : null}
  </label>
)

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string }

const TextAreaField = ({ label, error, ...props }: TextAreaProps) => (
  <label className="flex flex-col gap-2 text-sm text-white/60 min-w-[min(100%,360px)] grow">
    <span className="text-xs uppercase tracking-[0.2em] text-white/45">{label}</span>
    <textarea
      {...props}
      className="min-h-[180px] border border-white/20 bg-transparent px-4 py-3 text-sm text-white transition-colors focus:border-brand-accent focus:outline-none"
    />
    {error ? <span className="text-xs text-red-500">{error}</span> : null}
  </label>
)


