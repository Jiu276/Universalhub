import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-grid">
      <div>
        <p className="logo-title">Universalhub</p>
        <p className="muted">
          A composite newsroom covering tools, platforms, and operators that
          ship culture-shaping products.
        </p>
      </div>
      <div>
        <p className="footer-heading">Explore</p>
        <div className="footer-links">
          <Link to="/blog">Blog</Link>
          <Link to="/products">Product Reviews</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div>
        <p className="footer-heading">Newsletter</p>
        <form className="newsletter-form" id="subscribe">
          <input
            type="email"
            placeholder="team@studio.com"
            aria-label="Email address"
          />
          <button type='submit'>Notify me</button>
        </form>
        <p className="tiny muted">
          Weekly signals on creator tools, platforms, and product releases.
        </p>
      </div>
    </div>
    <p className="tiny muted">© {new Date().getFullYear()} Universalhub</p>
  </footer>
)

export default Footer

