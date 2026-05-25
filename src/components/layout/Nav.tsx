import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FocusTrap } from 'focus-trap-react'
import { NAV_ITEMS, ROUTES } from '@/routes'
import { SparkMark } from '@/components/ui/SparkMark'
import { Wordmark } from '@/components/ui/Wordmark'
import { Button } from '@/components/ui/Button'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'

export function Nav() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  useBodyScrollLock(open)

  return (
    <header className="nav">
      <div className="nav-inner">
        <button className="nav-brand" onClick={() => navigate(ROUTES.home)} aria-label="SVYNE home">
          <SparkMark size={28} />
          <Wordmark />
        </button>

        <nav className="nav-links" aria-label="Primary">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Button
          variant="primary"
          to={ROUTES.contact}
          className="nav-cta-desk"
          withArrow
        >
          System audit
        </Button>

        <button
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(o => !o)}
        >
          <span className={open ? 'b1 x' : 'b1'} />
          <span className={open ? 'b2 x' : 'b2'} />
        </button>
      </div>

      {open && (
        <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
          <div id="mobile-menu" className="nav-mobile-panel" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            {NAV_ITEMS.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-mobile-link ${isActive ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <span className="arr">→</span>
              </NavLink>
            ))}
            <Button 
              to={ROUTES.contact} 
              className="nav-mobile-cta" 
              onClick={() => setOpen(false)}
              withArrow
            >
              System audit
            </Button>
          </div>
        </FocusTrap>
      )}
    </header>
  )
}
