import { organizations } from "../../data";
import "./Organizations.css";

export default function Organizations() {
  return (
    <section id="organizations">
      <div className="container">
        <p className="section-label reveal">Community &amp; Leadership</p>
        <h2 className="section-title reveal">
          Organizational <span>Experience</span>
        </h2>
        <div className="org-list">
          {organizations.map((org, i) => (
            <div className="org-card-v reveal" key={i}>
              <div className="org-card-inner">
                <div className="org-content">
                  <div className="org-header-v">
                    <div className="org-icon-v">{org.icon}</div>
                    <div>
                      <div className="org-name-v">{org.name}</div>
                      <div className="org-role-v">{org.role}</div>
                      <div className="org-period-v">{org.period}</div>
                    </div>
                  </div>
                  <ul className="timeline-bullets">
                    {org.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
