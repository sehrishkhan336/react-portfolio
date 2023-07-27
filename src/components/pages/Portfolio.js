import React from 'react';
import './Pages.css';
import ticTacToeAnimation from '../../images/tic-tac-toe.gif';
import weatherAppAnimation from '../../images/weather-app.gif';
import schedulerAppAnimation from '../../images/scheduler-app.gif';
import employeeDatabaseAnimation from '../../images/employee-database.gif';
import jateAnimation from '../../images/jate.gif';
import socialMediaAppAnimation from '../../images/social-media-app.gif';

const Portfolio = () => {
    return (
        <div className="card">
            <h2 className="title">Portfolio</h2>
            <div className=" content project-grid">

                <div className="project">
                    <div className="card-content">
                        <div className="media">
                            <div className="style-image">
                                <figure className="gameanime">
                                    <img src={weatherAppAnimation} alt="weather Forecast" />
                                </figure>
                            </div>
                        </div>
                        <div className="project-detail is-size-7">
                            <p className="title is-4">Weather Forecast</p>
                            <p className="subtitle is-6">@Bootstrap Library</p>
                        
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="card-content">
                        <div className="media">
                            <div>
                                <figure className="">
                                    <img src={ticTacToeAnimation} alt="tic-tac-toe" />
                                </figure>
                            </div>
                        </div>
                        <div className="project-detail is-size-7">
                            <p className="title is-4">Tic Tac Toe</p>
                            <p className="subtitle is-6">@reactApp</p>
                            
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="card-content">
                        <div className="media">
                            <div>
                                <figure className="gameanime">
                                    <img src={schedulerAppAnimation} alt="Daily Scheduler" />
                                </figure>
                            </div>
                        </div>
                        <div className="project-detail is-size-7">
                            <p className="title is-4">Daily Scheduler</p>
                            <p className="subtitle is-6">@javaScript</p>
                           
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="card-content">
                        <div className="media">
                            <div>
                                <figure className="gameanime">
                                    <img src={employeeDatabaseAnimation} alt="Employee Database" />
                                </figure>
                            </div>
                        </div>
                        <div className="project-detail is-size-7">
                            <p className="title is-4">Employee Database</p>
                            <p className="subtitle is-6">@MySQL</p>
                           
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="card-content">
                        <div className="media">
                            <div>
                                <figure className="gameanime">
                                    <img src={jateAnimation} alt="Jate" />
                                </figure>
                            </div>
                        </div>
                        <div className="project-detail is-size-7">
                            <p className="title is-4">Employee Database App</p>
                            <p className="subtitle is-6">@PWB</p>
                            
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="card-content">
                        <div className="media">
                            <div>
                                <figure className="gameanime">
                                    <img src={socialMediaAppAnimation} alt="Social Media App" />
                                </figure>
                            </div>
                        </div>
                        <div className="project-detail is-size-7">
                            <p className="title is-4">Social Media Backend App</p>
                            <p className="subtitle is-6">@Mongoose NoSQL</p>
                           
                        </div>
                    </div>
                </div>

            </div>


        </div >
    );
};

export default Portfolio;