"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground mb-4">
              👋 Welcome to my digital space
            </div>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-balance leading-tight">
              <span className="text-foreground">I'm </span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                Mahad Alam Shah
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Computer Science Graduate & Full Stack Developer
            </p>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Computer Science Graduate crafting exceptional digital experiences with modern technologies. Specializing in React, Vue.js, Next.js, Angular,
            and the MERN stack with a passion for innovation and blockchain technology.
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["React", "Vue.js", "Next.js", "Angular", "Node.js", "MongoDB", "TypeScript", "XState", "Firebase", "GraphQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="font-medium px-8 py-3 text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-medium px-8 py-3 text-lg border-border hover:bg-card bg-transparent"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-8 pt-8">
            <a
              href="https://github.com/MahadA456"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/mahad-alam-shah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:mahadalam3@gmail.com"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-2 rounded-full bg-card/50 backdrop-blur-sm border border-border">
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
