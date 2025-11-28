const milestones = [
  {
    date: '2019',
    title: 'Field unit launched',
    description: 'First embedded reporting program inside experiential retail builds.',
  },
  {
    date: '2021',
    title: 'Universalhub Labs',
    description: 'Opened our Brooklyn studio to test lighting rigs, AI workflows, and pop-up kits.',
  },
  {
    date: '2023',
    title: 'Platform desk',
    description: 'Expanded coverage to marketplace metrics, partner programs, and platform launches.',
  },
  {
    date: '2025',
    title: 'Global contributors',
    description: '42 practitioners annotate drafts and co-host our live reviews every month.',
  },
]

const About = () => (
  <div className="page">
    <section className="page-hero">
      <p className="eyebrow">About</p>
      <h1>Universalhub is a collective newsroom of strategists and product testers.</h1>
      <p className="hero-description">
        We embed with builders to learn how they launch, then translate those rituals into navigable playbooks for our readers.
      </p>
    </section>

    <section className="section split">
      <div>
        <h2>What we do</h2>
        <p>
          Our team spans editorial, retail architecture, and platform strategy. We document how high-performing teams run sprints, set up gear, negotiate partnerships, and turn prototypes into repeatable launches.
        </p>
        <p>
          Expect deep dives on product stacks, lab-tested gear, and the human rituals that keep launches on time.
        </p>
      </div>
      <div className="card">
        <h3>Snapshot</h3>
        <ul>
          <li>10+ field correspondents embedded with brands monthly</li>
          <li>Studio lab for gear testing and video capture</li>
          <li>Quarterly benchmark reports for partners</li>
        </ul>
      </div>
    </section>

    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Values</p>
        <h2>How we work</h2>
      </div>
      <div className="grid three">
        <article className="card">
          <h3>Field-first reporting</h3>
          <p>We spend time on shop floors, in pop-ups, and inside product war rooms before we publish.</p>
        </article>
        <article className="card">
          <h3>Actionable playbooks</h3>
          <p>Every story ends with checklists, rollout ideas, or kit configs your team can run tomorrow.</p>
        </article>
        <article className="card">
          <h3>Community operators</h3>
          <p>We share our work inside live sessions and invite practitioners to annotate the drafts.</p>
        </article>
      </div>
    </section>

    <section className="section timeline">
      <div className="section-heading">
        <p className="eyebrow">Timeline</p>
        <h2>How Universalhub evolved</h2>
      </div>
      <div className="timeline-grid">
        {milestones.map((item) => (
          <article key={item.date}>
            <p className="eyebrow">{item.date}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  </div>
)

export default About

