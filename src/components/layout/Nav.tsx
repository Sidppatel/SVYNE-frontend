import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { NAV_ITEMS, ROUTES } from '@/routes'
import { SparkMark } from '@/components/ui/SparkMark'
import { Wordmark } from '@/components/ui/Wordmark'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'

export function Nav() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  useBodyScrollLock(open)

  const go = (to: string) => {
    setOpen(false)
    navigate(to)
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <button className="nav-brand" onClick={() => go(ROUTES.home)} aria-label="Svono home">
          <SparkMark size={28} />
          <Wordmark />
        </button>

        <nav className="nav-links" aria-label="Primary">
          {NAV_ITEMS.slice(0, 4).map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="nav-cta nav-cta-desk"
          onClick={() => go(ROUTES.contact)}
        >
          Start a project<span className="arr">→</span>
        </button>

        <button
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className={open ? 'b1 x' : 'b1'} />
          <span className={open ? 'b2 x' : 'b2'} />
        </button>
      </div>

      {open && (
        <div className="nav-mobile-panel">
          {NAV_ITEMS.map(item => (
            <button
              key={item.to}
              className={`nav-mobile-link ${pathname === item.to ? 'active' : ''}`}
              onClick={() => go(item.to)}
            >
              <span>{item.label}</span>
              <span className="arr">→</span>
            </button>
          ))}
          <button className="nav-mobile-cta" onClick={() => go(ROUTES.contact)}>
            Start a project <span className="arr">→</span>
          </button>
        </div>
      )}
    </header>
  )
}
