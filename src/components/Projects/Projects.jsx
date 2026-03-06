import { useRef, useState } from "react";
import { projects } from "../../data";
import "./Projects.css";

// Tag type classifier
function getTypes(p) {
  const types = [];
  if (p.stack.some((s) => ["Figma", "UI/UX Design", "Wireframing"].includes(s)))
    types.push({ label: "Design", cls: "design" });
  if (p.stack.some((s) => ["React.js", "Flutter", "Vue.js"].includes(s)))
    types.push({ label: "Frontend", cls: "" });
  if (
    p.stack.some((s) => ["Node.js", "Laravel", "PHP", "PostgreSQL"].includes(s))
  )
    types.push({ label: "Backend", cls: "backend" });
  return types.length ? types : [{ label: "Dev", cls: "" }];
}

export default function Projects() {
  const carouselRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    setDragging(true);
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };
  const onMouseLeave = () => setDragging(false);
  const onMouseUp = () => setDragging(false);
  const onMouseMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.3;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scroll = (dir) => {
    carouselRef.current.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label reveal">What I've Built</p>

        <div className="projects-track-label reveal">
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Featured <span>Projects</span>
          </h2>
          <div className="projects-drag-hint">
            <div className="drag-icon">⟷</div>
            Drag to explore
          </div>
        </div>

        <div className="projects-carousel-wrapper reveal">
          <div
            className={`projects-carousel${dragging ? " dragging" : ""}`}
            ref={carouselRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {projects.map((p) => {
              const types = getTypes(p);
              return (
                <div className="project-card-v" key={p.num}>
                  <div className="project-num-v">{p.num}</div>

                  <div className="project-card-top">
                    <div className="project-tag-row">
                      {types.map((t) => (
                        <span
                          key={t.label}
                          className={`project-type-tag ${t.cls}`}
                        >
                          {t.label}
                        </span>
                      ))}
                    </div>
                    <div className="project-title-v">{p.title}</div>
                    <div className="project-role-v">{p.role}</div>
                    <div className="project-desc-v">{p.desc}</div>
                  </div>

                  <div className="project-card-bottom">
                    <div className="project-stack-v">
                      {p.stack.map((s) => (
                        <span className="stack-tag" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener"
                      className="project-link-v"
                      title="View Project"
                      onClick={(e) => dragging && e.preventDefault()}
                    >
                      ↗
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="carousel-nav reveal">
          <button
            className="carousel-btn"
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            className="carousel-btn"
            onClick={() => scroll(1)}
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
