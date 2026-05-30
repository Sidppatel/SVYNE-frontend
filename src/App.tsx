import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { PageWrap } from '@/components/layout/PageWrap'
import { AmbientBackground } from '@/components/layout/AmbientBackground'
import { CalendlyBadge } from '@/components/ui/CalendlyBadge'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { ROUTES } from '@/routes'
import { Home } from '@/pages/Home'
import { Services } from '@/pages/Services'
import { Work } from '@/pages/Work'
import { WorkDetail } from '@/pages/WorkDetail'
import { Pricing } from '@/pages/Pricing'
import { FAQ } from '@/pages/FAQ'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'

function App() {
  const location = useLocation()
  useScrollToTop()

  return (
    <SmoothScroll>
      <AmbientBackground />
      <Nav />
      <PageWrap>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path={ROUTES.home} element={<Home />} />
              <Route path={ROUTES.services} element={<Services />} />
              <Route path={ROUTES.work} element={<Work />} />
              <Route path="/outcomes/:slug" element={<WorkDetail />} />
              <Route path={ROUTES.pricing} element={<Pricing />} />
              <Route path={ROUTES.faq} element={<FAQ />} />
              <Route path={ROUTES.about} element={<About />} />
              <Route path={ROUTES.contact} element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </PageWrap>
      <Footer />
      <CalendlyBadge />
    </SmoothScroll>
  )
}

export default App
