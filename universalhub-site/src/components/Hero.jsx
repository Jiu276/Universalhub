const Hero = ({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
}) => (
  <section
    className="hero"
    style={{ backgroundImage: `linear-gradient(120deg, #050505dd, #050505bb), url(${backgroundImage})` }}
  >
    <div className="hero-content">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="hero-description">{description}</p>
      <div className="hero-actions">
        {primaryCta && (
          <a className="cta" href={primaryCta.href}>
            {primaryCta.label}
          </a>
        )}
        {secondaryCta && (
          <a className="cta ghost" href={secondaryCta.href}>
            {secondaryCta.label}
          </a>
        )}
      </div>
    </div>
  </section>
)

export default Hero

