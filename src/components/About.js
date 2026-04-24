import { useEffect, useRef, useState } from 'react';
import profilePic from '../images/Profilepic.jpg';
import './About.css';

const STATS = [
  { value: 5,  suffix: '+', label: 'Years In Data' },
  { value: 10, suffix: '+', label: 'Projects Delivered' },
  { value: 3,  suffix: '',  label: 'Industries Served' },
];

function useCountUp(target, duration = 1600, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ value, suffix, label }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 1400, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about__stat glass-card" ref={ref}>
      <span className="about__stat-value gradient-text">
        {count}{suffix}
      </span>
      <span className="about__stat-label">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">

        <div className="section-divider reveal" />
        <h2 className="section-title reveal">About Me</h2>
        <p className="section-subtitle reveal">
          Data professional turning raw numbers into business clarity.
        </p>

        <div className="about__grid">
          {/* Photo / avatar */}
          <div className="about__photo-wrap reveal">
            <div className="about__photo-ring">
              <div className="about__photo-placeholder">
                <img src={profilePic} alt="Sehrish Khan" className="about__photo-img" />
              </div>
            </div>
            {/* Decorative accent ring */}
            <div className="about__photo-accent" aria-hidden="true" />
          </div>

          {/* Text column */}
          <div className="about__text">
            <p className="about__bio reveal reveal-delay-1">
              I'm a Business Intelligence Developer and Data Analyst with over 5 years of experience
              transforming complex datasets into clear, actionable dashboards and
              reports that drive real business decisions.
            </p>
            <p className="about__bio reveal reveal-delay-2">
              My toolkit spans Power BI, SQL, DAX, and Microsoft Fabric, with hands-on
              delivery across the telecom, education, and technology industries — always
              focused on making data accessible to every stakeholder, not just engineers.
            </p>
            <p className="about__bio reveal reveal-delay-3">
              Outside of data, I enjoy mentoring aspiring analysts and exploring how AI
              and automation can push the boundaries of what modern BI teams can deliver.
            </p>

            <div className="about__actions reveal reveal-delay-4">
              <a href="#projects" className="btn-primary">See My Work</a>
            </div>
          </div>
        </div>

        {/* Stat counters */}
        <div className="about__stats">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

      </div>
    </section>
  );
}
