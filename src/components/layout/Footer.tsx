import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Logo } from '@/components/ui/Logo'
import { FOOTER_LINKS, STUDIO } from '@/content/studio'
import { ROUTES } from '@/routes'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer-inner doc">
        <div className="footer-top">
          <div>
            <div className="footer-mark">
              <Logo />
            </div>
            <p className="footer-tag">{STUDIO.tagline} {STUDIO.description}</p>
          </div>
          <div className="footer-col">
            <h4>{t('footer.pages')}</h4>
            <ul>
              {FOOTER_LINKS.pages.map(p => (
                <li key={p.to}>
                  <NavLink to={p.to}>{p.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.reach')}</h4>
            <ul>
              <li><a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a></li>
              <li><NavLink to={ROUTES.contact}>{t('footer.audit')}</NavLink></li>
              <li><span>{STUDIO.location}</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.elsewhere')}</h4>
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
