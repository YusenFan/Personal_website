import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const About = () => {
 

  return (
    <section id="about" className="py-20 bg-slate-50">
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
            <span className="text-gradient">About Me</span>
            <span className="text-slate-400 font-mono">{' />'}</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            I love to design and build products that help people live better lives.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-xl border border-slate-200 shadow-card"
        >
          <h3 className="text-2xl font-bold mb-4 text-emerald-600 font-mono">$ whoami</h3>
          <div className="space-y-4 text-slate-700">
            <p>
              <span className="text-primary font-mono">{'>'}</span> I'm currently pursuing a Bachelor's in Electrical
              and Computer Engineering at the National University of Singapore. My experience spans from building
              confidential AI platforms to founding a successful nutrition startup with 6 locations across Singapore.
            </p>
            <p>
              <span className="text-primary font-mono">{'>'}</span> I've worked across diverse domains including confidential
              computing, quantitative trading systems, healthcare technology, and fintech. I've won hackathon awards and
              led projects that serve thousands of users.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
