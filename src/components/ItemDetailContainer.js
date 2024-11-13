// src/components/ItemDetailContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const products = [
  { id: 1, name: 'Arroz', description: 'Arroz blanco de 1kg', price: 15 },
  { id: 2, name: 'Detergente', description: 'Detergente líquido de 500ml', price: 25 },
  { id: 3, name: 'Chocolates', description: 'Caja de chocolates premium', price: 50 },
  { id: 4, name: 'Lentejas', description: 'Paquete de lentejas 500g', price: 10 },
];

function ItemDetailContainer() {
  const { id } = useParams(); // Obtenemos el id de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulación de obtener un producto con una promesa
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = products.find((product) => product.id === parseInt(id));
        resolve(foundProduct);
      }, 1000); // Simulamos un retraso
    });

    fetchProduct.then((result) => {
      setProduct(result); // Establecemos el producto en el estado
    });
  }, [id]);

  if (!product) {
    return <p>Cargando...</p>; // Mensaje mientras se carga el producto
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
