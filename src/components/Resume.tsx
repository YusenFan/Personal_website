import { Download, FileText, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'
import html2pdf from 'html2pdf.js'

const Resume = () => {
  const handleDownload = async () => {
    try {
      // Fetch the HTML content
      const htmlResponse = await fetch('/index-pm.html')
      const htmlText = await htmlResponse.text()

      // Fetch the CSS content
      const cssResponse = await fetch('/style.css')
      const cssText = await cssResponse.text()

      // Create a temporary container
      const tempContainer = document.createElement('div')
      tempContainer.innerHTML = htmlText

      // Inject the CSS into the HTML
      const styleElement = document.createElement('style')
      styleElement.textContent = cssText
      tempContainer.insertBefore(styleElement, tempContainer.firstChild)

      // Configure PDF options
      const options = {
        margin: [10, 10, 10, 10] as [number, number, number, number],
        filename: 'Simon_Fan_Resume.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait' as const
        }
      }

      // Generate and download PDF
      await html2pdf().set(options).from(tempContainer).save()
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to generate PDF. Please try again.')
    }
  }

  const handleView = () => {
    // Replace with your actual resume link or viewer
    window.open('/index-pm.html', '_blank')
  }

  const stats = [
    { label: 'Companies Worked', value: '6' },
    { label: 'Award Wins', value: '2' },
    { label: 'Technologies', value: '15+' },
    { label: 'Business Locations', value: '6' },
  ]

  return (
    <section id="resume" className="py-20 bg-slate-50">
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
            <span className="text-gradient">Resume</span>
            <span className="text-slate-400 font-mono">{' />'}</span>
          </h2>
          <p className="text-slate-600 text-lg">Download or view my resume</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <FileText className="w-32 h-32 text-primary opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Simon Fan - Resume
              </h3>
              <p className="text-slate-600">
                Software Engineer | Founding Engineer at FlintX | NUS ECE Student
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover hover:shadow-button-hover transition-all"
              >
                <Download size={20} />
                Download PDF
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleView}
                className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-primary hover:text-primary transition-all"
              >
                <Eye size={20} />
                View Online
              </motion.button>
            </div>

            <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-sm text-slate-600 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-mono">{'>'}</span>
                  <span>Updated regularly with latest experience and skills</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-mono">{'>'}</span>
                  <span>Available in PDF format for easy sharing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-mono">{'>'}</span>
                  <span>ATS-friendly formatting</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-card text-center"
              >
                <div className="text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Resume
