import { experiences } from '../../data'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label reveal">Work Experience</p>
        <h2 className="section-title reveal">Where I've <span>Worked</span></h2>
        <div className="timeline reveal">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-period">{exp.period}</div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-org">{exp.org}</div>
              <ul className="timeline-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
