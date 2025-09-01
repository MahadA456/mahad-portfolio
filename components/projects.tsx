import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, BookOpen, ShoppingCart, Shield } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "BookWorm",
      description:
        "A comprehensive book management application built with Vue.js and Vuex. Features an integrated chatbot for user engagement, book recommendations, and a fully responsive design for seamless reading experiences.",
      icon: <BookOpen className="h-6 w-6" />,
      technologies: ["Vue.js", "Vuex", "XState", "Chatbot Integration", "Responsive Design", "API Integration"],
      github: "https://github.com/MahadA456/BookWorm",
      demo: "#",
      featured: true,
      image: "/modern-book-management-app-interface.png",
    },
    {
      title: "Jewellery E-commerce Platform",
      description:
        "Secure and elegant e-commerce platform for luxury jewelry with advanced product browsing, secure checkout system, and comprehensive order management. Includes Firebase Functions for automated email notifications.",
      icon: <ShoppingCart className="h-6 w-6" />,
      technologies: ["Next.js", "Firebase", "Zustand", "E-commerce", "Payment Integration", "Email Automation"],
      github: "https://github.com/abdullah2310ishaq/ecommerce_jewellery_store",
      demo: "#",
      featured: true,
      image: "/luxury-jewelry-ecommerce-website.png",
    },
    {
      title: "Blockchain Car Management System",
      description:
        "Innovative blockchain-based vehicle registration system ensuring secure and transparent vehicle records. My Final Year Project demonstrating advanced problem-solving skills and cutting-edge blockchain integration.",
      icon: <Shield className="h-6 w-6" />,
      technologies: ["MERN Stack", "Blockchain", "Smart Contracts", "Web3", "Security", "Ethereum"],
      github: "https://github.com/ali051002/Vehicle_Registeration_System_Blockchain",
      demo: "#",
      featured: true,
      image: "/blockchain-vehicle-registration-dashboard.png",
    },
  ]

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground mb-6">
            💼 My Work
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            A curated selection of my most impactful work, showcasing expertise across different technologies and
            innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="lg:flex lg:items-center">
                <div className="lg:w-1/2 p-0">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {project.icon}
                    </div>
                    <h3 className="font-bold text-2xl lg:text-3xl text-foreground">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1 bg-muted/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="flex-1 border-border hover:bg-card bg-transparent">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-bold text-2xl text-foreground mb-4">Interested in working together?</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm always open to discussing new opportunities and innovative projects.
            </p>
            <Button size="lg" className="font-medium px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact" className="flex items-center gap-2">
                Let's Collaborate
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
