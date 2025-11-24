import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconBrandTwitter,
  IconBrandYoutube,
  IconDownload,
  IconMail,
  IconCalendar,
  IconMoon,
  IconSun,
  IconExternalLink,
  IconPhone,
  IconMapPin,
  IconBuildingSkyscraper,
  IconAward,
  IconCertificate,
  IconArrowRight,
} from '@tabler/icons-react'
import type { ComponentProps, ComponentType } from 'react'

type IconName =
  | 'linkedin'
  | 'github'
  | 'medium'
  | 'twitter'
  | 'youtube'
  | 'download'
  | 'mail'
  | 'calendar'
  | 'moon'
  | 'sun'
  | 'external'
  | 'phone'
  | 'location'
  | 'company'
  | 'award'
  | 'certificate'
  | 'arrow-right'

const iconMap: Record<IconName, ComponentType<ComponentProps<typeof IconSun>>> = {
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
  medium: IconBrandMedium,
  twitter: IconBrandTwitter,
  youtube: IconBrandYoutube,
  download: IconDownload,
  mail: IconMail,
  calendar: IconCalendar,
  moon: IconMoon,
  sun: IconSun,
  external: IconExternalLink,
  phone: IconPhone,
  location: IconMapPin,
  company: IconBuildingSkyscraper,
  award: IconAward,
  certificate: IconCertificate,
  'arrow-right': IconArrowRight,
}

type IconProps = {
  name: IconName
  size?: number
  className?: string
  stroke?: number
}

export const Icon = ({ name, size = 20, className, stroke = 1.5 }: IconProps) => {
  const Component = iconMap[name]
  if (!Component) {
    return null
  }

  return <Component size={size} stroke={stroke} className={className} />
}


