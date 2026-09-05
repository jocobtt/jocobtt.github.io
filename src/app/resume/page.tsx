// src/app/resume/page.tsx
export default function Resume() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-stone-900 mb-3 font-serif">Jacob Braswell</h1>
            <p className="text-2xl text-amber-700 mb-4 font-semibold">Senior AI Solutions Engineer</p>
            <div className="inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Active Secret Security Clearance
            </div>
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
            <a
              href="/Jacob_Braswell_Resume.pdf"
              download
              className="inline-flex items-center gap-2 mt-6 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
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
                <p className="text-stone-500 italic mb-1">January 2026 – Present</p>
                <p className="text-stone-500 text-sm mb-3">Security Clearance: Secret (Active)</p>
                <ul className="text-stone-700 space-y-2">
                  <li>• Lead AI/ML Platform Architect across federal defense and intelligence initiatives; own end-to-end productionalization and lifecycle management for sovereign, air-gapped, FIPS-compliant Next.js, FastAPI, PyTorch, and OpenSearch platforms on Kubernetes</li>
                  <li>• Engineered a Sovereign AI Redaction &amp; FOIA Platform (SQLModel, pydantic-ai, K8s/Helm) uniting Named Entity Recognition and fine-tuned LLM extraction with an OpenSearch semantic consistency layer to guarantee zero-variance redaction across massive document sets</li>
                  <li>• Architected a Mechanistic Interpretability &amp; Fine-Tuning Platform (PyTorch/FastAPI) for LLM steering-prefix training, activation collection via forward hooks, and jailbreak detection — with GPU autoscaling across NVIDIA CUDA and AMD ROCm and quantization fallbacks to prevent OOM failures during large model loads</li>
                  <li>• Built an Agentic Maritime Intelligence Platform fusing real-time acoustic/sonar sensor feeds with a geospatial knowledge graph, training vessel-classification models, Bayesian path-prediction algorithms, and an agentic feedback loop with LLM-driven explainability panels for analyst corrections</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-bold text-stone-900">
                  Booz Allen Hamilton — <span className="text-amber-700">MLOps Engineer</span>
                </h3>
                <p className="text-stone-500 italic mb-1">April 2023 – December 2025</p>
                <p className="text-stone-500 text-sm mb-3">Security Clearance: Secret (Active)</p>
                <ul className="text-stone-700 space-y-2">
                  <li>• Implemented an IaC-managed, multi-cluster MLOps platform on AWS GovCloud (ROOF AI project) using KServe for scalable inference and Karpenter for resource optimization — cut costs by 20% and reduced time-to-production for large-scale model deployment</li>
                  <li>• Built and maintained a pipeline for STIG-hardened containers used in model deployment and data pipelining</li>
                  <li>• Spearheaded GitOps pipelines optimizing end-to-end container image testing, building, and releasing</li>
                  <li>• Architected and maintained IaC for an EKS-hosted Jenkins CI/CD instance, using GitHub Actions to manage and deploy the IaC state</li>
                  <li>• Mentored the aiSSEMBLE squad in DevOps and MLOps best practices critical to production deployment of AI systems</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-bold text-stone-900">
                  Collibra Inc — <span className="text-amber-700">MLOps Engineer</span>
                </h3>
                <p className="text-stone-500 italic mb-3">December 2021 – April 2023</p>
                <ul className="text-stone-700 space-y-2">
                  <li>• Built and maintained CI/CD pipelines via Jenkins to run Terraform code standing up multi-node clusters handling hundreds of machine learning models</li>
                  <li>• Implemented a Kubeflow environment via Helm and deployed multiple end-to-end ML use cases; integrated Airflow for ETL and model training data pipelines</li>
                  <li>• Developed and maintained an asset recommender model deployment pipeline using OpenSearch, FastAPI, and FAISS</li>
                  <li>• Maintained a FedRAMP EKS environment, updating container images for CVE compliance and keeping cluster nodes rotated and current</li>
                  <li>• Mentored sales teams on ML platform capabilities and onboarded/coached 2 junior engineers over the course of a year</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-bold text-stone-900">
                  SAS Institute — <span className="text-amber-700">Solutions Architect</span>
                </h3>
                <p className="text-stone-500 italic mb-3">July 2019 – December 2021</p>
                <ul className="text-stone-700 space-y-2">
                  <li>• Built standalone MLOps training environments on Azure for hundreds of customers and internal employees; used Terraform to deploy GCP/AWS microservice applications at scale on Kubernetes</li>
                  <li>• Deployed cloud governance automation with Cloud Custodian across internal AWS, Azure, and GCP accounts; used Prometheus, Grafana, and Thanos to monitor Kubernetes workloads</li>
                  <li>• Integrated ML models via APIs into CI/CD processes for training, deploying, and retraining</li>
                  <li>• Mentored MLOps efforts across the LATAM/North America regions and guided yearly intern cohorts through onboarding and project delivery</li>
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
                <div className="bg-white rounded-lg p-4 border border-stone-200">
                  <h4 className="font-semibold text-stone-900 mb-2 text-sm uppercase tracking-wide text-amber-700">MLOps Orchestration</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Kubeflow', 'Metaflow', 'MLflow', 'Airflow'].map(s => (
                      <span key={s} className="bg-amber-50 text-amber-800 px-2 py-0.5 rounded text-sm border border-amber-200">{s}</span>
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
