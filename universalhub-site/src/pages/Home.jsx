import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import { posts } from '../data/posts'
import { products } from '../data/products'

const statHighlights = [
  { label: 'Playbooks shipped', value: '280+', detail: 'Field-tested launch frameworks' },
  { label: 'Products reviewed', value: '140', detail: 'Hardware, SaaS & pop-up kits' },
  { label: 'Community operators', value: '42', detail: 'Contributors annotating stories' },
]

const categorySpotlights = [
  {
    label: 'Experiential Retail',
    description: 'Blueprints for traveling pop-ups and immersive installs.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Platform Momentum',
    description: 'Signals from Reddit, TikTok Shop, Discord, and Slack.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Creator Labs',
    description: 'Camera, lighting, and AI workflows vetted in our studio.',
    image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=1200&q=80',
  },
]

const fieldSignals = [
  {
    title: 'Ops rituals we copied this week',
    body: 'Async standups with narrated dashboards and partner-visible notes keep 70-person teams aligned across three continents.',
  },
  {
    title: 'Products on the watchlist',
    body: 'Tap-to-buy kiosks with scent diffusion modules are stealing the show at premium pop-ups in London and Seoul.',
  },
  {
    title: 'Community beta insight',
    body: 'Early Orbit OS token syncing cut concept-to-site timelines by 42% for two hospitality brands.',
  },
]

const Home = () => {
  const latestPosts = [...posts]
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    )
    .slice(0, 3)

  const featuredProducts = products.slice(0, 3)

  return (
    <>
      <Hero
        eyebrow="Universalhub"
        title="A composite blog for operators shipping what’s next."
        description="Signals, product reviews, and field-tested playbooks for teams launching tactile experiences, platforms, and modern partner programs."
        primaryCta={{ href: '#latest', label: 'Browse latest stories' }}
        secondaryCta={{ href: '#products', label: 'View product lab' }}
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section highlight-grid" id="capabilities">
        <article>
          <p className="eyebrow">Guides</p>
          <h3>Platform playbooks</h3>
          <p>Blueprints for launching on Reddit, TikTok Shop, Discord, and more.</p>
        </article>
        <article>
          <p className="eyebrow">Stacks</p>
          <h3>Product recommendations</h3>
          <p>Hardware, software, and hybrid kits tested inside Universalhub Labs.</p>
        </article>
        <article>
          <p className="eyebrow">Compass</p>
          <h3>Market briefings</h3>
          <p>Condensed metrics that keep your leadership team aligned with the field.</p>
        </article>
      </section>

      <section className="section" id="latest">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Latest drops</p>
            <h2>Fresh from the newsroom</h2>
          </div>
          <Link to="/blog" className="cta ghost">
            View all posts
          </Link>
        </div>
        <div className="grid three">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="section stats-row">
        {statHighlights.map((stat) => (
          <article key={stat.label}>
            <p className="eyebrow tiny">{stat.label}</p>
            <h2>{stat.value}</h2>
            <p className="muted">{stat.detail}</p>
          </article>
        ))}
      </section>

      <section className="section category-tiles">
        {categorySpotlights.map((category) => (
          <article
            key={category.label}
            style={{ backgroundImage: `linear-gradient(120deg, #050505dd, #05050588), url(${category.image})` }}
          >
            <div>
              <p className="eyebrow">{category.label}</p>
              <h3>{category.description}</h3>
              <Link to="/blog" className="cta ghost">
                Dive deeper
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="section accent" id="products">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Lab tested</p>
            <h2>Products worth piloting</h2>
          </div>
          <Link to="/products" className="cta">
            Review collection
          </Link>
        </div>
        <div className="grid three">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section signal-feed">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Signal scanner</p>
            <h2>Notes from Universalhub correspondents</h2>
          </div>
        </div>
        <div className="grid three">
          {fieldSignals.map((signal) => (
            <article key={signal.title} className="card signal-card">
              <h3>{signal.title}</h3>
              <p>{signal.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">About Universalhub</p>
          <h2>We cover the connective tissue between brand, product, and platforms.</h2>
          <p>
            Our editors shadow builders, retail architects, and platform leads to understand how they ship. Every story is grounded in fieldwork, labs testing, and hands-on reviews.
          </p>
          <Link to="/about" className="cta ghost">
            Meet the team
          </Link>
        </div>
        <div className="card contact-card">
          <h3>Book a working session</h3>
          <p>Need a teardown or product pairing sprint? We host remote and on-site sessions weekly.</p>
          <ul>
            <li>Roadmap validation</li>
            <li>Pop-up concepting</li>
            <li>Platform growth audits</li>
          </ul>
          <Link to="/contact" className="cta">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home

