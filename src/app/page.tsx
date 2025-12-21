// src/app/page.tsx (Home page)
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Jacob Braswell
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            An AI Engineer & Tech Enthusiast
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Welcome to my personal website. I&apos;m passionate about machine learning operations,
            cloud computing, and building scalable data solutions. Explore my background, experience,
            and feel free to connect with me.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Card */}
            <div className="bg-white rounded-lg shadow-sm border p-8 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">About Me</h2>
              <p className="text-gray-600 mb-6">
                Learn about my background, experience, and passion for technology and data science.
              </p>
              <Link
                href="/about"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Resume Card */}
            <div className="bg-white rounded-lg shadow-sm border p-8 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Resume</h2>
              <p className="text-gray-600 mb-6">
                View my professional experience, skills, and educational background.
              </p>
              <Link
                href="/resume"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Resume
              </Link>
            </div>

            {/* Connect Card */}
            <div className="bg-white rounded-lg shadow-sm border p-8 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Connect</h2>
              <p className="text-gray-600 mb-6">
                Get in touch with me through various professional and social channels.
              </p>
              <Link
                href="/connect"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
