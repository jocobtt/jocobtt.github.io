// src/app/resume/page.tsx
export default function Resume() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-stone-900 mb-3 font-serif">Jacob Braswell</h1>
            <p className="text-2xl text-amber-700 mb-6 font-semibold">Senior AI Solutions Engineer</p>
            <div className="text-stone-600 space-y-2">
              <p>Arlington, VA</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href="mailto:jacob.braswell00@gmail.com"
                  className="text-amber-700 hover:text-amber-900 hover:underline"
                >
                  jacob.braswell00@gmail.com
                </a>
                <span className="text-stone-400">|</span>
                <a
                  href="https://www.linkedin.com/in/jacob-braswell/"
                  className="text-amber-700 hover:text-amber-900 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <span className="text-stone-400">|</span>
                <a
                  href="https://github.com/jocobtt"
                  className="text-amber-700 hover:text-amber-900 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif border-b-2 border-stone-200 pb-2">
              Experience
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-bold text-stone-900">
                  Seekr — <span className="text-amber-700">Senior AI Solutions Engineer</span>
                </h3>
                <p className="text-stone-500 italic mb-3">January 2026 – Present</p>
                <ul className="text-stone-700 space-y-2">
                  <li>• Fine-tuning foundation models for domain-specific tasks using PEFT/LoRA, instruction tuning, and custom alignment pipelines</li>
                  <li>• Configuring and maintaining GPU infrastructure for secure, air-gapped Sovereign AI deployments with full data residency control</li>
                  <li>• Designing agentic AI architectures with self-improvement loops and measurable tool-use effectiveness</li>
                  <li>• Building evaluation frameworks for model explainability, behavioral drift detection, and agentic task completion</li>
                  <li>• Optimizing production model serving with vLLM and KServe in cloud-native Kubernetes environments</li>
                  <li>• Automating platform provisioning with Terraform modules and Helm charts for repeatable, auditable deployments</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-bold text-stone-900">
                  Booz Allen Hamilton — <span className="text-amber-700">MLOps Engineer</span>
                </h3>
                <p className="text-stone-500 italic mb-3">April 2023 – December 2025</p>
                <ul className="text-stone-700 space-y-2">
                  <li>• Building Generative and Agentic AI solutions</li>
                  <li>• Building multi-cluster MLOps platforms and GitOps workflows on AWS GovCloud</li>
                  <li>• Implementing KServe for scalable inference and Karpenter for resource optimization</li>
                  <li>• Designing Infrastructure-as-Code solutions with Terraform and GitHub Actions</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-bold text-stone-900">
                  Collibra Inc — <span className="text-amber-700">MLOps Engineer</span>
                </h3>
                <p className="text-stone-500 italic mb-3">December 2021 – April 2023</p>
                <ul className="text-stone-700 space-y-2">
                  <li>• Built ML pipelines and worked with Kubeflow environments</li>
                  <li>• Created CI/CD pipelines for hundreds of machine learning models using Jenkins</li>
                  <li>• Developed model evaluation monitoring and logging pipelines</li>
                  <li>• Integrated Airflow for ETL pipelines and data processing workflows</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-bold text-stone-900">
                  SAS Institute — <span className="text-amber-700">Solutions Architect</span>
                </h3>
                <p className="text-stone-500 italic mb-3">July 2019 – December 2021</p>
                <ul className="text-stone-700 space-y-2">
                  <li>• Created MLOps training environments and deployed Kubernetes at scale</li>
                  <li>• Built cloud-based training environments for hundreds of customers</li>
                  <li>• Implemented cloud governance automation using Cloud Custodian</li>
                  <li>• Used Prometheus, Grafana, and Thanos for monitoring Kubernetes workloads</li>
                </ul>
              </div>

              <div className="border-l-4 border-stone-300 pl-6">
                <h3 className="text-xl font-bold text-stone-900">
                  North Carolina State University — <span className="text-stone-600">Course Manager</span>
                </h3>
                <p className="text-stone-500 italic mb-3">April 2019 – July 2021</p>
                <ul className="text-stone-700 space-y-2">
                  <li>• Managed MBA courses covering Data Driven Managerial Decision Making</li>
                  <li>• Created learning resources using Python, R, and LaTeX</li>
                </ul>
              </div>

              <div className="border-l-4 border-stone-300 pl-6">
                <h3 className="text-xl font-bold text-stone-900">
                  Lawrence Livermore National Laboratories — <span className="text-stone-600">Data Scientist (Capstone)</span>
                </h3>
                <p className="text-stone-500 italic mb-3">November 2018 – May 2019</p>
                <ul className="text-stone-700 space-y-2">
                  <li>• Built CNNs using TensorFlow for topographic fusion image parameter prediction</li>
                  <li>• Deployed GAN and CNN models using Docker containers for VR simulator applications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif border-b-2 border-stone-200 pb-2">
              Education
            </h2>
            <div className="bg-white rounded-xl p-6 border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900">
                Brigham Young University — <span className="text-amber-700">Applied Statistics and Analytics</span>
              </h3>
              <p className="text-stone-500 italic mb-3">2015 – 2019</p>
              <p className="text-stone-700">
                <strong>Relevant Coursework:</strong> Bayesian Statistics, Machine Learning, Deep Learning,
                Computer Vision, NLP, Time Series Analysis, MCMC Sampling and Modeling
              </p>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif border-b-2 border-stone-200 pb-2">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-stone-200">
                  <h4 className="font-semibold text-stone-900 mb-2 text-sm uppercase tracking-wide text-amber-700">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'R', 'JavaScript', 'TypeScript', 'SQL', 'Bash'].map(s => (
                      <span key={s} className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-sm border border-stone-200">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-stone-200">
                  <h4 className="font-semibold text-stone-900 mb-2 text-sm uppercase tracking-wide text-amber-700">Cloud Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'GCP', 'Azure'].map(s => (
                      <span key={s} className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-sm border border-stone-200">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-stone-200">
                  <h4 className="font-semibold text-stone-900 mb-2 text-sm uppercase tracking-wide text-amber-700">ML / AI</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Langchain', 'LlamaIndex', 'PyTorch', 'Hugging Face', 'TensorFlow', 'vLLM', 'KServe'].map(s => (
                      <span key={s} className="bg-amber-50 text-amber-800 px-2 py-0.5 rounded text-sm border border-amber-200">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-stone-200">
                  <h4 className="font-semibold text-stone-900 mb-2 text-sm uppercase tracking-wide text-amber-700">Vector Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Pinecone', 'Chroma', 'Vespa'].map(s => (
                      <span key={s} className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-sm border border-stone-200">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-stone-200">
                  <h4 className="font-semibold text-stone-900 mb-2 text-sm uppercase tracking-wide text-amber-700">Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Docker', 'Kubernetes', 'Terraform', 'Crossplane', 'Helm', 'Kustomize'].map(s => (
                      <span key={s} className="bg-amber-50 text-amber-800 px-2 py-0.5 rounded text-sm border border-amber-200">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-stone-200">
                  <h4 className="font-semibold text-stone-900 mb-2 text-sm uppercase tracking-wide text-amber-700">DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Jenkins', 'ArgoCD', 'FluxCD', 'Git', 'Linux'].map(s => (
                      <span key={s} className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-sm border border-stone-200">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-stone-200">
                  <h4 className="font-semibold text-stone-900 mb-2 text-sm uppercase tracking-wide text-amber-700">Web Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'React', 'Vue', 'FastAPI'].map(s => (
                      <span key={s} className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-sm border border-stone-200">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-stone-200">
                  <h4 className="font-semibold text-stone-900 mb-2 text-sm uppercase tracking-wide text-amber-700">Monitoring</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Prometheus', 'Grafana', 'CloudWatch', 'Opik', 'Ragas'].map(s => (
                      <span key={s} className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-sm border border-stone-200">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif border-b-2 border-stone-200 pb-2">
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {['AWS ML Specialty', 'GCP Associate Cloud Engineer', 'Certified Kubernetes Administrator', 'Azure Fundamentals (AZ-900)'].map((cert) => (
                <div key={cert} className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-stone-200">
                  <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                  <span className="text-stone-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Personal Projects Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif border-b-2 border-stone-200 pb-2">
              Personal Projects
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-stone-200 hover:border-amber-300 hover:shadow-sm transition-all">
                <h3 className="text-xl font-bold text-stone-900 mb-2">ChatBom.AI</h3>
                <p className="text-stone-700">
                  RAG web application leveraging a large embedded text corpus using Langchain,
                  Next.js, React, and Pinecone for intelligent document querying and conversation.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-stone-200 hover:border-amber-300 hover:shadow-sm transition-all">
                <h3 className="text-xl font-bold text-stone-900 mb-2">RoastMyCV</h3>
                <p className="text-stone-700">
                  AI-powered resume critiquing tool providing personalized feedback using
                  generative AI, Langchain, Next.js, and React to help job seekers improve their resumes.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center bg-amber-50 rounded-xl p-8 border border-amber-200">
            <p className="text-lg text-stone-700 mb-4">
              Interested in working together or want to learn more?
            </p>
            <a
              href="/connect"
              className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Let&apos;s Connect! →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
