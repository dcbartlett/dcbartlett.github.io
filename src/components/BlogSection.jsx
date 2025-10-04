import { Link } from 'react-router-dom'

function BlogSection() {
  const posts = [
    {
      slug: 'mobile-apps-in-one-hour',
      title: 'Mobile Apps in just an hour.',
      date: 'March 13, 2017'
    },
    {
      slug: 'welcome-to-the-internet',
      title: 'Welcome to the internet',
      date: 'March 11, 2017'
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Latest Insights</h2>
      <div className="blog-section">
        {posts.map((post, index) => (
          <article key={index} className="blog-post">
            <h3>
              <Link to={`/post/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="blog-date">{post.date}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlogSection
