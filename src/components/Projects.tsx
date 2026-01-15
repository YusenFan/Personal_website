import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  demo?: string
  website?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'DreamWaver',
      description: 'DreamWaver is a platform that allows user create children playbook base on their kids images.',
      image: 'https://m.media-amazon.com/images/I/81pu1w9queL.jpg',
      technologies: ['React', 'Firebase', 'HitPay', 'Database Design'],
      website: "https://dreamweaver-storybooks.vercel.app/",
    },
    {
      title: 'Site Translator',
      description: 'Design for site workers for their meeting',
      image: '/public/sitetranslator.JPG',
      technologies: ['React','TTS', 'AI Models'],
      website: "https://site-translator.onrender.com",
    },
    {
      title: 'CoverCraft',
      description: 'CoverCraft is a platform that allows you to create your own cover letters for job applications.',
      image: 'https://www.theladders.com/wp-content/uploads/How-to-Write-a-Cover-Letter-Sample-Job-Application-Email-Tips-and-Examples-800x420.jpg',
      technologies: ['React', 'Firebase', 'HitPay', 'Database Design'],
      website: "https://covercraft-ai-ivory.vercel.app/",
    },
    {
      title: 'FlintX - Confidential AI Platform',
      description: 'Full end-to-end confidential AI platform with LLM and RAG pipelines deployed within Trusted Execution Environment, ensuring complete data encryption and zero-trust infrastructure.',
      image: 'https://lsvp.com/wp-content/uploads/2023/09/ai.security.lock_.header.png?1700626374',
      technologies: ['Python', 'AWS Nitro Enclave', 'TEE', 'LLM', 'RAG', 'Multimodal AI'],
      demo: "https://flintx.vercel.app/",
    },
    {
      title: 'ProTechs Nutrition',
      description: 'Full-stack online ordering platform with payment integration, admin panel, and inventory management. Deployed across 6 locations with 25% sales increase.',
      image: '/public/ptlogo.JPG',
      technologies: ['React', 'Firebase', 'HitPay', 'Database Design'],
      website: "www.protechsnutrition.com",
    },
    {
      title: 'Nexus Wrap - NUS FINTECH Hackathon Winner',
      description: 'Award-winning fintech solution implementing atomic swap and conditional wrapping technology on XRP network using Interledger Protocol and smart contracts for HLTC.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      technologies: ['Blockchain', 'XRP', 'Interledger Protocol', 'Smart Contracts', 'HLTC'],
    },
    {
      title: 'Diabetic Foot Ulcer Detection System',
      description: 'Award-winning healthcare technology using YOLOv3 computer vision model with 85%+ accuracy. Real-time detection system with image upload and streaming for remote physician analysis.',
      image: '/public/dibeticfoot.JPG',
      technologies: ['Python', 'YOLOv3', 'Computer Vision', 'Raspberry Pi', 'Real-time Streaming'],
    },
    {
      title: 'Trading System Automation',
      description: 'Fully automated trading system with self-signal detection and order execution. Real-time P&L monitoring dashboard with live market data feeds for quantitative trading.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      technologies: ['React', 'Trading APIs', 'Google Cloud Functions', 'Real-time Data'],
    },
    {
      title: 'Event Booking System - 10,000+ Guests',
      description: 'Large-scale booking system with Twilio and MailGun integration for real-time notifications. Includes monitoring dashboard and AWS deployment with optimized performance.',
      image: '/public/MBS.JPG',
      technologies: ['React', 'AWS EC2', 'Route 53', 'Twilio', 'MailGun', 'Real-time Monitoring'],
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-slate-400 font-mono">{'<'}</span>
            <span className="text-gradient">Projects</span>
            <span className="text-slate-400 font-mono">{' />'}</span>
          </h2>
          <p className="text-slate-600 text-lg">Things I've built</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:border-primary transition-all group"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1 p-6 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs bg-slate-100 text-slate-700 rounded-full font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2.5 py-1 text-xs bg-slate-100 text-slate-500 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 transition-colors text-sm"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors text-sm"
                      >
                        <ExternalLink size={18} />
                        <span>Website</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors text-sm"
                      >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
