import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

interface SmoothScrollProps {
  children: React.ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle scroll to top on route change or other needs
    const handleScrollTo = (e: any) => {
      if (e.detail?.target !== undefined) {
        lenis.scrollTo(e.detail.target, e.detail.options || {})
      }
    }

    const handleStop = () => lenis.stop()
    const handleStart = () => lenis.start()

    window.addEventListener('lenis-scroll-to', handleScrollTo as any)
    window.addEventListener('lenis-stop', handleStop)
    window.addEventListener('lenis-start', handleStart)

    return () => {
      lenis.destroy()
      window.removeEventListener('lenis-scroll-to', handleScrollTo as any)
      window.removeEventListener('lenis-stop', handleStop)
      window.removeEventListener('lenis-start', handleStart)
    }
  }, [])

  return <>{children}</>
}
