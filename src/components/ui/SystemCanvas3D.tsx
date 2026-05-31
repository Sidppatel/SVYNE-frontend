import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as THREE from 'three'
import { getCssVar } from '@/utils/colors'

interface NodeData {
  id: string
  label: string
  name: string
  color: string
  pos: [number, number, number]
  desc: string
}

interface ProjectedCoord {
  id: string
  label: string
  name: string
  color: string
  desc: string
  x: number
  y: number
  visible: boolean
}

interface SystemCanvas3DProps {
  activeModules: Record<string, boolean>
}

const NODES_DATA: NodeData[] = [
  {
    id: 'crm',
    label: 'CRM',
    name: 'Customer Mgmt',
    color: '--color-accent',
    pos: [-1.8, 1.5, 0.1],
    desc: 'Centralized prospect tracking, history logging, and intake routing.'
  },
  {
    id: 'communication',
    label: 'COMMS',
    name: 'Automated Comms',
    color: '--color-violet-soft',
    pos: [1.8, 1.5, -0.1],
    desc: 'Instant auto-responses, scheduling confirmations, and feedback collection.'
  },
  {
    id: 'scheduling',
    label: 'DISPATCH',
    name: 'Scheduling',
    color: '--color-gold',
    pos: [-1.8, 0.0, 0.3],
    desc: 'Real-time drag-and-drop calendar dispatching and crew routing.'
  },
  {
    id: 'operations',
    label: 'OPERATIONS',
    name: 'Work Orders',
    color: '--color-accent',
    pos: [1.8, 0.0, -0.3],
    desc: 'Digital checklists, field proof photos, and progress status tracking.'
  },
  {
    id: 'inventory',
    label: 'INVENTORY',
    name: 'Assets & Stock',
    color: '--color-growth',
    pos: [-1.8, -1.5, 0.1],
    desc: 'Stock level notifications, part requests, and warehouse tracking.'
  },
  {
    id: 'financials',
    label: 'BILLING',
    name: 'Invoicing',
    color: '--color-growth',
    pos: [1.8, -1.5, -0.1],
    desc: 'Automated deposit invoices, balance collections, and accounting sync.'
  },
  {
    id: 'reporting',
    label: 'ANALYTICS',
    name: 'Dashboards',
    color: '--color-accent-deep',
    pos: [0.0, -2.1, 0.5],
    desc: 'Profit margin monitoring, field efficiency metrics, and pipeline value tracking.'
  }
]

const PATHS = [
  { from: 'crm', to: 'communication' },
  { from: 'crm', to: 'scheduling' },
  { from: 'scheduling', to: 'operations' },
  { from: 'communication', to: 'operations' },
  { from: 'scheduling', to: 'inventory' },
  { from: 'operations', to: 'financials' },
  { from: 'inventory', to: 'reporting' },
  { from: 'financials', to: 'reporting' }
]

const createParticleTexture = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 16
  canvas.height = 16
  const ctx = canvas.getContext('2d')
  if (ctx) {
    const rootStyle = typeof window !== 'undefined' ? getComputedStyle(document.documentElement) : null
    const parseHexToRGB = (varName: string) => {
      if (!rootStyle) return '0, 0, 0'
      const val = rootStyle.getPropertyValue(varName).trim()
      const normalized = val.startsWith('#') ? val : `#${val}`
      if (normalized.length !== 7) return '0, 0, 0'
      const r = parseInt(normalized.slice(1, 3), 16)
      const g = parseInt(normalized.slice(3, 5), 16)
      const b = parseInt(normalized.slice(5, 7), 16)
      return `${r}, ${g}, ${b}`
    }

    const accentSoftRGB = parseHexToRGB('--color-accent-soft')
    const accentDeepRGB = parseHexToRGB('--color-accent-deep')
    const whiteRGB = parseHexToRGB('--color-white')
    const blackRGB = parseHexToRGB('--color-black')

    const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8)
    gradient.addColorStop(0, `rgba(${whiteRGB}, 1)`)
    gradient.addColorStop(0.2, `rgba(${accentSoftRGB}, 0.8)`)
    gradient.addColorStop(0.6, `rgba(${accentDeepRGB}, 0.2)`)
    gradient.addColorStop(1, `rgba(${blackRGB}, 0)`)
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 16, 16)
  }
  return new THREE.CanvasTexture(canvas)
}

export function SystemCanvas3D({ activeModules }: SystemCanvas3DProps) {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [projectedCoords, setProjectedCoords] = useState<ProjectedCoord[]>([])
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null)

  const hoverStateRef = useRef<string | null>(null)

  useEffect(() => {
    hoverStateRef.current = hoveredBadge || activeNode
  }, [hoveredBadge, activeNode])

  const activeModulesRef = useRef(activeModules)
  useEffect(() => {
    activeModulesRef.current = activeModules
  }, [activeModules])

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const width = container.clientWidth
    const height = container.clientHeight
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)

    if (width < 480) {
      camera.position.set(0, 0, 10.0)
    } else if (width < 768) {
      camera.position.set(0, 0, 8.5)
    } else {
      camera.position.set(0, 0, 7.5)
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)

    const ambientLight = new THREE.AmbientLight(getCssVar('--color-surface'), 0.5)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(getCssVar('--color-accent'), 2.2)
    mainLight.position.set(5, 8, 6)
    scene.add(mainLight)

    const fillLight = new THREE.DirectionalLight(getCssVar('--color-violet-soft'), 1.0)
    fillLight.position.set(-5, -6, 2)
    scene.add(fillLight)

    const pulseLight = new THREE.PointLight(getCssVar('--color-gold'), 2.0, 12)
    pulseLight.position.set(0, 0, 0.5)
    scene.add(pulseLight)

    const cameraLight = new THREE.PointLight(getCssVar('--color-surface'), 1.5, 18)
    camera.add(cameraLight)
    scene.add(camera)

    const nodeMeshes = new Map<string, THREE.Mesh>()
    const nodeGroup = new THREE.Group()
    scene.add(nodeGroup)

    const initialActiveMap = new Map<string, boolean>(Object.entries(activeModulesRef.current))
    NODES_DATA.forEach(node => {
      const isNodeActive = initialActiveMap.get(node.id) ?? false
      const geometry = new THREE.SphereGeometry(0.12, 32, 32)
      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(getCssVar(node.color)),
        roughness: 0.1,
        metalness: 0.85,
        clearcoat: 1.0,
        clearcoatRoughness: 0.02,
        emissive: new THREE.Color(getCssVar(node.color)),
        emissiveIntensity: isNodeActive ? 0.35 : 0.05
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(...node.pos)
      nodeGroup.add(mesh)
      nodeMeshes.set(node.id, mesh)
    })

    const lineGroup = new THREE.Group()
    scene.add(lineGroup)

    const pathsMeshes: { line: THREE.Line; from: string; to: string }[] = []
    const connectionPaths: { from: THREE.Vector3; to: THREE.Vector3; color: string; fromId: string; toId: string }[] = []

    PATHS.forEach(path => {
      const fromNode = NODES_DATA.find(n => n.id === path.from)
      const toNode = NODES_DATA.find(n => n.id === path.to)
      if (!fromNode || !toNode) return

      const fromVec = new THREE.Vector3(...fromNode.pos)
      const toVec = new THREE.Vector3(...toNode.pos)
      connectionPaths.push({
        from: fromVec,
        to: toVec,
        color: fromNode.color,
        fromId: path.from,
        toId: path.to
      })

      const points = [fromVec, toVec]
      const lineGeom = new THREE.BufferGeometry().setFromPoints(points)
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(getCssVar('--color-border')),
        transparent: true,
        opacity: 0.12,
        linewidth: 1
      })
      const line = new THREE.Line(lineGeom, lineMat)
      lineGroup.add(line)
      pathsMeshes.push({ line, from: path.from, to: path.to })
    })

    const packetGroup = new THREE.Group()
    scene.add(packetGroup)

    const packets: {
      mesh: THREE.Mesh
      fromVec: THREE.Vector3
      toVec: THREE.Vector3
      progress: number
      speed: number
      fromId: string
      toId: string
    }[] = []

    const packetGeom = new THREE.SphereGeometry(0.045, 16, 16)
    connectionPaths.forEach(path => {
      const count = Math.random() > 0.4 ? 2 : 1
      for (let i = 0; i < count; i++) {
        const packetMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color(getCssVar(path.color)),
          transparent: true,
          opacity: 0.0
        })
        const packetMesh = new THREE.Mesh(packetGeom, packetMat)
        packetGroup.add(packetMesh)
        packets.push({
          mesh: packetMesh,
          fromVec: path.from,
          toVec: path.to,
          progress: Math.random(),
          speed: 0.0025 + Math.random() * 0.004,
          fromId: path.fromId,
          toId: path.toId
        })
      }
    })

    const ringGroup = new THREE.Group()
    scene.add(ringGroup)

    const ring1Geom = new THREE.TorusGeometry(3.0, 0.008, 8, 64)
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(getCssVar('--color-accent')),
      transparent: true,
      opacity: 0.11,
      wireframe: true
    })
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat)
    ring1.rotation.x = Math.PI / 2.3
    ringGroup.add(ring1)

    const ring2Geom = new THREE.TorusGeometry(3.0, 0.005, 8, 64)
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(getCssVar('--color-gold')),
      transparent: true,
      opacity: 0.08,
      wireframe: true
    })
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat)
    ring2.rotation.x = -Math.PI / 2.8
    ring2.rotation.y = Math.PI / 5.0
    ringGroup.add(ring2)

    const particleCount = 120
    const particleGeom = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const speeds = new Float32Array(particleCount)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions.set([(Math.random() - 0.5) * 10], i)
      positions.set([(Math.random() - 0.5) * 7], i + 1)
      positions.set([(Math.random() - 0.5) * 5], i + 2)
      speeds.set([0.0015 + Math.random() * 0.003], i / 3)
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color(getCssVar('--color-accent-soft')),
      size: 0.13,
      transparent: true,
      opacity: 0.55,
      map: createParticleTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    const dustParticles = new THREE.Points(particleGeom, particleMat)
    scene.add(dustParticles)

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
    let isDragging = false
    const previousMousePosition = { x: 0, y: 0 }

    const handleMouseMoveGlobal = (e: MouseEvent) => {
      if (!isDragging) {
        mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1
        mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true
      previousMousePosition.x = e.clientX
      previousMousePosition.y = e.clientY
    }

    const handleMouseMoveDragging = (e: MouseEvent) => {
      if (!isDragging) return
      const deltaX = e.clientX - previousMousePosition.x
      const deltaY = e.clientY - previousMousePosition.y

      nodeGroup.rotation.y += deltaX * 0.005
      nodeGroup.rotation.x += deltaY * 0.005
      lineGroup.rotation.y += deltaX * 0.005
      lineGroup.rotation.x += deltaY * 0.005
      packetGroup.rotation.y += deltaX * 0.005
      packetGroup.rotation.x += deltaY * 0.005

      previousMousePosition.x = e.clientX
      previousMousePosition.y = e.clientY
    }

    const handleMouseUpOrLeave = () => {
      isDragging = false
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true
        previousMousePosition.x = e.touches[0].clientX
        previousMousePosition.y = e.touches[0].clientY
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return
      const deltaX = e.touches[0].clientX - previousMousePosition.x
      const deltaY = e.touches[0].clientY - previousMousePosition.y

      nodeGroup.rotation.y += deltaX * 0.008
      nodeGroup.rotation.x += deltaY * 0.008
      lineGroup.rotation.y += deltaX * 0.008
      lineGroup.rotation.x += deltaY * 0.008
      packetGroup.rotation.y += deltaX * 0.008
      packetGroup.rotation.x += deltaY * 0.008

      previousMousePosition.x = e.touches[0].clientX
      previousMousePosition.y = e.touches[0].clientY
    }

    window.addEventListener('mousemove', handleMouseMoveGlobal)
    canvas.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMoveDragging)
    window.addEventListener('mouseup', handleMouseUpOrLeave)

    canvas.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleMouseUpOrLeave)

    let animationId: number
    const tempV = new THREE.Vector3()

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      if (!isDragging) {
        mouse.x += (mouse.targetX - mouse.x) * 0.04
        mouse.y += (mouse.targetY - mouse.y) * 0.04

        const timeSecs = Date.now() * 0.0003
        const autoRotateY = timeSecs * 0.15

        nodeGroup.rotation.y = autoRotateY + mouse.x * 0.12
        nodeGroup.rotation.x = -mouse.y * 0.08
        lineGroup.rotation.y = autoRotateY + mouse.x * 0.12
        lineGroup.rotation.x = -mouse.y * 0.08
        packetGroup.rotation.y = autoRotateY + mouse.x * 0.12
        packetGroup.rotation.x = -mouse.y * 0.08
      }

      ring1.rotation.z += 0.001
      ring2.rotation.z -= 0.0006
      ringGroup.rotation.x = mouse.y * 0.04
      ringGroup.rotation.y = mouse.x * 0.04

      const time = Date.now() * 0.001
      pulseLight.position.x = Math.sin(time * 0.4) * 1.5
      pulseLight.position.y = Math.cos(time * 0.2) * 1.5
      pulseLight.intensity = 1.2 + Math.sin(time * 1.5) * 0.3

      const currentActiveMap = new Map<string, boolean>(Object.entries(activeModulesRef.current))

      pathsMeshes.forEach(pm => {
        const pathActive = (currentActiveMap.get(pm.from) ?? false) && (currentActiveMap.get(pm.to) ?? false)
        const mat = pm.line.material as THREE.LineBasicMaterial
        if (pathActive) {
          mat.color.set(getCssVar('--color-accent'))
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, 0.45, 0.05)
        } else {
          mat.color.set(getCssVar('--color-border'))
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, 0.1, 0.05)
        }
      })

      packets.forEach(p => {
        const pathActive = (currentActiveMap.get(p.fromId) ?? false) && (currentActiveMap.get(p.toId) ?? false)
        const mat = p.mesh.material as THREE.MeshBasicMaterial
        if (pathActive) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, 0.85, 0.05)
          p.progress += p.speed
          if (p.progress >= 1) p.progress = 0
          p.mesh.position.lerpVectors(p.fromVec, p.toVec, p.progress)
        } else {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, 0.0, 0.05)
        }
      })

      const positionsArr = dustParticles.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const currentY = positionsArr.at(i * 3 + 1)!
        const speedY = speeds.at(i)!
        positionsArr.set([currentY + speedY], i * 3 + 1)
        if (positionsArr.at(i * 3 + 1)! > 3.5) {
          positionsArr.set([-3.5], i * 3 + 1)
        }
        const currentX = positionsArr.at(i * 3)!
        positionsArr.set([currentX + Math.sin(time + i) * 0.0008], i * 3)
      }
      dustParticles.geometry.attributes.position.needsUpdate = true

      const hoverActiveId = hoverStateRef.current

      NODES_DATA.forEach(node => {
        const mesh = nodeMeshes.get(node.id)
        if (!mesh) return

        const isNodeActive = currentActiveMap.get(node.id) ?? false
        const mat = mesh.material as THREE.MeshPhysicalMaterial

        if (isNodeActive) {
          mat.color.set(getCssVar(node.color))
          mat.emissive.set(getCssVar(node.color))
          if (node.id === hoverActiveId) {
            mesh.scale.lerp(tempV.set(1.4, 1.4, 1.4), 0.1)
            mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, 0.9, 0.1)
          } else {
            mesh.scale.lerp(tempV.set(1.15, 1.15, 1.15), 0.1)
            mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, 0.45, 0.1)
          }
        } else {
          mat.color.set(getCssVar('--color-surface-3'))
          mat.emissive.set(getCssVar('--color-surface-3'))
          if (node.id === hoverActiveId) {
            mesh.scale.lerp(tempV.set(1.1, 1.1, 1.1), 0.1)
            mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, 0.25, 0.1)
          } else {
            mesh.scale.lerp(tempV.set(0.9, 0.9, 0.9), 0.1)
            mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, 0.05, 0.1)
          }
        }
      })

      const coords: ProjectedCoord[] = NODES_DATA.map(node => {
        const mesh = nodeMeshes.get(node.id)
        if (!mesh) return { ...node, x: 0, y: 0, visible: false }

        tempV.setFromMatrixPosition(mesh.matrixWorld)
        tempV.project(camera)

        const x = (tempV.x * 0.5 + 0.5) * width
        const y = (-tempV.y * 0.5 + 0.5) * height
        const visible = tempV.z < 1

        return {
          id: node.id,
          label: node.label,
          name: node.name,
          color: node.color,
          desc: node.desc,
          x,
          y,
          visible
        }
      })

      setProjectedCoords(coords)
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!containerRef.current) return
      const w = containerRef.current.clientWidth
      const h = containerRef.current.clientHeight

      camera.aspect = w / h
      camera.updateProjectionMatrix()

      if (w < 480) {
        camera.position.z = 10.0
      } else if (w < 768) {
        camera.position.z = 8.5
      } else {
        camera.position.z = 7.5
      }

      renderer.setSize(w, h)
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveGlobal)
      canvas.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMoveDragging)
      window.removeEventListener('mouseup', handleMouseUpOrLeave)
      canvas.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUpOrLeave)
      resizeObserver.disconnect()
      cancelAnimationFrame(animationId)
      renderer.dispose()
      scene.clear()
    }
  }, [])

  const activeModulesMap = new Map<string, boolean>(Object.entries(activeModules))

  return (
    <div
      ref={containerRef}
      className="hero-3d-container"
    >
      <canvas
        ref={canvasRef}
        className="hero-3d-canvas"
        aria-hidden="true"
      />

      {projectedCoords.map(node => {
        if (!node.visible) return null
        const isNodeActive = activeModulesMap.get(node.id) ?? false
        const isHovered = activeNode === node.id || hoveredBadge === node.id

        return (
          <div
            key={node.id}
            className={`hero-node-badge ${isNodeActive ? 'active' : 'inactive'} ${isHovered ? 'hovered' : ''}`}
            style={{
              left: `${node.x}px`,
              top: `${node.y}px`
            }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div className="badge-tag">
              <span className="badge-label">{node.label}</span>
              <span className="badge-metric">{isNodeActive ? t('describe.active') : t('describe.optional')}</span>
            </div>

            {isHovered && (
              <div
                className="badge-panel fade-in"
                onMouseEnter={() => setHoveredBadge(node.id)}
                onMouseLeave={() => setHoveredBadge(null)}
              >
                <div className="badge-panel-header" style={{ color: `var(${node.color})` }}>
                  {node.name}
                </div>
                <p className="badge-panel-desc">{node.desc}</p>
                <div className="badge-panel-stat">
                  <span>{t('describe.status')}</span>
                  <strong style={{ color: isNodeActive ? `var(${node.color})` : 'var(--color-text-faint)' }}>
                    {isNodeActive ? t('describe.recommended') : t('describe.optional')}
                  </strong>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
