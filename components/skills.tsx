import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Angular 2+",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "GraphQL", "RESTful APIs", "Server Actions", "Middleware"],
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "SQL", "Database Design", "Query Optimization"],
    },
    {
      title: "State Management",
      icon: "🔄",
      skills: ["Redux", "Zustand", "XState", "Context API", "Vuex", "State Machines"],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Vercel", "Firebase Functions", "Blockchain", "Web3", "Responsive Design"],
    },
    {
      title: "Soft Skills",
      icon: "🧠",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Project Management",
        "Code Review",
        "Mentoring",
        "Agile Development",
      ],
    },
  ]

  return (
    <section id="skills" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit for building modern, scalable, and user-friendly applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl md:text-2xl">{category.icon}</span>
                  <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Highlight */}
        <div className="mt-16 text-center">
          <h3 className="font-heading font-semibold text-2xl text-foreground mb-8">Primary Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              { name: "React", color: "bg-blue-500" },
              { name: "Next.js", color: "bg-black" },
              { name: "Node.js", color: "bg-green-600" },
              { name: "MongoDB", color: "bg-green-500" },
              { name: "TypeScript", color: "bg-blue-600" },
              { name: "Tailwind", color: "bg-cyan-500" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-200"
              >
                <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                <span className="font-medium text-card-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
