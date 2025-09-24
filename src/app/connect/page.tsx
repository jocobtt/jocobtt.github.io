// src/app/connect/page.tsx
export default function Connect() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
              Let's Connect!
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              I love chatting about tech, MLOps, data science, or just about anything interesting. 
              Hit me up if you want to connect!
            </p>
          </div>

          {/* Contact Methods */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif text-center">
              Find Me Here
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/jacob-braswell/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-blue-50 hover:bg-blue-100 rounded-lg p-8 transition-all duration-300 border-2 border-transparent hover:border-blue-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 rounded-lg p-3 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      LinkedIn
                    </h3>
                    <p className="text-gray-600 mt-1">Best for professional stuff</p>
                  </div>
                </div>
                <div className="mt-4 text-blue-600 group-hover:text-blue-700 font-medium flex items-center">
                  Connect on LinkedIn
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/jocobtt"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 hover:bg-gray-100 rounded-lg p-8 transition-all duration-300 border-2 border-transparent hover:border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-800 rounded-lg p-3 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      GitHub
                    </h3>
                    <p className="text-gray-600 mt-1">Some of my projects and contributions</p>
                  </div>
                </div>
                <div className="mt-4 text-gray-700 group-hover:text-gray-800 font-medium flex items-center">
                  View my code
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              {/* Twitter/X */}
              <a
                href="https://x.com/brazz_j"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-sky-50 hover:bg-sky-100 rounded-lg p-8 transition-all duration-300 border-2 border-transparent hover:border-sky-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-black rounded-lg p-3 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                      Twitter/X
                    </h3>
                    <p className="text-gray-600 mt-1">Quick thoughts and updates</p>
                  </div>
                </div>
                <div className="mt-4 text-sky-600 group-hover:text-sky-700 font-medium flex items-center">
                  Follow me on X
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          </section>

          {/* Response Time */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900">Response Time</h3>
            </div>
            <p className="text-gray-700 text-lg">
              I usually respond within a day or two. Looking forward to hearing from you! 
              <span className="text-2xl ml-2">👋</span>
            </p>
          </div>

          {/* Additional CTAs */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Want to see what I've been working on?
            </p>
            <div className="space-x-4">
              <a 
                href="/resume" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View My Resume
              </a>
              <a 
                href="/about" 
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}