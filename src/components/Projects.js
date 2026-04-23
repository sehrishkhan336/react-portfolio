import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const PROJECTS = [
  {
    category: 'AI Engineering',
    title: 'AI-Powered Homework Autograder',
    description:
      'Architected and built an AI grading system at Colaberry that evolved from a Python/regex baseline into a full OpenAI tool-use agent. The agent evaluates concept mastery (not just answer matching), flags uncertain submissions for manual review, and runs a shadow-grading pipeline to validate accuracy before retiring the old system.',
    tags: ['Python', 'OpenAI API', 'SQL Server', 'Microsoft Fabric', 'Pandas'],
    github: 'https://github.com/sehrishkhan336',
    demo: '#',
  },
  {
    category: 'Data Analytics',
    title: 'EV Registrations Over Time',
    description:
      'End-to-end data analysis of electric vehicle registration trends across the United States. Cleaned and transformed raw DMV datasets, built time-series visualizations showing adoption curves by state and vehicle type, and surfaced policy-driven inflection points in EV growth.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Plotly', 'Data Wrangling'],
    github: 'https://github.com/sehrishkhan336',
    demo: '#',
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
          {PROJECTS.map(({ category, title, description, tags, github, demo }, i) => {
            const catStyle = CATEGORY_COLORS[category] ?? CATEGORY_COLORS['Data Analytics'];
            return (
              <article
                key={title}
                className={`projects__card glass-card reveal reveal-delay-${i + 1}`}
              >
                <div className="projects__card-stripe" aria-hidden="true" />

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
                  <a
                    href={demo}
                    className="btn-primary projects__btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                    View Details
                  </a>
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
