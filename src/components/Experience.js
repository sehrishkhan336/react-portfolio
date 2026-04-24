import { FiMapPin, FiCalendar } from 'react-icons/fi';
import './Experience.css';

const EXPERIENCE = [
  {
    company:  'Colaberry Inc',
    role:     'BI Developer',
    period:   '2024 — Present',
    location: 'Dallas, TX',
    bullets: [
      'Build and maintain Power BI dashboards consumed by C-suite and operational teams across multiple client accounts.',
      'Write optimized DAX measures and SQL queries against Azure SQL and Microsoft Fabric Lakehouse data sources.',
      'Translate stakeholder business requirements into scalable semantic data models and automated report pipelines.',
    ],
  },
  {
    company:  'Bit & Bytes LLC',
    role:     'Project Manager & BI Analyst',
    period:   '2022 — 2024',
    location: 'Remote',
    bullets: [
      'Managed end-to-end delivery of data and software projects from scoping through production deployment.',
      'Built self-service Power BI reports that reduced ad-hoc analytics requests to the data team by 40%.',
      'Defined KPIs and established data governance standards adopted across three client organizations.',
    ],
  },
  {
    company:  'Telenor Global Shared Service',
    role:     'Business Analyst',
    period:   '2008 — 2013',
    location: 'Islamabad, Pakistan',
    bullets: [
      'Delivered executive performance reporting for a shared-service center supporting 5,000+ employees.',
      'Automated monthly reporting workflows in Excel and Access, saving approximately 20 hours of manual effort per cycle.',
      'Validated data integrity across legacy and target systems during a large-scale ERP migration project.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">

        <div className="section-divider reveal" />
        <h2 className="section-title reveal">Experience</h2>
        <p className="section-subtitle reveal">
          Five-plus years of turning data problems into business solutions across
          tech, education, and telecom.
        </p>

        <div className="timeline">
          {EXPERIENCE.map(({ company, role, period, location, bullets }, i) => (
            <div
              key={company}
              className={`timeline__item reveal reveal-delay-${i + 1}`}
            >
              {/* Glowing dot on the line */}
              <div className="timeline__dot" aria-hidden="true" />

              <div className="timeline__card glass-card">
                {/* Header row */}
                <div className="timeline__header">
                  <div className="timeline__title-group">
                    <h3 className="timeline__role">{role}</h3>
                    <span className="timeline__company">{company}</span>
                  </div>

                  <div className="timeline__meta">
                    <span className="timeline__meta-item">
                      <FiCalendar aria-hidden="true" />
                      {period}
                    </span>
                    <span className="timeline__meta-item">
                      <FiMapPin aria-hidden="true" />
                      {location}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="timeline__bullets">
                  {bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
