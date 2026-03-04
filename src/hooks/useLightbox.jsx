import { createContext, useContext, useState, useCallback } from 'react'

const LightboxContext = createContext(null)

export function LightboxProvider({ children }) {
  const [state, setState] = useState({ active: false, imgSrc: null, title: '', sub: '' })

  const openLightbox = useCallback((imgSrc, title, sub) => {
    setState({ active: true, imgSrc: imgSrc || null, title: title || '', sub: sub || '' })
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setState((s) => ({ ...s, active: false }))
    document.body.style.overflow = ''
  }, [])

  return (
    <LightboxContext.Provider value={{ ...state, openLightbox, closeLightbox }}>
      {children}
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  return useContext(LightboxContext)
}
