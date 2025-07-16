import React from 'react';
import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About Section */}
                <div className="footer-about">
                    <h4>About Us</h4>
                    <p>
                        Pioneering a future where the mind meets technology. We’re on a mission to bridge the gap between the human brain and the digital world.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                            {/* <HashLink smooth to="/#about">
                                About Us
                            </HashLink> */}
                            <Link to="/team">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <HashLink smooth to="/#featured">
                                Blog
                            </HashLink>
                        </li>
                        <li>
                            <a href="https://forms.gle/i9QdXEVgzSx9GdW19" target="_blank" rel="noopener noreferrer">
                                Join Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>
                        Email: <a href="mailto:baldmann24@gmail.com">baldmann24@gmail.com</a>
                    </p>
                    <div className="footer-social">
                        <p className="connect-linkedIn">Connect with us on LinkedIn:</p>
                        <a
                            href="https://www.linkedin.com/company/baldmann/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>© 2025 BaldMann. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
