// src/components/CatalogoPresentador.jsx
import React from 'react';

function CatalogoPresentador({ productos }) {
  return (
    <div className="catalogo">
      <h2>Nuestro Catálogo</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogoPresentador;
