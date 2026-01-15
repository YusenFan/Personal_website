import { useState } from 'react'
import { Briefcase, Calendar, ChevronDown } from 'lucide-react'

interface ExperienceItem {
  company: string
  position: string
  period: string
  description: string[]
  technologies: string[]
}

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const experiences: ExperienceItem[] = [
    {
      company: 'FlintX',
      position: 'Founding Engineer',
      period: 'October 2024 - Present',
      description: [
        'Architected zero-trust infrastructure and led initial product development for confidential LLM platform',
        'Deployed LLM and RAG pipelines within Trusted Execution Environment with end-to-end encryption',
        'Extended LLM with multimodal capabilities implementing embedding and indexing pipelines for diverse data types',
        'Served as project management head using Jira for task tracking and milestone delivery',
      ],
      technologies: ['Python', 'AWS Nitro Enclave', 'TEE', 'LLM', 'RAG', 'Jira']
    },
    {
      company: 'ProTechs Nutrition Pte. Ltd.',
      position: 'Founder & CEO',
      period: 'April 2023 - Present',
      description: [
        'Developed and self-hosted full-stack online order system deployed across 6 locations in Singapore',
        'Built staff-facing admin panel with full CRUD functionality for product and inventory management',
        'Designed scalable database architecture supporting bundle sales, achieving 25% increase in product sales',
      ],
      technologies: ['React', 'Firebase', 'HitPay', 'Full-Stack']
    },
    {
      company: 'Classkick',
      position: 'Software Engineer Intern',
      period: 'February 2025 - August 2025',
      description: [
        'Optimized database query performance by eliminating N+1 query problems',
        'Transformed legacy desktop web application into fully responsive platform with 95%+ cross-browser compatibility',
        'Collaborated with growth engineering to develop user acquisition features',
        'Architected email campaign service using Scala with comprehensive test suites',
      ],
      technologies: ['JavaScript', 'Scala', 'Database Optimization', 'Responsive Design']
    },
    {
      company: 'Dempsey Capital',
      position: 'Software Engineer Intern',
      period: 'October 2024 - February 2025',
      description: [
        'Built company website from scratch using React with responsive design',
        'Developed comprehensive visualization dashboard for monitoring transactions and P&L in real-time',
        'Transitioned trading system to fully automated self-signal detection and order execution',
      ],
      technologies: ['React', 'Trading Systems', 'Google Cloud Functions', 'Real-time Dashboards']
    },
    {
      company: 'Wave Therapeutics',
      position: 'Firmware Engineer Intern',
      period: 'August 2024 - February 2025',
      description: [
        'Developed cross-platform mobile application using React Native for iOS and Android',
        'Programmed ESP32 microcontroller with BLE communication and multi-threading',
        'Deployed local LLM using Ollama for business research and decision-making',
      ],
      technologies: ['React Native', 'ESP32', 'BLE', 'Ollama', 'KiCAD']
    },
    {
      company: 'Codesurance Pte. Ltd.',
      position: 'Software Engineer Intern',
      period: 'October 2022 - February 2023',
      description: [
        'Led development of large-scale booking system for 10,000+ guest event with Twilio and MailGun integration',
        'Engineered backend infrastructure with cloud database architecture deployed on AWS EC2',
        'Developed real-time monitoring dashboard while optimizing network traffic for performance',
      ],
      technologies: ['React', 'AWS EC2', 'Route 53', 'Twilio', 'MailGun']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-terminal-green">{'<'}</span>
            <span className="text-gradient">Experience</span>
            <span className="text-terminal-green">{' />'}</span>
          </h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-terminal-blue to-terminal-green"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-terminal-green rounded-full border-4 border-dark-surface z-10 animate-pulse"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div
                    className="bg-dark-bg p-6 rounded-lg border border-gray-800 hover:border-terminal-green transition-all hover:card-glow cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="text-terminal-blue w-5 h-5" />
                        <h3 className="text-xl font-bold text-terminal-green">
                          {exp.position}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`text-terminal-green w-5 h-5 transition-transform duration-300 ${
                          expandedItems.has(index) ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    <h4 className="text-lg font-semibold text-gray-200 mb-2 text-left">
                      {exp.company}
                    </h4>

                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedItems.has(index) ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="space-y-2 mb-4 text-gray-300 text-left">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-terminal-blue mt-1">{'>'}</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs bg-gray-800 text-terminal-blue rounded-full border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
