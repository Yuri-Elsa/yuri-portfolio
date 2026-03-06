import { personal } from "../../data";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label reveal">About Me</p>
        <h2 className="section-title reveal">
          Who I <span>Am</span>
        </h2>

        {/* Quote — tepat di bawah judul */}
        <div className="about-quote reveal">
          <p className="about-quote-text">
            "I believe the best digital products come from{" "}
            <strong>designing with empathy</strong> and{" "}
            <strong>building with precision</strong> — where every pixel and
            every line of code serves a purpose."
          </p>
        </div>

        {/* Grid seimbang: profile card kiri, summary kanan */}
        <div className="about-grid">
          {/* LEFT — Info card */}
          <div className="about-info-card reveal">
            <div className="about-card-header">
              <div className="about-card-header-dots">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>
              <span className="about-card-header-title">profile.json</span>
            </div>
            <div className="info-rows">
              {[
                { icon: "📍", label: "Location", value: personal.location },
                { icon: "🎓", label: "Education", value: personal.education },
                { icon: "📧", label: "Email", value: personal.email },
                { icon: "📱", label: "Phone", value: personal.phone },
                { icon: "🔗", label: "LinkedIn", value: personal.linkedin },
                { icon: "🐙", label: "GitHub", value: personal.github },
              ].map((row) => (
                <div className="info-row" key={row.label}>
                  <div className="info-icon">{row.icon}</div>
                  <div>
                    <span className="info-label">{row.label}</span>
                    <span className="info-value">{row.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Bio text only */}
          <div className="about-text-col reveal">
            <div className="about-text">
              <p>
                I'm an <strong>Informatics undergraduate</strong> at Del
                Institute of Technology, specializing in{" "}
                <strong>Software Development</strong> and{" "}
                <strong>UI/UX Design</strong>. I bridge the gap between design
                and engineering — crafting user-centered interfaces in Figma,
                then bringing them to life with React.js, Laravel, and Node.js.
              </p>
              <p>
                My approach always starts with{" "}
                <strong>understanding users first</strong>: conducting research,
                building wireframes, and iterating on prototypes before writing
                a single line of code. This ensures every product I build is
                both technically solid and genuinely intuitive to use.
              </p>
              <p>
                As a <strong>former Laboratory Assistant</strong> and current{" "}
                <strong>Head of the Association Deliberative Assembly</strong>,
                I've developed leadership and communication skills that
                complement my technical capabilities across the full product
                development cycle.
              </p>
              <p>
                I'm deeply passionate about the intersection of design and
                technology — always exploring new tools, frameworks, and
                methodologies to deliver products that are not just functional,
                but truly delightful to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
