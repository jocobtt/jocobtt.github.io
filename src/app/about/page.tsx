// src/app/about/page.tsx
import Image from 'next/image'

const currentWork = [
  {
    label: 'Fine-tuning Foundation Models',
    detail: 'Closing the gap between a general-purpose model and one that actually understands a specific domain well enough to trust.',
  },
  {
    label: 'Sovereign AI & GPU Infrastructure',
    detail: 'Designing for environments where data never leaves the building and every dependency has to be accounted for.',
  },
  {
    label: 'Agentic AI Architectures',
    detail: 'A system that takes action on its own only earns that trust once you can show it acts correctly, consistently.',
  },
  {
    label: 'Model Explainability & Evaluation',
    detail: 'The unglamorous work that determines whether anything above this line can actually be relied on in production.',
  },
  {
    label: 'LLMOps / MLOps',
    detail: "Getting a model from 'it works on my machine' to something that serves real traffic reliably.",
  },
  {
    label: 'Infrastructure as Code',
    detail: 'Every deployment reproducible and auditable — no snowflake environments, no tribal knowledge.',
  },
]

export default function About() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-stone-900 mb-6 font-serif">About</h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg prose-stone max-w-none">
            {/* Introduction */}
            <div className="text-lg leading-relaxed space-y-6 text-stone-700">
              <p>
                I have always been passionate about technology and have been fascinated by the endless
                possibilities it brings. From a young age, I have been tinkering with computers and have
                enjoyed learning about the world around me and how tech can be used to solve problems.
                That curiosity eventually led me to a degree in statistics and a career that&apos;s taken
                me from building ML pipelines at SAS and Collibra to designing MLOps platforms at Booz Allen,
                and now to the frontier work I&apos;m doing at Seekr.
              </p>

              <p>
                As a <span className="font-semibold text-amber-700">Senior AI Solutions Engineer at Seekr</span>,
                I work at the intersection of model development and the infrastructure that has to run it
                safely and reliably. What that looks like day-to-day is below.
              </p>

              <p>
                Outside of work, I keep building — recent side projects have pushed me further into
                full-stack territory with Vue and React, deployed on Vercel. Shipping something real
                is still the fastest way I know to test whether an idea actually holds up.
              </p>
            </div>

            {/* Current Work Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-stone-900 mb-6 font-serif">What I&apos;m Currently Building</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {currentWork.map((item) => (
                  <div key={item.label} className="bg-white rounded-lg p-5 border border-stone-200 hover:border-amber-300 hover:shadow-sm transition-all">
                    <h3 className="font-semibold text-stone-900 mb-1">{item.label}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Interests Section */}
            <div className="mt-10 flex items-start gap-3 text-stone-600 text-base border-t border-stone-200 pt-6">
              <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <p>
                Outside of work: running and hiking trails, cooking, and biking around the DC area —
                which also offers easy access to public transit for exploring both the city and
                the outdoors.
              </p>
            </div>

            {/* Iceland Image */}
            <div className="mt-10 text-center">
              <div className="relative inline-block">
                <Image
                  src="/img/Iceland.jpg"
                  alt="Hiking in Iceland - one of my favorite outdoor adventures"
                  width={640}
                  height={687}
                  className="rounded-xl shadow-lg max-w-sm mx-auto"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm">
                  Hiking in Iceland
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-stone-900 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 font-serif">Let&apos;s Connect!</h2>
            <p className="text-stone-300 mb-6 text-lg">
              Interested in chatting about AI, infrastructure, or potential opportunities?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/connect"
                className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/resume"
                className="inline-block bg-stone-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-stone-600 transition-colors"
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
