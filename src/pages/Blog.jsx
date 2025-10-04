import { Link } from 'react-router-dom'
import StickyNav from '../components/StickyNav'

function Blog() {
  return (
    <>
      <StickyNav />
      <div className="section" style={{ minHeight: '60vh' }}>
        <h1 className="section-title">Blog</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-dark)' }}>Coming soon...</p>
      </div>
    </>
  )
}

export default Blog
