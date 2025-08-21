import React from "react";
import "../../styles/Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="site-footer">
            {/* <img className="tree" src="/images/bg-components/footer2.png" />
            <img className="wave" src="/images/bg-components/footer.png" /> */}
            <div className="footer-top custom-container">
                {/* Social (cột trái) */}
                <ul className="social">
                    <li>
                        <a href="#" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>

                {/* Lưới cột nội dung */}
                <div className="footer-cols">
                    {/* <div className="fcol">
                        <h5>Pages</h5>
                        <ul>
                            <li className="active">Home</li>
                            <li>Info</li>
                            <li>Shop</li>
                            <li>TOS</li>
                        </ul>
                    </div> */}
                    <div className="fcol">
                        <h5>Pages</h5>
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} end>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/info" className={({ isActive }) => (isActive ? "active" : "")}>
                                    Info
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tos" className={({ isActive }) => (isActive ? "active" : "")}>
                                    TOS
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="fcol">
                        <h5>Platform</h5>
                        <ul>
                            <li>Android</li>
                            <li>iOS</li>
                            <li>Windows</li>
                            <li>Mac OS</li>
                        </ul>
                    </div>

                    <div className="fcol">
                        <h5>Support</h5>
                        <ul>
                            <li>Support request</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="fcol subscribe">
                        <h5>Subscribe</h5>
                        <div className="sub-input">
                            <input type="email" placeholder="Enter your email" />
                            <button aria-label="Send">➤</button>
                        </div>
                        <p className="hint">
                            Join our newsletter to stay up to date on features and releases.
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-divider custom-container" />

            <div className="footer-bottom custom-container">
                <div className="brand">JUNIPER</div>
                <button className="getnow">GET NOW</button>
            </div>
        </footer>
    );
}
