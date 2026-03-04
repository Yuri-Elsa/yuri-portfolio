import { projects } from '../../data'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label reveal">What I've Built</p>
        <h2 className="section-title reveal">Featured <span>Projects</span></h2>
        <div className="projects-list">
          {projects.map((p) => (
            <div className="project-card-v reveal" key={p.num}>
              <div className="project-num-v">{p.num}</div>
              <div>
                <div className="project-title-v">{p.title}</div>
                <div className="project-role-v">{p.role}</div>
                <div className="project-desc-v">{p.desc}</div>
              </div>
              <div className="project-meta">
                <div className="project-stack-v">
                  {p.stack.map((s) => <span className="stack-tag" key={s}>{s}</span>)}
                </div>
                <a href={p.link} target="_blank" rel="noopener" className="project-link-v" title="View Project">↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
