//no sabia bien por que en las clases practicas usaban ".jsx" en lugar de ".js" y no quise arriesgarme a algun error
//agradecería si me aclara la duda
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Tienda</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Novedades</a></li>
        <li><a href="#abarrotes">Abarrotes</a></li>
        <li><a href="#limpieza">Limpieza</a></li>
        <li><a href="#confites">Confites</a></li>
      </ul>
      <div className="navbar-cart">
        <span>🛒</span>
        <span>(0)</span> {/* Aquí podrías mostrar el número de productos en el carrito */}
      </div>
    </nav>
  );
}

export default Navbar;
