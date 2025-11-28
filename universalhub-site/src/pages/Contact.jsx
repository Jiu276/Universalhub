const Contact = () => (
  <div className="page">
    <section className="page-hero">
      <p className="eyebrow">Contact</p>
      <h1>Let’s plan your next rollout, teardown, or working session.</h1>
      <p className="hero-description">
        Reach out for collaborations, press opportunities, or to book a Universalhub Lab review.
      </p>
    </section>

    <section className="section split">
      <div>
        <h2>Send a note</h2>
        <form className="form">
          <label>
            Name
            <input type="text" placeholder="Alex Rivera" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="alex@collective.studio" required />
          </label>
          <label>
            Company
            <input type="text" placeholder="Collective Studio" />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Tell us what you’re working on" />
          </label>
          <button type="submit" className="cta">
            Send message
          </button>
        </form>
      </div>
      <div className="card">
        <h3>Studio</h3>
        <p>
          Universalhub HQ<br />
          45 Mercer Street<br />
          New York, NY
        </p>
        <p className="muted">
          In-person sessions every Thursday & Friday. Virtual teardown slots open weekly.
        </p>
        <p>
          <strong>Email</strong>
          <br />
          hello@universalhub.com
        </p>
        <p>
          <strong>Press & partnerships</strong>
          <br />
          partners@universalhub.com
        </p>
      </div>
    </section>
  </div>
)

export default Contact

