"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export function Contact() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "mahadalam3@gmail.com",
      href: "mailto:mahadalam3@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "0311-5285948",
      href: "tel:03115285948",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/MahadA456",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mahad-alam-shah",
    },
  ]

  return (
    <section id="contact" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">Get In Touch</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="order-2 lg:order-1">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="font-heading text-xl md:text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="h-10 md:h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="h-10 md:h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="h-10 md:h-11"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="md:min-h-[120px]"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/30">
                    <p className="text-green-400">Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/30">
                    <p className="text-red-400">Failed to send message. Please try again or email me directly.</p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full font-medium disabled:opacity-50 h-12 md:h-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 order-1 lg:order-2">
            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="font-heading text-xl md:text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 md:gap-4">
                    <div className="p-2 md:p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">{info.icon}</div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="font-medium text-foreground hover:text-primary transition-colors duration-200 break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground break-words">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="font-heading text-xl md:text-2xl">Follow Me</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 md:p-4 bg-card border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex-1 justify-center sm:justify-start"
                    >
                      {social.icon}
                      <span className="font-medium text-sm md:text-base">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="font-heading font-semibold text-lg md:text-xl mb-3 md:mb-4">Let's Build Something Great</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  I'm always excited to work on new projects and collaborate with talented individuals. Whether you need
                  a full-stack web application, a modern frontend, or technical consultation, I'm here to help bring
                  your vision to life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
