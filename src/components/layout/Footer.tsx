import { Container } from './Container'
import { profile } from '../../content/profile'
import { Icon } from '../ui/Icon'

export const Footer = () => (
  <footer className="border-t border-white/10 bg-[#050812]/80 py-12 text-white backdrop-blur-lg">
    <Container className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-white">
          KEM
          <span className="text-xs uppercase tracking-[0.2em] text-white/60">Portfolio</span>
        </div>
        <p className="max-w-md text-sm text-white/70">
          {profile.summary}
        </p>
        <div className="flex flex-wrap gap-3">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/65 transition-colors hover:border-white/35 hover:text-white"
            >
              {social.icon ? <Icon name={social.icon as never} size={18} /> : null}
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Navigasyon</h3>
        <ul className="grid gap-2 text-sm text-white/70">
          <li>
            <a href="#about" className="transition-colors hover:text-white">
              Hakkımda
            </a>
          </li>
          <li>
            <a href="#experience" className="transition-colors hover:text-white">
              Deneyim
            </a>
          </li>
          <li>
            <a href="#projects" className="transition-colors hover:text-white">
              Projeler
            </a>
          </li>
          <li>
            <a href="#skills" className="transition-colors hover:text-white">
              Yetkinlikler
            </a>
          </li>
          <li>
            <a href="#contact" className="transition-colors hover:text-white">
              İletişim
            </a>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">İletişim</h3>
        <div className="space-y-2 text-sm text-white/70">
          <div className="flex items-center gap-3">
            <Icon name="mail" size={18} className="text-brand-accent" />
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-white">
              {profile.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="phone" size={18} className="text-brand-accent" />
            <a href={`tel:${profile.phone.replace(/\\s+/g, '')}`} className="transition-colors hover:text-white">
              {profile.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="location" size={18} className="text-brand-accent" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </Container>
    <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs uppercase tracking-[0.28em] text-white/50">
      © {new Date().getFullYear()} Kadirhan Emre Memiş · Tüm hakları saklıdır.
    </div>
  </footer>
)


