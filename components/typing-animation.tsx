"use client"

import { useEffect, useState } from "react"

interface TypingAnimationProps {
  texts: string[]
  speed?: number
  className?: string
}

export function TypingAnimation({ texts, speed = 100, className = "" }: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const targetText = texts[currentTextIndex]
    
    if (isTyping) {
      if (currentText.length < targetText.length) {
        const timer = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1))
        }, speed)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => setIsTyping(false), 2000)
        return () => clearTimeout(timer)
      }
    } else {
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, speed / 2)
        return () => clearTimeout(timer)
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }
    }
  }, [currentText, currentTextIndex, isTyping, texts, speed])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
