import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <h1>Mi Tienda</h1>
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">
          Novedades
        </NavLink>
        <NavLink to="/category/abarrotes" className="nav-link">
          Abarrotes
        </NavLink>
        <NavLink to="/category/limpieza" className="nav-link">
          Limpieza
        </NavLink>
        <NavLink to="/category/confites" className="nav-link">
          Confites
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          <CartWidget />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

