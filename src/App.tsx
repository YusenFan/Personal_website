import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Terminal from './components/Terminal'

function App() {
  const [showTerminal, setShowTerminal] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '`') {
        setShowTerminal(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className="min-h-screen relative">
      <Navigation />

      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>

      {showTerminal && (
        <Terminal onClose={() => setShowTerminal(false)} />
      )}

      {/* Light theme background effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-blue-100 opacity-40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-100 opacity-40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-violet-100 opacity-30 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default App
