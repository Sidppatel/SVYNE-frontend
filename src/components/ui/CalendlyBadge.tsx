import { useEffect } from 'react'
import { STUDIO } from '@/content/studio'

const CALENDLY_CSS_ID = 'calendly-widget-css'
const CALENDLY_JS_ID = 'calendly-widget-js'

/**
 * Floating Calendly badge widget.
 * Renders a branded "Schedule a call" button in the bottom-right corner
 * that opens a Calendly popup when clicked.
 */
export function CalendlyBadge() {
  useEffect(() => {
    // Load Calendly CSS
    if (!document.getElementById(CALENDLY_CSS_ID)) {
      const link = document.createElement('link')
      link.id = CALENDLY_CSS_ID
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      document.head.appendChild(link)
    }

    // Load Calendly JS and init badge
    if (!document.getElementById(CALENDLY_JS_ID)) {
      const script = document.createElement('script')
      script.id = CALENDLY_JS_ID
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => initBadge()
      document.head.appendChild(script)
    } else {
      // Script already loaded, just init
      initBadge()
    }

    function initBadge() {
      const w = window as unknown as { Calendly?: { initBadgeWidget: (opts: Record<string, unknown>) => void } }
      if (w.Calendly?.initBadgeWidget) {
        w.Calendly.initBadgeWidget({
          url: `https://${STUDIO.schedulingUrl}?background_color=f6f1e8&text_color=231815&primary_color=ff5a36&hide_gdpr_banner=1`,
          text: 'Schedule a call →',
          color: '#ff5a36',
          textColor: '#fbf7f1',
          branding: false,
        })
      }
    }

    return () => {
      // Clean up badge element on unmount
      const badge = document.querySelector('.calendly-badge-widget')
      if (badge) badge.remove()
    }
  }, [])

  return null
}
