function ServicesSection() {
  const services = [
    {
      icon: '🤖',
      title: 'LLM Integration & Development',
      description: 'Custom LLM solutions, prompt engineering, fine-tuning, and RAG implementation. Expert integration of GPT-4, Claude, and other state-of-the-art language models into your products.'
    },
    {
      icon: '⚡',
      title: 'Applied ML Solutions',
      description: 'End-to-end machine learning pipeline development, from data preprocessing to model deployment. Practical, production-ready solutions that deliver measurable business value.'
    },
    {
      icon: '🏢',
      title: 'Enterprise AI Strategy',
      description: 'Strategic consulting to identify AI opportunities, assess feasibility, and create implementation roadmaps. Technical leadership for AI transformation initiatives.'
    },
    {
      icon: '🔧',
      title: 'AI Infrastructure & MLOps',
      description: 'Build scalable, reliable AI infrastructure. Model versioning, monitoring, A/B testing, and continuous deployment pipelines for ML systems.'
    },
    {
      icon: '📊',
      title: 'Data Science & Analytics',
      description: 'Advanced analytics, predictive modeling, and data-driven insights. Transform your data into actionable intelligence with modern statistical techniques.'
    },
    {
      icon: '🎓',
      title: 'Training & Workshops',
      description: 'Custom training programs for teams on AI/ML fundamentals, LLM development, and practical applications. Hands-on workshops tailored to your organization\'s needs.'
    }
  ]

  return (
    <section className="section" id="services">
      <h2 className="section-title">Professional Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
