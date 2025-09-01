import { TopNavigation } from "@/components/top-navigation"
import { InteractiveHero } from "@/components/interactive-hero"
import { VisualTimeline } from "@/components/visual-timeline"
import { ProjectCarousel } from "@/components/project-carousel"
import { FloatingContact } from "@/components/floating-contact"
import { ScrollProgress } from "@/components/scroll-progress"
import { SkillsSection } from "@/components/skills-progress"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <TopNavigation />
      <main className="relative">
        <InteractiveHero />
        <VisualTimeline />
        <SkillsSection />
        <ProjectCarousel />
      </main>
      <FloatingContact />
    </div>
  )
}
