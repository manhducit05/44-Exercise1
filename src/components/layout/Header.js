import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Layout.css";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-xxl">
                    {/* Logo */}
                    <NavLink className="navbar-brand fw-bold text-white" to="/">JUNIPER</NavLink>

                    {/* Toggle cho mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNav"
                        aria-controls="mainNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu */}
                    <div className="collapse navbar-collapse justify-content-end" id="mainNav">
                        <ul className="navbar-nav gap-3 align-items-center">
                            <li className="nav-item">
                                <NavLink to="/" end className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/info" className="nav-link">Info</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/shop" className="nav-link">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/tos" className="nav-link">TOS</NavLink>
                            </li>
                            {/* Nút kính lúp */}
                            <li className="nav-item">
                                <button className="btn btn-link nav-link search-btn">🔍</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
