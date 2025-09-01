import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Intern Developer",
      company: "Biome (XFlowResearch)",
      location: "Islamabad",
      period: "Jul 2025 – Ongoing",
      current: true,
      description:
        "Currently learning TypeScript for scalable, type-safe applications and developing with Angular 2 for dynamic web interfaces. Contributing to frontend projects to improve user experiences.",
      technologies: ["TypeScript", "Angular 2", "Frontend Development", "User Experience"],
    },
    {
      title: "Intern Developer",
      company: "GenEd",
      location: "Islamabad",
      period: "Oct 2024 – Jan 2025",
      current: false,
      description:
        "Developed a responsive web application with Next.js focusing on user experience. Integrated GraphQL with PostgreSQL for an LMS project and delivered 2 production-ready websites with modern design.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "LMS Development", "Responsive Design"],
    },
    {
      title: "Intern Developer",
      company: "Teresol Pvt. Ltd",
      location: "Islamabad",
      period: "Jun 2024 – Aug 2024",
      current: false,
      description:
        "Built Vue.js applications with enhanced interactivity and created Node.js & Express APIs with MongoDB & Firebase integration. Applied XState for scalable state management solutions.",
      technologies: ["Vue.js", "Node.js", "Express.js", "MongoDB", "Firebase", "XState"],
    },
  ]

  return (
    <section id="experience" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Building expertise through hands-on experience at innovative tech companies.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col gap-4 md:gap-6">
                  {/* Main Content */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-heading font-bold text-lg md:text-xl text-foreground">{exp.title}</h3>
                        {exp.current && <Badge className="bg-primary text-primary-foreground text-xs">Current</Badge>}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 flex-shrink-0" />
                          <span className="font-semibold text-foreground text-sm md:text-base">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm md:text-base">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm md:text-base">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
