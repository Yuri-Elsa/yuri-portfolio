import { useLightbox } from "../../hooks/useLightbox";
import "./Lightbox.css";

const isPdf = (src) =>
  typeof src === "string" && src.toLowerCase().endsWith(".pdf");

export default function Lightbox() {
  const { active, imgSrc, title, sub, closeLightbox } = useLightbox();

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  };

  if (!active) return null;

  return (
    <div className="lightbox active" onClick={handleOverlay}>
      <div
        className={`lightbox-inner${imgSrc && isPdf(imgSrc) ? " lightbox-inner--pdf" : ""}`}
      >
        <button className="lightbox-close" onClick={closeLightbox}>
          ✕
        </button>
        <div id="lightbox-content">
          {imgSrc ? (
            isPdf(imgSrc) ? (
              <iframe
                src={imgSrc}
                className="lightbox-pdf"
                title={title}
                type="application/pdf"
              />
            ) : (
              <img src={imgSrc} className="lightbox-img" alt={title} />
            )
          ) : (
            <div className="lightbox-placeholder">
              <div className="lightbox-placeholder-icon">🖼️</div>
              <div className="lightbox-placeholder-text">
                Foto belum tersedia.
                <br />
                Tambah foto dengan mengubah properti <code>image</code> di{" "}
                <code>src/data/index.js</code> dari <code>null</code> menjadi
                path foto.
              </div>
            </div>
          )}
        </div>
        <div className="lightbox-caption">
          <strong>{title}</strong>
          <span>{sub}</span>
        </div>
      </div>
    </div>
  );
}
