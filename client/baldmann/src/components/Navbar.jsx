

import React, { useState } from "react";
import { HashLink } from "react-router-hash-link"; // Use HashLink for smooth scrolling
import './Navbar.css';
import logo from './logo-yellow-final.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="main-nav">
            {/* Logo Section */}
            <div className="logo">
                <img src={logo} alt="BaldMann Logo" />
                <p className="company-name">BaldMann</p>
            </div>

            {/* Menu Links */}
            <div className={`menu-link ${isMobileMenuOpen ? "mobile-menu-link" : ""}`}>
                <ul>
                    <li>
                        <HashLink 
                            smooth 
                            to="/#hero" 
                            onClick={closeMobileMenu}
                        >
                            Home
                        </HashLink>
                    </li>
                    <li>
                    <Link to="/learn" onClick={closeMobileMenu}>
                        Learn
                    </Link>
                    </li>
                    <li>
                        <HashLink 
                            smooth 
                            to="/#model" 
                            onClick={closeMobileMenu}
                        >
                            Model
                        </HashLink>
                    </li>
                    <li>
                    <Link to="https://www.baldgame.xyz/" onClick={closeMobileMenu}>
                        Brain Game
                    </Link>
                    </li>
                    <li>
                    <Link to="/baldsphere" onClick={closeMobileMenu}>
                        BaldSphere
                    </Link>
                    </li>
                    
                    <li>
                        <HashLink 
                            smooth 
                            to="/#featured" 
                            onClick={closeMobileMenu}
                        >
                            Blogs
                        </HashLink>
                    </li>

                    <li>
                    <Link to="/team" onClick={closeMobileMenu}>
                        Our Team
                    </Link>
                    </li>
                    
                    {/* <li>
                        <HashLink 
                            smooth 
                            to="/#contact" 
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </HashLink>
                    </li> */}
                </ul>
            </div>

            {/* Hamburger Menu Icon */}
            <div 
                className="hamburger-menu" 
                onClick={toggleMobileMenu} 
                aria-label="Toggle menu"
            >
                <GiHamburgerMenu />
            </div>
        </nav>
    );
};

export default Navbar;
