import { Link, useParams } from 'react-router-dom'
import { getPostBySlug, posts } from '../data/posts'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import BlogCard from '../components/BlogCard'

const renderBlock = (block) => {
  switch (block.type) {
    case 'subheading':
      return <h3 key={block.text}>{block.text}</h3>
    case 'list':
      return (
        <ul key={block.items[0]}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote key={block.text}>
          <p>{block.text}</p>
        </blockquote>
      )
    default:
      return <p key={block.text}>{block.text}</p>
  }
}

const BlogDetail = () => {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <section className="page-hero">
        <h1>We could not find that story.</h1>
        <Link to="/blog" className="cta">
          Return to blog
        </Link>
      </section>
    )
  }

  const relatedProducts = products.filter((product) =>
    post.relatedProducts?.includes(product.id),
  )

  const adjacentPosts = posts
    .filter((item) => item.slug !== slug)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    )
    .slice(0, 3)

  return (
    <article className="blog-detail">
      <header
        className="detail-hero"
        style={{
          backgroundImage: `linear-gradient(120deg, #050505ee, #050505aa), url(${post.heroImage})`,
        }}
      >
        <div className="detail-meta">
          <p className="pill">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="hero-description">{post.excerpt}</p>
          <div className="meta-row">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <Link to="/blog" className="cta ghost">
            Back to all posts
          </Link>
        </div>
      </header>

      <section className="section detail-body">
        {post.highlights && (
          <div className="callout">
            <p className="eyebrow">Why it matters</p>
            <ul>
              {post.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="content">
          {post.content?.map((block) => renderBlock(block))}
        </div>

        {post.tags && (
          <div className="tag-row">
            {post.tags.map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </section>

      {relatedProducts.length > 0 && (
        <section className="section accent">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Recommended gear</p>
              <h2>Products referenced in this story</h2>
            </div>
            <Link to="/products" className="cta ghost">
              Browse collection
            </Link>
          </div>
          <div className="grid three">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Keep reading</p>
            <h2>More stories from Universalhub</h2>
          </div>
        </div>
        <div className="grid three">
          {adjacentPosts.map((item) => (
            <BlogCard key={item.id} post={item} />
          ))}
        </div>
      </section>
    </article>
  )
}

export default BlogDetail

