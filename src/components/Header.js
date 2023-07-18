import React from "react";
import "./Header.css";

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className="header is-size-5 has-text-primary">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-menu">
                    <a className="navbar-item active" href="/">
                        <h1 className="title has-text-dark">Sehrish Khan</h1>
                    </a>
                </div>

                <div id="nav" className="navbar-menu has-text-dark">
                    <div className="navbar-start">
                        <a
                            href="/aboutme"
                            className={
                                currentPage === "AboutMe"
                                    ? "navbar-item active has-text-dark"
                                    : "navbar-item has-text-dark"
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange("AboutMe");
                            }}
                        >
                            About Me
                        </a>

                        <a
                            href="/contact"
                            className={
                                currentPage === "Contact"
                                    ? "navbar-item active has-text-dark"
                                    : "navbar-item has-text-dark"
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange("Contact");
                            }}
                        >
                            Contact
                        </a>

                        <a
                            href="/portfolio"
                            className={
                                currentPage === "Portfolio"
                                    ? "navbar-item active has-text-dark"
                                    : "navbar-item has-text-dark"
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange("Portfolio");
                            }}
                        >
                            Portfolio
                        </a>

                        <a
                            href="/resume"
                            className={
                                currentPage === "Resume"
                                    ? "navbar-item active has-text-dark"
                                    : "navbar-item has-text-dark"
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange("Resume");
                            }}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
