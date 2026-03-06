import { personal, stats } from "../../data";
import { useEffect, useState } from "react";
import "./Hero.css";

const roles = ["Full-Stack Developer", "UI/UX Designer", "System Analyst"];

function TypingRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          70,
        );
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1800);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIdx]);

  return (
    <div className="hero-typing-role">
      <span className="typing-prefix">~ </span>
      <span className="typing-text">{displayed}</span>
      <span className="typing-cursor">|</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              <span className="hero-eyebrow-text">Open to opportunities</span>
            </div>

            <h1 className="hero-title">
              <span className="name-line">Yuri</span>
              <span className="name-line">
                <span className="accent-word">Pakpahan</span>
              </span>
            </h1>

            {/* Typing role — tepat di bawah nama */}
            <TypingRole />

            <p className="hero-sub">{personal.tagline}</p>

            <div className="hero-actions">
              <a href={personal.cvFile} download className="btn-primary">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
              <a href="#contact" className="btn-outline">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Get in Touch
              </a>
            </div>

            <div className="hero-stack">
              {[
                "React.js",
                "Laravel",
                "Node.js",
                "Flutter",
                "Figma",
                "PostgreSQL",
              ].map((t) => (
                <span className="stack-pill" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div className="hero-stats">
              {stats.map((s) => (
                <div className="stat-item" key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-wrap">
              <div className="skill-chip chip-1">⚛️ React.js</div>
              <div className="skill-chip chip-2">🎨 Figma & UI/UX</div>
              <div className="skill-chip chip-3">⚡ Full-Stack Dev</div>
              <div className="avatar-ring">
                <div className="orbit-dot" />
                <div className="orbit-dot orbit-dot-2" />
                <div className="avatar-center">
                  <img
                    src="foto.png"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt="Yuri Pakpahan"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
