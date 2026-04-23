import { useState, useEffect, useRef } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const TYPED_STRINGS = [
  'Power BI & DAX',
  'Data-Driven Decisions',
  'SQL & Data Modeling',
  'AI-Powered Analytics',
  'Microsoft Fabric',
  'Insight That Drives Action',
];
const TYPE_SPEED    = 85;
const DELETE_SPEED  = 45;
const PAUSE_FULL    = 1800;
const PAUSE_EMPTY   = 400;

function useTypingEffect(strings) {
  const [text, setText] = useState('');
  // Use a ref so the ticker closure always reads fresh state without re-mounting
  const state = useRef({ idx: 0, charIdx: 0, deleting: false });

  useEffect(() => {
    let timer;

    const tick = () => {
      const { idx, charIdx, deleting } = state.current;
      const word = strings[idx];

      if (!deleting) {
        if (charIdx < word.length) {
          state.current.charIdx++;
          setText(word.slice(0, state.current.charIdx));
          timer = setTimeout(tick, TYPE_SPEED);
        } else {
          timer = setTimeout(() => {
            state.current.deleting = true;
            tick();
          }, PAUSE_FULL);
        }
      } else {
        if (charIdx > 0) {
          state.current.charIdx--;
          setText(word.slice(0, state.current.charIdx));
          timer = setTimeout(tick, DELETE_SPEED);
        } else {
          state.current.deleting = false;
          state.current.idx = (idx + 1) % strings.length;
          timer = setTimeout(tick, PAUSE_EMPTY);
        }
      }
    };

    timer = setTimeout(tick, PAUSE_EMPTY);
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(TYPED_STRINGS);

  return (
    <section id="hero" className="hero">
      {/* Ambient background orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      <div className="container hero__content">
        <p className="hero__greeting reveal">Hello, I'm</p>

        <h1 className="hero__name reveal reveal-delay-1">
          <span className="gradient-text">Sehrish Khan</span>
        </h1>

        <p className="hero__title reveal reveal-delay-2">
          BI Developer &amp; Data Analyst
        </p>

        <p className="hero__typing-line reveal reveal-delay-3">
          I specialize in&nbsp;
          <span className="hero__typed">{typed}</span>
          <span className="hero__cursor" aria-hidden="true" />
        </p>

        <div className="hero__ctas reveal reveal-delay-4">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Animated scroll-down nudge */}
      <a href="#about" className="hero__scroll-hint" aria-label="Scroll to about">
        <span>Scroll</span>
        <FiArrowDown />
      </a>
    </section>
  );
}
