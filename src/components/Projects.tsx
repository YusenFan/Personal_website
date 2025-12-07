import { useState } from 'react'
import { ExternalLink, Github, Filter } from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  demo?: string
  website?: string
  category: string
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects: Project[] = [
    {
      title: 'CoverCraft',
      description: 'CoverCraft is a platform that allows you to create your own cover letters for job applications.',
      image: 'https://www.theladders.com/wp-content/uploads/How-to-Write-a-Cover-Letter-Sample-Job-Application-Email-Tips-and-Examples-800x420.jpg',
      technologies: ['React', 'Firebase', 'HitPay', 'Database Design'],
      category: 'fullstack',
      website: "https://covercraft-ai-ivory.vercel.app/",
    },
    {
      title: 'FlintX - Confidential AI Platform',
      description: 'Full end-to-end confidential AI platform with LLM and RAG pipelines deployed within Trusted Execution Environment, ensuring complete data encryption and zero-trust infrastructure.',
      image: 'https://lsvp.com/wp-content/uploads/2023/09/ai.security.lock_.header.png?1700626374',
      technologies: ['Python', 'AWS Nitro Enclave', 'TEE', 'LLM', 'RAG', 'Multimodal AI'],
      demo: "https://flintx.vercel.app/",
      category: 'backend'
    },
    {
      title: 'ProTechs Nutrition',
      description: 'Full-stack online ordering platform with payment integration, admin panel, and inventory management. Deployed across 6 locations with 25% sales increase.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['React', 'Firebase', 'HitPay', 'Database Design'],
      category: 'fullstack',
      website: "www.protechsnutrition.com",
    },
    {
      title: 'Nexus Wrap - NUS FINTECH Hackathon Winner',
      description: '🏆 Award-winning fintech solution implementing atomic swap and conditional wrapping technology on XRP network using Interledger Protocol and smart contracts for HLTC.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      technologies: ['Blockchain', 'XRP', 'Interledger Protocol', 'Smart Contracts', 'HLTC'],
      category: 'backend'
    },
    {
      title: 'Diabetic Foot Ulcer Detection System',
      description: '🏆 Award-winning healthcare technology using YOLOv3 computer vision model with 85%+ accuracy. Real-time detection system with image upload and streaming for remote physician analysis.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      technologies: ['Python', 'YOLOv3', 'Computer Vision', 'Raspberry Pi', 'Real-time Streaming'],
      category: 'fullstack'
    },
    {
      title: 'Trading System Automation',
      description: 'Fully automated trading system with self-signal detection and order execution. Real-time P&L monitoring dashboard with live market data feeds for quantitative trading.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      technologies: ['React', 'Trading APIs', 'Google Cloud Functions', 'Real-time Data'],
      category: 'fullstack'
    },
    {
      title: 'Event Booking System - 10,000+ Guests',
      description: 'Large-scale booking system with Twilio and MailGun integration for real-time notifications. Includes monitoring dashboard and AWS deployment with optimized performance.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
      technologies: ['React', 'AWS EC2', 'Route 53', 'Twilio', 'MailGun', 'Real-time Monitoring'],
      category: 'fullstack'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Blockchain & AI' },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-terminal-green">{'<'}</span>
            <span className="text-gradient">Projects</span>
            <span className="text-terminal-green">{' />'}</span>
          </h2>
          <p className="text-gray-400 text-lg">Things I've built</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <div className="flex items-center gap-2 text-terminal-green">
            <Filter size={20} />
            <span>Filter:</span>
          </div>
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeFilter === filter.id
                  ? 'bg-terminal-blue text-dark-bg shadow-lg shadow-terminal-blue/30'
                  : 'bg-dark-surface text-gray-300 hover:bg-gray-800 border border-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-surface rounded-lg overflow-hidden border border-gray-800 hover:border-terminal-green transition-all hover:card-glow group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-bg opacity-60 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-terminal-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-dark-bg text-terminal-blue rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-terminal-green transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-terminal-blue transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Website</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-terminal-blue transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
