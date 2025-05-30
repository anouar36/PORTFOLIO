"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ColorShiftBackgroundProps {
  className?: string;
  children: React.ReactNode;
}

export default function ColorShiftBackground({ className = "", children }: ColorShiftBackgroundProps) {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      
      setBgPosition({ x, y })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  return (
    <motion.div 
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(circle at ${bgPosition.x * 100}% ${bgPosition.y * 100}%, rgba(74, 222, 128, 0.15), rgba(45, 212, 191, 0.05), rgba(20, 184, 166, 0.02))`,
        transition: "background 0.3s ease"
      }}
    >
      {children}
    </motion.div>
  )
}
