// src/app/about/page.tsx
import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">Howdy!</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            {/* Introduction */}
            <div className="text-lg leading-relaxed space-y-6 text-gray-700">
              <p>
                I have always been passionate about technology and have been fascinated by the endless 
                possibilities it brings. From a young age, I have been tinkering with computers and have 
                enjoyed learning about the world around me and how tech can be used to solve problems. 
                This curiosity and love for technology eventually led me to pursue a degree in statistics 
                and start my career in the tech industry.
              </p>

              <p>
                Throughout my career, I have had the opportunity to work on a wide variety of projects 
                and have gained valuable experience in fields such as finance, education, marketing, 
                and information technology. In my current role, I am an Senior AI Solutions Engineer at{' '}
                <span className="font-semibold text-blue-600">Seekr</span> where I get to 
                work on exciting projects and continue learning every day.
              </p>
            </div>

            {/* Personal Interests Section */}
            <div className="mt-12 bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">When I'm Not Coding</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Hobbies */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    What I Love Doing
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-700">Running & exploring trails</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-700">Cooking & trying new recipes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-700">Biking around the city</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-700">Being outdoors & hiking</span>
                    </div>
                  </div>
                </div>

                {/* Food */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Favorite Foods
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">Oyakodon (Japanese comfort food)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">Daal (Indian lentil curry)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">Chirashizushi (Japanese rice bowl)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mt-8 text-lg leading-relaxed text-gray-700">
              <p>
                I currently live in the DC area and enjoy the access to public transit and the running 
                trails that this area offers. There's something special about being able to explore 
                both urban environments and natural spaces so easily.
              </p>
            </div>

            {/* Blog Mission */}
            <div className="mt-12 bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">About This Site</h2>
              <p className="text-lg text-gray-700 mb-4">
                On this site, I will be sharing my experiences, insights, and lessons learned from my 
                journey in the tech industry. I hope that my stories and insights will be helpful and 
                inspiring to others who are also interested in technology.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Topics I'll Cover:</h3>
              <div className="flex flex-wrap gap-3">
                {['MLOps', 'LLM/Generative AI', 'Agentic AI', 'Cloud Computing', 'DevOps', 'Data Science', 'Tech Career', 'Learning'].map((topic) => (
                  <span 
                    key={topic}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Closing */}
            <div className="mt-8 text-lg text-center text-gray-700">
              <p className="mb-6">
                Thank you for stopping by and I can't wait to share more with you!
              </p>
            </div>

            {/* Iceland Image */}
            <div className="mt-12 text-center">
              <div className="relative inline-block">
                <Image
                  src="/img/Iceland.png"
                  alt="Hiking in Iceland - one of my favorite outdoor adventures"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm">
                  Hiking in Iceland 🏔️
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 italic">
                One of my favorite hiking adventures - exploring the beautiful landscapes of Iceland
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gray-900 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 font-serif">Let's Connect!</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Interested in chatting about tech, sharing experiences, or just saying hi?
            </p>
            <div className="space-x-4">
              <a 
                href="/connect" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="/resume" 
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}