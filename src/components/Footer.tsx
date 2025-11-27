export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4">Sumit Mishra</h3>
            <p className="text-gray-400">
              Data Analyst & Finance Professional dedicated to transforming data into strategic insights.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Expertise</h4>
            <div className="space-y-2 text-gray-400">
              <p>Data Analysis</p>
              <p>Financial Analytics</p>
              <p>Business Intelligence</p>
              <p>Strategic Planning</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sumit Mishra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
