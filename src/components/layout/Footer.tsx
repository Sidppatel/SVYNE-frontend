import { NavLink } from 'react-router-dom'
import { SparkMark } from '@/components/ui/SparkMark'
import { Wordmark } from '@/components/ui/Wordmark'
import { FOOTER_LINKS, STUDIO } from '@/content/studio'
import { ROUTES } from '@/routes'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-mark">
              <SparkMark size={34} color="var(--color-sienna-bright)" stroke={7} />
              <Wordmark />
            </div>
            <p className="footer-tag">{STUDIO.tagline} {STUDIO.description}</p>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              {FOOTER_LINKS.pages.map(p => (
                <li key={p.to}>
                  <NavLink to={p.to}>{p.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Reach</h4>
            <ul>
              <li><a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a></li>
              <li><NavLink to={ROUTES.contact}>Book a system audit</NavLink></li>
              <li><span>{STUDIO.location}</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Elsewhere</h4>
            <ul>
              {FOOTER_LINKS.elsewhere.map(l => (
                <li key={l.label}>
                  {l.href === '#' ? (
                    <span className="footer-placeholder-link">{l.label}</span>
                  ) : (
                    <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>{STUDIO.bottomMeta}</div>
          <div>{STUDIO.bottomTag}</div>
        </div>
      </div>
    </footer>
  )
}
