import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const roles = ['AI Enthusiast', 'Ex-Founder', 'Explorer']

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 rounded-2xl blur opacity-30"></div>
              <div className="relative">
                <img
                  src="/personal.JPG"
                  alt="Yusen Fan"
                  className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Code Editor Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-2xl"
          >
            {/* Code editor window */}
            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Window header with traffic lights */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                <span className="ml-4 text-sm text-slate-500 font-mono">portfolio.tsx</span>
              </div>

              {/* Editor content */}
              <div className="p-6 sm:p-8">
                <div className="mb-4 text-emerald-600 text-sm font-mono">
                  <span className="inline-block">{'>'}</span> Hello, I'm
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
                  Yusen Fan
                </h1>

                <div className="text-xl sm:text-2xl mb-6 h-10 flex items-center font-mono">
                  <span className="text-slate-700">{displayText}</span>
                  <span className="animate-pulse text-primary ml-1">|</span>
                </div>

                <div className="text-slate-500 mb-8 font-mono text-sm space-y-1">
                  <p><span className="text-slate-400">{'//'}</span> Founding Engineer at FlintX</p>
                  <p><span className="text-slate-400">{'//'}</span> Founder of ProTechs Nutrition</p>
                  <p><span className="text-slate-400">{'//'}</span> NUS Electrical & Computer Engineering</p>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover hover:shadow-button-hover transition-all"
                  >
                    View My Work
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-primary hover:text-primary transition-all"
                  >
                    Get In Touch
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-primary" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
