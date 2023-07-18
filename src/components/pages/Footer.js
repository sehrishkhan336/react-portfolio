import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import './Pages.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p className="is-inline-flex has-space">
          <a href="https://github.com" className="icon is-large ml-4">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>{' '}
          <br />
          <a href="https://linkedin.com" className="icon is-large ml-4">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>{' '}
          <br />
          <a href="https://stackoverflow.com" className="icon is-large ml-4">
            <FontAwesomeIcon icon={faStackOverflow} size="2x" />
          </a>{' '}
          <br />
        </p>
      </div>
    </footer>
  );
};


