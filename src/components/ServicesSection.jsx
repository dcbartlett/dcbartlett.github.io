function ServicesSection({ services }) {
  return (
    <section className="section" id="services">
      <h2 className="section-title">Professional Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
