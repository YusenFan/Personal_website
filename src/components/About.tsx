import { Code2, Lightbulb, Rocket, Users } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my priority'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Problem Solver',
      description: 'Love tackling complex challenges with creative solutions'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Fast Learner',
      description: 'Constantly learning new technologies and best practices'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Player',
      description: 'Collaborative mindset with strong communication skills'
    }
  ]

  return (
    <section id="about" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-terminal-green">{'<'}</span>
            <span className="text-gradient">About Me</span>
            <span className="text-terminal-green">{' />'}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            I'm a passionate software engineer with experience across confidential computing, full-stack development,
            and entrepreneurship. Currently working as a Founding Engineer at FlintX, building secure AI infrastructure
            within Trusted Execution Environments. I love solving complex problems and building scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-dark-bg p-6 rounded-lg border border-gray-800 hover:border-terminal-green transition-all hover:card-glow group"
            >
              <div className="text-terminal-blue mb-4 group-hover:text-terminal-green transition-colors">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                {highlight.title}
              </h3>
              <p className="text-gray-400">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-dark-bg p-8 rounded-lg border border-gray-800">
          <h3 className="text-2xl font-bold mb-4 text-terminal-green">$ whoami</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              <span className="text-terminal-blue">{'>'}</span> I'm currently pursuing a Bachelor's in Electrical
              and Computer Engineering at the National University of Singapore. My experience spans from building
              confidential AI platforms to founding a successful nutrition startup with 6 locations across Singapore.
            </p>
            <p>
              <span className="text-terminal-blue">{'>'}</span> I've worked across diverse domains including confidential
              computing, quantitative trading systems, healthcare technology, and fintech. I've won hackathon awards and
              led projects that serve thousands of users.
            </p>
            <p>
              <span className="text-terminal-blue">{'>'}</span> I specialize in architecting scalable infrastructure,
              optimizing performance, and building secure systems. I'm passionate about leveraging technology to solve
              real-world problems and create meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
