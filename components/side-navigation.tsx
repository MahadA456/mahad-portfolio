"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Home, User, Code, Briefcase, Mail, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
	{ id: "hero", label: "Home", icon: Home },
	{ id: "timeline", label: "Experience", icon: Briefcase },
	{ id: "projects", label: "Projects", icon: Code },
	{ id: "contact", label: "Contact", icon: Mail },
]

export function SideNavigation() {
	const [activeSection, setActiveSection] = useState("hero")
	const [mobileOpen, setMobileOpen] = useState(false)

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
			setActiveSection(sectionId)
			setMobileOpen(false) // close drawer on mobile
		}
	}

	return (
		<>
			{/* Hamburger for mobile */}
			<button
				className="fixed top-4 left-4 z-[100] md:hidden bg-black/80 p-2 rounded-lg border border-gray-800"
				onClick={() => setMobileOpen(true)}
				aria-label="Open navigation menu"
			>
				<Menu className="w-6 h-6 text-white" />
			</button>

			{/* Overlay for mobile drawer */}
			{mobileOpen && (
				<div
					className="fixed inset-0 bg-black/60 z-40 md:hidden"
					onClick={() => setMobileOpen(false)}
				/>
			)}

			{/* Sidebar: always visible on desktop, drawer on mobile */}
			<nav
				className={`
          fixed left-0 top-0 h-full z-50 bg-black/95 backdrop-blur-lg border-r border-gray-800 w-64
          transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
			>
				<div className="flex flex-col h-full py-8">
					<div className="px-6 mb-8">
						<motion.div
							className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<span className="text-primary-foreground font-bold text-xl">
								M
							</span>
						</motion.div>
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

					{/* Theme Toggle */}
					<div className="px-6 py-4">
						<div className="flex items-center justify-between">
							<span className="text-sm text-muted-foreground">Theme</span>
							<ThemeToggle />
						</div>
					</div>

					<div className="px-6">
						<div className="text-xs text-muted-foreground">
							© 2025 Mahad Shah
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}
