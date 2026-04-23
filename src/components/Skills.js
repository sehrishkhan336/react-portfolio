import { useEffect, useRef, useState } from 'react';
import { FaDatabase, FaProjectDiagram } from 'react-icons/fa';
import { SiPowerbi, SiPython, SiMicrosoftazure, SiMicrosoftexcel } from 'react-icons/si';
import { TbMathFunction } from 'react-icons/tb';
import { BsLayersFill } from 'react-icons/bs';
import './Skills.css';

const SKILLS = [
  { name: 'SQL',               level: 'Advanced',     pct: 90, icon: <FaDatabase />,        color: '#e74c3c' },
  { name: 'Power BI',          level: 'Advanced',     pct: 90, icon: <SiPowerbi />,          color: '#F2C811' },
  { name: 'DAX',               level: 'Advanced',     pct: 85, icon: <TbMathFunction />,     color: '#4f8ef7' },
  { name: 'Excel',             level: 'Advanced',     pct: 88, icon: <SiMicrosoftexcel />,   color: '#217346' },
  { name: 'Python',            level: 'Intermediate', pct: 65, icon: <SiPython />,           color: '#3776AB' },
  { name: 'Microsoft Fabric',  level: 'Intermediate', pct: 62, icon: <BsLayersFill />,       color: '#00a4ef' },
  { name: 'Azure',             level: 'Intermediate', pct: 65, icon: <SiMicrosoftazure />,   color: '#0078D4' },
  { name: 'Visio',             level: 'Intermediate', pct: 65, icon: <FaProjectDiagram />,   color: '#3955A3' },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  // Fire bar animations once the section enters the viewport (only once)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">

        <div className="section-divider reveal" />
        <h2 className="section-title reveal">Skills &amp; Tools</h2>
        <p className="section-subtitle reveal">
          The stack I use to turn messy data into crisp, decision-ready insights.
        </p>

        <div className={`skills__grid${animated ? ' skills--animated' : ''}`}>
          {SKILLS.map(({ name, level, pct, icon, color }, i) => (
            <div
              key={name}
              className={`skills__card glass-card reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div className="skills__icon" style={{ color }}>
                {icon}
              </div>

              <div className="skills__meta">
                <span className="skills__name">{name}</span>
                <span className={`skills__badge skills__badge--${level.toLowerCase()}`}>
                  {level}
                </span>
              </div>

              <div className="skills__bar-track" role="presentation">
                <div
                  className="skills__bar-fill"
                  style={{ '--bar-pct': `${pct}%` }}
                  role="progressbar"
                  aria-label={`${name} proficiency`}
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>

              <span className="skills__pct">{pct}%</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
