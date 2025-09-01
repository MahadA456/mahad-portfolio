import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate developer with a strong foundation in computer science and hands-on experience building
            innovative web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-2xl text-foreground">Hello! I'm Mahad Alam Shah</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer based in Islamabad, Pakistan, with a strong foundation in modern
                web technologies. Currently pursuing my BS in Computer Science at Air University, I've gained valuable
                experience through internships at leading tech companies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to create meaningful digital experiences.
                From building responsive web applications to exploring blockchain technology, I'm always eager to learn
                and implement cutting-edge solutions.
              </p>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>

          {/* Education & Quick Facts */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h4 className="font-heading font-semibold text-xl">Education</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground">BS Computer Science</h5>
                    <p className="text-muted-foreground">Air University</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>2021 - 2025</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">F.Sc</h5>
                    <p className="text-muted-foreground">APS Ordinance</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>2019 - 2021</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-heading font-semibold text-xl mb-4">Quick Facts</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Experience:</span>
                    <p className="font-semibold text-foreground">3+ Years</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Projects:</span>
                    <p className="font-semibold text-foreground">15+ Completed</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Specialization:</span>
                    <p className="font-semibold text-foreground">Full Stack</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Focus:</span>
                    <p className="font-semibold text-foreground">Modern Web</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
