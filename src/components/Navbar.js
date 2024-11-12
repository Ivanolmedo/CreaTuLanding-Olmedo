import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><h1>Tu Tienda Online</h1></Link> {/* Nombre de la tienda */}
      </div>
      <ul className="navbar-links">
        <li><Link to="/categoria/novedades">Novedades</Link></li>
        <li><Link to="/categoria/abarrotes">Abarrotes</Link></li>
        <li><Link to="/categoria/limpieza">Limpieza</Link></li>
        <li><Link to="/categoria/confites">Confites</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

