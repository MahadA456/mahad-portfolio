import { SideNavigation } from "@/components/side-navigation"
import { InteractiveHero } from "@/components/interactive-hero"
import { VisualTimeline } from "@/components/visual-timeline"
import { ProjectCarousel } from "@/components/project-carousel"
import { FloatingContact } from "@/components/floating-contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SideNavigation />
      <main className="relative">
        <InteractiveHero />
        <VisualTimeline />
        <ProjectCarousel />
      </main>
      <FloatingContact />
    </div>
  )
}
