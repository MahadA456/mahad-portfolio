"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "BookWorm - Book Management System",
    description:
      "A comprehensive book management platform built with Vue.js and Vuex. Features include fully responsive design with integrated chatbot for user engagement, book cataloging, and reading progress tracking.",
    image: "/modern-book-management-app-interface.png",
    technologies: ["Vue.js", "Vuex", "XState", "Node.js", "Chatbot Integration"],
    liveUrl: "https://bookwormfinal-gij4.vercel.app/",
    githubUrl: "https://github.com/MahadA456/bookwormfinal.git",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Jewellery E-commerce",
    description:
      "An elegant e-commerce platform for luxury jewelry built with Next.js and Firebase. Features secure product browsing, checkout, order management, and Firebase Functions for email notifications.",
    image: "/luxury-jewelry-ecommerce-website.png",
    technologies: ["Next.js", "Firebase", "Zustand", "Firebase Functions", "Email Notifications"],
    liveUrl: "https://ecommerce-jewellery-store.vercel.app/",
    githubUrl: "https://github.com/abdullah2310ishaq/ecommerce_jewellery_store.git",
    category: "E-commerce",
    featured: true,
  },
  {
    id: 3,
    title: "Blockchain Car Management System (FYP)",
    description:
      "Revolutionary vehicle registration and management system using blockchain technology with MERN stack. Ensures transparency, security, and immutable records for vehicle ownership and history.",
    image: "/blockchain-vehicle-registration-dashboard.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Blockchain", "Solidity"],
    liveUrl: "https://securechain-inky.vercel.app/",
    githubUrl: "https://github.com/ali051002/Vehicle_Registeration_System_Blockchain.git",
    category: "Blockchain",
    featured: true,
  },
 
  {
    id: 4,
    title: "BridgeIt",
    description:
      "Connecting freelancer Graduates and employers for seamless project collaboration and opportunities including project tracking, messaging, and secure payments.",
    image: "/ai-analytics-dashboard.png",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "TypeScript", ".NET Core"],
    liveUrl: "bridgeit-cyan.vercel.app",
    githubUrl: "https://github.com/abdullah2310ishaq/bridgeit.git",
    category: "Full Stack",
    featured: false,
  },
]

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Full Stack", "E-commerce", "Blockchain"]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  const currentProject = filteredProjects[currentIndex]

  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            Explore my latest work showcasing innovative solutions and cutting-edge technologies
          </p>

          {/* GitHub Profile Button */}
          <div className="mb-6 md:mb-8">
            <Button
              onClick={() => window.open('https://github.com/MahadA456', '_blank')}
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground group"
            >
              <Github className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              View All Projects on GitHub
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 px-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentIndex(0)
                }}
                className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Main Project Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center"
            >
              {/* Project Image */}
              <div className="relative group order-2 lg:order-1">
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border">
                  <div className="relative aspect-video">
                    <img
                      src={currentProject.image || "/placeholder.svg"}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs sm:text-sm">
                          <Play className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="outline" className="bg-background/80">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Project Details */}
              <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
                <div>
                  {currentProject.featured && (
                    <Badge className="mb-3 bg-secondary/20 text-secondary border-secondary/30 text-xs sm:text-sm">Featured Project</Badge>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 md:mb-4">{currentProject.title}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{currentProject.description}</p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {currentProject.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 text-xs sm:text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto" asChild>
                    <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent w-full sm:w-auto"
                    asChild
                  >
                    <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-8 md:mt-12 px-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground bg-transparent h-8 w-8 sm:h-10 sm:w-10"
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>

            <div className="flex gap-1.5 sm:gap-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary scale-125" : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground bg-transparent h-8 w-8 sm:h-10 sm:w-10"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>

        {/* Project Grid Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <Card
                  className={`overflow-hidden bg-card/30 backdrop-blur-sm border transition-all duration-300 ${
                    index === currentIndex
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="aspect-video relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground mb-2 line-clamp-1">{project.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
