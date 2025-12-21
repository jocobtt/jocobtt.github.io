// src/app/resume/page.tsx
export default function Resume() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-3 font-serif">Jacob Braswell</h1>
            <p className="text-2xl text-gray-600 mb-6 font-semibold">AI Engineer</p>
            <div className="text-gray-600 space-y-2">
              <p>Arlington, VA</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a 
                  href="mailto:jacob.braswell00@gmail.com" 
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  jacob.braswell00@gmail.com
                </a>
                <span className="text-gray-400">|</span>
                <a 
                  href="https://www.linkedin.com/in/jacob-braswell/" 
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <span className="text-gray-400">|</span>
                <a 
                  href="https://github.com/jocobtt" 
                  className="text-blue-600 hover:text-blue-800 hover:underline"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif border-b-2 border-gray-200 pb-2">
              Experience
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Seekr - <span className="text-blue-600">Senior AI Solutions Engineer</span>
                </h3>
                <p className="text-gray-600 italic mb-3">January 2026 - Present</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• 🤗</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Booz Allen Hamilton - <span className="text-blue-600">MLOps Engineer</span>
                </h3>
                <p className="text-gray-600 italic mb-3">April 2023 - December 2025</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Building Generative and Agentic AI solutions</li>
                  <li>• Building multi-cluster MLOps platforms and GitOps workflows on AWS GovCloud</li>
                  <li>• Implementing KServe for scalable inference and Karpenter for resource optimization</li>
                  <li>• Designing Infrastructure-as-Code solutions with Terraform and GitHub Actions</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Collibra Inc - <span className="text-blue-600">MLOps Engineer</span>
                </h3>
                <p className="text-gray-600 italic mb-3">December 2021 - April 2023</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Built ML pipelines and worked with Kubeflow environments</li>
                  <li>• Created CI/CD pipelines for hundreds of machine learning models using Jenkins</li>
                  <li>• Developed model evaluation monitoring and logging pipelines</li>
                  <li>• Integrated Airflow for ETL pipelines and data processing workflows</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900">
                  SAS Institute - <span className="text-blue-600">Solutions Architect</span>
                </h3>
                <p className="text-gray-600 italic mb-3">July 2019 - December 2021</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Created MLOps training environments and deployed Kubernetes at scale</li>
                  <li>• Built cloud-based training environments for hundreds of customers</li>
                  <li>• Implemented cloud governance automation using Cloud Custodian</li>
                  <li>• Used Prometheus, Grafana, and Thanos for monitoring Kubernetes workloads</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900">
                  North Carolina State University - <span className="text-blue-600">Course Manager</span>
                </h3>
                <p className="text-gray-600 italic mb-3">April 2019 - July 2021</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Managed MBA courses covering Data Driven Managerial Decision Making</li>
                  <li>• Created learning resources using Python, R, and LaTeX</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Lawrence Livermore National Laboratories - <span className="text-blue-600">Data Scientist (Capstone)</span>
                </h3>
                <p className="text-gray-600 italic mb-3">November 2018 - May 2019</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Built CNNs using TensorFlow for topographic fusion image parameter prediction</li>
                  <li>• Deployed GAN and CNN models using Docker containers for VR simulator applications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif border-b-2 border-gray-200 pb-2">
              Education
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Brigham Young University - <span className="text-blue-600">Applied Statistics and Analytics</span>
              </h3>
              <p className="text-gray-600 italic mb-3">2015 - 2019</p>
              <p className="text-gray-700">
                <strong>Relevant Coursework:</strong> Bayesian Statistics, Machine Learning, Deep Learning, 
                Computer Vision, NLP, Time Series Analysis, MCMC Sampling and Modeling
              </p>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif border-b-2 border-gray-200 pb-2">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                  <p className="text-gray-700">Python, R, JavaScript, TypeScript, SQL, Bash</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cloud Platforms</h4>
                  <p className="text-gray-700">AWS, GCP, Azure</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">ML/AI</h4>
                  <p className="text-gray-700">Langchain, LlamaIndex, PyTorch, Hugging Face, TensorFlow</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Vector Databases</h4>
                  <p className="text-gray-700">Pinecone, Chroma, Vespa</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Infrastructure</h4>
                  <p className="text-gray-700">Docker, Kubernetes, Terraform, Crossplane, Helm, Kustomize</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">DevOps</h4>
                  <p className="text-gray-700">Jenkins, ArgoCD, FluxCD, Git, Linux</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Web Development</h4>
                  <p className="text-gray-700">Next.js, React, FastAPI</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Monitoring</h4>
                  <p className="text-gray-700">Prometheus, Grafana, CloudWatch, Opik, Ragas</p>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif border-b-2 border-gray-200 pb-2">
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">AWS ML Specialty</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">GCP Associate Cloud Engineer</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Certified Kubernetes Administrator</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Azure Fundamentals (AZ-900)</span>
              </div>
            </div>
          </section>

          {/* Personal Projects Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif border-b-2 border-gray-200 pb-2">
              Personal Projects
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">ChatBom.AI</h3>
                <p className="text-gray-700">
                  RAG web application leveraging a large embedded text corpus using Langchain, 
                  Next.js, React, and Pinecone for intelligent document querying and conversation.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">RoastMyCV</h3>
                <p className="text-gray-700">
                  AI-powered resume critiquing tool providing personalized feedback using 
                  generative AI, Langchain, Next.js, and React to help job seekers improve their resumes.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center bg-blue-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              Interested in working together or want to learn more?
            </p>
            <a 
              href="/connect" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Let's Connect! →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}