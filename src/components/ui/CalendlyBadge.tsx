import { useEffect } from 'react'
import { STUDIO } from '@/content/studio'

const CALENDLY_CSS_ID = 'calendly-widget-css'
const CALENDLY_JS_ID = 'calendly-widget-js'


export function CalendlyBadge() {
  useEffect(() => {
    
    if (!document.getElementById(CALENDLY_CSS_ID)) {
      const link = document.createElement('link')
      link.id = CALENDLY_CSS_ID
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      document.head.appendChild(link)
    }

    
    if (!document.getElementById(CALENDLY_JS_ID)) {
      const script = document.createElement('script')
      script.id = CALENDLY_JS_ID
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => initBadge()
      document.head.appendChild(script)
    } else {
      
      initBadge()
    }

    function initBadge() {
      const w = window as unknown as { Calendly?: { initBadgeWidget: (opts: Record<string, unknown>) => void } }
      if (w.Calendly?.initBadgeWidget) {
        const rootStyle = getComputedStyle(document.documentElement);
        const getHex = (varName: string, fallback: string) => {
          const val = rootStyle.getPropertyValue(varName).trim() || fallback;
          return val.replace('#', '');
        };
        
        const bgHex = getHex('--color-bg', '#f6f1e8');
        const textHex = getHex('--color-ink', '#231815');
        const primaryHex = getHex('--color-accent', '#ff5a36');
        const surfaceHex = getHex('--color-surface', '#fbf7f1');

        w.Calendly.initBadgeWidget({
          url: `https://${STUDIO.schedulingUrl}?background_color=${bgHex}&text_color=${textHex}&primary_color=${primaryHex}&hide_gdpr_banner=1`,
          text: 'Schedule a call →',
          color: `#${primaryHex}`,
          textColor: `#${surfaceHex}`,
          branding: false,
        })
      }
    }

    return () => {
      
      const badge = document.querySelector('.calendly-badge-widget')
      if (badge) badge.remove()
    }
  }, [])

  return null
}
