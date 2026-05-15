import { useEffect, useRef } from 'react'

export function Plexus() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = window.innerWidth
    let height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = Math.floor((width * height) / 7000)
    const connectionDistance = 140
    const mouse = { x: -100, y: -100 }

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        // High-velocity and high-variance speed system
        const speedMultiplier = Math.random() > 0.85 ? 4.5 : 2.5
        const speed = Math.random() * speedMultiplier + 1.2
        this.vx = (Math.random() - 0.5) * speed
        this.vy = (Math.random() - 0.5) * speed
        this.size = Math.random() * 2.5 + 1.2
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1

        // Mouse attraction
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 180) {
          this.x += dx * 0.008
          this.y += dy * 0.008
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = 'rgba(181, 139, 69, 0.75)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)

      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distanceSq = dx * dx + dy * dy
          const connectionDistanceSq = connectionDistance * connectionDistance

          if (distanceSq < connectionDistanceSq) {
            const distance = Math.sqrt(distanceSq)
            ctx.strokeStyle = `rgba(35, 24, 21, ${0.28 * (1 - distance / connectionDistance)})`
            ctx.lineWidth = 1.2
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleResize = () => {
      init()
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    init()
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 3,
      }}
    />
  )
}
