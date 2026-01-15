import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

interface Skill {
  name: string
  level: number
  category: string
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 95, category: 'frontend' },
    { name: 'React Native', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'Node.js', level: 90, category: 'frontend' },

    // Backend & Languages
    { name: 'Python', level: 95, category: 'backend' },
    { name: 'Scala', level: 80, category: 'backend' },
    { name: 'PHP', level: 75, category: 'backend' },
    { name: 'Bash/Shell', level: 85, category: 'backend' },

    // Database & Infrastructure
    { name: 'PostgreSQL', level: 85, category: 'tools' },
    { name: 'Firebase', level: 90, category: 'tools' },
    { name: 'MySQL', level: 85, category: 'tools' },
    // DevOps & Cloud
    { name: 'AWS (EC2, S3, KMS)', level: 90, category: 'tools' },
    { name: 'Docker', level: 85, category: 'tools' },
    { name: 'Linux/Ubuntu', level: 90, category: 'tools' },
    { name: 'Git', level: 95, category: 'tools' },
    { name: 'Jira', level: 85, category: 'tools' },
  ]

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend & Mobile' },
    { id: 'backend', label: 'Backend & Languages' },
    { id: 'tools', label: 'DevOps & Infrastructure' },
  ]

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20">
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
            <span className="text-gradient">Skills</span>
            <span className="text-slate-400 font-mono">{' />'}</span>
          </h2>
          <p className="text-slate-600 text-lg">Technologies and tools I work with</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${activeCategory}`}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-card hover:shadow-card-hover hover:border-primary transition-all group"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <span className="text-primary font-bold font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="bg-gradient-to-r from-primary to-accent-indigo h-full rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 font-mono">
            <span className="text-emerald-600">$</span> Always learning and expanding my skillset...
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
