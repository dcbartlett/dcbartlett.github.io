import { useEffect } from 'react'

function ContactSection() {
  useEffect(() => {
    let scrollPosition = 0

    const observer = new MutationObserver(() => {
      const calendlyOverlay = document.querySelector('.calendly-overlay')
      const stickyNav = document.querySelector('.sticky-nav-wrapper')

      if (calendlyOverlay && stickyNav) {
        console.log('=== CALENDLY OPENED ===')
        console.log('Page scrollY:', window.scrollY)
        console.log('Nav element:', stickyNav)

        const rect = stickyNav.getBoundingClientRect()
        console.log('Nav rect.top:', rect.top)
        console.log('Nav rect.bottom:', rect.bottom)
        console.log('Nav computed position:', window.getComputedStyle(stickyNav).position)

        const bodyOverflow = window.getComputedStyle(document.body).overflow
        console.log('Body overflow:', bodyOverflow)

        // Save current scroll position
        scrollPosition = window.scrollY
        console.log('Saved scroll position:', scrollPosition)

        // Always convert nav to fixed first (before locking #root)
        console.log('✓ Converting nav to FIXED position')
        stickyNav.style.position = 'fixed'
        stickyNav.style.top = '0'
        stickyNav.style.left = '0'
        stickyNav.style.right = '0'
        stickyNav.style.width = '100%'
        stickyNav.style.marginLeft = '0'
        stickyNav.style.marginRight = '0'
        stickyNav.style.marginTop = '0'
        console.log('Nav position after change:', stickyNav.style.position)
        console.log('Nav margins cleared')

        // Lock scrolling on the main page while preserving position
        const root = document.getElementById('root')
        if (root) {
          root.style.position = 'fixed'
          root.style.top = `-${scrollPosition}px`
          root.style.width = '100%'
          console.log('✓ #root scroll locked at position', scrollPosition)
        }
        document.body.style.overflow = 'hidden'
        console.log('✓ Body scroll locked')
      } else if (!calendlyOverlay && stickyNav) {
        console.log('=== CALENDLY CLOSED ===')
        console.log('Restoring sticky positioning and unlocking scroll')

        // Restore sticky nav positioning
        stickyNav.style.position = ''
        stickyNav.style.top = ''
        stickyNav.style.left = ''
        stickyNav.style.right = ''
        stickyNav.style.width = ''
        stickyNav.style.marginLeft = ''
        stickyNav.style.marginRight = ''
        stickyNav.style.marginTop = ''

        // Unlock scrolling on the main page
        const root = document.getElementById('root')
        if (root) {
          root.style.position = ''
          root.style.top = ''
          root.style.width = ''
          root.style.overflow = ''
          console.log('✓ #root scroll unlocked')
        }
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''

        // Restore scroll position
        window.scrollTo(0, scrollPosition)
        console.log('✓ Body and html scroll unlocked, restored to position', scrollPosition)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => observer.disconnect()
  }, [])

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
