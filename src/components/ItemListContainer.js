import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Mapeo entre categorías personalizadas y las de la API
const categoriesMap = {
  abarrotes: ['dairy', 'grocery', 'food'],
  limpieza: ['cleaning', 'detergent', 'soap'],
  confites: ['candy', 'snack', 'sweet'],
};

const ItemListContainer = () => {
  const { category } = useParams(); // Captura la categoría de la URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Activamos el estado de carga
        const response = await axios.get('https://dummyjson.com/products');

        if (category) {
          // Filtrado por categoría personalizada
          const mappedCategories = categoriesMap[category.toLowerCase()] || [];
          const filteredProducts = response.data.products.filter((product) =>
            mappedCategories.includes(product.category.toLowerCase())
          );
          setProducts(filteredProducts);
        } else {
          // Mostrar todos los productos si no hay categoría
          setProducts(response.data.products);
        }
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false); // Desactivamos el estado de carga
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h2>{category ? category.toUpperCase() : 'Novedades'}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              width: '200px',
              textAlign: 'center',
            }}
          >
            <h4>{product.title}</h4>
            <img
              src={product.thumbnail || '/images/default.jpg'}
              alt={product.title}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <p>{product.description}</p>
            <p><strong>Precio: ${product.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

