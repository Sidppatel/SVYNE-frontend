import type { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'

export function PageWrap({ children }: PropsWithChildren) {
  const { pathname } = useLocation()
  return (
    <main key={pathname} className="page fade-up">
      {children}
    </main>
  )
}
