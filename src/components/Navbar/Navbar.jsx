import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className="navbar__container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <Link to="/">
                        <img src="/images/logo.svg" alt="" />
                    </Link>
                </div>
                <div
                    className={
                        navbarOpen ? "navbar__links active" : "navbar__links"
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
                <div
                    className={
                        navbarOpen ? "navbar__button active" : "navbar__button"
                    }
                >
                    <button>Get a Quote</button>
                </div>
            </nav>

            <div className="navbar__toggle">
                <button onClick={() => setNavbarOpen(!navbarOpen)}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
