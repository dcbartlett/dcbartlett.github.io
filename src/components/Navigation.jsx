import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/"><span className="brand-name">DB</span></Link>
        </div>
        <div className="nav-links">
          <a href="/#services" className="nav-link">Services</a>
          <Link to="/blog" className="nav-link">Blog</Link>
          <a href="/#contact" className="nav-link">Contact</a>
        </div>
        <div className="nav-actions">
          <a href="/#contact" className="nav-cta">Get in Touch</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
