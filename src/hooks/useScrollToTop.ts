import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    
    window.dispatchEvent(new CustomEvent('lenis-scroll-to', { 
      detail: { target: 0, options: { immediate: true } } 
    }))
  }, [pathname])
}
