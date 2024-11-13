import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1><Link to="/">Mi Tienda</Link></h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/category/novedades">Novedades</Link></li>
        <li><Link to="/category/abarrotes">Abarrotes</Link></li>
        <li><Link to="/category/limpieza">Limpieza</Link></li>
        <li><Link to="/category/confites">Confites</Link></li>
      </ul>
      <div className="navbar-cart">
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-notification">3</span> {/* Ejemplo de notificación */}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
