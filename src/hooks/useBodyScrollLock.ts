import { useEffect } from 'react'

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    
    document.body.style.overflow = 'hidden'
    window.dispatchEvent(new CustomEvent('lenis-stop'))
    
    return () => {
      document.body.style.overflow = ''
      window.dispatchEvent(new CustomEvent('lenis-start'))
    }
  }, [locked])
}
