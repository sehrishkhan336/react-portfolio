import { FiExternalLink, FiGithub, FiPlay } from 'react-icons/fi';
import AutograderImg from '../assets/AutograderVisual.png';
import evGif         from '../assets/EV_Registration_Dashboard_Interaction_final.gif';
import './Projects.css';

const PROJECTS = [
  {
    category:     'AI Engineering',
    title:        'AI-Powered Homework Autograder',
    description:  'Architected and built an AI grading system at Colaberry that evolved from a Python/regex baseline into a full OpenAI tool-use agent. The agent evaluates concept mastery (not just answer matching), flags uncertain submissions for manual review, and runs a shadow-grading pipeline to validate accuracy before retiring the old system.',
    tags:         ['Python', 'OpenAI API', 'SQL Server', 'Microsoft Fabric'],
    image:        AutograderImg,
    imageAlt:     'AI Autograder dashboard screenshot',
    imgClass:     'projects__card-img--autograder',
    video:        '/react-portfolio/autograderDemo.mp4',
    github:       'https://github.com/sehrishkhan336',
    demo:         '/react-portfolio/sprint4_progress.html',
    demoLabel:    'View AI Structure',
    demoDisabled: false,
  },
  {
    category:     'Data Analytics',
    title:        'EV Registrations Over Time',
    description:  'End-to-end data analysis of electric vehicle registration trends across the United States. Cleaned and transformed raw DMV datasets, built time-series visualizations showing adoption curves by state and vehicle type, and surfaced policy-driven inflection points in EV growth.',
    tags:         ['SQL Server', 'Power BI', 'Data Wrangling', 'Pandas'],
    image:        evGif,
    imageAlt:     'EV Registrations interactive dashboard demo',
    embedUrl:     'https://app.powerbi.com/view?r=eyJrIjoiYzQ2MDRhNmMtM2U4OC00NjY2LTlkYWMtOWY2OGQzNjdkNTk5IiwidCI6ImYxYWQ2ODFmLTZmNjItNDNhOS04MjQxLTA3MDMxNjBlMTM0OCIsImMiOjN9&embedImagePlaceholder=true',
    video:        null,
    github:       'https://github.com/sehrishkhan336',
    demo:         'https://app.powerbi.com/view?r=eyJrIjoiYzQ2MDRhNmMtM2U4OC00NjY2LTlkYWMtOWY2OGQzNjdkNTk5IiwidCI6ImYxYWQ2ODFmLTZmNjItNDNhOS04MjQxLTA3MDMxNjBlMTM0OCIsImMiOjN9&embedImagePlaceholder=true',
    demoLabel:    'View Live Dashboard',
    demoDisabled: false,
  },
];

const CATEGORY_COLORS = {
  'AI Engineering': { bg: 'rgba(0,212,170,0.1)',   text: '#00d4aa' },
  'Data Analytics': { bg: 'rgba(79,142,247,0.12)', text: '#4f8ef7' },
};

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">

        <div className="section-divider reveal" />
        <h2 className="section-title reveal">Featured Projects</h2>
        <p className="section-subtitle reveal">
          Real problems. Real data. Real results.
        </p>

        <div className="projects__grid projects__grid--two">
          {PROJECTS.map(({ category, title, description, tags, image, imageAlt, imgClass, video, github, demo, demoLabel, demoDisabled }, i) => {
            const catStyle = CATEGORY_COLORS[category] ?? CATEGORY_COLORS['Data Analytics'];
            return (
              <article
                key={title}
                className={`projects__card glass-card reveal reveal-delay-${i + 1}`}
              >
                <div className="projects__card-stripe" aria-hidden="true" />

                <img
                  src={image}
                  alt={imageAlt}
                  className={`projects__card-img${imgClass ? ` ${imgClass}` : ''}`}
                />

                <span
                  className="projects__category"
                  style={{ background: catStyle.bg, color: catStyle.text }}
                >
                  {category}
                </span>

                <h3 className="projects__title">{title}</h3>
                <p className="projects__desc">{description}</p>

                <ul className="projects__tags" aria-label="Tech stack">
                  {tags.map(tag => (
                    <li key={tag} className="projects__tag">{tag}</li>
                  ))}
                </ul>

                <div className="projects__actions">
                  {demoDisabled ? (
                    <span
                      className="btn-primary projects__btn"
                      aria-disabled="true"
                      style={{ opacity: 0.5, cursor: 'not-allowed' }}
                    >
                      <FiExternalLink />
                      {demoLabel}
                    </span>
                  ) : (
                    <a
                      href={demo}
                      className="btn-primary projects__btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink />
                      {demoLabel}
                    </a>
                  )}
                  {video && (
                    <a
                      href={video}
                      className="btn-secondary projects__btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiPlay />
                      Watch Demo
                    </a>
                  )}
                  <a
                    href={github}
                    className="projects__github"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                  >
                    <FiGithub />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
