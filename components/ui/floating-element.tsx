"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  xOffset?: number;
  yOffset?: number;
}

export default function FloatingElement({
  children,
  delay = 0,
  duration = 3,
  className = "",
  xOffset = 15,
  yOffset = 15
}: FloatingElementProps) {

  const floatingAnimation = {
    y: [yOffset, -yOffset],
    x: [xOffset / 2, -xOffset / 2],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration,
        ease: "easeInOut",
        delay
      },
      x: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: duration * 1.3,
        ease: "easeInOut",
        delay: delay * 1.1
      }
    }
  }

  return (
    <motion.div
      animate={floatingAnimation}
      className={className}
    >
      {children}
    </motion.div>
  )
}
