import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here (e.g., EmailJS, Formspree, etc.)
    console.log('Form submitted:', formData)
    alert('Thanks for reaching out! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/yusenfan',
      color: 'hover:text-slate-800'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/yusenfan',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Phone',
      icon: <Phone className="w-6 h-6" />,
      url: 'tel:+6584038810',
      color: 'hover:text-emerald-600'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:YusenFan@u.nus.edu',
      color: 'hover:text-primary'
    }
  ]

  return (
    <section id="contact" className="py-20">
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
            <span className="text-gradient">Get In Touch</span>
            <span className="text-slate-400 font-mono">{' />'}</span>
          </h2>
          <p className="text-slate-600 text-lg">Let's work together on your next project</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl border border-slate-200 shadow-card"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary font-mono">
              $ send_message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-700 mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-slate-800 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-700 mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-slate-800 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-700 mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none text-slate-800 resize-none transition-all"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover hover:shadow-button-hover transition-all"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-card"
            >
              <h3 className="text-2xl font-bold mb-6 text-accent-indigo font-mono">
                $ contact_info
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                    <a
                      href="mailto:YusenFan@u.nus.edu"
                      className="text-slate-600 hover:text-primary transition-colors"
                    >
                      YusenFan@u.nus.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Location</h4>
                    <p className="text-slate-600">
                      Singapore
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-card"
            >
              <h3 className="text-2xl font-bold mb-6 text-accent-indigo font-mono">
                $ social_links
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -2 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg transition-all hover:border-primary text-slate-600 ${social.color} group`}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    <span className="font-semibold">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-700 font-semibold">Available for work</span>
              </div>
              <p className="text-slate-600 text-sm">
                Currently open to freelance opportunities and full-time positions
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center text-slate-500"
        >
          <p className="mb-2">
            <span className="text-emerald-600 font-mono">$</span>
          </p>
          <p className="text-sm">
            © 2024 Yusen Fan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
