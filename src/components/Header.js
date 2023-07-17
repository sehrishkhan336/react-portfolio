import React from "react";

import "./Header.css";

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className="header">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-menu">
                    <a className="navbar-item active">
                        <h1 className="title"> Sehrish Khan </h1>
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
                            Portfolioz
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