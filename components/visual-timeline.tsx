"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Award, Code } from "lucide-react"
import { Card } from "@/components/ui/card"

const timelineData = [
  {
    year: "2025",
    title: "Intern Developer",
    company: "Biome (XFlowResearch)",
    location: "Islamabad, Pakistan",
    description:
      "Learning TypeScript for scalable, type-safe applications. Developing with Angular 2 for dynamic web interfaces. Contributing to frontend projects to improve user experiences.",
    icon: Code,
    color: "primary",
  },
  {
    year: "2024-2025",
    title: "Intern Developer",
    company: "GenEd",
    location: "Islamabad, Pakistan",
    description:
      "Developed a web app with Next.js (responsive, UX-focused). Integrated GraphQL with PostgreSQL for an LMS project. Delivered 2 production-ready websites with modern design.",
    icon: Award,
    color: "secondary",
  },
  {
    year: "2024",
    title: "Intern Developer",
    company: "Teresol Pvt. Ltd",
    location: "Islamabad, Pakistan",
    description:
      "Built Vue.js apps with enhanced interactivity. Created Node.js & Express APIs with MongoDB & Firebase integration. Applied XState for scalable state management.",
    icon: Calendar,
    color: "primary",
  },
  {
    year: "2021-2025",
    title: "BS Computer Science Graduate",
    company: "Air University",
    location: "Islamabad, Pakistan",
    description:
      "Currently pursuing Bachelor's degree in Computer Science. Specializing in software engineering, web technologies, and modern development frameworks.",
    icon: MapPin,
    color: "secondary",
  },
]

export function VisualTimeline() {
  return (
    <section id="timeline" className="py-20 ml-64 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From Graduate to developer, here's my professional journey in technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${isEven ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                      <div className="space-y-4">
                        <div className={`flex items-center gap-3 ${isEven ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`p-2 rounded-lg ${item.color === "primary" ? "bg-primary/20" : "bg-secondary/20"}`}
                          >
                            <Icon
                              className={`w-5 h-5 ${item.color === "primary" ? "text-primary" : "text-secondary"}`}
                            />
                          </div>
                          <span
                            className={`text-sm font-medium px-3 py-1 rounded-full ${
                              item.color === "primary" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
                            }`}
                          >
                            {item.year}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-lg font-semibold text-primary mt-1">{item.company}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </p>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </Card>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10">
                    <motion.div
                      className={`w-4 h-4 rounded-full border-4 border-background ${
                        item.color === "primary" ? "bg-primary" : "bg-secondary"
                      }`}
                      whileInView={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <blockquote className="text-2xl font-medium text-foreground italic max-w-3xl mx-auto">
            "Code is like humor. When you have to explain it, it's bad."
          </blockquote>
          <p className="text-muted-foreground mt-4">— Cory House</p>
        </motion.div>
      </div>
    </section>
  )
}
