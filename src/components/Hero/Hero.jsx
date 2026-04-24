import { useRef, useEffect, useCallback, useState } from 'react';
import './Hero.css';

/* ─── Cube face data ─── */
const faces = [
  {
    cls: 'front',
    label: 'Data Visualization',
    sub: 'Power BI · DAX',
    svg: (
      <svg viewBox="0 0 82 50" className="face-svg">
        <rect x="4"  y="28" width="11" height="22" fill="#5EEAD4" rx="1" />
        <rect x="19" y="18" width="11" height="32" fill="#5EEAD4" rx="1" />
        <rect x="34" y="22" width="11" height="28" fill="#38BDF8" rx="1" />
        <rect x="49" y="10" width="11" height="40" fill="#5EEAD4" rx="1" />
        <rect x="64" y="15" width="11" height="35" fill="#38BDF8" rx="1" />
        <polyline
          points="9.5,28 24.5,18 39.5,22 54.5,10 69.5,15"
          fill="none"
          stroke="rgba(255,255,255,.25)"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
      </svg>
    ),
  },
  {
    cls: 'back',
    label: 'Data Modeling',
    sub: 'Star schema · SQL',
    svg: (
      <svg viewBox="0 0 80 60" className="face-svg">
        <rect x="22" y="22" width="36" height="18" fill="rgba(94,234,212,.15)" stroke="#5EEAD4" strokeWidth="1.5" rx="2" />
        <text x="40" y="35" textAnchor="middle" fill="#5EEAD4" fontSize="8">FACT</text>
        <rect x="0"  y="2"  width="18" height="12" fill="none" stroke="#94A3B8" strokeWidth="1" rx="1" />
        <rect x="62" y="2"  width="18" height="12" fill="none" stroke="#94A3B8" strokeWidth="1" rx="1" />
        <rect x="0"  y="44" width="18" height="12" fill="none" stroke="#94A3B8" strokeWidth="1" rx="1" />
        <rect x="62" y="44" width="18" height="12" fill="none" stroke="#94A3B8" strokeWidth="1" rx="1" />
        <line x1="22" y1="26" x2="18" y2="10"  stroke="#94A3B8" strokeWidth="0.8" />
        <line x1="58" y1="26" x2="62" y2="10"  stroke="#94A3B8" strokeWidth="0.8" />
        <line x1="22" y1="36" x2="18" y2="48"  stroke="#94A3B8" strokeWidth="0.8" />
        <line x1="58" y1="36" x2="62" y2="48"  stroke="#94A3B8" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    cls: 'right',
    label: 'AI Automation',
    sub: 'OpenAI · Python',
    svg: (
      <svg viewBox="0 0 90 50" className="face-svg">
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#5EEAD4" />
          </marker>
        </defs>
        <circle cx="12" cy="25" r="10" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
        <text x="12" y="29" textAnchor="middle" fill="#94A3B8" fontSize="7">DATA</text>
        <line x1="22" y1="25" x2="33" y2="25" stroke="#5EEAD4" strokeWidth="1.5" markerEnd="url(#arr)" />
        <rect x="34" y="16" width="22" height="18" fill="rgba(94,234,212,.15)" stroke="#5EEAD4" strokeWidth="1.5" rx="3" />
        <text x="45" y="28" textAnchor="middle" fill="#5EEAD4" fontSize="9">AI</text>
        <line x1="56" y1="25" x2="67" y2="25" stroke="#5EEAD4" strokeWidth="1.5" markerEnd="url(#arr)" />
        <circle cx="78" cy="25" r="10" fill="rgba(94,234,212,.15)" stroke="#5EEAD4" strokeWidth="1.5" />
        <text x="78" y="29" textAnchor="middle" fill="#5EEAD4" fontSize="7">OUT</text>
      </svg>
    ),
  },
  {
    cls: 'left',
    label: 'SQL Analytics',
    sub: 'T-SQL · Query opt.',
    svg: (
      <svg viewBox="0 0 80 56" className="face-svg">
        <rect x="2" y="2" width="76" height="12" fill="#5EEAD4" rx="2" />
        <line x1="2"  y1="14" x2="78" y2="14" stroke="rgba(94,234,212,.4)"   strokeWidth="0.5" />
        <line x1="2"  y1="26" x2="78" y2="26" stroke="rgba(148,163,184,.2)" strokeWidth="0.5" />
        <line x1="2"  y1="38" x2="78" y2="38" stroke="rgba(148,163,184,.2)" strokeWidth="0.5" />
        <line x1="26" y1="2"  x2="26" y2="56" stroke="rgba(148,163,184,.2)" strokeWidth="0.5" />
        <line x1="54" y1="2"  x2="54" y2="56" stroke="rgba(148,163,184,.2)" strokeWidth="0.5" />
        <text x="5"  y="11" fill="#0B1220" fontSize="7" fontWeight="bold">ID</text>
        <text x="30" y="11" fill="#0B1220" fontSize="7" fontWeight="bold">METRIC</text>
        <text x="58" y="11" fill="#0B1220" fontSize="7" fontWeight="bold">QTR</text>
        <text x="5"  y="23" fill="#94A3B8" fontSize="7">001</text>
        <text x="30" y="23" fill="#94A3B8" fontSize="7">— — —</text>
        <text x="58" y="23" fill="#94A3B8" fontSize="7">Q3</text>
        <text x="5"  y="35" fill="#94A3B8" fontSize="7">002</text>
        <text x="30" y="35" fill="#94A3B8" fontSize="7">— — —</text>
        <text x="58" y="35" fill="#94A3B8" fontSize="7">Q4</text>
        <text x="5"  y="47" fill="#5EEAD4" fontSize="7">003</text>
        <text x="30" y="47" fill="#5EEAD4" fontSize="7">— — — —</text>
        <text x="58" y="47" fill="#5EEAD4" fontSize="7">Q1</text>
      </svg>
    ),
  },
  {
    cls: 'top',
    label: 'BI Reporting',
    sub: 'MS Fabric · Visio',
    svg: (
      <svg viewBox="0 0 80 54" className="face-svg">
        <rect x="2"  y="2"  width="36" height="22" fill="rgba(94,234,212,.1)" stroke="rgba(94,234,212,.3)" strokeWidth="0.8" rx="2" />
        <text x="20" y="17" textAnchor="middle" fill="#5EEAD4" fontSize="11" fontWeight="bold">↑ KPI</text>
        <rect x="2"  y="28" width="36" height="24" fill="rgba(15,23,42,.5)" stroke="rgba(148,163,184,.2)" strokeWidth="0.8" rx="2" />
        <rect x="6"  y="46" width="5" height="6"  fill="#5EEAD4" />
        <rect x="12" y="41" width="5" height="11" fill="#5EEAD4" />
        <rect x="18" y="37" width="5" height="15" fill="#38BDF8" />
        <rect x="24" y="34" width="5" height="18" fill="#38BDF8" />
        <rect x="30" y="31" width="5" height="21" fill="#38BDF8" />
        <circle cx="60" cy="26" r="17" fill="none" stroke="rgba(148,163,184,.15)" strokeWidth="8" />
        <circle
          cx="60" cy="26" r="17"
          fill="none" stroke="#5EEAD4" strokeWidth="8"
          strokeDasharray="75 107"
          transform="rotate(-90 60 26)"
        />
      </svg>
    ),
  },
  {
    cls: 'bottom',
    label: 'Project Mgmt',
    sub: 'Scrum · Delivery',
    svg: (
      <svg viewBox="0 0 80 56" className="face-svg">
        <text x="2" y="10"  fill="#94A3B8" fontSize="7">Sprint 1</text>
        <rect x="32" y="2"  width="30" height="8" fill="#5EEAD4" rx="1" />
        <text x="2" y="24"  fill="#94A3B8" fontSize="7">Sprint 2</text>
        <rect x="38" y="16" width="36" height="8" fill="#5EEAD4" rx="1" />
        <text x="2" y="38"  fill="#94A3B8" fontSize="7">Sprint 3</text>
        <rect x="32" y="30" width="28" height="8" fill="#38BDF8" rx="1" />
        <text x="2" y="52"  fill="#94A3B8" fontSize="7">Sprint 4</text>
        <rect x="40" y="44" width="34" height="8" fill="#38BDF8" rx="1" />
      </svg>
    ),
  },
];

const stats = [
  { number: '5',   label: 'years in BI'        },
  { number: '10+', label: 'projects delivered'  },
  { number: '3',   label: 'industries served'   },
  { number: '6+',  label: 'tools mastered'      },
];

const ROLES = [
  'BI Developer & Data Analyst',
  'Power BI Specialist',
  'SQL & DAX Expert',
  'AI Automation Builder',
  'MS Fabric Engineer',
];

const techStack = ['Power BI', 'SQL', 'DAX', 'Python', 'MS Fabric', 'AI Tools'];

/* ─── Component ─── */
const Hero = () => {
  const cubeRef = useRef(null);
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2500);
    return () => clearInterval(id);
  }, []);

  const s = useRef({
    rotX: -18,
    rotY: 0,
    isDragging: false,
    lastX: 0,
    lastY: 0,
    lastTimestamp: 0,
    animId: null,
  });

  const applyTransform = useCallback(() => {
    if (cubeRef.current) {
      cubeRef.current.style.transform =
        `rotateX(${s.current.rotX}deg) rotateY(${s.current.rotY}deg)`;
    }
  }, []);

  useEffect(() => {
    const state = s.current;

    const tick = (timestamp) => {
      if (!state.isDragging) {
        const dt = timestamp - state.lastTimestamp;
        state.rotY += dt * 0.012;
        applyTransform();
      }
      state.lastTimestamp = timestamp;
      state.animId = requestAnimationFrame(tick);
    };
    state.animId = requestAnimationFrame(tick);

    const onMouseDown = (e) => {
      state.isDragging = true;
      state.lastX = e.clientX;
      state.lastY = e.clientY;
    };
    const onMouseMove = (e) => {
      if (!state.isDragging) return;
      state.rotY += (e.clientX - state.lastX) * 0.5;
      state.rotX -= (e.clientY - state.lastY) * 0.5;
      state.rotX = Math.max(-60, Math.min(60, state.rotX));
      state.lastX = e.clientX;
      state.lastY = e.clientY;
      applyTransform();
    };
    const onMouseUp = () => { state.isDragging = false; };

    const onTouchStart = (e) => {
      state.isDragging = true;
      state.lastX = e.touches[0].clientX;
      state.lastY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (!state.isDragging) return;
      e.preventDefault();
      state.rotY += (e.touches[0].clientX - state.lastX) * 0.5;
      state.rotX -= (e.touches[0].clientY - state.lastY) * 0.5;
      state.rotX = Math.max(-60, Math.min(60, state.rotX));
      state.lastX = e.touches[0].clientX;
      state.lastY = e.touches[0].clientY;
      applyTransform();
    };
    const onTouchEnd = () => { state.isDragging = false; };

    const cube = cubeRef.current;
    cube.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    cube.addEventListener('touchstart', onTouchStart, { passive: true });
    cube.addEventListener('touchmove',  onTouchMove,  { passive: false });
    cube.addEventListener('touchend',   onTouchEnd);

    return () => {
      cancelAnimationFrame(state.animId);
      cube.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      cube.removeEventListener('touchstart', onTouchStart);
      cube.removeEventListener('touchmove',  onTouchMove);
      cube.removeEventListener('touchend',   onTouchEnd);
    };
  }, [applyTransform]);

  return (
    <section id="hero" className="hero">

      {/* ── Nav ── */}
      {/* ── Hero body ── */}
      <div className="hero-body">

        {/* Left: copy */}
        <div className="hero-left">
          <p className="hero-eyebrow">HELLO, I'M</p>
          <h1 className="hero-name">Sehrish Khan</h1>
          <p className="hero-role">{ROLES[roleIdx]}</p>
          <p className="hero-desc">
            I design and ship analytics solutions — Power BI dashboards, SQL data
            models, and AI-powered automation — that help teams stop guessing and
            start deciding.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">View my work →</a>
            <a href="#contact" className="btn-secondary">Get in touch</a>
          </div>

          <div className="tech-stack">
            {techStack.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>

        {/* Right: cube */}
        <div className="hero-right">
          <div className="cube-stage">
            <div className="cube" ref={cubeRef}>
              {faces.map(({ cls, label, sub, svg }) => (
                <div key={cls} className={`face ${cls}`}>
                  {svg}
                  <p className="face-label">{label}</p>
                  <p className="face-sub">{sub}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="cube-hint">drag to explore ↕↔</p>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="hero-stats">
        {stats.map(({ number, label }) => (
          <div key={label} className="stat-item">
            <p className="stat-number">{number}</p>
            <p className="stat-label">{label}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Hero;
