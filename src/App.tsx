import { Route, Routes } from 'react-router-dom'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { PageWrap } from '@/components/layout/PageWrap'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { ROUTES } from '@/routes'
import { Home } from '@/pages/Home'
import { Services } from '@/pages/Services'
import { Work } from '@/pages/Work'
import { WorkDetail } from '@/pages/WorkDetail'
import { Pricing } from '@/pages/Pricing'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'

function App() {
  useScrollToTop()
  return (
    <>
      <Nav />
      <PageWrap>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.services} element={<Services />} />
          <Route path={ROUTES.work} element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path={ROUTES.pricing} element={<Pricing />} />
          <Route path={ROUTES.about} element={<About />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </PageWrap>
      <Footer />
    </>
  )
}

export default App
