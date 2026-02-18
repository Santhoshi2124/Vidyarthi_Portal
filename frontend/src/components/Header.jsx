import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="auth-links">
        <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
      </div>
    </header>
  );
}

export default Header;
