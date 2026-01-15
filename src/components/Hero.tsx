import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const roles = ['AI enthusiast', 'Ex-Founder', 'Explorer']

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const typingSpeed = isDeleting ? 50 : 100

  useEffect(() => {
    const currentRole = roles[roleIndex]
    
    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === '') {
      const timeout = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }, 500)
      return () => clearTimeout(timeout)
    }

    const timer = setTimeout(() => {
      setDisplayText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : currentRole.slice(0, prev.length + 1)
      )
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex, typingSpeed])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-down">
          <div className="mb-4 text-terminal-green text-sm">
            <span className="inline-block animate-pulse">{'>'}</span> Hello, I'm
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-gradient">
            Yusen Fan
          </h1>

          <div className="text-2xl sm:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="text-gray-300">{displayText}</span>
            <span className="animate-pulse text-terminal-green ml-1">|</span>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            Founding Engineer at FlintX | Founder of ProTechs Nutrition |
            NUS Electrical & Computer Engineering
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-terminal-green text-dark-bg font-semibold rounded-lg hover:shadow-lg hover:shadow-terminal-green/50 transition-all hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-terminal-blue text-terminal-blue font-semibold rounded-lg hover:bg-terminal-blue hover:text-dark-bg transition-all hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-terminal-green" />
        </div>
      </div>
    </section>
  )
}

export default Hero
