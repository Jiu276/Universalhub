import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const Header = () => (
  <header className="site-header">
    <div className="header-inner">
      <Link to="/" className="logo" aria-label="Universalhub logo">
        <span className="logo-mark">UH</span>
        <div>
          <p className="logo-title">Universalhub</p>
          <p className="logo-tagline">Signal-first stories</p>
        </div>
      </Link>
      <nav className="nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <a
        className="cta ghost"
        href="#subscribe"
        aria-label="Scroll to newsletter form"
      >
        Join newsletter
      </a>
    </div>
  </header>
)

export default Header

