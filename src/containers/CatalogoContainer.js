
import React, { useState, useEffect } from 'react';
import CatalogoPresentador from '../components/CatalogoPresentador';

function CatalogoContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const response = await fetch('/path/to/api/productos');
      const data = await response.json();
      setProductos(data);
    };
    obtenerProductos();
  }, []);

  return <CatalogoPresentador productos={productos} />;
}

export default CatalogoContainer;
