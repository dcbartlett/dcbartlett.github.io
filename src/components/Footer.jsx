function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    // add Rocket flame class to rocket
    // 
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; {currentYear} Dennise Bartlett. All rights reserved.
        </p>
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          ↑
        </button>
      </div>
    </footer>
  )
}

export default Footer
