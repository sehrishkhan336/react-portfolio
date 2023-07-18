import React from 'react';
import './Pages.css';

export default function Resume() {
    // Example proficiencies list
    const frontEnd = [
        'JavaScript',
        'React',
        'HTML',
        'Bulma',
        'CSS',
        'Bootstrap',
        'jQuery',
    ];

    const backEnd = [
        'APIs',
        'Node.js',
        'Express.js',
        'MySQL, squelize',
        'MongoDB, Mongoose',
        'REST',
        'GraphQL',
        'Apollo',
        'JWT',
    ];

    return (
        <div className="card">
            <div className="card-content">
                <h2 className="title">Resume</h2>
                <div className="content">
                    <a href="./" download className='is-size-6'> 
                        Download Resume
                    </a>
                    <br />
                    <h3 className="subtitle is-size-5">FrontEnd Proficiencies:</h3>
                    <ul>
                        {frontEnd.map((proficiency, index) => (
                            <li className="is-size-6" key={index}>{proficiency}</li>
                        ))}
                    </ul>

                    <h3 className="subtitle is-size-5">BackEnd Proficiencies:</h3>
                    <ul>
                        {backEnd.map((proficiency, index) => (
                            <li className="is-size-6" key={index}>{proficiency}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
