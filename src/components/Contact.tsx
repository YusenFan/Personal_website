import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

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
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/yusenfan',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Phone',
      icon: <Phone className="w-6 h-6" />,
      url: 'tel:+6584038810',
      color: 'hover:text-sky-400'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:YusenFan@u.nus.edu',
      color: 'hover:text-terminal-green'
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-terminal-green">{'<'}</span>
            <span className="text-gradient">Get In Touch</span>
            <span className="text-terminal-green">{' />'}</span>
          </h2>
          <p className="text-gray-400 text-lg">Let's work together on your next project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-dark-surface p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-terminal-green">
              $ send_message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-terminal-green focus:outline-none text-gray-100 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-terminal-green focus:outline-none text-gray-100 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-terminal-green focus:outline-none text-gray-100 resize-none transition-colors"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-terminal-green text-dark-bg font-semibold rounded-lg hover:shadow-lg hover:shadow-terminal-green/50 transition-all hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-dark-surface p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-terminal-blue">
                $ contact_info
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="text-terminal-green w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Email</h4>
                    <a
                      href="mailto:YusenFan@u.nus.edu"
                      className="text-gray-400 hover:text-terminal-green transition-colors"
                    >
                      YusenFan@u.nus.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-terminal-green w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Location</h4>
                    <p className="text-gray-400">
                      Singapore
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-dark-surface p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-terminal-blue">
                $ social_links
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 bg-dark-bg border border-gray-700 rounded-lg transition-all hover:border-terminal-green ${social.color} group`}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    <span className="font-semibold text-gray-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-terminal-blue/20 to-terminal-green/20 p-6 rounded-lg border border-terminal-green/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-terminal-green rounded-full animate-pulse"></div>
                <span className="text-terminal-green font-semibold">Available for work</span>
              </div>
              <p className="text-gray-300 text-sm">
                Currently open to freelance opportunities and full-time positions
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-400">
          <p className="mb-2">
            <span className="text-terminal-green">$</span> 
          </p>
          <p className="text-sm">
            © 2024 Yusen Fan. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
