import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const PROJECTS = [
  {
    category: 'Dashboard',
    title: 'Sales Performance Dashboard',
    description:
      'Consolidated sales data from 3 regional CRMs into a single executive Power BI report with real-time refresh, custom DAX KPIs, and drill-through pages — cutting weekly reporting time by 70%.',
    tags: ['Power BI', 'DAX', 'SQL Server', 'Azure Data Factory'],
    github: 'https://github.com/sehrishkhan336',
    demo: '#',
  },
  {
    category: 'Data Engineering',
    title: 'ETL Pipeline & Data Warehouse',
    description:
      'Designed and deployed an end-to-end ETL pipeline migrating 5M+ records from legacy on-prem systems to Azure SQL, reducing reporting latency from 24 hours to under 15 minutes.',
    tags: ['Python', 'Microsoft Fabric', 'Azure', 'SQL'],
    github: 'https://github.com/sehrishkhan336',
    demo: '#',
  },
  {
    category: 'Analytics',
    title: 'HR Attrition Analytics Suite',
    description:
      'Built a Power BI analytics suite covering headcount trends, attrition risk scoring, and compensation benchmarking across 3 business units — adopted by senior leadership for quarterly reviews.',
    tags: ['Power BI', 'DAX', 'Python', 'Excel'],
    github: 'https://github.com/sehrishkhan336',
    demo: '#',
  },
];

const CATEGORY_COLORS = {
  'Dashboard':        { bg: 'rgba(242,200,17,0.1)',  text: '#F2C811' },
  'Data Engineering': { bg: 'rgba(0,212,170,0.1)',   text: '#00d4aa' },
  'Analytics':        { bg: 'rgba(79,142,247,0.12)', text: '#4f8ef7' },
};

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">

        <div className="section-divider reveal" />
        <h2 className="section-title reveal">Featured Projects</h2>
        <p className="section-subtitle reveal">
          A selection of BI solutions built to solve real business problems.
        </p>

        <div className="projects__grid">
          {PROJECTS.map(({ category, title, description, tags, github, demo }, i) => {
            const catStyle = CATEGORY_COLORS[category] ?? CATEGORY_COLORS['Analytics'];
            return (
              <article
                key={title}
                className={`projects__card glass-card reveal reveal-delay-${i + 1}`}
              >
                {/* Top accent stripe */}
                <div className="projects__card-stripe" aria-hidden="true" />

                {/* Category badge */}
                <span
                  className="projects__category"
                  style={{ background: catStyle.bg, color: catStyle.text }}
                >
                  {category}
                </span>

                {/* Title */}
                <h3 className="projects__title">{title}</h3>

                {/* Description */}
                <p className="projects__desc">{description}</p>

                {/* Tech stack tags */}
                <ul className="projects__tags" aria-label="Tech stack">
                  {tags.map(tag => (
                    <li key={tag} className="projects__tag">{tag}</li>
                  ))}
                </ul>

                {/* Actions */}
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
