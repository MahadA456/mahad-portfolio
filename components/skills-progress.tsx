"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface SkillBarProps {
  skill: string
  percentage: number
  color?: string
  delay?: number
}

export function SkillBar({ skill, percentage, color = "bg-primary", delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full ${color} rounded-full relative`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </div>
  )
}

export function SkillsSection() {
  const skills = [
    { name: "React.js", percentage: 95, color: "bg-blue-500" },
    { name: "Next.js", percentage: 90, color: "bg-black" },
    { name: "Vue.js", percentage: 85, color: "bg-green-500" },
    { name: "Angular", percentage: 80, color: "bg-red-500" },
    { name: "Node.js", percentage: 88, color: "bg-green-600" },
    { name: "TypeScript", percentage: 92, color: "bg-blue-600" },
    { name: "MongoDB", percentage: 85, color: "bg-green-700" },
    { name: "PostgreSQL", percentage: 80, color: "bg-blue-700" },
  ]

  return (
    <section className="py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficiency levels in various technologies and frameworks I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillBar
                skill={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                delay={index * 0.2}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
