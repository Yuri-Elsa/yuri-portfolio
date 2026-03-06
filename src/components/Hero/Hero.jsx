import { personal, stats } from "../../data";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">Available for opportunities</div>
            <h1 className="hero-title">
              Yuri
              <br />
              <span className="accent">Pakpahan</span>
              <span className="accent2">.</span>
            </h1>
            <p className="hero-sub">{personal.tagline}</p>
            <div className="hero-actions">
              <a href={personal.cvFile} download className="btn-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
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
                Get in Touch
              </a>
            </div>
            <div className="hero-stats">
              {stats.map((s) => (
                <div key={s.label}>
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
              <div className="skill-chip chip-3">⚙️ Full-Stack Dev</div>
              <div className="avatar-ring">
                <div className="orbit-dot" />
                <div className="orbit-dot orbit-dot-2" />
                <div className="avatar-center">
                  {/* Ganti div di bawah dengan <img src="foto-kamu.jpg" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
                  <img
                    src="foto.png"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
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
