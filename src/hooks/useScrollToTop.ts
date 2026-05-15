import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Using immediate scroll for route changes to prevent flash of old content
    window.dispatchEvent(new CustomEvent('lenis-scroll-to', { 
      detail: { target: 0, options: { immediate: true } } 
    }))
  }, [pathname])
}
