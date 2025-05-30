"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedCodeBlockProps {
  className?: string;
}

const codeLines = [
  { text: 'function createPortfolio() {', delay: 0 },
  { text: '  const skills = ["PHP", "Laravel", "React"];', delay: 0.3 },
  { text: '  const passion = "Web Development";', delay: 0.6 },
  { text: '  ', delay: 0.9 },
  { text: '  return {', delay: 1.2 },
  { text: '    name: "Anouar Ech-Charai",', delay: 1.5 },
  { text: '    title: "Full Stack Developer",', delay: 1.8 },
  { text: '    skills,', delay: 2.1 },
  { text: '    passion', delay: 2.4 },
  { text: '  };', delay: 2.7 },
  { text: '}', delay: 3 },
]

export default function AnimatedCodeBlock({ className = "" }: AnimatedCodeBlockProps) {
  return (
    <div className={`bg-gray-900 p-6 rounded-lg border border-gray-700 font-mono text-sm overflow-hidden ${className}`}>
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-xs text-gray-500">portfolio.js</div>
      </div>
      
      <div className="space-y-1">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: line.delay,
              ease: "easeOut"
            }}
            className="flex"
          >
            <span className="text-gray-500 w-6 inline-block">{index + 1}</span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: line.delay + 0.2
              }}
              className="text-green-400 ml-2"
            >
              {line.text}
            </motion.span>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            transition: {
              repeat: Infinity,
              duration: 1,
              delay: 3.5
            }
          }}
          className="inline-block w-3 h-5 bg-green-400 ml-8 mt-1"
        />
      </div>
    </div>
  )
}
