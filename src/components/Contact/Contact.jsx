import { personal } from '../../data'
import './Contact.css'

const socials = [
  {
    key: 'email',
    label: 'Email',
    href: `mailto:${personal.email}`,
    svg: (
      <svg viewBox="0 0 48 48" className="icon-svg" fill="none">
        <path d="M8 16a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V16z" fill="#ff6a9e" opacity=".12" stroke="#ff6a9e" strokeWidth="2"/>
        <path d="M8 16l16 11 16-11" stroke="#ff6a9e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: `https://www.linkedin.com/in/${personal.linkedin}`,
    target: '_blank',
    svg: (
      <svg viewBox="0 0 48 48" className="icon-svg" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="6" fill="#0a66c2" opacity=".12" stroke="#0a66c2" strokeWidth="2"/>
        <circle cx="17" cy="17" r="2" fill="#0a66c2"/>
        <line x1="15" y1="22" x2="15" y2="32" stroke="#0a66c2" strokeWidth="2.3" strokeLinecap="round"/>
        <path d="M22 32v-6a4 4 0 0 1 8 0v6M22 22v10" stroke="#0a66c2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: `https://wa.me/${personal.whatsapp}`,
    target: '_blank',
    svg: (
      <svg viewBox="0 0 48 48" className="icon-svg" fill="none">
        <circle cx="24" cy="24" r="16" fill="#25d366" opacity=".12" stroke="#25d366" strokeWidth="2"/>
        <path d="M33.5 29.9c-.5-1.1-1.9-1.8-2.8-2.3-.8-.4-1.6-.1-2.1.5l-.8 1.1c-.4.5-1 .8-1.6.5-1.8-.8-4-2.9-5.2-4.6-.3-.6-.1-1.3.4-1.7l.9-1c.6-.6.6-1.4.1-2.1-.6-1-1.5-2.3-2-2.8-.6-.6-1.5-.6-2.1 0l-.8.8c-2.1 2.1-1.5 5.2.6 8.1 2.1 2.8 5.2 5.2 8.1 6.1 2.9.8 5.2-.3 6.4-1.7l.4-.7c.5-.6.3-1.5-.5-1.2z" fill="#25d366"/>
      </svg>
    ),
  },
  {
    key: 'github',
    label: 'GitHub',
    href: `https://github.com/${personal.github}`,
    target: '_blank',
    svg: (
      <svg viewBox="0 0 48 48" className="icon-svg" fill="none">
        <circle cx="24" cy="24" r="16" fill="#e8e6f0" opacity=".08" stroke="#e8e6f0" strokeWidth="2" strokeOpacity=".35"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M24 11C16.82 11 11 16.82 11 24c0 5.75 3.73 10.63 8.9 12.35.65.12.89-.28.89-.62v-2.19c-3.62.79-4.38-1.74-4.38-1.74-.59-1.5-1.45-1.9-1.45-1.9-1.18-.81.09-.79.09-.79 1.31.09 2 1.34 2 1.34 1.16 1.99 3.04 1.41 3.78 1.08.12-.84.45-1.41.82-1.74-2.88-.33-5.91-1.44-5.91-6.41 0-1.42.5-2.57 1.33-3.48-.13-.33-.58-1.65.13-3.43 0 0 1.09-.35 3.58 1.34a12.45 12.45 0 0 1 3.25-.44c1.1 0 2.21.15 3.25.44 2.49-1.69 3.58-1.34 3.58-1.34.71 1.78.26 3.1.13 3.43.83.91 1.33 2.06 1.33 3.48 0 4.98-3.04 6.08-5.93 6.4.47.4.88 1.19.88 2.4v3.56c0 .34.23.75.89.62A13.01 13.01 0 0 0 37 24C37 16.82 31.18 11 24 11z" fill="#e8e6f0"/>
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          <p className="section-label reveal" style={{ textAlign: 'center' }}>Let's Connect</p>
          <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Get In <span>Touch</span></h2>
          <p className="contact-desc reveal">
            Open to internship opportunities, freelance projects, and collaborations.
            Whether you have an idea or just want to say hi — reach out anytime!
          </p>
          <div className="social-icons reveal">
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target={s.target}
                rel={s.target ? 'noopener' : undefined}
                className={`social-icon-link ${s.key}`}
                title={s.label}
              >
                <div className="social-icon-circle">{s.svg}</div>
                <span className="social-icon-label">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
