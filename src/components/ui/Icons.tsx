import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function makeIcon(path: React.ReactNode) {
  return function Icon({ size = 16, strokeWidth = 1.75, ...rest }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...rest}
      >
        {path}
      </svg>
    )
  }
}

export const IconArrowUpRight = makeIcon(
  <>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </>,
)

export const IconBrandGithub = makeIcon(
  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
)

export const IconBrandLinkedin = makeIcon(
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 11v5" />
    <path d="M8 8v.01" />
    <path d="M12 16v-5" />
    <path d="M16 16v-3a2 2 0 1 0-4 0" />
  </>,
)

export const IconMail = makeIcon(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>,
)

export const IconMapPin = makeIcon(
  <>
    <circle cx="12" cy="11" r="3" />
    <path d="M17.7 16.7 12 22l-5.7-5.3a8 8 0 1 1 11.4 0Z" />
  </>,
)

export const IconStar = makeIcon(
  <path d="m12 17.3-6.2 3.7 1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6 7.2.6-5.4 4.8 1.6 7Z" />,
)

export const IconCertificate = makeIcon(
  <>
    <circle cx="12" cy="10" r="5" />
    <path d="m9 14-1 7 4-2 4 2-1-7" />
  </>,
)

export const IconLanguage = makeIcon(
  <>
    <path d="M4 5h7" />
    <path d="M9 3v2c0 4.4-2.7 8-6 8" />
    <path d="M5 9c0 2.1 2.7 4 6 4" />
    <path d="m12 20 4-9 4 9" />
    <path d="M14 17h4" />
  </>,
)

export const IconCheck = makeIcon(<path d="m5 12 5 5 9-11" />)

export const IconLoader2 = makeIcon(<path d="M12 3a9 9 0 1 0 9 9" />)

export const IconPhone = makeIcon(
  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
)

export const IconSend = makeIcon(
  <>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </>,
)
