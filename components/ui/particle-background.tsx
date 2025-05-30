"use client"

import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number | null>(null)
  
  const colors = ['#4ADE8077', '#3498db77', '#2ecc7177', '#16a34a77']
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }
    
    const initParticles = () => {
      particles.current = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
    }
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.current.forEach((particle, i) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
        
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height
        
        // Draw connections
        connectParticles(particle, i)
      })
    }
    
    const connectParticles = (particle: Particle, index: number) => {
      const connectionRadius = 150
      
      for (let i = index + 1; i < particles.current.length; i++) {
        const other = particles.current[i]
        const dx = particle.x - other.x
        const dy = particle.y - other.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < connectionRadius) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(74, 222, 128, ${0.2 * (1 - distance / connectionRadius)})`
          ctx.lineWidth = 0.5
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(other.x, other.y)
          ctx.stroke()
        }
      }
    }
    
    const animate = () => {
      drawParticles()
      animationFrameId.current = requestAnimationFrame(animate)
    }
    
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    animate()
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}
