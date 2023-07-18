import React from 'react';
import profilePicture from '../../images/Profilepic.jpg';
import './Pages.css';

export default function AboutMe() {
  return (
    <div className="card">

      <div className="c-header has-text-dark">
        <h1>
          About Me
        </h1>
      </div>

      <div >
        <figure className="image is-128x128">
          <img className="is-rounded image-profile" src={profilePicture} alt="Profile" />
        </figure>
      </div>

      <div className="content">
        <p>
          I am a passionate and driven junior developer currently pursuing Full Stack Web Development certification from UCLA Bootcamp. Although  I have also developed a keen understanding of software development principles, algorithms, and data structures; my coursework has exposed me to various development methodologies and tools, enabling me to adapt quickly to new technologies.

          While I may not have professional experience yet, I am constantly improving my skills through personal projects and collaborations with fellow developers. These experiences have allowed me to explore different facets of development and have instilled in me a strong problem-solving mindset.
          </p>
          <br />
          <p>

          As a junior developer, I am eager to contribute my enthusiasm, creativity, and willingness to learn to a collaborative team environment. I am excited to work alongside experienced professionals, absorbing their expertise and applying it to real-world challenges. I am a quick learner and thrive in dynamic, fast-paced settings.

          In addition to my technical skills, I possess excellent communication and teamwork abilities. I believe in effective collaboration and enjoy working with others to achieve common goals. I am open to feedback and constantly seek opportunities to grow and improve as a developer.

          I am passionate about leveraging technology to create innovative solutions and enhance user experiences. I am excited to embark on my professional journey as a junior developer and contribute to impactful projects that make a difference.

          Thank you for taking the time to learn more about me. I look forward to connecting and exploring potential opportunities to grow and contribute to your team.
        </p>
      </div>

    </div>
  );
}
