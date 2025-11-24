import { useEffect, useState } from 'react'
import type { SectionId } from '../constants/sections'

const sectionOffset = (element: Element) => {
  const rect = element.getBoundingClientRect()
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return rect.top + scrollTop
}

export const useScrollSpy = (sectionIds: SectionId[], offset = 120) => {
  const [activeSection, setActiveSection] = useState<SectionId>('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(sectionIds[i])
        if (section) {
          const top = sectionOffset(section)
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i])
            return
          }
        }
      }

      setActiveSection('home')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [sectionIds, offset])

  return activeSection
}


