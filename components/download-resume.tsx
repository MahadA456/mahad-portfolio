"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadResume() {
  const handleDownload = () => {
    // For now, we'll create a simple PDF download link
    // You can replace this with your actual CV file
    const link = document.createElement('a')
    link.href = '/cv-mahad-alam-shah.pdf' // Put your CV in the public folder
    link.download = 'Mahad_Alam_Shah_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button 
      onClick={handleDownload}
      variant="outline"
      size="lg"
      className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/50 hover:border-primary"
    >
      <Download className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:animate-bounce" />
      Download CV
    </Button>
  )
}
