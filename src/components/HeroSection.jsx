import { useState, useEffect } from 'react'
import StickyNav from './StickyNav'

function HeroSection() {
  const [showArrow, setShowArrow] = useState(true)

  const expertise = [
    'LangChain', 'OpenAI API', 'Anthropic Claude',
    'AWS/GCP/Azure', 'Docker/Kubernetes', 'Fine-tuning'
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY === 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Dennise Bartlett</h1>
            <p className="hero-subtitle">Applied AI Engineer & Consultant</p>

            <p className="hero-summary">
              Helping companies leverage AI to solve real-world problems. Expert in LLM integration,
              AI User Interfaces, and enterprise AI strategy.
            </p>

            <div className="hero-highlights">
              <ul>
                <li>10+ years building production stable systems</li>
                <li>Specialized in LLM integration & security</li>
                <li>Led engineering teams building industry leading AI tools</li>
              </ul>
            </div>

            <div>
              <a href="#services" className="cta-button">View Services</a>
              <a href="#contact" className="cta-button secondary">Get in Touch</a>
            </div>
          </div>

          <div className="expertise-sidebar">
            <h3>Technical Expertise</h3>
            <div className="expertise-list">
              {expertise.map((tech, index) => (
                <span key={index} className="expertise-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <StickyNav />
      <div className={`scroll-arrow ${showArrow ? 'visible' : 'hidden'}`}>
        <svg width="40" height="30" viewBox="0 0 60 40" fill="none">
          <path d="M 10,8 Q 30,18 50,8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M 10,16 Q 30,26 50,16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M 10,24 Q 30,34 50,24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
    </>
  )
}

export default HeroSection
