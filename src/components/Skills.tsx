import { useState } from 'react'

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
    { name: 'Express.js', level: 90, category: 'backend' },

    // Database & Infrastructure
    { name: 'PostgreSQL', level: 85, category: 'tools' },
    { name: 'Firebase', level: 90, category: 'tools' },
    { name: 'MySQL', level: 85, category: 'tools' },
    { name: 'Redis', level: 80, category: 'tools' },

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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-terminal-green">{'<'}</span>
            <span className="text-gradient">Skills</span>
            <span className="text-terminal-green">{' />'}</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-terminal-green text-dark-bg shadow-lg shadow-terminal-green/30'
                  : 'bg-dark-surface text-gray-300 hover:bg-gray-800 border border-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-surface p-6 rounded-lg border border-gray-800 hover:border-terminal-green transition-all group"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-100 group-hover:text-terminal-green transition-colors">
                  {skill.name}
                </h3>
                <span className="text-terminal-blue font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-terminal-blue to-terminal-green h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    animation: 'slideIn 1s ease-out'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            <span className="text-terminal-green">$</span> Always learning and expanding my skillset...
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
