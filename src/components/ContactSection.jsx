function ContactSection() {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/dcbartlett' })
    }
  }

  return (
    <section className="section">
      <div className="contact-section" id="contact">
        <h2 className="section-title">Let's Work Together</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '20px' }}>
          Ready to transform your business with AI?<br />I'm available for consulting projects,
          technical advisory roles, and long-term partnerships.
        </p>
        <button onClick={openCalendly} className="cta-button" style={{ marginBottom: '30px' }}>
          Schedule a Call
        </button>
        <div className="social-links">
          <a href="https://github.com/dcbartlett" className="social-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/dcbartlett" className="social-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
