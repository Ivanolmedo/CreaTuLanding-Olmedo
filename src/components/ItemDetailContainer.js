import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Asegúrate de tener axios instalado
import ItemDetail from './ItemDetail';

// Simulación de productos locales con imágenes
const products = [
  { id: 1, name: 'Arroz', description: 'Arroz blanco de 1kg', price: 15, image: '/images/arroz.jpg' },
  { id: 2, name: 'Detergente', description: 'Detergente líquido de 500ml', price: 25, image: '/images/detergente.jpg' },
  { id: 3, name: 'Chocolates', description: 'Caja de chocolates premium', price: 50, image: '/images/chocolates.jpg' },
  { id: 4, name: 'Lentejas', description: 'Paquete de lentejas 500g', price: 10, image: '/images/lentejas.jpg' },
];

function ItemDetailContainer() {
  const { id } = useParams(); // Obtenemos el id de la URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setError(false); // Reinicia el estado de error
        const foundProduct = products.find((product) => product.id === parseInt(id)); // Buscamos en la lista local
        if (foundProduct) {
          setProduct(foundProduct); // Asignamos el producto encontrado
        } else {
          // Si no se encuentra en la lista local, simulamos una petición a una API
          const response = await axios.get(`https://dummyjson.com/products/${id}`);
          setProduct({
            id: response.data.id,
            name: response.data.title,
            description: response.data.description,
            price: response.data.price,
            image: response.data.thumbnail || '/images/default.jpg', // Imagen por defecto si no hay en la API
          });
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        setError(true);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <p>Error al cargar el producto. Intenta de nuevo más tarde.</p>;
  }

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
