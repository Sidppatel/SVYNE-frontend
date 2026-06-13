import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as THREE from 'three'
import { getCssVar } from '@/utils/colors'

// Helper to create a radial gradient canvas for round soft particles (bokeh sparks)
const createParticleTexture = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 16
  canvas.height = 16
  const ctx = canvas.getContext('2d')
  if (ctx) {
    const rootStyle = typeof window !== 'undefined' ? getComputedStyle(document.documentElement) : null;
    const parseHexToRGB = (varName: string) => {
      if (!rootStyle) return '0, 0, 0';
      const val = rootStyle.getPropertyValue(varName).trim();
      const normalized = val.startsWith('#') ? val : `#${val}`;
      if (normalized.length !== 7) return '0, 0, 0';
      const r = parseInt(normalized.slice(1, 3), 16);
      const g = parseInt(normalized.slice(3, 5), 16);
      const b = parseInt(normalized.slice(5, 7), 16);
      return `${r}, ${g}, ${b}`;
    };

    const accentSoftRGB = parseHexToRGB('--color-accent-soft');
    const accentDeepRGB = parseHexToRGB('--color-accent-deep');
    const whiteRGB = parseHexToRGB('--color-white');
    const blackRGB = parseHexToRGB('--color-black');

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

export type HeroCanvasMode = 'home' | 'about' | 'services' | 'pricing' | 'faq' | 'work' | 'contact'

interface NodeData {
  id: string
  label: string
  color: string
  accentColor: string
  pos: [number, number, number]
  desc: string
  metric: string
}

const CONFIGS: Record<
  Exclude<HeroCanvasMode, 'contact'>,
  { nodes: NodeData[]; paths: { from: string; to: string }[] }
> = {
  home: {
    nodes: [
      {
        id: 'workflows',
        label: 'Central Hub',
        color: '--color-accent',
        accentColor: '--color-accent-deep',
        pos: [0, 0, 0],
        desc: 'SVYNE Core system routing data, scheduling, and flows.',
        metric: '100% connected'
      },
      {
        id: 'crm',
        label: 'CRM',
        color: '--color-accent',
        accentColor: '--color-accent-deep',
        pos: [-3.0, 1.8, -0.8],
        desc: 'Lead capture, customer profiles, and marketing history.',
        metric: '100% data ownership'
      },
      {
        id: 'scheduling',
        label: 'Scheduling',
        color: '--color-gold',
        accentColor: '--color-gold-bright',
        pos: [-1.8, -2.0, 1.0],
        desc: 'Calendar, appointments, dispatch, and conflict detection.',
        metric: '90% fewer conflicts'
      },
      {
        id: 'financial',
        label: 'Financial',
        color: '--color-growth',
        accentColor: '--color-growth',
        pos: [2.2, -1.8, -1.2],
        desc: 'Estimates, invoices, payment tracking, and text-to-pay.',
        metric: '40% faster collections'
      },
      {
        id: 'operations',
        label: 'Operations',
        color: '--color-violet-soft',
        accentColor: '--color-violet-soft',
        pos: [2.8, 1.4, 0.5],
        desc: 'Work orders, Kanban boards, crew dispatch, and project tracking.',
        metric: 'Real-time updates'
      },
      {
        id: 'communication',
        label: 'Communication',
        color: '--color-accent-deep',
        accentColor: '--color-accent-deep',
        pos: [0.6, 2.8, 1.0],
        desc: 'Two-way SMS, email templates, and automated review campaigns.',
        metric: 'Instant notifications'
      },
      {
        id: 'inventory',
        label: 'Inventory',
        color: '--color-gold-bright',
        accentColor: '--color-gold-bright',
        pos: [-3.2, -0.5, 0.8],
        desc: 'Stock levels, asset assignment, and low-stock alerts.',
        metric: '0 manual counts'
      },
      {
        id: 'events',
        label: 'Event Management',
        color: '--color-violet-soft',
        accentColor: '--color-violet-soft',
        pos: [1.0, -3.0, -0.5],
        desc: 'Ticketing, drag-and-drop seating charts, QR check-in, and attendee lists.',
        metric: '$0 setup fee'
      }
    ],
    paths: [
      { from: 'crm', to: 'workflows' },
      { from: 'workflows', to: 'scheduling' },
      { from: 'scheduling', to: 'operations' },
      { from: 'operations', to: 'financial' },
      { from: 'financial', to: 'communication' },
      { from: 'communication', to: 'workflows' },
      { from: 'inventory', to: 'workflows' },
      { from: 'events', to: 'workflows' }
    ]
  },
  services: {
    nodes: [
      {
        id: 'workflows',
        label: 'Services Core',
        color: '--color-accent',
        accentColor: '--color-accent-deep',
        pos: [0, 0, 0],
        desc: 'Core operational methodology designed to eliminate manual drag.',
        metric: 'Custom built'
      },
      {
        id: 'audit',
        label: 'Workflow Audit',
        color: '--color-accent',
        accentColor: '--color-accent-deep',
        pos: [-2.8, 1.6, -0.6],
        desc: 'Documenting processes, shadowing employees, and locating bottlenecks.',
        metric: 'Phase 01'
      },
      {
        id: 'build',
        label: 'Modular Build',
        color: '--color-gold',
        accentColor: '--color-gold-bright',
        pos: [2.8, 1.2, 0.6],
        desc: 'Developing custom interfaces, databases, and third-party integrations.',
        metric: 'Phase 02'
      },
      {
        id: 'optimize',
        label: 'Optimization',
        color: '--color-growth',
        accentColor: '--color-growth',
        pos: [-0.8, -2.2, 0.8],
        desc: 'Continuous support, feature requests, and workflow tuning.',
        metric: 'Phase 03'
      }
    ],
    paths: [
      { from: 'audit', to: 'workflows' },
      { from: 'workflows', to: 'build' },
      { from: 'build', to: 'optimize' },
      { from: 'optimize', to: 'workflows' }
    ]
  },
  about: {
    nodes: [
      {
        id: 'workflows',
        label: 'SVYNE Core',
        color: '--color-accent',
        accentColor: '--color-accent-deep',
        pos: [0, 0, 0],
        desc: 'Operations first, software second. Scalable systems built around your business.',
        metric: 'Saraland, AL'
      },
      {
        id: 'founder',
        label: 'Solo Founder',
        color: '--color-gold',
        accentColor: '--color-gold-bright',
        pos: [-2.5, 1.6, -0.5],
        desc: 'No account managers. The person who maps your workflow builds your system.',
        metric: 'Direct connection'
      },
      {
        id: 'principles',
        label: 'Principles',
        color: '--color-growth',
        accentColor: '--color-growth',
        pos: [2.6, 1.2, 0.5],
        desc: 'Four core rules keeping customization focused on business outcomes.',
        metric: 'Outcome focused'
      },
      {
        id: 'presence',
        label: 'Presence',
        color: '--color-violet-soft',
        accentColor: '--color-violet-soft',
        pos: [-1.0, -2.2, 0.8],
        desc: 'Local support with a national footprint across service operations.',
        metric: 'Saraland base'
      }
    ],
    paths: [
      { from: 'founder', to: 'workflows' },
      { from: 'workflows', to: 'principles' },
      { from: 'principles', to: 'presence' },
      { from: 'presence', to: 'workflows' }
    ]
  },
  pricing: {
    nodes: [
      {
        id: 'workflows',
        label: 'Investment Core',
        color: '--color-accent',
        accentColor: '--color-accent-deep',
        pos: [0, 0, 0],
        desc: 'Transparent, outcome-based pricing mapped to operational complexity.',
        metric: 'Flat rate'
      },
      {
        id: 'audit',
        label: 'System Audit',
        color: '--color-accent',
        accentColor: '--color-accent-deep',
        pos: [-2.6, 1.6, -0.6],
        desc: 'Fixed-price operational audit mapping the flow of truth.',
        metric: 'From $2,800'
      },
      {
        id: 'implementation',
        label: 'Implementation',
        color: '--color-gold',
        accentColor: '--color-gold-bright',
        pos: [2.6, 1.2, 0.6],
        desc: 'Full development and config of custom modules and databases.',
        metric: 'From $8,500'
      },
      {
        id: 'support',
        label: 'Monthly Support',
        color: '--color-growth',
        accentColor: '--color-growth',
        pos: [-1.0, -2.2, 0.8],
        desc: 'Ongoing optimization, training, updates, and maintenance.',
        metric: 'From $750/mo'
      }
    ],
    paths: [
      { from: 'audit', to: 'workflows' },
      { from: 'workflows', to: 'implementation' },
      { from: 'implementation', to: 'support' },
      { from: 'support', to: 'workflows' }
    ]
  },
  faq: {
    nodes: [
      {
        id: 'workflows',
        label: 'FAQ Center',
        color: '--color-accent',
        accentColor: '--color-accent-deep',
        pos: [0, 0, 0],
        desc: 'Common questions answered about custom operational systems.',
        metric: 'Clear answers'
      },
      {
        id: 'whatis',
        label: 'What is SVYNE?',
        color: '--color-gold',
        accentColor: '--color-gold-bright',
        pos: [-2.6, 1.6, -0.6],
        desc: 'Custom-fit system that replaces spreadsheets and email handoffs.',
        metric: 'Operating System'
      },
      {
        id: 'howworks',
        label: 'How does it work?',
        color: '--color-growth',
        accentColor: '--color-growth',
        pos: [2.6, 1.2, 0.6],
        desc: 'Five-phase process: shadow, map, analyze, design, and deploy.',
        metric: '5-Step Process'
      },
      {
        id: 'whycustom',
        label: 'Why custom tech?',
        color: '--color-violet-soft',
        accentColor: '--color-violet-soft',
        pos: [-1.0, -2.2, 0.8],
        desc: 'Fits your business exactly, instead of forcing you into rigid templates.',
        metric: 'Zero compromises'
      }
    ],
    paths: [
      { from: 'whatis', to: 'workflows' },
      { from: 'workflows', to: 'howworks' },
      { from: 'howworks', to: 'whycustom' },
      { from: 'whycustom', to: 'workflows' }
    ]
  },
  work: {
    nodes: [
      {
        id: 'workflows',
        label: 'Case Studies',
        color: '--color-accent',
        accentColor: '--color-accent-deep',
        pos: [0, 0, 0],
        desc: 'Delivered outcomes showing what became faster, clearer, or easier to scale.',
        metric: 'Proven results'
      },
      {
        id: 'dispatch',
        label: 'Service Dispatch',
        color: '--color-gold',
        accentColor: '--color-gold-bright',
        pos: [-2.8, 1.5, -0.5],
        desc: 'Eliminated spreadsheet schedules and text handoffs for field staff.',
        metric: '-40% Job Cycle'
      },
      {
        id: 'pipeline',
        label: 'Client Pipeline',
        color: '--color-growth',
        accentColor: '--color-growth',
        pos: [2.8, 1.2, 0.5],
        desc: 'Automated intake routing and instant lead response capture.',
        metric: '0.2s Capture'
      },
      {
        id: 'admin',
        label: 'Back-Office',
        color: '--color-violet-soft',
        accentColor: '--color-violet-soft',
        pos: [-0.8, -2.2, 0.8],
        desc: 'Automated sync connecting dispatch directly to invoicing database.',
        metric: '90% Admin Reduction'
      }
    ],
    paths: [
      { from: 'dispatch', to: 'workflows' },
      { from: 'workflows', to: 'pipeline' },
      { from: 'pipeline', to: 'admin' },
      { from: 'admin', to: 'workflows' }
    ]
  }
}

interface ProjectedCoord {
  id: string
  label: string
  metric: string
  desc: string
  color: string
  x: number
  y: number
  visible: boolean
}

interface HeroCanvas3DProps {
  mode?: HeroCanvasMode
}

export function HeroCanvas3D({ mode = 'home' }: HeroCanvas3DProps) {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [projectedCoords, setProjectedCoords] = useState<ProjectedCoord[]>([])
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [webglSupported, setWebglSupported] = useState(() => {
    try {
      const canvas = document.createElement('canvas')
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      )
    } catch {
      return false
    }
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Keep track of ref values in animation loop
  const hoverStateRef = useRef<string | null>(null)
  useEffect(() => {
    hoverStateRef.current = hoveredBadge || activeNode
  }, [hoveredBadge, activeNode])

  useEffect(() => {
    if (webglSupported) return

    const configMode = mode === 'contact' ? 'home' : mode
    const config = CONFIGS[configMode] || CONFIGS.home
    const nodesData = config.nodes

    let animationId: number
    let angle = 0

    const updateProjection = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      angle += 0.003

      const coords: ProjectedCoord[] = nodesData.map(node => {
        const [x, y, z] = node.pos

        const cosY = Math.cos(angle)
        const sinY = Math.sin(angle)

        const rx = x * cosY - z * sinY
        const rz = x * sinY + z * cosY
        const ry = y

        const cameraZ = 8.5
        const factor = cameraZ / (cameraZ + rz)

        const screenX = rx * width * 0.11 * factor + width / 2
        const screenY = -ry * height * 0.16 * factor + height / 2

        return {
          id: node.id,
          label: node.label,
          metric: node.metric,
          desc: node.desc,
          color: node.color,
          x: screenX,
          y: screenY,
          visible: true
        }
      })

      setProjectedCoords(coords)
      animationId = requestAnimationFrame(updateProjection)
    }

    updateProjection()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [webglSupported, mode])

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const configMode = mode === 'contact' ? 'home' : mode
    const config = CONFIGS[configMode] || CONFIGS.home
    const nodesData = config.nodes
    const paths = config.paths

    // 1. Scene & Setup
    const width = container.clientWidth
    const height = container.clientHeight
    const scene = new THREE.Scene()
    
    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    if (width < 480) {
      camera.position.set(0, 0, 8.8)
    } else if (width < 768) {
      camera.position.set(0, 0, 8.6)
    } else if (width < 1024) {
      camera.position.set(0, 0, 8.5)
    } else {
      camera.position.set(0, 0, 8.5)
    }

    // Renderer
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      })
    } catch {
      setTimeout(() => setWebglSupported(false), 0)
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(getCssVar('--color-surface'), 0.45)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(getCssVar('--color-accent'), 2.4)
    mainLight.position.set(5, 10, 7)
    scene.add(mainLight)

    const fillLight = new THREE.DirectionalLight(getCssVar('--color-violet-soft'), 1.2)
    fillLight.position.set(-5, -5, 3)
    scene.add(fillLight)

    const pulseLight = new THREE.PointLight(getCssVar('--color-gold'), 2.2, 15)
    pulseLight.position.set(0, 0, 1)
    scene.add(pulseLight)

    // Headlight attached directly to camera to provide crisp specular reflections
    const cameraLight = new THREE.PointLight(getCssVar('--color-surface'), 1.8, 20)
    camera.add(cameraLight)
    scene.add(camera)

    // 3. Node Meshes
    const nodeMeshes = new Map<string, THREE.Mesh>()
    const nodeGroup = new THREE.Group()
    scene.add(nodeGroup)

    let workflowsOuter: THREE.Mesh | null = null

    nodesData.forEach(node => {
      if (node.id === 'workflows') {
        // Create a composite group for the central node (workflows)
        const workflowsGroup = new THREE.Group()
        workflowsGroup.position.set(...node.pos)
        
        // Inner physical core sphere
        const innerGeometry = new THREE.SphereGeometry(0.13, 32, 32)
        const innerMaterial = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(getCssVar(node.color)),
          roughness: 0.1,
          metalness: 0.8,
          clearcoat: 1.0,
          clearcoatRoughness: 0.03,
          emissive: new THREE.Color(getCssVar(node.color)),
          emissiveIntensity: 0.4
        })
        const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial)
        workflowsGroup.add(innerMesh)

        // Outer rotating wireframe shell to represent active computation
        const outerGeometry = new THREE.SphereGeometry(0.22, 16, 16)
        const outerMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color(getCssVar(node.color)),
          wireframe: true,
          transparent: true,
          opacity: 0.35,
          blending: THREE.AdditiveBlending
        })
        const outerMesh = new THREE.Mesh(outerGeometry, outerMaterial)
        workflowsGroup.add(outerMesh)

        nodeGroup.add(workflowsGroup)
        nodeMeshes.set(node.id, innerMesh) // Map core mesh for scaling animations
        workflowsOuter = outerMesh
      } else {
        // Satellite nodes
        const geometry = new THREE.SphereGeometry(0.10, 32, 32)
        const material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(getCssVar(node.color)),
          roughness: 0.1,
          metalness: 0.8,
          clearcoat: 1.0,
          clearcoatRoughness: 0.03,
          emissive: new THREE.Color(getCssVar(node.color)),
          emissiveIntensity: 0.18
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(...node.pos)
        nodeGroup.add(mesh)
        nodeMeshes.set(node.id, mesh)
      }
    })

    // 4. Connection Lines
    const lineGroup = new THREE.Group()
    scene.add(lineGroup)

    const connectionPaths: { from: THREE.Vector3; to: THREE.Vector3; color: string }[] = []

    paths.forEach(path => {
      const fromNode = nodesData.find(n => n.id === path.from)
      const toNode = nodesData.find(n => n.id === path.to)
      if (!fromNode || !toNode) return

      const fromVec = new THREE.Vector3(...fromNode.pos)
      const toVec = new THREE.Vector3(...toNode.pos)
      connectionPaths.push({ from: fromVec, to: toVec, color: fromNode.color })

      // Create line geometry
      const points = [fromVec, toVec]
      const lineGeom = new THREE.BufferGeometry().setFromPoints(points)
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(getCssVar('--color-ink-surface')),
        transparent: true,
        opacity: 0.15,
        linewidth: 1
      })
      const line = new THREE.Line(lineGeom, lineMat)
      lineGroup.add(line)
    })

    // 5. Data Packets (glowing elements traveling along connections)
    const packets: {
      mesh: THREE.Mesh
      fromVec: THREE.Vector3
      toVec: THREE.Vector3
      progress: number
      speed: number
    }[] = []

    const packetGeom = new THREE.SphereGeometry(0.06, 16, 16)
    connectionPaths.forEach(path => {
      const count = Math.random() > 0.4 ? 2 : 1
      for (let i = 0; i < count; i++) {
        const packetMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color(getCssVar(path.color)),
          transparent: true,
          opacity: 0.9
        })
        const packetMesh = new THREE.Mesh(packetGeom, packetMat)
        scene.add(packetMesh)
        packets.push({
          mesh: packetMesh,
          fromVec: path.from,
          toVec: path.to,
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.005
        })
      }
    })

    // 6. Rotating Architecture (Dual Background Torus Rings)
    const ringGroup = new THREE.Group()
    scene.add(ringGroup)

    const ring1Geom = new THREE.TorusGeometry(3.5, 0.012, 8, 64)
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('--color-accent'),
      transparent: true,
      opacity: 0.14,
      wireframe: true
    })
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat)
    ring1.rotation.x = Math.PI / 2.5
    ringGroup.add(ring1)

    const ring2Geom = new THREE.TorusGeometry(3.5, 0.008, 8, 64)
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('--color-gold'),
      transparent: true,
      opacity: 0.1,
      wireframe: true
    })
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat)
    ring2.rotation.x = -Math.PI / 3.0
    ring2.rotation.y = Math.PI / 6.0
    ringGroup.add(ring2)

    // 7. Ambient Particle Dust (Soft Bokeh Sparks)
    const particleCount = 180
    const particleGeom = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const speeds = new Float32Array(particleCount)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions.set([(Math.random() - 0.5) * 12], i)
      positions.set([(Math.random() - 0.5) * 8], i + 1)
      positions.set([(Math.random() - 0.5) * 6], i + 2)
      speeds.set([0.002 + Math.random() * 0.004], i / 3)
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color(getCssVar('--color-accent-soft')),
      size: 0.16,
      transparent: true,
      opacity: 0.7,
      map: createParticleTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    const dustParticles = new THREE.Points(particleGeom, particleMat)
    scene.add(dustParticles)

    // 8. Interactive Mouse Parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // 9. Animation Loop
    let animationId: number
    const tempV = new THREE.Vector3()

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Move camera target slightly based on mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      // Constant slow auto-rotation combined with mouse parallax
      const timeSecs = Date.now() * 0.0005
      const autoRotateY = timeSecs * 0.2

      nodeGroup.rotation.y = autoRotateY + mouse.x * 0.15
      nodeGroup.rotation.x = -mouse.y * 0.1
      lineGroup.rotation.y = autoRotateY + mouse.x * 0.15
      lineGroup.rotation.x = -mouse.y * 0.1

      // Rotate background rings in opposite directions
      ring1.rotation.z += 0.0012
      ring2.rotation.z -= 0.0008
      ringGroup.rotation.x = mouse.y * 0.05
      ringGroup.rotation.y = mouse.x * 0.05

      // Rotate the workflows outer wireframe core separately
      if (workflowsOuter) {
        workflowsOuter.rotation.y -= 0.008
        workflowsOuter.rotation.x += 0.004
      }

      // Pulse lighting
      const time = Date.now() * 0.001
      pulseLight.position.x = Math.sin(time * 0.5) * 2
      pulseLight.position.y = Math.cos(time * 0.3) * 2
      pulseLight.intensity = 1.5 + Math.sin(time * 2) * 0.5

      // Animate data packets
      packets.forEach(p => {
        p.progress += p.speed
        if (p.progress >= 1) {
          p.progress = 0
        }
        // Quadratic easing for fluid movement
        const easedProgress = p.progress
        p.mesh.position.lerpVectors(p.fromVec, p.toVec, easedProgress)
        // Shift packets based on group rotation
        p.mesh.position.applyEuler(new THREE.Euler(0, mouse.x * 0.002, 0))
      })

      // Animate dust particles
      const positionsArr = dustParticles.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        // Drift upwards
        const currentY = positionsArr.at(i * 3 + 1)!
        const speedY = speeds.at(i)!
        positionsArr.set([currentY + speedY], i * 3 + 1)
        if (positionsArr.at(i * 3 + 1)! > 4) {
          positionsArr.set([-4], i * 3 + 1)
        }
        // Subtle wave motion
        const currentX = positionsArr.at(i * 3)!
        positionsArr.set([currentX + Math.sin(time + i) * 0.001], i * 3)
      }
      dustParticles.geometry.attributes.position.needsUpdate = true

      // Highlight active node in 3D
      const activeId = hoverStateRef.current
      nodesData.forEach(node => {
        const mesh = nodeMeshes.get(node.id)
        if (!mesh) return

        const mat = mesh.material as THREE.MeshPhysicalMaterial
        if (node.id === activeId) {
          // Glow and swell
          mesh.scale.lerp(tempV.set(1.3, 1.3, 1.3), 0.1)
          mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, 0.8, 0.1)
        } else {
          // Regular size/glow
          const baseScale = node.id === 'workflows' ? 1.25 : 1.0
          mesh.scale.lerp(tempV.set(baseScale, baseScale, baseScale), 0.1)
          mat.emissiveIntensity = THREE.MathUtils.lerp(
            mat.emissiveIntensity,
            node.id === 'workflows' ? 0.25 : 0.1,
            0.1
          )
        }
      })

      // Project 3D nodes onto 2D viewport coordinates
      const coords: ProjectedCoord[] = nodesData.map(node => {
        const mesh = nodeMeshes.get(node.id)
        if (!mesh) return { ...node, x: 0, y: 0, visible: false }

        // Find world position of the node mesh
        tempV.setFromMatrixPosition(mesh.matrixWorld)
        // Project to camera screen space
        tempV.project(camera)

        // Convert projection coordinates to CSS coordinates
        const x = (tempV.x * 0.5 + 0.5) * width
        const y = (-tempV.y * 0.5 + 0.5) * height

        // Hide nodes that are behind the camera (depth test)
        const visible = tempV.z < 1

        return {
          id: node.id,
          label: node.label,
          metric: node.metric,
          desc: node.desc,
          color: node.color,
          x,
          y,
          visible
        }
      })

      setProjectedCoords(coords)
      renderer.render(scene, camera)
    }

    animate()

    // 10. Resize handler
    const handleResize = () => {
      if (!containerRef.current) return
      const w = containerRef.current.clientWidth
      const h = containerRef.current.clientHeight
      
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      
      // Update camera distance dynamically based on container width
      if (w < 480) {
        camera.position.z = 8.8
      } else if (w < 768) {
        camera.position.z = 8.6
      } else if (w < 1024) {
        camera.position.z = 8.5
      } else {
        camera.position.z = 8.5
      }
      
      renderer.setSize(w, h)
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      resizeObserver.disconnect()
      cancelAnimationFrame(animationId)
      renderer.dispose()
      scene.clear()
    }
  }, [mode])

  return (
    <div
      ref={containerRef}
      className="hero-3d-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 4
      }}
    >
      {webglSupported ? (
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            pointerEvents: 'auto'
          }}
          aria-hidden="true"
        />
      ) : (
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 3
          }}
          aria-hidden="true"
        >
          {(CONFIGS[mode === 'contact' ? 'home' : mode] || CONFIGS.home).paths.map((path, idx) => {
            const fromNode = projectedCoords.find(n => n.id === path.from)
            const toNode = projectedCoords.find(n => n.id === path.to)
            if (!fromNode || !toNode) return null
            return (
              <line
                key={idx}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="var(--color-border)"
                strokeWidth="1.5"
                strokeOpacity="0.25"
              />
            )
          })}
        </svg>
      )}

      {/* HTML Overlays projected onto 3D Coordinates */}
      {projectedCoords.map(node => {
        if (!node.visible) return null
        const isActive = activeNode === node.id || hoveredBadge === node.id

        return (
          <div
            key={node.id}
            className={`hero-node-badge ${isActive ? 'active' : ''}`}
            style={{
              position: 'absolute',
              left: `${node.x}px`,
              top: `${node.y}px`,
              transform: node.id === 'workflows'
                ? (isMobile ? 'translate(14px, -50%)' : 'translate(22px, -50%)')
                : (isMobile ? 'translate(10px, -50%)' : 'translate(14px, -50%)'),
              pointerEvents: 'auto',
              zIndex: isActive ? 20 : 10
            }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            {/* Glass Badge Title */}
            <div className="badge-tag">
              <span className="badge-label">{node.label}</span>
              {isActive && <span className="badge-metric">{node.metric}</span>}
            </div>

            {/* Hover Expansion Panel */}
            {isActive && (
              <div
                className="badge-panel fade-in"
                onMouseEnter={() => setHoveredBadge(node.id)}
                onMouseLeave={() => setHoveredBadge(null)}
              >
                <div className="badge-panel-header" style={{ color: `var(${node.color})` }}>
                  {node.label}
                </div>
                <p className="badge-panel-desc">{node.desc}</p>
                <div className="badge-panel-stat">
                  <span>{t('hero.standardMetric')}</span>
                  <strong style={{ color: `var(${node.color})` }}>{node.metric}</strong>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
