import { useEffect } from 'react'

export function useActiveNav() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('.nav-links a')
    const mainNav = document.getElementById('mainNav')

    function onScroll() {
      // Scrolled background
      if (mainNav) {
        mainNav.classList.toggle('scrolled', window.scrollY > 40)
      }
      // Active link
      let cur = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 140) cur = s.id
      })
      navLinks.forEach((a) => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + cur)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
