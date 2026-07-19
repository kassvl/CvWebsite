import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCheck,
  IconLoader2,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
} from '../ui/Icons'
import { Section } from '../ui/Section'
import { profile } from '../../data/profile'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Enter a valid email.'),
  message: z.string().min(10, 'Tell me a bit more — at least 10 characters.'),
})

type FormValues = z.infer<typeof schema>

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (values: FormValues) => {
    setStatus('submitting')
    // Open user's mail client with prefilled fields — works without backend.
    const subject = encodeURIComponent(`[Portfolio] ${values.name}`)
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} <${values.email}>`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    await new Promise((r) => setTimeout(r, 600))
    reset()
    setStatus('success')
  }

  return (
    <Section
      id="contact"
      index="05"
      eyebrow="contact"
      title={
        <>
          Let's wire something{' '}
          <span className="text-[rgb(var(--rgb-brand-primary))]">together</span>.
        </>
      }
      description="Junior Cloud / DevOps roles, working-student opportunities, OSS collaboration — drop a message or grab a channel below."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <ContactRow
            icon={<IconMail size={16} />}
            label="email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <ContactRow
            icon={<IconPhone size={16} />}
            label="phone"
            value={profile.phone}
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
          />
          <ContactRow
            icon={<IconMapPin size={16} />}
            label="based in"
            value={`${profile.location} · ${profile.region}`}
          />
          <ContactRow
            icon={<IconBrandGithub size={16} />}
            label="github"
            value="github.com/kassvl"
            href={profile.github}
            external
          />
          <ContactRow
            icon={<IconBrandLinkedin size={16} />}
            label="linkedin"
            value="linkedin.com/in/kadirhan-emre"
            href={profile.linkedin}
            external
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="card space-y-4 p-6 md:p-7" noValidate>
          <Field
            label="Your name"
            error={errors.name?.message}
            input={
              <input
                {...register('name')}
                placeholder="Ada Lovelace"
                className="w-full rounded-lg border border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-bg)/0.6)] px-3.5 py-2.5 text-sm text-[rgb(var(--rgb-ink-50))] placeholder:text-[rgb(var(--rgb-ink-600))] focus:border-[rgb(var(--rgb-brand-primary)/0.6)] focus:outline-none"
              />
            }
          />
          <Field
            label="Email"
            error={errors.email?.message}
            input={
              <input
                type="email"
                {...register('email')}
                placeholder="ada@example.com"
                className="w-full rounded-lg border border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-bg)/0.6)] px-3.5 py-2.5 text-sm text-[rgb(var(--rgb-ink-50))] placeholder:text-[rgb(var(--rgb-ink-600))] focus:border-[rgb(var(--rgb-brand-primary)/0.6)] focus:outline-none"
              />
            }
          />
          <Field
            label="Message"
            error={errors.message?.message}
            input={
              <textarea
                {...register('message')}
                rows={5}
                placeholder="What are you building?"
                className="w-full resize-none rounded-lg border border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-bg)/0.6)] px-3.5 py-2.5 text-sm text-[rgb(var(--rgb-ink-50))] placeholder:text-[rgb(var(--rgb-ink-600))] focus:border-[rgb(var(--rgb-brand-primary)/0.6)] focus:outline-none"
              />
            }
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[rgb(var(--rgb-brand-primary))] px-5 py-2.5 text-sm font-semibold text-[rgb(var(--rgb-bg))] transition-transform hover:-translate-y-0.5 disabled:opacity-70"
          >
            {status === 'submitting' ? (
              <>
                <IconLoader2 size={16} className="animate-spin" /> Opening mail…
              </>
            ) : status === 'success' ? (
              <>
                <IconCheck size={16} /> Sent — check your mail client
              </>
            ) : (
              <>
                <IconSend size={16} /> Send message
              </>
            )}
          </button>
          <p className="text-xs text-[rgb(var(--rgb-ink-400))]">
            This form opens your mail client pre-filled — zero backend, zero tracking.
          </p>
        </form>
      </div>
    </Section>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  external?: boolean
}) {
  const content = (
    <div className="card flex items-center gap-4 p-4 transition-colors">
      <span className="grid h-9 w-9 place-items-center rounded-lg border border-[rgb(var(--rgb-brand-primary)/0.3)] bg-[rgb(var(--rgb-brand-primary)/0.08)] text-[rgb(var(--rgb-brand-primary))]">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="kbd">{label}</p>
        <p className="mt-0.5 truncate font-mono text-sm text-[rgb(var(--rgb-ink-50))]">{value}</p>
      </div>
    </div>
  )
  if (!href) return content
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block"
    >
      {content}
    </a>
  )
}

function Field({
  label,
  input,
  error,
}: {
  label: string
  input: React.ReactNode
  error?: string
}) {
  return (
    <label className="block">
      <span className="kbd">{label}</span>
      <div className="mt-1.5">{input}</div>
      {error && (
        <p className="mt-1.5 text-xs text-[rgb(var(--rgb-brand-danger))]">{error}</p>
      )}
    </label>
  )
}
