import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Mi E-Commerce</Link>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Novedades</Link>
        <Link to="/category/abarrote" className="nav-link">Abarrotes</Link>
        <Link to="/category/confites" className="nav-link">Confites</Link>
        <Link to="/category/limpieza" className="nav-link">Limpieza</Link>
      </div>
    </nav>
  );
};

export default NavBar;
