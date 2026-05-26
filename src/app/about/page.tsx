// src/app/about/page.tsx
import Image from 'next/image'

const currentWork = [
  {
    label: 'Fine-tuning Foundation Models',
    detail: 'Data pipelines, PEFT/LoRA, instruction tuning, and alignment for domain-specific use cases.',
  },
  {
    label: 'Sovereign AI & GPU Infrastructure',
    detail: 'Secure, air-gapped deployments on hardened GPU clusters — sovereignty as a first-class requirement.',
  },
  {
    label: 'Agentic AI Architectures',
    detail: 'Autonomous systems with self-improvement loops, effective tool use, and measurable task completion.',
  },
  {
    label: 'Model Explainability & Evaluation',
    detail: 'Building evals that actually catch failures — tool-use measurement, attribution, and behavioral drift.',
  },
  {
    label: 'LLMOps / MLOps',
    detail: 'Production inference with KServe and vLLM on Kubernetes, paired with GitOps delivery workflows.',
  },
  {
    label: 'Infrastructure as Code',
    detail: 'Terraform modules and Helm charts for repeatable, auditable platform deployments.',
  },
]

export default function About() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-stone-900 mb-6 font-serif">Howdy!</h1>
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
                I spend my days fine-tuning foundation models, configuring GPU infrastructure for secure
                environments, and building <span className="font-semibold">Sovereign AI deployments</span> —
                systems designed to operate with full data residency control, no external API dependence,
                and compliance from the ground up. I also get deep into the question of how you actually
                measure whether an agentic system is doing the right things — effective tool use,
                model explainability, and behavioral evaluation are areas I think about constantly.
              </p>

              <p>
                Outside of work, I keep building. Recent side projects have pushed me further into
                full-stack territory with Vue and React, deployed on Vercel — building things that ship
                is the fastest feedback loop I know.
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
            <div className="mt-12 bg-amber-50 rounded-xl p-8 border border-amber-100">
              <h2 className="text-2xl font-bold text-stone-900 mb-6 font-serif">When I&apos;m Not Coding</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Hobbies */}
                <div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    What I Love Doing
                  </h3>
                  <div className="space-y-2">
                    {['Running & exploring trails', 'Cooking & trying new recipes', 'Biking around the city', 'Being outdoors & hiking'].map((h) => (
                      <div key={h} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></span>
                        <span className="text-stone-700">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Food */}
                <div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Favorite Foods
                  </h3>
                  <div className="space-y-2">
                    {['Oyakodon (Japanese comfort food)', 'Daal (Indian lentil curry)', 'Chirashizushi (Japanese rice bowl)'].map((f) => (
                      <div key={f} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                        <span className="text-stone-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mt-8 text-lg leading-relaxed text-stone-700">
              <p>
                I currently live in the DC area and enjoy the access to public transit and the running
                trails that this area offers. There&apos;s something special about being able to explore
                both urban environments and natural spaces so easily.
              </p>
            </div>

            {/* Blog Mission */}
            <div className="mt-12 bg-stone-100 rounded-xl p-8 border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-4 font-serif">About This Site</h2>
              <p className="text-lg text-stone-700 mb-4">
                On this site, I&apos;ll be sharing experiences, insights, and lessons from the frontier
                of AI engineering — the practical stuff that doesn&apos;t always make it into blog posts
                or conference talks. Things like what actually breaks in production, how to think about
                model evaluation, and what it means to build AI systems that people can trust.
              </p>

              <h3 className="text-lg font-semibold text-stone-900 mb-3">Topics I&apos;ll Cover:</h3>
              <div className="flex flex-wrap gap-3">
                {['LLMOps', 'Fine-tuning', 'Agentic AI', 'Sovereign AI', 'Model Evaluation', 'Cloud-Native', 'DevOps', 'Side Projects'].map((topic) => (
                  <span
                    key={topic}
                    className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm font-medium border border-amber-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Closing */}
            <div className="mt-8 text-lg text-center text-stone-700">
              <p className="mb-6">
                Thanks for stopping by — always happy to chat.
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
                  className="rounded-xl shadow-lg"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm">
                  Hiking in Iceland
                </div>
              </div>
              <p className="text-stone-500 text-sm mt-4 italic">
                One of my favorite hiking adventures — exploring the landscapes of Iceland
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-stone-900 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 font-serif">Let&apos;s Connect!</h2>
            <p className="text-stone-300 mb-6 text-lg">
              Interested in chatting about AI, infrastructure, side projects, or the DC trail system?
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
