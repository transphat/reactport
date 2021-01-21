import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Dung Tran
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>

          <li className="nav-item nav-link">
            <a rel="noreferrer" target="_blank" href="https://docs.google.com/document/d/1WT_H6aycH9udr-gyIE9HiKMgSSOKIEEKeb3W9Ec5pTA/edit?usp=sharing">Resume</a>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Header;