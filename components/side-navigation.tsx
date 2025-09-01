"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Home, User, Code, Briefcase, Mail } from "lucide-react"

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "timeline", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code },
  { id: "contact", label: "Contact", icon: Mail },
]

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState("hero")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <nav className="fixed left-0 top-0 h-full z-50 bg-black/95 backdrop-blur-lg border-r border-gray-800 w-64">
      <div className="flex flex-col h-full py-8">
        <div className="px-6 mb-8">
          
        </div>

        <div className="flex-1 space-y-2 px-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            )
          })}
        </div>

        <div className="px-6">
          <div className="text-xs text-muted-foreground">
            © 2025 Mahad Shah
          </div>
        </div>
      </div>
    </nav>
  )
}
