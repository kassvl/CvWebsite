export interface NavItem {
  index: string
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { index: '01', label: 'About', href: '#about' },
  { index: '02', label: 'Stack', href: '#stack' },
  { index: '03', label: 'Projects', href: '#projects' },
  { index: '04', label: 'Experience', href: '#experience' },
  { index: '05', label: 'Contact', href: '#contact' },
]
