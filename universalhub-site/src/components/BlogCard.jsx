import { Link } from 'react-router-dom'

const BlogCard = ({ post }) => (
  <article className="blog-card">
    <Link to={`/blog/${post.slug}`}>
      <div className="blog-card-image">
        <img src={post.heroImage} alt={post.title} loading="lazy" />
        <span className="pill">{post.category}</span>
      </div>
      <div className="blog-card-body">
        <p className="tiny muted">{post.date}</p>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className="blog-card-footer">
          <span className="tiny">{post.readTime}</span>
          <span className="tiny">Read story →</span>
        </div>
      </div>
    </Link>
  </article>
)

export default BlogCard

