import { personal } from '../../data'
import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label reveal">About Me</p>
        <h2 className="section-title reveal">Who I <span>Am</span></h2>
        <div className="about-grid">

          <div className="about-card reveal">
            {[
              { icon: '📍', label: 'Location',  value: personal.location },
              { icon: '🎓', label: 'Education', value: personal.education },
              { icon: '📧', label: 'Email',     value: personal.email },
              { icon: '📱', label: 'Phone',     value: personal.phone },
              { icon: '🔗', label: 'LinkedIn',  value: personal.linkedin },
              { icon: '🐙', label: 'GitHub',    value: personal.github },
            ].map((row) => (
              <div className="info-row" key={row.label}>
                <span className="info-icon">{row.icon}</span>
                <div>
                  <span className="info-label">{row.label}</span>
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          <div className="about-text reveal">
            <p>I'm an <strong>Informatics undergraduate</strong> at Del Institute of Technology specializing in <strong>Software Development</strong> and <strong>UI/UX Design</strong>. I bridge the gap between design and engineering — crafting user-centered interfaces in Figma, then bringing them to life with React.js, Laravel, and Node.js.</p>
            <p>My approach starts with <strong>understanding users first</strong>: conducting research, building wireframes, and iterating on prototypes before writing a single line of code. This ensures every product I build is both technically solid and genuinely intuitive to use.</p>
            <p>As a <strong>former Laboratory Assistant</strong> and current <strong>Head of the Association Deliberative Assembly</strong>, I've developed strong leadership and communication skills that complement my technical capabilities across the full product development cycle.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
