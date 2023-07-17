import React from 'react';
import './Pages.css';

const Portfolio = () => {
    return (
        <div className="card">
            <div>
                <div className="card-image">
                    <figure className="image is-648x648">
                        <img src="" alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-648x648">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">Tic Tac Toe</p>
                            <p className="subtitle is-6">@reactApp</p>
                        </div>
                    </div>
                    <div className="content">
                        This is a simple Tic Tac Toe game built with React. It was built as part of the React tutorial.
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;