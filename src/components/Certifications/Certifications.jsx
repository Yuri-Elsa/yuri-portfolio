import { certifications } from "../../data";
import { useLightbox } from "../../hooks/useLightbox";
import "./Certifications.css";

const isPdf = (src) =>
  typeof src === "string" && src.toLowerCase().endsWith(".pdf");

export default function Certifications() {
  const { openLightbox } = useLightbox();

  return (
    <section id="certs">
      <div className="container">
        <p className="section-label reveal">Recognition</p>
        <h2 className="section-title reveal">
          Certifications &amp; <span>Achievements</span>
        </h2>
        <div className="certs-list">
          {certifications.map((cert, i) => (
            <div
              className="cert-card-v reveal"
              key={i}
              onClick={() =>
                openLightbox(
                  cert.image,
                  cert.name,
                  `${cert.issuer} · ${cert.year}`,
                )
              }
            >
              <div className="cert-thumb">
                {cert.image ? (
                  isPdf(cert.image) ? (
                    <div className="cert-thumb-pdf">
                      <div className="cert-thumb-pdf-icon">📄</div>
                      <div className="cert-thumb-pdf-label">PDF</div>
                    </div>
                  ) : (
                    <img src={cert.image} alt={cert.name} />
                  )
                ) : (
                  <div className="cert-thumb-placeholder">
                    <div className="cert-thumb-placeholder-icon">
                      {cert.icon}
                    </div>
                    <div className="cert-thumb-placeholder-text">
                      Foto sertifikat
                    </div>
                  </div>
                )}
                <div className="cert-thumb-overlay">
                  <div className="cert-thumb-overlay-icon">🔍</div>
                </div>
              </div>
              <div className="cert-info">
                <div className="cert-name-v">{cert.name}</div>
                <div className="cert-issuer-v">{cert.issuer}</div>
                <div className="cert-year-v">{cert.year}</div>
                <div className="cert-badge-strip">{cert.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
