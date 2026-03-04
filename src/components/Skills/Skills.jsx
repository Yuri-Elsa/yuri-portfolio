import { skills } from '../../data'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label reveal">What I Work With</p>
        <h2 className="section-title reveal">My <span>Skills</span></h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card reveal" key={s.title}>
              <div className="skill-card-icon">{s.icon}</div>
              <div className="skill-card-title">{s.title}</div>
              <div className="skill-card-desc">{s.desc}</div>
              <div className="skill-tags">
                {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
