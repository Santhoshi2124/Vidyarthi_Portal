import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/internship">Internship</Link></li>
        <li><Link to="/training">Training</Link></li>
        <li><Link to="/mentorship">Mentorship</Link></li>
        <li><Link to="/career">Career Guidance</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
