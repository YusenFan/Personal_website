import { Download, FileText, Eye } from 'lucide-react'
import html2pdf from 'html2pdf.js'

const Resume = () => {
  const handleDownload = async () => {
    try {
      // Fetch the HTML content
      const htmlResponse = await fetch('/index-swe.html')
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
        filename: 'Yusen_Fan_Resume.pdf',
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
    window.open('/index-swe.html', '_blank')
  }

  return (
    <section id="resume" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-terminal-green">{'<'}</span>
            <span className="text-gradient">Resume</span>
            <span className="text-terminal-green">{' />'}</span>
          </h2>
          <p className="text-gray-400 text-lg">Download or view my resume</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-dark-bg p-8 rounded-lg border border-gray-800 hover:border-terminal-green transition-all">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <FileText className="w-32 h-32 text-terminal-green opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-terminal-green" />
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-2">
                Yusen Fan - Resume
              </h3>
              <p className="text-gray-400">
                Software Engineer | Founding Engineer at FlintX | NUS ECE Student
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-terminal-green text-dark-bg font-semibold rounded-lg hover:shadow-lg hover:shadow-terminal-green/50 transition-all hover:scale-105"
              >
                <Download size={20} />
                Download PDF
              </button>
              <button
                onClick={handleView}
                className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-terminal-blue text-terminal-blue font-semibold rounded-lg hover:bg-terminal-blue hover:text-dark-bg transition-all hover:scale-105"
              >
                <Eye size={20} />
                View Online
              </button>
            </div>

            <div className="mt-8 p-4 bg-dark-surface rounded border border-gray-700">
              <div className="text-sm text-gray-400 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-terminal-green">{'>'}</span>
                  <span>Updated regularly with latest experience and skills</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-terminal-green">{'>'}</span>
                  <span>Available in PDF format for easy sharing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-terminal-green">{'>'}</span>
                  <span>ATS-friendly formatting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Companies Worked', value: '6' },
              { label: 'Award Wins', value: '2' },
              { label: 'Technologies', value: '15+' },
              { label: 'Business Locations', value: '6' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-dark-bg p-4 rounded-lg border border-gray-800 text-center"
              >
                <div className="text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
