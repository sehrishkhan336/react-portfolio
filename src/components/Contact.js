import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiLinkedin, FiGithub, FiMail, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import './Contact.css';

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sehrish-khan-63056416/', icon: <FiLinkedin />, username: 'sehrish-khan-63056416' },
  { label: 'GitHub',   href: 'https://github.com/sehrishkhan336',                  icon: <FiGithub />,   username: '@sehrishkhan336' },
  { label: 'Email',    href: 'mailto:sehrishkhan.hjim@gmail.com',                    icon: <FiMail />,     username: 'sehrishkhan.hjim@gmail.com' },
];

const SUBJECT_OPTIONS = [
  'BI / Dashboard Project',
  'Data Analytics Consultation',
  'Full-time Opportunity',
  'Contract / Freelance Work',
  'Collaboration',
  'Other',
];

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function getErrors(f) {
  const e = {};
  if (!f.name.trim())               e.name    = 'Name is required.';
  if (!f.email.trim())              e.email   = 'Email is required.';
  else if (!EMAIL_RE.test(f.email)) e.email   = 'Enter a valid email address.';
  if (!f.subject)                   e.subject = 'Please select a topic.';
  if (!f.message.trim())            e.message = 'Message is required.';
  return e;
}

const EMPTY = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [fields,  setFields]  = useState(EMPTY);
  const [touched, setTouched] = useState({});
  const [status,  setStatus]  = useState('idle');

  const errors    = getErrors(fields);
  const hasErrors = Object.keys(errors).length > 0;

  const onChange = e => setFields(p => ({ ...p, [e.target.name]: e.target.value }));
  const onBlur   = e => setTouched(p => ({ ...p, [e.target.name]: true }));

  const onSubmit = async e => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (hasErrors) return;
    setStatus('sending');
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name:  fields.name,
          from_email: fields.email,
          phone:      fields.phone || 'Not provided',
          subject:    fields.subject,
          message:    fields.message,
          reply_to:   fields.email,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFields(EMPTY);
      setTouched({});
    } catch (err) {
      console.error('EmailJS:', err);
      setStatus('error');
    }
  };

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

            <div className="contact__info reveal">
              <h3 className="contact__info-heading">Let's work together</h3>
              <p className="contact__info-text">
                Whether you need a BI solution built from scratch, an existing dashboard
                modernized, or just want to chat about data — I'd love to connect.
              </p>
              <ul className="contact__socials">
                {SOCIAL_LINKS.map(({ label, href, icon, username }) => (
                  <li key={label}>
                    <a href={href} className="contact__social-link glass-card"
                      target={href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer">
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

            <div className="contact__form-wrap glass-card reveal reveal-delay-2">
              {status === 'success' ? (
                <div className="contact__success">
                  <div className="contact__success-icon"><FiCheck /></div>
                  <h3 className="contact__success-heading">Message sent!</h3>
                  <p className="contact__success-text">Thanks for reaching out — I'll get back to you within 24 hours.</p>
                  <button className="btn-outline" onClick={() => { setStatus('idle'); setFields(EMPTY); setTouched({}); }}>
                    Send another
                  </button>
                </div>
              ) : (
                <form className="contact__form" onSubmit={onSubmit} noValidate>

                  {status === 'error' && (
                    <div className="contact__send-error" role="alert">
                      <FiAlertCircle />
                      <span>Something went wrong — email me at <a href="mailto:sehrishkhan.hjim@gmail.com">sehrishkhan.hjim@gmail.com</a></span>
                    </div>
                  )}

                  <div className="contact__row">
                    <div className={`contact__field${touched.name && errors.name ? ' contact__field--error' : ''}`}>
                      <label htmlFor="cf-name" className="contact__label">Name <span className="contact__required">*</span></label>
                      <input id="cf-name" name="name" type="text" className="contact__input"
                        placeholder="Jane Smith" value={fields.name} onChange={onChange} onBlur={onBlur} autoComplete="name" />
                      {touched.name && errors.name && <span className="contact__error-msg" role="alert">{errors.name}</span>}
                    </div>
                    <div className={`contact__field${touched.email && errors.email ? ' contact__field--error' : ''}`}>
                      <label htmlFor="cf-email" className="contact__label">Email <span className="contact__required">*</span></label>
                      <input id="cf-email" name="email" type="email" className="contact__input"
                        placeholder="jane@company.com" value={fields.email} onChange={onChange} onBlur={onBlur} autoComplete="email" />
                      {touched.email && errors.email && <span className="contact__error-msg" role="alert">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="contact__row">
                    <div className="contact__field">
                      <label htmlFor="cf-phone" className="contact__label">Phone <span className="contact__optional">(optional)</span></label>
                      <input id="cf-phone" name="phone" type="tel" className="contact__input"
                        placeholder="+1 (555) 000-0000" value={fields.phone} onChange={onChange} autoComplete="tel" />
                    </div>
                    <div className={`contact__field${touched.subject && errors.subject ? ' contact__field--error' : ''}`}>
                      <label htmlFor="cf-subject" className="contact__label">Topic <span className="contact__required">*</span></label>
                      <select id="cf-subject" name="subject" className="contact__input contact__select"
                        value={fields.subject} onChange={onChange} onBlur={onBlur}>
                        <option value="" disabled>Select a topic…</option>
                        {SUBJECT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                      {touched.subject && errors.subject && <span className="contact__error-msg" role="alert">{errors.subject}</span>}
                    </div>
                  </div>

                  <div className={`contact__field${touched.message && errors.message ? ' contact__field--error' : ''}`}>
                    <label htmlFor="cf-message" className="contact__label">Message <span className="contact__required">*</span></label>
                    <textarea id="cf-message" name="message" className="contact__input contact__textarea"
                      placeholder="Tell me about your project, timeline, or question…" rows={5}
                      value={fields.message} onChange={onChange} onBlur={onBlur} />
                    {touched.message && errors.message && <span className="contact__error-msg" role="alert">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn-primary contact__submit" disabled={status === 'sending'}>
                    {status === 'sending'
                      ? <><span className="contact__spinner" aria-hidden="true" />&nbsp;Sending…</>
                      : <><FiSend />&nbsp;Send Message</>}
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span className="site-footer__name">Sehrish <span className="gradient-text">Khan</span></span>
          <span className="site-footer__copy">© {new Date().getFullYear()} · BI Developer &amp; Data Analyst</span>
          <div className="site-footer__icons">
            <a href="https://www.linkedin.com/in/sehrish-khan-63056416/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://github.com/sehrishkhan336" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="mailto:sehrishkhan.hjim@gmail.com" aria-label="Email"><FiMail /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
