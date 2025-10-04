import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'

function BlogPost() {
  const { slug } = useParams()

  useEffect(() => {
    // Initialize highlight.js when component mounts
    if (window.hljs) {
      window.hljs.highlightAll()
    }
  }, [slug])

  const posts = {
    'mobile-apps-in-one-hour': {
      title: 'Mobile Apps in just an hour.',
      date: 'March 13, 2017',
      content: ''
    },
    'welcome-to-the-internet': {
      title: 'Welcome to the internet',
      date: 'March 11, 2017',
      content: ''
    },
    'good-to-great': {
      title: 'Good to Great',
      date: 'January 1, 2017',
      content: ''
    }
  }

  const post = posts[slug] || { title: 'Post Not Found', date: '', content: '' }

  return (
    <>
      <section className="hero-section">
        <div className="hero-container" style={{ maxWidth: '900px', gridTemplateColumns: '1fr' }}>
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-date">Published {post.date}</p>
        </div>
        <div className="hero-arc">
          <svg viewBox="0 0 1200 110" preserveAspectRatio="none">
            <path d="M 0,0 L 1200,0 Q 600,110 0,0 Z"></path>
          </svg>
        </div>
      </section>

      <section className="content-section">
        <article className="post-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="social-share">
            <span className="social-share-label">Share:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}&via=bartlettdc1`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Facebook
            </a>
          </div>
        </article>
      </section>
    </>
  )
}

export default BlogPost
