import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

const socials = [
  { icon: <FaTwitter />, label: 'Twitter', href: 'https://twitter.com/universalhub' },
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com/universalhub' },
  { icon: <FaYoutube />, label: 'YouTube', href: 'https://youtube.com/@universalhub' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/company/universalhub' },
]

const SocialWidget = () => (
  <div className="social-widget">
    <p className="tiny">Follow Universalhub</p>
    <div className="social-grid">
      {socials.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  </div>
)

export default SocialWidget

