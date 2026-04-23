import { useState } from 'react';
import { FiLinkedin, FiGithub, FiMail, FiSend, FiCheck } from 'react-icons/fi';
import './Contact.css';

const SOCIAL_LINKS = [
  {
    label:    'LinkedIn',
    href:     'https://www.linkedin.com/in/sehrish-khan-63056416/',
    icon:     <FiLinkedin />,
    username: 'sehrish-khan-63056416',
  },
  {
    label:    'GitHub',
    href:     'https://github.com/sehrishkhan336',
    icon:     <FiGithub />,
    username: '@sehrishkhan336',
  },
  {
    label:    'Email',
    href:     'mailto:sehrishkhan336@gmail.com',
    icon:     <FiMail />,
    username: 'sehrishkhan336@gmail.com',
  },
];

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function getErrors(fields) {
  const e = {};
  if (!fields.name.trim())             e.name    = 'Name is required.';
  if (!fields.email.trim())            e.email   = 'Email is required.';
  else if (!EMAIL_RE.test(fields.email)) e.email = 'Enter a valid email address.';
  if (!fields.message.trim())          e.message = 'Message is required.';
  return e;
}

export default function Contact() {
  const [fields,    setFields]    = useState({ name: '', email: '', message: '' });
  const [touched,   setTouched]   = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors    = getErrors(fields);
  const hasErrors = Object.keys(errors).length > 0;

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = e => setTouched(prev => ({ ...prev, [e.target.name]: true }));

  const handleSubmit = e => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (hasErrors) return;
    setSubmitted(true);
    setFields({ name: '', email: '', message: '' });
    setTouched({});
  };

  const resetForm = () => setSubmitted(false);

  return (
    <>
      <section id="contact" className="contact section">
        <div className="container">

          <div className="section-divider reveal" />
          <h2 className="section-title reveal">Get In Touch</h2>
          <p className="section-subtitle reveal">
            Have a data challenge to solve or a project in mind? My inbox is open.
          </p>

          <div className="contact__grid">

            {/* ---- Left: social links + blurb ---- */}
            <div className="contact__info reveal">
              <h3 className="contact__info-heading">Let's work together</h3>
              <p className="contact__info-text">
                Whether you need a BI solution built from scratch, an existing
                dashboard modernized, or just want to chat about data — I'd
                love to connect.
              </p>

              <ul className="contact__socials">
                {SOCIAL_LINKS.map(({ label, href, icon, username }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="contact__social-link glass-card"
                      target={href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                    >
                      <span className="contact__social-icon">{icon}</span>
                      <div className="contact__social-text">
                        <span className="contact__social-label">{label}</span>
                        <span className="contact__social-username">{username}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ---- Right: form ---- */}
            <div className="contact__form-wrap glass-card reveal reveal-delay-2">
              {submitted ? (
                <div className="contact__success">
                  <div className="contact__success-icon">
                    <FiCheck />
                  </div>
                  <h3 className="contact__success-heading">Message sent!</h3>
                  <p className="contact__success-text">
                    Thanks for reaching out — I'll get back to you shortly.
                  </p>
                  <button className="btn-outline" onClick={resetForm}>
                    Send another
                  </button>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit} noValidate>

                  {/* Name */}
                  <div className={`contact__field${touched.name && errors.name ? ' contact__field--error' : ''}`}>
                    <label htmlFor="cf-name" className="contact__label">Name</label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      className="contact__input"
                      placeholder="Jane Smith"
                      value={fields.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="name"
                    />
                    {touched.name && errors.name && (
                      <span className="contact__error-msg" role="alert">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className={`contact__field${touched.email && errors.email ? ' contact__field--error' : ''}`}>
                    <label htmlFor="cf-email" className="contact__label">Email</label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      className="contact__input"
                      placeholder="jane@company.com"
                      value={fields.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="email"
                    />
                    {touched.email && errors.email && (
                      <span className="contact__error-msg" role="alert">{errors.email}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className={`contact__field${touched.message && errors.message ? ' contact__field--error' : ''}`}>
                    <label htmlFor="cf-message" className="contact__label">Message</label>
                    <textarea
                      id="cf-message"
                      name="message"
                      className="contact__input contact__textarea"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={fields.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.message && errors.message && (
                      <span className="contact__error-msg" role="alert">{errors.message}</span>
                    )}
                  </div>

                  <button type="submit" className="btn-primary contact__submit">
                    <FiSend />
                    Send Message
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ---- Site footer ---- */}
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span className="site-footer__name">
            Sehrish <span className="gradient-text">Khan</span>
          </span>
          <span className="site-footer__copy">
            © {new Date().getFullYear()} · BI Developer &amp; Data Analyst
          </span>
          <div className="site-footer__icons">
            <a href="https://www.linkedin.com/in/sehrish-khan-63056416/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://github.com/sehrishkhan336" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="mailto:sehrishkhan336@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
