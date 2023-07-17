import React from 'react';
import profilePicture from '../../images/Profilepic.jpg';
import './Pages.css';

export default function AboutMe() {
  return (
    <div className="card">

      <div className="card-header">
        <h1>
          About Me
        </h1>
      </div>

      <div className="image is-128x128">
        <figure className="is-rounded">
          <img  src={profilePicture} alt="Profile Picture" />
        </figure>
      </div>

        <div className="content">
          <p>
            Whatever you want to say about yourself
          </p>
        </div>

    </div>
  );
}
