import { ENABLE_GLOBAL_AMBIENT_BACKGROUND } from '@/config/experience'
import { Plexus } from '@/components/ui/Plexus'

export function AmbientBackground() {

  if (!ENABLE_GLOBAL_AMBIENT_BACKGROUND) return null

  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-field" />
      <div className="ambient-grid" />
      <Plexus densityMultiplier={0.5} />
      <div className="ambient-vine ambient-vine-a" />
      <div className="ambient-vine ambient-vine-b" />
    </div>
  )
}
