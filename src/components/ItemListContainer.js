// src/components/ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const products = [
  { id: 1, category: 'abarrotes', name: 'Arroz' },
  { id: 2, category: 'limpieza', name: 'Detergente' },
  { id: 3, category: 'confites', name: 'Chocolates' },
  { id: 4, category: 'abarrotes', name: 'Lentejas' },
];

function ItemListContainer() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Simular una llamada a API con promesa
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter((product) => product.category === categoryId));
        } else {
          resolve(products);
        }
      }, 1000); // Simulación de un retraso de 1 segundo
    });

    fetchProducts.then((result) => {
      console.log("Filtered Products:", result); // Verificar en la consola
      setFilteredProducts(result);
    });
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : 'Todos los Productos'}</h2>
      <ItemList items={filteredProducts} />
    </div>
  );
}

export default ItemListContainer;
