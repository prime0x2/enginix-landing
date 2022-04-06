import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">
                    <img src="/assets/logo.svg" alt="" />
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
            </div>
        </nav>
    );
};

export default Navbar;