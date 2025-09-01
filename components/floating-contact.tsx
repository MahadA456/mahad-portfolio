"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MessageCircle, X, Send, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.target as HTMLFormElement)
    formData.append("access_key", "0bf91992-bb1f-4c79-b2f3-46d49000f7cb")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus('success')
        // Reset form after successful submission
        setFormData({ name: "", email: "", subject: "", message: "" })
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsOpen(false)
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      {/* Floating Contact Button */}
      <motion.div
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-12 h-12 sm:w-16 sm:h-16 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 animate-glow"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </motion.div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-2 sm:inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl z-50"
            >
              <Card className="h-full md:h-auto bg-card/95 backdrop-blur-lg border-border shadow-2xl">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground">Get In Touch</h2>
                      <p className="text-sm sm:text-base text-muted-foreground">Let's discuss your next project</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="rounded-full hover:bg-accent"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      {/* Contact Info */}
                      <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Contact Information</h3>
                          <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/20">
                                <Mail className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <p className="text-foreground">mahadalam3@gmail.com</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-secondary/20">
                                <Phone className="w-4 h-4 text-secondary" />
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Phone</p>
                                <p className="text-foreground">0311-5285948</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/20">
                                <MapPin className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Location</p>
                                <p className="text-foreground">Islamabad, Pakistan</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                            Response Time
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            I typically respond within 24 hours. For urgent matters, feel free to call directly.
                          </p>
                        </div>
                      </div>

                      {/* Contact Form */}
                      <div className="order-1 md:order-2">
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your name"
                                required
                                className="bg-input border-border focus:border-primary text-sm sm:text-base"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="your@email.com"
                                required
                                className="bg-input border-border focus:border-primary text-sm sm:text-base"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="subject" className="text-sm sm:text-base">Subject</Label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              placeholder="Project inquiry, collaboration, etc."
                              required
                              className="bg-input border-border focus:border-primary text-sm sm:text-base"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Tell me about your project or how I can help..."
                              rows={4}
                              required
                              className="bg-input border-border focus:border-primary resize-none text-sm sm:text-base"
                            />
                          </div>

                          {/* Status Messages */}
                          {submitStatus === 'success' && (
                            <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/30">
                              <p className="text-green-400 text-xs sm:text-sm">Message sent successfully! I'll get back to you soon.</p>
                            </div>
                          )}
                          
                          {submitStatus === 'error' && (
                            <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30">
                              <p className="text-red-400 text-xs sm:text-sm">Failed to send message. Please try again or email me directly.</p>
                            </div>
                          )}

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                            size="lg"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                              </>
                            )}
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact Section for scrolling */}
      <section id="contact" className="py-12 md:py-20 md:ml-64 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing
              people.
            </p>
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 text-base md:text-lg animate-glow w-auto"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
