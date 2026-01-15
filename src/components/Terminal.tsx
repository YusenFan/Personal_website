import { useState, useEffect, useRef } from 'react'
import { X, Minimize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Command {
  input: string
  output: string[]
}

const Terminal = ({ onClose }: { onClose: () => void }) => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<Command[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
    setHistory([
      {
        input: 'welcome',
        output: [
          'Welcome to Yusen\'s interactive terminal!',
          '',
          'Available commands:',
          '  help       - Show available commands',
          '  about      - Learn more about me',
          '  skills     - View my technical skills',
          '  projects   - See my projects',
          '  contact    - Get my contact info',
          '  github     - Open my GitHub profile',
          '  linkedin   - Open my LinkedIn profile',
          '  clear      - Clear the terminal',
          '  exit       - Close the terminal',
          '',
          'Tip: Use Ctrl + ` to toggle terminal',
        ]
      }
    ])
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const commands: Record<string, string[]> = {
    help: [
      'Available commands:',
      '  help       - Show this help message',
      '  about      - Learn more about me',
      '  skills     - View my technical skills',
      '  projects   - See my projects',
      '  contact    - Get my contact info',
      '  github     - Open my GitHub profile',
      '  linkedin   - Open my LinkedIn profile',
      '  clear      - Clear the terminal',
      '  exit       - Close the terminal',
    ],
    about: [
      'About Me:',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'I\'m Yusen Fan, a Founding Engineer at FlintX working on confidential',
      'AI infrastructure. I\'m also the Founder & CEO of ProTechs Nutrition,',
      'with 6 locations across Singapore.',
      '',
      'Currently pursuing Electrical & Computer Engineering at NUS.',
      'I specialize in building secure, scalable systems and have won',
      'multiple hackathon awards for innovative projects.',
    ],
    skills: [
      'Technical Skills:',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'Languages:     Python, TypeScript, JavaScript, Scala, PHP, Bash',
      'Frontend:      React, React Native, Node.js, Express.js',
      'Backend:       Python, Scala, REST APIs, LLM, RAG Pipelines',
      'Database:      PostgreSQL, Firebase, MySQL, Redis',
      'Infrastructure: AWS (EC2, Nitro Enclave, S3, KMS), Docker, Linux',
      'Specialties:   Confidential Computing, TEE, System Architecture',
    ],
    projects: [
      'Featured Projects:',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '1. FlintX - Confidential AI Platform',
      '   Full end-to-end confidential LLM with TEE',
      '   Tech: Python, AWS Nitro Enclave, LLM, RAG',
      '',
      '2. Nexus Wrap - NUS FINTECH Hackathon Winner',
      '   Blockchain atomic swap on XRP network',
      '   Tech: Blockchain, Interledger Protocol, Smart Contracts',
      '',
      '3. Diabetic Foot Ulcer Detection System',
      '   85%+ accuracy healthcare AI system',
      '   Tech: YOLOv3, Computer Vision, Raspberry Pi',
      '',
      'Visit the Projects section to see more!',
    ],
    contact: [
      'Contact Information:',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'Email:    YusenFan@u.nus.edu',
      'Phone:    +65 84038810',
      'GitHub:   github.com/yusenfan',
      'LinkedIn: linkedin.com/in/yusenfan',
      'Location: Singapore',
      '',
      'Feel free to reach out for opportunities or collaborations!',
    ],
    github: ['Opening GitHub profile...'],
    linkedin: ['Opening LinkedIn profile...'],
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (trimmedCmd === 'clear') {
      setHistory([])
      return
    }

    if (trimmedCmd === 'exit') {
      onClose()
      return
    }

    let output: string[]

    if (trimmedCmd === '') {
      output = ['']
    } else if (trimmedCmd === 'github') {
      window.open('https://github.com/yusenfan', '_blank')
      output = commands.github
    } else if (trimmedCmd === 'linkedin') {
      window.open('https://www.linkedin.com/in/yusenfan', '_blank')
      output = commands.linkedin
    } else if (commands[trimmedCmd]) {
      output = commands[trimmedCmd]
    } else {
      output = [
        `Command not found: ${trimmedCmd}`,
        'Type "help" to see available commands.',
      ]
    }

    setHistory([...history, { input: cmd, output }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput('')
      setHistoryIndex(-1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex].input)
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex].input)
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/30 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-4xl h-[600px] bg-white border border-slate-300 rounded-xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-100 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              <span className="ml-4 text-emerald-600 font-semibold font-mono">
                yusen@portfolio:~$
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Minimize2 size={18} />
              </button>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="flex-1 overflow-y-auto p-4 font-mono text-sm bg-slate-50"
          >
            {history.map((cmd, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center gap-2 text-emerald-600">
                  <span>{'>'}</span>
                  <span className="text-slate-700">{cmd.input}</span>
                </div>
                <div className="mt-1 ml-4 text-slate-600">
                  {cmd.output.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-emerald-600">{'>'}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-slate-700"
                autoFocus
              />
              <span className="animate-pulse text-slate-800">|</span>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Terminal
