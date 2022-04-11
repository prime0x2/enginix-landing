import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Menubar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className="navbar__container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <Link to="/">
                        <img src="/images/logo.svg" alt="" />
                    </Link>
                </div>

                <div className="navbar__links">
                    <ul>
                        <li className="nav-links">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-links">
                            <Link to="/">Services</Link>
                        </li>
                        <li className="nav-links">
                            <Link to="/">Portfolio</Link>
                        </li>
                        <li className="nav-links">
                            <Link to="/">About Us</Link>
                        </li>
                        <li className="nav-links">
                            <Link to="/">Team</Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar__button">
                    <button>Get a Quote</button>

                    <div className="navbar__toggle">
                        <button onClick={() => setNavbarOpen(!navbarOpen)}>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>
            </nav>
            <div
                className={
                    navbarOpen ? "toggle__links active" : "toggle__links"
                }
            >
                <ul>
                    <li className="nav-links">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/">Services</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/">Portfolio</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/">About Us</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/">Team</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menubar;
