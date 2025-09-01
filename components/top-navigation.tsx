"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, Code, Briefcase, Mail, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
	{ id: "hero", label: "Home", icon: Home },
	{ id: "timeline", label: "Experience", icon: Briefcase },
	{ id: "projects", label: "Projects", icon: Code },
	{ id: "contact", label: "Contact", icon: Mail },
]

export function TopNavigation() {
	const [activeSection, setActiveSection] = useState("hero")
	const [mobileOpen, setMobileOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
			setActiveSection(sectionId)
			setMobileOpen(false)
		}
	}

	return (
		<>
			{/* Main Navigation Bar */}
			<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled 
					? "bg-background/80 backdrop-blur-md border-b border-border/50" 
					: "bg-transparent"
			}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="flex items-center"
						>
							<h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
								Mahad Shah
							</h1>
						</motion.div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							{navItems.map((item, index) => {
								const Icon = item.icon
								const isActive = activeSection === item.id
								return (
									<motion.button
										key={item.id}
										onClick={() => scrollToSection(item.id)}
										className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
											isActive
												? "bg-primary/10 text-primary"
												: "text-muted-foreground hover:text-foreground hover:bg-accent/50"
										}`}
										initial={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Icon size={18} />
										<span className="font-medium">{item.label}</span>
									</motion.button>
								)
							})}
						</div>

						{/* Theme Toggle & Mobile Menu */}
						<div className="flex items-center gap-4">
							<ThemeToggle />
							
							{/* Mobile Menu Button */}
							<button
								className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
								onClick={() => setMobileOpen(!mobileOpen)}
								aria-label="Toggle navigation menu"
							>
								{mobileOpen ? (
									<X className="w-6 h-6" />
								) : (
									<Menu className="w-6 h-6" />
								)}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50"
					>
						<div className="px-4 py-4 space-y-2">
							{navItems.map((item) => {
								const Icon = item.icon
								const isActive = activeSection === item.id
								return (
									<button
										key={item.id}
										onClick={() => scrollToSection(item.id)}
										className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
											isActive
												? "bg-primary/10 text-primary"
												: "text-muted-foreground hover:text-foreground hover:bg-accent/50"
										}`}
									>
										<Icon size={20} />
										<span className="font-medium">{item.label}</span>
									</button>
								)
							})}
						</div>
					</motion.div>
				)}
			</nav>

			{/* Spacer for fixed navigation */}
			<div className="h-16" />
		</>
	)
}
