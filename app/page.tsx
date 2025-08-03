"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Terminal, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import ParticleBackground from "@/components/ui/particle-background"
import FloatingElement from "@/components/ui/floating-element"
import AnimatedCodeBlock from "@/components/ui/animated-code-block"
import ColorShiftBackground from "@/components/ui/color-shift-background"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skills = [
  { name: "PHP", icon: "/icons/php.svg", color: "bg-purple-600" },
  { name: "Laravel", icon: "/icons/laravel.svg", color: "bg-red-500" },
  { name: "JavaScript", icon: "/icons/javascript.svg", color: "bg-yellow-500" },
  { name: "React", icon: "/icons/react.svg", color: "bg-blue-500" },
  { name: "Node.js", icon: "/icons/nodejs.svg", color: "bg-green-600" },
  { name: "MySQL", icon: "/icons/mysql.svg", color: "bg-blue-700" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "bg-blue-800" },
  { name: "Git", icon: "/icons/git.svg", color: "bg-orange-500" },
  { name: "HTML", icon: "/icons/html.svg", color: "bg-orange-600" },
  { name: "CSS", icon: "/icons/css.svg", color: "bg-blue-400" },
  { name: "Java", icon: "/icons/java.svg", color: "bg-red-600" },
  { name: "C", icon: "/icons/c.svg", color: "bg-gray-600" },
]

const projects = [
  {
    title: "E-Commerce Laravel App",
    description: "Full-stack e-commerce solution built with Laravel and MySQL",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Laravel", "PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/anouar36",
    live: "#",
  },
  {
    title: "React Task Manager",
    description: "Task management application with React and Node.js backend",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["React", "Node.js", "JavaScript", "PostgreSQL"],
    github: "https://github.com/anouar36",
    live: "#",
  },
  {
    title: "Java Console Application",
    description: "Console-based application demonstrating OOP principles in Java",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Java", "C", "Git", "GitHub"],
    github: "https://github.com/anouar36",
    live: "#",
  },
]

const experience = [
  {
    title: "Full Stack Development Student",
    company: "YouCode",
    period: "2023 - Present",
    description: "Learning modern web development technologies including PHP, Laravel, React, and Node.js",
  },
  {
    title: "University Student",
    company: "UMS6P",
    period: "2022 - Present",
    description: "Pursuing higher education while developing programming skills",
  },
  {
    title: "Self-Taught Developer",
    company: "Personal Projects",
    period: "2021 - 2023",
    description: "Started learning programming with C, Java, and web technologies",
  },
  {
    title: "Beginner Programmer",
    company: "Learning Journey",
    period: "2020 - 2021",
    description: "First steps into programming and computer science fundamentals",
  },
]

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <ParticleBackground />
      
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-green-400">
              Anouar Ech-Charai
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-green-400 transition-colors cursor-pointer"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-green-400 text-lg"
              >
                Hello, I'm
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold">
                Anouar Ech-Charai
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-2xl lg:text-3xl text-gray-300">
                Full Stack Developer
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-lg">
                I create exceptional digital experiences with modern technologies. Passionate about clean code and
                innovative solutions.
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-green-400 font-semibold mb-2">School</h4>
                  <p className="text-xl font-bold">YouCode</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-green-400 font-semibold mb-2">University</h4>
                  <p className="text-xl font-bold">UMS6P</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex space-x-4">
                <Button className="bg-green-500 hover:bg-green-600">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  onClick={() => window.open("mailto:anouarechcharai@gmail.com", "_blank")}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex space-x-6 pt-4">
                {[
                  { Icon: Github, url: "https://github.com/anouar36" },
                  { Icon: Linkedin, url: "https://www.linkedin.com/in/anouar-ech-charai-965a5a331/" },
                  { Icon: Mail, url: "mailto:anouarechcharai@gmail.com" },
                  { Icon: Phone, url: "tel:+212639383709" },
                ].map(({ Icon, url }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex justify-center">
              <FloatingElement delay={0.2} duration={4} yOffset={10}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="w-80 h-80 rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-900 p-4">
                      <Image
                        src="anouar.png"
                        alt="Anouar Ech-Charai"
                        width={300}
                        height={300}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <Code className="text-white" size={24} />
                  </motion.div>
                  
                  {/* Small decorative elements */}
                  <motion.div
                    className="absolute -left-8 top-1/4 w-6 h-6 bg-blue-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 right-1/4 w-8 h-8 bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: 2,
                    }}
                  />
                  <motion.div
                    className="absolute -right-12 bottom-1/3 w-4 h-4 bg-purple-500 rounded-full"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                </motion.div>
              </FloatingElement>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              About <span className="text-green-400">Me</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate Full Stack Developer student at YouCode and UMS6P. I specialize in modern web
                  technologies including PHP, Laravel, JavaScript, React, and Node.js. I love turning complex problems
                  into simple, beautiful solutions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, working on personal projects, or
                  contributing to the developer community. I'm always eager to learn and grow as a developer.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Experience</h4>
                    <p className="text-2xl font-bold">2+ Years</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Projects</h4>
                    <p className="text-2xl font-bold">15+ Completed</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <AnimatedCodeBlock className="w-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <ColorShiftBackground className="rounded-2xl p-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                My <span className="text-green-400">Skills</span>
              </h2>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:border-green-500 transition-colors"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold">{skill.name}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </ColorShiftBackground>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Featured <span className="text-green-400">Projects</span>
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <FloatingElement key={project.title} delay={index * 0.2} duration={5} yOffset={8} xOffset={4}>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500 transition-colors"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                        <Button size="sm" variant="outline">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        <Button size="sm" className="bg-green-500 hover:bg-green-600">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-green-500/20 text-green-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </FloatingElement>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Work <span className="text-green-400">Experience</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-500"></div>
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex items-start mb-12"
                  >
                    <div className="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900"></div>
                    <div className="ml-16 bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                      <div className="flex items-center mb-2">
                        <Calendar className="text-green-400 mr-2" size={16} />
                        <span className="text-green-400 text-sm">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-gray-400 mb-3">{exp.company}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center relative"
          >
            {/* Animated decorative elements */}
            <motion.div 
              className="absolute -top-10 left-1/4 w-20 h-20 rounded-full bg-green-500/10"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute top-20 right-1/4 w-16 h-16 rounded-full bg-blue-500/10"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, -180, -360]
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <h2 className="text-4xl font-bold mb-8">
              Get In <span className="text-green-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. Let's create something amazing
              together!
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg px-8 py-4 relative overflow-hidden group"
                onClick={() => window.open("mailto:anouarechcharai@gmail.com", "_blank")}
              >
                <motion.span
                  className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full"
                  animate={{ translateX: ["100%", "-100%"] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "mirror", 
                    duration: 1.5, 
                    ease: "easeInOut"
                  }}
                />
                <Mail className="mr-2 h-5 w-5" />
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Anouar Ech-Charai. Built with Next.js and Framer Motion.</p>
        </div>
      </footer>
    </div>
  )
}
