import React from "react";
import profilePicture from '../images/Profilepic.jpg';
import "./Nav.css";

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-menu">
                    <a className="navbar-item active">
                        <h1> Sehrish Khan </h1>
                    </a>
                </div>

                <div id="navbar" className="navbar-menu">
                    <div className="navbar-start">
                        <a
                            href="/aboutme"
                            className={currentPage === 'AboutMe' ? 'navbar-item active' : 'navbar-item'}
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange('AboutMe');
                            }}
                        >
                            About Me
                        </a>

                        <a
                            href="/contact"
                            className={currentPage === 'Contact' ? 'navbar-item active' : 'navbar-item'}
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange('Contact');
                            }}
                        >
                            Contact
                        </a>

                        <a
                            href='/portfolio'
                            className={currentPage === 'Portfolio' ? 'navbar-item active' : 'navbar-item'}
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange('Portfolio');
                            }}
                        >
                            Portfolio
                        </a>
                        
                        <a
                            href='/resume'
                            className={currentPage === 'Resume' ? 'navbar-item active' : 'navbar-item'}
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange('Resume');
                            }}
                        >
                            Resume
                        </a>

                    </div>
                </div>
            </nav>
        </div>
    );
};