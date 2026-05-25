// src/app/page.tsx (Home page)
import Link from 'next/link'

const focusAreas = [
  {
    title: 'Fine-tuning & Foundation Models',
    description: 'Adapting foundation models for domain-specific tasks — from data curation to PEFT/LoRA and instruction alignment.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'amber',
  },
  {
    title: 'Sovereign AI & GPU Infrastructure',
    description: 'Designing secure, air-gapped AI deployments on hardened GPU clusters for compliance-sensitive environments.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'orange',
  },
  {
    title: 'Agentic AI Architectures',
    description: 'Building autonomous, self-improving agent systems — measuring tool use, explainability, and real-world performance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'yellow',
  },
  {
    title: 'LLMOps & Production Serving',
    description: 'Optimizing inference at scale with vLLM and KServe in cloud-native Kubernetes environments.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    color: 'stone',
  },
  {
    title: 'Infrastructure as Code',
    description: 'Crafting repeatable, auditable infrastructure with Terraform and Helm — from GPU nodes to full platform stacks.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'red',
  },
  {
    title: 'Full-Stack Side Projects',
    description: 'Shipping side projects with Vue and React on Vercel — because the best way to stay sharp is to keep building.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    color: 'warm',
  },
]

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  amber:  { bg: 'bg-amber-50',   icon: 'text-amber-700',   border: 'border-amber-200' },
  orange: { bg: 'bg-orange-50',  icon: 'text-orange-700',  border: 'border-orange-200' },
  yellow: { bg: 'bg-yellow-50',  icon: 'text-yellow-700',  border: 'border-yellow-200' },
  stone:  { bg: 'bg-stone-100',  icon: 'text-stone-600',   border: 'border-stone-300' },
  red:    { bg: 'bg-red-50',     icon: 'text-red-700',     border: 'border-red-200' },
  warm:   { bg: 'bg-amber-100',  icon: 'text-amber-800',   border: 'border-amber-300' },
}

export default function Home() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b border-stone-200">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-4 font-serif">
            Jacob Braswell
          </h1>
          <p className="text-xl md:text-2xl text-amber-700 font-semibold max-w-2xl mx-auto mb-6">
            Senior AI Solutions Engineer
          </p>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto leading-relaxed mb-10">
            I build and ship AI systems that actually work in production — fine-tuning models,
            running GPU infrastructure, designing agentic architectures, and obsessing over
            how to measure whether any of it is doing what we think it is.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
            {['Seekr', 'Fine-tuning', 'Sovereign AI', 'Agentic Systems', 'LLMOps', 'KServe · vLLM', 'Terraform · Helm'].map((tag) => (
              <span key={tag} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full border border-stone-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Current Focus Areas */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-2 font-serif text-center">What I&apos;m Working On</h2>
          <p className="text-stone-500 text-center mb-12">Current focus areas at Seekr and beyond</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => {
              const colors = colorMap[area.color]
              return (
                <div
                  key={area.title}
                  className={`${colors.bg} border ${colors.border} rounded-xl p-6 hover:shadow-md transition-shadow`}
                >
                  <div className={`${colors.icon} mb-4`}>{area.icon}</div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{area.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{area.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-stone-900 mb-4 font-serif">About Me</h2>
              <p className="text-stone-600 mb-6">
                Background, what drives me, and life outside of terminals and model cards.
              </p>
              <Link
                href="/about"
                className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-stone-900 mb-4 font-serif">Resume</h2>
              <p className="text-stone-600 mb-6">
                Professional experience, skills, projects, and certifications.
              </p>
              <Link
                href="/resume"
                className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                View Resume
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-stone-900 mb-4 font-serif">Connect</h2>
              <p className="text-stone-600 mb-6">
                Always happy to talk AI, infra, side projects, or trail recommendations.
              </p>
              <Link
                href="/connect"
                className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
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
