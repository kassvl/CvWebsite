export interface Certification {
  title: string
  issuer: string
  date: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
  },
]

export interface LanguageItem {
  name: string
  level: string
}

export const languages: LanguageItem[] = [
  { name: 'Turkish', level: 'Native' },
  { name: 'English', level: 'C1+' },
  { name: 'Polish', level: 'A2 – B1' },
]
