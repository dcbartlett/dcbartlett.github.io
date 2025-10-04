import Navigation from './Navigation'

function StickyNav() {
  return (
    <div className="sticky-nav-wrapper">
      <Navigation />
      <div className="hero-arc">
        <svg viewBox="0 0 1200 45" preserveAspectRatio="none">
          <path d="M 0,0 L 1200,0 L 1200,5 Q 600,45 0,5 Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default StickyNav
