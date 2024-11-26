import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/novedades" className="navbar-logo">
        <h1>Mi Tienda</h1>
      </Link>
      <ul className="navbar-links">
        <li><Link to="/novedades">Novedades</Link></li>
        <li><Link to="/category/abarrotes">Abarrotes</Link></li>
        <li><Link to="/category/limpieza">Limpieza</Link></li>
        <li><Link to="/category/confites">Confites</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
